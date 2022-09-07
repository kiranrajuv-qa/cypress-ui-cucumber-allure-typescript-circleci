class ManageUsers {
	get GearIcon() {
		return cy.get("[class='cx-header-icon icon-cog']");
	}

	get ManageUsersTab() {
		return cy.get("[data-auto-id='sidebar.users']");
	}

	get PLSAccessStatusTile() {
		return cy.get("[class='text-left level-status']");

	}

	get CXSpecializationHeaderText() {
		return cy.get('span').contains(' CX Specialization Program ');

	}
	
	get PLSAccessStatus() {
		return cy.get("[class='card dash-let-card title-box padding-gutters']>div>span");

	}

	get ManageUsersHeader() {
		return cy.get("[class='sub-text']");
	}

	get Description() {
		return cy.get("[class='sub-text ng-star-inserted']");
	}

	get Searchbox() {
		return cy.get("[id='searchInput-input']");
	}

	get SearchboxCloseButton() {
		return cy.get("[iconname = 'close'] >svg");
	}

	get PartnerUserFirstName() {
		return cy.get('tbody>tr:nth-child(1)> td:nth-child(1)');
	}

	get PartnerUserSecondName() {
		return cy.get('tr:nth-child(2) td:nth-child(1)');
	}

	get PartnerUserThirdName() {
		return cy.get('tr:nth-child(3) td:nth-child(1)');
	}

	get TableColumnName1() {
		return cy.get('th').contains('Name');
	}

	get TableColumnName2() {
		return cy.get('th').contains('Email');
	}

	get TableColumnName3() {
		return cy.get('th').contains('PX Cloud Role');
	}

	get TableColumnName4() {
		return cy.get('th').contains('Last Login');
	}

	get AddNewUserLink() {
		return cy.get("[class='text-ellipsis']");
	}

	get AddNewUserHeader() {
		return cy.get('span').contains('Add new user?');
	}

	get AddNewUserDescription1() {
		return cy.get('span').contains('You can identify a person by name or email.');
	}

	get AddNewUserDescription2() {
		return cy.get('span').contains("Can't find the person you're looking for? Check");
	}

	get AddNewUserPSSLink() {
		return cy.get('a').contains("Partner Self Service (PSS).");
	}

	get AddNewUserDescription3() {
		return cy.get('span').contains("Any changes you make there might take up to 24 hours to propagate.");
	}

	get AddNewUserNameHeader() {
		return cy.get('label').contains("Name");
	}

	get AddNewUserPxCloudRoleHeader() {
		return cy.get('label').contains("PX Cloud Role");
	}


	get AddNewUserSendWelcomeEmail() {
		return cy.get('span').contains('Send welcome email');
	}

	get AddNewUserCheckbox() {
		return cy.get("[iconname='check'] > svg");
	}

	get NameInputField() {
		return cy.get('#userList>div>div');
	}

	get RoleInputField() {
		return cy.get('#availableRoles>div>div');
	}

	get AddNUserAddButton() {
		return cy.get('#addUserSubmit');
	}

	get AddNUserGoBackButton() {
		return cy.get('#addUserCancel');
	}

	get SendWelcomeEmailCheckbox() {
		return cy.get("[class='check ng-star-inserted']");
	}

	get Name2ndOption() {
		return cy.get("[id='infinte-scroll']>div:nth-child(3)");
	}

	get RoleOptions() {
		return cy.get("[id='infinte-scroll']>div");
	}

	get Role1stOption() {
		return cy.get("[id='infinte-scroll']>div:nth-child(1)");
	}

	get UserNamein360() {
		return cy.get("[class='title-text']");
	}

	get PartnerNameList() {
		return cy.get(
			"[data-auto-id='OnBoardedUserTable'] tbody tr>td:nth-child(1)>span",
		);
	}

	get Userdetails360CloseButton() {
		return cy.get("[data-auto-id='CloseDetails']");
	}

	get ManageUsersNextButton() {
		return cy.get("[aria-label='Next Page']");
	}

	get ManageUsersPreviousButton() {
		return cy.get("[aria-label='Previous Page']");
	}

	get PartnerUsersNameList() {
		return cy.get(
			"[data-auto-id='OnBoardedUserTable'] tbody tr>td:nth-child(1)>span",
		);
	}

	get PaginationButton() {
		return cy.get('.cxui-paginator__button');
	}

	get UserIcon() {
		return cy.get("[title='User Profile']");
	}

	get PartnerUserAdminName() {
		return cy.get("[data-auto-id='HeaderUserFullName']");
	}

	get User360MenuComponent() {
		return cy.get(' .ng-star-inserted >.more-options-button');
	}

	get OptionRemoveUserfromPXCloud() {
		return cy.get('button').contains('Remove user from PX Cloud');
	}

	get RemoveUserPXCloudUserName() {
		return cy.get("[class='user-name ng-star-inserted']");
	}

	get RemoveUserPXCloudHeader() {
		return cy.get('span').contains('Remove user from PX Cloud?');
	}

	get RemoveUserPXCloudDescription1() {
		return cy.get('p').contains("This user will be removed from PX Cloud, but they won't be removed from your organization.");
	}

	get RemoveUserPXCloudDescription2() {
		return cy.get('p').contains("You can add them again at any time.");
	}

	get RemoveUserPXCloudRemoveButton() {
		return cy.get('#deleteUserSubmit');
	}

	get RemoveUserPXCloudGoBackButton() {
		return cy.get('#deleteUserCancel');
	}

	get NoSearchResultsReturned() {
		return cy.get("[data-auto-id='NoResultsFoundTxt']");
	}

// Change User role Modal

get PartnerRoleColumn() {
	return cy.get("[data-auto-id='OnBoardedUserTable']  .onboardeduser-table-row").find("td:nth-child(3) >span >span")
}

get RolesDropdownField() {
	return cy.get("#dropdown-select > div");
}

get RolesDropdownCSM() {
	return cy.get("#dropdown-select > div  [data-auto-id='dropdown-option']:nth-child(3)");
}

get ChangeRoleHeader() {
	return cy.get('span').contains("Change user role?");
}

get ChangeRoleDescription() {
	return cy.get('p').contains(" Changing a user’s role affects the functionality and data they can access in PX Cloud.");
}

get ChangeRoleCurrentRoleHeader() {
	return cy.get('span').contains("Current Role");
}

get ChangeRoleCurrentRoleValue() {
	return cy.get(".modal__body div:nth-child(3) >span");
}

get ChangeRoleNewRoleHeader() {
	return cy.get('span').contains("New Role");
}

get ChangeRoleNewRoleValue() {
	return cy.get(".modal__body div:nth-child(5) >span")
}

get ChangeRoleGoBackButton() {
	return cy.get("#roleSelectionCancel");
}

get ChangeRoleChangeButton() {
	return cy.get("#roleSelectionSubmit");
}

// CSM - User - Customer 
get User360AddAnotherButton() {
	return cy.get('.text-right .cxui-btn--tertiary');
}

get User360RequestAccessButton() {
	return cy.get("[data-auto-id='doneBtn']");
}

get User360Customerdropdown() {
	return cy.get("#customer-list .pp-select-primary-white").find("[data-auto-id='dropdown-anchor'] >div")
}

get User360CustomerdropdownfirstCustomer() {
	return cy.get(".pp-select-primary-white #infinte-scroll >div:nth-child(2)");
	
}

get User360AssociatedCustomerMenuComponent() {
	return cy.get(".customer-account-action .more-options-button:nth-child(1)");
	
}

get User360MenuComponentRemoveButton() {
	return cy.get("[role='menuitem']");
	
}

get User360CustomerAccessRequestedMessage() {
	return cy.get(".customer-account-table-row .cdk-column-accessStatus");
	
}

// Remove Customer Account modal 
get RemoveCustomerAccountModalHeader() {
	return cy.get('span').contains("Remove customer account?");
	
}

get RemoveCustomerAccountModalDescription1() {
	return cy.get('p').contains("Removing this customer account assignment will revoke the user’s access to the customer’s CX Cloud data and assets. They will also lose access to the customer’s partner-owned data.");
	
}

get RemoveCustomerAccountModalDescription2() {
	return cy.get('p').contains("You can re-add the account later, but the customer will need to re-approve access.");
	
}

get RemoveCustomerAccountModalGoBackButton() {
	return cy.get("#dissociateCustomeCancel");
	
}

get RemoveCustomerAccountModalSubmitButton() {
	return cy.get("#dissociateCustomeSubmit");
	
}

//Manage Profile

get ManageProfileLink() {
    return cy.get("[data-auto-id='HeaderUserProfileDropdown'] >div >div >div:nth-child(3)>a") 
}

get HelpIcon() {
    return cy.get("[id='role-type-icon'] >span")
}

get Roles360CloseButton() {
		return cy.get("[sourcelink='Manage Profile']  [data-auto-id='CloseDetails']")
}

get AdminSettingsCloseButton() {
	return cy.get("[data-auto-id='xbutton']");
}

// User roles - Locaters
get AboutRolesLink() {
	return cy.get("[data-icon='icon-help-outline'] [class='text-ellipsis']")
}

get AboutRolesHeader() {
	return cy.get('span').contains('About Roles')
}

get AboutRolesDescription() {
	return cy.get('span').contains('The user role sets permissions for the features a person can access in PX Cloud.')
}

get AboutRolesManagerUserlink() {
	return cy.get("[data-auto-id='BackDetails']>div>span")
}

get AboutRolesColumnHeader1() {
   return cy.get('th').contains('Partner Role')
}

get AboutRolesColumnHeader2() {
	return cy.get("[class='details-panel-container']> table:nth-child(2) th:nth-child(2) >span")
}

get AboutRolesColumnHeader3() {
  return cy.get('th').contains('Cisco Role')
}

get AboutRolesColumnHeader4() {
return cy.get("[class='details-panel-container']> table:nth-child(3) th:nth-child(2) >span")
}

// Executive role 

get ExecutiveRoleHeader() {
	return cy.get('span').contains('Executive')
}   

get ExecutiveExpandButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2) [id='role-0']").find("cxui-expansion-panel-header >span")
}

get ExecutiveCollapseButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2) [id='role-0']").find("cxui-expansion-panel-header >span")
}

get ExecutiveRoleDescription() {
	return cy.get('span').contains("The Executive is the team leader for the CX organization. They're responsible for the team's budget, strategy, and accountability, and serve as the go-between for senior leadership.")
}

get AdministratorFeature() {
	return cy.get('span').contains("Administrator settings")
}

get ExecutiveRoleAdministratorFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(1) [ngclass='icon-remove']")
}

get APIsFeature() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(2) >td:nth-child(1)>span")
}

get ExecutiveRoleAPIsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(2) [ngclass='icon-remove']")
}

get CollaborateFeature() {
	return cy.get('span').contains("Collaborate")
}

get ExecutiveRoleCollaborateFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(3) [ngclass='icon-check']")
}

get CustomeraccountsFeature() {
	return cy.get('span').contains("Customer accounts")
}

get ExecutiveRoleCustomeraccountsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(4) [ngclass='icon-check']")
}

get ExecutiveRoleCustomerAccountsFeatureRead_only() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(4) td:nth-child(3)>span")

}

get CustomerContractsFeature() {
	return cy.get('span').contains("Customer contracts")
}

get ExecutiveRoleCustomerContractsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(5) [ngclass='icon-check']")
}

get ExecutiveRoleCustomerContractsFeatureRead_only() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(5)>td:nth-child(3)>span")

}

get LearningFeature() {
	return cy.get('span').contains("Learning")
}

get ExecutiveRoleLearningFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(6) [ngclass='icon-check']")
}

get ExecutiveRoleLearningFeatureRead_only() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(6)>td:nth-child(3)>span")

}

get NotificationsFeature() {
	return cy.get('span').contains("Notifications")
}

get ExecutiveRoleNotificationsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(7) [ngclass='icon-check']")
}

get ExecutiveRoleNotificationsFeatureRead_only() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(7)>td:nth-child(3)>span")


}

get PartneroffersFeature() {
	return cy.get('span').contains("Partner offers")
}

get ExecutiveRolePartnerOffersFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(8) [ngclass='icon-check']")
}

get ExecutiveRolePartnerOffersFeaturestatus_NonPLS() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(8) [ngclass='icon-remove']")
}

get PersonalprofileFeature() {
	return cy.get('span').contains("Personal profile")
}

get ExecutiveRolePersonalProfileFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(9) [ngclass='icon-check']")
}

 get PortalfeedbackFeature() {
	return cy.get('span').contains("Portal feedback")
}

get ExecutiveRolePortalfeedackFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(10) [ngclass='icon-check']")
}

get  PortalsupportFeature() {
	return cy.get('span').contains("Portal support")
}

get ExecutiveRolePortalsupportFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(11) [ngclass='icon-check']")
}

get  TodaydashboardFeature() {
	return cy.get('span').contains("Today dashboard")
}

get ExecutiveRoleTodaydashboardFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(12) [ngclass='icon-check']")
}

get ExecutiveRoleTodaydashboardFeatureRead_only() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(12)>td:nth-child(3)>span")

}

get UsermanagementFeature() {
	return cy.get('span').contains("User management")
}

get ExecutiveRoleUsermanagementFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-0']").find("tr:nth-child(13) [ngclass='icon-remove']")
}

// Role - CSPL 

get CSPLRoleHeader() {
	return cy.get('span').contains('Customer Success Practice Lead')

}   

get CSPLExpandButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("cxui-expansion-panel-header >span")
}

get CSPLCollapseButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("cxui-expansion-panel-header >span")
}

get CSPLRoleDescription() {
	return cy.get('span').contains("The Customer Success Practice Lead (CSPL) is a senior leader of the Customer Success team, responsible for the team's strategy and growth. They administer the partner’s professional services portfolio and collect metrics on its delivery.")
}

 get CSPLRoleAdministratorFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(1) [ngclass='icon-remove']")
}

get CSPLAPIsFeature() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(2) >td:nth-child(1)>span")
}

get CSPLRoleAPIsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(2) [ngclass='icon-remove']")
}

get CSPLRoleCollaborateFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(3) [ngclass='icon-check']")
}

 get CSPLRoleCustomeraccountsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(4) [ngclass='icon-check']")
}

get CSPLRoleCustomeraccountsFeatureRead_Only() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(4)>td:nth-child(3)>span")
}

get CSPLRoleCustomerContractsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(5) [ngclass='icon-check']")
}

get CSPLRoleCustomercontractsFeatureRead_Only() {
   return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(5)>td:nth-child(3)>span")
}


get CSPLRoleLearningFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(6) [ngclass='icon-check']")
}


get CSPLRoleLearningFeatureRead_Only() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(6)>td:nth-child(3)>span")
}

get CSPLRoleNotificationsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(7) [ngclass='icon-check']")
}

get CSPLRoleNotificationsFeatureRead_only() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(7)>td:nth-child(3)>span")
}



get CSPLRolePartnerOffersFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(8) [ngclass='icon-check']")
}


get CSPLRolePartnerOffersFeaturestatus_NonPLS() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(8) [ngclass='icon-remove']")
}

  get CSPLRolePersonalProfileFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(9) [ngclass='icon-check']")
}

get CSPLRolePortalfeedackFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(10) [ngclass='icon-check']")
}

get CSPLRolePortalsupportFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(11) [ngclass='icon-check']")
}

 get CSPLRoleTodaydashboardFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(12) [ngclass='icon-check']")
}


get CSPLRoleTodaydashboardRead_only() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(12)>td:nth-child(3)>span")
}

get CSPLRoleUsermanagementFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-1']").find("tr:nth-child(13) [ngclass='icon-remove']")
}

//  Role - CSM 

get CSMRoleHeader() {
return cy.get('span').contains('Customer Success Manager')

}   

get CSMExpandButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("cxui-expansion-panel-header >span")
}

get CSMCollapseButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("cxui-expansion-panel-header >span")
}

get CSMRoleDescription() {
return cy.get('span').contains("The Customer Success Manager (CSM) is assigned to specific customers. They monitor the customers' positions in the lifecycle and help them progress to the next stage.")
}

get CSMRoleAdministratorFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(1) [ngclass='icon-remove']")
}

get CSMRoleAPIsFeature() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(2) >td:nth-child(1)>span")
}


get CSMRoleAPIsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(2) [ngclass='icon-remove']")
}

get CSMRoleCollaborateFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(3) [ngclass='icon-check']")
}


get CSMRoleCustomeraccountsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(4) [ngclass='icon-check']")

}

get CSMRoleCustomeraccountsFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(4)>td:nth-child(3)>span")
}

get CSMRoleCustomerContractsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(5) [ngclass='icon-check']")
}

get CSMRoleCustomerContractsFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(5)>td:nth-child(3)>span")
}

get CSMRoleLearningFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(6) [ngclass='icon-check']")
}

get CSMRoleLearningFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(6)>td:nth-child(3)>span")
}

get CSMRoleNotificationsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(7) [ngclass='icon-check']")
}

get CSMRoleNotificationsFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(7)>td:nth-child(3)>span")
}

get CSMRolePartnerOffersFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(8) [ngclass='icon-check']")
}

get CSMRolePartnerOffersFeaturestatus_NonPLS() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(8) [ngclass='icon-remove']")
	}
	

get CSMRolePartnerOffersFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(8)>td:nth-child(3)>span")
}

get CSMRolePersonalProfileFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(9) [ngclass='icon-check']")
}

get CSMRolePortalfeedackFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(10) [ngclass='icon-check']")
}

get CSMRolePortalsupportFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(11) [ngclass='icon-check']")
}

get CSMRoleTodaydashboardFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(12) [ngclass='icon-remove']")
}

get CSMRoleUsermanagementFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-2']").find("tr:nth-child(13) [ngclass='icon-remove']")
}

//Role - CSS

get CSSRoleHeader() {
return cy.get('span').contains('Customer Success Specialist')

}   

get CSSExpandButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("cxui-expansion-panel-header >span")
}

get CSSCollapseButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("cxui-expansion-panel-header >span")
}

get CSSRoleDescription() {
return cy.get('span').contains("The Customer Success Specialist (CSS) is a technology-centric role with deep insight into Cisco's products and solutions. They help customers overcome technology barriers via individual or group guidance.")
}

get CSSRoleAdministratorFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(1) [ngclass='icon-remove']")
}

get CSSRoleAPIsFeature() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(2) >td:nth-child(1)>span")
}

get CSSRoleAPIsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(2) [ngclass='icon-remove']")
}

get CSSRoleCollaborateFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(3) [ngclass='icon-check']")
}

get CSSRoleCustomeraccountsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(4) [ngclass='icon-check']")
}

get CSSRoleCustomeraccountsFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(4)>td:nth-child(3)>span")
}

get CSSRoleCustomerContractsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(5) [ngclass='icon-remove']")
}

get CSSRoleLearningFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(6) [ngclass='icon-check']")
}

get CSSRoleLearningFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(6)>td:nth-child(3)>span")
}

get CSSRoleNotificationsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(7) [ngclass='icon-check']")
}

get CSSRoleNotificationsFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(7)>td:nth-child(3)>span")
}

get CSSRolePartnerOffersFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(8) [ngclass='icon-remove']")
}

get CSSRolePersonalProfileFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(9) [ngclass='icon-check']")
}

get CSSRolePortalfeedackFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(10) [ngclass='icon-check']")
}

get CSSRolePortalsupportFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(11) [ngclass='icon-check']")
}

get CSSRoleTodaydashboardFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(12) [ngclass='icon-remove']")
}

get CSSRoleUsermanagementFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-3']").find("tr:nth-child(13) [ngclass='icon-remove']")
}

// Role - Renewals Manager

get RMRoleHeader() {
return cy.get('span').contains('Renewals Manager')

}   

get RMExpandButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("cxui-expansion-panel-header >span")
}

get RMCollapseButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("cxui-expansion-panel-header >span")
}

get RMRoleDescription() {
return cy.get('span').contains("The Renewals Manager (RM) ensures that customers can effortlessly renew their contracts on time. They're responsible for risk assessment, renewal opportunities, and recurring revenue.")
}

get RMRoleAdministratorFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(1) [ngclass='icon-remove']")
}

get RMRoleAPIsFeature() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(2) >td:nth-child(1)>span")
}

get RMRoleAPIsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(2) [ngclass='icon-remove']")
}

get RMRoleCollaborateFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(3) [ngclass='icon-check']")
}

get RMRoleCustomeraccountsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(4) [ngclass='icon-remove']")
}

get RMRoleCustomerContractsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(5) [ngclass='icon-check']")
}

get RMRoleCustomerContractsFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(5)>td:nth-child(3)>span")
}

get RMRoleLearningFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(6) [ngclass='icon-check']")
}

get RMRoleLearningFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(6)>td:nth-child(3)>span")
}

get RMRoleNotificationsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(7) [ngclass='icon-check']")
}

get RMRoleNotificationsFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(7)>td:nth-child(3)>span")
}

get RMRolePartnerOffersFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(8) [ngclass='icon-remove']")
}

get RMRolePersonalProfileFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(9) [ngclass='icon-check']")
}

get RMRolePortalfeedackFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(10) [ngclass='icon-check']")

}

get RMRolePortalsupportFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(11) [ngclass='icon-check']")
}


get RMRoleTodaydashboardFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(12) [ngclass='icon-remove']")
}

get RMRoleUsermanagementFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-4']").find("tr:nth-child(13) [ngclass='icon-remove']")
}

//Role - Administrator

get AdminRoleHeader() {
return cy.get('span').contains('Administrator')

}   

get AdminExpandButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("cxui-expansion-panel-header >span")
}

get AdminCollapseButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("cxui-expansion-panel-header >span")
}

get AdminRoleDescription() {
return cy.get('span').contains('The Administrator is responsible for managing all users in PX Cloud. They assign user roles, grant access and permissions, and match partner users to customer accounts.')
}

get AdminRoleAdministratorFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(1) [ngclass='icon-check']")
}

get AdminRoleAPIsFeatures() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(2) >td:nth-child(1)>span")
}

get AdminRoleAPIsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(2) [ngclass='icon-check']")
}

get AdminRoleAPIsFeaturestatus_NonPLS() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(2) [ngclass='icon-remove']")
}
	

get AdminRoleCollaborateFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(3) [ngclass='icon-check']")
}

get AdminRoleCustomeraccountsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(4) [ngclass='icon-check']")
}

get AdminRoleCustomeraccountsFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(4)>td:nth-child(3)>span")
}

get AdminRoleCustomerContractsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(5) [ngclass='icon-check']")
}

get AdminRoleCustomerContractsFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(5)>td:nth-child(3)>span")
}

get AdminRoleLearningFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(6) [ngclass='icon-check']")
}

get AdminRoleLearningFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(6)>td:nth-child(3)>span")
}

get AdminRoleNotificationsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(7) [ngclass='icon-check']")
}

get AdminRoleNotificationsFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(7)>td:nth-child(3)>span")
}

get AdminRolePartnerOffersFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(8) [ngclass='icon-check']")
}

get AdminRolePartnerOffersFeaturestatus_NonPLS() {
	return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(8) [ngclass='icon-remove']")
	}

get AdminRolePersonalProfileFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(9) [ngclass='icon-check']")
}

get AdminRolePortalfeedackFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(10) [ngclass='icon-check']")
}

get AdminRolePortalsupportFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(11) [ngclass='icon-check']")
}

get AdminRoleTodaydashboardFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(12) [ngclass='icon-check']")
}

get AdminRoleTodaydashboardFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(12)>td:nth-child(3)>span")
}

get AdminRoleUsermanagementFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(2)  [id='role-5']").find("tr:nth-child(13) [ngclass='icon-check']")
}

//Role - PAM/VPAM

get PAM_VPAMRoleHeader() {
return cy.get('span').contains('Partner Account Manager / Virtual Partner Account Manager')

}   

get PAM_VPAMExpandButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("cxui-expansion-panel-header >span")
}

get PAM_VPAMCollapseButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("cxui-expansion-panel-header >span")
}

get PAM_VPAMRoleDescription() {
return cy.get('span').contains("The PAM (or VPAM for Premier partners) is the partner’s primary contact within Cisco. They help partners develop and execute customer strategies, support them in PX Cloud, and facilitate a successful partner/Cisco relationship.")
}

get PAM_VPAMRoleAdministratorFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(1) [ngclass='icon-check']")
}

get PAM_VPAMRoleAPIsFeature() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(2) >td:nth-child(1)>span")
}


get PAM_VPAMRoleAPIsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(2) [ngclass='icon-remove']")
}


get PAM_VPAMRoleCollaborateFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(3) [ngclass='icon-check']")
}

get PAM_VPAMRoleCustomeraccountsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(4) [ngclass='icon-check']")
}

get PAM_VPAMRoleCustomeraccountsFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(4)>td:nth-child(3)>span")
}


get PAM_VPAMRoleCustomerContractsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(5) [ngclass='icon-check']")
}


get PAM_VPAMRoleCustomerContractsFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(5)>td:nth-child(3)>span")
}


get PAM_VPAMRoleLearningFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(6) [ngclass='icon-check']")
}

get PAM_VPAMRoleLearningFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(6)>td:nth-child(3)>span")
}


get PAM_VPAMRoleNotificationsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(7) [ngclass='icon-check']")
}

get PAM_VPAMRoleNotificationsFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(7)>td:nth-child(3)>span")
}

get PAM_VPAMRolePartnerOffersFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(8) [ngclass='icon-check']")
}


get PAM_VPAMRolePartnerOffersFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(8)>td:nth-child(3)>span")
}

get PAM_VPAMRolePartnerOffersFeaturestatus_NonPLS() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(8) [ngclass='icon-remove']")
	}

get PAM_VPAMRolePersonalProfileFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(9) [ngclass='icon-check']")
}


get PAM_VPAMRolePortalfeedackFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(10) [ngclass='icon-check']")
}

get PAM_VPAMRolePortalsupportFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(11) [ngclass='icon-check']")
}

get PAM_VPAMRoleTodaydashboardFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(12) [ngclass='icon-check']")
}

get PAM_VPAMRoleTodaydashboardRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(12)>td:nth-child(3)>span")
}

get PAM_VPAMRoleUsermanagementFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(13) [ngclass='icon-check']")
}

get PAM_VPAMRoleUsermanagementFeatureRead_only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-0']").find("tr:nth-child(13)>td:nth-child(3)>span")
}


//Role - PBDS

get PBDSRoleHeader() {
return cy.get('span').contains('Partner Business Development Specialist')

}   

get PBDSExpandButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("cxui-expansion-panel-header >span")

}

get PBDSCollapseButton() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("cxui-expansion-panel-header >span")

}

get PBDSRoleDescription() {
return cy.get('span').contains("The PBDS is an internal Cisco role focused on growth. They work with partner initiatives including marketing, opportunity identification, profitability, customer engagement, and pipeline development.")
}

get PBDSRoleAdministratorFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(1) [ngclass='icon-check']")
}

get PBDSRoleAPIsFeature() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(2) >td:nth-child(1)>span")
}


get PBDSRoleAPIsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(2) [ngclass='icon-remove']")
}


get PBDSRoleCollaborateFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(3) [ngclass='icon-check']")
}

get PBDSRoleCustomeraccountsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(4) [ngclass='icon-check']")
}

get PBDSRoleCustomeraccountsFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(4)>td:nth-child(3)>span")
}

get PBDSRoleCustomerContractsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(5) [ngclass='icon-check']")
}

get PBDSRoleCustomerContractsFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(5)>td:nth-child(3)>span")
}

get PBDSRoleLearningFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(6) [ngclass='icon-check']")
}

get PBDSRoleLearningFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(6)>td:nth-child(3)>span")
}

get PBDSRoleNotificationsFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(7) [ngclass='icon-check']")
}

get PBDSRoleNotificationsFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(7)>td:nth-child(3)>span")
}

get PBDSRolePartnerOffersFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(8) [ngclass='icon-check']")
}

get PBDSRolePartnerOffersFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(8)>td:nth-child(3)>span")
}

get PBDSRolePartnerOffersFeaturestatus_NonPLS() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(8) [ngclass='icon-remove']")
	}



get PBDSRolePersonalProfileFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(9) [ngclass='icon-check']")
}

get PBDSRolePortalfeedackFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(10) [ngclass='icon-check']")
}

get PBDSRolePortalsupportFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(11) [ngclass='icon-check']")
}

get PBDSRoleTodaydashboardFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(12) [ngclass='icon-check']")
}

get PBDSRoleTodaydashboardFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(12)>td:nth-child(3)>span")
}

get PBDSRoleUsermanagementFeaturestatus() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(13) [ngclass='icon-check']")
}

get PBDSRoleUsermanagementFeatureRead_Only() {
return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-1']").find("tr:nth-child(13)>td:nth-child(3)>span")
}


// POM

get POMRoleHeader() {
	return cy.get('span').contains('Partner Operations Manager')
	
	}   
	
	get POMExpandButton() {
		return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("cxui-expansion-panel-header >span")
	
	}
	
	get POMCollapseButton() {
		return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("cxui-expansion-panel-header >span")
	
	}
	
	get POMRoleDescription() {
	return cy.get('span').contains("The POM provides partners with end-to-end support, helping to drive operations and the adoption of tools, processes, and capabilities within the partner community.")
	}
	
	get POMRoleAdministratorFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(1) [ngclass='icon-check']")
	}
	
	get POMRoleAPIsFeature() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(2) >td:nth-child(1)>span")
	}
	
	
	get POMRoleAPIsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(2) [ngclass='icon-remove']")
	}
	
	
	get POMRoleCollaborateFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(3) [ngclass='icon-check']")
	}
	
	get POMRoleCustomeraccountsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(4) [ngclass='icon-check']")
	}
	
	get POMRoleCustomeraccountsFeatureRead_Only() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(4)>td:nth-child(3)>span")
	}
	
	get POMRoleCustomerContractsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(5) [ngclass='icon-check']")
	}
	
	get POMRoleCustomerContractsFeatureRead_Only() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(5)>td:nth-child(3)>span")
	}
	
	get POMRoleLearningFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(6) [ngclass='icon-check']")
	}
	
	get POMRoleLearningFeatureRead_Only() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(6)>td:nth-child(3)>span")
	}
	
	get POMRoleNotificationsFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(7) [ngclass='icon-check']")
	}
	
	get POMRoleNotificationsFeatureRead_Only() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(7)>td:nth-child(3)>span")
	}
	
	get POMRolePartnerOffersFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(8) [ngclass='icon-check']")
	}
	
	get POMRolePartnerOffersFeatureRead_Only() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(8)>td:nth-child(3)>span")
	}
	
	get POMRolePartnerOffersFeaturestatus_NonPLS() {
		return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(8) [ngclass='icon-remove']")
		}
	
	
	
	get POMRolePersonalProfileFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(9) [ngclass='icon-check']")
	}
	
	get POMRolePortalfeedackFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(10) [ngclass='icon-check']")
	}
	
	get POMRolePortalsupportFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(11) [ngclass='icon-check']")
	}
	
	get POMRoleTodaydashboardFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(12) [ngclass='icon-check']")
	}
	
	get POMRoleTodaydashboardFeatureRead_Only() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(12)>td:nth-child(3)>span")
	}
	
	get POMRoleUsermanagementFeaturestatus() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(13) [ngclass='icon-check']")
	}
	
	get POMRoleUsermanagementFeatureRead_Only() {
	return cy.get("[class='details-panel-container']> table:nth-child(3)  [id='role-2']").find("tr:nth-child(13)>td:nth-child(3)>span")
	}
	


}

export default new ManageUsers();
