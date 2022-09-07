Feature: PX Login Functionlaity

	Scenario: Login to PX Portal
		Given User navigate to the PX URL
		When User enters email and password in the login page
		Then Verify the user navigate to home page
