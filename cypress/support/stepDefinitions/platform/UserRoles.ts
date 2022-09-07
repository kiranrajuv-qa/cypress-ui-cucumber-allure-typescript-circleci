/// <reference types= "Cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import pxconfig from '../../../fixtures/testdata/platform/PX_Config.json';
import app from '../../pageObjects/app.po';
import ManageUsers from '../../pageObjects/platform/ManageUsers.po';

let PLSstatusfromUI;

Given(`User cliks on the Manage Profile Link`, () => {
	//Get the PLS status from UI
	ManageUsers.UserIcon.as('UserIcon');
	cy.get('@UserIcon').should('be.visible');
	app.todayFacet.click({ force: true });
	ManageUsers.PLSAccessStatusTile.as('PLSState');
	cy.get('@PLSState').should('be.visible');
	ManageUsers.PLSAccessStatus.then((PLSstausName) => {
		const PLSstatusfromHomePage = PLSstausName.text();
		PLSstatusfromUI = PLSstatusfromHomePage.replace(' ', '').trim();
		cy.log(PLSstatusfromUI);
	});

	//Click on the Manage Profile link
	ManageUsers.UserIcon.as('Icon');
	cy.get('@Icon').should('be.visible');

	ManageUsers.UserIcon.click({ force: true });

	ManageUsers.ManageProfileLink.as('Link');
	cy.get('@Link').should('be.visible');

	ManageUsers.ManageProfileLink.click({ force: true });

	ManageUsers.HelpIcon.as('HelpSymbol');
	cy.get('@HelpSymbol').should('be.visible');
});

When('User clicks on the Help Icon', () => {
	ManageUsers.HelpIcon.click({ force: true });

	ManageUsers.AboutRolesHeader.as('HeaderText');
	cy.get('@HeaderText').should('be.visible');
});

Then('Verify whether the application navigates to About Roles section', () => {
	//Validate the Headers and Description in the About Roles section
	ManageUsers.AboutRolesHeader.should('have.text', pxconfig.AboutRolesHeader);
	ManageUsers.AboutRolesDescription.should(
		'have.text',
		pxconfig.AboutRolesDescription,
	);

	//Validate the Column Headers
	ManageUsers.AboutRolesColumnHeader1.should(
		'have.text',
		pxconfig.Table1ColumnHeader1,
	);
	ManageUsers.AboutRolesColumnHeader2.should(
		'have.text',
		pxconfig.Table1ColumnHeader2,
	);
	ManageUsers.AboutRolesColumnHeader3.should(
		'have.text',
		pxconfig.Table2ColumnHeader1,
	);
	ManageUsers.AboutRolesColumnHeader4.should(
		'have.text',
		pxconfig.Table2ColumnHeader2,
	);
});

Given(`User expands the Executive role`, () => {
	ManageUsers.ExecutiveRoleHeader.should(
		'have.text',
		pxconfig.ExecutiveRoleHeader,
	);
	ManageUsers.ExecutiveExpandButton.click({ force: true });
});

When(
	`The description and feature details are displayed for Executive Role`,
	() => {
		ManageUsers.ExecutiveRoleDescription.as('ExecutiveDescription');
		cy.get('@ExecutiveDescription').should('be.visible');
		ManageUsers.ExecutiveRoleDescription.should(
			'have.text',
			pxconfig.ExecutiveRoleDescription,
		);
	},
);

Then(`Verify whether the permissions are as desired for Executive Role`, () => {
	ManageUsers.AdministratorFeature.should(
		'have.text',
		pxconfig.AdministratorSettingsFeature,
	);
	ManageUsers.ExecutiveRoleAdministratorFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.APIsFeature.should('have.text', pxconfig.APIsFeature);
	ManageUsers.ExecutiveRoleAPIsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CollaborateFeature.should(
		'have.text',
		pxconfig.CollaborateFeature,
	);
	ManageUsers.ExecutiveRoleCollaborateFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.CustomeraccountsFeature.should(
		'have.text',
		pxconfig.CustomeraccountsFeature,
	);
	ManageUsers.ExecutiveRoleCustomeraccountsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.ExecutiveRoleCustomerAccountsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.CustomerContractsFeature.should(
		'have.text',
		pxconfig.CustomercontractsFeature,
	);
	ManageUsers.ExecutiveRoleCustomerContractsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.ExecutiveRoleCustomerContractsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.LearningFeature.should('have.text', pxconfig.LearningFeature);
	ManageUsers.ExecutiveRoleLearningFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.ExecutiveRoleLearningFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.NotificationsFeature.should(
		'have.text',
		pxconfig.NotificationsFeature,
	);
	ManageUsers.ExecutiveRoleNotificationsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.ExecutiveRoleNotificationsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PartneroffersFeature.should(
		'have.text',
		pxconfig.PartnerOffersFeature,
	);
	if (PLSstatusfromUI == 'Approved') {
		ManageUsers.ExecutiveRolePartnerOffersFeaturestatus.should(
			'have.attr',
			'class',
			'icon-check ng-star-inserted',
		);
	} else {
		cy.log(PLSstatusfromUI);
		ManageUsers.ExecutiveRolePartnerOffersFeaturestatus_NonPLS.should(
			'have.attr',
			'class',
			'icon-remove ng-star-inserted',
		);
	}

	ManageUsers.PersonalprofileFeature.should(
		'have.text',
		pxconfig.PersonalprofileFeature,
	);
	ManageUsers.ExecutiveRolePersonalProfileFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalfeedbackFeature.should(
		'have.text',
		pxconfig.Portalfeedbackfeature,
	);
	ManageUsers.ExecutiveRolePortalfeedackFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalsupportFeature.should(
		'have.text',
		pxconfig.PortalSupportfeature,
	);
	ManageUsers.ExecutiveRolePortalsupportFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.TodaydashboardFeature.should(
		'have.text',
		pxconfig.Todaydashboardfeature,
	);
	ManageUsers.ExecutiveRoleTodaydashboardFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.ExecutiveRoleTodaydashboardFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.UsermanagementFeature.should(
		'have.text',
		pxconfig.Usermanagementfeature,
	);
	ManageUsers.ExecutiveRoleUsermanagementFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.ExecutiveCollapseButton.click({ force: true });
});

Given(`User expands the CSPL role`, () => {
	ManageUsers.CSPLRoleHeader.should('have.text', pxconfig.CSPLRoleHeader);
	ManageUsers.CSPLExpandButton.click({ force: true });
});

When(`The description and feature details are displayed for CSPL Role`, () => {
	ManageUsers.CSPLRoleDescription.as('CSPLDescription');
	cy.get('@CSPLDescription').should('be.visible');
	ManageUsers.CSPLRoleDescription.should(
		'have.text',
		pxconfig.CSPLRoleDescription,
	);
});

Then(`Verify whether the permissions are as desired for CSPL Role`, () => {
	ManageUsers.AdministratorFeature.should(
		'have.text',
		pxconfig.AdministratorSettingsFeature,
	);
	ManageUsers.CSPLRoleAdministratorFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CSPLAPIsFeature.should('have.text', pxconfig.APIsFeature);
	ManageUsers.CSPLRoleAPIsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CollaborateFeature.should(
		'have.text',
		pxconfig.CollaborateFeature,
	);
	ManageUsers.CSPLRoleCollaborateFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.CustomeraccountsFeature.should(
		'have.text',
		pxconfig.CustomeraccountsFeature,
	);
	ManageUsers.CSPLRoleCustomeraccountsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSPLRoleCustomercontractsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.CustomerContractsFeature.should(
		'have.text',
		pxconfig.CustomercontractsFeature,
	);
	ManageUsers.CSPLRoleCustomerContractsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSPLRoleCustomercontractsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.LearningFeature.should('have.text', pxconfig.LearningFeature);
	ManageUsers.CSPLRoleLearningFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSPLRoleLearningFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.NotificationsFeature.should(
		'have.text',
		pxconfig.NotificationsFeature,
	);
	ManageUsers.CSPLRoleNotificationsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSPLRoleNotificationsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PartneroffersFeature.should(
		'have.text',
		pxconfig.PartnerOffersFeature,
	);
	if (PLSstatusfromUI == 'Approved') {
		ManageUsers.CSPLRolePartnerOffersFeaturestatus.should(
			'have.attr',
			'class',
			'icon-check ng-star-inserted',
		);
	} else {
		ManageUsers.CSPLRolePartnerOffersFeaturestatus_NonPLS.should(
			'have.attr',
			'class',
			'icon-remove ng-star-inserted',
		);
	}

	ManageUsers.PersonalprofileFeature.should(
		'have.text',
		pxconfig.PersonalprofileFeature,
	);
	ManageUsers.CSPLRolePersonalProfileFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalfeedbackFeature.should(
		'have.text',
		pxconfig.Portalfeedbackfeature,
	);
	ManageUsers.CSPLRolePortalfeedackFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalsupportFeature.should(
		'have.text',
		pxconfig.PortalSupportfeature,
	);
	ManageUsers.CSPLRolePortalsupportFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.TodaydashboardFeature.should(
		'have.text',
		pxconfig.Todaydashboardfeature,
	);
	ManageUsers.CSPLRoleTodaydashboardFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSPLRoleTodaydashboardRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.UsermanagementFeature.should(
		'have.text',
		pxconfig.Usermanagementfeature,
	);
	ManageUsers.CSPLRoleUsermanagementFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CSPLCollapseButton.click({ force: true });
});

Given(`User expands the CSM role`, () => {
	ManageUsers.CSMRoleHeader.should('have.text', pxconfig.CSMRoleHeader);
	ManageUsers.CSMExpandButton.click({ force: true });
});

When(`The description and feature details are displayed for CSM Role`, () => {
	ManageUsers.CSMRoleDescription.as('CSMDescription');
	cy.get('@CSMDescription').should('be.visible');
	ManageUsers.CSMRoleDescription.should(
		'have.text',
		pxconfig.CSMRoleDescription,
	);
});

Then(`Verify whether the permissions are as desired for CSM Role`, () => {
	ManageUsers.AdministratorFeature.should(
		'have.text',
		pxconfig.AdministratorSettingsFeature,
	);
	ManageUsers.CSMRoleAdministratorFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CSMRoleAPIsFeature.should('have.text', pxconfig.APIsFeature);
	ManageUsers.CSMRoleAPIsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CollaborateFeature.should(
		'have.text',
		pxconfig.CollaborateFeature,
	);
	ManageUsers.CSMRoleCollaborateFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.CustomeraccountsFeature.should(
		'have.text',
		pxconfig.CustomeraccountsFeature,
	);
	ManageUsers.CSMRoleCustomeraccountsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSMRoleCustomeraccountsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.CustomerContractsFeature.should(
		'have.text',
		pxconfig.CustomercontractsFeature,
	);
	ManageUsers.CSMRoleCustomerContractsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSMRoleCustomerContractsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.LearningFeature.should('have.text', pxconfig.LearningFeature);
	ManageUsers.CSMRoleLearningFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSMRoleLearningFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.NotificationsFeature.should(
		'have.text',
		pxconfig.NotificationsFeature,
	);
	ManageUsers.CSMRoleNotificationsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSMRoleNotificationsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PartneroffersFeature.should(
		'have.text',
		pxconfig.PartnerOffersFeature,
	);
	if (PLSstatusfromUI == 'Approved') {
		ManageUsers.CSMRolePartnerOffersFeaturestatus.should(
			'have.attr',
			'class',
			'icon-check ng-star-inserted',
		);
		ManageUsers.CSMRolePartnerOffersFeatureRead_only.should(
			'have.text',
			pxconfig.FeatureStatus,
		);
	} else {
		ManageUsers.CSMRolePartnerOffersFeaturestatus_NonPLS.should(
			'have.attr',
			'class',
			'icon-remove ng-star-inserted',
		);
	}

	ManageUsers.PersonalprofileFeature.should(
		'have.text',
		pxconfig.PersonalprofileFeature,
	);
	ManageUsers.CSMRolePersonalProfileFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalfeedbackFeature.should(
		'have.text',
		pxconfig.Portalfeedbackfeature,
	);
	ManageUsers.CSMRolePortalfeedackFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalsupportFeature.should(
		'have.text',
		pxconfig.PortalSupportfeature,
	);
	ManageUsers.CSMRolePortalsupportFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.TodaydashboardFeature.should(
		'have.text',
		pxconfig.Todaydashboardfeature,
	);
	ManageUsers.CSMRoleTodaydashboardFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.UsermanagementFeature.should(
		'have.text',
		pxconfig.Usermanagementfeature,
	);
	ManageUsers.CSMRoleUsermanagementFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CSMCollapseButton.click({ force: true });
});

Given(`User expands the CSS role`, () => {
	ManageUsers.CSSRoleHeader.should('have.text', pxconfig.CSSRoleHeader);
	ManageUsers.CSSExpandButton.click({ force: true });
});

When(`The description and feature details are displayed for CSS Role`, () => {
	ManageUsers.CSSRoleDescription.as('CSSDescription');
	cy.get('@CSSDescription').should('be.visible');
	ManageUsers.CSSRoleDescription.should(
		'have.text',
		pxconfig.CSSRoleDescription,
	);
});

Then(`Verify whether the permissions are as desired for CSS Role`, () => {
	ManageUsers.AdministratorFeature.should(
		'have.text',
		pxconfig.AdministratorSettingsFeature,
	);
	ManageUsers.CSSRoleAdministratorFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CSSRoleAPIsFeature.should('have.text', pxconfig.APIsFeature);
	ManageUsers.CSSRoleAPIsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CollaborateFeature.should(
		'have.text',
		pxconfig.CollaborateFeature,
	);
	ManageUsers.CSSRoleCollaborateFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.CustomeraccountsFeature.should(
		'have.text',
		pxconfig.CustomeraccountsFeature,
	);
	ManageUsers.CSSRoleCustomeraccountsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSSRoleCustomeraccountsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.CustomerContractsFeature.should(
		'have.text',
		pxconfig.CustomercontractsFeature,
	);
	ManageUsers.CSSRoleCustomerContractsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.LearningFeature.should('have.text', pxconfig.LearningFeature);
	ManageUsers.CSSRoleLearningFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSSRoleLearningFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.NotificationsFeature.should(
		'have.text',
		pxconfig.NotificationsFeature,
	);
	ManageUsers.CSSRoleNotificationsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.CSSRoleNotificationsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PartneroffersFeature.should(
		'have.text',
		pxconfig.PartnerOffersFeature,
	);
	ManageUsers.CSSRolePartnerOffersFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.PersonalprofileFeature.should(
		'have.text',
		pxconfig.PersonalprofileFeature,
	);
	ManageUsers.CSSRolePersonalProfileFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalfeedbackFeature.should(
		'have.text',
		pxconfig.Portalfeedbackfeature,
	);
	ManageUsers.CSSRolePortalfeedackFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalsupportFeature.should(
		'have.text',
		pxconfig.PortalSupportfeature,
	);
	ManageUsers.CSSRolePortalsupportFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.TodaydashboardFeature.should(
		'have.text',
		pxconfig.Todaydashboardfeature,
	);
	ManageUsers.CSSRoleTodaydashboardFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.UsermanagementFeature.should(
		'have.text',
		pxconfig.Usermanagementfeature,
	);
	ManageUsers.CSSRoleUsermanagementFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CSSCollapseButton.click({ force: true });
});

Given(`User expands the RM role`, () => {
	ManageUsers.RMRoleHeader.should('have.text', pxconfig.RMRoleHeader);
	ManageUsers.RMExpandButton.click({ force: true });
});

When(`The description and feature details are displayed for RM Role`, () => {
	ManageUsers.RMRoleDescription.as('RMDescription');
	cy.get('@RMDescription').should('be.visible');
	ManageUsers.RMRoleDescription.should(
		'have.text',
		pxconfig.RMRoleDescription,
	);
});

Then(`Verify whether the permissions are as desired for RM Role`, () => {
	ManageUsers.AdministratorFeature.should(
		'have.text',
		pxconfig.AdministratorSettingsFeature,
	);
	ManageUsers.RMRoleAdministratorFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.RMRoleAPIsFeature.should('have.text', pxconfig.APIsFeature);
	ManageUsers.RMRoleAPIsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CollaborateFeature.should(
		'have.text',
		pxconfig.CollaborateFeature,
	);
	ManageUsers.RMRoleCollaborateFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.CustomeraccountsFeature.should(
		'have.text',
		pxconfig.CustomeraccountsFeature,
	);
	ManageUsers.RMRoleCustomeraccountsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CustomerContractsFeature.should(
		'have.text',
		pxconfig.CustomercontractsFeature,
	);
	ManageUsers.RMRoleCustomerContractsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.RMRoleCustomerContractsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.LearningFeature.should('have.text', pxconfig.LearningFeature);
	ManageUsers.RMRoleLearningFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.RMRoleLearningFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.NotificationsFeature.should(
		'have.text',
		pxconfig.NotificationsFeature,
	);
	ManageUsers.RMRoleNotificationsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.RMRoleNotificationsFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PartneroffersFeature.should(
		'have.text',
		pxconfig.PartnerOffersFeature,
	);
	ManageUsers.RMRolePartnerOffersFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.PersonalprofileFeature.should(
		'have.text',
		pxconfig.PersonalprofileFeature,
	);
	ManageUsers.RMRolePersonalProfileFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalfeedbackFeature.should(
		'have.text',
		pxconfig.Portalfeedbackfeature,
	);
	ManageUsers.RMRolePortalfeedackFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalsupportFeature.should(
		'have.text',
		pxconfig.PortalSupportfeature,
	);
	ManageUsers.RMRolePortalsupportFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.TodaydashboardFeature.should(
		'have.text',
		pxconfig.Todaydashboardfeature,
	);
	ManageUsers.RMRoleTodaydashboardFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.UsermanagementFeature.should(
		'have.text',
		pxconfig.Usermanagementfeature,
	);
	ManageUsers.RMRoleUsermanagementFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.RMCollapseButton.click({ force: true });
});

Given(`User expands the Admin role`, () => {
	ManageUsers.AdminRoleHeader.should('have.text', pxconfig.AdminRoleHeader);
	ManageUsers.AdminExpandButton.click({ force: true });
});

When(`The description and feature details are displayed for Admin Role`, () => {
	ManageUsers.AdminRoleDescription.as('AdminDescription');
	cy.get('@AdminDescription').should('be.visible');
	ManageUsers.AdminRoleDescription.should(
		'have.text',
		pxconfig.AdminRoleDescription,
	);
});

Then(`Verify whether the permissions are as desired for Admin Role`, () => {
	ManageUsers.AdministratorFeature.should(
		'have.text',
		pxconfig.AdministratorSettingsFeature,
	);
	ManageUsers.AdminRoleAdministratorFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.AdminRoleAPIsFeatures.should('have.text', pxconfig.APIsFeature);
	if (PLSstatusfromUI == 'Approved') {
		ManageUsers.AdminRoleAPIsFeaturestatus.should(
			'have.attr',
			'class',
			'icon-check ng-star-inserted',
		);
	} else {
		ManageUsers.AdminRoleAPIsFeaturestatus_NonPLS.should(
			'have.attr',
			'class',
			'icon-remove ng-star-inserted',
		);
	}

	ManageUsers.CollaborateFeature.should(
		'have.text',
		pxconfig.CollaborateFeature,
	);
	ManageUsers.AdminRoleCollaborateFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.CustomeraccountsFeature.should(
		'have.text',
		pxconfig.CustomeraccountsFeature,
	);
	ManageUsers.AdminRoleCustomeraccountsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.AdminRoleCustomeraccountsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.CustomerContractsFeature.should(
		'have.text',
		pxconfig.CustomercontractsFeature,
	);
	ManageUsers.AdminRoleCustomerContractsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.AdminRoleCustomerContractsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.LearningFeature.should('have.text', pxconfig.LearningFeature);
	ManageUsers.AdminRoleLearningFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.AdminRoleLearningFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.NotificationsFeature.should(
		'have.text',
		pxconfig.NotificationsFeature,
	);
	ManageUsers.AdminRoleNotificationsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.AdminRoleNotificationsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PartneroffersFeature.should(
		'have.text',
		pxconfig.PartnerOffersFeature,
	);
	if (PLSstatusfromUI == 'Approved') {
		ManageUsers.AdminRolePartnerOffersFeaturestatus.should(
			'have.attr',
			'class',
			'icon-check ng-star-inserted',
		);
	} else {
		ManageUsers.AdminRolePartnerOffersFeaturestatus_NonPLS.should(
			'have.attr',
			'class',
			'icon-remove ng-star-inserted',
		);
	}
	ManageUsers.PersonalprofileFeature.should(
		'have.text',
		pxconfig.PersonalprofileFeature,
	);
	ManageUsers.AdminRolePersonalProfileFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalfeedbackFeature.should(
		'have.text',
		pxconfig.Portalfeedbackfeature,
	);
	ManageUsers.AdminRolePortalfeedackFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalsupportFeature.should(
		'have.text',
		pxconfig.PortalSupportfeature,
	);
	ManageUsers.AdminRolePortalsupportFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.TodaydashboardFeature.should(
		'have.text',
		pxconfig.Todaydashboardfeature,
	);
	ManageUsers.AdminRoleTodaydashboardFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.AdminRoleTodaydashboardFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.UsermanagementFeature.should(
		'have.text',
		pxconfig.Usermanagementfeature,
	);
	ManageUsers.AdminRoleUsermanagementFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.AdminCollapseButton.click({ force: true });
});

Given(`User expands the PAM_VAPM role`, () => {
	ManageUsers.PAM_VPAMRoleHeader.should(
		'have.text',
		pxconfig.PAM_VPAMRoleHeader,
	);
	ManageUsers.PAM_VPAMExpandButton.click({ force: true });
});

When(
	`The description and feature details are displayed for PAM_VAPM Role`,
	() => {
		ManageUsers.PAM_VPAMRoleDescription.as('PAMDescription');
		cy.get('@PAMDescription').should('be.visible');
		ManageUsers.PAM_VPAMRoleDescription.should(
			'have.text',
			pxconfig.PAM_VPAMRoleDescription,
		);
	},
);

Then(`Verify whether the permissions are as desired for PAM_VAPM Role`, () => {
	ManageUsers.AdministratorFeature.should(
		'have.text',
		pxconfig.AdministratorSettingsFeature,
	);
	ManageUsers.PAM_VPAMRoleAdministratorFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PAM_VPAMRoleAPIsFeature.should(
		'have.text',
		pxconfig.APIsFeature,
	);
	ManageUsers.PAM_VPAMRoleAPIsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CollaborateFeature.should(
		'have.text',
		pxconfig.CollaborateFeature,
	);
	ManageUsers.PAM_VPAMRoleCollaborateFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.CustomeraccountsFeature.should(
		'have.text',
		pxconfig.CustomeraccountsFeature,
	);
	ManageUsers.PAM_VPAMRoleCustomeraccountsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PAM_VPAMRoleCustomeraccountsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.CustomerContractsFeature.should(
		'have.text',
		pxconfig.CustomercontractsFeature,
	);
	ManageUsers.PAM_VPAMRoleCustomerContractsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PAM_VPAMRoleCustomerContractsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.LearningFeature.should('have.text', pxconfig.LearningFeature);
	ManageUsers.PAM_VPAMRoleLearningFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PAM_VPAMRoleLearningFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.NotificationsFeature.should(
		'have.text',
		pxconfig.NotificationsFeature,
	);
	ManageUsers.PAM_VPAMRoleNotificationsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PAM_VPAMRoleNotificationsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PartneroffersFeature.should(
		'have.text',
		pxconfig.PartnerOffersFeature,
	);
	if (PLSstatusfromUI == 'Approved') {
		ManageUsers.PAM_VPAMRolePartnerOffersFeaturestatus.should(
			'have.attr',
			'class',
			'icon-check ng-star-inserted',
		);
		ManageUsers.PAM_VPAMRolePartnerOffersFeatureRead_Only.should(
			'have.text',
			pxconfig.FeatureStatus,
		);
	} else {
		ManageUsers.PAM_VPAMRolePartnerOffersFeaturestatus_NonPLS.should(
			'have.attr',
			'class',
			'icon-remove ng-star-inserted',
		);
	}
	ManageUsers.PersonalprofileFeature.should(
		'have.text',
		pxconfig.PersonalprofileFeature,
	);
	ManageUsers.PAM_VPAMRolePersonalProfileFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalfeedbackFeature.should(
		'have.text',
		pxconfig.Portalfeedbackfeature,
	);
	ManageUsers.PAM_VPAMRolePortalfeedackFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalsupportFeature.should(
		'have.text',
		pxconfig.PortalSupportfeature,
	);
	ManageUsers.PAM_VPAMRolePortalsupportFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.TodaydashboardFeature.should(
		'have.text',
		pxconfig.Todaydashboardfeature,
	);
	ManageUsers.PAM_VPAMRoleTodaydashboardFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PAM_VPAMRoleTodaydashboardRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.UsermanagementFeature.should(
		'have.text',
		pxconfig.Usermanagementfeature,
	);
	ManageUsers.PAM_VPAMRoleUsermanagementFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PAM_VPAMRoleUsermanagementFeatureRead_only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PAM_VPAMCollapseButton.click({ force: true });
});

Given(`User expands the PBDS role`, () => {
	ManageUsers.PBDSRoleHeader.should('have.text', pxconfig.PBDSRoleHeader);
	ManageUsers.PBDSExpandButton.click({ force: true });
});

When(`The description and feature details are displayed for PBDS Role`, () => {
	ManageUsers.PBDSRoleDescription.as('PBDSDescription');
	cy.get('@PBDSDescription').should('be.visible');
	ManageUsers.PBDSRoleDescription.should(
		'have.text',
		pxconfig.PBDSRoleDescription,
	);
});

Then(`Verify whether the permissions are as desired for PBDS Role`, () => {
	ManageUsers.AdministratorFeature.should(
		'have.text',
		pxconfig.AdministratorSettingsFeature,
	);
	ManageUsers.PBDSRoleAdministratorFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PBDSRoleAPIsFeature.should('have.text', pxconfig.APIsFeature);
	ManageUsers.PBDSRoleAPIsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CollaborateFeature.should(
		'have.text',
		pxconfig.CollaborateFeature,
	);
	ManageUsers.PBDSRoleCollaborateFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.CustomeraccountsFeature.should(
		'have.text',
		pxconfig.CustomeraccountsFeature,
	);
	ManageUsers.PBDSRoleCustomeraccountsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PBDSRoleCustomeraccountsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.CustomerContractsFeature.should(
		'have.text',
		pxconfig.CustomercontractsFeature,
	);
	ManageUsers.PBDSRoleCustomerContractsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PBDSRoleCustomerContractsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.LearningFeature.should('have.text', pxconfig.LearningFeature);
	ManageUsers.PBDSRoleLearningFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PBDSRoleLearningFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.NotificationsFeature.should(
		'have.text',
		pxconfig.NotificationsFeature,
	);
	ManageUsers.PBDSRoleNotificationsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PBDSRoleNotificationsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PartneroffersFeature.should(
		'have.text',
		pxconfig.PartnerOffersFeature,
	);
	if (PLSstatusfromUI == 'Approved') {
		ManageUsers.PBDSRolePartnerOffersFeaturestatus.should(
			'have.attr',
			'class',
			'icon-check ng-star-inserted',
		);
		ManageUsers.PBDSRolePartnerOffersFeatureRead_Only.should(
			'have.text',
			pxconfig.FeatureStatus,
		);
	} else {
		ManageUsers.PBDSRolePartnerOffersFeaturestatus_NonPLS.should(
			'have.attr',
			'class',
			'icon-remove ng-star-inserted',
		);
	}

	ManageUsers.PersonalprofileFeature.should(
		'have.text',
		pxconfig.PersonalprofileFeature,
	);
	ManageUsers.PBDSRolePersonalProfileFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalfeedbackFeature.should(
		'have.text',
		pxconfig.Portalfeedbackfeature,
	);
	ManageUsers.PBDSRolePortalfeedackFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalsupportFeature.should(
		'have.text',
		pxconfig.PortalSupportfeature,
	);
	ManageUsers.PBDSRolePortalsupportFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.TodaydashboardFeature.should(
		'have.text',
		pxconfig.Todaydashboardfeature,
	);
	ManageUsers.PBDSRoleTodaydashboardFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PBDSRoleTodaydashboardFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.UsermanagementFeature.should(
		'have.text',
		pxconfig.Usermanagementfeature,
	);
	ManageUsers.PBDSRoleUsermanagementFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.PBDSRoleUsermanagementFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PBDSCollapseButton.click({ force: true });
});

Given(`User expands the POM role`, () => {
	ManageUsers.POMRoleHeader.should('have.text', pxconfig.POMRoleHeader);
	ManageUsers.POMExpandButton.click({ force: true });
});

When(`The description and feature details are displayed for POM Role`, () => {
	ManageUsers.POMRoleDescription.as('POMDescription');
	cy.get('@POMDescription').should('be.visible');
	ManageUsers.POMRoleDescription.should(
		'have.text',
		pxconfig.POMRoleDescription,
	);
});

Then(`Verify whether the permissions are as desired for POM Role`, () => {
	ManageUsers.AdministratorFeature.should(
		'have.text',
		pxconfig.AdministratorSettingsFeature,
	);
	ManageUsers.POMRoleAdministratorFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.POMRoleAPIsFeature.should('have.text', pxconfig.APIsFeature);
	ManageUsers.POMRoleAPIsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-remove ng-star-inserted',
	);

	ManageUsers.CollaborateFeature.should(
		'have.text',
		pxconfig.CollaborateFeature,
	);
	ManageUsers.POMRoleCollaborateFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.CustomeraccountsFeature.should(
		'have.text',
		pxconfig.CustomeraccountsFeature,
	);
	ManageUsers.POMRoleCustomeraccountsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.POMRoleCustomeraccountsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.CustomerContractsFeature.should(
		'have.text',
		pxconfig.CustomercontractsFeature,
	);
	ManageUsers.POMRoleCustomerContractsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.POMRoleCustomerContractsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.LearningFeature.should('have.text', pxconfig.LearningFeature);
	ManageUsers.POMRoleLearningFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.POMRoleLearningFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.NotificationsFeature.should(
		'have.text',
		pxconfig.NotificationsFeature,
	);
	ManageUsers.POMRoleNotificationsFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.POMRoleNotificationsFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.PartneroffersFeature.should(
		'have.text',
		pxconfig.PartnerOffersFeature,
	);
	if (PLSstatusfromUI == 'Approved') {
		ManageUsers.POMRolePartnerOffersFeaturestatus.should(
			'have.attr',
			'class',
			'icon-check ng-star-inserted',
		);
		ManageUsers.POMRolePartnerOffersFeatureRead_Only.should(
			'have.text',
			pxconfig.FeatureStatus,
		);
	} else {
		ManageUsers.POMRolePartnerOffersFeaturestatus_NonPLS.should(
			'have.attr',
			'class',
			'icon-remove ng-star-inserted',
		);
	}

	ManageUsers.PersonalprofileFeature.should(
		'have.text',
		pxconfig.PersonalprofileFeature,
	);
	ManageUsers.POMRolePersonalProfileFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalfeedbackFeature.should(
		'have.text',
		pxconfig.Portalfeedbackfeature,
	);
	ManageUsers.POMRolePortalfeedackFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.PortalsupportFeature.should(
		'have.text',
		pxconfig.PortalSupportfeature,
	);
	ManageUsers.POMRolePortalsupportFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);

	ManageUsers.TodaydashboardFeature.should(
		'have.text',
		pxconfig.Todaydashboardfeature,
	);
	ManageUsers.POMRoleTodaydashboardFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.POMRoleTodaydashboardFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.UsermanagementFeature.should(
		'have.text',
		pxconfig.Usermanagementfeature,
	);
	ManageUsers.POMRoleUsermanagementFeaturestatus.should(
		'have.attr',
		'class',
		'icon-check ng-star-inserted',
	);
	ManageUsers.POMRoleUsermanagementFeatureRead_Only.should(
		'have.text',
		pxconfig.FeatureStatus,
	);

	ManageUsers.POMCollapseButton.click({ force: true });

	ManageUsers.Roles360CloseButton.click({ force: true });
});
