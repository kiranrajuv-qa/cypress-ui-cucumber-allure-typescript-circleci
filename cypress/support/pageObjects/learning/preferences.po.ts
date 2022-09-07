export class Preferences_po {
	getPreferncesTab() {
		return cy.get('.stick-right-link');
	}
	getModel() {
		return cy.get('.modal__content');
	}
	saveButton() {
		return cy.get('.modal__footer > :nth-child(2)');
	}
	closeIcon() {
		return cy.get('.icon-close');
	}
	dd_time(num: number) {
		return cy.get('app-time-picker').eq(num);
	}

	cancel() {
		return cy.get('.modal__footer > :nth-child(1)');
	}
}

export const Preferences = new Preferences_po();
