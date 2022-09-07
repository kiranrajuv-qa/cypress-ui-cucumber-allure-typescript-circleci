/// <reference types="Cypress" />

import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import app from '../pageObjects/app.po';

Given('User is on {string} Facet', (facet_name) => {
	app.headerLogo.click({ force: true });
	if (facet_name == 'TODAY') {
		cy.url().then(($url) => {
			if (!$url.includes('/today')) {
				app.todayFacet.click({ force: true });
				cy.url().should('contain', '/today');
				cy.location('pathname').should('include', '/today');
			}
		});
	} else if (facet_name == 'CUSTOMERS') {
		cy.url().then(($url) => {
			if (!$url.includes('/customers')) {
				app.customersFacet.click({ force: true });
				cy.url().should('contain', '/customers');
				cy.location('pathname').should('include', '/customers');
			}
		});
	} else if (facet_name == 'PARTNER OFFERS') {
		app.partnerOffersFacet.click({ force: true });
		cy.url().should('contain', '/partner-offers');
		cy.location('pathname').should('include', '/partner-offers');
	} else if (facet_name == 'LEARNING') {
		app.learningFacet.click({ force: true });
		cy.url().should('contain', '/training-enablement');
		cy.location('pathname').should('include', '/training-enablement');
	}
});

When('Toggle 360 view', () => {
	app.toggleCustomer360View();
});

When('User Navigates to Home Page', () => {
	app.headerLogo.click({ force: true });
});
