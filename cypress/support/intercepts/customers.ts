export function interceptCustomerNotes() {
	cy.intercept(
		'GET',
		'**/v2/cxpp-customer-portal-mirror/mirror/v1/partner/racetrack/notes?rows=10&page=1',
	).as('getAllNotes');
	cy.intercept(
		'POST',
		'**/v2/cxpp-customer-portal-mirror/mirror/v1/partner/racetrack/note',
	).as('addEditNote');
	cy.intercept(
		'DELETE',
		'**/v2/cxpp-customer-portal-mirror/mirror/v1/partner/racetrack/note/**',
	).as('deleteNote');
}

export function interceptCustomerContacts() {
	cy.intercept(
		'GET',
		'**/v1/partner/contacts/team-by-account?offset=1&limit=30',
	).as('getMyTeamContacts');
}

export function interceptInvoicesCount() {
	cy.intercept(
		'GET',
		'**/v2/cxpp-hcaas-ms/v1/hcaas/customer/invoices/count',
	).as('getInvoiceCount');
}

export function interceptInvoicesExportXLS() {
	cy.intercept(
		'GET',
		'**/v2/cxpp-hcaas-ms/v1/hcaas/customer/invoices/exportInvoicesAsExcel',
	).as('getInvoiceExportXLS');
}

export function interceptInvoicesExportCSV() {
	cy.intercept(
		'GET',
		'**/v2/cxpp-hcaas-ms/v1/hcaas/customer/invoices?sortOrder=asc&sortBy=DUE_DATE&rows=50',
	).as('getInvoiceExportCSV');
}
