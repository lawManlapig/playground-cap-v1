namespace db.appl.v1;

using {cuid} from '@sap/cds/common';
using {name} from './aspects';

entity Applicants : cuid, name {
    contactEmail : String;
    //Adding attachment field(mandatory lahat yan)
    fileName     : String      @(UI.Hidden);
    fileType     : String      @(
        Core.IsMediaType,
        UI.Hidden
    );
    content      : LargeBinary @Core: {
        MediaType                  : fileType,
        ContentDisposition.Filename: fileName,
    };
    status: String;
    statusCriticality: Integer;
}
