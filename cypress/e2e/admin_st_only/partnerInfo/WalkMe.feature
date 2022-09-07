@pa_st_only @partnerInfo @sanity @1.4release
Feature: WalkMe - Activate Tour

	Scenario: WalkMe Workflow
		When Navigate on Portal support


	Scenario: Verify Activate Tour link under portal support
		Then Click on Activate Tour

	Scenario: Verify the title & button of WalkMe on Today tab
		Then Verify the title of WalkMe on Today tab
		And verify the button of walkme on Today tab

	Scenario: Verify the title and button of WalkMe on Customer tab
		Then Verify the title of WalkMe on Customer tab
		And verify the button of walkme on Customer tab

	Scenario: Verify the title and button of WalkMe on Partner Offers
		Then Verify the title of WalkMe on Partner Offers tab
		And verify the button of walkme on Partner Offers tab

	Scenario: Verify the title and button of WalkMe on Learning
		Then Verify the title of WalkMe on Learning tab
		And verify the button of walkme on Learning tab

	Scenario: Verify the title and button of WalkMe on Admin settings
		Then Verify the title of WalkMe on Admin settings tab
		And verify the button of walkme on Admin settings tab
