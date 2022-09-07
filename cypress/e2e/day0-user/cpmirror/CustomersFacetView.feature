@day_zero @customers @GIMLET
Feature: Day 0 customer-No customer should be visible

	Scenario: Checking whether the count is zero
		When User is on 'CUSTOMERS' Facet
		Then Customer count should be zero
		Then for day 0 user it should display number of customers as 0

	Scenario: Checking whether expected message is displayed
		When User is on 'CUSTOMERS' Facet
		Then The expected message should be displayed
