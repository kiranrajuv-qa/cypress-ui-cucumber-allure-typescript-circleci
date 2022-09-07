@pa_hcaas_st @customer @1.6release @HcaasContent @GIMLET

Feature: Auttomation of View Contrcats


	Scenario: Checking whether user is able to see the customer table
		When User is on 'CUSTOMERS' Facet
		Then Customer Table should be visible

	Scenario: Checking whether the user can see the 360 view
		Then User clicks on 'Granted' customer
		And 360 view should be opened


	Scenario: Checking whether service contracts is visible
		Then Services Contracts should be visible

	Scenario: Checking whether Cisco+ contracts tab is visible or not
		Then Services Contracts should be visible

	Scenario: checking Whether Hybrid Cloud is present in Offer Domain
		And 'Offer Domain' column should be visible in Customer Table

	Scenario: Checking whether the view contracts link is visible
		Then User clicks on 'Hybrid' customer
		And Check for the 'View Contracts' status
		Then click on 'Customer CX Cloud' tab


	Scenario: Checking whether the user is navigated to contracts page
		Then User clicks on 'Hybrid' customer
		And Check for the 'View Contracts' status
		Then click on 'View Contracts'
		Then 'Cisco+ Contracts' tab should be selected
		Then click on 'Customer CX Cloud' tab

	Scenario: Checking whether the user is navigated to Services Contracts page
		Then User clicks on 'BERKSHIRE HEALTH SYSTEMS INC' customer
		And Check for the 'View Contracts' status
		Then click on 'View Contracts'
		Then 'Cisco+ Contracts' tab should be selected
