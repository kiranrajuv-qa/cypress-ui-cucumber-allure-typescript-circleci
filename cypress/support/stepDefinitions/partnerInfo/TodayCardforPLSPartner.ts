/// <reference types="Cypress" />

import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import PartnerInfoPLSTodaysViewPage from '../../pageObjects/partnerInfo/TodaysViewPLSCard.po';

Then(`Become a PLS Partner Status is Shown`, () => {
	PartnerInfoPLSTodaysViewPage.partnerInfoBecomePLSPartner.contains(
		'Become a PLS Partner',
	);
});

Then(
	`Access CX Cloud data through APIs Publish your own Ask the Experts and Accelerators is Shown`,
	() => {
		PartnerInfoPLSTodaysViewPage.partnerInfoStaticTextNonPLS.contains(
			'Access CX Cloud',
		);
	},
);

When(`Verify the Learn More Link`, () => {
	PartnerInfoPLSTodaysViewPage.partnerInfoLearnMoreLink.contains(
		'Learn More',
	);
});

And(`Click on Learn More Link`, () => {
	PartnerInfoPLSTodaysViewPage.partnerInfoLearnMoreLink.click;
});

Then(`Verify Learn More link opens in the new tab for Non PLS Partner`, () => {
	PartnerInfoPLSTodaysViewPage.partnerInfoLearnMoreLink.click;
});
