@pa_st_only @partnerOffers @sanity @ignore
Feature: Partner Offers - Accelerator

	Scenario: Create New Accelerator
		When User is on 'PARTNER OFFERS' Facet
		And Selecting the Accelerator from new offer dropdown
		And Entering the Title Description and Time
		And Navigate to the map your Offer to cx cloud option
		And Selecting the CX cloud options
		And Publishing the Accelerator
		And Confirm the publish
		Then Validate the ACC offer status
		And Close the 360 degree view
		And Search for the created ACC offer
		Then Validate the Accelerator is displayed

	Scenario: Unpublish the Accelerator
		Given Click on the search Accelerator
		Then Unpublish the Accelerator

	Scenario: Delete the Accelerator
		Then Delete the Accelerator
		And Verify the Accelerator deleted successfully
