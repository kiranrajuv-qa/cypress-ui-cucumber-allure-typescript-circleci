class PartnerOffersPage {
	get partnerOffersTitle() {
		return cy.get("[data-auto-id='digitalAsset-title']");
	}

	get partnerOffersDescription() {
		return cy.get('#description');
	}

	get partnerOffersTimeRequiredHours() {
		return cy.get("[data-auto-id='digitalAsset-timeRequired']");
	}

	get mapYourOfferToCxCloud() {
		return cy.get(':nth-child(2) > .cxui-step__label');
	}

	get successTrackDropdown() {
		return cy.xpath("//*[@data-auto-id='MappingTableBody']/tr/td[1]");
	}

	get campusNetworkOption() {
		return cy.xpath("//*[text()='Campus Network']");
	}

	get useCaseDropdown() {
		return cy.xpath("//*[@data-auto-id='MappingTableBody']/tr/td[2]");
	}

	get campusNetworkAssuranceOption() {
		return cy.xpath("//*[text()='Campus Network Assurance']");
	}

	get pitStopDropdown() {
		return cy.xpath("//*[@data-auto-id='MappingTableBody']/tr/td[3]");
	}

	get implementOption() {
		return cy.xpath("//*[text()='Implement']");
	}

	get checklistDropdown() {
		return cy.xpath("//*[@data-auto-id='MappingTableBody']/tr/td[4]");
	}

	get checklistOptions() {
		return cy.get("[class='checkbox__label multi-select-text-overflow']");
	}
	get publishToCXCloudButton() {
		return cy.xpath("//button[contains(text(),'Publish to CX Cloud')]");
	}

	get publishToCXCloudPopUpButton() {
		return cy.xpath(
			"(//button[contains(text(),'Publish to CX Cloud')])[2]",
		);
	}

	get validationPageDescription() {
		return cy.get("[class='description-text']");
	}

	get publishedPageCloseButton() {
		return cy.get("[class='icon-close icon--mid']");
	}
	get offerStatusLabel() {
		return cy.get('.status-label > :nth-child(2)');
	}

	get close360DegreeView() {
		return cy.get('[data-auto-id="CloseDetails"] > .icon-close');
	}

	get searchField() {
		return cy.get("[id='searchInput-input']");
	}

	get partnerOffersList() {
		return cy.get("tbody[role='rowgroup']");
	}

	get unpublishButton() {
		return cy.get("[data-auto-id='unpublish']");
	}

	get unpublishContinueButton() {
		return cy
			.get(
				'.hidden > cui-modal.not-close-360 > .modal-container > .modal > .modal__dialog > .modal__content > .modal__footer > .pp-primary-button',
			)
			.click();
	}

	get accelaratorOfferdeleteButton() {
		return cy.get("[data-auto-id='delete']");
	}

	get partnerAssetsNotFound() {
		return cy.get("[data-auto-id='NoResultsFoundTxt']");
	}
}

export default new PartnerOffersPage();
