class PartnerOffersPage {

  get atxTitle() {
      return cy.get('#title')
  }

  get atxDescription() {
      return cy.get('#description')
  }

  get atxDuration() {
      return cy.get("[data-auto-id='digitalAsset-duration']")
  }

  get mapYourOfferToCxCloud() {
      return cy.get(':nth-child(2) > .cxui-step__label')
  }

  get selectCustomers() {
      return cy.get(':nth-child(3) > .cxui-step__label')
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
      return cy.get("[class='checkbox__label multi-select-text-overflow']")
  }

  get scheduleSessions() {
      return cy.get(':nth-child(4) > .cxui-step__label')
  }

  get getDatePicker() {
      return cy.get('input#cxui-datepicker')
  }

  get getCalender() {
      return cy.get('div#')
  }

  get setSessionDate() {
      return cy.get('.cxui-datepicker > .cxui-input')
  }

  get setSessionTime() {
      return cy.get('tbody > .ng-star-inserted.ng-touched > :nth-child(2)')
  }

  get setTimeZone() {
   // return cy.xpath("//dropdown-select[@formcontrolname='timeZone']")
      return cy.get(':nth-child(3) > div[_ngcontent-qnq-c286=""] > .provision-resource-input > #dropdown-select > .dd__input')
  }

  get setPresenter() {
      return cy.get('.cxui-form-field > .cxui-input')
  }

  get publishToCXCloudButton() {
 
      return cy.get('[data-auto-id="publish"]')
  }

  get publishToCXCloudPopUpButton() {
      return cy.get('.status-label > :nth-child(2)')
  }

  get publishedPageCloseButton() {
      return cy.get("[class='icon-close icon--mid']")
  }

  get offerStatusLabel() {
      return cy.get('.status-label > :nth-child(2)')
  }

  get confirmPublish() {
    return cy.get('.offer-summary-footer > .ng-star-inserted');
  }

  get close360DegreeView() {
     return cy.get('[data-auto-id="CloseDetails"] > .icon-close')
  }

  get searchField() {
      return cy.get("[id='searchInput-input']")
  }

  get partnerOffersList() {
      return cy.get("tbody[role='rowgroup']")
  }

  get unpublishButton() {
      return cy.get("[data-auto-id='unpublish']")
  }

  get unpublishContinueButton() {
     // return cy.get('.hidden > cui-modal.not-close-360 > .modal-container > .modal > .modal__dialog > .modal__content > .modal__footer > .pp-primary-button').click()
      return cy.get(
        '.hidden > cui-modal.not-close-360 > .modal-container > .modal > .modal__dialog > .modal__content > .modal__footer > :nth-child(2)',
      );
    }

  get atxdeleteButton() {
      return cy.get("[data-auto-id='delete']")
  }

  get partnerAssetsNotFound() {
      return cy.get("[data-auto-id='NoResultsFoundTxt']")
  }

  get cxPreview() {
      //return cy.get('.new-preview-btn > .pull-right').as('cx_preview');
      return cy.get('.new-preview-btn > .pull-right');
  }

  get cxPreview_your_offer_Label() {
      return cy.get('.heading').as('cxPreview_your_offer_Label');
  }

  get cxPreview_Back_to_Edit_Label() {
      return cy.get('.text-large')
  }

  get cxPreview_DETAILED_VIEW_Label() {
      return cy.get('.prview_body > #assetDetailTabs > .cxui-tabs > :nth-child(1) > [cxuitabanchor=""] > .tab__heading > .ng-star-inserted').as('cxPreview_DETAILED_VIEW_Label');
  }

  get cxPreview_CARD_VIEW_Label() {
      return cy.get('.prview_body > #assetDetailTabs > .cxui-tabs > :nth-child(2) > [cxuitabanchor=""] > .tab__heading > .ng-star-inserted')
  }

  get cxPreview_header_text_Label() {
      return cy.get('.header_text')
  }

  get cxPreview_header_Title_Block() {
      return cy.get('.text-xlarge')
  }
  get cxPreview_Overview_Block() {
      return cy.get('.offer_overview > :nth-child(1) > label').as('cxPreview_Overview_Block');
  }

  get cxPreview_ATTEND_A_LIVE_SESSION_Block() {
      return cy.get('.offer_session > label').as('cxPreview_ATTEND_A_LIVE_SESSION_Block');
  }

  get cxPreview_Partner_Text_Down() {
      return cy.get('.partner_con')
  }
  get cxPreview_Partner_Label() {
      return cy.get('.partner-text > :nth-child(1)')
  }
  
  get cxPreview_Ask_the_Experts_Label() {
      return cy.get(':nth-child(1) > .header__text')
  }

  get cxPreview_Accelerator_Label() {
      return cy.get(':nth-child(1) > .header__text')
  }
  
  get cxPreview_description_Overview_Text() {
      return cy.get('.preview-text')
  }

  get cxPreview_ATTEND_LIVE_SESSION_details_Table() {
      return cy.get('.cdk-row > .cdk-column-date')
  }

  get cxPreview_Card_View_Visual_CARD_Flex() {
      return cy.get(':nth-child(1) > :nth-child(1) > .cxui-card')
  }

  get cxPreview_Card_View_Visual_CARD_Title() {
      return cy.get('.card__title')
  }

  get cxPreview_Card_View_Visual_CARD_Presenter_Name() {
      return cy.get('.partner-name-title')
  }
  get confirm_CX_Publish() {
      return cy.get('.offer-summary-footer > .ng-star-inserted')
  }

  get confirm_CX_Publish_Ready_to_publish_your_offer_Label() {
      return cy.get('.title-for-summary')
  }
  
  get confirm_CX_Publish_Review_the_provided_information_below_Label() {
      return cy.get('.preview-panel > #main-details-panel > .details-panel-container > :nth-child(2) > :nth-child(1)')
  }
  
  get confirm_CX_Publish_Once_your_offer_published_Label() {
      return cy.get('.preview-panel > #main-details-panel > .details-panel-container > :nth-child(2) > :nth-child(2)')
  }
  
  get confirm_CX_Publish_OFFER_INFORMATION_Label() {
      return cy.get(':nth-child(2) > .dbl-margin-top')
  }

  get confirm_CX_Publish_Visual_Card() {
      return cy.get('.card')
  }

  get confirm_CX_Publish_Visual_Card_Language_Label() {
      return cy.get(':nth-child(1) > .card-info')
  }
  
  get confirm_CX_Publish_Visual_Card_Language_Value_Label() {
      return cy.get('.cxui-card__content > :nth-child(1) > .qtr-margin-left')
  }
  
  get confirm_CX_Publish_Visual_Card_Duration_Label() {
      return cy.get('div.ng-star-inserted > .card-info')
  }

  get confirm_CX_Publish_Visual_Card_Time_required() {
      return cy.get('div.ng-star-inserted > .card-info')
  }
  get confirm_CX_Publish_Description_Label() {
      return cy.get('.text-label')
  }

  get confirm_CX_Publish_Description_Text() {
      return cy.get('.description-text')
  }

  get confirm_CX_Publish_MAPPING_Label() {
      return cy.get('.details-panel-container > :nth-child(4) > :nth-child(1)')
  }

  get confirm_CX_Publish_MAPPING_Tabel() {
      return cy.get('.cdk-header-row > .cdk-column-successTrack')
  }
  get confirm_CX_Publish_MAPPING_Tabel_Expand() {
      return cy.get('.cdk-row > .fitted')
  }

  get confirm_CX_Publish_SELECTED_CUSTOMERS_Label() {
      return cy.get('.details-panel-container > :nth-child(4) > :nth-child(4)')
  }
  get confirm_CX_Publish_SCHEDULED_SESSIONS_Label() {
      return cy.get('.sub-title-offer-summary.ng-star-inserted')
  }

  get confirm_CX_Publish_SCHEDULED_SESSIONS_Tabel() {
      return cy.get('.offer-summary-tbl-heading > :nth-child(1)')
  }
  
  get confirm_CX_Publish_Go_Back_Button() {
      return cy.get('.go-back-button')
  }
  
}

export default new PartnerOffersPage()