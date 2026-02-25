using ApplicantsService as service from '../services';

annotate service.Applicants with @(
    UI.FieldGroup #MainDetails: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: firstName,
            },
            {
                $Type: 'UI.DataField',
                Value: lastName,
            },
            {
                $Type: 'UI.DataField',
                Value: content,
            },
        ],
    },
    UI.Facets                 : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'MainDetails',
        Label : 'General Information',
        Target: '@UI.FieldGroup#MainDetails',
    }, ],
    UI.LineItem               : [
        {
            $Type: 'UI.DataField',
            Value: firstName,
        },
        {
            $Type: 'UI.DataField',
            Value: lastName,
        },
        {
            $Type: 'UI.DataField',
            Value: content,
        },
    ],
);
