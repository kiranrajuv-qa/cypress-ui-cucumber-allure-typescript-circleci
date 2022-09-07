/// <reference types="Cypress" />

import {
	And,
	Before,
	Given,
	Then,
	When,
} from '@badeball/cypress-cucumber-preprocessor';
import aTXPage from '../../pageObjects/partnerOffers/ATX.po';

var offerTitle, offerDescription;

Before({ tags: '@partnerOffers' }, () => {
	cy.fixture('testdata/partnerOffers/messages').then(function (data) {
		this.data = data;
	});
});

When(`Entering the Title Description and Duration`, () => {
	offerTitle = `Test-ATX-UI-Automation ${(Math.random() + 1)
		.toString(36)
		.substring(2)}`;
	offerDescription = `Test-ATX-UI-Automation Description ${(Math.random() + 1)
		.toString(36)
		.substring(2)}`;
	aTXPage.atxTitle.click();
	aTXPage.atxTitle.type(offerTitle);
	aTXPage.atxDescription.click();
	cy.get('.new-preview-btn > .pull-right').should('be.visible');
	aTXPage.atxDescription.type(offerDescription);
	aTXPage.atxDuration.click();
	aTXPage.atxDuration.type('30');
	cy.get('.handout_filed > .form-group__text > .cxui-label').click();
});

When(`Navigate to the map your Offer to cx cloud option`, () => {
	aTXPage.mapYourOfferToCxCloud.click();
});

When(`Selecting the CX cloud options`, () => {
	aTXPage.successTrackDropdown.click();
	aTXPage.campusNetworkOption.click();
	aTXPage.useCaseDropdown.click();
	aTXPage.campusNetworkAssuranceOption.click();
	aTXPage.pitStopDropdown.click();
	aTXPage.implementOption.click();
	aTXPage.checklistDropdown.click();
	aTXPage.checklistOptions.each((ele, index, list) => {
		cy.wrap(ele).click({ multiple: true });
	});
});

When(`Selecting the customers`, () => {
	aTXPage.selectCustomers.click();
});

When(`Navigate to the Schedule Sessions`, () => {
	aTXPage.scheduleSessions.click();
});

When(`Schedule the session`, () => {
	let d = new Date();
	const offset = d.getTimezoneOffset();
	d = new Date(d.getTime() - offset * 60 * 1000);
	// let myDate = d.toISOString().split('T')[0];
	//    askTheExpertsPage.setSessionDate.click()
	//    askTheExpertsPage.setSessionDate.clear()
	//    askTheExpertsPage.setSessionDate.type('Wed 30 Mar, 2022')
	cy.get('.cxui-datepicker__input-field > .cxui-input').click();

	cy.get(':nth-child(35) > .date-item').click();

	aTXPage.setSessionTime.click();
	aTXPage.setTimeZone.click();
	aTXPage.setPresenter.type('test name');
	aTXPage.selectCustomers.click();
});

When(`Navigate to the Schedule Sessions`, () => {
	aTXPage.scheduleSessions.click();
});

And(`Validate the message for session start date`, function () {
	cy.get('.provision-resource-input__validation--stacked-form').contains(
		this.data.SessionStartDate,
	);
});

When(`Publishing the Ask the Experts`, () => {
	aTXPage.publishToCXCloudButton.click({ force: true });
	//    aTXPage.publishToCXCloudPopUpButton.click({ force: true })
});

And(`Confirm the publish`, () => {
	aTXPage.confirmPublish.click();
});

Then(`Validate the ATX offer status`, () => {
	aTXPage.offerStatusLabel.contains('Published');
});

And('Close the 360 degree view', () => {
	aTXPage.close360DegreeView.click();
});

When(`Search for the created ATX offer`, () => {
	aTXPage.searchField.scrollIntoView();
	aTXPage.searchField.click().type(offerTitle).type('{enter}');
});

When(`Validate Ask The Experts is displayed`, () => {
	aTXPage.partnerOffersList.contains(offerTitle);
});

Given(`Click on the search Ask the Experts`, () => {
	aTXPage.partnerOffersList.click();
});

Then(`Unpublish the Ask the Experts`, () => {
	aTXPage.unpublishButton.click();
	aTXPage.unpublishContinueButton.click({ force: true });
});

Then(`Delete the Ask the Experts`, () => {
	aTXPage.atxdeleteButton.click();
	aTXPage.unpublishContinueButton.click({ force: true });
});

And(`Verify the Ask the Experts deleted successfully`, () => {
	aTXPage.searchField.scrollIntoView();
	aTXPage.searchField.clear();
	aTXPage.searchField.click().type(offerTitle).type('{enter}');
	aTXPage.partnerAssetsNotFound.should('be.visible');
});
