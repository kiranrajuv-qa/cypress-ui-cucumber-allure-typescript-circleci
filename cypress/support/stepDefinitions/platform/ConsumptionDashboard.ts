/// <reference types= "Cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import app from '../../pageObjects/app.po';
import ConsumptionDashboard from '../../pageObjects/platform/ConsumptionDashboard.po';
import ManageUsers from '../../pageObjects/platform/ManageUsers.po';

Given(`User Clicks on the Customer name within Customers facet`, () => {
	//User clicks on the Customers facet
	ManageUsers.UserIcon.as('UserIcon');
	cy.get('@UserIcon').should('be.visible');
	app.customersFacet.click({ force: true });
	ConsumptionDashboard.CustomerNamewithinCustomersFacet.as('Customerdetail');
	cy.get('@Customerdetail').should('be.visible');
});

When(`User clicks on the Consumption tab`, () => {
	//User clicks on the first customer detail displayed in the table
	ConsumptionDashboard.CustomerNamewithinCustomersFacet.click({
		force: true,
	});
	ConsumptionDashboard.ConsumptionTab.as('TabName');
	cy.get('@TabName').should('be.visible');
});

//**********Consumption section - Collapsed***************

Then(
	`Validate whether Map gets displayed within the Consumption section`,
	() => {
		//Validate whether the consumption section header is displayed
		ConsumptionDashboard.ConsumptionTab.click({ force: true });
		ConsumptionDashboard.ConsumptionHeader.as('ConsumptionHeader');
		cy.get('@ConsumptionHeader').should('be.visible');

		// Click on the Period filter and then select the option 18 Months
		ConsumptionDashboard.ConsumptionSectionPeriodFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionPeriodLast18Months.as(
			'PeriodOption',
		);
		cy.get('@PeriodOption').should('be.visible');
		ConsumptionDashboard.ConsumptionSectionPeriodLast18Months.click({
			force: true,
		});

		// validate whether Map is displayed within the Consumption section
		ConsumptionDashboard.ConsumptionSectionMap.as('Map');
		cy.get('@Map').should('be.visible');
	},
);

When(`In Map component,control buttons are displayed are not`, () => {
	ConsumptionDashboard.ConsumptionSectionMapButton1.as('MapButton');
	cy.get('@MapButton').should('be.visible');
	ConsumptionDashboard.ConsumptionSectionMapButton2.as('MapButton2');
	cy.get('@MapButton2').should('be.visible');
	ConsumptionDashboard.ConsumptionSectionMapButton3.as('MapButton3');
	cy.get('@MapButton3').should('be.visible');

	//Click on Full screen button in the Map
	ConsumptionDashboard.ConsumptionSectionMapFullview.as('MapNormalView');
	cy.get('@MapNormalView').should('be.visible');
});

When(
	`In consumption section, Capacity type details are displayed to the left of the chart`,
	() => {
		// Validate whether Capacity types details header is displayed
		ConsumptionDashboard.ConsumptionSectionDetailsHeader.as(
			'DetailsHeader',
		);
		cy.get('@DetailsHeader').should('be.visible');

		ConsumptionDashboard.ConsumptionSectioncapcitytypeValues.each(
			(item) => {
				cy.wrap(item).then((Values) => {
					const CapacityType = Values.text();
					expect(CapacityType, 'CapacityTypes').to.be.oneOf([
						'vMemory',
						'vStorage',
						'Switches',
						'Nodes',
						'Storage',
						'Ports',
					]);
				});
			},
		);
	},
);

When(
	`In consumption section, validate the filter options displayed in each of the filter`,
	() => {
		// Validate the filter options displayed within the service categories filter
		ConsumptionDashboard.ConsumptionSectionCategoriesFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionCategoriesFilterOption1.as(
			'CategoryFilterOption',
		);
		cy.get('@CategoryFilterOption').should('be.visible');

		ConsumptionDashboard.ConsumptionSectionPeriodFilterOptions.each(
			(item) => {
				cy.wrap(item).then((Categories) => {
					const CategoriesType = Categories.text();
					expect(CategoriesType, 'CategoriesTypes').to.be.oneOf([
						'All Service Categories',
						'Networking',
						'Hyperflex',
					]);
				});
			},
		);
		ConsumptionDashboard.ConsumptionSectionCategoriesFilter.click({
			force: true,
		});

		// Validate the filter options displayed within the Group By Filter
		ConsumptionDashboard.ConsumptionSectionGroupByFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionGroupByFilterOption1.as(
			'GroupByFilterOption',
		);
		cy.get('@GroupByFilterOption').should('be.visible');

		ConsumptionDashboard.ConsumptionSectionGroupByFilterOptions.each(
			(item) => {
				cy.wrap(item).then((GroupBy) => {
					const GroupByFilter = GroupBy.text();
					expect(GroupByFilter, 'GroupByFilters').to.be.oneOf([
						'Overall',
						'By Location',
					]);
				});
			},
		);
		ConsumptionDashboard.ConsumptionSectionGroupByFilter.click({
			force: true,
		});

		// Validate the filter options displayed within the Period Filter
		ConsumptionDashboard.ConsumptionSectionPeriodFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionPeriodFilterOption1.as(
			'PeriodFilterOption',
		);
		cy.get('@PeriodFilterOption').should('be.visible');

		ConsumptionDashboard.ConsumptionSectionPeriodFilterOptions.each(
			(item) => {
				cy.wrap(item).then((Period) => {
					const PeriodFilter = Period.text();
					expect(PeriodFilter, 'PeriodFilters').to.be.oneOf([
						'Last 7 Days',
						'Last 30 Days',
						'Last 18 Weeks',
						'Last 18 Months',
					]);
				});
			},
		);
		ConsumptionDashboard.ConsumptionSectionPeriodFilter.click({
			force: true,
		});

		// Validate the filter options displayed within the capacity types filter
		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilterOption1.as(
			'CapacityTypeFilterOption',
		);
		cy.get('@CapacityTypeFilterOption').should('be.visible');

		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilterOptions.each(
			(item) => {
				cy.wrap(item).then((Type) => {
					const CapacityTypeFilter = Type.text();
					expect(
						CapacityTypeFilter,
						'CapacityTypeFilters',
					).to.be.oneOf([
						'vMemory',
						'vStorage',
						'Switches',
						'Nodes',
						'Storage',
						'Ports',
						'All Capacity Types',
					]);
				});
			},
		);
		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilter.click({
			force: true,
		});
	},
);

When(
	`In consumption section, Filter the consumption details by applying the capacity type filter`,
	() => {
		//Validate that the user can able to select a particular capacity type
		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilterOption2.then(
			(FilterName) => {
				const CapacitytypeFilterSelected = FilterName.text();
				//Select the capacity type filter
				ConsumptionDashboard.ConsumptionSectionCapacityTypeFilterOption2.click(
					{ force: true },
				);
				ConsumptionDashboard.ConsumptionSectioncapcitytypeValues.as(
					'CapacityTypeValue',
				);
				cy.get('@CapacityTypeValue').should('be.visible');
				ConsumptionDashboard.ConsumptionSectioncapcitytypeValues.then(
					(FirstDetail) => {
						const CapacitytypeValues = FirstDetail.text();
						expect(CapacitytypeFilterSelected, CapacitytypeValues);
					},
				);
			},
		);
	},
);

When(
	`In consumption section, when Location filter is applied, user cannot able to select all capacity types`,
	() => {
		// Apply the Location filter
		ConsumptionDashboard.ConsumptionSectionGroupByFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionGroupByFilterOption1.as(
			'Filteroptions',
		);
		cy.get('@Filteroptions').should('be.visible');

		ConsumptionDashboard.ConsumptionSectionGroupByFilterOption2.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectioncapcitytypeValues.as(
			'CapacityTypeValue',
		);
		cy.get('@CapacityTypeValue').should('be.visible');

		// Validate the filter options in Capacity type filter
		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilterOption1.as(
			'CapacityTypeFilterOption',
		);
		cy.get('@CapacityTypeFilterOption').should('be.visible');

		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilterOptions.each(
			(item) => {
				cy.wrap(item).then((Type) => {
					const CapacityTypeFilter = Type.text();
					expect(
						CapacityTypeFilter,
						'CapacityTypeFilters',
					).to.be.oneOf([
						'vMemory',
						'vStorage',
						'Switches',
						'Nodes',
						'Storage',
						'Ports',
					]);
				});
			},
		);
		ConsumptionDashboard.ConsumptionSectionCapacityTypeFilter.click({
			force: true,
		});

		// Click on the GroupBy filter and then reset to Overall
		ConsumptionDashboard.ConsumptionSectionGroupByFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionGroupByFilterOption1.as(
			'Filteroptions',
		);
		cy.get('@Filteroptions').should('be.visible');

		ConsumptionDashboard.ConsumptionSectionGroupByFilterOption1.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectioncapcitytypeValues.as(
			'CapacityTypeValue',
		);
		cy.get('@CapacityTypeValue').should('be.visible');
	},
);

When(
	`In consumption section, validate whether export to excel option is displayed or not`,
	() => {
		//Validate Whether Export to Excel option is displayed or not
		ConsumptionDashboard.ConsumptionSectionExporttoButton.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionExporttooptionExcel.as(
			'Exceloption',
		);
		cy.get('@Exceloption').should('be.visible');
		ConsumptionDashboard.ConsumptionSectionGroupByFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionGroupByFilterOption1.as(
			'Filteroptions',
		);
		cy.get('@Filteroptions').should('be.visible');
		ConsumptionDashboard.ConsumptionSectionGroupByFilter.click({
			force: true,
		});

		//Click on the link - Back to Cisco+Contracts
		ConsumptionDashboard.BacktoCiscoContractsTab.click({ force: true });
		ConsumptionDashboard.CustomerNamewithinCustomersFacet.as(
			'Customerdetail',
		);
		cy.get('@Customerdetail').should('be.visible');
	},
);

When(
	`In consumption section, validate whether Expand button is displayed or not`,
	() => {
		// Validate whether Expand button is displayed or not
		ConsumptionDashboard.ConsumptionSectionExpandButton.as('ExpandButton');
		cy.get('@ExpandButton').should('be.visible');
	},
);

When(
	`In consumption section, validate that when the user clicks on the Expand button, Consumption section gets expanded or not`,
	() => {
		// Click on the Expand button
		ConsumptionDashboard.ConsumptionSectionExpandButton.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionCollapseButton.as(
			'CollapseButton',
		);
		cy.get('@CollapseButton').should('be.visible');

		// Click on the Collpase button to get back to the normal form
		ConsumptionDashboard.ConsumptionSectionCollapseButton.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionExpandButton.as('ExpandButton');
		cy.get('@ExpandButton').should('be.visible');
	},
);

//**********Charges section - Collapsed***************

Then(`Validate whether Chart gets displayed within the Charges section`, () => {
	//Validate whether the Charges section header is displayed
	ConsumptionDashboard.ConsumptionTab.click({ force: true });
	ConsumptionDashboard.ChargesSectionHeader.as('ChargesHeader');
	cy.get('@ChargesHeader').should('be.visible');

	// Click on the Period filter and then select the option 18 Months
	ConsumptionDashboard.ChargesSectionTimePeriodFilter.click({ force: true });
	ConsumptionDashboard.ChargesSectionTimePeriodFilterLast18Months.as(
		'PeriodOption',
	);
	cy.get('@PeriodOption').should('be.visible');
	ConsumptionDashboard.ChargesSectionTimePeriodFilterLast18Months.click({
		force: true,
	});

	// validate whether Chart is displayed within the Charges section
	ConsumptionDashboard.ChargesSectionChart.as('Chart');
	cy.get('@Chart').should('be.visible');

	//Validate the X axis detail and Y-axis detail displayed in the chart
	ConsumptionDashboard.ChargesSectionChartY_axis.then((Yaxis) => {
		const YaxisText = Yaxis.text();
		expect(YaxisText, 'Charged Units');
	});

	ConsumptionDashboard.ChargesSectionChartX_axis.then((Xaxis) => {
		const XaxisText = Xaxis.text();
		expect(XaxisText, 'X-axis text').to.be.oneOf([
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		]);
	});
});

When(
	'In charges section, validate whether the legends for the chart are displayed below it',
	() => {
		// Validate the legends displayed below the chart
		ConsumptionDashboard.ChargesSectionChart_Legends.each((item) => {
			cy.wrap(item).then((Values) => {
				const LegendName = Values.text().trim();
				expect(LegendName, 'Name of the Legends in Chart').to.be.oneOf([
					'vMemory',
					'vStorage',
					'Switches',
					'Nodes',
					'Storage',
					'Ports',
				]);
			});
		});
	},
);

When(
	'In charges section, validate whether Charged Units details are displayed to the left of the chart',
	() => {
		// Validate whether charges detail Header is displayed or not
		ConsumptionDashboard.ChargesSectionUnitsDetailsHeader.as(
			'DetailsHeader',
		);
		cy.get('@DetailsHeader').should('be.visible');

		// Validate whether the capacity type details are displayed to the left of the chart
		ConsumptionDashboard.ChargesSectionUnitsdetail.each((item) => {
			cy.wrap(item).then((Values) => {
				const CapacityType = Values.text();
				expect(CapacityType, 'CapacityTypes').to.be.oneOf([
					'vMemory',
					'vStorage',
					'Switches',
					'Nodes',
					'Storage',
					'Ports',
				]);
			});
		});
	},
);

When(
	'In charges section, validate whether Charged Amount details are displayed to the left of the chart',
	() => {
		//Select the option Charged Amount
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterOption1.as(
			'ChargesFilterOption',
		);
		cy.get('@ChargesFilterOption').should('be.visible');

		//Click on the option - Charged Amount
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterOption1.click({
			force: true,
		});

		// Validate whether the charged Amount detail is displayed to the left of the chart
		ConsumptionDashboard.ChargesSectionAmountsdetail.as('AmountDetail');
		cy.get('@AmountDetail').should('be.visible');

		// Validate whether charges detail Header is displayed or not
		ConsumptionDashboard.ChargesSectionDetailsHeader.as('DetailsHeader');
		cy.get('@DetailsHeader').should('be.visible');
	},
);

When(
	'In charges section, Validate the filter options in Charges section when Charged Units option is selected',
	() => {
		//Validate the filter options displayed in the Charges Filter
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterOption1.as(
			'ChargesFilterOption',
		);
		cy.get('@ChargesFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterOptions.each(
			(item) => {
				cy.wrap(item).then((Categories) => {
					const CategoriesType = Categories.text();
					expect(CategoriesType, 'CategoriesTypes').to.be.oneOf([
						'Charged Units',
						'Charged Amount',
					]);
				});
			},
		);
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilter.click({
			force: true,
		});

		// Validate the filter options displayed within the service categories filter
		ConsumptionDashboard.ChargesSectionCategoriesFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionCategoriesFilteroption1.as(
			'CategoryFilterOption',
		);
		cy.get('@CategoryFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionCategoriesFilterOptions.each(
			(item) => {
				cy.wrap(item).then((Categories) => {
					const CategoriesType = Categories.text();
					expect(CategoriesType, 'CategoriesTypes').to.be.oneOf([
						'All Service Categories',
						'Networking',
						'Hyperflex',
					]);
				});
			},
		);
		ConsumptionDashboard.ChargesSectionCategoriesFilter.click({
			force: true,
		});

		// Validate the filter options displayed within the Group By Filter
		ConsumptionDashboard.ChargesSectionGroupByFilter.click({ force: true });
		ConsumptionDashboard.ChargesSectionGroupByFilterOption2.as(
			'GroupByFilterOption',
		);
		cy.get('@GroupByFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionGroupByFilterOptions.each((item) => {
			cy.wrap(item).then((GroupBy) => {
				const GroupByFilter = GroupBy.text();
				expect(GroupByFilter, 'GroupByFilters').to.be.oneOf([
					'Overall',
					'By Location',
					'By Reserve vs. On-Demand',
				]);
			});
		});
		ConsumptionDashboard.ChargesSectionGroupByFilter.click({ force: true });

		// Validate the filter options displayed within the Period Filter
		ConsumptionDashboard.ChargesSectionTimePeriodFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionTimePeriodFilterOption1.as(
			'PeriodFilterOption',
		);
		cy.get('@PeriodFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionTimePeriodFilterOptions.each(
			(item) => {
				cy.wrap(item).then((Period) => {
					const PeriodFilter = Period.text();
					expect(PeriodFilter, 'PeriodFilters').to.be.oneOf([
						'Last 6 Months',
						'Last 12 Months',
						'Last 18 Months',
					]);
				});
			},
		);
		ConsumptionDashboard.ChargesSectionTimePeriodFilter.click({
			force: true,
		});

		// Validate the filter options displayed within the capacity types filter
		ConsumptionDashboard.ChargesSectionCapacityTypeFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionCapacityTypeFilteroption2.as(
			'CapacityTypeFilterOption',
		);
		cy.get('@CapacityTypeFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionCapacityTypeFilteroptions.each(
			(item) => {
				cy.wrap(item).then((Type) => {
					const CapacityTypeFilter = Type.text();
					expect(
						CapacityTypeFilter,
						'CapacityTypeFilters',
					).to.be.oneOf([
						'vMemory',
						'vStorage',
						'Switches',
						'Nodes',
						'Storage',
						'Ports',
						'All Capacity Types',
					]);
				});
			},
		);
		ConsumptionDashboard.ChargesSectionCapacityTypeFilter.click({
			force: true,
		});
	},
);

When(
	'In charges section, Validate the filter options in Charges section when Charged Amount option is selected',
	() => {
		//Validate the filter options displayed in the Charges Filter
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterOption1.as(
			'ChargesFilterOption',
		);
		cy.get('@ChargesFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterOptions.each(
			(item) => {
				cy.wrap(item).then((Categories) => {
					const CategoriesType = Categories.text();
					expect(CategoriesType, 'CategoriesTypes').to.be.oneOf([
						'Charged Units',
						'Charged Amount',
					]);
				});
			},
		);

		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterOption1.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionAmountsdetail.as('AmountDetail');
		cy.get('@AmountDetail').should('be.visible');

		// Validate the filter options displayed within the service categories filter
		ConsumptionDashboard.ChargesSectionCategoriesFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionCategoriesFilteroption1.as(
			'CategoryFilterOption',
		);
		cy.get('@CategoryFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionCategoriesFilterOptions.each(
			(item) => {
				cy.wrap(item).then((Categories) => {
					const CategoriesType = Categories.text();
					expect(CategoriesType, 'CategoriesTypes').to.be.oneOf([
						'All Service Categories',
						'Networking',
						'Hyperflex',
					]);
				});
			},
		);
		ConsumptionDashboard.ChargesSectionCategoriesFilter.click({
			force: true,
		});

		// Validate the filter options displayed within the Group By Filter
		ConsumptionDashboard.ChargesSectionGroupByFilter.click({ force: true });
		ConsumptionDashboard.ChargesSectionGroupByFilterOption2.as(
			'GroupByFilterOption',
		);
		cy.get('@GroupByFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionGroupByFilterOptions.each((item) => {
			cy.wrap(item).then((GroupBy) => {
				const GroupByFilter = GroupBy.text();
				expect(GroupByFilter, 'GroupByFilters').to.be.oneOf([
					'Overall',
					'By Location',
					'By Reserve vs. On-Demand',
				]);
			});
		});
		ConsumptionDashboard.ChargesSectionGroupByFilter.click({ force: true });

		// Validate the filter options displayed within the Period Filter
		ConsumptionDashboard.ChargesSectionInvoicedayFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionInvoicedayFilterOption1.as(
			'InvoicedayFilterOption',
		);
		cy.get('@InvoicedayFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionInvoicedayFilterOptions.each(
			(item) => {
				cy.wrap(item).then((InvoiceDay) => {
					const InvoicedayFilter = InvoiceDay.text();
					expect(InvoicedayFilter, 'InvoiceDayFilters').to.be.oneOf([
						'the 1st of every month',
						'the 2nd of every month',
						'the 3rd of every month',
						'the 4th of every month',
						'the 5th of every month',
						'the 6th of every month',
						'the 7th of every month',
						'the 8th of every month',
						'the 9th of every month',
						'the 10th of every month',
						'the 11th of every month',
						'the 12th of every month',
						'the 13th of every month',
						'the 14th of every month',
						'the 15th of every month',
						'the 16th of every month',
						'the 17th of every month',
						'the 18th of every month',
						'the 19th of every month',
						'the 20th of every month',
						'the 21st of every month',
						'the 22nd of every month',
						'the 23rd of every month',
						'the 24th of every month',
						'the 25th of every month',
						'the 26th of every month',
						'the 27th of every month',
						'the 28th of every month',
						'the 29th of every month',
						'the 30th of every month',
						'the 31st of every month',
					]);
				});
			},
		);
		ConsumptionDashboard.ChargesSectionInvoicedayFilter.click({
			force: true,
		});

		// Validate the filter options displayed within the capacity types filter
		ConsumptionDashboard.ChargesSectionCapacityTypeFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionCapacityTypeFilteroption2.as(
			'CapacityTypeFilterOption',
		);
		cy.get('@CapacityTypeFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionCapacityTypeFilteroptions.each(
			(item) => {
				cy.wrap(item).then((Type) => {
					const CapacityTypeFilter = Type.text();
					expect(
						CapacityTypeFilter,
						'CapacityTypeFilters',
					).to.be.oneOf([
						'vMemory',
						'vStorage',
						'Switches',
						'Nodes',
						'Storage',
						'Ports',
						'All Capacity Types',
					]);
				});
			},
		);
		ConsumptionDashboard.ChargesSectionCapacityTypeFilter.click({
			force: true,
		});
	},
);

When(
	'In charges section, Validate Whether Enlarge icon is displayed or not',
	() => {
		// Validate whether enlarge/expand button is displayed or not
		ConsumptionDashboard.ChargesSection_ExpandButton.as('ExpandButton');
		cy.get('@ExpandButton').should('be.visible');
	},
);

When(
	'In charges section, Validate whether Reserve and On-Demand buttons are displayed when any of the Capacity type filter is applied',
	() => {
		// Check whether Reserve button is dsiplayed
		ConsumptionDashboard.ChargesSectionReserveButton.as('ReserveButton');
		cy.get('@ReserveButton').should('be.visible');

		// Check whether On-Demand button is dsiplayed
		ConsumptionDashboard.ChargesSectionon_DemandButton.as('ReserveButton');
		cy.get('@ReserveButton').should('be.visible');
	},
);

When(
	'In charges section, Validate that when location filter is applied, all capacity types option is not displayed',
	() => {
		// Apply the Location filter
		ConsumptionDashboard.ChargesSectionGroupByFilter.click({ force: true });
		ConsumptionDashboard.ChargesSectionGroupByFilterOption2.as(
			'Filteroptions',
		);
		cy.get('@Filteroptions').should('be.visible');

		ConsumptionDashboard.ChargesSectionGroupByFilterOption2.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionReserveButton.as('ReserveButton');
		cy.get('@ReserveButton').should('be.visible');

		// Validate the filter options in Capacity type filter
		ConsumptionDashboard.ChargesSectionCapacityTypeFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionCapacityTypeFilteroption2.as(
			'CapacityTypeFilterOption',
		);
		cy.get('@CapacityTypeFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionCapacityTypeFilteroptions.each(
			(item) => {
				cy.wrap(item).then((Type) => {
					const CapacityTypeFilter = Type.text();
					expect(
						CapacityTypeFilter,
						'CapacityTypeFilters',
					).to.be.oneOf([
						'vMemory',
						'vStorage',
						'Switches',
						'Nodes',
						'Storage',
						'Ports',
					]);
				});
			},
		);
		ConsumptionDashboard.ChargesSectionCapacityTypeFilter.click({
			force: true,
		});

		// Click on the GroupBy filter and then reset to Overall
		ConsumptionDashboard.ChargesSectionGroupByFilter.click({ force: true });
		ConsumptionDashboard.ChargesSectionGroupByFilterOption1.as(
			'Filteroptions',
		);
		cy.get('@Filteroptions').should('be.visible');

		ConsumptionDashboard.ChargesSectionGroupByFilterOption1.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionReserveButton.as('ReserveButton');
		cy.get('@ReserveButton').should('be.visible');
	},
);

When(
	'In charges section, Validate whether the user can select the capacity type from All Capacity Types dropdown filter',
	() => {
		// Select the option - Charged Units
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterOption2.as(
			'ChargesFilterOption',
		);
		cy.get('@ChargesFilterOption').should('be.visible');

		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterOption2.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionUnitsdetail.as('ChargedUnitsdetail');
		cy.get('@ChargedUnitsdetail').should('be.visible');

		// select Timeperiod as 18 Months
		ConsumptionDashboard.ChargesSectionTimePeriodFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionTimePeriodFilterLast18Months.as(
			'PeriodOption',
		);
		cy.get('@PeriodOption').should('be.visible');
		ConsumptionDashboard.ChargesSectionTimePeriodFilterLast18Months.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionChart.as('Chart');
		cy.get('@Chart').should('be.visible');

		//Validate that the user can able to select a particular capacity type
		ConsumptionDashboard.ChargesSectionCapacityTypeFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionCapacityTypeFilteroption2.then(
			(FilterName) => {
				const CapacitytypeFilterSelected = FilterName.text();
				//Select the capacity type filter
				ConsumptionDashboard.ChargesSectionCapacityTypeFilteroption2.click(
					{ force: true },
				);
				ConsumptionDashboard.ChargesSectionReserveButton.as(
					'ReserveButton',
				);
				cy.get('@ReserveButton').should('be.visible');
				ConsumptionDashboard.ChargesSectionUnitsdetail.then(
					(FirstDetail) => {
						const ChargedUnitValues = FirstDetail.text();
						expect(CapacitytypeFilterSelected, ChargedUnitValues);
					},
				);
			},
		);
	},
);

When(
	'In charges section, Validate that when the user clicks on the enlarge icon, expanded view of charges section is displayed or not',
	() => {
		// Validate on clicking on the expand button, section is expanded or not
		ConsumptionDashboard.ChargesSection_ExpandButton.click({ force: true });
		ConsumptionDashboard.ChargesSection_CollapseButton.as('CollapseButton');
		cy.get('@CollapseButton').should('be.visible');

		ConsumptionDashboard.ChargesSection_CollapseButton.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSection_ExpandButton.as('ExpandButton');
		cy.get('@ExpandButton').should('be.visible');
	},
);

When(
	'In charges section, validate whether export to excel option is displayed or not',
	() => {
		// Validate whether Export to option is displayed or not

		ConsumptionDashboard.ChargesSectionExportTobutton.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExportToExceloption.as(
			'Exceloption',
		);
		cy.get('@Exceloption').should('be.visible');

		//Click on the link - Back to Cisco+Contracts
		ConsumptionDashboard.BacktoCiscoContractsTab.click({ force: true });
		ConsumptionDashboard.CustomerNamewithinCustomersFacet.as(
			'Customerdetail',
		);
		cy.get('@Customerdetail').should('be.visible');
	},
);

//**********Consumption section - Expanded***************

When(
	'In Expanded consumption section, Validate whether the Capacity types are displayed in the form of buttons',
	() => {
		//Validate whether the consumption section header is displayed
		ConsumptionDashboard.ConsumptionTab.click({ force: true });
		ConsumptionDashboard.ConsumptionHeader.as('ConsumptionHeader');
		cy.get('@ConsumptionHeader').should('be.visible');

		// Select Time Period - Last 18 Months
		// Click on the Period filter and then select the option 18 Months
		ConsumptionDashboard.ConsumptionSectionPeriodFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionPeriodLast18Months.as(
			'PeriodOption',
		);
		cy.get('@PeriodOption').should('be.visible');
		ConsumptionDashboard.ConsumptionSectionPeriodLast18Months.click({
			force: true,
		});

		// validate whether Map is displayed within the Consumption section
		ConsumptionDashboard.ConsumptionSectionMap.as('Map');
		cy.get('@Map').should('be.visible');

		//Click on the Expand button
		ConsumptionDashboard.ConsumptionSectionExpandButton.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionCollapseButton.as(
			'CollapseButton',
		);
		cy.get('@CollapseButton').should('be.visible');

		ConsumptionDashboard.ConsumptionExpandedCapacitytypeFilterButtons.as(
			'CapacitytypeButtons',
		);
		cy.get('@CapacitytypeButtons').should('be.visible');
	},
);

When(
	'In Expanded consumption section, Validate whether the Filter Label is displayed or not',
	() => {
		ConsumptionDashboard.ConsumptionExpandedFilterLabel.as('FilterLabel');
		cy.get('@FilterLabel').should('be.visible');
		ConsumptionDashboard.ConsumptionExpandedFilterLabel.should(
			'contain.text',
			'Which capacity type do you want to focus on?',
		);
	},
);

When(
	'In Expanded consumption section, Validate whether Map view and Chart view is present',
	() => {
		// Validate whether Map is displayed
		ConsumptionDashboard.ConsumptionExpandedMap.as('Map');
		cy.get('@Map').should('be.visible');

		// Click on the Chart icon
		ConsumptionDashboard.ConsumptionExpandedChartIcon.click({
			force: true,
		});

		// Validate whether Chart is displayed
		ConsumptionDashboard.ConsumptionExpandedChart.as('Chart');
		cy.get('@Chart').should('be.visible');
	},
);

When(
	'In Expanded consumption section, Validate whether the Consumption details are displayed beneath the map or chart',
	() => {
		ConsumptionDashboard.ConsumptionExpandedDetailsHeader.as(
			'DetailsHeader',
		);
		cy.get('@DetailsHeader').should('be.visible');

		ConsumptionDashboard.ConsumptionExpandedConsumptionDetails.each(
			(item) => {
				cy.wrap(item).then((Values) => {
					const CapacityType = Values.text();
					expect(CapacityType, 'CapacityTypes').to.be.oneOf([
						'vMemory',
						'vStorage',
						'Switches',
						'Nodes',
						'Storage',
						'Ports',
					]);
				});
			},
		);
	},
);

When(
	'In Expanded consumption section, Validate that when up Arrow is clicked only Usage breakdown section is displayed',
	() => {
		ConsumptionDashboard.ConsumptionExpandedUpArrow.click({ force: true });
		ConsumptionDashboard.ConsumptionExpandedDownArrow.as('DownArrow');
		cy.get('@DownArrow').should('be.visible');

		//Validate whether chart or Map section is displayed or not
		ConsumptionDashboard.ConsumptionExpandedChart.should('not.exist');

		//Validate whether Usage breakdown section is displayed or not
		ConsumptionDashboard.ConsumptionExpandedUsagebreakdownHeader.should(
			'be.visible',
		);
	},
);

When(
	'In Expanded consumption section, Validate that when Down Arrow is clicked both Chart or Map View section as well as Usage breakdown section is displayed',
	() => {
		ConsumptionDashboard.ConsumptionExpandedDownArrow.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionExpandedUpArrow.as('UpArrow');
		cy.get('@UpArrow').should('be.visible');

		//Validate whether chart or Map section is displayed or not
		ConsumptionDashboard.ConsumptionExpandedChart.should('be.visible');

		//Validate whether Usage breakdown section is displayed or not
		ConsumptionDashboard.ConsumptionExpandedUsagebreakdownHeader.should(
			'be.visible',
		);
	},
);

When(
	'In Expanded consumption section, Validate that when the user clicks on the Menu Component, two options are displayed or not',
	() => {
		ConsumptionDashboard.ConsumptionExpandedMenuComponent.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionExpandedExporttoExcel.as(
			'ExporttoExcel',
		);
		cy.get('@ExporttoExcel').should('be.visible');
		ConsumptionDashboard.ConsumptionExpandedHideorShowColumns.as(
			'HideorShowColumns',
		);
		cy.get('@HideorShowColumns').should('be.visible');
	},
);

When(
	'In Expanded consumption section, Validate that when the user clicks on the Hide or Show Columns button, Edit Columns pop up is shown',
	() => {
		ConsumptionDashboard.ConsumptionExpandedHideorShowColumns.click({
			force: true,
		});
		// Validate the Pop up Header
		ConsumptionDashboard.ConsumptionExpandedEditColumnsHeader.as(
			'EditColumnsPopup',
		);
		cy.get('@EditColumnsPopup').should('be.visible');
	},
);

When(
	'In Expanded consumption section, Validate the Column Header names displayed in the Edit Columns pop up',
	() => {
		// Validate whether Restore Button is displayed or not
		ConsumptionDashboard.ConsumptionExpandedRestoredefaultsbutton.as(
			'RestoreButton',
		);
		cy.get('@RestoreButton').should('be.visible');

		//Validate the Column Headers displayed in the Edit Columns pop up
		ConsumptionDashboard.ConsumptionExpandedLockedColumns.then(
			(LockedColumn) => {
				const LockedColumnValue = LockedColumn.text();
				expect(LockedColumnValue, 'Deployment');
			},
		);

		ConsumptionDashboard.ConsumptionExpandedVisibleColumns.each((item) => {
			cy.wrap(item).then((Values) => {
				const VisibleColumn = Values.text();
				expect(VisibleColumn, 'VisibleColumnNames').to.be.oneOf([
					'Capacity Type',
					'Service Name',
					'Total Capacity',
					'Reserve Capacity',
					'On-Demand Capacity',
					'Last Reported Usage',
					'Avg. Consumption',
				]);
			});

			ConsumptionDashboard.ConsumptionExpandedHiddenColumns.then(
				(HiddenColumn) => {
					const HiddenColumnValue = HiddenColumn.text();
					expect(HiddenColumnValue, 'Service Category');
				},
			);
		});
	},
);

When(
	'In Expanded consumption section, Validate the User can edit the column details in the Edit Columns popup',
	() => {
		// Click on the Checkbox for the column header - Service Category
		ConsumptionDashboard.ConsumptionExpandedHiddenColumnsCheckBox.click({
			force: true,
		});

		// Validate whether Apply Button is displayed or not
		ConsumptionDashboard.ConsumptionExpandedApplybutton.as('ApplyButton');
		cy.get('@ApplyButton').should('be.visible');

		//Click on the Apply button
		ConsumptionDashboard.ConsumptionExpandedApplybutton.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionExpandedTableHeaders.should(
			'be.visible',
		);
		ConsumptionDashboard.ConsumptionExpandedTableHeaders.should(
			'have.length',
			9,
		);

		// Validate all the column headers displayed in the table,
		ConsumptionDashboard.ConsumptionExpandedTableHeaders.each((item) => {
			cy.wrap(item).then((Values) => {
				const TableColumnnames = Values.text();
				expect(TableColumnnames, 'ColumnNames').to.be.oneOf([
					'Capacity Type',
					'Service Name',
					'Total Capacity',
					'Reserve Capacity',
					'On-Demand Capacity',
					'Last Reported Usage',
					'Avg. Consumption',
					'Service Category',
					'Deployment',
				]);
			});
		});
	},
);

When(
	'In Expanded consumption section, Validate that when the user clicks on the Restore Defaults button, only default columns are displayed in the table',
	() => {
		// Go to the Edit Columns pop up and then click on the Restore Defaults button
		ConsumptionDashboard.ConsumptionExpandedMenuComponent.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionExpandedHideorShowColumns.as(
			'HideorShowColumns',
		);
		cy.get('@HideorShowColumns').should('be.visible');
		ConsumptionDashboard.ConsumptionExpandedHideorShowColumns.click({
			force: true,
		});
		// Validate the Pop up Header
		ConsumptionDashboard.ConsumptionExpandedEditColumnsHeader.as(
			'EditColumnsPopup',
		);
		cy.get('@EditColumnsPopup').should('be.visible');

		// Click on the Restore Defaults button
		ConsumptionDashboard.ConsumptionExpandedRestoredefaultsbutton.click({
			force: true,
		});

		ConsumptionDashboard.ConsumptionExpandedTableHeaders.should(
			'be.visible',
		);
		ConsumptionDashboard.ConsumptionExpandedTableHeaders.should(
			'have.length',
			8,
		);

		// Validate all the column headers displayed in the table,
		ConsumptionDashboard.ConsumptionExpandedTableHeaders.each((item) => {
			cy.wrap(item).then((Values) => {
				const TableColumnnames = Values.text();
				expect(TableColumnnames, 'ColumnNames').to.be.oneOf([
					'Capacity Type',
					'Service Name',
					'Total Capacity',
					'Reserve Capacity',
					'On-Demand Capacity',
					'Last Reported Usage',
					'Avg. Consumption',
					'Deployment',
				]);
			});
		});
	},
);

When(
	'In Expanded consumption section, Validate the Filter options displayed within the GroupBy filter',
	() => {
		//Click on the Group by filter field
		ConsumptionDashboard.ConsumptionExpandedGroupByFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionExpandedGroupByFilter_ServiceName.should(
			'be.visible',
		);
		ConsumptionDashboard.ConsumptionExpandedGroupByFilter_Subscription.should(
			'be.visible',
		);
		ConsumptionDashboard.ConsumptionExpandedGroupByFilter_Location.should(
			'be.visible',
		);
	},
);

When(
	'In Expanded consumption section, Validate whether Location and Consumption model details are displayed when Subscription filter is applied',
	() => {
		//Click on the Group by filter field
		ConsumptionDashboard.ConsumptionExpandedGroupByFilter_Subscription.click(
			{ force: true },
		);
		ConsumptionDashboard.ConsumptionExpandedTableData.should('be.visible');
		ConsumptionDashboard.ConsumptionExpandedTableLocationFieldName.should(
			'be.visible',
		);
		ConsumptionDashboard.ConsumptionExpandedTableLocationFielddata.should(
			'be.visible',
		);
		ConsumptionDashboard.ConsumptionExpandedTableConsumptionModelFieldName.should(
			'be.visible',
		);
		ConsumptionDashboard.ConsumptionExpandedTableConsumptionModelFielddata.should(
			'be.visible',
		);

		//Click on the link - Back to Cisco+Contracts
		ConsumptionDashboard.BacktoCiscoContractsTab.click({ force: true });
		ConsumptionDashboard.CustomerNamewithinCustomersFacet.as(
			'Customerdetail',
		);
		cy.get('@Customerdetail').should('be.visible');
	},
);

//**************Charges section - Expanded ********************************

Then(
	'In Expanded charges section, Validate whether the Capacity types are displayed in the form of buttons',
	() => {
		//Validate whether the consumption section header is displayed
		ConsumptionDashboard.ConsumptionTab.click({ force: true });
		ConsumptionDashboard.ConsumptionHeader.as('ConsumptionHeader');
		cy.get('@ConsumptionHeader').should('be.visible');

		// Select Time Period - Last 18 Months
		// Click on the Period filter and then select the option 18 Months
		ConsumptionDashboard.ChargesSectionTimePeriodFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionTimePeriodFilterLast18Months.as(
			'PeriodOption',
		);
		cy.get('@PeriodOption').should('be.visible');
		ConsumptionDashboard.ChargesSectionTimePeriodFilterLast18Months.click({
			force: true,
		});

		// validate whether Chart is displayed within the Charges section
		ConsumptionDashboard.ChargesSectionChart.as('Chart');
		cy.get('@Chart').should('be.visible');

		//Click on the Expand button
		ConsumptionDashboard.ChargesSection_ExpandButton.click({ force: true });
		ConsumptionDashboard.ChargesSection_CollapseButton.as('CollapseButton');
		cy.get('@CollapseButton').should('be.visible');

		ConsumptionDashboard.ChargesExpandedCapacitytypeFilterButtons.as(
			'CapacitytypeButtons',
		);
		cy.get('@CapacitytypeButtons').should('be.visible');
	},
);

When(
	'In Expanded charges section, Validate whether the Filter Label is displayed or not',
	() => {
		//Validate whether Filter label is displayed or not
		ConsumptionDashboard.ChargesExpandedFilterLabel.as('FilterLabel');
		cy.get('@FilterLabel').should('be.visible');
		ConsumptionDashboard.ChargesExpandedFilterLabel.should(
			'contain.text',
			'Which capacity type do you want to focus on?',
		);
	},
);

When(
	'In Expanded charges section, Validate whether the Charged Units details are displayed beneath the Chart',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedDetailsHeader.as(
			'DetailsHeader',
		);
		cy.get('@DetailsHeader').should('be.visible');

		ConsumptionDashboard.ChargesSectionExpandedChargesDetails.each(
			(item) => {
				cy.wrap(item).then((Values) => {
					const CapacityType = Values.text();
					expect(CapacityType, 'CapacityTypes').to.be.oneOf([
						'vMemory',
						'vStorage',
						'Switches',
						'Nodes',
						'Storage',
						'Ports',
					]);
				});
			},
		);
	},
);

When(
	'In Expanded charges section, Validate that when the user clicks on the Up Arrow, only Charged units breakdown section is displayed',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedUpArrow.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedDownArrow.as('DownArrow');
		cy.get('@DownArrow').should('be.visible');

		//Validate whether chart section is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedChargedUnitsChart.should(
			'not.exist',
		);

		//Validate whether Charged units breakdown section is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedChargedunitsBreakdownHeader.should(
			'be.visible',
		);
	},
);

When(
	'In Expanded charges section, Validate that when the user clicks on the down Arrow, both charged Units breakdown section and charts are displayed',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedDownArrow.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedUpArrow.as('UpArrow');
		cy.get('@UpArrow').should('be.visible');

		//Validate whether chart section is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedChargedUnitsChart.should(
			'be.visible',
		);

		//Validate whether Charged Units breakdown section is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedChargedunitsBreakdownHeader.should(
			'be.visible',
		);
	},
);

When(
	'In Expanded charges section with Charged Units selected, Validate that when the user clicks on the Menu Component, two options are displayed or not',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedMenuComponent.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedExporttoExcel.as(
			'ExporttoExcel',
		);
		cy.get('@ExporttoExcel').should('be.visible');
		ConsumptionDashboard.ChargesSectionExpandedHideorShowColumns.as(
			'HideorShowColumns',
		);
		cy.get('@HideorShowColumns').should('be.visible');
	},
);

When(
	'In Expanded Charges section with Charged Units selected, Validate that when the user clicks on the Hide or Show Columns button, Edit Columns pop up is shown',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedHideorShowColumns.click({
			force: true,
		});
		// Validate the Pop up Header
		ConsumptionDashboard.ChargesSectionExpandedEditColumnsHeader.as(
			'EditColumnsPopup',
		);
		cy.get('@EditColumnsPopup').should('be.visible');
	},
);

When(
	'In Expanded Charges section with Charged Units selected, Validate the Column Header names displayed in the Edit Columns pop up',
	() => {
		// Validate whether Restore Button is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedRestoreDefaultsButton.as(
			'RestoreButton',
		);
		cy.get('@RestoreButton').should('be.visible');

		//Validate the Column Headers displayed in the Edit Columns pop up
		ConsumptionDashboard.ChargesSectionLockedColumns.then(
			(LockedColumn) => {
				const LockedColumnValue = LockedColumn.text();
				expect(LockedColumnValue, 'Deployment');
			},
		);

		ConsumptionDashboard.ChargesSectionExpandedVisibleColumns.each(
			(item) => {
				cy.wrap(item).then((Values) => {
					const VisibleColumn = Values.text();
					expect(VisibleColumn, 'VisibleColumnNames').to.be.oneOf([
						'Capacity Type',
						'Service Category',
						'Service Name',
						'Reserve Units',
						'On Demand Units',
						'Total Units',
					]);
				});
			},
		);
	},
);

When(
	'In Expanded Charges section with Charged Units selected, Validate the User can edit the column details in the Edit Columns popup',
	() => {
		// Un Check the Total Units checkbox
		ConsumptionDashboard.ChargesSectionExpandedTotalUnitsCheckBox.click({
			force: true,
		});

		// Click on the Apply button
		ConsumptionDashboard.ChargesSectionExpandedApplyButton.as(
			'ApplyButton',
		);
		cy.get('@ApplyButton').should('be.visible');
		ConsumptionDashboard.ChargesSectionExpandedApplyButton.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.should(
			'have.length',
			6,
		);

		// Validate all the column headers displayed in the table,
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.each((item) => {
			cy.wrap(item).then((Values) => {
				const TableColumnnames = Values.text();
				expect(TableColumnnames, 'ColumnNames').to.be.oneOf([
					'Capacity Type',
					'Service Category',
					'Service Name',
					'Reserve Units',
					'On Demand Units',
					'Deployment',
				]);
			});
		});
	},
);

When(
	'In Expanded Charges section with Charged Units selected, Validate that when the user clicks on the Restore Defaults button, only default columns are displayed in the table',
	() => {
		// Go to the Edit Columns pop up and then click on the Restore Defaults button
		ConsumptionDashboard.ChargesSectionExpandedMenuComponent.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedHideorShowColumns.as(
			'HideorShowColumns',
		);
		cy.get('@HideorShowColumns').should('be.visible');
		ConsumptionDashboard.ChargesSectionExpandedHideorShowColumns.click({
			force: true,
		});
		// Validate the Pop up Header
		ConsumptionDashboard.ChargesSectionExpandedEditColumnsHeader.as(
			'EditColumnsPopup',
		);
		cy.get('@EditColumnsPopup').should('be.visible');

		// Validate if hidden column names are displayed
		ConsumptionDashboard.ChargesSectionExpandedHiddenColumns.as(
			'HiddenColumns',
		);
		cy.get('@HiddenColumns').should('be.visible');

		// Click on the Restore Defaults button
		ConsumptionDashboard.ChargesSectionExpandedRestoreDefaultsButton.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.should(
			'have.length',
			7,
		);

		// Validate all the column headers displayed in the table,
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.each((item) => {
			cy.wrap(item).then((Values) => {
				const TableColumnnames = Values.text();
				expect(TableColumnnames, 'ColumnNames').to.be.oneOf([
					'Capacity Type',
					'Service Category',
					'Service Name',
					'Reserve Units',
					'On Demand Units',
					'Deployment',
					'Total Units',
				]);
			});
		});
	},
);

When(
	'In Expanded Charges section with Charged Units selected, Validate the Filter options displayed within the GroupBy filter',
	() => {
		//Click on the Group by filter field
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter_ServiceName.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter_Subscription.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter_Location.should(
			'be.visible',
		);
	},
);

When(
	'In Expanded Charges section with Charged Units selected, Validate whether Location and Invoice day details are displayed when Subscription filter is applied',
	() => {
		//Click on the Group by filter field
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter_Subscription.click(
			{ force: true },
		);
		ConsumptionDashboard.ChargesSectionExpandedTableData.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableLocationFieldName.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableLocationFielddata.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableInvoicedayFieldName.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableInvoicedayFielddata.should(
			'be.visible',
		);
	},
);

//************ Charged Amounts option selected - Charged Units Expanded ************
When(
	'In Expanded Charges section with Charged Amounts selected, Validate whether Show Capacity type breakdown option is displayed or not',
	() => {
		// Click on the Charged units or Charged Amounts filter
		ConsumptionDashboard.ChargesSectionExpandedUnitsorAmountsFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterChargedAmount.as(
			'ChargedAmountsFilter',
		);
		cy.get('@ChargedAmountsFilter').should('be.visible');
		ConsumptionDashboard.ChargesSectionUnitsorAmountsFilterChargedAmount.click(
			{ force: true },
		);

		ConsumptionDashboard.ChargesSectionExpandedShowCapacitytypeCheckbox.as(
			'CheckboxBreakdown',
		);
		cy.get('@CheckboxBreakdown').should('be.visible');
	},
);

When(
	'In Expanded Charges section with Charged Amounts selected, Validate that when the user clicks on the Show Capacity type breakdown checkbox, Capacity type brakdown details are displayed in the Chart',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedShowCapacitytypeCheckbox.click(
			{ force: true },
		);
		ConsumptionDashboard.ChargesSectionChargedAmountExpandedChartLegend.as(
			'ChartLegendBreakdown',
		);
		cy.get('@ChartLegendBreakdown').should('be.visible');

		//Validate the Legend Names displayed in the Chart
		ConsumptionDashboard.ChargesSectionChargedAmountExpandedChartLegend.each(
			(item) => {
				cy.wrap(item).then((Values) => {
					const Legendnames = Values.text().trim();
					expect(Legendnames, 'ChartLegends').to.be.oneOf([
						'vMemory',
						'vStorage',
						'Switches',
						'Nodes',
						'Storage',
						'Ports',
					]);
				});
			},
		);
	},
);

When(
	'In Expanded charges section, Validate whether the Charged Amount details are displayed beneath the Chart',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedDetailsHeader.as(
			'DetailsHeader',
		);
		cy.get('@DetailsHeader').should('be.visible');

		ConsumptionDashboard.ChargesSectionExpandedChargesDetails.each(
			(item) => {
				cy.wrap(item).then((Values) => {
					const ChargedAmountDetails = Values.text().trim();
					expect(ChargedAmountDetails, 'AmountDetails').to.be.oneOf([
						'Total Amount',
						'Reserve Charges',
						'On-Demand Charges',
					]);
				});
			},
		);
	},
);

When(
	'In Expanded charges section, Validate that when the user clicks on the Up Arrow, only Charged Amounts breakdown section is displayed',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedUpArrow.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedDownArrow.as('DownArrow');
		cy.get('@DownArrow').should('be.visible');

		//Validate whether chart section is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedChargedAmountsChart.should(
			'not.exist',
		);

		//Validate whether Charged Amounts breakdown section is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedChargesBreakdownHeader.should(
			'be.visible',
		);
	},
);

When(
	'In Expanded charges section, Validate that when the user clicks on the down Arrow, both charges breakdown section and charged Amounts chart are displayed',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedDownArrow.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedUpArrow.as('UpArrow');
		cy.get('@UpArrow').should('be.visible');

		//Validate whether chart section is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedChargedAmountsChart.should(
			'be.visible',
		);

		//Validate whether Charged Units breakdown section is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedChargesBreakdownHeader.should(
			'be.visible',
		);
	},
);

When(
	'In Expanded charges section with Charged Amounts selected, Validate that when the user clicks on the Menu Component, two options are displayed or not',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedMenuComponent.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedExporttoExcel.as(
			'ExporttoExcel',
		);
		cy.get('@ExporttoExcel').should('be.visible');
		ConsumptionDashboard.ChargesSectionExpandedHideorShowColumns.as(
			'HideorShowColumns',
		);
		cy.get('@HideorShowColumns').should('be.visible');
	},
);

When(
	'In Expanded Charges section with Charged Amounts selected, Validate that when the user clicks on the Hide or Show Columns button, Edit Columns pop up is shown',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedHideorShowColumns.click({
			force: true,
		});
		// Validate the Pop up Header
		ConsumptionDashboard.ChargesSectionExpandedEditColumnsHeader.as(
			'EditColumnsPopup',
		);
		cy.get('@EditColumnsPopup').should('be.visible');
	},
);

When(
	'In Expanded Charges section with Charged Amounts selected, Validate the Column Header names displayed in the Edit Columns pop up',
	() => {
		// Validate whether Restore Button is displayed or not
		ConsumptionDashboard.ChargesSectionExpandedRestoreDefaultsButton.as(
			'RestoreButton',
		);
		cy.get('@RestoreButton').should('be.visible');

		//Validate the Column Headers displayed in the Edit Columns pop up
		ConsumptionDashboard.ChargesSectionLockedColumns.then(
			(LockedColumn) => {
				const LockedColumnValue = LockedColumn.text();
				expect(LockedColumnValue, 'Deployment');
			},
		);

		ConsumptionDashboard.ChargesSectionExpandedVisibleColumns.each(
			(item) => {
				cy.wrap(item).then((Values) => {
					const VisibleColumn = Values.text();
					expect(VisibleColumn, 'VisibleColumnNames').to.be.oneOf([
						'Capacity Type',
						'Service Category',
						'Service Name',
						'Reserve Charges',
						'On Demand Charges',
						'Total Charges',
					]);
				});
			},
		);
	},
);

When(
	'In Expanded Charges section with Charged Amounts selected, Validate the User can edit the column details in the Edit Columns popup',
	() => {
		// Un Check the Total Units checkbox
		ConsumptionDashboard.ChargesSectionExpandedTotalChargesCheckBox.click({
			force: true,
		});

		// Click on the Apply button
		ConsumptionDashboard.ChargesSectionExpandedApplyButton.as(
			'ApplyButton',
		);
		cy.get('@ApplyButton').should('be.visible');
		ConsumptionDashboard.ChargesSectionExpandedApplyButton.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.should(
			'have.length',
			6,
		);

		// Validate all the column headers displayed in the table,
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.each((item) => {
			cy.wrap(item).then((Values) => {
				const TableColumnnames = Values.text();
				expect(TableColumnnames, 'ColumnNames').to.be.oneOf([
					'Capacity Type',
					'Service Category',
					'Service Name',
					'Reserve Charges',
					'On Demand Charges',
					'Deployment',
				]);
			});
		});
	},
);

When(
	'In Expanded Charges section with Charged Amounts selected, Validate that when the user clicks on the Restore Defaults button, only default columns are displayed in the table',
	() => {
		// Go to the Edit Columns pop up and then click on the Restore Defaults button
		ConsumptionDashboard.ChargesSectionExpandedMenuComponent.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedHideorShowColumns.as(
			'HideorShowColumns',
		);
		cy.get('@HideorShowColumns').should('be.visible');
		ConsumptionDashboard.ChargesSectionExpandedHideorShowColumns.click({
			force: true,
		});
		// Validate the Pop up Header
		ConsumptionDashboard.ChargesSectionExpandedEditColumnsHeader.as(
			'EditColumnsPopup',
		);
		cy.get('@EditColumnsPopup').should('be.visible');

		// Validate if hidden column names are displayed
		ConsumptionDashboard.ChargesSectionExpandedHiddenColumns.as(
			'HiddenColumns',
		);
		cy.get('@HiddenColumns').should('be.visible');

		// Click on the Restore Defaults button
		ConsumptionDashboard.ChargesSectionExpandedRestoreDefaultsButton.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.should(
			'have.length',
			7,
		);

		// Validate all the column headers displayed in the table,
		ConsumptionDashboard.ChargesSectionExpandedTableHeaders.each((item) => {
			cy.wrap(item).then((Values) => {
				const TableColumnnames = Values.text();
				expect(TableColumnnames, 'ColumnNames').to.be.oneOf([
					'Capacity Type',
					'Service Category',
					'Service Name',
					'Reserve Charges',
					'On Demand Charges',
					'Deployment',
					'Total Charges',
				]);
			});
		});
	},
);

When(
	'In Expanded Charges section with Charged Amounts selected, Validate the Filter options displayed within the GroupBy filter',
	() => {
		//Click on the Group by filter field
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter_ServiceName.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter_Subscription.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter_Location.should(
			'be.visible',
		);
	},
);

When(
	'In Expanded Charges section with Charged Amounts selected, Validate whether Location,Invoice day and Charged Amount details are displayed when Subscription filter is applied',
	() => {
		ConsumptionDashboard.ChargesSectionExpandedGroupByFilter_Subscription.click(
			{ force: true },
		);
		ConsumptionDashboard.ChargesSectionExpandedTableData.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableLocationFieldName.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableLocationFielddata.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableInvoicedayFieldName.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableInvoicedayFielddata.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableTotalChargesFieldName.should(
			'be.visible',
		);
		ConsumptionDashboard.ChargesSectionExpandedTableTotalChargesFielddata.should(
			'be.visible',
		);

		//Click on the link - Back to Cisco+Contracts
		ConsumptionDashboard.BacktoCiscoContractsTab.click({ force: true });
		ConsumptionDashboard.CustomerNamewithinCustomersFacet.as(
			'Customerdetail',
		);
		cy.get('@Customerdetail').should('be.visible');
	},
);

// Charges - 360

Then(
	'In Expanded charges section, Validate whether Charges 360 is displayed when the user clicks on any of the deployment details displayed in Charged units breakdown section',
	() => {
		//Validate whether the consumption section header is displayed
		ConsumptionDashboard.ConsumptionTab.click({ force: true });
		ConsumptionDashboard.ConsumptionHeader.as('ConsumptionHeader');
		cy.get('@ConsumptionHeader').should('be.visible');

		// Select Time Period - Last 18 Months
		// Click on the Period filter and then select the option 18 Months
		ConsumptionDashboard.ChargesSectionTimePeriodFilter.click({
			force: true,
		});
		ConsumptionDashboard.ChargesSectionTimePeriodFilterLast18Months.as(
			'PeriodOption',
		);
		cy.get('@PeriodOption').should('be.visible');
		ConsumptionDashboard.ChargesSectionTimePeriodFilterLast18Months.click({
			force: true,
		});

		// validate whether Chart is displayed within the Charges section
		ConsumptionDashboard.ChargesSectionChart.as('Chart');
		cy.get('@Chart').should('be.visible');

		//Click on the Expand button
		ConsumptionDashboard.ChargesSection_ExpandButton.click({ force: true });
		ConsumptionDashboard.ChargesSection_CollapseButton.as('CollapseButton');
		cy.get('@CollapseButton').should('be.visible');

		// Click on the deployment displayed to open up the charges 360
		ConsumptionDashboard.ChargedUnitsBreakdownsectiondata.each(
			(item, index) => {
				cy.wrap(item).then((ReservedUnits) => {
					const ReservedUnitsData = ReservedUnits.text()
						.replace(' ', '')
						.trim();

					if (!(ReservedUnitsData == '0')) {
						ConsumptionDashboard.ChargedUnitsBreakdownsectiondata.eq(
							index,
						).click({ force: true });
					}
				});
			},
		);
		//Validate whether Charges 360 is displayed or not
		ConsumptionDashboard.Charges360HeaderText.should('be.visible');
	},
);

When(
	'In Charges 360, Validate whether Capacity type and Service category type are displayed in the Charges 360',
	() => {
		ConsumptionDashboard.Charges360CapacityType.should('be.visible');
		ConsumptionDashboard.Charges360CapacityType.each((item) => {
			cy.wrap(item).then((Values) => {
				const CapacityType = Values.text().split(' ')[3];
				const ServiceCategory = Values.text().split(' ')[1];
				expect(CapacityType, 'CapacityTypeData').to.be.oneOf([
					'vMemory',
					'vStorage',
					'Switches',
					'Nodes',
					'Storage',
					'Ports',
				]);
				expect(ServiceCategory, 'ServiceCategoryData').to.be.oneOf([
					'All Service Categories',
					'Networking',
					'Hyperflex',
					'Nexus Swithces',
				]);
			});
		});
	},
);

When(
	'In Charges 360, Validate whether part of Subscription detail gets displayed in the Charges 360',
	() => {
		ConsumptionDashboard.Charges360PartofSubscription.should('be.visible');
	},
);

When(
	'In Charges 360, Validate whether the Header - About gets displayed in the Charges 360',
	() => {
		ConsumptionDashboard.Charges360AboutHeader.should(
			'contain.text',
			'About',
		);
	},
);

When(
	'In Charges 360, Validate the details displayed within the About Section',
	() => {
		// Validate the Field Names and data displayed within the About section
		ConsumptionDashboard.Charges360FieldNameServiceCategory.should(
			'contain.text',
			'Service Category',
		);
		ConsumptionDashboard.Charges360ServiceCategoryFieldData.then(
			(ServiceCategoryFieldData) => {
				const ServiceCategory = ServiceCategoryFieldData.text().trim();
				expect(ServiceCategory, 'ServiceCategoryData').to.be.oneOf([
					'All Service Categories',
					'Networking',
					'Hyperflex',
				]);
			},
		);

		ConsumptionDashboard.Charges360FieldNameCapacityType.should(
			'contain.text',
			'Capacity Type',
		);
		ConsumptionDashboard.Charges360CapacityTypeFieldData.then(
			(CapaityTypeFieldData) => {
				const CapacityType = CapaityTypeFieldData.text().trim();
				expect(CapacityType, 'CapacityTypeData').to.be.oneOf([
					'vMemory',
					'vStorage',
					'Switches',
					'Nodes',
					'Storage',
					'Ports',
				]);
			},
		);

		ConsumptionDashboard.Charges360FieldNameServiceName.should(
			'contain.text',
			'Service Name',
		);
		ConsumptionDashboard.Charges360ServiceNameFieldData.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameReserveRate.should(
			'contain.text',
			'Reserve Rate',
		);
		ConsumptionDashboard.Charges360ReserveRateFieldData.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameOnDemandRate.should(
			'contain.text',
			'On-Demand Rate',
		);
		ConsumptionDashboard.Charges360OnDemandRateFieldData.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameInvoiceDay.should(
			'contain.text',
			'Invoice Day',
		);
		ConsumptionDashboard.Charges360InvoiceDayFieldData.should('be.visible');
	},
);

When(
	'In Charges 360, Validate the details displayed within the Charges Breakdown Section',
	() => {
		// Validate whether Charges Breakdown header is displayed in the Charges 360
		ConsumptionDashboard.Charges360ChargesBreakdownHeader.should(
			'contain.text',
			'Charges Breakdown',
		);

		//Validate the details displayed within the Charges Breakdown section
		ConsumptionDashboard.Charges360ChargesBreakTimeframeFilter.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameInvoiceNumber.should(
			'contain.text',
			'Invoice Number',
		);
		ConsumptionDashboard.Charges360InvoiceNumberFieldData.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameTotalCharges.should(
			'contain.text',
			'Total Charges',
		);
		ConsumptionDashboard.Charges360TotalChargesFieldData.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameReserveCharges.should(
			'contain.text',
			'Reserve Charges',
		);
		ConsumptionDashboard.Charges360ReserveChargesFieldData.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameOnDemandCharges.should(
			'contain.text',
			'On-Demand Charges',
		);
		ConsumptionDashboard.Charges360OnDemandChargesFieldData.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameTotalChargedUnits.should(
			'contain.text',
			'Total Charged Units',
		);
		ConsumptionDashboard.Charges360TotalChargedUnitsFieldData.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameReserveUnits.should(
			'contain.text',
			'Reserve Units',
		);
		ConsumptionDashboard.Charges360ReserveUnitsFieldData.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360FieldNameOnDemandUnits.should(
			'contain.text',
			'On-Demand Units',
		);
		ConsumptionDashboard.Charges360OnDemandUnitsFieldData.should(
			'be.visible',
		);
	},
);

When(
	'In Charges 360, Validate the bar chart displayed within the Charges Breakdown Section',
	() => {
		// Validate whether Chart is displayed in Charges 360
		ConsumptionDashboard.Charges360Chart.should('be.visible');

		//Validate the X-axis and Y-axis details
		ConsumptionDashboard.Charges360ChartYAxis.then((ChartYaxis) => {
			const ChartYaxisdata = ChartYaxis.text().trim();
			expect(ChartYaxisdata, 'YaxisValue').to.be.oneOf([
				'Actual vMemory Used',
				'Actual vStorage Used',
				'Actual Switches Used',
				'Actual Ports Used',
				'Actual Storage Used',
				'Actual Nodes Used',
			]);
		});

		ConsumptionDashboard.Charges360ChartXAxis.then((ChartXaxis) => {
			const ChartXaxisdata = ChartXaxis.text().split(' ')[0];
			expect(ChartXaxisdata, 'XaxisValue').to.be.oneOf([
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			]);
		});
	},
);

When(
	'In Charges 360, Validate the legends in the chart displayed within the Charges Breakdown Section',
	() => {
		ConsumptionDashboard.Charges360ReserveUsageChartLegend.should(
			'contain.text',
			'Reserve Usage',
		);
		ConsumptionDashboard.Charges360OnDemandUsageChartLegend.should(
			'contain.text',
			'On-Demand Usage',
		);
	},
);

When(
	'In Charges 360, Validate the View Full Consumption Details link displayed in the Charges Breakdown section',
	() => {
		ConsumptionDashboard.Charges360ViewConsumptionDetailsLink.should(
			'be.visible',
		);
		ConsumptionDashboard.Charges360ViewConsumptionDetailsLink.click({
			force: true,
		});

		//Validate whether Consumption 360 is displayed
		ConsumptionDashboard.Consumption360Header.should('be.visible');

		//Click on the back button in Consumption 360
		ConsumptionDashboard.Consumption360BackButton.should('be.visible');
		ConsumptionDashboard.Consumption360BackButton.click({ force: true });

		//Validate whether Charges 360 is displayed
		ConsumptionDashboard.Charges360ChargesBreakdownHeader.should(
			'be.visible',
		);
	},
);

When(
	'In Charges 360, Validate the details displayed within the Recent Charges section',
	() => {
		cy.scrollTo('bottom');
		// Validate whether Recent Charges header is displayed or not
		ConsumptionDashboard.Charges360RecentChargesHeader.should(
			'contain.text',
			'Recent Charges',
		);

		ConsumptionDashboard.Charges360RecentChargesReserveUnitsFieldName.scrollIntoView();

		// Validate the details displayed in the Recent Charges Section
		ConsumptionDashboard.Charges360RecentChargesTotalChargesFieldName.should(
			'contain.text',
			'Total Charge:',
		);
		ConsumptionDashboard.Charges360RecentChargesTotalChargesFielddata.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360RecentChargesReserveChargesFieldName.should(
			'contain.text',
			'Reserve Charges',
		);
		ConsumptionDashboard.Charges360RecentChargesReserveChargesFielddata.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360RecentChargesOnDemandChargesFieldName.should(
			'contain.text',
			'On-Demand Charges',
		);
		ConsumptionDashboard.Charges360RecentChargesOnDemandChargesFielddata.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360RecentChargesReserveUnitsFieldName.should(
			'contain.text',
			'Reserve Units',
		);
		ConsumptionDashboard.Charges360RecentChargesReserveUnitsFielddata.should(
			'be.visible',
		);

		ConsumptionDashboard.Charges360RecentChargesOnDemandUnitsFieldName.should(
			'contain.text',
			'On-Demand Units',
		);
		ConsumptionDashboard.Charges360RecentChargesOnDemandUnitsFielddata.should(
			'be.visible',
		);

		//Click on the link - Back to Cisco+Contracts
		ConsumptionDashboard.BacktoCiscoContractsTab.scrollIntoView();
		ConsumptionDashboard.BacktoCiscoContractsTab.click({ force: true });
		ConsumptionDashboard.CustomerNamewithinCustomersFacet.as(
			'Customerdetail',
		);
		cy.get('@Customerdetail').should('be.visible');
	},
);

Then(
	'In Expanded consumption section, Validate whether Consumption 360 is displayed when the user clicks on any of the deployment details displayed in the Usage breakdown section',
	() => {
		//Validate whether the consumption section header is displayed
		ConsumptionDashboard.ConsumptionTab.click({ force: true });
		ConsumptionDashboard.ConsumptionHeader.as('ConsumptionHeader');
		cy.get('@ConsumptionHeader').should('be.visible');

		// Select Time Period - Last 18 Months
		// Click on the Period filter and then select the option 18 Months
		ConsumptionDashboard.ConsumptionSectionPeriodFilter.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionPeriodLast18Months.as(
			'PeriodOption',
		);
		cy.get('@PeriodOption').should('be.visible');
		ConsumptionDashboard.ConsumptionSectionPeriodLast18Months.click({
			force: true,
		});

		// validate whether Map is displayed within the Consumption section
		ConsumptionDashboard.ConsumptionSectionMap.as('Map');
		cy.get('@Map').should('be.visible');

		//Click on the Expand button
		ConsumptionDashboard.ConsumptionSectionExpandButton.should(
			'be.visible',
		);
		ConsumptionDashboard.ConsumptionSectionExpandButton.click({
			force: true,
		});
		ConsumptionDashboard.ConsumptionSectionCollapseButton.as(
			'CollapseButton',
		);
		cy.get('@CollapseButton').should('be.visible');

		// Click on the deployment displayed to open up the consumption 360
		ConsumptionDashboard.Consumptionsectiondata.each((item, index) => {
			cy.wrap(item).then((ReserveCapacity) => {
				const ReservedCapacityData = ReserveCapacity.text()
					.replace(' ', '')
					.trim();

				if (!(ReservedCapacityData == '0')) {
					ConsumptionDashboard.Consumptionsectiondata.eq(index).click(
						{ force: true },
					);
				}
			});
		});
		//Validate whether Consumption 360 is displayed or not
		ConsumptionDashboard.Consumption360HeaderText.should('be.visible');
	},
);

When(
	'In Consumption 360, Validate whether Capacity type and Service category type are displayed in the Consumption 360',
	() => {
		ConsumptionDashboard.Consumption360CapacityType.should('be.visible');
		ConsumptionDashboard.Consumption360CapacityType.each((item) => {
			cy.wrap(item).then((Values) => {
				const CapacityType = Values.text().split(' ')[3];
				const ServiceCategory = Values.text().split(' ')[1];
				expect(CapacityType, 'CapacityTypeData').to.be.oneOf([
					'vMemory',
					'vStorage',
					'Switches',
					'Nodes',
					'Storage',
					'Ports',
					'Vmemory',
					'Vstorage',
				]);
				expect(ServiceCategory, 'ServiceCategoryData').to.be.oneOf([
					'All Service Categories',
					'Networking',
					'Hyperflex',
					'Nexus Swithces',
				]);
			});
		});
	},
);

When(
	'In Consumption 360, Validate whether Capacity type and Service category type are displayed in the Consumption 360',
	() => {
		ConsumptionDashboard.Consumption360CapacityType.should('be.visible');
		ConsumptionDashboard.Consumption360CapacityType.each((item) => {
			cy.wrap(item).then((Values) => {
				const CapacityType = Values.text().split(' ')[3];
				const ServiceCategory = Values.text().split(' ')[1];
				expect(CapacityType, 'CapacityTypeData').to.be.oneOf([
					'vMemory',
					'vStorage',
					'Switches',
					'Nodes',
					'Storage',
					'Ports',
					'Vmemory',
					'Vstorage',
				]);
				expect(ServiceCategory, 'ServiceCategoryData').to.be.oneOf([
					'All Service Categories',
					'Networking',
					'Hyperflex',
					'Nexus Swithces',
				]);
			});
		});
	},
);

When(
	'In Consumption 360, Validate whether part of Subscription detail gets displayed in the Consumption 360',
	() => {
		ConsumptionDashboard.Consumption360PartofSubscription.should(
			'be.visible',
		);
	},
);

When(
	'In Consumption 360, Validate whether the Header About gets displayed in the Consumption 360',
	() => {
		ConsumptionDashboard.Consumption360AboutHeader.should(
			'contain.text',
			'About',
		);
	},
);

When(
	'In Consumption 360, Validate the details displayed within the About Section',
	() => {
		ConsumptionDashboard.Consumption360ServiceCategoryField.should(
			'contain.text',
			'Service Category',
		);
		ConsumptionDashboard.Consumption360ServiceCategoryData.then(
			(ServiceCategoryFieldData) => {
				const ServiceCategory = ServiceCategoryFieldData.text().trim();
				expect(ServiceCategory, 'ServiceCategoryData').to.be.oneOf([
					'All Service Categories',
					'Networking',
					'Hyperflex',
				]);
			},
		);

		//ConsumptionDashboard.Consumption360CapacityTypeField.should('contain.text','Capacity Type')
		ConsumptionDashboard.Consumption360CapacityTypeData.then(
			(CapaityTypeFieldData) => {
				const CapacityType = CapaityTypeFieldData.text().trim();
				expect(CapacityType, 'CapacityTypeData').to.be.oneOf([
					'vMemory',
					'vStorage',
					'Switches',
					'Nodes',
					'Storage',
					'Ports',
				]);
			},
		);

		ConsumptionDashboard.Consumption360ServiceNameField.should(
			'contain.text',
			'Service Name',
		);
		ConsumptionDashboard.Consumption360ServiceNameData.then(
			(CapaityTypeFieldData) => {
				const CapacityType = CapaityTypeFieldData.text().trim();
				expect(CapacityType, 'CapacityTypeData').to.be.oneOf([
					'Hyperflex',
					' Nexus Switches',
				]);
			},
		);

		ConsumptionDashboard.Consumption360TotalCapacityField.should(
			'contain.text',
			'Total Capacity',
		);
		ConsumptionDashboard.Consumption360TotalCapacityData.should(
			'be.visible',
		);

		ConsumptionDashboard.Consumption360ReserveCapacityField.should(
			'contain.text',
			'Reserve Capacity',
		);
		ConsumptionDashboard.Consumption360ReserveCapacityData.should(
			'be.visible',
		);

		ConsumptionDashboard.Consumption360ReserveCapacityField.should(
			'contain.text',
			'Reserve Capacity',
		);
		ConsumptionDashboard.Consumption360ReserveCapacityData.should(
			'be.visible',
		);

		ConsumptionDashboard.Consumption360OnDemandCapacityField.should(
			'contain.text',
			'On-Demand Capacity',
		);
		ConsumptionDashboard.Consumption360OnDemandCapacityData.should(
			'be.visible',
		);

		ConsumptionDashboard.Consumption360ReservePercentField.should(
			'contain.text',
			'Reserve %',
		);
		ConsumptionDashboard.Consumption360ReservePercentData.should(
			'be.visible',
		);

		ConsumptionDashboard.Consumption360ConsumptionModelField.should(
			'contain.text',
			'Consumption Model',
		);
		ConsumptionDashboard.Consumption360ConsumptionModelData.should(
			'be.visible',
		);

		ConsumptionDashboard.Consumption360LocationField.should(
			'contain.text',
			'Location',
		);
		ConsumptionDashboard.Consumption360LocationData.should('be.visible');
	},
);

When(
	'In Consumption 360, Validate the details displayed within the Consumption Section',
	() => {
		//Validate the details displayed within the Consumptin section
		ConsumptionDashboard.Consumption360ConsumptionHeader.should(
			'contain.text',
			'Consumption',
		);
		ConsumptionDashboard.Consumption360ConsumptionTimeframefield.should(
			'be.visible',
		);

		ConsumptionDashboard.Consumption360TotalUsedField.should(
			'contain.text',
			'Total Used',
		);
		ConsumptionDashboard.Consumption360TotalUsedData.should('be.visible');

		ConsumptionDashboard.Consumption360ReserveUsedField.should(
			'contain.text',
			'Reserve Used',
		);
		ConsumptionDashboard.Consumption360ReserveUsedData.should('be.visible');

		ConsumptionDashboard.Consumption360OnDemandUsedField.should(
			'contain.text',
			'On-Demand Used',
		);
		ConsumptionDashboard.Consumption360OnDemandUsedData.should(
			'be.visible',
		);

		ConsumptionDashboard.Consumption360AverageConsumptionField.should(
			'contain.text',
			'Avg. Consumption',
		);
		ConsumptionDashboard.Consumption360AverageConsumptionData.should(
			'be.visible',
		);

		ConsumptionDashboard.Consumption360AverageConsumptionField.should(
			'contain.text',
			'Avg. Consumption',
		);
		ConsumptionDashboard.Consumption360AverageConsumptionData.should(
			'be.visible',
		);
	},
);

When(
	'In Consumption 360, Validate the chart displayed within the Consumption Section',
	() => {
		ConsumptionDashboard.Consumption360ChartYAxisdata.then((ChartYaxis) => {
			const ChartYaxisData = ChartYaxis.text().trim();
			expect(ChartYaxisData, 'YaxisData').to.be.oneOf([
				'Switches Used',
				'TiB Used',
				'GiB Used',
				'Ports Used',
			]);
		});

		ConsumptionDashboard.Consumption360ChartXAxisdata.then((ChartXaxis) => {
			const ChartXaxisData = ChartXaxis.text().split(' ')[0];
			expect(ChartXaxisData, 'XaxisData').to.be.oneOf([
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			]);
		});
	},
);

When(
	'In Consumption 360, Validate the legends in the chart displayed within the Consumption Section',
	() => {
		ConsumptionDashboard.Consumption360ChartLegendReserveUsage.should(
			'contain.text',
			'Reserve Usage',
		);
		ConsumptionDashboard.Consumption360ChartLegendOnDemandUsage.should(
			'contain.text',
			'On-Demand Usage',
		);
	},
);

When(
	'In Consumption 360, Validate whether Associated Assets section is displayed or not',
	() => {
		ConsumptionDashboard.Consumption360AssociatedAssetsHeader.should(
			'contain.text',
			'Associated Assets',
		);

		//Click on the link - Back to Cisco+Contracts
		ConsumptionDashboard.BacktoCiscoContractsTab.scrollIntoView();
		ConsumptionDashboard.BacktoCiscoContractsTab.click({ force: true });
		ConsumptionDashboard.CustomerNamewithinCustomersFacet.as(
			'Customerdetail',
		);
		cy.get('@Customerdetail').should('be.visible');
	},
);
