sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"applicantsroster/test/integration/pages/ApplicantsList",
	"applicantsroster/test/integration/pages/ApplicantsObjectPage"
], function (JourneyRunner, ApplicantsList, ApplicantsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('applicantsroster') + '/test/flp.html#app-preview',
        pages: {
			onTheApplicantsList: ApplicantsList,
			onTheApplicantsObjectPage: ApplicantsObjectPage
        },
        async: true
    });

    return runner;
});

