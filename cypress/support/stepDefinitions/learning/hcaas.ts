/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import app from '../../pageObjects/app.po';

Then(/^cisco\+ should be present on the learning top tile$/, () => {
	app.learningFacet.contains('Cisco+');
});

Then(
	/^Check for cisco\+ (Hybrid) filter in Technology and Documentation$/,
	() => {
		cy.get('.form-group > .cxui-label >').should(
			'contain.text',
			'Hybrid Cloud',
		);
	},
);

Then(/^Check for cisco\+ title in Technology and Documentation$/, () => {
	cy.get('.faq_title').should('contain.text', 'Cisco+');
});

Then('Check the {string} box', (checkbox__label: string) => {
	cy.get('.form-group').should('contain.text', checkbox__label);

	cy.get('.form-group').each(($el) => {
		cy.log($el.find('.cxui-label').text());
		const txt = $el.text();
		const $c = $el.find('.check');
		if (txt.includes('Hybrid Cloud')) {
			cy.wrap($c).click();
		}
	});
});

Then('{string} filter is applied', (filter: string) => {
	cy.get('.cxui-chip').should('contain.text', filter);
});

Then(/^check whether the cisco\+ cards are displayed or not$/, () => {
	const cards_expected = [
		'Success Tips Migration Strategies and Best Practices: Cisco Intersight Simplified Operations Published on May 26, 2022 Video',
		'ModulePartner BDM deck Ppt 41',
		'ModuleCisco+ How to Get Started Ppt',
		'ModuleCisco+ How to Create a Cisco+ Hybrid Cloud Quote Ppt',
	];
	cy.get('.cxui-card__content')
		.each(($el) => {
			cy.log($el.text());
		})
		.each((e1) =>
			cy.wrap(cards_expected).each((e2) => {
				if (e1 == e2) {
					expect(e1).equals(e2);
				}
			}),
		);
});

Then('user performs search operation using {string}', (input: string) => {
	cy.get('#searchInput-input').type(input + '{enter}');

	Then('user performs search operation using {string}', (input) => {
		cy.get('#searchInput-input').type(input + '{enter}');
	});

	Then('click to {string} the cisco group', (input) => {
		cy.get('.faq_title').contains('Cisco+').click();
	});

	Then('the {string} should not be visibe', (input) => {
		cy.get('details')
			.contains('Cisco+')
			.invoke('attr', 'open')
			.should('have.class', '.input--compressed');
	});

	Then('the {string} should be visibe', (input) => {
		cy.get('.checkbox__label').should('contain.text', input);
	});
});
Then('user performs search operation using {string}', (input) => {
	cy.get('#searchInput-input').type(input + '{enter}');

});
Then('click to {string} the cisco group', (input) => {
	cy.get('.faq_title').contains('Cisco+').click();
});

Then('the {string} should not be visibe', (input) => {
	cy.get('details')
		.contains('Cisco+')
		.invoke('attr', 'open')
		.should('have.class', '.input--compressed');
});

Then('the {string} should be visibe', (input) => {
	cy.get('.checkbox__label').should('contain.text', input);
});
