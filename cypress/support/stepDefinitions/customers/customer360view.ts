/// <reference types="Cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { CustomersFacet } from '../../pageObjects/customers.po';

When('User opens 360 view for customer - {string}', (customerName: string) => {
	cy.contains(customerName).click();
});

Then('User clicks on {string} customer', (access: string) => {
	cy.get('#customer_table').find('tbody').contains(access).click();
});

Then('360 view should be opened', () => {
	CustomersFacet.get360View().should('exist').and('be.visible');
});

Then('{string} tab should be visible', (tabName: string) => {
	CustomersFacet.get360View()
		.find('.cxui-tab')
		.contains(tabName)
		.should('exist')
		.and('be.visible');
});

When('User clicks on {string} tab', (tabName: string) => {
	CustomersFacet.get360View().find('.cxui-tab').contains(tabName).click();
});

When('User clicks on {string}', (CampusNetwork: string) => {
	CustomersFacet.getCampusNetwork().contains(CampusNetwork).click();
});

Then('{string} should not be visible', (CampusNetwork: string) => {
	CustomersFacet.get360View().should('not.contain', CampusNetwork);
});

Then('{string} should be visible', (CampusNetwork: string) => {
	CustomersFacet.get360View().should('contain', CampusNetwork);
});

Then(
	'{string},{string},{string} should be visible',
	(lifecycle: string, assets: string, advisories: string) => {
		CustomersFacet.get360View().contains(lifecycle);
		CustomersFacet.get360View().contains(assets);
		CustomersFacet.get360View().contains(advisories);
	},
);

Then('Customer count should be zero', () => {
	cy.get('.km__items__item--selected').find('tspan').contains('0');
});

Then('{string} dropdown should be visible', (usecase: string) => {
	cy.get('#cxui-select-0-input').contains(usecase);
});

Then('click on the dropdown', () => {
	cy.get('#cxui-select-0-input').click();
});

Then('Check whether all the options are available', () => {
	cy.get('#cxui-option-11').contains('Campus Software Image Management');
	cy.get('#cxui-option-12').contains('Network Device Management');
	cy.get('#cxui-option-13').contains('Scalable Access Policy');
	cy.get('#cxui-option-14').contains('Campus Network Segmentation');
	cy.get('#cxui-option-15').contains('Campus Network Assurance');
});

Then('check pitstop', () => {
	cy.get('.usecase-list').each(function ($el) {
		let useCaseLabel = $el.find('.usecase-label').text();
		cy.log('useCaseLabel', useCaseLabel);
		$el.find('.currentPitstop-label').text();
	});
});

Then('user scrolls down', () => {
	CustomersFacet.get360View().scrollTo('bottom');
});
Then(
	'Campus Network should be visible in no-access-ST and click on View Contracts',
	() => {
		cy.get(':nth-child(1) > .unsold-ST').contains('Campus Network');
		cy.get(':nth-child(1) > .unsold-link').click();
	},
);
Then('it should redirect to {string}', (tabName) => {
	cy.get('.active > [cxuitabanchor=""] > .tab__heading').contains(tabName);
});
Then(
	'Hybrid Cloud should be visible in no-access-ST and click on View Contracts',
	() => {
		cy.get(':nth-child(2) > .unsold-ST').contains('Campus Network');
		cy.get(':nth-child(2) > .unsold-link').click();
	},
);

Then('{string} tab should not be visible', (tabName) => {
	cy.get('.cxui-tabs').should('not.contain.text', tabName);
});
Then(
	'Campus Network should be visible in no-access-ST and click on View Contracts',
	() => {
		cy.get(':nth-child(1) > .unsold-ST').contains('Campus Network');
		cy.get(':nth-child(1) > .unsold-link').click();
	},
);
Then('it should redirect to {string}', (tabName1) => {
	cy.get('.active > [cxuitabanchor=""] > .tab__heading').contains(tabName1);
});
Then(
	'Hybrid Cloud should be visible in no-access-ST and click on View Contracts',
	() => {
		cy.get(':nth-child(2) > .unsold-ST').contains('Campus Network');
		cy.get(':nth-child(2) > .unsold-link').click();
	},
);
Then('check if {string} tab should be visible ', (tabName) => {
	cy.get('.tab__heading').should('contain.text', tabName);
});

Then('{string} tab should not be visible', (tabName) => {
	cy.get('.cxui-tabs').should('not.contain.text', tabName);
});
Then('Customer Table should be visible', () => {
	cy.get('#customer_table').should('be.visible');
});

Then('{string} column should be visible in Customer Table', (col_name) => {
	cy.get('#customer_table')
		.find('.cdk-column-offerdomain')
		.contains(col_name);
});

Then('Offer Domain Contains {string}', (col_name) => {
	cy.get('.cdk-column-offerdomain').contains(col_name);
});

Then('User clicks on My Teams', () => {
	cy.get('.cx-header-links--teams').click();
});

Then('User performs search operation', () => {
	cy.get('#searchInput-input').type('ATOS{enter}');
	cy.get('.contact-height').find('ATOS').click();
});
Then('Check if {string} status label displayed', (status) => {
	cy.get('.status-label').contains(status);
});
Then('check if the {string} message title is displayed', (mtitle) => {
	cy.get('.message-title').contains(mtitle);
});
Then('check for the message', () => {
	cy.get('.message-info').contains(
		'Your customer has been onboarded to CX Cloud, but partner access isn’t available. We’ll notify you when you’re able to request access.',
	);
});
Then('check {string} is displayed in the Contracts list', (name) => {
	CustomersFacet.get360View().find('.unsold-ST').contains(name);
});
Then('Check for the {string} status', (link) => {
	CustomersFacet.get360View().find('.unsold-link').contains(link);
});
Then('close 360 view', () => {
	cy.get('.icon_close').click();
});

Then('click on {string}', (link) => {
	CustomersFacet.get360View().find('.unsold-link').contains(link).click();
});

Then('{string} tab should be selected', (tabName) => {
	cy.get('.active').contains(tabName);
});

Then('The look of the dropdown should be changed', () => {
	cy.get('.cxui-dropdown').should(
		'have.css',
		'border-radius',
		'--f8-dropdown-border-radius',
	);
});

Then('Click on more icon', () => {
	cy.get('.icon-more').click();
});

Then('click on the date dropdown', () => {
	cy.get('.dd__input').click();
});

Then('The look of the date dropdown should be changed', () => {
	cy.get('.dd__content').should('have.css', '    width', 'calc(100% - 2px)');
});

Then('Check for the {string} status for not sold contracts', (status) => {
	cy.get('#main-details-panel').contains(status);
});
Then('click on {string} tab', (tabName) => {
	cy.get('.tab__heading').contains(tabName).click();
});

Then('Services Contracts should be visible', () => {
	cy.get('[data-auto-id="Tab-Services Contracts"]').click();
});
Then('Cisco+ Contracts should be visible', () => {
	cy.get('[data-auto-id="Tab-Cisco+ Contracts"]').click();
});
