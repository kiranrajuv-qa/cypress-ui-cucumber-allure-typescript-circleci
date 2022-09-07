/// <reference types="Cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import WalkMe from '../../pageObjects/partnerInfo/WalkMePage';

When('Navigate on Portal support', () => {
	WalkMe.clickArrowbutton.click();
});

Then('Click on Activate Tour', () => {
	WalkMe.ClickActivateTour.click();
});

Then('Verify the title of WalkMe on Today tab', () => {
	WalkMe.walkMeTitle
		.contains('See your customer portfolio at a glance')
		.should('be.visible');

	WalkMe.walkMeTitle
		.contains('See your customer portfolio at a glance')
		.scrollIntoView();
});

Then('verify the button of walkme on Today tab', () => {
	WalkMe.walkMeButton.contains('Next').click();
});

Then('Verify the title of WalkMe on Customer tab', () => {
	cy.waitUntilAngularStable();

	WalkMe.walkMeTitle
		.contains("See your customer's view in CX Cloud")
		.should('be.visible');

	WalkMe.walkMeTitle
		.contains("See your customer's view in CX Cloud")
		.scrollIntoView();
});

Then('verify the button of walkme on Customer tab', () => {
	WalkMe.walkMeButton.contains('Next').click();
});

Then('Verify the title of WalkMe on Partner Offers tab', () => {
	cy.waitUntilAngularStable();

	WalkMe.walkMeTitle
		.contains('Create your own customized offers')
		.should('be.visible');

	WalkMe.walkMeTitle
		.contains('Create your own customized offers')
		.scrollIntoView();
});

Then('verify the button of walkme on Partner Offers tab', () => {
	WalkMe.walkMeTitle
		.contains('Create your own customized offers')
		.scrollIntoView();
	WalkMe.walkMeButton.contains('Next').click();
});

Then('Verify the title of WalkMe on Learning tab', () => {
	cy.waitUntilAngularStable();
	WalkMe.walkMeTitle
		.contains('Grow your success practice with a click')
		.should('be.visible');
});

Then('verify the button of walkme on Learning tab', () => {
	WalkMe.walkMeTitle
		.contains('Grow your success practice with a click')
		.scrollIntoView();

	WalkMe.walkMeButton.contains('Next').click();
});

Then('Verify the title of WalkMe on Admin settings tab', () => {
	cy.waitUntilAngularStable();
	WalkMe.walkMeTitle
		.contains('Manage settings and get help here')
		.should('be.visible');
});

Then('verify the button of walkme on Admin settings tab', () => {
	WalkMe.walkMeBlueButton.click();
});
