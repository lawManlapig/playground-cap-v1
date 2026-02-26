import * as cds from "@sap/cds";

export class ApplicantsService extends cds.ApplicationService {
  async init() {
    // Real-time updates (Drafts)
    this.before(
      "UPDATE",
      "Applicants.drafts",
      async (req) => {
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
        await UPDATE("ApplicantsService_Applicants_drafts").set(draftPayload).where({
          ID: req.data.ID,
          DRAFTADMINISTRATIVEDATA_DRAFTUUID:
            draftData.DRAFTADMINISTRATIVEDATA_DRAFTUUID,
        });
      },
    );

    return super.init();
  }
}
