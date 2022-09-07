/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { CustomersFacet } from '../../pageObjects/customers.po';

Then('POM internal User clicks on customer', () => {
	cy.get('tbody > :nth-child(1) > .cdk-column-customername').click();
});

Then('POM internal User clicks on My Teams', () => {
	cy.get('.cx-header-links--teams').click();
});

Then('POM internal User performs search operation', () => {
	let txt = '';
	cy.get('tbody > :nth-child(1) > .cdk-column-customername')
		.invoke('text')
		.then((text) => {
			txt = text + '\n';
			cy.log(txt);
			cy.get('.contact-search-box ').find('#searchInput-input').type(txt);

			cy.get('.name-ellipsis').contains(text).click();
			cy.get('.search-contact').contains(text).click();
		});
});

Then('360 view should not open', () => {
	CustomersFacet.get360View().should('not.be.visible');
});
