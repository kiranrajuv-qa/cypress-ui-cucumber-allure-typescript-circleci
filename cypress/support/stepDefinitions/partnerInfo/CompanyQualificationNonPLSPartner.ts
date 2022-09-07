/// <reference types="Cypress" />

import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import PartnerInfoCompanyQualificationPage from '../../pageObjects/partnerInfo/CompanyQualificationPLSPartner.po';

When(`Navigate to the User Profile`, () => {
	PartnerInfoCompanyQualificationPage.partnerInfoUserProfile.click();
});

And(`Click on Manage Profile`, () => {
	PartnerInfoCompanyQualificationPage.partnerInfoManageProfile.click();
});

And(`Click on Company Qualification tab`, () => {
	PartnerInfoCompanyQualificationPage.partnerInfoCompanyQualification.click();
});

Then(`Verify the Programs Label is not shown for a Non PLS Partner`, () => {
	PartnerInfoCompanyQualificationPage.partnerInfoProgramsLabel.should(
		'not.exist',
	);
});

Then(
	`Verify the Partner Lifecycle Services is not shown for a Non PLS Partner`,
	() => {
		PartnerInfoCompanyQualificationPage.partnerInfoPLSValue.should(
			'not.exist',
		);
	},
);
