@pa_hcaas_only @platform @1.6release @sanity

Feature: Validate the Charges 360

  Scenario: Validate whether Charges 360 is displayed when the user clicks on any of the deployment details displayed in Charged units breakdown section
  Given User Clicks on the Customer name within Customers facet
  When User clicks on the Consumption tab
  Then In Expanded charges section, Validate whether Charges 360 is displayed when the user clicks on any of the deployment details displayed in Charged units breakdown section
  
  Scenario: Validate whether Capacity type and Service category type are displayed in the Charges 360
  When In Charges 360, Validate whether Capacity type and Service category type are displayed in the Charges 360
  
  Scenario: Validate whether part of Subscription detail gets displayed in the Charges 360
  When In Charges 360, Validate whether part of Subscription detail gets displayed in the Charges 360

  Scenario: Validate whether the Header - About gets displayed in the Charges 360
  When In Charges 360, Validate whether the Header - About gets displayed in the Charges 360

  Scenario: Validate the details displayed within the About Section 
  When In Charges 360, Validate the details displayed within the About Section

  Scenario: Validate the details displayed within the Charges Breakdown Section 
  When In Charges 360, Validate the details displayed within the Charges Breakdown Section

  Scenario: Validate the bar chart displayed within the Charges Breakdown Section 
  When In Charges 360, Validate the bar chart displayed within the Charges Breakdown Section

  Scenario: Validate the legends in the chart displayed within the Charges Breakdown Section 
  When In Charges 360, Validate the legends in the chart displayed within the Charges Breakdown Section

 Scenario: Validate the View Full Consumption Details link displayed in the  Charges Breakdown section
  When In Charges 360, Validate the View Full Consumption Details link displayed in the Charges Breakdown section

Scenario: Validate the details displayed within the Recent Charges section
  When In Charges 360, Validate the details displayed within the Recent Charges section