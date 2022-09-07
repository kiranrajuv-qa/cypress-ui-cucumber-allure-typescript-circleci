@pa_st_only @platform @sanity @1.8release

Feature: Admin Settings Manage Users section

	Scenario: Validate the Description, Link and Column Headers
		Given User clicks on the Gear Icon
		When User lands on the Admin Settings Manage Users section
		Then Verify whether Description, Add New User Link and Table Column Headers gets displayed or not

	Scenario: Validate the search functionality in Manage Users section
		Given User clicks on the Search Field
		When  Search results are displayed
		Then Verify the partner name in the search results matches with the Partner name searched for

	Scenario: Validate the Add New User Functionality
		Given User clicks on the Add New User Link
		When  In Add new user modal, Validate the contents in Add New User Modal
		When  User selects a User and a role in Add New User Modal Window		
		Then Verify the user is added to the User list in the table


	Scenario: Validate the Remove User Functionality
		Given User clicks on a Partner name in the Manage Users table
		When  In Remove user modal, Validate the contents in Remove User Modal
		When  User clicks on the Remove button in PX Cloud pop up		
		Then Verify the user is removed from the user list in the table


   Scenario: Validate the Change user role modal contents
        Given User clicks on a Partner name to open up the User 360
		When  In User 360, Click on the Roles dropdown and select a different role for the user
		Then  Validate the contents present within the Change user modal


    Scenario: Validate whether a customer can be assigned to a CSM user 
        Given User clicks on the Add Another link 
		When  In User 360, when the user selects a customer from the dropdown element
		Then  Validate whether Request Access button is displayed for the customer

    Scenario: Validate the contents displayed within the Remove customer account modal
        Given User clicks on the Remove button 
		When  In Remove Customer Account Modal, validate the contents present in it
		Then  When the user clicks on the Remove button in the modal, the added customer account gets removed or not


		

