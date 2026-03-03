namespace db.emp.v1;

using {
    cuid,
    managed,
    sap.common.Currencies
} from '@sap/cds/common';

using {name} from './aspects';

entity Employees : cuid, managed, name {
    position  : String;
    salary    : Decimal(8, 2);
    currency  : Association to Currencies;
    email     : String;
    startDate : Date;


}
