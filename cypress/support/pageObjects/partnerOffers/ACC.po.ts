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
    return cy.get('#solution1 > #dropdown-select > .dd__input')
  }

  get campusNetworkOption() {
    return cy.get('[data-content="Campus Network"]')
  }

  get useCaseDropdown() {
    return cy.get('#usecase1 > #dropdown-select > .dd__input')
  }

  get campusNetworkAssuranceOption() {
    return cy.get('[data-content="Campus Network Assurance"]')
  }

  get pitStopDropdown() {
    return cy.get('#pitstop1 > #dropdown-select > .dd__input')
  }

  get implementOption() {
    return cy.get('[data-content="Implement"]')
  }

  get checklistDropdown() {
    return cy.get('.checklist_field')
  }

  get checklistOptions() {
    return cy.get("[class='checkbox__label multi-select-text-overflow']");
  }
  get publishToCXCloudButton() {
    return cy.get('[data-auto-id="publish"]')
  }

  get publishToCXCloudPopUpButton() {
    return cy.get('.status-label > :nth-child(2)')
  }

  get confirmPublish() {
    return cy.get('.offer-summary-footer > .ng-star-inserted');
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
    //    return cy.get('.hidden > cui-modal.not-close-360 > .modal-container > .modal > .modal__dialog > .modal__content > .modal__footer > .pp-primary-button').click()
    return cy.get(
      '.hidden > cui-modal.not-close-360 > .modal-container > .modal > .modal__dialog > .modal__content > .modal__footer > :nth-child(2)',
    );
  }

  get accelaratorOfferdeleteButton() {
    return cy.get("[data-auto-id='delete']");
  }

  get partnerAssetsNotFound() {
    return cy.get("[data-auto-id='NoResultsFoundTxt']");
  }
}

export default new PartnerOffersPage();