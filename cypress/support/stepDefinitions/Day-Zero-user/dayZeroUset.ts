/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('for day 0 user it should display number of customers as 0', () => {
	cy.get('.customer-day-zero-container').contains('0');
});

Then('The expected message should be displayed', () => {
	cy.get('.new-customer-day-zero-body').should(
		'contain.text',
		'There are no customers to display yet',
	);
});
