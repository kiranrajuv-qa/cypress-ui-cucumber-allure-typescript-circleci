/// <reference types= "cypress" />

class downloadCsvXls {
	get hcasContractsTab() {
		return cy.get('.tab__heading').contains('Cisco+ Contracts');
	}

	get dotIconMore() {
		return cy.get('#cxui-menu-trigger-1');
	}

	get menuXls() {
		return cy.get('.cxui-menu__item').contains('Export to XLS');
	}

	get menuCsv() {
		return cy.get('.cxui-menu__item').contains('Export to CSV');
	}

	get menuDisabledCsv() {
		return cy.get('cxui-datalist');
	}
	get menu3Csv() {
		return cy.get('cxui-datalist > :nth-child(1)');
	}

	get search() {
		return cy.get('.cxui-search');
	}
	get vfTitle() {
		return cy.get('.visual-filter__card__title');
	}
}

export default new downloadCsvXls();
