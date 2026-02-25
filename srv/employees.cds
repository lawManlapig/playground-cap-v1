using db.emp.v1 as db from '../db/schema';

// type resumeDetails {
//     fileName : String;
//     fileType : String;
//     content  : LargeBinary;
// }

service EmployeesService {
    @odata.draft.enabled
    entity Employees  as projection on db.Employees;

    @odata.draft.enabled
    entity Applicants as projection on db.Applicants;
// Unbound Actions
// action processApplication(params: resumeDetails) returns String;
}
