@rm @customers @customer360 @GIMLET
Feature: Home page customer 360 view-Renewal Manager Role

	Scenario: Checking 360 view is not displayed after search operation
		When User is on "CUSTOMERS" Facet
		And User clicks on My Teams
		And User performs search operation
		Then 360 view should not open
