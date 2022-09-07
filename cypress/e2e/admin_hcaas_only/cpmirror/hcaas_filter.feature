@pa_hcaas_only @learning @1.6release @HcaasContent @GIMLET

Feature: HcaasContent - Learning - Hcaas Filter

	Scenario: Checking whether Cisco + filter is present in Technology & Documentation
		When User is on 'LEARNING' Facet
		Then click on 'Technology & Documentation' tab
		Then Check for cisco+ title in Technology and Documentation
		Then Check the 'Hybrid Cloud' box

	Scenario: Checking whether HcaaS filter group can be collapsed/expanded
		When User is on 'LEARNING' Facet
		Then click on 'Technology & Documentation' tab
		Given click to 'collapse' the cisco group
		And the 'Hybrid Cloud' should not be visibe
		Then click to 'expand' the cisco group
		And the 'Hybrid Cloud' should be visibe
