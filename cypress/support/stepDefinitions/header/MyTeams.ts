/// <reference types="Cypress" />

import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { interceptMyTeams } from '../../intercepts/myteams';
import { CollabrationPO } from '../../pageObjects/header/myteams.po';

let searchstring;
let favcontact;
let unfavcontact;
const enter = '{enter}';
const errmsg = 'A minimum of 3 characters is required';
const errmsg2 = 'No Search Results';

When('My Teams link available', () => {
	CollabrationPO.getMyTeamsTab()
		.should('be.visible')
		.and('contain', 'My Teams');
});

And('Click on My Teams link', () => {
	CollabrationPO.getMyTeamsTab().click();
});

Then(
	'Dropdown with {string} and {string} tabs should be available',
	(tab1, tab2) => {
		CollabrationPO.getDropdown()
			.should('be.visible')
			.and('contain', tab1)
			.and('contain', tab2);
	},
);

And('{string} tab should be active', (tabname: string) => {
	CollabrationPO.getTabs().contains(tabname).should('have.class', 'active');
});

And('Enter search string {string}', (searchstring: string) => {
	CollabrationPO.getSearchBox().type(searchstring + enter);
});

Then('Validate search', () => {
	CollabrationPO.getSearchString().then((contactname) => {
		searchstring = contactname.text();
		CollabrationPO.getSearchBox().type(searchstring + enter);
	});
});

And('Result contact should contain search string', () => {
	CollabrationPO.getContact().should('contain', searchstring);
	CollabrationPO.getSearchClose().click();
});

Then('Error message should be displayed', () => {
	CollabrationPO.getSearchError().should('contain', errmsg);
});

Then('No Results found should be displayed', () => {
	CollabrationPO.getDropdown().should('contain', errmsg2);
});

And('Click on Clear All button', () => {
	interceptMyTeams();
	CollabrationPO.getClearAllbtn().click();
});

Then('Contacts are displayed', () => {
	cy.wait('@myteamsapi');
});

Then('Click on Fav icon', () => {
	CollabrationPO.getContactNames()
		.last()
		.then((contactname) => {
			favcontact = contactname.text();
			CollabrationPO.getFavIcon().last().click();
		});
});

And('Contact should be displayed under Favorites section', () => {
	CollabrationPO.getFavSection().should('contain', favcontact);
});

And('Click on Unfav icon', () => {
	CollabrationPO.getFavSection()
		.last()
		.then((contactname) => {
			unfavcontact = contactname.text();
			CollabrationPO.getUnfavIcon().last().click();
		});
});

Then('Contact should be marked as unfavorite', () => {
	cy.get('.contact-height').should('contain', unfavcontact);
});

And('Click on Cisco Team tab', () => {
	CollabrationPO.getDropdown().contains('CISCO TEAM').click();
});

Then('Cisco Contacts are displayed', () => {
	interceptMyTeams();
	cy.wait('@ciscoteamapi');
});

Then('Contacts should have Phone, Email icons', () => {
	CollabrationPO.getContact().find('.icon-phone');
	CollabrationPO.getContact().find('.icon-email');
});
