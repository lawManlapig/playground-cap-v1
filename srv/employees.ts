import * as cds from "@sap/cds";

export class EmployeesService extends cds.ApplicationService {
  async init() {
    // this.on("processApplication", (req) => {
    //   console.log("test");
    // });

    return super.init();
  }
}
