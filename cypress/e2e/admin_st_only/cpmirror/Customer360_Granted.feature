@pa_st_only @customers @customer360 @GIMLET
Feature: Customer 360 view - PORTFOLIO, OFFERS, NOTES

	Scenario: Checking whether 360 view is displayed for customer - granted
		When User is on 'CUSTOMERS' Facet
		And User clicks on 'Granted' customer
		Then 360 view should be opened
		Then 'PORTFOLIO' tab should be visible
		And 'OFFERS' tab should be visible
		And 'NOTES' tab should be visible
		When User clicks on 'Campus Network'
		Then 'LIFECYCLE','ASSETS & COVERAGE','ADVISORIES' should be visible

	Scenario: Checking Use Cases
		When User clicks on 'LIFECYCLE' tab
		Then 'Use Cases (All)' dropdown should be visible
		And click on the dropdown
		And Check whether all the options are available

	Scenario: Cross checking the pitstops
		Then check pitstop
