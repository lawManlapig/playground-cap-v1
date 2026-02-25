using EmployeesService as service from '../../srv/service';

annotate service.Employees with {
    firstName @(Common.Label: '{i18n>fname}');
    lastName  @(Common.Label: '{i18n>lname}');
    position  @(Common.Label: '{i18n>postn}');
    salary    @(Common.Label: '{i18n>salry}');
    currency  @(Common.Label: '{i18n>currc}');
    startDate @(Common.Label: '{i18n>sdate}');
};
