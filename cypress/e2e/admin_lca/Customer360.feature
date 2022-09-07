@pa_lca @GIMLET @1.7release @customers @customer360
Feature: LCA Customer 360 view - PORTFOLIO

	Scenario: Checking whether 360 view is displayed for customer - granted
		When User is on 'CUSTOMERS' Facet
		And User clicks on 'Granted' customer
		Then 360 view should be opened
		Then 'PORTFOLIO' tab should be visible

	Scenario: Check whether Main contact and UseCase View card exists
		When In Customer 360 view on Portfolio tab
		Then Main Contact Card should exist
		Then UseCase View Card should exist

 Scenario: Check view summary button besides solutions name should takes users "All use cases view" under selected solution
	When In Customer 360 view on Portfolio tab
	Then Click on View Summary
	And Validate if user lands on All Usecases View

	Scenario: Verify Use Cases which are available in PX but not in LCA will be shown as 'No Status'
		When In Customer 360 view on Portfolio tab
		Then Count usecases with nostatus match with usecases in onboarded stage

	Scenario: Verify Use Cases in stalled state should match with Usecases in Usecase Overview
		When In Customer 360 view on Portfolio tab
		Then usecases count in Stalled stage should match with the count in UsecaseView

	Scenario: Verify Use Cases in On Track state should match with Usecases in Usecase Overview
		When In Customer 360 view on Portfolio tab
		Then usecases count in On Track should match with the count in UsecaseView

		Scenario: Verify Use Cases in Missing Contact state should match with Usecases in Usecase Overview
		When In Customer 360 view on Portfolio tab
		Then usecases count in missing contact should match with the count in UsecaseView


	Scenario: Verify usecase count on usecase Overview
		When Verify Usecase count is visible
		Then Verify usecase count for items stalled, missing contacts and ontrack

	Scenario: Verify when there is no Customercontact User can Add Customer Contact
		When User is on Main Customer Contact Card No contact is added
		Then User is able to Edit Contact and save Portfolio contact
		And Validate contact is added

	Scenario: Check whether user is able to Edit Main contact card in Portfolio and save
		When The ellipsis is visible on the Main contact card
		Then Check whether the ellipsis is clickable and dropdown is displayed
		Then The Edit Contact modal should display when Edit Contact item in drop down is clicked
		Then User is able to Edit Contact and save Portfolio contact
		And Validate contact is added

	Scenario: Verify Portfolio tab Main Contact Edit Modal "X" closes the modal
		When The ellipsis is visible on the Main contact card
		Then Check whether the ellipsis is clickable and dropdown is displayed
		Then The Edit Contact modal should display when Edit Contact item in drop down is clicked
		And User is able to cancel out of the Portfolio Main Contact Edit modal

	Scenario: Verify email field validation errors in Main contact card in Portfolio
		When The ellipsis is visible on the Main contact card
		Then Check whether the ellipsis is clickable and dropdown is displayed
		Then The Edit Contact modal should display when Edit Contact item in drop down is clicked
		Then User adds an invalid mail id and a validation error is displayed
		And User is able to cancel out of the Portfolio Main Contact Edit modal

	Scenario: Verify Remove Main Contact from Main Contact Card
		When User is on Main Customer Contact Card No contact is added
		Then User is able to Edit Contact and save Portfolio contact
		Then Validate contact is added
		Then Remove the contact
		And Validate contact is removed

	Scenario: Check if Main Contact Card exists under usecase 360 view in Lifecycle tab
		When User clicks on a usecase under a solution in Portfolio
		Then The Usecase 360 view should be opened
		And Main Customer Contact should be visible on LifeCycle tab

	Scenario: Verify when there is no Customercontact, User can Add Customer Contact in LifeCycle
		When User is on Main Customer Contact Card No contact is added in LifeCycle
		Then User is able to Edit Contact and save Portfolio contact
		And Validate LC contact is added

	Scenario: Check Lifecycle Main Contact Card drop down items
		When The ellipsis is visible on the Main contact card in LifeCycle tab
		Then Check ellipsis is clickable and dropdown is displayed in LifeCycle tab
		Then The drop down should have Edit Contact item in LifeCycle tab
		And The drop down should have Remove contact item in LifeCycle tab

	Scenario: Verify LifeCycle tab Main Contact Edit Modal and add new contact
		When The LC Edit Contact modal should display when Edit Contact item in drop down is clicked
		Then User should be able to enter name, email and select language
		Then User should be able to save contact

	Scenario: Verify LifeCycle tab Main Contact Edit Modal can be Cancelled
		When The ellipsis is visible on the Main contact card in LifeCycle tab
		Then Check ellipsis is clickable and dropdown is displayed in LifeCycle tab
		Then The drop down should have Edit Contact item in LifeCycle tab
		Then The LC Edit Contact modal should display when Edit Contact item in drop down is clicked
		And User should be able to click on Go Back in the modal and cancel

	Scenario: Verify Lifecycle tab Main Contact Edit Modal "X" closes the modal
		When The ellipsis is visible on the Main contact card in LifeCycle tab
		Then Check ellipsis is clickable and dropdown is displayed in LifeCycle tab
		Then The drop down should have Edit Contact item in LifeCycle tab
		Then The LC Edit Contact modal should display when Edit Contact item in drop down is clicked
		And User is able to X out of the edit modal

	Scenario: Verify Lifecycle tab Main Contact Remove Modal "X" closes the modal
		When The ellipsis is visible on the Main contact card in LifeCycle tab
		Then Check ellipsis is clickable and dropdown is displayed in LifeCycle tab
		And The drop down should have Remove contact item in LifeCycle tab
		Then Remove Contact item in drop down is clicked and the modal is displayed
		And User is able to X out of the remove modal

	Scenario: Verify LifeCycle tab Main Contact Remove Modal can be Cancelled
		When The ellipsis is visible on the Main contact card in LifeCycle tab
		Then Check ellipsis is clickable and dropdown is displayed in LifeCycle tab
		And The drop down should have Remove contact item in LifeCycle tab
		Then Remove Contact item in drop down is clicked and the modal is displayed
		And User should be able to click on Go Back in the modal and cancel

	Scenario: Verify LifeCycle tab Main Contact Remove Modal and Remove a contact
		When The ellipsis is visible on the Main contact card in LifeCycle tab
		Then Check ellipsis is clickable and dropdown is displayed in LifeCycle tab
		And The drop down should have Remove contact item in LifeCycle tab
		Then Remove Contact item in drop down is clicked and the modal is displayed
		And User should be able to Remove the contact by clicking on Remove button

	Scenario: Check if Need Help assisting your customer playbook link is active
		When User is on LifeCycle tab customer playbook link should be active

	Scenario: Verify PartnerContact modal can be displayed & user can Add and update contacts in LifeCycle tab
		When AddEdit Partner Contacts button is visible and clickable on LifeCycle Tab
		Then User is able view Partner Contacts modal & enter details
		And User is able to save the Partner contacts

	Scenario: Verify PartnerContact modal can be displayed & user can Cancel Operation in LifeCycle tab
		When AddEdit Partner Contacts button is visible and clickable on LifeCycle Tab
		Then User is able to Cancel the Partner contact operation

	Scenario: Verify PartnerContact modal can be displayed & user can Delete contacts in LifeCycle tab
		When AddEdit Partner Contacts button is visible and clickable on LifeCycle Tab
		Then User is able to Delete the Partner contacts
		And User is able to save the Partner contacts

	Scenario: Verify if duplicate Partner Contacts can be entered in Partner Contact modal in LifeCycle tab
		When AddEdit Partner Contacts button is visible and clickable on LifeCycle Tab
		Then User is able to Delete the Partner contacts
		Then User enters a duplicate mail id and a validation error is displayed
