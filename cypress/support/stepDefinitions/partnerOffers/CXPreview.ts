/// <reference types="Cypress" />
import {
	And,
	Given,
	Then,
	When,
} from '@badeball/cypress-cucumber-preprocessor';
import aTXPage from '../../pageObjects/partnerOffers/ATX.po';

const offerTitle = ''; //, offerDescription;

before(function () {
	cy.fixture('testdata/partnerOffers/messages').then(function (data) {
		this.data = data;
	});
});

// When(`Entering the Title Description Duration`, () => {
//     offerTitle = `Test-ATX-UI-Automation ${(Math.random() + 1).toString(36).substring(2)}`
//     offerDescription = `Test-ATX-UI-Automation Description ${(Math.random() + 1).toString(36).substring(2)}`
// //    askTheExpertsPage.atxTitle.click()
//     cy.wait(2000)
//     aTXPage.atxTitle.type(offerTitle)
//     aTXPage.atxDescription.click()
//     cy.wait(8000)
//     aTXPage.atxDescription.type(offerDescription)
//     aTXPage.atxDuration.click()
//     aTXPage.atxDuration.type('75')
//     cy.get('.handout_filed > .form-group__text > .cxui-label').click()
// })

When(`Unpublished Screen Preview button should be present`, () => {
	// cy.wait('@cx_preview');
	aTXPage.cxPreview.should('be.visible');
	aTXPage.cxPreview.click();
	//cy.get(aTXPage.cxPreview).should('be.visible')
});

When(`Preview your offer Label is present in Preview Screen`, () => {
	// cy.wait('@cxPreview_your_offer_Label');

	aTXPage.cxPreview_your_offer_Label.should('be.visible');
});

When(`Back to edit button should be present in Preview Screen`, () => {
	aTXPage.cxPreview_Back_to_Edit_Label.should('be.visible');
});

When(`In Preview screen Validate the Detail View Label`, () => {
	// cy.wait('@cxPreview_DETAILED_VIEW_Label');
	aTXPage.cxPreview_DETAILED_VIEW_Label.should('be.visible');
	aTXPage.cxPreview_CARD_VIEW_Label.click();
	aTXPage.cxPreview_DETAILED_VIEW_Label.click();
});

When(`In Preview screen Validate text`, () => {
	// cy.wait('@cxPreview_header_text_Label');
	aTXPage.cxPreview_header_text_Label.should(
		'have.text',
		' This is how your offer will appear on CX Cloud once your customers have selected it. If you want to make any changes, you can still go back to edit. ',
	);
});

When(`In Detail View Validate the Ask the Experts Label`, () => {
	aTXPage.cxPreview_header_Title_Block.should('be.visible');
});

When(`In Detail View, Validate the Ask the Experts Label`, () => {
	aTXPage.cxPreview_Ask_the_Experts_Label.should(
		'have.text',
		'Ask the Experts',
	);
});

When(`In Detail View Validate the Accelerator Label`, () => {
	aTXPage.cxPreview_Accelerator_Label.should('have.text', 'Accelerator');
});
When(`In Detail View Validate the Partner Name`, () => {
	aTXPage.cxPreview_Partner_Label.should('be.visible');
});

When(`In Detail View Validate the OVERVIEW Card in Unpublished Screen`, () => {
	// cy.wait('@cxPreview_Overview_Block');
	aTXPage.cxPreview_Overview_Block.should('be.visible');
});

When(
	`ATX In Detail View Validate the ATTEND A LIVE SESSION Card in Unpublished Screen`,
	() => {
		// cy.wait('@cxPreview_ATTEND_A_LIVE_SESSION_Block');
		aTXPage.cxPreview_ATTEND_A_LIVE_SESSION_Block.should('be.visible');
	},
);

When(
	`In Preview Screen Validate the Text The Partner is solely responsible for this content. is present`,
	() => {
		aTXPage.cxPreview_Partner_Text_Down.should(
			'have.text',
			' The Partner is solely responsible for this content. ',
		);
	},
);

When(
	`Back to edit button should be present in Preview Screen and click should be Work`,
	() => {
		// cy.wait('@cxPreview_Back_to_Edit_Label');
		aTXPage.cxPreview_Back_to_Edit_Label.click();
	},
);

When(
	`In Detail View Validate the OVERVIEW text is present in Published Screen`,
	() => {
		aTXPage.cxPreview_description_Overview_Text.should('be.visible');
	},
);

When(
	`ATX In Detail View Validate the ATTEND A LIVE SESSION details is present in Published Screen`,
	() => {
		aTXPage.cxPreview_ATTEND_LIVE_SESSION_details_Table.should(
			'be.visible',
		);
	},
);

When(`In Preview screen Validate the Card View Label`, () => {
	aTXPage.cxPreview_CARD_VIEW_Label.should('be.visible');
	aTXPage.cxPreview_CARD_VIEW_Label.click();
});

When(`In Card View Validate the Visual Card and Empty Cards is present`, () => {
	aTXPage.cxPreview_Card_View_Visual_CARD_Flex.should('be.visible');
});

When(`In Card View Validate the Title in visual card`, () => {
	aTXPage.cxPreview_Card_View_Visual_CARD_Title.should('be.visible');
});

When(`In Card View Validate the Partner Name in visual card`, () => {
	aTXPage.cxPreview_Card_View_Visual_CARD_Presenter_Name.should('be.visible');
});

When(`Publishing CXCloud Button the Ask the Experts`, () => {
	aTXPage.publishToCXCloudButton.click();
});

When(
	`Validate the Ready to publish your offer? Window is present after clicking Published to CX Cloud`,
	() => {
		aTXPage.confirm_CX_Publish_Ready_to_publish_your_offer_Label.should(
			'be.visible',
		);
		aTXPage.confirm_CX_Publish_Ready_to_publish_your_offer_Label.should(
			'have.text',
			' Ready to publish your offer? ',
		);
	},
);

When(
	`Validate the Review the provided information below Present in  Ready to publish window`,
	() => {
		aTXPage.confirm_CX_Publish_Review_the_provided_information_below_Label.should(
			'be.visible',
		);
		aTXPage.confirm_CX_Publish_Review_the_provided_information_below_Label.should(
			'have.text',
			' Review the provided information below. ',
		);
	},
);

When(
	`Validate the Text content Once your offer is published to CX Cloud no further changes can be made in  Ready to publish window`,
	() => {
		aTXPage.confirm_CX_Publish_Once_your_offer_published_Label.should(
			'be.visible',
		);
		aTXPage.confirm_CX_Publish_Once_your_offer_published_Label.should(
			'have.text',
			' Once your offer is published to CX Cloud, no further changes can be made. ',
		);
	},
);

When(
	`Validate the OFFER INFORMATION and Text Label is present in  Ready to publish window`,
	() => {
		aTXPage.confirm_CX_Publish_OFFER_INFORMATION_Label.should('be.visible');
		aTXPage.confirm_CX_Publish_OFFER_INFORMATION_Label.should(
			'have.text',
			' OFFER INFORMATION ',
		);
	},
);

When(
	`Verify the Visual Card and Language and Duration and Time Required is present`,
	() => {
		aTXPage.confirm_CX_Publish_OFFER_INFORMATION_Label.scrollIntoView();
		aTXPage.confirm_CX_Publish_Visual_Card.should('be.visible');
		aTXPage.confirm_CX_Publish_Visual_Card_Language_Label.should(
			'be.visible',
		);
		aTXPage.confirm_CX_Publish_Visual_Card_Language_Label.should(
			'have.text',
			'Language:',
		);
		aTXPage.confirm_CX_Publish_Visual_Card_Language_Value_Label.should(
			'be.visible',
		);
		aTXPage.confirm_CX_Publish_Visual_Card_Language_Value_Label.should(
			'have.text',
			'English',
		);
		aTXPage.confirm_CX_Publish_Visual_Card_Duration_Label.should(
			'be.visible',
		);
		aTXPage.confirm_CX_Publish_Visual_Card_Duration_Label.should(
			'have.text',
			'Duration:',
		);
	},
);

When(`Verify the Visual Card and Language and Time Required is present`, () => {
	aTXPage.confirm_CX_Publish_OFFER_INFORMATION_Label.scrollIntoView();
	aTXPage.confirm_CX_Publish_Visual_Card.should('be.visible');
	aTXPage.confirm_CX_Publish_Visual_Card_Language_Label.should('be.visible');
	aTXPage.confirm_CX_Publish_Visual_Card_Language_Label.should(
		'have.text',
		'Language:',
	);
	aTXPage.confirm_CX_Publish_Visual_Card_Language_Value_Label.should(
		'be.visible',
	);
	aTXPage.confirm_CX_Publish_Visual_Card_Language_Value_Label.should(
		'have.text',
		'English',
	);
	aTXPage.confirm_CX_Publish_Visual_Card_Time_required.should('be.visible');
	aTXPage.confirm_CX_Publish_Visual_Card_Time_required.should(
		'have.text',
		'Time required:',
	);
});
When(
	`Validate the Description Label and Text in Ready to publish window`,
	() => {
		aTXPage.confirm_CX_Publish_Description_Label.should(
			'have.text',
			' Description ',
		);
		aTXPage.confirm_CX_Publish_Description_Text.should('be.visible');
	},
);

When(
	`Validate the Mapping details is present in Ready to publish window`,
	() => {
		aTXPage.confirm_CX_Publish_MAPPING_Label.should(
			'have.text',
			' MAPPING ',
		);
		aTXPage.confirm_CX_Publish_MAPPING_Tabel.should('be.visible');
		aTXPage.confirm_CX_Publish_MAPPING_Tabel_Expand.should('be.visible');
		aTXPage.confirm_CX_Publish_MAPPING_Tabel_Expand.click();
	},
);

When(
	`Validate the SELECTED CUSTOMERS details is present in Ready to publish window`,
	() => {
		aTXPage.confirm_CX_Publish_SELECTED_CUSTOMERS_Label.scrollIntoView();
		aTXPage.confirm_CX_Publish_SELECTED_CUSTOMERS_Label.should(
			'be.visible',
		);
		// aTXPage.confirm_CX_Publish_SELECTED_CUSTOMERS_Label.should('have.text',' SELECTED CUSTOMERS ')
	},
);

When(
	`Validate the SCHEDULED SESSIONS details is present in Ready to publish window`,
	() => {
		aTXPage.confirm_CX_Publish_SELECTED_CUSTOMERS_Label.scrollIntoView();
		aTXPage.confirm_CX_Publish_SCHEDULED_SESSIONS_Label.should(
			'be.visible',
		);
		aTXPage.confirm_CX_Publish_SCHEDULED_SESSIONS_Label.should(
			'have.text',
			' SCHEDULED SESSIONS ',
		);
		aTXPage.confirm_CX_Publish_SCHEDULED_SESSIONS_Label.should(
			'be.visible',
		);
	},
);

When(
	`Check the Go Back button and Conform Button is present and it is clickable`,
	() => {
		aTXPage.confirm_CX_Publish_Go_Back_Button.should('be.visible');
	},
);

When(`Check Back to Edit button is present and it is clickable`, () => {
	aTXPage.cxPreview_Back_to_Edit_Label.should('be.visible');
});

Then(`CXPublish Confirm Button`, () => {
	aTXPage.confirm_CX_Publish.click();
});

When(`CXPublish Confirm Button`, () => {
	aTXPage.confirm_CX_Publish.click();
});

When(`Navigate to the map your Offer to cx cloud option`, () => {
	aTXPage.mapYourOfferToCxCloud.click();
});

When(`Selecting the CX cloud options`, () => {
	aTXPage.successTrackDropdown.click();
	aTXPage.campusNetworkOption.click();
	aTXPage.useCaseDropdown.click();
	aTXPage.campusNetworkAssuranceOption.click();
	aTXPage.pitStopDropdown.click();
	aTXPage.implementOption.click();
	aTXPage.checklistDropdown.click();
	aTXPage.checklistOptions.each((ele) => {
		cy.wrap(ele).click({ multiple: true });
	});
});

When(`Selecting the customers`, () => {
	aTXPage.selectCustomers.click();
});

When(`Schedule the session`, () => {
	let d = new Date();
	const offset = d.getTimezoneOffset();
	d = new Date(d.getTime() - offset * 60 * 1000);
	// let myDate = d.toISOString().split('T')[0];
	//     cy.get('.calendar-icon').as('Select_Date');
	//     cy.wait('@Select_Date')

	cy.get('.cxui-datepicker > .cxui-input').click();

	cy.get(':nth-child(35) > .date-item').click();
	cy.get('.status-label > :nth-child(2)').click();

	aTXPage.setSessionTime.click();
	cy.get('.status-label > :nth-child(2)').click();
	aTXPage.setTimeZone.click();
	cy.get('.status-label > :nth-child(2)').click();
	aTXPage.setPresenter.type('test name');
	cy.get('.status-label > :nth-child(2)').click();
});

And(`Validate the message for session start date`, function () {
	cy.get('.provision-resource-input__validation--stacked-form').contains(
		this.data.SessionStartDate,
	);
});

Then(`Validate the ATX offer status`, () => {
	aTXPage.offerStatusLabel.contains('Unpublished');
});

And('Close the 360 degree view', () => {
	aTXPage.close360DegreeView.click();
});

When(`Search for the created ATX offer`, () => {
	aTXPage.searchField.scrollIntoView();
	aTXPage.searchField.click().type(offerTitle).type('{enter}');
});

When(`Validate Ask The Experts is displayed`, () => {
	aTXPage.partnerOffersList.contains(offerTitle);
});

Given(`Click on the search Ask the Experts`, () => {
	aTXPage.partnerOffersList.click();
});

Then(`Unpublish the Ask the Experts`, () => {
	aTXPage.unpublishButton.click();
	aTXPage.unpublishContinueButton.click({ force: true });
});

Then(`Delete the Ask the Experts`, () => {
	aTXPage.atxdeleteButton.click();
	aTXPage.unpublishContinueButton.click({ force: true });
});

And(`Verify the Ask the Experts deleted successfully`, () => {
	aTXPage.searchField.scrollIntoView();
	aTXPage.searchField.clear();
	aTXPage.searchField.click().type(offerTitle).type('{enter}');
	aTXPage.partnerAssetsNotFound.should('be.visible');
});
