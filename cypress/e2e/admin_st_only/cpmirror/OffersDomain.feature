@pa_st_only @MARTINI @sanity @offersdomain @1.4release
Feature: Offers Domain - Customers

	Scenario: Availability of 'Offer Domain' column in the Customers table
		Given User is on 'CUSTOMERS' Facet
		Then Customer table should have 'Offer Domain' column

	Scenario: Success Tracks should be displayed in Offers Domain column
		When Customer table should have 'Offer Domain' column
		Then Should contain Success Track names

	Scenario: Success Tracks should be displayed only for granted customers
		When Customer table should have 'Offer Domain' column
		Then Granted coustomer should contain Success Track

	Scenario: Offer Domain visual filter should be displayed on Customers page
		Given User is on 'CUSTOMERS' Facet
		Then Visual Filters must be displayed

	Scenario: Tool Tip should be displayed onhover of Success Tracks
		Given User is on 'CUSTOMERS' Facet
		And Hover on Success Track
		Then Tooltip should be available

	Scenario: Clicking on any Success Track in OFFER DOMAIN filter should render the specific records in the table
		When Visual Filters must be displayed
		And Click on 'Campus Network' in Visual filter
		Then All records should contain 'Campus Network'

	Scenario: Validate if the count in the Visual Filter matches the actual count
		Given User is on 'CUSTOMERS' Facet
		And Visual Filters must be displayed
		And Hover on Success Track
		And Tooltip should be available
		Then Validate count wrt customers table

	Scenario: Validate if the OFFERS tab in displyed in Customer360
		When User is on 'CUSTOMERS' Facet
		And User clicks on 'Granted' customer
		Then 360 view should be opened
		And 'OFFERS' tab should be visible

	Scenario: On click of OFFERS tab offers page should be displyed
		When 'OFFERS' tab should be visible
		And Click on 'OFFERS' tab
		Then 'ACCELERATORS' & 'ASK THE EXPERTS' sections should be displayed
