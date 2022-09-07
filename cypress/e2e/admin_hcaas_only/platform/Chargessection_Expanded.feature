@pa_hcaas_only @platform @1.6release @sanity

Feature: Validate the Charges section - Expanded form 

  Scenario: Validate whether the Capacity types are displayed in the form of buttons 
  Given User Clicks on the Customer name within Customers facet
  When User clicks on the Consumption tab
  Then In Expanded charges section, Validate whether the Capacity types are displayed in the form of buttons 
  
  Scenario: Validate whether the Filter Label is displayed or not
  When In Expanded charges section, Validate whether the Filter Label is displayed or not

 Scenario: Validate whether the Charged Units details are displayed beneath the Chart 
  When In Expanded charges section, Validate whether the Charged Units details are displayed beneath the Chart

Scenario: Validate that when the user clicks on the Up Arrow, only Charged units breakdown section is displayed 
  When In Expanded charges section, Validate that when the user clicks on the Up Arrow, only Charged units breakdown section is displayed  

Scenario: Validate that when the user clicks on the down Arrow, both charged Units breakdown section and charts are displayed 
  When In Expanded charges section, Validate that when the user clicks on the down Arrow, both charged Units breakdown section and charts are displayed 

Scenario: Validate that when the user clicks on the Menu Component, two options are displayed or not
  When In Expanded charges section with Charged Units selected, Validate that when the user clicks on the Menu Component, two options are displayed or not

Scenario: Validate that when the user clicks on the Hide or Show Columns button, Edit Columns pop up is displayed or not 
  When In Expanded Charges section with Charged Units selected, Validate that when the user clicks on the Hide or Show Columns button, Edit Columns pop up is shown

Scenario: Validate the Column Header names displayed in the Edit Columns pop up when Charged Units option is selected
  When In Expanded Charges section with Charged Units selected, Validate the Column Header names displayed in the Edit Columns pop up

Scenario: Validate the User can edit the column details in the Edit Columns popup - Charged units 
  When In Expanded Charges section with Charged Units selected, Validate the User can edit the column details in the Edit Columns popup

Scenario: Validate that when the user clicks on the Restore Defaults button, only default columns are displayed in the table - Charged units 
  When In Expanded Charges section with Charged Units selected, Validate that when the user clicks on the Restore Defaults button, only default columns are displayed in the table 

Scenario: Validate the Filter options displayed within the GroupBy filter - Charged units 
  When In Expanded Charges section with Charged Units selected, Validate the Filter options displayed within the GroupBy filter

Scenario: Validate whether Location and Invoice day details are displayed when Subscription filter is applied - Charged Units 
  When In Expanded Charges section with Charged Units selected, Validate whether Location and Invoice day details are displayed when Subscription filter is applied 

Scenario: Validate whether Show Capacity type breakdown option is displayed or not - Charged Amounts 
  When In Expanded Charges section with Charged Amounts selected, Validate whether Show Capacity type breakdown option is displayed or not 

Scenario: Validate that when the user clicks on the Show Capacity type breakdown checkbox, Capacity type breakdown details are displayed in the Chart 
  When In Expanded Charges section with Charged Amounts selected, Validate that when the user clicks on the Show Capacity type breakdown checkbox, Capacity type brakdown details are displayed in the Chart

 Scenario: Validate whether the Charged Amount details are displayed beneath the Chart 
  When In Expanded charges section, Validate whether the Charged Amount details are displayed beneath the Chart

Scenario: Validate that when the user clicks on the Up Arrow, only Charges breakdown section is displayed 
  When In Expanded charges section, Validate that when the user clicks on the Up Arrow, only Charged Amounts breakdown section is displayed  

Scenario: Validate that when the user clicks on the down Arrow, both charges breakdown section and charged Amounts chart are displayed 
  When In Expanded charges section, Validate that when the user clicks on the down Arrow, both charges breakdown section and charged Amounts chart are displayed 

Scenario: Validate that when the user clicks on the Menu Component, two options are displayed or not - Charged Amounts
  When In Expanded charges section with Charged Amounts selected, Validate that when the user clicks on the Menu Component, two options are displayed or not

Scenario: Validate that when the user clicks on the Hide or Show Columns button, Edit Columns pop up is displayed or not 
  When In Expanded Charges section with Charged Amounts selected, Validate that when the user clicks on the Hide or Show Columns button, Edit Columns pop up is shown

Scenario: Validate the Column Header names displayed in the Edit Columns pop up when Charged Amounts option is selected
  When In Expanded Charges section with Charged Amounts selected, Validate the Column Header names displayed in the Edit Columns pop up

Scenario: Validate the User can edit the column details in the Edit Columns popup - Charged Amounts 
  When In Expanded Charges section with Charged Amounts selected, Validate the User can edit the column details in the Edit Columns popup

Scenario: Validate that when the user clicks on the Restore Defaults button, only default columns are displayed in the table - Charged Amounts 
  When In Expanded Charges section with Charged Amounts selected, Validate that when the user clicks on the Restore Defaults button, only default columns are displayed in the table

Scenario: Validate the Filter options displayed within the GroupBy filter - Charged Amounts 
  When In Expanded Charges section with Charged Amounts selected, Validate the Filter options displayed within the GroupBy filter

Scenario: Validate whether Location,Invoice day and Total Charges details are displayed when Subscription filter is applied - Charged Units 
  When In Expanded Charges section with Charged Amounts selected, Validate whether Location,Invoice day and Charged Amount details are displayed when Subscription filter is applied 