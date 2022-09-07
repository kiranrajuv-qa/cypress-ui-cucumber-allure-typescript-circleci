@pa_st_only @customers @customer360 @contacts @GIMLET @ignore
Feature: Customer 360 View -> CONTACTS Tab -> View/Search Contacts

	Background: User must be on CUSTOMERS Facet
		Given User is on 'CUSTOMERS' Facet

	Scenario: Validate MY TEAM tab defaults
		When User Opens Customer 360 View
		And User clicks on 'CONTACTS' tab
		Then Verify CONTACTS tab defaults

	Scenario: Verify that the system displays No Results Found message when there are no contacts
		When User Opens Customer 360 View
		And User clicks on 'CONTACTS' tab
		Then Verify zero contacts message

	Scenario: Verify that the system displays both Favorite and Non-Favirote sections
		When User Opens 360 View of Customer 'GRAPHIC PACKAGING HOLDING COMPANY'
		And User clicks on 'CONTACTS' tab
		Then Verify Favorite and Non-Favirote sections

	Scenario: Verify Favorite contacts
		When User Opens 360 View of Customer 'GRAPHIC PACKAGING HOLDING COMPANY'
		And User clicks on 'CONTACTS' tab
		Then Verify Favorite contact details

	Scenario: Verify Non-Favorite contacts
		When User Opens 360 View of Customer 'GRAPHIC PACKAGING HOLDING COMPANY'
		And User clicks on 'CONTACTS' tab
		Then Verify Non-Favorite contact details
