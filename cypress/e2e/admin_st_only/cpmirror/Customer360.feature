@pa_st_only @customers @customer360 @GIMLET @1.4release
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

	Scenario: Checking whether 360 view is displayed for customer - pending
		When User is on 'CUSTOMERS' Facet
		And User clicks on 'Pending' customer
		Then 360 view should be opened
		Then 'PORTFOLIO' tab should be visible
		And 'OFFERS' tab should be visible
		And 'NOTES' tab should be visible
		Then 'Campus Network' should not be visible

	Scenario:Checking whether 360 view is displayed for customer - required
		When User is on 'CUSTOMERS' Facet
		And User clicks on 'Required' customer
		Then 360 view should be opened
		Then 'PORTFOLIO' tab should be visible
		And 'OFFERS' tab should be visible
		And 'NOTES' tab should be visible
		Then 'Campus Network' should not be visible


	Scenario: Checking whether 360 view is displayed for customer -denied
		When User is on 'CUSTOMERS' Facet
		And User clicks on 'Denied' customer
		Then 360 view should be opened
		Then 'PORTFOLIO' tab should be visible
		And 'OFFERS' tab should be visible
		And 'NOTES' tab should be visible
		Then 'Campus Network' should be visible
