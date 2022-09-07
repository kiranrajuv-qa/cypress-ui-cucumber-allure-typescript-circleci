/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('Verify the grace period message and add new button', () => {
	cy.get('#AddNewOffer > .dropdown > .btn').should('exist');
	cy.get('.cxui-alert__title').contains('Your PLS Access is Ending Soon');
});
