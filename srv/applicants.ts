import * as cds from "@sap/cds";
import { executeHttpRequest } from "@sap-cloud-sdk/http-client";

export class ApplicantsService extends cds.ApplicationService {
  async init() {
    this.after("SAVE", "Applicants", async (req) => {
      let destinationName = "WF-Trigger-API";

      // Build the Payload
      let payload = {
        definitionId: "ap21.bb40653atrial.newapplicant.newApplicantProcess",
        context: {
          parameters: {
            contactEmail: req.contactEmail,
            firstName: req.firstName,
            lastName: req.lastName,
          },
        },
      };

      // Call the WF Trigger API
      const response = await executeHttpRequest(
        { destinationName: destinationName },
        {
          method: "POST",
          data: payload,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 201) {
        req.status = "Submitted";
      }
    });

    // Real-time updates (Drafts)
    this.before("CREATE", "Applicants.drafts", async (req) => {
      req.data.status = "New";

      req.info({
        code: "Information",
        message: "Your application will be submitted once saved. :)",
      });
    });

    this.before("UPDATE", "Applicants.drafts", async (req) => {
      let statusCriticality = 0;
      let draftData = await SELECT.one("")
        .from("ApplicantsService_Applicants_drafts")
        .where({ ID: req.data.ID });

      switch (req.data.status) {
        case "New":
          statusCriticality = 0;
          break;
        case "Rejected":
          statusCriticality = 1;
          break;
        case "Whitelisted":
          statusCriticality = 2;
          break;
        case "Accepted":
          statusCriticality = 3;
          break;
        default:
          break;
      }

      let draftPayload = {
        DRAFTADMINISTRATIVEDATA_DRAFTUUID:
          draftData.DRAFTADMINISTRATIVEDATA_DRAFTUUID,
        ID: req.data.ID,
        STATUSCRITICALITY: statusCriticality,
      };

      // Update the draft table
      await UPDATE("ApplicantsService_Applicants_drafts")
        .set(draftPayload)
        .where({
          ID: req.data.ID,
          DRAFTADMINISTRATIVEDATA_DRAFTUUID:
            draftData.DRAFTADMINISTRATIVEDATA_DRAFTUUID,
        });
    });

    return super.init();
  }
}
