export function interceptActivityLog(): void {
	cy.intercept('GET', '**/v1/auditLogs?*').as('logdata');
}
