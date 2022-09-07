@pa_st_only @learning @MARTINI
Feature: Learning - Success Tips

	Scenario: Success Tips data label in Learning Facet
		When User is on 'LEARNING' Facet
		Then Check if the Learning Facet has 'Success Tips'

	Scenario: Check for Success Tip Cards
		When 'Technology & Documentation' tab should exist
		And User clicks on 'Technology & Documentation' boxed tab
		And Click on Meraki Network filter under Success Trcks
		Then Check if Success Tips crds are displyed

	Scenario: Check 360 view for Success Tips card
		When User click on Card
		Then 360 View should be opened

	Scenario: Validate 360 view
		When 360 View should be opened
		Then Validate Titles
		And Close 360View

	Scenario: Check if URL section is present on Web Cards
		When User is on 'LEARNING' Facet
		And click on Web filter
		And Click on URL card
		Then Validate 360
		And  Close 360View
