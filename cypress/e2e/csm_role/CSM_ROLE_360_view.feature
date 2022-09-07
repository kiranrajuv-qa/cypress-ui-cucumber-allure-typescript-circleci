@csm @customers @customer360 @GIMLET
Feature: Customer 360 view for Customer Success Manager role - PORTFOLIO, OFFERS, NOTES,CONTACTS


	Scenario: Checking whether 360 view is displayed for customer - pending
		When User is on 'CUSTOMERS' Facet
		And User clicks on 'Pending' customer
		Then 360 view should be opened
		Then 'PORTFOLIO' tab should be visible
		And 'OFFERS' tab should be visible
		And 'NOTES' tab should be visible
		And 'CONTACTS' tab should be visible
