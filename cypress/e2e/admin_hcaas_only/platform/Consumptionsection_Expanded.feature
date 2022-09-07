@pa_hcaas_only @platform @1.6release @sanity

Feature: Validate the Consumption section - Expanded form

	Scenario: Validate whether the Capacity types are displayed in the form of buttons
		Given User Clicks on the Customer name within Customers facet
		When User clicks on the Consumption tab
		Then In Expanded consumption section, Validate whether the Capacity types are displayed in the form of buttons

	Scenario: Validate whether the Filter Label is displayed or not
		When In Expanded consumption section, Validate whether the Filter Label is displayed or not

	Scenario: Validate whether Map view and Chart view is present within the Consumption section - Expanded form
		When In Expanded consumption section, Validate whether Map view and Chart view is present

	Scenario: Validate whether the Consumption details are displayed beneath the map or chart
		When In Expanded consumption section, Validate whether the Consumption details are displayed beneath the map or chart

	Scenario: Validate that when up Arrow is clicked only Usage breakdown section is displayed
		When In Expanded consumption section, Validate that when up Arrow is clicked only Usage breakdown section is displayed

	Scenario: Validate that when Down Arrow is clicked both Chart or Map View section as well as Usage breakdown section is displayed
		When In Expanded consumption section, Validate that when Down Arrow is clicked both Chart or Map View section as well as Usage breakdown section is displayed

	Scenario: Validate that when the user clicks on the Menu Component, two options are displayed or not
		When In Expanded consumption section, Validate that when the user clicks on the Menu Component, two options are displayed or not

	Scenario: Validate that when the user clicks on the Hide or Show Columns button, Edit Columns pop up is displayed or not
		When In Expanded consumption section, Validate that when the user clicks on the Hide or Show Columns button, Edit Columns pop up is shown

	Scenario: Validate the Column Header names displayed in the Edit Columns pop up
		When In Expanded consumption section, Validate the Column Header names displayed in the Edit Columns pop up

	Scenario: Validate the User can edit the column details in the Edit Columns popup
		When In Expanded consumption section, Validate the User can edit the column details in the Edit Columns popup

	Scenario: Validate that when the user clicks on the Restore Defaults button, only default columns are displayed in the table
		When In Expanded consumption section, Validate that when the user clicks on the Restore Defaults button, only default columns are displayed in the table

	Scenario: Validate the Filter options displayed within the GroupBy filter
		When In Expanded consumption section, Validate the Filter options displayed within the GroupBy filter

	Scenario: Validate whether Location and Consumption model details are displayed when Subscription filter is applied
		When In Expanded consumption section, Validate whether Location and Consumption model details are displayed when Subscription filter is applied
