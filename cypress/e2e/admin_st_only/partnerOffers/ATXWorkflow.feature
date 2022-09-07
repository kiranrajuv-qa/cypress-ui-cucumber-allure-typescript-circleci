@pa_st_only @partnerOffers @sanity @ignore
Feature: Partner Offers - Ask The Experts

	Scenario: Create the Ask The Experts
		When User is on 'PARTNER OFFERS' Facet
		And Selecting the Ask The Experts from new offer dropdown
		And Entering the Title Description and Duration
		And Navigate to the map your Offer to cx cloud option
		And Selecting the CX cloud options
		And Selecting the customers
		When Navigate to the Schedule Sessions
		And Schedule the session
		#    And Validate the message for session start date
		And Publishing the Ask the Experts
		And Confirm the publish
		Then Validate the ATX offer status
		And Close the 360 degree view
		And Search for the created ATX offer
		Then Validate Ask The Experts is displayed

	Scenario: Unpublish the Ask The Experts
		Given Click on the search Ask the Experts
		Then Unpublish the Ask the Experts

	Scenario: Delete the Ask The Experts
		Then Delete the Ask the Experts
		And Verify the Ask the Experts deleted successfully
