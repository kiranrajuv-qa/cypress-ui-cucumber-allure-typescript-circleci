@pa_hcaas_st @partnerInfo @1.6release
Feature: Cisco+ contracts Charged to Date Visual Filter

	Scenario: Verify the Charged to Date Visual Filter is shown in the Cisco+ Contract
		And User is on 'CUSTOMERS' Facet
		Then Verify the Charged to Date Visual Filter is shown in the Cisco+ Contract

	Scenario: Verify the Charged to Date VF <10K Subscription is shown
		Then Verify <10K Subscription label

	Scenario: Verify the Charged to Date VF 10K+ Subscription is shown
		Then Verify 10K+ Subscription label

	Scenario: Verify the Charged to Date VF 50K+ Subscription is shown
		Then Verify 50K+ Subscription label

	Scenario: Verify the Charged to Date VF 100K+ Subscription is shown
		Then Verify 100K+ Subscription label
