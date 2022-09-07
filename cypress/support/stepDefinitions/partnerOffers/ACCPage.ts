/// <reference types="Cypress" />

import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import partnerOffersPage from '../../pageObjects/partnerOffers/ACC.po';

var offerTitle, offerDescription;

When(`Entering the Title Description and Time`, () => {
	offerTitle = `Test-Accl-UI-Automation ${(Math.random() + 1)
		.toString(36)
		.substring(2)}`;
	offerDescription = `Test-Accl-UI-Automation Description ${(
		Math.random() + 1
	)
		.toString(36)
		.substring(2)}`;
	// cy.get('.upload-image-container > .image-preview')
	partnerOffersPage.partnerOffersTitle.click();
	partnerOffersPage.partnerOffersTitle.type(offerTitle);
	partnerOffersPage.partnerOffersDescription.click();
	cy.get('.new-preview-btn > .pull-right').should('be.visible');
	partnerOffersPage.partnerOffersDescription.type(offerDescription);
	partnerOffersPage.partnerOffersTimeRequiredHours.click();
	partnerOffersPage.partnerOffersTimeRequiredHours.type('3');
	cy.get('.text_block');
});

When(`Navigate to the map your Offer to cx cloud option`, () => {
	partnerOffersPage.mapYourOfferToCxCloud.click();
});

When(`Selecting the CX cloud options`, () => {
	partnerOffersPage.successTrackDropdown.click();
	partnerOffersPage.campusNetworkOption.click();
	partnerOffersPage.useCaseDropdown.click();
	partnerOffersPage.campusNetworkAssuranceOption.click();
	partnerOffersPage.pitStopDropdown.click();
	partnerOffersPage.implementOption.click();
	partnerOffersPage.checklistDropdown.click();
	partnerOffersPage.checklistOptions.each((ele, index, list) => {
		cy.wrap(ele).click();
	});
});

When(`Publishing the Accelerator`, () => {
	partnerOffersPage.publishToCXCloudButton.click({ force: true });
	//  partnerOffersPage.publishToCXCloudPopUpButton.click({ force: true })
});

And(`Confirm the publish`, () => {
	partnerOffersPage.confirmPublish.click();
});

Then(`Validate the ACC offer status`, () => {
	partnerOffersPage.offerStatusLabel.contains('Published');
});

And('Close the 360 degree view', () => {
	partnerOffersPage.close360DegreeView.click();
});

When(`Search for the created ACC offer`, () => {
	partnerOffersPage.searchField.scrollIntoView();
	partnerOffersPage.searchField.click().type(offerTitle).type('{enter}');
});

When(`Validate the Accelerator is displayed`, () => {
	partnerOffersPage.partnerOffersList.contains(offerTitle);
});

When(`Click on the search Accelerator`, () => {
	partnerOffersPage.partnerOffersList.click();
});

When(`Unpublish the Accelerator`, () => {
	partnerOffersPage.unpublishButton.click();
	partnerOffersPage.unpublishContinueButton.click({ force: true });
});

When(`Delete the Accelerator`, () => {
	partnerOffersPage.accelaratorOfferdeleteButton.click();
	partnerOffersPage.unpublishContinueButton.click({ force: true });
});

When(`Verify the Accelerator deleted successfully`, () => {
	partnerOffersPage.searchField.scrollIntoView();
	partnerOffersPage.searchField.clear();
	partnerOffersPage.searchField.click().type(offerTitle).type('{enter}');
	partnerOffersPage.partnerAssetsNotFound.should('be.visible');
});
