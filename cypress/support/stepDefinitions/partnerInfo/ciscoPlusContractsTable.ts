/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import app from '../../pageObjects/app.po';
import ciscoPlusContractsTable from '../../pageObjects/partnerInfo/ciscoPlusContractsTable';

Then('Verify the End Customer field is shown in Cisco+Contracts table', () => {
	app.customersFacet.click();
	ciscoPlusContractsTable.hCaaSContractsTab.click();
	ciscoPlusContractsTable.endCustomer.should('be.visible');
});

Then('Verify the Offer Domain field is shown in Cisco+Contracts table', () => {
	ciscoPlusContractsTable.offerDomain.should('be.visible');
});

Then(
	'Verify the Total Subscriptions field is shown in Cisco+Contracts table',
	() => {
		ciscoPlusContractsTable.totalSubscriptions.should('be.visible');
	},
);

Then(
	'Verify the Total Locations field is shown in Cisco+Contracts table',
	() => {
		ciscoPlusContractsTable.totalLocations.should('be.visible');
	},
);

Then(
	'Verify the Nearest Expiration field is shown in Cisco+Contracts table',
	() => {
		ciscoPlusContractsTable.nearestExpiration.should('be.visible');
	},
);

Then(
	'Verify the Total Contract Value field is shown in Cisco+Contracts table',
	() => {
		ciscoPlusContractsTable.totalContractValue.should('be.visible');
	},
);

Then(
	'Verify the Charged to Date field is shown in Cisco+Contracts table',
	() => {
		ciscoPlusContractsTable.chargedtoDate.should('be.visible');
	},
);

Then('Verify Search field is shown in Cisco+Contracts Screen', () => {
	ciscoPlusContractsTable.search.should('be.visible');
});

Then(
	'Verify Total Count Visual Filter is shown in Cisco+Contracts Screen',
	() => {
		ciscoPlusContractsTable.totalVF.should('be.visible');
	},
);

Then('Verify Showing Text is shown in Cisco+Contracts table', () => {
	ciscoPlusContractsTable.showingText.should('be.visible');
});

Then('Verify Cisco+Contracts table is sortable based on End Customer', () => {
	ciscoPlusContractsTable.endCustomer.click();
});

Then('Verify Cisco+Contracts table is sortable based on Offer Domain', () => {
	ciscoPlusContractsTable.offerDomain.click();
});

Then(
	'Verify Cisco+Contracts table is sortable based on Total Subscriptions',
	() => {
		ciscoPlusContractsTable.totalSubscriptions.click();
	},
);

Then(
	'Verify Cisco+Contracts table is sortable based on Total Locations',
	() => {
		ciscoPlusContractsTable.totalLocations.click();
	},
);

Then(
	'Verify Cisco+Contracts table is sortable based on Nearest Expiration',
	() => {
		ciscoPlusContractsTable.nearestExpiration.click();
	},
);

Then(
	'Verify Cisco+Contracts table is sortable based on Total Contract Value',
	() => {
		ciscoPlusContractsTable.totalContractValue.click();
	},
);

Then(
	'Verify Cisco+Contracts table is sortable based on Charged to Date',
	() => {
		ciscoPlusContractsTable.chargedtoDate.click();
	},
);

Then(
	'Verify that the cisco+ Contracts 360 view open with details onclick each subcription',
	() => {
		ciscoPlusContractsTable.endCustomerNameFirst.click();
	},
);
