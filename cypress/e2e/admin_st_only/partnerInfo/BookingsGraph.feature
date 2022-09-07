@pa_st_only @partnerInfo @sanity @1.4release
Feature: Top Bookings graph section

	Scenario: Verify Bookings section header
		Given User Navigates to Home Page
		Then Verify Bookings section header

	Scenario: Verify the bookings sub header
		Then Verify Booking sub header

	Scenario: Verify the bookings data summary
		Then Verify bookings data summary for Total Average Max

	Scenario: Verify the footer text displayed
		Then Verify footer text in bookings graph

	Scenario: Verify the Quarters
		Then Verify Quarter in bookings graph
