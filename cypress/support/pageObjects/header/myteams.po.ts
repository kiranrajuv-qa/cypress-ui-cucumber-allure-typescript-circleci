export class Collabration {
	getMyTeamsTab() {
		return cy.get('.cx-header-links--teams');
	}

	getDropdown() {
		return cy.get('.cx-cisco-team-dropdown-new');
	}

	getTabs() {
		return cy.get('.cxui-tabs');
	}

	getSearchBox() {
		return cy.get('#searchInput');
	}

	getSearchClose() {
		return this.getSearchBox().find('.cxui-icon');
	}

	getContact() {
		return cy.get('.cisco-contact');
	}

	getContactNames() {
		return this.getContact().find('.name-ellipsis');
	}

	getSearchError() {
		return cy.get('.contact-search-box');
	}

	getClearAllbtn() {
		return cy.get('.pp-secondary-button').contains('Clear All');
	}

	getFavIcon() {
		return cy.get('.icon-star-empty');
	}

	getUnfavIcon() {
		return cy.get('.icon-star');
	}

	getFavSection() {
		return cy.get('.show-favourites').find('.name-ellipsis');
	}

	getSearchString() {
		return cy.get('.contact-height').find('.name-ellipsis').last();
	}
}

export const CollabrationPO = new Collabration();
