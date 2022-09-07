/// <reference types= "Cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import pxconfig from '../../../fixtures/testdata/platform/PX_Config.json';
import ManageUsers from '../../pageObjects/platform/ManageUsers.po';
import AdminSettingsCustomers from '../../pageObjects/platform/AdminSettingsCustomers.po';


//Declaring Global Variables
let usernametobeSearched;
let PartnerUserNamein360;
let UserNameActuallySelected;
let RemoveUserPXCloudUserNameText;
let UserFirstName
let i=0;


When('User lands on the Admin Settings Manage Users section', () => {
	//Validate the Header Displayed
	ManageUsers.ManageUsersHeader.should('contain.text',pxconfig.SectionHeader);
		
});

Then('Verify whether Description, Add New User Link and Table Column Headers gets displayed or not',() => {
		// Validate the Description displayed
		ManageUsers.Description.then((description) => {
			const Descriptiontext1 = description.text();
			const Descriptiontext = Descriptiontext1.replace(' ', '').trim();
			expect(Descriptiontext).to.equal(pxconfig.Description);
		});

		// Validate the Table Column Headers
		ManageUsers.TableColumnName1.should('contain.text',	pxconfig.Column1Name);
		ManageUsers.TableColumnName2.should('contain.text',	pxconfig.Column2Name);
		ManageUsers.TableColumnName3.should('contain.text', pxconfig.Column3Name);
		ManageUsers.TableColumnName4.should('contain.text', pxconfig.Column4Name);
		
       },
);



Given('User clicks on the Search Field', () => {
	//Click on the search field and then search for a User
	ManageUsers.Searchbox.click();
});

When('Search results are displayed', () => {
	ManageUsers.PartnerUserSecondName.then((SecondName) => {
		usernametobeSearched = SecondName.text();
		ManageUsers.Searchbox.type(usernametobeSearched).type('{enter}');
		ManageUsers.PartnerUserFirstName.as('FirstName');
		cy.get('@FirstName').should('be.visible');

		
	});
});

Then(
	'Verify the partner name in the search results matches with the Partner name searched for',() => {
		ManageUsers.PartnerUserFirstName.should('have.text',usernametobeSearched);	
		ManageUsers.SearchboxCloseButton.click();
	},
);

Given('User clicks on the Add New User Link', () => {
	// Click on the Add New User Link
	ManageUsers.AddNewUserLink.click({ force: true });
	ManageUsers.NameInputField.as('NameField');
	cy.get('@NameField').should('be.visible');
});

When('User selects a User and a role in Add New User Modal Window', () => {
	// Select a Partner User and Role
	ManageUsers.NameInputField.click({ force: true });
	ManageUsers.Name2ndOption.click({ force: true });
	ManageUsers.RoleInputField.click({ force: true });
	ManageUsers.Role1stOption.click({ force: true });
	//Click on Continue
	ManageUsers.AddNUserAddButton.click({ force: true });
	ManageUsers.UserNamein360.as('UserName360');
	cy.get('@UserName360').should('be.visible');
});


When('In Add new user modal, Validate the contents in Add New User Modal', () => {
	//Validate the contents in Add New User modal
	ManageUsers.AddNewUserHeader.should('contain.text',pxconfig.AddNewUserModalHeader)
	ManageUsers.AddNewUserDescription1.should('contain.text',pxconfig.AddNewUserModalDescription1)
	ManageUsers.AddNewUserDescription2.should('contain.text',pxconfig.AddNewUserModalDescription2)
	ManageUsers.AddNewUserPSSLink.should('contain.text',pxconfig.AddNewUserModalPSSLink)

	//Validate whether PSS link opens up in a new tab or not
	ManageUsers.AddNewUserPSSLink.should('have.attr', 'target', '_blank')

	ManageUsers.AddNewUserDescription3.should('be.visible')
	ManageUsers.AddNewUserNameHeader.should('contain.text',pxconfig.AddNewUserModalNameFieldHeader)
	ManageUsers.AddNewUserPxCloudRoleHeader.should('contain.text',pxconfig.AddNewUserModalPxCloudRoleFieldHeader)
	ManageUsers.AddNewUserSendWelcomeEmail.should('contain.text',pxconfig.AddNewUserModalSendWelcomeEmail)
	ManageUsers.AddNewUserCheckbox.should('be.visible')

	// Validate whetehr the buttons are displayed in the Add new user modal
	ManageUsers.AddNUserAddButton.should('be.visible')
	ManageUsers.AddNUserGoBackButton.should('be.visible')

});

Then('Verify the user is added to the User list in the table', () => {
	// Get the Partner User name from User 360
	ManageUsers.UserNamein360.then((PartnerName360) => {
		PartnerUserNamein360 = PartnerName360.text().toLocaleLowerCase();
		cy.log(PartnerUserNamein360);
	});

	// Close the User 360
	ManageUsers.Userdetails360CloseButton.scrollIntoView();
	ManageUsers.Userdetails360CloseButton.click({ force: true });
	ManageUsers.PartnerUserFirstName.as('UserFirstName');
	cy.get('@UserFirstName').should('be.visible');

	//Validate whether the added user name is present in the User list present in the table
	cy.get('body').then((body) => {

		AdminSettingsCustomers.CustomersVerticalTab.click({force: true});
		ManageUsers.ManageUsersTab.click({force: true});
		ManageUsers.ManageUsersHeader.should('be.visible');

	
		// search for the Added username and validate if it is displayed in the Manage Users table or not
		ManageUsers.Searchbox.click({force:true})
		ManageUsers.Searchbox.type(PartnerUserNamein360).type('{enter}');
					
		//Click on the search field and then search for a User
			ManageUsers.PartnerUserFirstName.as('FirstName');
			cy.get('@FirstName').should('be.visible');
		
			ManageUsers.PartnerUserFirstName.then((FirstName) => {
				UserFirstName = FirstName.text().toLocaleLowerCase();
				cy.log(UserFirstName);
				assert.equal(UserFirstName,PartnerUserNamein360,'Added User name is displayed in the Manage Users list');
			});

			// Validate whether the Partner name added is displayed in the search results
			
			ManageUsers.SearchboxCloseButton.click({ force: true });
			ManageUsers.PartnerUserFirstName.as('PUFirstName');
			cy.get('@PUFirstName').should('be.visible');


	});
});

Given('User clicks on a Partner name in the Manage Users table', () => {
	let PartnerAdminUserName;
	//Get the Partner Admin User Name
	ManageUsers.UserIcon.click({ force: true });
	ManageUsers.PartnerUserAdminName.as('AdminName');
	cy.get('@AdminName').should('be.visible');

	ManageUsers.PartnerUserAdminName.then((PartnerAdminname) => {
		PartnerAdminUserName = PartnerAdminname.text();
	});

	//Click on a User name in the ManageUsers table to open up the User 360
	ManageUsers.PartnerUserSecondName.then((SecondName) => {
		const UserNameSelectedtobeRemoved = SecondName.text();
		if (UserNameSelectedtobeRemoved == PartnerAdminUserName) {
			ManageUsers.PartnerUserThirdName.then((ThirdName) => {
				UserNameActuallySelected = ThirdName.text();
			});

			ManageUsers.PartnerUserThirdName.click({ force: true });
			ManageUsers.UserNamein360.as('UserName360');
			cy.get('@UserName360').should('be.visible');
			cy.log('UserName to be Removed is' + UserNameActuallySelected);
		} else {
			UserNameActuallySelected = SecondName.text();
			cy.log('UserName to be Removed is ' + UserNameActuallySelected);
			ManageUsers.PartnerUserSecondName.click({ force: true });
			ManageUsers.UserNamein360.as('360UserName');
			cy.get('@360UserName').should('be.visible');
		}
	});
});


When('In Remove user modal, Validate the contents in Remove User Modal',() => {
	// Click on the Menu Component and then click on the option "Remove User from PX Cloud"
	ManageUsers.User360MenuComponent.click({ force: true });
	ManageUsers.OptionRemoveUserfromPXCloud.as('RemoveUser');
	cy.get('@RemoveUser').should('be.visible');
	ManageUsers.OptionRemoveUserfromPXCloud.click({ force: true });
	ManageUsers.RemoveUserPXCloudUserName.as('RemoveUsername');
	cy.get('@RemoveUsername').should('be.visible');

	// Validate whether the Selected Username is displayed in the "Remove User from PX Cloud" Modal window
	ManageUsers.RemoveUserPXCloudUserName.then((Name) => {
		RemoveUserPXCloudUserNameText = Name.text();
		assert.equal(RemoveUserPXCloudUserNameText,UserNameActuallySelected,'Validating the UserName');
	});

   //Validate the contents displayed in "Remove User from Px Cloud" Modal
   ManageUsers.RemoveUserPXCloudHeader.should('contain.text',pxconfig.RemoveUserModalHeader)
   ManageUsers.RemoveUserPXCloudDescription1.should('contain.text',pxconfig.RemoveUserModalDescription1)
   ManageUsers.RemoveUserPXCloudDescription2.should('contain.text',pxconfig.RemoveUserModalDescription2)
   
   // Validate whether the buttons are displayed as expected within the Remove User from PX Cloud pop up 
   ManageUsers.RemoveUserPXCloudRemoveButton.should('be.visible')
   ManageUsers.RemoveUserPXCloudGoBackButton.should('be.visible')

});

When('User clicks on the Remove button in PX Cloud pop up',() => {
		// Click on the Remove button
		ManageUsers.RemoveUserPXCloudRemoveButton.click({ force: true });
		ManageUsers.PartnerUserFirstName.as('UserFirstName');
		cy.get('@UserFirstName').should('be.visible');
	},
);

Then('Verify the user is removed from the user list in the table', () => {
	//Validate whether the removed user name is not present in the User list in Manage Users table
	cy.get('body').then((body) => {	
			// search for the Removed username and validate if it is displayed in the Manage Users table or not
			ManageUsers.Searchbox.type(UserNameActuallySelected).type('{enter}');

			//Click on the search field and then search for a User
			ManageUsers.Searchbox.click({ force: true });
			ManageUsers.NoSearchResultsReturned.as('NoSearch');
			cy.get('@NoSearch').should('be.visible');

			// Validate whether no search results are returned
			if (ManageUsers.NoSearchResultsReturned.should('have.text',' No Results Found ')) {
				cy.log('Removed User is not present in the name list displayed in the Manage Users table');
			} else {
				cy.log('Removed User is present in the name list displayed in the Manage Users table');
			}

			ManageUsers.SearchboxCloseButton.click({ force: true });
			ManageUsers.PartnerUserFirstName.as('PartnerFirstName');
			cy.get('@PartnerFirstName').should('be.visible');
		});
});


Given('User clicks on a Partner name to open up the User 360', () => {
	ManageUsers.PartnerRoleColumn.each((item,index)=> {
		cy.wrap(item).then((RoleName) => {
		const PartnerRoleName=RoleName.text();        
		
	 cy.log("Partner Role Name is" +PartnerRoleName)
	  if (i==0) {
	  if (!((PartnerRoleName=="Customer Success Manager") || (PartnerRoleName=="Administrator"))) {
		ManageUsers.PartnerRoleColumn.eq(index).click({force:true});
        i=1
		cy.log("Value of i is", i)
		ManageUsers.UserNamein360.as('360UserName');
		cy.get('@360UserName').should('be.visible');
 }
}
  })
  })

});


When('In User 360, Click on the Roles dropdown and select a different role for the user', () => {
	// Click on the Roles dropdown
	ManageUsers.RolesDropdownField.click({force:true});
	ManageUsers.RolesDropdownCSM.should('be.visible');
	// Select the role - Customer success Manager
	ManageUsers.RolesDropdownCSM.click({force:true});
	ManageUsers.ChangeRoleHeader.should('be.visible');

});


Then('Validate the contents present within the Change user modal', () => {
	// Validate the contents in Change role modal
	ManageUsers.ChangeRoleHeader.should('contain.text',pxconfig.ChangeRoleModalHeader);
	ManageUsers.ChangeRoleDescription.should('contain.text',pxconfig.ChangeRoleModalDescription);
	ManageUsers.ChangeRoleCurrentRoleHeader.should('contain.text',pxconfig.ChangeRoleCurrentRoleHeader);
	ManageUsers.ChangeRoleNewRoleHeader.should('contain.text',pxconfig.ChangeRoleNewRoleHeader);

	ManageUsers.ChangeRoleCurrentRoleValue.each((item) => {
		cy.wrap(item).then((Values) => {
		   const RoleValue=Values.text().trim();
		   expect(RoleValue,'CurrentRoleValue').to.be.oneOf(["Customer Success Specialist","Executive","Customer Success Practice Lead","Renewals Manager"])
		})
	
	})

    ManageUsers.ChangeRoleNewRoleValue.should('contain.text',"Customer Success Manager");
 
   // Validate the buttons displayed in the Change user role modal
   ManageUsers.ChangeRoleGoBackButton.should('be.visible')
   ManageUsers.ChangeRoleChangeButton.should('be.visible')

  // Click on the Change button
   ManageUsers.ChangeRoleChangeButton.click({force:true})
   ManageUsers.User360AddAnotherButton.should('be.visible')
});


Given('User clicks on the Add Another link', () => {
	ManageUsers.User360AddAnotherButton.click({force:true})
	ManageUsers.User360Customerdropdown.should('be.visible')
	
});


When('In User 360, when the user selects a customer from the dropdown element', () => {
	ManageUsers.User360Customerdropdown.click({force:true})
	ManageUsers.User360CustomerdropdownfirstCustomer.should('be.visible')

});


Then('Validate whether Request Access button is displayed for the customer', () => {
	// Validate whether Request Access button is displayed
	ManageUsers.User360RequestAccessButton.should('be.visible')

	// Click on the First Customer
	ManageUsers.User360CustomerdropdownfirstCustomer.click({force:true})
	ManageUsers.User360RequestAccessButton.click({force:true})
	ManageUsers.User360CustomerAccessRequestedMessage.should('be.visible')
});



Given('User clicks on the Remove button', () => {
	// Validate whether Remove button is displayed
	ManageUsers.User360AssociatedCustomerMenuComponent.click({force:true})
	ManageUsers.User360MenuComponentRemoveButton.should('be.visible')
	ManageUsers.User360MenuComponentRemoveButton.click({force:true})
	
	//Validate whether Remove Customer Account modal is displayed 
	ManageUsers.RemoveCustomerAccountModalHeader.should('be.visible')
});


When('In Remove Customer Account Modal, validate the contents present in it', () => {
	// Validate the contents displayed in the Remove Customer account modal
	ManageUsers.RemoveCustomerAccountModalHeader.should('contain.text',pxconfig.RemoveCustomerAccountModalHeader)
	ManageUsers.RemoveCustomerAccountModalDescription1.should('contain.text',pxconfig.RemoveCustomerAccountModalDescription1)
	ManageUsers.RemoveCustomerAccountModalDescription2.should('contain.text',pxconfig.RemoveCustomerAccountModalDescription2)

	//Validate the buttons displayed in the modal
	ManageUsers.RemoveCustomerAccountModalGoBackButton.should('be.visible')
	ManageUsers.RemoveCustomerAccountModalSubmitButton.should('be.visible')
});


Then('When the user clicks on the Remove button in the modal, the added customer account gets removed or not', () => {
	// Validate whether the added customer gets removed or not 
	ManageUsers.RemoveCustomerAccountModalSubmitButton.click({force:true})
	ManageUsers.User360CustomerAccessRequestedMessage.should('not.exist')

	//Close the User 360
	ManageUsers.Userdetails360CloseButton.scrollIntoView();
	ManageUsers.Userdetails360CloseButton.click({ force: true });
	ManageUsers.PartnerUserFirstName.should('be.visible')

	//Close the Manage Users section 
	ManageUsers.AdminSettingsCloseButton.click({force:true});
	ManageUsers.PLSAccessStatusTile.as('PLSState');
	 cy.get('@PLSState').should('be.visible');
});
