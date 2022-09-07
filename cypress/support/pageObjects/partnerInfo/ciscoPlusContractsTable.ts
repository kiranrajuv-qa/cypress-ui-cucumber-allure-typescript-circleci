/// <reference types= "cypress" />

class ciscoPlusContractsTable {
	get hCaaSContractsTab() {
		return cy.get('.tab__heading').contains('Cisco+ Contracts');
	}

	get endCustomer() {
		return cy.get('span').contains('End Customer');
	}

	get offerDomain() {
		return cy.get('span').contains('Offer Domain');
	}

	get totalSubscriptions() {
		return cy.get('span').contains('Total Subscriptions');
	}

	get totalLocations() {
		return cy.get('span').contains('Total Locations');
	}

	get nearestExpiration() {
		return cy.get('span').contains('Nearest Expiration');
	}

	get totalContractValue() {
		return cy.get('span').contains('Total Contract Value');
	}
	
	get chargedtoDate() {
		return cy.get('span').contains('Charged to Date');
	}

	get showingText() {
		return cy.get("[data-auto-id='ShowingCiscoPlusContractsCount']");
	}

	get search() {
		return cy.get('.cxui-search');
	}

	get totalVF() {
		return cy.get("[data-auto-id='VisualFilter-subscriptionsCount']");
	}

	get endCustomerNameFirst() {
		return cy.get("[data-auto-id='ContractsCiscoPlusTable'] tbody  tr:nth-child(1) td:nth-child(1) >span");
	}

	get totalContractValueVF() {
		return cy.get('span').contains('Total Contract Value');
	}

	get totalContractValueL10K() {
		return cy.get('.highcharts-label').contains('<10K');
	}

	get totalContractValueG10K() {
		return cy.get('.highcharts-label').contains('10K+');
	}

	get totalContractValueG50K() {
		return cy.get('.highcharts-label').contains('50K+');
	}

	get totalContractValueG100K() {
		return cy.get('.highcharts-label').contains('100K+');
	}

	get chargedtoDateVF() {
		return cy.get('span').contains('Total Contract Value');
	}

	get chargedtoDateL10K() {
		return cy.get('.highcharts-label').contains('<10K');
	}

	get chargedtoDateG10K() {
		return cy.get('.highcharts-label').contains('10K+');
	}

	get chargedtoDateG50K() {
		return cy.get('.highcharts-label').contains('50K+');
	}

	get chargedtoDateG100K() {
		return cy.get('.highcharts-label').contains('100K+');
	}

	get sumTotalContractValue() {
		return cy.get('div').contains('Total Contract Value');
	}

	get sumLastQuarter() {
		return cy.get('div').contains('Total Charges for Last Quarter');
	}

	get sumTotalLocations() {
		return cy.get('div').contains('Total Locations');
	}

	get manageSubscriptions () {
		return cy.get('button').contains('Manage Subscriptions');
	}

}

export default new ciscoPlusContractsTable();
