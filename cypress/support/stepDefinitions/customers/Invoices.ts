/// <reference types="Cypress" />

import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import {
	interceptInvoicesCount,
	interceptInvoicesExportCSV,
	interceptInvoicesExportXLS,
} from '../../intercepts/customers';
import { CustomersFacet } from '../../pageObjects/customers.po';

let invoices_count;
const table_header = [
	'Invoice No.',
	'Due Date',
	'Subscription ID',
	'Date Generated',
	'Amount',
];

Then('{string} tab should be present', (invoicestab: string) => {
	CustomersFacet.getnavbar().should('contain', invoicestab);
});

And('Click on Invoices tab', () => {
	interceptInvoicesCount();
	CustomersFacet.getnavbar().contains('Invoices').click();
});

Then('Invoices data should be displayed', () => {
	CustomersFacet.getInvoicesDetalisbody().should('contain', 'Invoices');
	cy.wait('@getInvoiceCount').then((xhr) => {
		expect(xhr.response.statusCode).eq(200);
		invoices_count = xhr.response.body;
	});
});

Then('Validate table header', () => {
	CustomersFacet.getInvoicesTable()
		.should('contain', table_header[0])
		.and('contain', table_header[1])
		.and('contain', table_header[2])
		.and('contain', table_header[3])
		.and('contain', table_header[4]);
});

Then('Pagination should be avalible at the bottom of table', () => {
	if (invoices_count > 10) {
		cy.log(invoices_count);
		CustomersFacet.getInvoicesPagination().should('be.visible');
	} else return;
});

Then('Verify Next in Pagination', () => {
	CustomersFacet.getInvoicesPagination().contains('Next').click();
});

Then('Verify Prev in Pagination', () => {
	CustomersFacet.getInvoicesPagination().contains('Prev').click();
});

And('Select {string} items from Dropdown', (items: string) => {
	CustomersFacet.getInvoicesPagination().find('.cxui-select').click();
	CustomersFacet.getItemsList().contains(items).click();
});

Then('Validate with table count', () => {
	CustomersFacet.getInvoicesTable()
		.find('tbody > tr')
		.should('have.length.lessThan', invoices_count);
});

Then('Check Due Date column sorting', () => {
	CustomersFacet.getInvoicesPagination().find('.cxui-select').click();
	CustomersFacet.getItemsList().last().click();
	CustomersFacet.getInvoicesTable()
		.find('tbody > :nth-child(1) > .cdk-column-DUE_DATE')
		.then((text) => {
			const due_date = text.text();
			cy.get('.cdk-header-row > .cdk-column-DUE_DATE').click();
			CustomersFacet.getInvoicesTable()
				.find('tbody > tr > td:nth-child(2)')
				.last()
				.then((text) => {
					const last_duedate = text.text();
					expect(due_date).to.equal(last_duedate);
				});
		});
});

Then('Click on {string} link', (link: string) => {
	cy.contains(link).click();
});

When('Click on More on Table header', () => {
	CustomersFacet.getExportoptions().click();
});

Then('Check for XLS api call', () => {
	interceptInvoicesExportXLS();
	CustomersFacet.getExportMenu().contains(' Export to XLS ').click();
	cy.wait('@getInvoiceExportXLS').then((xhr) => {
		expect(xhr.response.statusCode).eq(200);
	});
});

Then('Check for CSV api call', () => {
	interceptInvoicesExportCSV();
	CustomersFacet.getExportMenu().contains(' Export to CSV ').click();
	cy.wait('@getInvoiceExportCSV').then((xhr) => {
		expect(xhr.response.statusCode).eq(200);
	});
});
