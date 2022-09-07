@pa_st_only @partnerInfo @sanity @1.4release
Feature: Top 10 customers Bookings

Background: User must be on TODAY Facet
		Given User is on 'TODAY' Facet

	Scenario: Verify the header for top 10 customers
				Then Verify header for top 10 customers

	Scenario: Verify the Success track dropdown exist
		Then Verify All success track dropdown

		Scenario: Verify the column names
		Then Verify the column names for Customer and Amount

		Scenario: Verify the USD and $ in amount
		Then Verify the USD and $ in Bookings amount



