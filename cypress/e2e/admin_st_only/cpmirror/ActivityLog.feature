@pa_st_only @MARTINI @sanity @activitylog
Feature: Activity Log

	Scenario: Check if Activity Log is avalible in Admin Settings
		Given User clicks on the Gear Icon
		Then 'Activity Log' should be available

	Scenario: Validate Activity Log Page
		When Click on Activity Log
		Then Activity Log Page is active

	Scenario: By Default Last 30 Days logs should be displayed
		When Date Picker is avalible
		And Click on Date Picker
		And Last 30 Days should be active
		Then Validate logs

	Scenario: Validate Today Logs
		When Date Picker is avalible
		And Click on Date Picker
		And Select 'Today' on Date Picker

	Scenario: Validate Yesterday Logs
		When Date Picker is avalible
		And Click on Date Picker
		And Select 'Yesterday' on Date Picker

	Scenario: Validate Last 7 Days Logs
		When Date Picker is avalible
		And Click on Date Picker
		And Select 'Last 7 Days' on Date Picker

	Scenario: Validate Last 6 Months Logs
		When Date Picker is avalible
		And Click on Date Picker
		And Select 'Last 6 months' on Date Picker
		Then Validate logs

	Scenario: Validate Past Year Logs
		When Date Picker is avalible
		And Click on Date Picker
		And Select 'Past Year' on Date Picker
		Then Validate logs

	Scenario: Validate Search Functionality
		When Enter search string 'access'
		Then Logs should contain respective search word
		And Clear searchbox

	Scenario: Error message should be shown if the search string is less than 3chars
		When Activity Log Page is active
		And Enter search string 'se'
		Then Error alert should be displayed
		And Clear searchbox

	Scenario: On no matched search string No Results Found should be diplayed
		When Activity Log Page is active
		And Enter search string 'search'
		Then No Results found should be displayed
		And Clear searchbox

	Scenario: Validate Logs w.r.t Event Type
		When Activity Log Page is active
		And Select event type from Dropdown
		Then All displayed Logs should be of selected event type

	Scenario: On click of Export CSV, it should trigger a api call
		When Activity Log Page is active
		And Click on Export to CSV
		Then Check if the api is getting called
