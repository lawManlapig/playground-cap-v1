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
                Value: contactEmail,
            },
            {
                $Type: 'UI.DataField',
                Value: content,
            },
            {
                $Type      : 'UI.DataField',
                Value      : status,
                Criticality: statusCriticality
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
            $Type             : 'UI.DataField',
            Value             : firstName,
            @HTML5.CssDefaults: {width: '7rem'}
        },
        {
            $Type             : 'UI.DataField',
            Value             : lastName,
            @HTML5.CssDefaults: {width: '7rem'}
        },
        {
            $Type             : 'UI.DataField',
            Value             : contactEmail,
            @HTML5.CssDefaults: {width: '15rem'}
        },
        {
            $Type             : 'UI.DataField',
            Value             : content,
            @HTML5.CssDefaults: {width: '18rem'}
        },
        {
            $Type             : 'UI.DataField',
            Value             : status,
            Criticality       : statusCriticality,
            @HTML5.CssDefaults: {width: '8rem'}
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'ApplicantsService.EntityContainer/Test',
            Label : 'Test',
        },
    ],
);
