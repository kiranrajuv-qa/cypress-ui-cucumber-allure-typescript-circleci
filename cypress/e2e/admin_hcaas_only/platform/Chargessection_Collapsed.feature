@pa_hcaas_only @platform @1.6release @sanity

Feature: Validate the Charges section - Collapsed form

	Scenario: Validate whether the Chart gets displayed in the Charges section
		Given User Navigates to Home Page
		Given User Clicks on the Customer name within Customers facet
		When User clicks on the Consumption tab
		Then Validate whether Chart gets displayed within the Charges section

	Scenario: Validate whether Legends for the chart are displayed below the chart
		When In charges section, validate whether the legends for the chart are displayed below it

	Scenario: Validate whether Charged Units details are displayed to the left of the chart
		When In charges section, validate whether Charged Units details are displayed to the left of the chart

	Scenario: Validate the filter options in Charges section when Charged Units option is selected
		When In charges section, Validate the filter options in Charges section when Charged Units option is selected

	Scenario: Validate whether Charged Amount details are displayed to the left of the chart
		When In charges section, validate whether Charged Amount details are displayed to the left of the chart

	Scenario: Validate the filter options in Charges section when Charged Amount option is selected
		When In charges section, Validate the filter options in Charges section when Charged Amount option is selected

	Scenario: Validate whether the user can select the capacity type from All Capacity Types dropdown filter
		When In charges section, Validate whether the user can select the capacity type from All Capacity Types dropdown filter

	Scenario: Validate whether Reserve and On-Demand buttons are displayed when any of the Capacity type filter is applied
		When In charges section, Validate whether Reserve and On-Demand buttons are displayed when any of the Capacity type filter is applied

	Scenario: Validate that when location filter is applied, all capacity types option is not displayed
		When In charges section, Validate that when location filter is applied, all capacity types option is not displayed

	Scenario: Validate Whether Enlarge icon is displayed in the Charges Section
		When In charges section, Validate Whether Enlarge icon is displayed or not

	Scenario: Validate that when the user clicks on the enlarge icon, expanded view of charges section is displayed or not
		When In charges section, Validate that when the user clicks on the enlarge icon, expanded view of charges section is displayed or not

	Scenario: Validate that Export to Excel option is displayed for Charges section or not
		When In charges section, validate whether export to excel option is displayed or not
