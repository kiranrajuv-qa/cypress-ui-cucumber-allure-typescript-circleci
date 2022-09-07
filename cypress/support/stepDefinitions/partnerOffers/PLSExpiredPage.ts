/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('Verify the expired message and add new button', () => {
	cy.get('#AddNewOffer > .dropdown > .btn').should('not.exist');
	cy.get('.cxui-alert__title').contains('Your PLS Access Has Ended');
});
