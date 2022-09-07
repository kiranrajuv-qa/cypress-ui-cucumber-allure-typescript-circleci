@pa_hcaas_st @partnerInfo @1.6release
Feature: Cisco+ contracts Total Contract Value Visual Filter

	Scenario: Verify the Total Contract Value Visual Filter is shown in the Cisco+ Contract
		When User is on 'CUSTOMERS' Facet
		Then Verify the Total Contract Value Visual Filter is shown in the Cisco+ Contract

	Scenario: Verify the Total Contract Value VF <10K Subscription is shown
		Then Verify <10K Subscription label

	Scenario: Verify the Total Contract Value VF 10K+ Subscription is shown
		Then Verify 10K+ Subscription label

	Scenario: Verify the Total Contract Value VF 50K+ Subscription is shown
		Then Verify 50K+ Subscription label

	Scenario: Verify the Total Contract Value VF 100K+ Subscription is shown
		Then Verify 100K+ Subscription label


