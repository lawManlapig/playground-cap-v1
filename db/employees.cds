namespace db.emp.v1;

using {
    cuid,
    managed,
    sap.common.Currencies
} from '@sap/cds/common';

entity Employees : cuid, managed {
    firstName : String;
    lastName  : String;
    position  : String;
    salary    : Decimal(8, 2);
    currency  : Association to Currencies;
    startDate : Date;
}
