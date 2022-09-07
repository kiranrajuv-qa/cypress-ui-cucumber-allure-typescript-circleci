/// <reference types="Cypress" />

import { And, Then } from '@badeball/cypress-cucumber-preprocessor';
import { CustomersFacet } from '../../pageObjects/customers.po';

Then('Customer table should have {string} column', (text) => {
	CustomersFacet.getTable().should('contain', text);
});

Then('Should contain Success Track names', () => {
	CustomersFacet.getTable().find('tbody').should('contain', 'Campus Network');
});

Then('Granted coustomer should contain Success Track', () => {
	cy.get('tbody > tr > td:nth-child(3)').each(($el, index) => {
		const access = $el.text();
		if (access.includes('Granted')) {
			cy.get('tbody > tr > td:nth-child(2)')
				.eq(index)
				.then((successtrack) => {
					expect(successtrack[0].textContent).to.not.equal(null);
				});
		}
	});
});

And('Hover on Success Track', () => {
	CustomersFacet.getVisualFliter().within(() => {
		CustomersFacet.getLabel()
			.trigger('mouseover', { force: true })
			.invoke('show');
	});
});

Then('Tooltip should be available', () => {
	CustomersFacet.getVisualFliter().within(() => {
		CustomersFacet.getToolTip();
	});
});

And('Click on {string} in Visual filter', (trackname: string) => {
	CustomersFacet.getVisualFliter().contains(trackname).click();
});

Then('All records should contain {string}', (trackname: string) => {
	CustomersFacet.getTable()
		.find('tbody > tr')
		.each(($el) => {
			cy.wrap($el).contains(trackname);
		});
});

Then('Validate count wrt customers table', () => {
	CustomersFacet.getToolTip()
		.invoke('text')
		.then((text) => {
			const tooltiptext = text.trim();
			console.log('ss', tooltiptext);
			const count = tooltiptext.slice(-1);
			console.log('ss', count);
			cy.get('#customer_table > tbody > tr').should('have.length', count);
		});
});

And('Click on {string} tab', (tabname: string) => {
	CustomersFacet.get360View().contains(tabname).click();
});

Then(
	'{string} & {string} sections should be displayed',
	(sec1: string, sec2: string) => {
		CustomersFacet.get360View().contains(sec1);
		CustomersFacet.get360View().contains(sec2);
	},
);
