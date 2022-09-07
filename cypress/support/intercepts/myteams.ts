export function interceptMyTeams(): void {
	cy.intercept(
		'GET',
		'**/cxpp-contacts-management/contactsMgmt/v1/partner/contacts/team?offset=1&limit=100',
	).as('myteamsapi');

	cy.intercept(
		'GET',
		'**/cxpp-contacts-management/contactsMgmt/v1/partner/contacts/cisco-contacts?offset=1&limit=100',
	).as('ciscoteamapi');
}
