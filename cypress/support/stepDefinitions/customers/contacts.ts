/// <reference types="Cypress" />

import { After, Before, Then } from '@badeball/cypress-cucumber-preprocessor';
import { interceptCustomerContacts } from '../../intercepts/customers';
import app from '../../pageObjects/app.po';
import { CustomersFacet } from '../../pageObjects/customers.po';

Then('Verify CONTACTS tab defaults', () => {
	CustomersFacet.getSubTabs().should('have.length', 1);
	CustomersFacet.getMyTeamTab().should('be.visible');
	CustomersFacet.getActiveTab()
		.find('.base-margin-top')
		.should(
			'contain.text',
			'PX Cloud users that are assigned to this customer are listed below.',
		);
	CustomersFacet.getActiveTab()
		.find('#searchInput-input')
		.should('have.attr', 'placeholder', 'Search');
	CustomersFacet.getActiveTab()
		.find('.contacts-title')
		.should('have.text', 'CONTACTS');
});

Then('Verify zero contacts message', () => {
	CustomersFacet.getActiveTab()
		.find('.flex-center-horizontal')
		.should('contain.text', 'No results found');
});

Then('Verify Favorite and Non-Favirote sections', () => {
	CustomersFacet.getFavContacts().should('exist').and('be.visible');
	CustomersFacet.getNonFavContacts().should('exist').and('be.visible');
});

Then('Verify Favorite contact details', () => {
	let favContactsCount = 0;
	CustomersFacet.getFavContacts().then((contacts) => {
		favContactsCount = contacts.length;
		for (let index = 0; index < favContactsCount; index++) {
			CustomersFacet.getFavContacts()
				.eq(index)
				.find('.contact-name')
				.should('exist')
				.and('be.visible');
			CustomersFacet.getFavContacts()
				.eq(index)
				.find('.contact-role')
				.should('contain.text', 'Customer Success Manager');
			CustomersFacet.getContactPhoneIcon('fav', index)
				.children()
				.first()
				.should('have.class', 'contact-icon-phone')
				.and('have.class', 'cisco-contact-phone');
			CustomersFacet.getContactPhoneIcon('fav', index)
				.find('.cisco-contact-clipboard .phone-div')
				.find('.text-attribute-mobile')
				.should('have.text', 'Work:')
				.parent()
				.find('.clipboard-content');
			CustomersFacet.getContactPhoneIcon('fav', index)
				.find('.copy-attribute-mobile')
				.should('contain.text', 'Copy');
			CustomersFacet.getContactEmailIcon('fav', index)
				.children()
				.first()
				.should('have.class', 'contact-icon-email')
				.and('have.class', 'cisco-contact-email');
			CustomersFacet.getContactEmailIcon('fav', index)
				.find('.clipboard-content')
				.next()
				.should('have.class', 'email-copy-position')
				.and('contain.text', 'Copy');
			CustomersFacet.getContactEmailIcon('fav', index)
				.next()
				.next()
				.should('have.class', 'contact-icon-star');
		}
	});
});

Then('Verify Non-Favorite contact details', () => {
	let nonFavContactsCount = 0;
	CustomersFacet.getNonFavContacts().then((contacts) => {
		nonFavContactsCount = contacts.length;
		for (let index = 0; index < nonFavContactsCount; index++) {
			CustomersFacet.getNonFavContacts()
				.eq(index)
				.find('.contact-name')
				.should('exist')
				.and('be.visible');
			CustomersFacet.getNonFavContacts()
				.eq(index)
				.find('.contact-role')
				.should('contain.text', 'Customer Success Manager');
			CustomersFacet.getContactPhoneIcon('non-fav', index)
				.children()
				.first()
				.should('have.class', 'contact-icon-phone')
				.and('have.class', 'cisco-contact-phone');
			CustomersFacet.getContactPhoneIcon('non-fav', index)
				.find('.cisco-contact-clipboard .phone-div')
				.find('.text-attribute-mobile')
				.should('have.text', 'Work:')
				.parent()
				.find('.clipboard-content');
			CustomersFacet.getContactPhoneIcon('non-fav', index)
				.find('.copy-attribute-mobile')
				.should('contain.text', 'Copy');
			CustomersFacet.getContactEmailIcon('non-fav', index)
				.children()
				.first()
				.should('have.class', 'contact-icon-email')
				.and('have.class', 'cisco-contact-email');
			CustomersFacet.getContactEmailIcon('non-fav', index)
				.find('.clipboard-content')
				.next()
				.should('have.class', 'email-copy-position')
				.and('contain.text', 'Copy');
			CustomersFacet.getContactEmailIcon('non-fav', index)
				.next()
				.next()
				.should('have.class', 'contact-icon-star-empty');
		}
	});
});

Before({ tags: '@contacts' }, () => {
	interceptCustomerContacts();
});

After({ tags: '@contacts' }, () => {
	app.close360View();
});
