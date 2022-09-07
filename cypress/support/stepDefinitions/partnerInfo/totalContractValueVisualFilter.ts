/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import app from '../../pageObjects/app.po';
import ciscoPlusContractsTable from '../../pageObjects/partnerInfo/ciscoPlusContractsTable';

Then(
	'Verify the Total Contract Value Visual Filter is shown in the Cisco+ Contract',
	() => {
		app.customersFacet.click();
		ciscoPlusContractsTable.hCaaSContractsTab.click();
		ciscoPlusContractsTable.totalContractValueVF.should('be.visible');
	},
);

Then('Verify <10K Subscription label', () => {
	ciscoPlusContractsTable.totalContractValueL10K.should('be.visible');
});

Then('Verify 10K+ Subscription label', () => {
	ciscoPlusContractsTable.totalContractValueG10K.should('be.visible');
});

Then('Verify 50K+ Subscription label', () => {
	ciscoPlusContractsTable.totalContractValueG50K.should('be.visible');
});

Then('Verify 100K+ Subscription label', () => {
	ciscoPlusContractsTable.totalContractValueG100K.should('be.visible');
});
