@pa_st_only @partnerInfo @sanity
Feature: Partner Information - Personal Profile
	Scenario: Verify Navigation to Manage Profile
		When Navigate to the User Profile
		And  Click on User Profile Icon.
		Then Verify to Manage Profile Tab is Shown

	Scenario: Verify Personal Profile tab is show and onclick opens the Personal details screen
		When Click on the Manage Profile Tab
		Then Verify Personal Profile tab is show
		And  Click on the Personal Profile Tab
		Then Verify the Personal Information screen

	Scenario: Verify First Name Label is Shown in the Persanol Information Page
		Then Verify First Name Label is Shown in the Persanol Information Page

	Scenario: Verify Last Name Label is Shown in the Persanol Information Page
		Then Verify Last Name Label is Shown in the Persanol Information Page

	Scenario: Verify Job Title Label is Shown in the Persanol Information Page
		Then Verify Job Title Label is Shown in the Persanol Information Page

	Scenario: Verify Email Label is Shown in the Persanol Information Page
		Then Verify Email Label is Shown in the Persanol Information Page

	Scenario: Verify Phone Label is Shown in the Persanol Information Page
		Then Verify Phone  Label is Shown in the Persanol Information Page

	Scenario: Verify Location Label is Shown in the Persanol Information Page
		Then Verify Location Label is Shown in the Persanol Information Page

	Scenario: Verify Static Text is Shown in the Persanol Information Page
		Then Verify Static Text is Shown in the Persanol Information Page

	Scenario: Verify Manage Profile Button is Shown in the Persanol Information Page
		Then Verify Manage Profile Button is Shown in the Persanol Information Page
