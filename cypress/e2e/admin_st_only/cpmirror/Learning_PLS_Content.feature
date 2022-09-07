@pa_st_only @learning @PLSContent @GIMLET @1.4release
Feature: Learning - Partner Lifecycle services

	Scenario: Partner Life cycle services should be displayed in TOP PICKS
		When User is on 'LEARNING' Facet
		Then click on Top picks view more
		Then Top picks should contain Partner Lifecycle services cards
		And Close the details panel

	Scenario: Check whether we can bookmark Partner Life cycle services cards
		When User clicks on 'CX Insights' boxed tab
		Then Search for 'Partner Lifecycle Services' cards
		Then Check whether the card is added to bookmarked cards
