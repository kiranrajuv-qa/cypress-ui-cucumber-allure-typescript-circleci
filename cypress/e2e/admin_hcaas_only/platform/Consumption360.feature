@pa_hcaas_only @platform @1.6release @sanity

Feature: Validate the Consumption 360

  Scenario: Validate whether Consumption 360 is displayed when the user clicks on any of the deployment details displayed in the Usage breakdown section
  Given User Clicks on the Customer name within Customers facet
  When User clicks on the Consumption tab
  Then In Expanded consumption section, Validate whether Consumption 360 is displayed when the user clicks on any of the deployment details displayed in the Usage breakdown section
  
  Scenario: Validate whether Capacity type and Service category type are displayed in the Consumption 360
  When In Consumption 360, Validate whether Capacity type and Service category type are displayed in the Consumption 360

  Scenario: Validate whether part of Subscription detail gets displayed in the Consumption 360
  When In Consumption 360, Validate whether part of Subscription detail gets displayed in the Consumption 360

  Scenario: Validate whether the Header - About gets displayed in the Consumption 360
  When In Consumption 360, Validate whether the Header About gets displayed in the Consumption 360

  Scenario: Validate the details displayed within the About Section 
  When In Consumption 360, Validate the details displayed within the About Section

  Scenario: Validate the details displayed within the Consumption Section 
  When In Consumption 360, Validate the details displayed within the Consumption Section

  Scenario: Validate the chart displayed within the Consumption Section 
  When In Consumption 360, Validate the chart displayed within the Consumption Section

  Scenario: Validate the legends in the chart displayed within the Consumption Section 
  When In Consumption 360, Validate the legends in the chart displayed within the Consumption Section

  Scenario: Validate whether Associated Assets section is displayed within the Comsumption 360
  When In Consumption 360, Validate whether Associated Assets section is displayed or not 