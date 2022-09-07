@pa_hcaas_st @partnerInfo @1.6release
Feature: Cisco+ contracts CSV download

	Scenario: Verify csv download 3 dots
		When User is on 'CUSTOMERS' Facet
		Then Verify csv download 3 dots

	Scenario: Verify csv download option appearing in menu
		Then Verify csv download menu option

	Scenario: Verify csv download with filtered or search
		Then Verify csv download when search is applied

		Scenario: Verify csv download is disabled for no data
		Then Verify csv download is disabled when no data is displayed



