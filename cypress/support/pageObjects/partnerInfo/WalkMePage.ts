/// <reference types= "cypress" />

class WalkMe {
	get clickArrowbutton() {
		return cy.get('.cx-header-links--portal-help');
	}

	get walkMeTitle() {
		return cy.get('.walkme-custom-balloon-title');
	}
	get walkMeContent() {
		return cy.get('.walkme-custom-balloon-content');
	}

	get walkMeButton() {
		return cy.get('.walkme-custom-balloon-button');
	}

	get walkMeCloseX() {
		return cy.get('.walkme-click-and-hover');
	}

	get walkMeBlueButton() {
		return cy.get('.wm-blue-button');
	}

	get ClickActivateTour() {
		return cy.contains('Activate Tour');
	}
}

export default new WalkMe();
