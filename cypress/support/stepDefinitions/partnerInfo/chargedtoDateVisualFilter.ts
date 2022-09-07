/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import app from '../../pageObjects/app.po';
import ciscoPlusContractsTable from '../../pageObjects/partnerInfo/ciscoPlusContractsTable';

Then(
	'Verify the Charged to Date Visual Filter is shown in the Cisco+ Contract',
	() => {
		app.customersFacet.click();
		ciscoPlusContractsTable.hCaaSContractsTab.click();
		ciscoPlusContractsTable.chargedtoDateVF.should('be.visible');
	},
);

Then('Verify <10K Subscription label', () => {
	ciscoPlusContractsTable.chargedtoDateL10K.should('be.visible');
});

Then('Verify 10K+ Subscription label', () => {
	ciscoPlusContractsTable.chargedtoDateG10K.should('be.visible');
});

Then('Verify 50K+ Subscription label', () => {
	ciscoPlusContractsTable.chargedtoDateG50K.should('be.visible');
});

Then('Verify 100K+ Subscription label', () => {
	ciscoPlusContractsTable.chargedtoDateG100K.should('be.visible');
});
