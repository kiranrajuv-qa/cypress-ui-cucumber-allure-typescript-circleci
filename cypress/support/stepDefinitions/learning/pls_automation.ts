/// <reference types="Cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

Then('click on Top picks view more', () => {
	cy.get(
		':nth-child(2) > .new-container > .new-sessions > .col-md-2 > .view-more-label',
	).click();
});

Then('Top picks should contain Partner Lifecycle services cards', () => {
	cy.get('.cxui-card').should('contain.text', 'Partner Lifecycle Services');
});

Then('Close the details panel', () => {
	cy.get('.icon-close').click();
});

When('user clicks on {string} boxed tab', (tab: string) => {
	cy.get('.cxui-tabs--boxed').contains(tab).click();
});

Then('Search for {string} cards', (text: string) => {
	cy.get('#searchInput-input').type(text + '{enter}');
});

Then('Check whether the card is added to bookmarked cards', () => {
	cy.get('.cxui-card').each(function ($el) {
		if (
			$el
				.find('icon-bookmark')
				.hasClass('ribbon__blue[_ngcontent-sul-c285]')
		) {
			cy.log('with bookmark');
			// const $e = $el.find('icon-bookmark');
			cy.wrap($el).click();
			cy.get('.detail-back-heading > .icon-bookmark').click();
			cy.get('.detail-back-heading > .icon-bookmark').click();
			const cardName = $el.text();
			cy.log(cardName);
			cy.get('.icon-close').click();
			cy.get('.cxui-tabs > :nth-child(1)').click();
			cy.get(
				':nth-child(4) > .new-container > .new-sessions > .col-md-2 > .view-more-label',
			).click();
			cy.get('.cxui-card').should('contain.text', cardName);
		} else {
			cy.log('without bookmark');
			// const $e = $el.find('icon-bookmark');
			cy.wrap($el).click();
			cy.get('.detail-back-heading > .icon-bookmark').click();
			const cardName = $el.text();
			cy.log(cardName);
			cy.get('.icon-close').click();
			cy.get('.cxui-tabs > :nth-child(1)').click();
			cy.get(
				':nth-child(4) > .new-container > .new-sessions > .col-md-2 > .view-more-label',
			).click();
			cy.get('.cxui-card').should('contain.text', cardName);
		}
	});
});
