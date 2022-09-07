@pa_st_only @MARTINI @sanity @learning
Feature: Preferences - Learning

	Scenario: Verify if the Preferences tab is being displayed
		Given User is on 'LEARNING' Facet
		Then 'Preferences' tab should exist

	Scenario: Verify if the Preferences Link is working
		When 'Preferences' tab should exist
		And  Click on Preference tab
		Then Model with 'Set your Learning Preferences' should be displayed

	Scenario: Verify if the selected preferences are getting saved or not
		Given Model with 'Set your Learning Preferences' should be displayed
		And Select 'Customer Success Manager' , 'Analytics' and 'English' preferences
		And Click Save Button
		Then Model content should have 'Your learning preferences have been saved.'
		And Click on Close Icon

	Scenario: Endtiime dropdown should be disabled if start time is empty
		Given Click on Preference tab
		When Starttime is 'Select'
		Then Endtiime dropdown should be disabled

	Scenario: Error alert should be displayed if the end time is not selected
		When Starttime is '1:00 AM'
		And Click Save Button
		Then Error message should be displayed with 'Please select end time also.'
		And Click on Cancel
