/// <reference types="Cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { CustomersFacet } from '../../pageObjects/customers.po';

When('In Customer 360 view on Portfolio tab', () => {
	CustomersFacet.getActiveTab();
	cy.waitUntilAngularStable();
});

Then('Main Contact Card should exist', () => {
	CustomersFacet.getMainCustomerContactCard()
		.should('exist')
		.and('be.visible');
});

Then('UseCase View Card should exist', () => {
	CustomersFacet.getUseCasesOverviewCard().should('exist').and('be.visible');
});

When('Verify Usecase count is visible', () => {
	CustomersFacet.getUseCaseOverviewCardTitle().contains('Use Cases Overview');
});

Then(
	'Verify usecase count for items stalled, missing contacts and ontrack',
	() => {
		cy.get('.use-case-count-item >.use-case-count').each(($el) => {
			const value = parseInt($el.text());
			expect(value).to.be.within(0, 100);
		});
	},
);

Then ('Click on View Summary', () => {
cy.getByDataAutoId('view-summary-38396885').click();
cy.waitUntilAngularStable();

});

Then ('Validate if user lands on All Usecases View', () => {
cy.getByDataAutoId('use-case-filter-by').should('exist');
CustomersFacet.getAllUseCaseView360BackButton().click();
});


Then('Count usecases with nostatus match with usecases in onboarded stage',() => {
	const usecasecount = Cypress.$("[data-auto-id='lca-use-case-info-status']").length;
	const ralength = Cypress.$(".usecase-status").length;
	const value= parseInt(Cypress.$("[data-auto-id='use-case-count-no-status']").text());

	expect(value).to.be.eq(usecasecount-ralength);

});

Then('usecases count in Stalled stage should match with the count in UsecaseView',() => {
	 const value= parseInt(Cypress.$("[data-auto-id='use-case-count-stalled']").text());
	 cy.get("[data-auto-id='lca-use-case-info-status']").then($el => {
		cy.wrap($el).find(".usecase-status").then($els => {
			expect($els.filter(index => $els.eq(index).is(':contains(Stalled)'))).to.have.length(value);
	 })
	})
	})

	Then('usecases count in On Track should match with the count in UsecaseView',() => {
		const value= parseInt(Cypress.$("[data-auto-id='use-case-count-on-track']").text());
		cy.get("[data-auto-id='lca-use-case-info-status']").then($el => {
		   cy.wrap($el).find(".usecase-status").then($els => {
			   expect($els.filter(index => $els.eq(index).is(':contains(On Track)'))).to.have.length(value);
		})
	   })
	   })

	   Then('usecases count in missing contact should match with the count in UsecaseView',() => {
		const usecasecount = Cypress.$("[data-auto-id='lca-use-case-info-status']").length;
		const ontrac= parseInt(Cypress.$("[data-auto-id='use-case-count-on-track']").text());
		const stalled= parseInt(Cypress.$("[data-auto-id='use-case-count-stalled']").text());
		const nostatus= parseInt(Cypress.$("[data-auto-id='use-case-count-no-status']").text());
		cy.get("[data-auto-id='lca-use-case-info-status']").then($el => {
		   cy.wrap($el).find(".usecase-status").then($els => {
			   expect($els.filter(index => $els.eq(index).is(':contains(Missing Contact)'))).to.have.length(usecasecount-(ontrac+stalled+nostatus));
		})
	   })
	   })

When('User is on Main Customer Contact Card No contact is added', () => {
	const len = Cypress.$(
		"[data-auto-id='lca-customer-portfolio-primary-contact-card-name']",
	).length;
	cy.waitUntilAngularStable();
	if (len == 0) {
		CustomersFacet.getPortfolioMainContactCardNoContactAddbutton().click({
			force: true,
		});
	} else {
		CustomersFacet.getMainCustomerContactcardEllipsis().click({
			force: true,
		});
		CustomersFacet.getEditMainCustomercontactMenuitem()
			.should('exist')
			.and('contain', 'Edit Contact')
			.click({ force: true });
	}
	cy.get('body').then(($body) => {
		expect(
			$body.find(
				"[data-auto-id='lca-customer-portfolio-primary-contact-card-name']",
			).length,
		).to.equal(len);
	});
});

Then('Validate contact is added', () => {
	CustomersFacet.getPortfolioMaincontactcardEmail().should(
		'have.text',
		' nraya@cisco.com ',
	);
});
When ('User is on Main Customer Contact Card No contact is added in LifeCycle', () => {
    const len = Cypress.$("[data-auto-id='lca-contact-info-name']").length
    cy.waitUntilAngularStable();
    if (len ==0){
        CustomersFacet.getLCMainContactCardAddContact().click({force:true});

    }
    else{
        CustomersFacet.getLCMainContactCardEllipsis().click({force: true,});
        CustomersFacet.getLCEditMainCustomercontactMenuitem()
            .should('exist')
            .and('contain', 'Edit Contact')
            .click({ force: true });
    }
        cy.get('body')
              .then($body => {
                expect($body.find("[data-auto-id='lca-contact-info-name']").length).to.equal(len);
                })
            });


Then('Remove the contact', () => {
	CustomersFacet.getMainCustomerContactcardEllipsis().click({ force: true });
	CustomersFacet.getRemoveMainCustomercontactMenuitem().click();
	CustomersFacet.getRemoveMainCustomercontactMenuitem()
		.should('exist')
		.and('contain', 'Remove Contact');
	CustomersFacet.getRemoveContact().click();
});

Then('Validate contact is removed', () => {
	CustomersFacet.getPortfolioMainContactCardNoContactText().should('exist');
});

When('The ellipsis is visible on the Main contact card', () => {
	CustomersFacet.getMainCustomerContactcardEllipsis()
		.should('be.visible')
		.and('exist');
});

Then(
	'Check whether the ellipsis is clickable and dropdown is displayed',
	() => {
		CustomersFacet.getMainCustomerContactcardEllipsis().click({
			force: true,
		});
	},
);

Then(
	'The Edit Contact modal should display when Edit Contact item in drop down is clicked',
	() => {
		CustomersFacet.getEditMainCustomercontactMenuitem()
			.should('exist')
			.and('contain', 'Edit Contact')
			.click({ force: true });
	},
);

Then('User is able to Edit Contact and save Portfolio contact', () => {
	CustomersFacet.getPortfolioMainCustomerContactModalName()
		.should('exist')
		.click()
		.clear()
		.type('Niranjani');
	CustomersFacet.getPortfolioMainCustomerContactModalEmail()
		.should('exist')
		.click()
		.clear()
		.type('nraya@cisco.com')
		.waitUntilAngularStable();

	CustomersFacet.getMainContactAddModalLanguagePreference().click();
	CustomersFacet.getPortfolioMainCustomerContactModalLanguageSelect();
	CustomersFacet.getPortfolioMainCustomerContactModalSave().click();
	cy.waitUntilAngularStable();
});
Then('Validate LC contact is added' , () => {
    CustomersFacet.getLCMaincontactcardEmail().should('have.text', 'nraya@cisco.com');
   });

Then(
	'User is able to cancel out of the Portfolio Main Contact Edit modal',
	() => {
		CustomersFacet.getPortfolioMainCustomerContactModalCancel().click({
			force: true,
		});
	},
);

Then('User adds an invalid mail id and a validation error is displayed', () => {
	CustomersFacet.getPortfoliomaincontactModalTitle().should(
		'contain',
		'Edit Main Customer Contact',
	);

	CustomersFacet.getPortfolioMainCustomerContactModalName()
		.should('exist')
		.click()
		.clear()
		.type('Niranjani');
	CustomersFacet.getPortfolioMainCustomerContactModalEmail()
		.should('exist')
		.click()
		.clear()
		.type('nraya@')
		.trigger('tab', { keyCode: 9 });
	CustomersFacet.getPortfolioMainCustomerContactModalName().click();
	CustomersFacet.getFormValidationError().should(
		'have.text',
		'Please enter a valid email',
	);
	cy.get('input:invalid').should('have.length', 0);
});

When('User clicks on a usecase under a solution in Portfolio', () => {
	CustomersFacet.getSolution().contains('Campus Network').should('exist');
	cy.waitUntilAngularStable();
	CustomersFacet.getUseCaseCSIM()
		.contains('Campus Software Image Management')
		.should('exist');
	cy.waitUntilAngularStable();
	CustomersFacet.getUseCaseCSIM().click();
});

Then('The Usecase 360 view should be opened', () => {
	CustomersFacet.get360View().contains('LIFECYCLE');
	cy.waitUntilAngularStable();
});
Then('Main Customer Contact should be visible on LifeCycle tab', () => {
	cy.waitUntilAngularStable();
	CustomersFacet.getLCMainCardContainer().should('be.visible');
	CustomersFacet.getLCMainContactCard().should('be.visible');
});

When(
	'The ellipsis is visible on the Main contact card in LifeCycle tab',
	() => {
		CustomersFacet.getLCMainContactCardEllipsis()
			.should('exist')
			.and('be.visible');
	},
);

Then(
	'Check ellipsis is clickable and dropdown is displayed in LifeCycle tab',
	() => {
		CustomersFacet.getLCMainContactCardEllipsis().click({ force: true });
		//CustomersFacet.getLCMainCustomerContactEllipsisDropdown()
		//	.should('exist')
		//	.and('be.visible');
	},
);

Then('The drop down should have Edit Contact item in LifeCycle tab', () => {
	CustomersFacet.getLCEditMainCustomercontactMenuitem()
		.should('exist')
		.and('contain', 'Edit Contact');
});

Then('The drop down should have Remove contact item in LifeCycle tab', () => {
	CustomersFacet.getLCRemoveMainCustomercontactMenuitem()
		.should('exist')
		.and('contain', 'Remove Contact');
});

When(
	'The LC Edit Contact modal should display when Edit Contact item in drop down is clicked',
	() => {
		CustomersFacet.getLCEditMainCustomercontactMenuitem().click();
	},
);

Then('User should be able to enter name, email and select language', () => {
	CustomersFacet.getMainContactAddModalLanguagePreference().click();
	CustomersFacet.getPortfolioMainCustomerContactModalLanguageSelect();
	CustomersFacet.getLCmaincontacteditmodalformname()
		.should('exist')
		.click()
		.clear()
		.type('Niranjani');

	CustomersFacet.getLCmaincontacteditmodalformemail()
		.should('exist')
		.click({ force: true })
		.clear()
		.type('nraya@cisco.com');
});
Then('User should be able to save contact', () => {
	CustomersFacet.getLCmaincontacteditmodalsave()
		.should('exist')
		.click({ force: true });
});

Then(
	'Remove Contact item in drop down is clicked and the modal is displayed',
	() => {
		CustomersFacet.getLCRemoveMainCustomercontactMenuitem().click({
			force: true,
		});
	},
);

Then(
	'User should be able to Remove the contact by clicking on Remove button',
	() => {
		CustomersFacet.getLCmaincontacteditmodalsave().click({ force: true });
	},
);

Then('User should be able to click on Go Back in the modal and cancel', () => {
	cy.waitUntilAngularStable();
	CustomersFacet.getLCmaincontacteditremovemodalcancel().click({
		force: true,
	});
});

Then('User is able to X out of the edit modal', () => {
	CustomersFacet.getLCMainContactEditModalClose().click({
		force: true,
	});
});

Then('User is able to X out of the remove modal', () => {
	CustomersFacet.getLCmaincontactremovemodalclose().click({
		force: true,
	});
});

Then('User should be able to Cancel the modal', () => {
	CustomersFacet.getLCmaincontacteditremovemodalcancel().click({
		force: true,
	});
});

When(
	'AddEdit Partner Contacts button is visible and clickable on LifeCycle Tab',
	() => {
		CustomersFacet.getLCAddEditPartnerprovidedContact().scrollIntoView();
		CustomersFacet.getLCAddEditPartnerprovidedContact()
			.should('be.visible')
			.and('exist')
			.click({ force: true });
	},
);
Then('User is able view Partner Contacts modal & enter details', () => {
	CustomersFacet.getPartnerContactAddModalTitle().should(
		'contain',
		'Add/Edit Partner Provided Contacts',
	);
	CustomersFacet.getPartnerContactAddModalLanguagePreference().click();
	cy.get('cxui-option').contains('English (United States)').click();

	const len = Cypress.$("input[data-auto-id^='lca-partner-email-']").length;
	for (let i = 0; i < len; i++) {
		cy.getByDataAutoId('lca-partner-email-' + i)
			.click()
			.clear()
			.type('nraya' + i + '@cisco.com')
			.should('have.value', 'nraya' + i + '@cisco.com');
	}

	for (let j = len; j < 5; j++) {
		CustomersFacet.getAddAnotherContacttotheusecasePartnerProvided().click();
		cy.getByDataAutoId('lca-partner-email-' + j).click();
		cy.getByDataAutoId('lca-partner-email-' + j)
			.type('nraya' + j + '@cisco.com')
			.should('have.value', 'nraya' + j + '@cisco.com');
	}
});

Then('User is able to save the Partner contacts', () => {
	CustomersFacet.getPartnerProvidedContactSave().click({ force: true });
});

Then('User is able to Cancel the Partner contact operation', () => {
	CustomersFacet.getPartnerProvidedContactCancel().click({ force: true });
});

Then('User is able to Delete the Partner contacts', () => {
	const len = Cypress.$(
		"button[data-auto-id^='lca-delete-email-row-']",
	).length;
	const allDeleteBtns = [];

	for (let i = len - 1; i >= 0; i--) {
		allDeleteBtns.push(
			Cypress.$(
				'button[data-auto-id="lca-delete-email-row-' + i + '"',
			)[0].getAttribute('data-auto-id'),
		);

		cy.getByDataAutoId('lca-delete-email-row-' + i).click();
	}
	cy.get('body').then(($body) => {
		for (let i = 0; i < allDeleteBtns.length; i++) {
			expect($body.find(allDeleteBtns[i]).length).to.equal(0);
		}
	});
});

Then(
	'User enters a duplicate mail id and a validation error is displayed',
	() => {
		for (let i = 0; i < 2; i++) {
			CustomersFacet.getAddAnotherContacttotheusecasePartnerProvided().click();
			cy.getByDataAutoId('lca-partner-email-' + i)
				.click()
				.type('nraya@cisco.com')
				.should('have.value', 'nraya@cisco.com');
		}
		CustomersFacet.getAddAnotherContacttotheusecasePartnerProvided().click();
		cy.waitUntilAngularStable();
		CustomersFacet.getFormValidationError().should(
			'have.text',
			'Email is duplicateInvalid email address',
		);
		CustomersFacet.getPartnerProvidedContactCancel().click({ force: true });
	},
);

When('User is on LifeCycle tab customer playbook link should be active', () => {
	CustomersFacet.getneedcustomerassistancelink();
});
