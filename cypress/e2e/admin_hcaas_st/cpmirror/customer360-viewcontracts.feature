@pa_hcaas_st @1.6release @customer360 @GIMLET
Feature: HcaaS + Success Track-view contracts,Offer Domain

	Scenario:Checking whether Hybrid Cloud is present in Offer Domain
		When User is on 'CUSTOMERS' Facet
		Then Customer Table should be visible
		Then 'Offer Domain' column should be visible in Customer Table
		And Offer Domain Contains 'Hybrid Cloud'

    Scenario: Checking whether 360 view is displayed for customer
        When User is on 'CUSTOMERS' Facet
        And User clicks on 'Pending' customer
        Then 360 view should be opened
        Then 'PORTFOLIO' tab should be visible
        And 'OFFERS' tab should be visible
        And 'NOTES' tab should be visible

	Scenario:Checking whether view contracts is redirecting to Service contracts
		When User is on 'CUSTOMERS' Facet
        And User clicks on 'Pending' customer
        Then 360 view should be opened
		Then Campus Network should be visible in no-access-ST and click on View Contracts
		Then it should redirect to 'Services Contracts'

	Scenario:Checking whether view contracts is redirecting to Cisco+ contracts
		When User is on 'CUSTOMERS' Facet
        And User clicks on 'Pending' customer
        Then 360 view should be opened
		Then Hybrid Cloud should be visible in no-access-ST and click on View Contracts
		Then it should redirect to 'Cisco+ contracts'





