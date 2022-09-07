@pa_hcaas_only @customer @1.6release @HcaasUIChanges @GIMLET

Feature: Hcaas UI Changes

	Scenario: Checking whether Not Available is displayed for Hybrid Cloud
		When User is on 'CUSTOMERS' Facet
		Then User clicks on 'Hybrid Cloud' customer
		And 360 view should be opened
		Then Check if 'Not Available' status label displayed


	Scenario: Checking whether the message in PORTFOLIO tab for only HCAAS Customer 360 view

		Then User clicks on 'Hybrid Cloud' customer
		And 360 view should be opened
		Then check if the 'Access not available yet' message title is displayed
		And check for the message

	Scenario: Checking whether "No Active Contracts"  is displayed for the success tracks which are not sold

		Then User clicks on 'FEDEX CORPORATION' customer
		And 360 view should be opened
		Then Check for the 'No Active Contracts' status for not sold contracts


	Scenario: Checking whether the  the system displays "View Contracts" link for the HCAAS Contract

		Then User clicks on 'Hybrid Cloud' customer
		And 360 view should be opened
		Then check 'Hybrid Cloud' is displayed in the Contracts list
		And Check for the 'View Contracts' status


	Scenario:Verify that the system displays "View Contracts" link for the success tracks which are sold

		Then User clicks on 'BERKSHIRE HEALTH SYSTEMS INC' customer
		And 360 view should be opened
		Then check 'Campus Network' is displayed in the Contracts list
		And Check for the 'View Contracts' status

