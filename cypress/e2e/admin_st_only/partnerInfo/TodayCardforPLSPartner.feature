@pa_st_only @partnerInfo @sanity @1.4release

Feature: Partner Information - Today PLS Card for PLS Partner

	Scenario: Verify PLS Status Card in Todays View for a PLS Partner
		When User is on 'TODAY' Facet
		Then Approved Status is Shown

	Scenario: Verify Static text in PLS Status Card  for a PLS Partner
		Then Access CX Cloud data through APIs Publish your own Ask the Experts and Accelerators is Shown

	Scenario: Verify  the Review your benefits link is shown and onclick opens the Review your benefits link in the new tab for Non PLS Partner
		When Verify the Review your benefits Link
		And  Click on Review your benefits Link
		Then Verify Review your benefits link opens in the new tab for PLS Partner
