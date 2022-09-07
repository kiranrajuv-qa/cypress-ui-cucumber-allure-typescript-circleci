/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('Verify the Add New button availability', () => {
	cy.get('#AddNewOffer > .dropdown > .btn').should('not.exist');
});
