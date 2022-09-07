@non_pls @partnerInfo @sanity @1.4release
Feature: Partner Information - Company Qualification Non PLS Partner

	Scenario: Programs Section for a Non PLS Partner
		When Navigate to the User Profile
		And  Click on Manage Profile
		And  Click on Company Qualification tab
		Then Verify the Programs Label is not shown for a Non PLS Partner
	Scenario: Partner Lifecycle Services for a Non PLS Partner.
		Then Verify the Partner Lifecycle Services is not shown for a Non PLS Partner
