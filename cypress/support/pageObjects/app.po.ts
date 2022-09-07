class App {
	get headerLogo() {
		return cy.getByDataAutoId('HeaderCPLogoLink');
	}
	pressEsc(): void {
		cy.get('body').type('{esc}');
	}

	cancelModal(): void {
		cy.contains('Cancel').click();
	}

	get todayFacet() {
		return cy.getByDataAutoId('Facet-Today');
	}

	get customersFacet() {
		return cy.getByDataAutoId('Facet-Customers');
	}

	get partnerOffersFacet() {
		return cy.getByDataAutoId('Facet-Partner Offers');
	}

	get learningFacet() {
		return cy.getByDataAutoId('Facet-LEARNING');
	}

	showMoreFilters(): void {
		cy.contains('Show More').click();
	}

	showLessFilters(): void {
		cy.contains('Show Less').click();
	}

	close360View(): void {
		cy.get('[data-auto-id="CloseDetails"]').click({ force: true });
	}

	expand360View(): void {
		cy.getByDataAutoId('FullScreen').click();
	}

	toggleCustomer360View(): void {
		cy.getByDataAutoId('asset-details-toggle-fullscreen-icon').click();
	}
}

export default new App();
