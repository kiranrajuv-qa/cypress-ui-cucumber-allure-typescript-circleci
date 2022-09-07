@pa_hcaas_st @partnerInfo @1.6release
Feature: Cisco+ Contracts Summary Table Test

    Scenario: Verify the Total Contract Value field is shown in the summary section
	    When User is on 'CUSTOMERS' Facet
	    Then Verify the Total Contract Value field

	Scenario: Verify the Total Charges for Last Quarter field is shown in the summary section
	    Then Verify the Total Charges for Last Quarter field

	Scenario: Verify the Total Locations field is shown in the summary section
	    Then Verify the Total Locations field

	Scenario: Verify the Manage subscriptions link is shown in the summary section
	    Then Verify the Manage subscriptions link

	Scenario: Verify the Manage subscriptions link navigates to Subscription Page
	    Then Verify the Manage subscriptions link navigation