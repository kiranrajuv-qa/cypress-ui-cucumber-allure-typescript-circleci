@pa_st_only @partnerOffers @1.4release @ignore
Feature: Partner Offers - ACC CXPreview Before Publish

	Scenario: ACC CXPreview Before Publish
		Given User is on 'PARTNER OFFERS' Facet
		And Selecting the Accelerator from new offer dropdown
		And Entering the Title Description and Time
		And Navigate to the map your Offer to cx cloud option
		And Selecting the CX cloud options

	Scenario: Publishing CXCloud Button the Ask the Experts
		When Publishing CXCloud Button the Ask the Experts

	Scenario: Validate the Ready to publish your offer? Window is present after clicking Published to CX Cloud
		When Validate the Ready to publish your offer? Window is present after clicking Published to CX Cloud

	Scenario: Check Back to Edit button is present and it is clickable
		When Check Back to Edit button is present and it is clickable

	Scenario: Validate the Review the provided information below Present in  Ready to publish window
		When Validate the Review the provided information below Present in  Ready to publish window

	Scenario: Validate the Text content Once your offer is published to CX Cloud no further changes can be made in  Ready to publish window
		When Validate the Text content Once your offer is published to CX Cloud no further changes can be made in  Ready to publish window

	Scenario: Validate the OFFER INFORMATION and Text Label is present in  Ready to publish window
		When Validate the OFFER INFORMATION and Text Label is present in  Ready to publish window

	Scenario: Validate the Mapping details is present in Ready to publish window
		When Validate the Mapping details is present in Ready to publish window

	Scenario: Validate the SELECTED CUSTOMERS details is present in Ready to publish window
		When Validate the SELECTED CUSTOMERS details is present in Ready to publish window

	Scenario: Verify the Visual Card and Language and Time Required is present
		When Verify the Visual Card and Language and Time Required is present

	Scenario: Validate the Description Label and Text in Ready to publish window
		When Validate the Description Label and Text in Ready to publish window

	Scenario: Check the Go Back button and Conform Button is present and it is clickable
		When Check the Go Back button and Conform Button is present and it is clickable

	Scenario: CXPublish Confirm Button
		Then CXPublish Confirm Button

