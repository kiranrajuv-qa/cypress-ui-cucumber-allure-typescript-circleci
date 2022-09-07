@pa_st_only @customer @1.6release @GIMLET

Feature: UI Changes for Common Components

	Scenario: Checking whether the look and feel of dropdowns got changed in 360 view
		When User is on 'CUSTOMERS' Facet
		And User clicks on 'Granted' customer
		Then 360 view should be opened
		Then 'PORTFOLIO' tab should be visible
		And 'OFFERS' tab should be visible
		And 'NOTES' tab should be visible
		And 'CONTACTS' tab should be visible
		When User clicks on 'Data Center Compute'
		When User clicks on 'LIFECYCLE' tab
		Then 'Use Cases (All)' dropdown should be visible
		And click on the dropdown
		Then The look of the dropdown should be changed
		And Close the details panel

	Scenario: Checking whether the look and feel of dropdowns got changed in Cisco+ contracts
		When User is on 'CUSTOMERS' Facet
		Then User clicks on 'Cisco+ Contracts' tab
		And Click on more icon
		Then The look of the dropdown should be changed
