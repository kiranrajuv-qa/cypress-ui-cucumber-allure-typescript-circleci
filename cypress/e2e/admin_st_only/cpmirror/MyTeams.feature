@pa_st_only @MARTINI @sanity @myteams
Feature: My Teams - Collabration

	Scenario: Verify if My Teams is being displayed
		When My Teams link available

	Scenario: On click My Team and Cisco Team should be displayed on dropdown
		When My Teams link available
		And Click on My Teams link
		Then Dropdown with 'MY TEAM' and 'CISCO TEAM' tabs should be available
		And 'MY TEAM' tab should be active

	Scenario: Verify weather the contactcs are getting marked as Fav and Unfav
		When 'MY TEAM' tab should be active
		Then Click on Fav icon
		And Contact should be displayed under Favorites section
		And Click on Unfav icon
		Then Contact should be marked as unfavorite

	Scenario: Verify search functionality
		When 'MY TEAM' tab should be active
		Then Validate search
		And Result contact should contain search string

	Scenario: Error message should be shown if the search string is less than 3chars
		When 'MY TEAM' tab should be active
		And Enter search string 'se'
		Then Error message should be displayed

	Scenario: On no matched search string No Results Found should be diplayed
		When 'MY TEAM' tab should be active
		And Enter search string 'search'
		Then No Results found should be displayed

	Scenario: Clear all butoon should display My Team contacts
		When No Results found should be displayed
		And Click on Clear All button
		Then Contacts are displayed
		And Click on My Teams link

	Scenario: On click of Cisco Team tab it should load Cisco Team contacts
		Given Click on My Teams link
		When Dropdown with 'MY TEAM' and 'CISCO TEAM' tabs should be available
		And Click on Cisco Team tab
		And 'CISCO TEAM' tab should be active

	Scenario: Verify weather the contactcs are getting marked as Fav and Unfav
		When 'CISCO TEAM' tab should be active
		Then Click on Fav icon
		And Contact should be displayed under Favorites section
		And Click on Unfav icon
		Then Contact should be marked as unfavorite

	Scenario: Verify search functionality
		When 'CISCO TEAM' tab should be active
		Then Validate search
		And Result contact should contain search string

	Scenario: Error message should be shown if the search string is less than 3chars
		When 'CISCO TEAM' tab should be active
		And Enter search string 'se'
		Then Error message should be displayed

	Scenario: On no matched search string No Results Found should be diplayed
		When 'CISCO TEAM' tab should be active
		And Enter search string 'search'
		Then No Results found should be displayed

	Scenario: Clear all butoon should display Cisco Team contacts
		When No Results found should be displayed
		And Click on Clear All button
		Then Cisco Contacts are displayed

	Scenario: Icons sholdd be displayed for Contacts
		When 'CISCO TEAM' tab should be active
		Then Contacts should have Phone, Email icons
