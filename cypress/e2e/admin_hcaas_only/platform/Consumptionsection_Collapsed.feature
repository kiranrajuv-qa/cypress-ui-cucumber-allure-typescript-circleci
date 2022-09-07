@pa_hcaas_only @platform @1.6release @sanity

Feature: Validate the Consumption section - Collapsed form

	Scenario: Validate whether the Map gets displayed in the Consumption section
		Given User Clicks on the Customer name within Customers facet
		When User clicks on the Consumption tab
		Then Validate whether Map gets displayed within the Consumption section

	Scenario: Validate whether buttons are displayed in the Map component
		When In Map component,control buttons are displayed are not

	Scenario: Validate whether capacity type details are displayed to the left of the chart
		When In consumption section, Capacity type details are displayed to the left of the chart

	Scenario: Validate the filter options displayed in the Consumption section
		When In consumption section, validate the filter options displayed in each of the filter

	Scenario: Validate that the user can able to select a particular capacity type
		When In consumption section, Filter the consumption details by applying the capacity type filter

	Scenario: Validate that when Location filter is applied, user cannot able to select all capacity types
		When In consumption section, when Location filter is applied, user cannot able to select all capacity types

	Scenario: Validate that Expand button is displayed in the consumption section or not
		When In consumption section, validate whether Expand button is displayed or not

	Scenario: Validate that when the User Clicks on the Expand button, Consumption section gets expanded
		When In consumption section, validate that when the user clicks on the Expand button, Consumption section gets expanded or not

	Scenario: Validate that Export to Excel option is displayed for Consumption section or not
		When In consumption section, validate whether export to excel option is displayed or not
