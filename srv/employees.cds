using db.emp.v1 as db from '../db/schema';

service EmployeesService {
    @odata.draft.enabled
    entity Employees  as projection on db.Employees;
}
