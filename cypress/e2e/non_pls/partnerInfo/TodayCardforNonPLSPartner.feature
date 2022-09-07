@non_pls @partnerInfo @sanity @1.4release

Feature: Partner Information - Today PLS Card for Non PLS Partner

	Scenario: Verify PLS Status Card in Todays View for a Non PLS Partner
		When User is on 'TODAY' Facet
		Then Become a PLS Partner Status is Shown

	Scenario: Verify Static text in PLS Status Card  for a Non PLS Partner
		Then Access CX Cloud data through APIs Publish your own Ask the Experts and Accelerators is Shown

	Scenario: Verify  the Learn More link is shown and onclick opens the Learn More link in the new tab for Non PLS Partner
		When Verify the Learn More Link
		And  Click on Learn More Link
		Then Verify Learn More link opens in the new tab for Non PLS Partner
