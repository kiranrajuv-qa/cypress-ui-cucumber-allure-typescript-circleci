

export class Customers {
	get360View() {
		return cy.get('.details-panel-container');
	}

	getNotesTab() {
		return this.get360View().find('.cxui-tab').contains('NOTES');
	}

	getContactsTab() {
		return this.get360View().find('.cxui-tab').contains('CONTACTS');
	}

	getContactsContainer() {
		return this.getActiveTab().find('.contacts-container');
	}

	getActiveTab() {
		return this.get360View().find('.cxui-tab-pane.active');
	}

	getSubTabs() {
		return this.get360View().find('.cxui-tabs').eq(1);
	}

	getMyTeamTab() {
		return this.getSubTabs().find('.cxui-tab').contains('MY TEAM');
	}

	getNotesTabTitle() {
		return this.getActiveTab().find('.notes-title');
	}

	getNotesTabDesc() {
		return this.getActiveTab().find('.notes-desc');
	}

	getNotesContainer() {
		return this.getActiveTab().find('.notes-container');
	}

	getNotesTitle() {
		return this.getNotesContainer().find('.cxui-label');
	}

	getNotesTextArea() {
		return this.getNotesContainer().find('.cxui-input');
	}

	getSaveNote() {
		return this.getNotesContainer().find('[data-auto-id="saveAddNote"]');
	}

	getNotesItems() {
		return this.getNotesContainer().find('.timeline__item');
	}

	getDateOfNote(index) {
		return this.getNotesItems()
			.eq(index + 1)
			.find('.timeline-date');
	}

	getNoteContent(index) {
		return this.getNotesItems()
			.eq(index + 1)
			.find('.small-font-size');
	}

	getNoteOptions(index) {
		return this.getNotesItems()
			.eq(index + 1)
			.find('.more-options-button');
	}

	getNoteEditOption() {
		return cy.get('.cxui-menu__item').eq(0);
	}

	getCancelButton() {
		return cy.get('button').contains('Cancel');
	}

	getNoteDeleteOption() {
		return cy.get('.cxui-menu__item').eq(1);
	}

	getNoteError() {
		this.getNotesContainer().click();
		return this.getNotesItems().eq(0).find('cxui-error');
	}

	getNoteEditedTag(index) {
		return this.getNotesItems()
			.eq(index + 1)
			.find('.note-created')
			.eq(1);
	}

	getDeleteConfirmation(yesOrNo) {
		return cy.get('.cxui-modal__footer .cxui-btn').contains(yesOrNo);
	}

	getFavContacts() {
		return this.getActiveTab().find('.fav-list').find('.contacts-list');
	}

	getNonFavContacts() {
		return this.getActiveTab().find('.non-fav-list').find('.contacts-list');
	}

	getContactPhoneIcon(type, index) {
		if (type == 'fav')
			return this.getFavContacts().eq(index).find('.contact-icons').eq(0);
		else
			return this.getNonFavContacts()
				.eq(index)
				.find('.contact-icons')
				.eq(0);
	}

	getContactEmailIcon(type, index) {
		if (type == 'fav')
			return this.getFavContacts().eq(index).find('.contact-icons').eq(1);
		else
			return this.getNonFavContacts()
				.eq(index)
				.find('.contact-icons')
				.eq(1);
	}
	getCampusNetwork() {
		return cy.get('.cxui-card__body');
	}

	getTable() {
		return cy.get('#customer_table');
	}

	getVisualFliter() {
		return cy.get('#VisualFilter-offerdomain');
	}
	getToolTip() {
		return cy.get('div.highcharts-tooltip').eq(0);
	}
	getLabel() {
		return cy.get('div.highcharts-data-label').eq(0);
	}

	getnavbar() {
		return cy.get('.cxui-sidenav');
	}

	getInvoicesDetalisbody() {
		return cy.get('.invoice-details');
	}

	getInvoicesTable() {
		return cy.get('.cxui-table');
	}

	getInvoicesPagination() {
		return cy.get('.invoice-pagination');
	}

	getItemsList() {
		return cy.get('.cxui-list');
	}

	getExportoptions() {
		return cy.get('.more-options-button');
	}

	getExportMenu() {
		return cy.get('.cxui-menu');
	}

	getMainCustomerContactCard() {
		return cy.getByDataAutoId(
			'lca-customer-portfolio-primary-contact-card',
		);
	}

	getUseCasesOverviewCard() {
		return cy.getByDataAutoId(
			'lca-customer-portfolio-use-cases-overview-card',
		);
	}
	getUseCaseOverviewCardTitle(){
		return cy.get('.use-cases-overview-title');
	}

	getRaOnTrackUseCasesOverviewCard() {
		return cy.getByDataAutoId(
			'use-case-count-on-track',
		);
	}

	getRaMissingContactUseCasesOverviewCard() {
		return cy.getByDataAutoId(
			'use-case-count-missing-contacts',
		);
	}

	getRaStalledUseCasesOverviewCard() {
		return this.getUseCasesOverviewCard().getByDataAutoId(
			'use-case-count-stalled',
		);
	}

	getMainCustomerContactcardEllipsis() {
		return this.getMainCustomerContactCard().getByDataAutoId(
			'lca-customer-portfolio-primary-contact-card-action',
		);
	}
	getPortfolioMainContactCardNoContactText() {

		return this.getMainCustomerContactCard()
		.getByDataAutoId('lca-customer-portfolio-primary-contact-card-no-contact-text');
	}

	getPortfolioMainContactCardNoContactAddbutton() {

		return this.getMainCustomerContactCard()
		.getByDataAutoId('lca-customer-portfolio-primary-contact-card-action-add');
	}
	getPortfolioMaincontactcardEmail(){
		return this.getMainCustomerContactCard()
		.getByDataAutoId('lca-customer-portfolio-primary-contact-card-email');
	}

	getPortfolioMaincontactcardName(){
		return this.getMainCustomerContactCard()
		.getByDataAutoId('lca-customer-portfolio-primary-contact-card-name');
	}
	getEditMainCustomercontactMenuitem() {
		return this.getMainCustomerContactcardEllipsis().getByDataAutoId(
			'lca-customer-portfolio-primary-contact-card-action-edit',
		);
	}

	getRemoveMainCustomercontactMenuitem() {
		return this.getMainCustomerContactcardEllipsis().getByDataAutoId(
			'lca-customer-portfolio-primary-contact-card-action-remove',
		);
	}

	getPortfoliomaincontactModalTitle() {
		return cy.getByDataAutoId('contactModalTitle');
	}
	getPortfolioMainCustomerContactModalName() {
		return cy.getByDataAutoId('formName');
	}

	getPortfolioMainCustomerContactModalEmail() {
		return cy.getByDataAutoId('formEmail');
	}

	getPortfolioMainCustomerContactModalLanguageSelect() {

		cy.get("cxui-option[role='option']").each(function($ele,index,list){
			if ($ele.text()===  'English (United States)'){
				cy.wrap($ele).click();
			}
	});
	}
	getRemoveContact() {

		return cy.getByDataAutoId('removeButton');
	}
	getPortfolioMainCustomerContactModalSave() {
		return cy.getByDataAutoId('saveButton');
	}
	getPortfolioMainCustomerContactModalCancel() {
		return cy.getByDataAutoId('cancelButton');
	}
	getSolution() {
		return this.get360View().find(
			':nth-child(2) > .solution-info > .title',
		);
	}

	getUseCaseCSIM() {
		return this.get360View().get(
			'[data-auto-id=usecase-card-38396885-39304058]> .cxui-card ',
		);
	}
	getUseCaseNOB() {
		return this.get360View().get(
			'[data-auto-id=usecase-card-38396885-39304061]> .cxui-card ',
		);
	}
	getUseCaseSAP() {
		return this.get360View().get(
			'[data-auto-id=usecase-card-38396885-39304071]> .cxui-card ',
		);
	}
	getUseCaseCNS() {
		return this.get360View().get(
			'[data-auto-id=usecase-card-38396885-39304067]> .cxui-card ',
		);
	}
	getUseCaseCNA() {
		return this.get360View().get(
			'[data-auto-id=usecase-card-38396885-39304064]> .cxui-card ',
		);
	}


	getLCMainCardContainer() {
		return this.getLCMainContactCard().get(
			'.main-contact-container > .cxui-card',
		);
	}

	getLCMainContactCard() {
		return this.get360View().get(
			'.main-contact-container > .cxui-card > [tabindex="-1"] > .cxui-card__content',
		);
	}

	getLCMainContactCardAddContact() {

        return this.get360View().getByDataAutoId('add-primary-contact');

    }
	getLCMaincontactcardEmail(){
        return this.get360View().getByDataAutoId('lca-primary-contact-info').find('[data-auto-id=lca-contact-info-email]');
    }

	getLCMainContactCardEllipsis() {
		return this.get360View().getByDataAutoId('lca-contact-card-action');
	}

	getLCEditMainCustomercontactMenuitem() {
		return this.get360View().getByDataAutoId(
			'lca-contact-card-action-edit',
		);
	}

	getLCRemoveMainCustomercontactMenuitem() {
		return this.get360View().getByDataAutoId(
			'lca-contact-card-action-remove',
		);
	}
	getoverlaybackdrop() {
		return cy.get('.cdk-overlay-backdrop');
	}
	getLCmaincontactmodal() {
		return cy.get('cxui-modal__content');
	}
	getLCmaincontacteditmodaltitle() {
		return cy.getByDataAutoId('contactModalTitle');
	}
	getLCmaincontacteditmodalformname() {
		return cy.getByDataAutoId('formName');
	}
	getLCmaincontacteditmodalformemail() {
		return cy.getByDataAutoId('formEmail');
	}
	getLCmaincontacteditmodallanguage() {
		return cy.get('.cxui-select-6-input');
	}
	getLCmaincontacteditmodalsave() {
		return cy.get('.cxui-modal__footer > .half-margin-left');
	}
	getLCmaincontacteditremovemodalcancel() {
		return cy.get('.cxui-modal__footer > .cxui-btn--secondary');
	}

	getLCMainContactEditModalClose() {
		return cy.get('.cxui-modal__content > .close > .cxui-icon > svg');
	}
	getLCmaincontactremovemodalclose() {

		return cy.get(

			'.cxui-modal__content > .close > .cxui-icon > svg > path',
		);
	}

	getAllUseCaseView360BackButton(){

		return cy.get('.icon-left-arrow');
	}
	getLCmaincontactRemovemodalTitle() {
		return cy.get('.contactModalTitle');
	}

	getPartnerContainerexists() {
		return cy.get('.partner-contact-container');
	}
	getFullScreenToggle() {

		return cy.getByDataAutoId('asset-details-toggle-fullscreen-icon');
	}
	getPartnerContactAddModalTitle() {

		return cy.get('.cxui-modal__title');
	}
	getPartnerModal() {
		return cy.get('.cxui-modal__content');
	}
	getPartnerContactAddModalLanguagePreference() {

		return cy.get("[formcontrolname='language']");

	}
	getMainContactAddModalLanguagePreference() {

		return cy.get("[formcontrolname='contactLanguageCode']");

	}

	getFormValidationError() {
		return cy.get('.cxui-form-field.is-invalid > .input-hint-wrapper > .input-hint');
	}

	getLCAddEditPartnerprovidedContact() {
		return cy.getByDataAutoId('lca-add-partner-contact');
	}


	getAddAnotherContacttotheusecasePartnerProvided() {
		return cy.getByDataAutoId('lca-add-email-row');
	}

	getPartnerProvidedContactSave() {
		return cy.getByDataAutoId('lca-save-partner-emails');
	}

	getPartnerProvidedContactCancel() {
		return cy.getByDataAutoId('lca-cancel-partner-email-modal');
	}

	getPartnerprovidedContactModalExit() {
		return cy.get('.close > .cxui-icon > svg > path');
	}

	getneedcustomerassistancelink() {
		return this.get360View()
			.getByDataAutoId('lca-resources-content-link')
			.then((link) => {
				cy.request(link.prop('href')).its('status').should('eq', 200);
			});
	}
}

export const CustomersFacet = new Customers();
