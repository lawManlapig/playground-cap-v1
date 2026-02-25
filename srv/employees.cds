using db.emp.v1 as db from '../db/schema';

service EmployeesService {
    @(Capabilities.Deletable: false)
    entity Employees as projection on db.Employees;
}
