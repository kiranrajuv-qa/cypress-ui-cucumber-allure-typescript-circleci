/// <reference types= "Cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import pxconfig from '../../../fixtures/testdata/platform/PX_Config.json';
import AdminSettingsCustomers from '../../pageObjects/platform/AdminSettingsCustomers.po';
import ManageUsers from '../../pageObjects/platform/ManageUsers.po';

let PLSstatusfromUI;
let ButtonPresent;
let AccessRequestPending;
let AccessRequestDenied;
let AccessRequestRemoved;
let AccessRequestApproved;

Given(`User navigates to the Admin settings Customers section`, () => {
	//Get the PLS status from UI
	ManageUsers.UserIcon.as('UserIcon');
	cy.get('@UserIcon').should('be.visible');
	ManageUsers.PLSAccessStatusTile.as('PLSState');
	cy.get('@PLSState').should('be.visible');
	ManageUsers.PLSAccessStatus.then((PLSstausName) => {
		const PLSstatusfromHomePage = PLSstausName.text();
		PLSstatusfromUI = PLSstatusfromHomePage.replace(' ', '').trim();
		cy.log(PLSstatusfromUI);

		//Click on the Gear Icon
		ManageUsers.GearIcon.click();
		ManageUsers.ManageUsersHeader.as('Headertext');
		cy.get('@Headertext').should('be.visible');

		//Navigate to the Customers section
		AdminSettingsCustomers.CustomersVerticalTab.click({ force: true });
		AdminSettingsCustomers.FirstCustomerName.as('FirstName');
		cy.get('@FirstName').should('be.visible');
	});
});

When(`User clicks on the Request Access button`, () => {
	//Validate whether Multiple pages are available
	cy.get('body').then((body) => {
		if (body.find('.cxui-paginator__button').length > 0) {
			cy.log('Pagination buttons are displayed');

			const NoOfPages = body.find('.cxui-paginator__page-button').length;
			cy.log('No of Pages is' + NoOfPages);

			//Validate whether Request Access button is displayed or not
			for (let i = 1; i <= NoOfPages; i++) {
				cy.get('body').then((nextpage) => {
					if (
						nextpage.find("[class='ng-star-inserted'] >.cxui-btn")
							.length > 0
					) {
						if (!(ButtonPresent == 'Yes')) {
							cy.log('Request Access button is displayed');
							AdminSettingsCustomers.RequestAccessButton.first().click(
								{ force: true },
							);
							ButtonPresent = 'Yes';
							AdminSettingsCustomers.RequestAccessPopUpHeader.as(
								'PopupHeader',
							);
							cy.get('@PopupHeader').should('be.visible');
						}
					} else {
						cy.log(
							'Request Access button is not displayed in this page',
						);
					}

					if (!(ButtonPresent == 'Yes')) {
						if (!(i == NoOfPages)) {
							AdminSettingsCustomers.PaginationNextButton.click({
								force: true,
							});
							AdminSettingsCustomers.FirstCustomerName.as(
								'FirstName',
							);
							cy.get('@FirstName').should('be.visible');
						}
					}
				});
			}
		} else {
			//Validate whether Request Access button is displayed or not
			cy.get('body').then((pages) => {
				if (
					pages.find("[class='ng-star-inserted'] >.cxui-btn").length >
					0
				) {
					cy.log('Request Access button is displayed');
					AdminSettingsCustomers.RequestAccessButton.first().click({
						force: true,
					});
					ButtonPresent = 'Yes';
					AdminSettingsCustomers.RequestAccessPopUpHeader.as(
						'PopupHeader',
					);
					cy.get('@PopupHeader').should('be.visible');
				} else {
					cy.log(
						'Request Access button is not displayed for any of the available Customers',
					);
				}
			});
		}
	});
});

Then(`Validate the contents in the Request Access to CX Cloud Pop up`, () => {
	//Validate the Request Access to CX Cloud Popup contents
	AdminSettingsCustomers.RequestAccessPopUpHeader.should(
		'have.text',
		pxconfig.RequestAccessPopupHeader,
	);
	if (PLSstatusfromUI == 'Approved') {
		AdminSettingsCustomers.RequestAccessPopUpMessage.should(
			'have.text',
			pxconfig.RequestAccessPopupMessagePLS,
		);
	} else {
		AdminSettingsCustomers.RequestAccessPopUpMessage.should(
			'have.text',
			pxconfig.RequestAccessPopupMessageNonPLS,
		);
	}
	AdminSettingsCustomers.RequestAccessPopUpInputFieldHeader.should(
		'have.text',
		pxconfig.RequestAccessPopupInputFieldHeader,
	);

	// Click on the Cancel button in the Popup
	AdminSettingsCustomers.RequestAccessPopUpCancelbutton.click({
		force: true,
	});
});

When(
	`User clicks on a Customer who is in Ready to Request Access State`,
	() => {
		//Validate whether Customer with Ready to Request Access state is displayed or not
		cy.get('body').then((AccessButton) => {
			if (
				AccessButton.find("[class='ng-star-inserted'] >.cxui-btn")
					.length > 0
			) {
				cy.log(
					'Customer with Ready to Request Access state is displayed',
				);
				cy.get("tr [class='ng-star-inserted'] >.cxui-btn")
					.first()
					.parents("[role='row']")
					.children(
						"[class='cdk-cell parentCell cdk-column-customerName cxui-column-customerName ng-star-inserted']",
					)
					.children("[class='ng-star-inserted']")
					.click({ force: true });
				ButtonPresent = 'Yes';
				AdminSettingsCustomers.Customer360Name.as('CustomerName');
				cy.get('@CustomerName').should('be.visible');
			} else {
				cy.log(
					'Customer with Ready to Request Access state is not available',
				);
			}
		});
	},
);

When(`User clicks on a Customer whose Request is in Pending State`, () => {
	let statusText;
	//Validate whether Multiple pages are available
	cy.get('body').then((body) => {
		if (body.find('.cxui-paginator__button').length > 0) {
			cy.log('Pagination buttons are displayed');

			const NoOfPages = body.find('.cxui-paginator__page-button').length;
			cy.log('No of Pages is' + NoOfPages);

			//Validate whether Customer with Access Status Pending is displayed or not
			for (let i = 1; i <= NoOfPages; i++) {
				cy.get('body').then((AccessState) => {
					if (
						AccessState.find(
							"[role='row'] td:nth-child(5)> [class='ng-star-inserted']:nth-child(1)",
						).length > 0
					) {
						AdminSettingsCustomers.CustomerwithPendingAccessstate.each(
							(item) => {
								cy.wrap(item).then((statusT) => {
									statusText = statusT
										.text()
										.replace(' ', '')
										.trim();

									cy.log('statusText....' + statusText);
									if (statusText == 'Access requested') {
										if (!(AccessRequestPending == 'Yes')) {
											cy.log(
												'Customer with Access Request in Pending state is displayed',
											);
											AdminSettingsCustomers.PendingAccessStateText.first()
												.parents("[role='row']")
												.children(
													"[class='cdk-cell parentCell cdk-column-customerName cxui-column-customerName ng-star-inserted']",
												)
												.children(
													"[class='ng-star-inserted']",
												)
												.click({ force: true });
											AccessRequestPending = 'Yes';
											AdminSettingsCustomers.Customer360Name.as(
												'CustomerName',
											);
											cy.get('@CustomerName').should(
												'be.visible',
											);
										}
									}
								});
							},
						);
					} else {
						cy.log(
							'Customer with Access Request in Pending state is not displayed in this page',
						);
					}

					cy.get('body').then((Customer360Name) => {
						if (
							!(
								Customer360Name.find(
									"[class='title-text ng-star-inserted']",
								).length > 0
							)
						) {
							if (!(i == NoOfPages)) {
								AdminSettingsCustomers.PaginationNextButton.click(
									{ force: true },
								);
								AdminSettingsCustomers.FirstCustomerName.as(
									'FirstName',
								);
								cy.get('@FirstName').should('be.visible');
							}
						}
					});
				});
			}
		} else {
			//Validate whether Customer with Access Status Pending is displayed or not
			cy.get('body').then((AccessState) => {
				if (
					AccessState.find(
						"[role='row'] td:nth-child(5)> [class='ng-star-inserted']:nth-child(1)",
					).length > 0
				) {
					AdminSettingsCustomers.CustomerwithPendingAccessstate.each(
						(item) => {
							cy.wrap(item).then((statusT) => {
								statusText = statusT
									.text()
									.replace(' ', '')
									.trim();
								cy.log('statusText....' + statusText);
								if (statusText == 'Access requested') {
									if (!(AccessRequestPending == 'Yes')) {
										cy.log(
											'Customer with Access Request in Pending state is displayed',
										);
										AdminSettingsCustomers.PendingAccessStateText.first()
											.parents("[role='row']")
											.children(
												"[class='cdk-cell parentCell cdk-column-customerName cxui-column-customerName ng-star-inserted']",
											)
											.children(
												"[class='ng-star-inserted']",
											)
											.click({ force: true });
										AccessRequestPending = 'Yes';
										AdminSettingsCustomers.Customer360Name.as(
											'CustomerName',
										);
										cy.get('@CustomerName').should(
											'be.visible',
										);
									}
								}
							});
						},
					);
				} else {
					cy.log(
						'Customer with Access Request in Pending state is not displayed in this page',
					);
				}
			});
		}
	});
});

When(`User clicks on a Customer whose Request is in Denied State`, () => {
	let statusText;
	//Validate whether Multiple pages are available
	cy.get('body').then((body) => {
		if (body.find('.cxui-paginator__button').length > 0) {
			cy.log('Pagination buttons are displayed');

			const NoOfPages = body.find('.cxui-paginator__page-button').length;
			cy.log('No of Pages is' + NoOfPages);

			//Validate whether Customer with Access Status Declined is displayed or not
			for (let i = 1; i <= NoOfPages; i++) {
				cy.get('body').then((AccessState) => {
					if (
						AccessState.find(
							"[role='row'] td:nth-child(5)> [data-auto-id='statusIcon']+span",
						).length > 0
					) {
						AdminSettingsCustomers.CustomerwithDeniedAccessstate.each(
							(item) => {
								cy.wrap(item).then((statusT) => {
									statusText = statusT
										.text()
										.replace(' ', '')
										.trim();

									cy.log('statusText....' + statusText);
									if (statusText == 'Access denied') {
										if (!(AccessRequestDenied == 'Yes')) {
											cy.log(
												'Customer with Access Request in Denied state is displayed',
											);
											AdminSettingsCustomers.DeniedAccessStateText.first()
												.parents("[role='row']")
												.children(
													"[class='cdk-cell parentCell cdk-column-customerName cxui-column-customerName ng-star-inserted']",
												)
												.children(
													"[class='ng-star-inserted']",
												)
												.click({ force: true });
											AccessRequestDenied = 'Yes';
											AdminSettingsCustomers.Customer360Name.as(
												'CustomerName',
											);
											cy.get('@CustomerName').should(
												'be.visible',
											);
										}
									}
								});
							},
						);
					} else {
						cy.log(
							'Customer with Access Request in Denied state is not displayed in this page',
						);
					}

					cy.get('body').then((Customer360Name) => {
						if (
							!(
								Customer360Name.find(
									"[class='title-text ng-star-inserted']",
								).length > 0
							)
						) {
							if (!(i == NoOfPages)) {
								AdminSettingsCustomers.PaginationNextButton.click(
									{ force: true },
								);
								AdminSettingsCustomers.FirstCustomerName.as(
									'FirstName',
								);
								cy.get('@FirstName').should('be.visible');
							}
						}
					});
				});
			}
		} else {
			//Validate whether Customer with Access Status Denied is displayed or not
			cy.get('body').then((AccessState) => {
				if (
					AccessState.find(
						"[role='row'] td:nth-child(5)> [data-auto-id='statusIcon']+span",
					).length > 0
				) {
					AdminSettingsCustomers.CustomerwithDeniedAccessstate.each(
						(item) => {
							cy.wrap(item).then((statusT) => {
								statusText = statusT
									.text()
									.replace(' ', '')
									.trim();
								cy.log('statusText....' + statusText);
								if (statusText == 'Access denied') {
									if (!(AccessRequestDenied == 'Yes')) {
										cy.log(
											'Customer with Access Request in Denied state is displayed',
										);
										AdminSettingsCustomers.DeniedAccessStateText.first()
											.parents("[role='row']")
											.children(
												"[class='cdk-cell parentCell cdk-column-customerName cxui-column-customerName ng-star-inserted']",
											)
											.children(
												"[class='ng-star-inserted']",
											)
											.click({ force: true });
										AccessRequestDenied = 'Yes';
										AdminSettingsCustomers.Customer360Name.as(
											'CustomerName',
										);
										cy.get('@CustomerName').should(
											'be.visible',
										);
									}
								}
							});
						},
					);
				} else {
					cy.log(
						'Customer with Access Request in Denied state is not displayed in this page',
					);
				}
			});
		}
	});
});

When(`User clicks on a Customer whose Request is in Removed State`, () => {
	let statusText;
	//Validate whether Multiple pages are available
	cy.get('body').then((body) => {
		if (body.find('.cxui-paginator__button').length > 0) {
			cy.log('Pagination buttons are displayed');

			const NoOfPages = body.find('.cxui-paginator__page-button').length;
			cy.log('No of Pages is' + NoOfPages);

			//Validate whether Customer with Access Status Removed is displayed or not
			for (let i = 1; i <= NoOfPages; i++) {
				cy.get('body').then((AccessState) => {
					if (
						AccessState.find(
							"[role='row'] td:nth-child(5)> [data-auto-id='statusIcon']+span",
						).length > 0
					) {
						AdminSettingsCustomers.CustomerwithRemovedAccessstate.each(
							(item) => {
								cy.wrap(item).then((statusT) => {
									statusText = statusT
										.text()
										.replace(' ', '')
										.trim();

									cy.log('statusText....' + statusText);
									if (statusText == 'Access removed') {
										if (!(AccessRequestRemoved == 'Yes')) {
											cy.log(
												'Customer with Access Request in Removed state is displayed',
											);
											AdminSettingsCustomers.RemovedAccessStateText.first()
												.parents("[role='row']")
												.children(
													"[class='cdk-cell parentCell cdk-column-customerName cxui-column-customerName ng-star-inserted']",
												)
												.children(
													"[class='ng-star-inserted']",
												)
												.click({ force: true });
											AccessRequestRemoved = 'Yes';
											AdminSettingsCustomers.Customer360Name.as(
												'CustomerName',
											);
											cy.get('@CustomerName').should(
												'be.visible',
											);
										}
									}
								});
							},
						);
					} else {
						cy.log(
							'Customer with Access Request in Removed state is not displayed in this page',
						);
					}

					cy.get('body').then((Customer360Name) => {
						if (
							!(
								Customer360Name.find(
									"[class='title-text ng-star-inserted']",
								).length > 0
							)
						) {
							if (!(i == NoOfPages)) {
								AdminSettingsCustomers.PaginationNextButton.click(
									{ force: true },
								);
								AdminSettingsCustomers.FirstCustomerName.as(
									'FirstName',
								);
								cy.get('@FirstName').should('be.visible');
							}
						}
					});
				});
			}
		} else {
			//Validate whether Customer with Access Status Removed is displayed or not
			cy.get('body').then((AccessState) => {
				if (
					AccessState.find(
						"[role='row'] td:nth-child(5)> [data-auto-id='statusIcon']+span",
					).length > 0
				) {
					AdminSettingsCustomers.CustomerwithRemovedAccessstate.each(
						(item) => {
							cy.wrap(item).then((statusT) => {
								statusText = statusT
									.text()
									.replace(' ', '')
									.trim();
								cy.log('statusText....' + statusText);
								if (statusText == 'Access removed') {
									if (!(AccessRequestRemoved == 'Yes')) {
										cy.log(
											'Customer with Access Request in Removed state is displayed',
										);
										AdminSettingsCustomers.RemovedAccessStateText.first()
											.parents("[role='row']")
											.children(
												"[class='cdk-cell parentCell cdk-column-customerName cxui-column-customerName ng-star-inserted']",
											)
											.children(
												"[class='ng-star-inserted']",
											)
											.click({ force: true });
										AccessRequestRemoved = 'Yes';
										AdminSettingsCustomers.Customer360Name.as(
											'CustomerName',
										);
										cy.get('@CustomerName').should(
											'be.visible',
										);
									}
								}
							});
						},
					);
				} else {
					cy.log(
						'Customer with Access Request in Removed state is not displayed in this page',
					);
				}
			});
		}
	});
});

When(`User clicks on a Customer whose Request is in Approved State`, () => {
	let statusText;
	//Validate whether Multiple pages are available
	cy.get('body').then((body) => {
		if (body.find('.cxui-paginator__button').length > 0) {
			cy.log('Pagination buttons are displayed');

			const NoOfPages = body.find('.cxui-paginator__page-button').length;
			cy.log('No of Pages is' + NoOfPages);

			//Validate whether Customer with Approved Access state is displayed or not
			for (let i = 1; i <= NoOfPages; i++) {
				cy.get('body').then((nextpage) => {
					if (
						nextpage.find("[role='row'] td:nth-child(2)>span")
							.length > 0
					) {
						AdminSettingsCustomers.CustomerwithApprovedAccessstate.each(
							(item, index) => {
								cy.wrap(item).then((statusT) => {
									statusText = statusT
										.text()
										.replace(' ', '')
										.trim();

									cy.log('statusText....' + statusText);
									if (!(statusText == '')) {
										if (!(AccessRequestApproved == 'Yes')) {
											cy.log(
												'Customer with Approved Access state is displayed',
											);
											AdminSettingsCustomers.CustomerwithApprovedAccessstate.eq(
												index,
											)
												.parents("[role='row']")
												.children(
													"[class='cdk-cell parentCell cdk-column-customerName cxui-column-customerName ng-star-inserted']",
												)
												.children(
													"[class='ng-star-inserted']",
												)
												.click({ force: true });
											AccessRequestApproved = 'Yes';
											AdminSettingsCustomers.Customer360Name.as(
												'CustomerName',
											);
											cy.get('@CustomerName').should(
												'be.visible',
											);
										}
									}
								});
							},
						);
					} else {
						cy.log(
							'Customer with Approved Access state is not displayed',
						);
					}

					cy.get('body').then((Customer360Name) => {
						if (
							!(
								Customer360Name.find(
									"[class='title-text ng-star-inserted']",
								).length > 0
							)
						) {
							if (!(i == NoOfPages)) {
								AdminSettingsCustomers.PaginationNextButton.click(
									{ force: true },
								);
								AdminSettingsCustomers.FirstCustomerName.as(
									'FirstName',
								);
								cy.get('@FirstName').should('be.visible');
							}
						}
					});
				});
			}
		} else {
			//Validate whether Customer with Approved Access state is displayed or not
			cy.get('body').then((pages) => {
				if (
					pages.find("[role='row'] td:nth-child(2)>span").length > 0
				) {
					AdminSettingsCustomers.CustomerwithApprovedAccessstate.each(
						(item, index) => {
							cy.wrap(item).then((statusT) => {
								statusText = statusT
									.text()
									.replace(' ', '')
									.trim();

								cy.log('statusText....' + statusText);
								if (!(statusText == '')) {
									if (!(AccessRequestApproved == 'Yes')) {
										cy.log(
											'Customer with Approved Access state is displayed',
										);
										AdminSettingsCustomers.CustomerwithApprovedAccessstate.eq(
											index,
										)
											.parents("[role='row']")
											.children(
												"[class='cdk-cell parentCell cdk-column-customerName cxui-column-customerName ng-star-inserted']",
											)
											.children(
												"[class='ng-star-inserted']",
											)
											.click({ force: true });
										AccessRequestApproved = 'Yes';
										AdminSettingsCustomers.Customer360Name.as(
											'CustomerName',
										);
										cy.get('@CustomerName').should(
											'be.visible',
										);
									}
								}
							});
						},
					);
				} else {
					cy.log(
						'Customer with Approved Access state is not displayed',
					);
				}
			});
		}
	});
});

Then(
	`Validate whether the Section Headers are displayed in bold or not`,
	() => {
		//Validate whether the section headers are displayed or not
		AdminSettingsCustomers.Customer360CXCloudAccessHeader.should(
			'be.visible',
		);
		AdminSettingsCustomers.Customer360UserAccessHeader.should('be.visible');
	},
);

When(`In Customer 360, Validate the description in User Access section`, () => {
	//Validate whether the User Access section description is as expected
	AdminSettingsCustomers.Customer360UserAccessDescription.should(
		'have.text',
		pxconfig.Customer360UserAccessDescription,
	);
});

When(`User expands the accordion by clicking on it`, () => {
	//Expand the accordion
	AdminSettingsCustomers.Customer360whatdataAccordionExpand_Collapse.click();
	AdminSettingsCustomers.Customer360CiscoSecurityandTrustCenterLink.as(
		'CiscoSecurityLink',
	);
	cy.get('@CiscoSecurityLink').should('be.visible');
});

Then(
	`Validate the content displayed within What data will be shared with me? Section`,
	() => {
		//Validate the details in the What data will be shared with me? section
		AdminSettingsCustomers.Customer360whatdatasectionDescription1.should(
			'have.text',
			pxconfig.Customer360WhatdataDescription1,
		);
		AdminSettingsCustomers.Customer360whatdatasectionDescription2.should(
			'have.text',
			pxconfig.Customer360WhatdataDescription2,
		);
		AdminSettingsCustomers.Customer360whatdatasectionDescription3.should(
			'have.text',
			pxconfig.Customer360WhatdataDescription3,
		);

		//Validate whether the Cisco Secutiry and Trust Center link opens up in a new tab or not
		AdminSettingsCustomers.Customer360CiscoSecurityandTrustCenterLink.should(
			'have.attr',
			'target',
			'_blank',
		);

		//Close the accordion
		AdminSettingsCustomers.Customer360whatdataAccordionExpand_Collapse.click();
	},
);

When(
	`In Customer 360, Validate the Access status displayed for the Users in the Partner Users table`,
	() => {
		//Validate the Access Status in Customer 360
		AdminSettingsCustomers.Customer360PartnerUsersAccessStatus.each(
			(item) => {
				cy.wrap(item).should('contain.text', 'N/A');
			},
		);

		// Close the Adminsettings section
		AdminSettingsCustomers.AdminSettingsCloseButton.click({ force: true });
		ManageUsers.PLSAccessStatusTile.as('PLSState');
		cy.get('@PLSState').should('be.visible');
	},
);

When(
	`In Customer 360, Validate the Access status displayed for the Users in the Partner Users table, where Org access is Pending`,
	() => {
		//Validate the Access Status in Customer 360
		AdminSettingsCustomers.Customer360PartnerUsersAccessStatus.each(
			(item) => {
				cy.wrap(item).should('contain.text', 'Pending');
			},
		);
	},
);

When(
	`In Customer 360, Validate the Access status displayed for the Users in the Partner Users table, where Org access is Denied`,
	() => {
		//Validate the Access Status in Customer 360
		AdminSettingsCustomers.Customer360PartnerUsersDenied1.each((item) => {
			cy.wrap(item).should('contain.text', 'Organization');
		});

		AdminSettingsCustomers.Customer360PartnerUsersDenied2.each((item) => {
			cy.wrap(item).should('contain.text', 'denied');
		});
	},
);

When(
	`In Customer 360, Validate the Access status displayed for the Users in the Partner Users table, where Org access is Removed`,
	() => {
		//Validate the Access Status in Customer 360
		AdminSettingsCustomers.Customer360PartnerUsersRemoved1.each((item) => {
			cy.wrap(item).should('contain.text', 'Organization');
		});

		AdminSettingsCustomers.Customer360PartnerUsersRemoved2.each((item) => {
			cy.wrap(item).should('contain.text', 'Removed');
		});
	},
);

When(
	`In Customer 360, Validate the Access status displayed for the Users in the Partner Users table, where Org access is Approved`,
	() => {
		//Validate the Access Status in Customer 360
		AdminSettingsCustomers.Customer360PartnerUsersApproved.each((item) => {
			cy.wrap(item).then((statusPartnerUsers) => {
				const statusText = statusPartnerUsers
					.text()
					.replace(' ', '')
					.trim();

				expect(statusText, 'PUAccess').to.be.oneOf([
					'Approved',
					'Requested',
					'Removed',
					'Denied',
				]);
			});
		});
	},
);

When(
	`In Customer 360, Validate the Access status of each of the Success Tracks`,
	() => {
		//Validate the Access Status of each of the Success Tracks displayed
		AdminSettingsCustomers.SuccessTracksAccessStatus.each((item) => {
			cy.wrap(item).then((statusST) => {
				const statusText = statusST.text();

				expect(statusText, 'STAccess').to.be.oneOf([
					'View only',
					'No access',
					'Unavailable',
					'Access removed',
				]);
			});
		});
	},
);

When(
	`In Customer 360, Validate whether the tabs Access Summary and Request History are displayed`,
	() => {
		//Validate the Tabs in the Customer 360
		AdminSettingsCustomers.Customer360AccessSummaryTab.should('be.visible');
		AdminSettingsCustomers.Customer360RequestHistoryTab.should(
			'be.visible',
		);
	},
);

When(`User Clicks on the Request History tab`, () => {
	//Validate the Tabs in the Customer 360
	AdminSettingsCustomers.Customer360RequestHistoryTab.click({ force: true });
	AdminSettingsCustomers.Customer360RequestHistoryDescription.as(
		'Description',
	);
	cy.get('@Description').should('be.visible');
});

Then(`Validate the Contents displayed in the Request History tab`, () => {
	//Validate the Contents in Request History
	AdminSettingsCustomers.Customer360RequestHistoryDescription.should(
		'have.text',
		pxconfig.Customer360RequestHistoryDescription,
	);
	AdminSettingsCustomers.Customer360HistoryBegins.scrollIntoView().should(
		'be.visible',
	);
	AdminSettingsCustomers.Customer360HistoryLatestEvent.scrollIntoView().should(
		'be.visible',
	);
	AdminSettingsCustomers.Customer360CloseButton.click({ force: true });
	AdminSettingsCustomers.AdminSettingsCloseButton.as('ASCloseButton');
	cy.get('@ASCloseButton').should('be.visible');

	// Close the Adminsettings section
	AdminSettingsCustomers.AdminSettingsCloseButton.click({ force: true });
	ManageUsers.PLSAccessStatusTile.as('PLSState');
	cy.get('@PLSState').should('be.visible');
});
