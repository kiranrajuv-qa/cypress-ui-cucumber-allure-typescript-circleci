@pa_hcaas_only @learning @1.6release @HcaasContent @GIMLET

Feature: HcaasContent - Learning

	Scenario: Checking whether Cisco + is present on learning top tile
		When User is on 'LEARNING' Facet
		Then cisco+ should be present on the learning top tile

	Scenario: Checking whether Cisco + filter is present in Technology & Documentation
		When User is on 'LEARNING' Facet
		Then User clicks on 'Technology & Documentation' tab
		Then Check for cisco+ title in Technology and Documentation
		Then Check the 'Hybrid Cloud' box

	Scenario: Checking whether HcaaS cards are displayed or not
		When 'Hybrid Cloud' filter is applied
		Then check whether the cisco+ cards are displayed or not

	Scenario:Search for HcaasContent in Learning
		When User is on 'LEARNING' Facet
		Then User clicks on 'Technology & Documentation' tab
		Then user performs search operation using 'Hybrid Cloud'
		And 'Hybrid Cloud' filter is applied
		Then check whether the cisco+ cards are displayed or not
