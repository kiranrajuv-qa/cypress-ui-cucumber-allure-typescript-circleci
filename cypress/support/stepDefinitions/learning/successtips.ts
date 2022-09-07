/// <reference types="Cypress" />

import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import app from '../../pageObjects/app.po';
import { Learning } from '../../pageObjects/learning/learning.po';

Then('Check if the Learning Facet has {string}', (title: string) => {
	app.learningFacet.contains(title);
});

And('Click on Meraki Network filter under Success Trcks', () => {
	Learning.getMerakiNetworkFilter().click();
});

Then('Check if Success Tips crds are displyed', () => {
	Learning.getCards().should('contain', 'Success Tips');
});

When('User click on Card', () => {
	Learning.getFirstCard().click();
});

Then('360 View should be opened', () => {
	Learning.get360Pannel().should('be.visible');
});

Then('Validate Titles', () => {
	Learning.getTitleonPannell()
		.invoke('text')
		.then((text) => {
			const picktitle = text.split(':')[0];
			Learning.getVideoTitle()
				.invoke('text')
				.then((text) => {
					expect(picktitle).to.equal(text.trim());
				});
		});
});

And('Close 360View', () => {
	Learning.Close360();
});

And('click on Web filter', () => {
	Learning.getWebFilter().click();
});

And('Click on URL card', () => {
	Learning.getCards().should('contain', 'URL');
	Learning.getFirstCard().click();
});

Then('Validate 360', () => {
	Learning.get360Pannel().should('contain', 'URL');
});
