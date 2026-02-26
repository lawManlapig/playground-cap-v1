using ApplicantsService as service from '../services';

// Side Effects
annotate service.Applicants @(Common: {SideEffects #StatusChanged: {
    SourceProperties: ['status'],
    TargetProperties: ['statusCriticality']
}});
