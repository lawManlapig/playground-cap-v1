using EmployeesService as service from '../../srv/service';

annotate service.Employees with @(
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
                Value: position,
            },
            {
                $Type: 'UI.DataField',
                Value: salary,
            },
            {
                $Type: 'UI.DataField',
                Value: currency_code,
            },
            {
                $Type: 'UI.DataField',
                Value: startDate,
            },
        // {
        //     $Type: 'UI.DataField',
        //     Value: content,
        // },
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
            Value: position,
        },
        {
            $Type: 'UI.DataField',
            Value: salary,
        },
        {
            $Type: 'UI.DataField',
            Value: currency_code,
        },
        {
            $Type: 'UI.DataField',
            Value: startDate,
        },
    ],
);
