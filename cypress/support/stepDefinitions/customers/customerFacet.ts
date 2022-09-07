/// <reference types="Cypress" />

import { DataTable, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Then('Customers Facet must have tabs', (table: DataTable) => {
	const tabs = table.raw();
	cy.get('.cxui-tab').should('have.length', tabs.length);
	cy.get('.cxui-tabs').children().should('have.length', tabs.length);
	tabs.forEach((tabName, index) => {
		cy.get('.cxui-tab').eq(index).should('contain.text', tabName);
	});
});

Then('Customers Table must have columns', (table: DataTable) => {
	const columnNames = table.raw();
	columnNames.forEach((columnName, index) => {
		cy.get('[data-auto-id="CustomerTable"]')
			.find('.cdk-header-cell')
			.eq(index)
			.should('contain.text', columnName);
	});
});

Then('Visual Filters must be displayed', () => {
	cy.get('[data-auto-id="TotalVisualFilter"]').should('be.visible');
	cy.get('[data-auto-id="VisualFilter-portalaccess"]')
		.find('.visual-filter__card__title')
		.should('have.text', 'CX CLOUD ACCESS');
	cy.get('[data-auto-id="VisualFilter-offerdomain"]')
		.find('.visual-filter__card__title')
		.should('have.text', 'OFFER DOMAIN');
});

When('User Opens Customer 360 View', () => {
	cy.get('.cxui-column-customername').eq(1).click();
});

When('User Opens 360 View For Another Customer', () => {
	cy.get('.cxui-column-customername').eq(2).click();
});

When('User Opens 360 View of Customer {string}', (customerName: string) => {
	cy.get('.cxui-column-customername').contains(customerName).click();
});
