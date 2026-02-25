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
    startDate : Date;


}

entity Applicants : cuid, name {
    //Adding attachment field(mandatory lahat yan)
    filename : String      @(UI.Hidden);
    fileType : String      @(
        Core.IsMediaType,
        UI.Hidden
    );
    content  : LargeBinary @Core: {
        MediaType                  : fileType,
        ContentDisposition.Filename: fileName,
    };
}
