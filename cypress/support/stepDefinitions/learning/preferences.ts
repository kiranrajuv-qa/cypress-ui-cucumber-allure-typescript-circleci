/// <reference types="Cypress" />

import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { Preferences } from '../../pageObjects/learning/preferences.po';

Then('{string} tab should exist', (preference: string) => {
	cy.contains(preference).should('exist').and('be.visible');
});

And('Click on Preference tab', () => {
	Preferences.getPreferncesTab().click();
});

Then('Model with {string} should be displayed', (title: string) => {
	Preferences.getModel().should('be.visible').contains(title);
});

And(
	'Select {string} , {string} and {string} preferences',
	(s1: string, s2: string, s3: string) => {
		cy.contains(s1).click();
		cy.contains(s2).click();
		cy.contains(s3).click();
	},
);

And('Click Save Button', () => {
	Preferences.saveButton().click();
});

Then('Model content should have {string}', (text: string) => {
	Preferences.getModel().should('contain', text);
});

And('Click on Close Icon', () => {
	Preferences.closeIcon().click();
});

When('Starttime is {string}', (defaultoption: string) => {
	Preferences.dd_time(0).click();
	cy.contains(defaultoption).click();
});

Then('Endtiime dropdown should be disabled', () => {
	Preferences.dd_time(1).should('have.attr', 'disabled');
});

Then('Error message should be displayed with {string}', (errormsg: string) => {
	Preferences.dd_time(0).click();
	Preferences.getModel().should('contain', errormsg);
});

And('Click on Cancel', () => {
	Preferences.cancel().click();
});
