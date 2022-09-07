/// <reference types= "Cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import pxconfig from '../../../fixtures/testdata/platform/PX_Config.json';
import AdminSettingsCustomers from '../../pageObjects/platform/AdminSettingsCustomers.po';
import AdminSettingsManageAPI from '../../pageObjects/platform/AdminSettingsManageAPI.po';
import ManageUsers from '../../pageObjects/platform/ManageUsers.po';

let NoOfrows;

Given(`User clicks on the Gear Icon`, () => {
	//Get the PLS status from UI
	ManageUsers.UserIcon.as('UserIcon');
	cy.get('@UserIcon').should('be.visible');

	//Click on the Gear Icon
	ManageUsers.GearIcon.click();
	ManageUsers.ManageUsersHeader.as('Headertext');
	cy.get('@Headertext').should('be.visible');
});

Then(`Validate whether Manage API section is displayed or not`, () => {
	AdminSettingsManageAPI.APIVerticalTab.should('not.exist');
	cy.log(
		'Manage API section is not displayed as expected for a NonPLS/PLS Expired Partner',
	);

	// Close the Adminsettings section
	AdminSettingsCustomers.AdminSettingsCloseButton.click({ force: true });
	ManageUsers.PLSAccessStatusTile.as('PLSState');
	cy.get('@PLSState').should('be.visible');
});

When(`User navigates to the Admin settings Manage API section`, () => {
	AdminSettingsManageAPI.APIVerticalTab.click({ force: true });
	AdminSettingsManageAPI.ManageAPIsHeader.as('Headertext');
	cy.get('@Headertext').should('be.visible');
});

Then(`Validate the contents in the Manage API section`, () => {
	//Validate whether the contents are diplayed in the Manage API section
	AdminSettingsManageAPI.ManageAPIsSectionDescription.should('be.visible');
	AdminSettingsManageAPI.ManageAPIsAccessSectionHeader.should(
		'have.text',
		pxconfig.AccessSectionHeader,
	);
	AdminSettingsManageAPI.ManageAPIsAccessSectionDescription.should(
		'be.visible',
	);
	AdminSettingsManageAPI.ManageAPIsAccessSectionDescription2.should(
		'be.visible',
	);

	//Validate whether Column Headers are displayed
	AdminSettingsManageAPI.APITableColumnName1.should(
		'have.text',
		pxconfig.APISectionColumnHeader1,
	);
	AdminSettingsManageAPI.APITableColumnName2.should(
		'have.text',
		pxconfig.APISectionColumnHeader2,
	);
	AdminSettingsManageAPI.APITableColumnName3.should(
		'have.text',
		pxconfig.APISectionColumnHeader3,
	);
	AdminSettingsManageAPI.APITableColumnName4.should(
		'have.text',
		pxconfig.APISectionColumnHeader4,
	);
	AdminSettingsManageAPI.APITableColumnName5.should(
		'have.text',
		pxconfig.APISectionColumnHeader5,
	);
});

When(
	`User clicks on the API documentation link it opens up in a new tab`,
	() => {
		// Validate whether API documentation link is displayed
		AdminSettingsManageAPI.ManageAPIsSectionAPILink.should('be.visible');

		// Validate whether it has the attribute to open in anew tab
		AdminSettingsManageAPI.ManageAPIsSectionAPILink.should(
			'have.attr',
			'target',
			'_blank',
		);
	},
);

When(
	`User is on API section Grace Period Banner is displayed for a Grace Partner`,
	() => {
		// Validate whether Learn More button is displayed
		AdminSettingsManageAPI.GraceBannerLearnMoreLink.should('be.visible');

		// Validate whether it has the attribute to open in a new tab
		AdminSettingsManageAPI.GraceBannerLearnMoreLink.should(
			'have.attr',
			'target',
			'_blank',
		);
	},
);

When(
	`User clicks on the Deactivate link then the ClientID gets deactivated`,
	() => {
		// Validate whether Client ID details are displayed in the Manage API section
		cy.get('body').then((body) => {
			if (
				body.find(
					"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr",
				).length > 0
			) {
				NoOfrows = body.find(
					"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr",
				).length;

				if (
					body.find(
						"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tr:nth-child(1) td:nth-child(1) [class='client-disabled ng-star-inserted']",
					).length > 0
				) {
					cy.log('Client ID is already in Deactivated state');
				} else {
					AdminSettingsManageAPI.FirstRowDeactivateButton.click({
						force: true,
					});
					AdminSettingsCustomers.CustomersVerticalTab.click({
						force: true,
					});
					AdminSettingsManageAPI.APIVerticalTab.click({
						force: true,
					});

					AdminSettingsManageAPI.FirstRowClientIDDeactivated.as(
						'DeactivatedClient',
					);
					cy.get('@DeactivatedClient').should('be.visible');
					cy.log('Client ID is now in deactivated state');
				}
			} else {
				cy.log(
					'No Client ID details are displayed within the Manage API Section ',
				);
			}
		});
	},
);

When(
	`User clicks on the Reactivate link then the ClientID gets activated`,
	() => {
		// Validate whether Client ID details are displayed in the Manage API section
		cy.get('body').then((body) => {
			if (
				body.find(
					"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr",
				).length > 0
			) {
				NoOfrows = body.find(
					"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr",
				).length;

				if (
					body.find(
						"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tr:nth-child(1) td:nth-child(1) [class='ng-star-inserted']",
					).length > 0
				) {
					cy.log('Client ID is already in activated state');
				} else {
					AdminSettingsManageAPI.FirstRowReactivateButton.click({
						force: true,
					});
					AdminSettingsCustomers.CustomersVerticalTab.click({
						force: true,
					});
					AdminSettingsManageAPI.APIVerticalTab.click({
						force: true,
					});

					AdminSettingsManageAPI.FirstRowClientIDActivated.as(
						'ActivatedClient',
					);
					cy.get('@ActivatedClient').should('be.visible');
					cy.log('Client ID is now in activated state');
				}
			} else {
				cy.log(
					'No Client ID details are displayed within the Manage API Section ',
				);
			}
		});
	},
);

When(
	`User clicks on the confirm button in Delete Access Key popup then the clientID gets Deleted`,
	() => {
		// Validate whether Client ID details are displayed in the Manage API section
		cy.get('body').then((body) => {
			if (
				body.find(
					"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr",
				).length > 0
			) {
				NoOfrows = body.find(
					"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr",
				).length;

				// Click on the Delete button for the first Client ID
				AdminSettingsManageAPI.FirstRowClientIDDeletebutton.click({
					force: true,
				});

				// In the Delete Access Key pop up, click on the Confirm button
				AdminSettingsManageAPI.DeleteKeyPopupHeader.as('PopupHeader');
				cy.get('@PopupHeader').should('be.visible');
				AdminSettingsManageAPI.DeletekayPopupDesription1.should(
					'be.visible',
				);
				AdminSettingsManageAPI.DeletekayPopupDesription2.should(
					'be.visible',
				);
				AdminSettingsManageAPI.DeletekayPopupDesription3.should(
					'be.visible',
				);
				AdminSettingsManageAPI.DeletePopupCancelButton.should(
					'be.visible',
				);
				AdminSettingsManageAPI.DeletePopupConfrimButton.click({
					force: true,
				});
				AdminSettingsCustomers.CustomersVerticalTab.click({
					force: true,
				});
				AdminSettingsManageAPI.APIVerticalTab.click({ force: true });

				AdminSettingsManageAPI.ManageAPICreateAccessKeyButton.as(
					'CreateKey',
				);
				cy.get('@CreateKey').should('be.visible');

				if (NoOfrows == 1) {
					AdminSettingsManageAPI.NoAccessKeysintheSystem.as('NoKey');
					cy.get('@NoKey').should('be.visible');
				} else {
					cy.get('body').then((number) => {
						const Currentrows = number.find(
							"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr",
						).length;
						assert.equal(
							Currentrows,
							NoOfrows - 1,
							'No of Rows are as expected',
						);
					});
				}
			} else {
				cy.log(
					'No Client ID details are displayed within the Manage API Section ',
				);
			}
		});
	},
);

When(
	`User clicks on the Create Access Key button then a ClientID gets created`,
	() => {
		cy.get('body').then((rownumber) => {
			const Availablerows = rownumber.find(
				"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr",
			).length;

			if (Availablerows < 2) {
				// Click on the Create Access Key button
				AdminSettingsManageAPI.ManageAPICreateAccessKeyButton.click({
					force: true,
				});
				AdminSettingsManageAPI.CreateAccessKeyHeader.as('KeyHeader');
				cy.get('@KeyHeader').should('be.visible');
				AdminSettingsManageAPI.CreateAccessKeyDescription1.should(
					'be.visible',
				);
				AdminSettingsManageAPI.CreateAccessKeyDescription2.should(
					'be.visible',
				);
				AdminSettingsManageAPI.CreateAccessKeyColumnHeader1.should(
					'have.text',
					pxconfig.CreateAccessKeyColumnHeader1,
				);
				AdminSettingsManageAPI.CreateAccessKeyColumnHeader2.should(
					'have.text',
					pxconfig.CreateAccessKeyColumnHeader2,
				);
				AdminSettingsManageAPI.CreateAccessKeyClientID.should(
					'be.visible',
				);
				AdminSettingsManageAPI.CreateAccessKeySecret.should(
					'be.visible',
				);
				AdminSettingsManageAPI.CreateAccessKeyShowbutton.should(
					'be.visible',
				);
				AdminSettingsManageAPI.CreateAccessKeyCopytoClipboard.should(
					'be.visible',
				);
				AdminSettingsManageAPI.CreateAccessKeyDownloadCSVFile.should(
					'be.visible',
				);

				// Click on the Close button in the Popup
				AdminSettingsManageAPI.CreateAccessKeyCloseButton.click({
					force: true,
				});
				AdminSettingsCustomers.CustomersVerticalTab.click({
					force: true,
				});
				AdminSettingsManageAPI.APIVerticalTab.click({ force: true });
				AdminSettingsManageAPI.APITableColumnName1.as('Column1');
				cy.get('@Column1').should('be.visible');

				cy.get('body').then((Currentrownumber) => {
					const Currentrows = Currentrownumber.find(
						"[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr",
					).length;

					assert.equal(
						Currentrows,
						Availablerows + 1,
						'No of Rows are as expected',
					);
				});
			} else {
				cy.log(
					'Two Client IDs are already present within the Manage API section',
				);
				AdminSettingsManageAPI.CreateAccessKeyMaximumLimitReached.should(
					'be.visible',
				);
				cy.log('Maximum Limit Reached Message gets displayed');
			}
		});

		// Close the Adminsettings section
		AdminSettingsCustomers.AdminSettingsCloseButton.click({ force: true });
		ManageUsers.PLSAccessStatusTile.as('PLSState');
		cy.get('@PLSState').should('be.visible');
	},
);
