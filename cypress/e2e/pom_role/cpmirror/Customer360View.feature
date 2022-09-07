@pom @customers @customer360 @GIMLET
Feature: Home page customer 360 view-POM internal User

	Scenario: Checking that 360 view is not displayed for customer
		When User is on "CUSTOMERS" Facet
		And POM internal User clicks on customer
		Then 360 view should not open

	Scenario: Checking 360 view is not displayed after search operation
		When User is on "CUSTOMERS" Facet
		And POM internal User clicks on My Teams
		And POM internal User performs search operation
		Then 360 view should not open
