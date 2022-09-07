@pa_hcaas_only @Customers @1.6release @HcaasContent @MARTINI @Invoices

Feature: Invoices - Customers

	Scenario: Check if Invoices Tab is disapled on click of Customer
		Given User is on 'CUSTOMERS' Facet
		When In Cisco+ Contracts Check any end customer in Table
		And After Clicking End customer in table Summary window should be present
		Then 'Invoices' tab should be present

	Scenario: On Click of Invoices tab, Invices should be displayed
		When 'Invoices' tab should be present
		And Click on Invoices tab
		Then Invoices data should be displayed

	Scenario: Validate Invoices table header
		Then Validate table header

	Scenario: Check for Pagination only if more than 10 records
		When 'Invoices' tab should be present
		Then Pagination should be avalible at the bottom of table

	Scenario: Validate Next buttons
		When Pagination should be avalible at the bottom of table
		Then Verify Next in Pagination

	Scenario: Validate Prev buttons
		When Pagination should be avalible at the bottom of table
		Then Verify Prev in Pagination

	Scenario: Validate Items per page
		When Pagination should be avalible at the bottom of table
		And Select '25' items from Dropdown
		Then Validate with table count

	Scenario: Check sorting on particular column
		Then Check Due Date column sorting

	Scenario: Check Export to XLS button
		When Click on More on Table header
		Then Check for XLS api call

	Scenario: Check Export to CSV button
		When Click on More on Table header
		Then Check for CSV api call

	Scenario: Check if Back to Customers Page link is working or not
		When 'Invoices' tab should be present
		Then Click on 'Back to Cisco+ Contracts' link
