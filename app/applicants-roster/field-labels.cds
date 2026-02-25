using ApplicantsService as service from '../../srv/service';

annotate service.Applicants with {
    firstName @(Common.Label: '{i18n>fname}');
    lastName  @(Common.Label: '{i18n>lname}');
    content   @(Common.Label: '{i18n>rsume}')
};
