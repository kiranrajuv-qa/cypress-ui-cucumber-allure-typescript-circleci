export class ActivityLog {
	getSideNavBar() {
		return cy.get('[data-auto-id="settings.sidebar"]');
	}

	getActivityLogIcon() {
		return cy.get('.img-audit');
	}

	getALContainer() {
		return cy.get('.admin-container');
	}

	getDatePicker() {
		return cy.get('.cxui-input');
	}

	getDateRanges() {
		return cy.get('.ranges');
	}

	getSearchBox() {
		return cy.get('#searchInput');
	}

	getSearchClose() {
		return cy.get('#searchInput > .input-icon');
	}

	getDropDown() {
		return cy.get('#dropdown-select');
	}

	getDDMenu() {
		return cy.get('.dd__content').contains('User');
	}

	getTablerows() {
		return cy.get('.cxui-table').find('tbody > tr');
	}

	getEventtypeColumn() {
		return cy.get('.cxui-table').find('tbody > tr > td:nth-child(3)');
	}

	getMore() {
		return cy.get('.admin-container').find('.icon-more');
	}
}

export const ActivityLogPO = new ActivityLog();
