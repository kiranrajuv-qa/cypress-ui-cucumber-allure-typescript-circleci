@pa_hcaas_only @learning @1.6release @HcaasContent @GIMLET
Feature: Hcaas UI Access

	Scenario: Checking whether service contracts is visible
		When User is on 'CUSTOMERS' Facet
		Then Services Contracts should be visible

	Scenario: Checking whether Cisco+ contracts tab is visible or not
		When User is on 'CUSTOMERS' Facet
		Then Cisco+ Contracts should be visible

