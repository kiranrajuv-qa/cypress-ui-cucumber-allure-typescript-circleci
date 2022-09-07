@pa_hcaas_st @partnerInfo @1.6release
Feature: Cisco+ contracts vf Nearest Expiration

	Scenario: Verify title of vf Nearest Expiration
		When User is on 'CUSTOMERS' Facet
		Then Verify Nearest expiration header

	Scenario: Verify 0-6 months label is displayed
		Then Verify 0-6 months label

	Scenario: Verify 7-12 months label is displayed
		Then Verify 7-12 months label

    Scenario: Verify 13-24 months label is displayed
		Then Verify 13-24 months label

	Scenario: Verify bar chart is displayed for 0-6 months
		Then Verify bar chart for 0-6 months

	Scenario: Verify bar chart is displayed for 7-12 months
		Then Verify bar chart for 7-12 months

	Scenario: Verify bar chart is displayed for 13-24 months
		Then Verify bar chart for 13-24 months
