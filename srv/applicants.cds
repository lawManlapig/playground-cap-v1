using db.appl.v1 as db from '../db/schema';

service ApplicantsService {
    @odata.draft.enabled
    entity Applicants as projection on db.Applicants;

    action Test();
}
