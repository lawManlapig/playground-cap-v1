using ApplicantsService as service from '../../srv/service';

annotate service.Applicants with {
    // Read-only
    status            @(readonly);

    // Hidden fields
    ID                @(UI.Hidden);
    fileName          @(UI.Hidden);
    fileType          @(UI.Hidden);
    statusCriticality @(UI.Hidden);
};
