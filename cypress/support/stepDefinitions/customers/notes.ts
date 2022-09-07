/// <reference types="Cypress" />

import {
	After,
	Before,
	Then,
	When,
} from '@badeball/cypress-cucumber-preprocessor';
import { interceptCustomerNotes } from '../../intercepts/customers';
import app from '../../pageObjects/app.po';
import { CustomersFacet } from '../../pageObjects/customers.po';
import { getFormattedDateForNote } from '../../utils/common';

Then('Notes tab should exist', () => {
	CustomersFacet.getNotesTab().should('exist').and('be.visible');
});

When('User captures note with content {string}', (notesContent: string) => {
	if (notesContent.length <= 100)
		CustomersFacet.getNotesTextArea().clear().type(notesContent);
	else CustomersFacet.getNotesTextArea().clear().fill(notesContent);
	CustomersFacet.getSaveNote().click();
	cy.wait('@addEditNote').then((xhr) => {
		expect(xhr.response.statusCode).eq(200);
	});
	cy.wait('@getAllNotes').then((xhr) => {
		expect(xhr.response.statusCode).eq(200);
	});
	cy.waitUntilAngularStable();
});

Then('First note should be with content {string}', (notesContent) => {
	CustomersFacet.getNoteContent(0).should('have.text', notesContent);
});

When(
	'User tries to add note with invalid content {string}',
	(notesContent: string) => {
		CustomersFacet.getNotesTextArea().clear().type(notesContent);
	},
);

When('User tries to add note with only new lines', () => {
	CustomersFacet.getNotesTextArea().clear().type('\n\n\n');
});

Then('Note should have error message {string}', (errorMessage) => {
	CustomersFacet.getSaveNote().should('be.disabled');
	CustomersFacet.getNoteError()
		.should('contain.text', errorMessage)
		.and('have.css', 'color', 'rgb(226, 35, 26)');
});

Then('Verify NOTES tab defaults', () => {
	CustomersFacet.getNotesTabTitle().should('exist').and('be.visible');
	CustomersFacet.getNotesTabDesc().should('exist').and('be.visible');
	CustomersFacet.getNotesTitle().should('exist').and('be.visible');
	CustomersFacet.getNotesTextArea().should('exist').and('be.visible');
	CustomersFacet.getSaveNote()
		.should('exist')
		.and('be.visible')
		.and('be.disabled')
		.and('have.css', 'background-color', 'rgb(228, 228, 228)');
});

Then('Add Note button should be disabled', () => {
	CustomersFacet.getSaveNote().should('exist').and('be.disabled');
});

Then('Date of note should be current date', () => {
	CustomersFacet.getDateOfNote(0)
		.should('exist')
		.and('be.visible')
		.and('have.text', getFormattedDateForNote());
});

Then('Note should have more options', () => {
	CustomersFacet.getNoteOptions(0).should('exist').and('be.visible');
});

Then('More options should have edit delete options', () => {
	CustomersFacet.getNoteOptions(0).click();
	CustomersFacet.getNoteEditOption()
		.should('exist')
		.and('be.visible')
		.and('contain.text', 'Edit');
	CustomersFacet.getNoteDeleteOption()
		.should('exist')
		.and('be.visible')
		.and('contain.text', 'Delete');
});

Then('User should be able to scroll down', () => {
	CustomersFacet.getNotesContainer().scrollTo('bottom', {
		ensureScrollable: true,
	});
});

Then('User should be able to cancel editing the note', () => {
	CustomersFacet.getNoteOptions(0).click();
	CustomersFacet.getNoteEditOption().click();
	CustomersFacet.getSaveNote()
		.should('exist')
		.and('be.visible')
		.and('not.be.disabled')
		.and('contain.text', 'Update');
	CustomersFacet.getCancelButton().click();
});

When('User edits the note with content {string}', (notesContent: string) => {
	CustomersFacet.getNoteOptions(0).click();
	CustomersFacet.getNoteEditOption().click();
	if (notesContent.length <= 100)
		CustomersFacet.getNotesTextArea().clear().type(notesContent);
	else CustomersFacet.getNotesTextArea().clear().fill(notesContent);
	CustomersFacet.getSaveNote().click();
	cy.wait('@addEditNote').then((xhr) => {
		expect(xhr.response.statusCode).eq(200);
	});
	cy.wait('@getAllNotes').then((xhr) => {
		expect(xhr.response.statusCode).eq(200);
	});
	cy.waitUntilAngularStable();
});

When(
	'User tries to edit note with invalid content {string}',
	(notesContent: string) => {
		CustomersFacet.getNoteOptions(0).click();
		CustomersFacet.getNoteEditOption().click();
		CustomersFacet.getNotesTextArea().clear().type(notesContent);
		CustomersFacet.getNotesContainer().click();
	},
);

When('User tries to edit note with only new lines', () => {
	CustomersFacet.getNoteOptions(0).click();
	CustomersFacet.getNoteEditOption().click();
	CustomersFacet.getNotesTextArea().clear().type('\n\n\n');
	CustomersFacet.getNotesContainer().click();
});

Then('User should be able to cancel deleting the note', () => {
	CustomersFacet.getNoteOptions(0).click();
	CustomersFacet.getNoteDeleteOption().click();
	CustomersFacet.getDeleteConfirmation('No').click();
});

When('User deletes the note', () => {
	CustomersFacet.getNoteOptions(0).click();
	CustomersFacet.getNoteDeleteOption().click();
	CustomersFacet.getDeleteConfirmation('Yes').click();
	cy.wait(['@deleteNote', '@getAllNotes']);
});

When('User puts cursor on Add Note text area and tab out', () => {
	CustomersFacet.getNotesTextArea().click();
	CustomersFacet.getNotesContainer().click();
});

Then('No error message is displayed', () => {
	CustomersFacet.getNoteError().should('not.be.visible');
});

Before({ tags: '@notes' }, () => {
	interceptCustomerNotes();
});

After({ tags: '@notes' }, () => {
	app.close360View();
});
