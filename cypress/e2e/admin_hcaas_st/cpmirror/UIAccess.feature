@pa_hcaas_st @learning @1.6release @HcaasContent @GIMLET
Feature: Hcaas & Success Track - Access

	Scenario: Checking whether service contracts is visible
		When User is on 'CUSTOMERS' Facet
		Then Services Contracts should be visible

	Scenario: Checking whether Cisco+ contracts tab is visible or not
		Then Cisco+ Contracts should be visible

