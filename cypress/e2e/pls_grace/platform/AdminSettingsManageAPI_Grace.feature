@pls_grace @platform @sanity @1.4release

Feature: Admin Settings Manage API section

	Scenario: Validate the contents in the Manage API section
		Given User clicks on the Gear Icon
		When User navigates to the Admin settings Manage API section
		Then Validate the contents in the Manage API section

	Scenario: Validate the API documentation link in Manage API section
		When User clicks on the API documentation link it opens up in a new tab

	Scenario: Validate the Grace Period Banner is displayed
		When User is on API section Grace Period Banner is displayed for a Grace Partner

	Scenario: Validate whether the Client ID can be deactivated
		When User clicks on the Deactivate link then the ClientID gets deactivated

	Scenario: Validate whether the Client ID can be Reactivated
		When User clicks on the Reactivate link then the ClientID gets activated

	Scenario: Validate whether the Client ID can be deleted
		When User clicks on the confirm button in Delete Access Key popup then the clientID gets Deleted


	Scenario: Validate whether a client ID can be created
		When User clicks on the Create Access Key button then a ClientID gets created







