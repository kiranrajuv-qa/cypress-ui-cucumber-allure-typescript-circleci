@pls_grace @partnerOffers @sanity @1.4release
Feature: Partner Information - Company Qualification for PLS Partner

	Scenario: Programs Section for a PLS Partner
		When Navigate to the User Profile
		And  Click on Manage Profile
		And  Click on Company Qualification tab
		Then Verify the Programs Label is shown for a Specialized Partner

	Scenario: Partner Lifecycle Services for a PLS Partner.
		Then Verify the Partner Lifecycle Services is shown for a Specialized Partner
