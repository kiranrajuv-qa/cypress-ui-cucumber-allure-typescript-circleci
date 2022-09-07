@pa_hcaas_st @customers @GIMLET @sanity @1.4release
Feature: CUSTOMERS Facet Defaults

	Scenario: Verify Customers Facet Tabs
		When User is on "CUSTOMERS" Facet
		Then Customers Facet must have tabs
			| Customer CX Cloud  |
			| Services Contracts |
			| Cisco+ Contracts   |

	Scenario: Verify Customers Table Columns
		Then Customers Table must have columns
			| End Customer    |
			| Offer Domain    |
			| CX Cloud Access |

	Scenario: Verify Visual Filters
		Then Visual Filters must be displayed
