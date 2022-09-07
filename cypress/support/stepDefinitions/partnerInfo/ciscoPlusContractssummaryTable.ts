/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import ciscoPlusContractsTable from '../../pageObjects/partnerInfo/ciscoPlusContractsTable';

Then('Verify the Total Contract Value field', () => {
	ciscoPlusContractsTable.hCaaSContractsTab.click();
	ciscoPlusContractsTable.sumTotalContractValue.should('be.visible');
});

Then('Verify the Total Charges for Last Quarter field', () => {
	ciscoPlusContractsTable.sumLastQuarter.should('be.visible');
});

Then('Verify the Total Locations field', () => {
	ciscoPlusContractsTable.sumTotalLocations.should('be.visible');
});

Then('Verify the Manage subscriptions link', () => {
	ciscoPlusContractsTable.manageSubscriptions.should('be.visible');
});

Then('Verify the Manage subscriptions link navigation', () => {
	ciscoPlusContractsTable.nearestExpiration.should('be.visible');
});
