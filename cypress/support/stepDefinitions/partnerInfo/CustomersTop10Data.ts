/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import app from '../../pageObjects/app.po';

Then('Verify header for top 10 customers', () => {
	app.todayFacet.click();
	cy.contains('Customers by Total Contract Value').scrollIntoView();

	cy.get('.text-ellipsis').contains('Customers by Total Contract Value');
});

Then('Verify All success track dropdown', () => {
	cy.get('.text-ellipsis').contains('Customers by Total Contract Value');
});

Then('Verify All success track dropdown', () => {
	cy.get('.dropdown-filters-success-track').contains('Success Tracks (All)');
});

Then('Verify the column names for Customer and Amount', () => {
	cy.get('.customerNameDiv').contains('Customer');
	cy.get('.bookingAmountDiv').contains('Bookings');
});

Then('Verify the USD and $ in Bookings amount', () => {
	cy.get('.bookingAmountDiv').contains('$');
});
