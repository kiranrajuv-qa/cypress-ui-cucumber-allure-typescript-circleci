/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import app from '../../pageObjects/app.po';
import downloadCsvXls from '../../pageObjects/partnerInfo/HcaasContracts';

Then('Verify Nearest expiration header', () => {
	app.customersFacet.click();
	cy.get('.tab__heading').contains('Cisco+ Contracts').click();
	downloadCsvXls.vfTitle.contains('NEAREST EXPIRATION');
});

Then('Verify 0-6 months label', () => {
	cy.get('.highcharts-axis-labels').contains('0-6 Months');
});

Then('Verify 7-12 months label', () => {
	cy.get('.highcharts-axis-labels').contains('7-12 Months');
});

Then('Verify 13-24 months label', () => {
	cy.get('.highcharts-axis-labels').contains('13-24 Months');
});

Then('Verify bar chart for 0-6 months', () => {
	cy.get('rect.highcharts-point:nth-child(1)').should('be.visible');
});

Then('Verify bar chart for 7-12 months', () => {
	cy.get('rect.highcharts-point:nth-child(2)').should('be.visible');
	cy.get('rect.highcharts-point:nth-child(3)').should('be.visible');
});

Then('Verify bar chart for 13-24 months', () => {
	cy.get('rect.highcharts-point:nth-child(3)').should('be.visible');
});
