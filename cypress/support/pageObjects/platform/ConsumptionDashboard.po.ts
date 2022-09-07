class ConsumptionDashboard {
	get CustomerNamewithinCustomersFacet() {
		return cy.get(
			"[data-auto-id='ContractsCiscoPlusTable'] tbody  tr:nth-child(1) td:nth-child(1) >span",
		);
	}

	get ConsumptionTab() {
		return cy.get('span').contains('Consumption');
	}

	// Consumption section - Collapsed form
	get ConsumptionHeader() {
		return cy.get(
			"[data-auto-id='consumption-container'] cx-portal-panel-header >div >span",
		);
	}

	get ConsumptionSectionMap() {
		return cy.get("[data-auto-id='consumption-summary-map']");
	}

	get ConsumptionSectionMapButton1() {
		return cy.get("[title='Zoom in']");
	}

	get ConsumptionSectionMapButton2() {
		return cy.get("[title='Zoom out']");
	}

	get ConsumptionSectionMapButton3() {
		return cy.get("[title='Reset bearing to north']");
	}

	get ConsumptionSectionMapFullview() {
		return cy.get("[title='Enter fullscreen']");
	}

	get ConsumptionSectionMapExitFullView() {
		return cy.get("[title='Exit fullscreen']");
	}

	get ConsumptionSectionCategoriesFilter() {
		return cy.get(
			".consumption-panel [cxportalphraseblock='technologyType'] > input",
		);
	}

	get ConsumptionSectionCategoriesFilterOption1() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}
	get ConsumptionSectionCategoriesFilteroptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ConsumptionSectionGroupByFilter() {
		return cy.get(
			".consumption-panel [cxportalphraseblock='groupByType']> input",
		);
	}

	get ConsumptionSectionGroupByFilterOption1() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}

	get ConsumptionSectionGroupByFilterOption2() {
		return cy.get('.cxui-list > cxui-option:nth-child(2)');
	}

	get ConsumptionSectionGroupByFilterOptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ConsumptionSectionPeriodFilter() {
		return cy.get(
			".consumption-panel [cxportalphraseblock='period'] > input",
		);
	}

	get ConsumptionSectionPeriodFilterOption1() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}

	get ConsumptionSectionPeriodFilterOptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ConsumptionSectionPeriodLast18Months() {
		return cy.get('.cxui-list > cxui-option:nth-child(4)');
	}

	get ConsumptionSectionCapacityTypeFilter() {
		return cy
			.get('.consumption-panel cx-portal-visualization-overlay-select')
			.find('cxui-select>input');
	}

	get ConsumptionSectionCapacityTypeFilterOption1() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}

	get ConsumptionSectionCapacityTypeFilterOption2() {
		return cy.get('.cxui-list > cxui-option:nth-child(2)');
	}

	get ConsumptionSectionCapacityTypeFilterOptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ConsumptionSectionExpandButton() {
		return cy.get(".consumption-panel [iconname='enlarge']");
	}

	get ConsumptionSectionCollapseButton() {
		return cy.get("[iconname='shrink']>svg");
	}

	get ConsumptionSectionDetailsHeader() {
		return cy
			.get(
				"[data-auto-id='consumption-container'] cx-portal-min-consumption-details",
			)
			.find('cx-portal-details-min>div');
	}

	get ConsumptionSectioncapcitytypeValues() {
		return cy.get(
			'.consumption-panel cx-portal-min-consumption-template >div >div:nth-child(1)',
		);
	}

	get ConsumptionSectionExporttoButton() {
		return cy.get(
			"[data-auto-id='consumption-container'] cpxe-export-select >button",
		);
	}

	get ConsumptionSectionExporttooptionExcel() {
		return cy.get("[role='menuitem']");
	}

	get BacktoCiscoContractsTab() {
		return cy.get('div').contains(' Back to Cisco+ Contracts ');
	}

	// Charges section - Collapsed form
	get ChargesSectionHeader() {
		return cy.get("[data-auto-id='charges-container'] .header-label");
	}

	get ChargesSectionChart() {
		return cy.get("[data-auto-id='consumption-charges-chart']");
	}

	get ChargesSectionChartY_axis() {
		return cy.get('text').contains('Charged Units');
	}

	get ChargesSectionChartX_axis() {
		return cy.get("[class='cxui-chart-x-axis'] >g:nth-child(2) >text");
	}

	get ChargesSectionChart_Legends() {
		return cy.get("[role='graphics-legend'] >div > span:nth-child(2)");
	}

	get ChargesSectionUnitsorAmountsFilter() {
		return cy.get(".overview-panel [cxportalphraseblock='charge'] > input");
	}

	get ChargesSectionUnitsorAmountsFilterOptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ChargesSectionUnitsorAmountsFilterOption1() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}

	get ChargesSectionUnitsorAmountsFilterOption2() {
		return cy.get('.cxui-list > cxui-option:nth-child(2)');
	}

	get ChargesSectionCategoriesFilter() {
		return cy.get(
			".charge-panel [cxportalphraseblock='technologyType'] > input",
		);
	}

	get ChargesSectionCategoriesFilterOptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ChargesSectionCategoriesFilteroption1() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}

	get ChargesSectionGroupByFilter() {
		return cy.get(".charge-panel [cxportalphraseblock='groupBy']> input");
	}

	get ChargesSectionGroupByFilterOptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ChargesSectionGroupByFilterOption1() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}

	get ChargesSectionGroupByFilterOption2() {
		return cy.get('.cxui-list > cxui-option:nth-child(2)');
	}

	get ChargesSectionGroupByFilterOption3() {
		return cy.get('.cxui-list > cxui-option:nth-child(3)');
	}

	get ChargesSectionTimePeriodFilter() {
		return cy.get(".charge-panel [cxportalphraseblock='period'] > input");
	}

	get ChargesSectionTimePeriodFilterOptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ChargesSectionTimePeriodFilterOption1() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}

	get ChargesSectionTimePeriodFilterLast18Months() {
		return cy.get('.cxui-list > cxui-option:nth-child(3)');
	}

	get ChargesSectionInvoicedayFilter() {
		return cy.get(
			".charge-panel [cxportalphraseblock='invoiceDayOfMonth'] > input",
		);
	}

	get ChargesSectionInvoicedayFilterOptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ChargesSectionInvoicedayFilterOption1() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}

	get ChargesSectionCapacityTypeFilter() {
		return cy
			.get('.charge-panel cx-portal-visualization-overlay-select')
			.find('cxui-select>input');
	}

	get ChargesSectionCapacityTypeFilteroptions() {
		return cy.get('.cxui-list > cxui-option');
	}

	get ChargesSectionCapacityTypeFilteroption2() {
		return cy.get('.cxui-list > cxui-option:nth-child(2)');
	}

	get ChargesSectionReserveButton() {
		return cy.get('.bar-chart-container button:nth-child(1)');
	}

	get ChargesSectionon_DemandButton() {
		return cy.get('.bar-chart-container button:nth-child(2)');
	}

	get ChargesSection_ExpandButton() {
		return cy.get(".charge-panel [iconname='enlarge']");
	}

	get ChargesSection_CollapseButton() {
		return cy.get("[iconname='shrink']>svg");
	}

	get ChargesSectionExportTobutton() {
		return cy.get(
			"[data-auto-id='charges-container'] cpxe-export-select >button",
		);
	}

	get ChargesSectionExportToExceloption() {
		return cy.get("[role='menuitem']");
	}

	get ChargesSectionDetailsHeader() {
		return cy
			.get(
				"[data-auto-id='charges-container'] cx-portal-min-charge-details-amount",
			)
			.find('cx-portal-details-min>div:nth-child(1)');
	}

	get ChargesSectionUnitsDetailsHeader() {
		return cy
			.get(
				"[data-auto-id='charges-container'] cx-portal-min-charge-details",
			)
			.find('cx-portal-details-min>div:nth-child(1)');
	}

	get ChargesSectionUnitsdetail() {
		return cy.get(
			'.charge-panel  .details-container >div >div:nth-child(1)',
		);
	}

	get ChargesSectionAmountsdetail() {
		return cy.get("[class='currency-header']");
	}

	// Consumption Section - Expanded

	get ConsumptionExpandedFilterLabel() {
		return cy
			.get('span')
			.contains('Which capacity type do you want to focus on?');
	}

	get ConsumptionExpandedCapacitytypeFilterButtons() {
		return cy.get('.filter--max button');
	}

	get ConsumptionExpandedMapIcon() {
		return cy.get(
			"[data-auto-id='consumption-chart-map-select-map-option'] >svg",
		);
	}

	get ConsumptionExpandedMap() {
		return cy.get("[data-auto-id='consumption-summary-map']");
	}

	get ConsumptionExpandedChartIcon() {
		return cy.get(
			"[data-auto-id='consumption-chart-map-select-chart-option'] >svg",
		);
	}

	get ConsumptionExpandedChart() {
		return cy.get("[data-auto-id='consumption-summary-chart']");
	}

	get ConsumptionExpandedDetailsHeader() {
		return cy.get('.usage .details-max-header');
	}

	get ConsumptionExpandedConsumptionDetails() {
		return cy.get('.details-content  div > div:nth-child(1)');
	}

	get ConsumptionExpandedUpArrow() {
		return cy.get("[data-auto-id='consumption-divider'] .arrow-up");
	}

	get ConsumptionExpandedDownArrow() {
		return cy.get("[data-auto-id='consumption-divider'] .arrow-down");
	}

	get ConsumptionExpandedUsagebreakdownHeader() {
		return cy.get('h5').contains(' Usage Breakdown ');
	}

	get ConsumptionExpandedGroupByFilter() {
		return cy.get("[data-auto-id='group-by-select-input'] > input");
	}

	get ConsumptionExpandedGroupByFilter_ServiceName() {
		return cy.get('cxui-option').contains('Service Name ');
	}

	get ConsumptionExpandedGroupByFilter_Subscription() {
		return cy.get('cxui-option').contains('Subscription ');
	}

	get ConsumptionExpandedGroupByFilter_Location() {
		return cy.get('cxui-option').contains('Location ');
	}

	get ConsumptionExpandedMenuComponent() {
		return cy.get(
			"[data-auto-id='ciscoPlus-GroupedTableSectionMoreMenu'] .menu-icon",
		);
	}

	get ConsumptionExpandedExporttoExcel() {
		return cy.get("[data-auto-id='grouped-table-export-optionExcel']");
	}

	get ConsumptionExpandedHideorShowColumns() {
		return cy.get(
			"[data-auto-id='ciscoPlus-GroupedTableSectionEditColumn']",
		);
	}

	get ConsumptionExpandedEditColumnsHeader() {
		return cy.get('div').contains(' Edit Columns ');
	}

	get ConsumptionExpandedRestoredefaultsbutton() {
		return cy.get('div').contains(' Restore defaults ');
	}

	get ConsumptionExpandedApplybutton() {
		return cy.get('div').contains(' Apply ');
	}

	get ConsumptionExpandedLockedColumns() {
		return cy.get(
			"[aria-label='Locked columns'] cxui-column-item > label span",
		);
	}

	get ConsumptionExpandedVisibleColumns() {
		return cy.get(
			"[aria-label='Visible columns'] cxui-column-item > label span:nth-child(3)",
		);
	}

	get ConsumptionExpandedHiddenColumns() {
		return cy.get(
			"[aria-label='Hidden columns'] cxui-column-item > label span:nth-child(3)",
		);
	}

	get ConsumptionExpandedHiddenColumnsCheckBox() {
		return cy.get(
			"[aria-label='Hidden columns'] cxui-column-item > label span:nth-child(2)",
		);
	}

	get ConsumptionExpandedTableHeaders() {
		return cy.get(
			"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1) th",
		);
	}

	get ConsumptionExpandedTableData() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find('tbody tr:nth-child(1)');
	}

	get ConsumptionExpandedTableLocationFieldName() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(4)>span:nth-child(1)',
			);
	}

	get ConsumptionExpandedTableLocationFielddata() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(4)>span:nth-child(2)',
			);
	}

	get ConsumptionExpandedTableConsumptionModelFieldName() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(5)>span:nth-child(1)',
			);
	}

	get ConsumptionExpandedTableConsumptionModelFielddata() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(5)>span:nth-child(2)',
			);
	}

	// Charged Units - Expand button

	get ChargesExpandedFilterLabel() {
		return cy
			.get('span')
			.contains('Which capacity type do you want to focus on?');
	}

	get ChargesExpandedCapacitytypeFilterButtons() {
		return cy.get('.filter--max button');
	}

	get ChargesSectionExpandedChargedUnitsChart() {
		return cy.get("[data-auto-id='consumption-charges-chart']");
	}

	get ChargesSectionExpandedChargedAmountsChart() {
		return cy.get("[role='graphics-datachart']");
	}

	get ChargesSectionExpandedShowCapacitytypeCheckbox() {
		return cy.get('.stacked-toggle-label >input');
	}

	get ChargesSectionChargedAmountExpandedChartLegend() {
		return cy.get("[role='graphics-legend']  div>span:nth-child(2)");
	}

	get ChargesSectionExpandedDetailsHeader() {
		return cy.get('.usage .details-max-header');
	}

	get ChargesSectionExpandedChargesDetails() {
		return cy.get('.details-content  div > div:nth-child(1)');
	}

	get ChargesSectionExpandedUpArrow() {
		return cy.get('.expansion-legend .arrow-up');
	}

	get ChargesSectionExpandedDownArrow() {
		return cy.get('.expansion-legend .arrow-down');
	}

	get ChargesSectionExpandedChargesBreakdownHeader() {
		return cy.get('div').contains('Charges Breakdown');
	}

	get ChargesSectionExpandedChargedunitsBreakdownHeader() {
		return cy.get('div').contains(' Charged Units Breakdown');
	}

	get ChargesSectionExpandedMenuComponent() {
		return cy.get(
			"[data-auto-id='ciscoPlus-GroupedTableSectionMoreMenu'] .menu-icon",
		);
	}

	get ChargesSectionExpandedExporttoExcel() {
		return cy.get("[data-auto-id='grouped-table-export-optionExcel']");
	}

	get ChargesSectionExpandedHideorShowColumns() {
		return cy.get(
			"[data-auto-id='ciscoPlus-GroupedTableSectionEditColumn']",
		);
	}

	get ChargesSectionExpandedEditColumnsHeader() {
		return cy.get('div').contains(' Edit Columns ');
	}

	get ChargesSectionExpandedRestoreDefaultsButton() {
		return cy.get('div').contains(' Restore defaults ');
	}

	get ChargesSectionExpandedApplyButton() {
		return cy.get('div').contains(' Apply ');
	}

	get ChargesSectionLockedColumns() {
		return cy.get(
			"[aria-label='Locked columns'] cxui-column-item > label span",
		);
	}

	get ChargesSectionExpandedVisibleColumns() {
		return cy.get(
			"[aria-label='Visible columns'] cxui-column-item > label span:nth-child(3)",
		);
	}

	get ChargesSectionExpandedHiddenColumns() {
		return cy.get(
			"[aria-label='Hidden columns'] cxui-column-item > label span:nth-child(3)",
		);
	}

	get ChargesSectionExpandedTotalUnitsCheckBox() {
		return cy.get("[aria-label='Total Units'] >label >span:nth-child(2)");
	}

	get ChargesSectionExpandedTotalChargesCheckBox() {
		return cy.get("[aria-label='Total Charges'] >label >span:nth-child(2)");
	}

	get ChargesSectionExpandedTableHeaders() {
		return cy.get(
			"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1) th",
		);
	}

	get ChargesSectionExpandedTableData() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find('tbody tr:nth-child(1)');
	}

	get ChargesSectionExpandedTableLocationFieldName() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(4)>span:nth-child(1)',
			);
	}

	get ChargesSectionExpandedTableLocationFielddata() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(4)>span:nth-child(2)',
			);
	}

	get ChargesSectionExpandedTableInvoicedayFieldName() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(5)>span:nth-child(1)',
			);
	}

	get ChargesSectionExpandedTableInvoicedayFielddata() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(5)>span:nth-child(2)',
			);
	}

	get ChargesSectionExpandedTableTotalChargesFieldName() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(6)>span:nth-child(1)',
			);
	}

	get ChargesSectionExpandedTableTotalChargesFielddata() {
		return cy
			.get(
				"[data-auto-id='ciscoPlus-GroupedTableSection'] cxui-expansion-panel:nth-child(1)",
			)
			.find(
				'cx-portal-grouped-table-header div:nth-child(6)>span:nth-child(2)',
			);
	}

	get ChargesSectionExpandedGroupByFilter() {
		return cy.get("[data-auto-id='group-by-select-input'] > input");
	}

	get ChargesSectionExpandedGroupByFilter_ServiceName() {
		return cy.get('cxui-option').contains('Service Name ');
	}

	get ChargesSectionExpandedGroupByFilter_Subscription() {
		return cy.get('cxui-option').contains('Subscription ');
	}

	get ChargesSectionExpandedGroupByFilter_Location() {
		return cy.get('cxui-option').contains('Location ');
	}

	get ChargesSectionExpandedUnitsorAmountsFilter() {
		return cy.get(".overview-panel [cxportalphraseblock='charge'] > input");
	}

	get ChargesSectionUnitsorAmountsFilterChargedAmount() {
		return cy.get('.cxui-list > cxui-option:nth-child(1)');
	}

	// Charges - 360

	get ChargedUnitsBreakdownsectiondata() {
		return cy.get('tr td:nth-child(5)');
	}

	get Charges360HeaderText() {
		return cy.get("[data-auto-id='header-text']");
	}

	get Charges360CapacityType() {
		return cy.get("[data-auto-id='technology-resource-subtext']");
	}

	get Charges360PartofSubscription() {
		return cy.get("[data-auto-id='subscription-subtext']");
	}

	get Charges360AboutHeader() {
		return cy.get('span').contains('About ');
	}

	get Charges360FieldNameServiceCategory() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(1) >div:nth-child(1)');
	}

	get Charges360ServiceCategoryFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(1) >div:nth-child(2)');
	}

	get Charges360FieldNameCapacityType() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(2) >div:nth-child(1)');
	}

	get Charges360CapacityTypeFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(2) >div:nth-child(2)');
	}

	get Charges360FieldNameServiceName() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(3) >div:nth-child(1)');
	}

	get Charges360ServiceNameFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(3) >div:nth-child(2)');
	}

	get Charges360FieldNameReserveRate() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(4) >div:nth-child(1)');
	}

	get Charges360ReserveRateFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(4) >div:nth-child(2)');
	}

	get Charges360FieldNameOnDemandRate() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(5) >div:nth-child(1)');
	}

	get Charges360OnDemandRateFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(5) >div:nth-child(2)');
	}

	get Charges360FieldNameInvoiceDay() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(6) >div:nth-child(1)');
	}

	get Charges360InvoiceDayFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(1)",
			)
			.find('div:nth-child(2) >div:nth-child(6) >div:nth-child(2)');
	}

	get Charges360ChargesBreakdownHeader() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2)",
			)
			.find('.section-header-container:nth-child(1) .sub-header');
	}

	get Charges360ChargesBreakTimeframeFilter() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2)",
			)
			.find("[role='combobox']");
	}

	get Charges360FieldNameInvoiceNumber() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(2)",
			)
			.find("[data-auto-id='technology-property'] >div:nth-child(1)");
	}

	get Charges360InvoiceNumberFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(2)",
			)
			.find("[data-auto-id='technology-property'] >div:nth-child(2)");
	}

	get Charges360FieldNameTotalCharges() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(2)",
			)
			.find(
				" [data-auto-id='resource-property'] >div:nth-child(1) >span",
			);
	}

	get Charges360TotalChargesFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(2)",
			)
			.find("[data-auto-id='resource-property'] >div:nth-child(2)");
	}

	get Charges360FieldNameReserveCharges() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(2)",
			)
			.find(
				"[data-auto-id='ciscoPlus-charges-360-reserve-charges-label'] >div:nth-child(1)",
			);
	}

	get Charges360ReserveChargesFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(2)",
			)
			.find(
				"[data-auto-id='ciscoPlus-charges-360-reserve-charges-label'] >div:nth-child(2)",
			);
	}

	get Charges360FieldNameOnDemandCharges() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(2)",
			)
			.find(
				"[data-auto-id='ciscoPlus-charges-360-on-demand-charges-label'] >div:nth-child(1)",
			);
	}

	get Charges360OnDemandChargesFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(2)",
			)
			.find(
				"[data-auto-id='ciscoPlus-charges-360-on-demand-charges-label'] >div:nth-child(2)",
			);
	}

	get Charges360FieldNameTotalChargedUnits() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(3)",
			)
			.find('div:nth-child(1)>div:nth-child(1)');
	}

	get Charges360TotalChargedUnitsFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(3)",
			)
			.find('div:nth-child(1)>div:nth-child(2)');
	}

	get Charges360FieldNameReserveUnits() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(3)",
			)
			.find('div:nth-child(2)>div:nth-child(1)');
	}

	get Charges360ReserveUnitsFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(3)",
			)
			.find('div:nth-child(2)>div:nth-child(2)');
	}

	get Charges360FieldNameOnDemandUnits() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(3)",
			)
			.find('div:nth-child(3)>div:nth-child(1)');
	}

	get Charges360OnDemandUnitsFieldData() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2) .details-row:nth-child(3)",
			)
			.find('div:nth-child(3)>div:nth-child(2)');
	}

	get Charges360Chart() {
		return cy.get(
			"[data-auto-id='panel-content'] .subscription-properties:nth-child(2)  [role='graphics-datachart']",
		);
	}

	get Charges360ChartYAxis() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2)  [role='graphics-datachart']",
			)
			.find('.cxui-chart-y-axis-label');
	}

	get Charges360ChartXAxis() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2)  [role='graphics-datachart']",
			)
			.find('.cxui-chart-x-axis >g:nth-child(2) text');
	}

	get Charges360OnDemandUsageChartLegend() {
		return cy.get('span').contains('On-Demand Usage');
	}

	get Charges360ReserveUsageChartLegend() {
		return cy.get('span').contains('Reserve Usage');
	}

	get Charges360ViewConsumptionDetailsLink() {
		return cy.get("[data-auto-id='view-charged-amount-details']");
	}

	get Charges360RecentChargesHeader() {
		return cy.get('span').contains('Recent Charges');
	}

	get Charges360RecentChargesArrrowDown() {
		return cy
			.get(
				"[data-auto-id='panel-content'] .subscription-properties:nth-child(2)",
			)
			.find('.arrow-down-heavy');
	}

	get Charges360RecentChargesTotalChargesFieldName() {
		return cy.get('span').contains('Total Charge:');
	}

	get Charges360RecentChargesTotalChargesFielddata() {
		return cy.get('.history-header-title div:nth-child(2)');
	}

	get Charges360RecentChargesReserveChargesFieldName() {
		return cy
			.get('.ng-trigger-bodyExpansion div')
			.find('div:nth-child(1) label');
	}

	get Charges360RecentChargesReserveChargesFielddata() {
		return cy
			.get('.ng-trigger-bodyExpansion div')
			.find('div:nth-child(1) div');
	}

	get Charges360RecentChargesOnDemandChargesFieldName() {
		return cy
			.get('.ng-trigger-bodyExpansion div')
			.find('div:nth-child(2) label');
	}

	get Charges360RecentChargesOnDemandChargesFielddata() {
		return cy
			.get('.ng-trigger-bodyExpansion div')
			.find('div:nth-child(2) div');
	}

	get Charges360RecentChargesReserveUnitsFieldName() {
		return cy
			.get('.ng-trigger-bodyExpansion div')
			.find('div:nth-child(3) label');
	}

	get Charges360RecentChargesReserveUnitsFielddata() {
		return cy
			.get('.ng-trigger-bodyExpansion div')
			.find('div:nth-child(3) div');
	}

	get Charges360RecentChargesOnDemandUnitsFieldName() {
		return cy
			.get('.ng-trigger-bodyExpansion div')
			.find('div:nth-child(4) label');
	}

	get Charges360RecentChargesOnDemandUnitsFielddata() {
		return cy
			.get('.ng-trigger-bodyExpansion div')
			.find('div:nth-child(4) div');
	}

	get Consumption360BackButton() {
		return cy.get(
			"[data-auto-id='consumption-details'] [data-auto-id='BackDetails'] >span",
		);
	}

	get Consumption360Header() {
		return cy.get("[data-auto-id='consumption-details'] .header-title");
	}

	get Charges360CloseButton() {
		return cy.get("[data-auto-id='CloseDetails'] .icon-close");
	}

	// Consumption -360
	get Consumptionsectiondata() {
		return cy.get('tr td:nth-child(5)');
	}

	get Consumption360HeaderText() {
		return cy.get('.panel .header-title');
	}

	get Consumption360CapacityType() {
		return cy.get('.panel .header-subtitle');
	}

	get Consumption360PartofSubscription() {
		return cy.get('.panel .header-description');
	}

	get Consumption360AboutHeader() {
		return cy.get('span').contains('About');
	}

	get Consumption360ServiceCategoryField() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(1) >div:nth-child(1)');
	}

	get Consumption360ServiceCategoryData() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(1) >div:nth-child(2) > span');
	}

	get Consumption360CapacityTypeField() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(2) >div:nth-child(1)');
	}

	get Consumption360CapacityTypeData() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(2) >div:nth-child(2) > span');
	}

	get Consumption360ServiceNameField() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(3) >div:nth-child(1)');
	}

	get Consumption360ServiceNameData() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(3) >div:nth-child(2) > span');
	}

	get Consumption360TotalCapacityField() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(4) >div:nth-child(1)');
	}

	get Consumption360TotalCapacityData() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(4) >div:nth-child(2) > span');
	}

	get Consumption360ReserveCapacityField() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(5) >div:nth-child(1)');
	}

	get Consumption360ReserveCapacityData() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(5) >div:nth-child(2) > span');
	}

	get Consumption360OnDemandCapacityField() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(6) >div:nth-child(1)');
	}

	get Consumption360OnDemandCapacityData() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(6) >div:nth-child(2) > span');
	}

	get Consumption360ReservePercentField() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(7) >div:nth-child(1)');
	}

	get Consumption360ReservePercentData() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(7) >div:nth-child(2) > span');
	}

	get Consumption360ConsumptionModelField() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(8) >div:nth-child(1)');
	}

	get Consumption360ConsumptionModelData() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(8) >div:nth-child(2) > span');
	}

	get Consumption360LocationField() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(9) >div:nth-child(1)');
	}

	get Consumption360LocationData() {
		return cy
			.get("[data-auto-id='consumption-360-about-info']")
			.find('div:nth-child(9) >div:nth-child(2) > span');
	}

	get Consumption360ConsumptionHeader() {
		return cy.get('.consumption-container-header > .sub-header');
	}

	get Consumption360ConsumptionTimeframefield() {
		return cy.get('.consumption-container-header cxui-select');
	}

	get Consumption360TotalUsedField() {
		return cy
			.get("[data-auto-id='consumption-360-consumption-info']")
			.find('div:nth-child(1) >div:nth-child(1)');
	}

	get Consumption360TotalUsedData() {
		return cy
			.get("[data-auto-id='consumption-360-consumption-info']")
			.find('div:nth-child(1) >div:nth-child(2)');
	}

	get Consumption360ReserveUsedField() {
		return cy
			.get("[data-auto-id='consumption-360-consumption-info']")
			.find('div:nth-child(2) >div:nth-child(1)');
	}

	get Consumption360ReserveUsedData() {
		return cy
			.get("[data-auto-id='consumption-360-consumption-info']")
			.find('div:nth-child(2) >div:nth-child(2)');
	}

	get Consumption360OnDemandUsedField() {
		return cy
			.get("[data-auto-id='consumption-360-consumption-info']")
			.find('div:nth-child(3) >div:nth-child(1)');
	}

	get Consumption360OnDemandUsedData() {
		return cy
			.get("[data-auto-id='consumption-360-consumption-info']")
			.find('div:nth-child(3) >div:nth-child(2)');
	}

	get Consumption360AverageConsumptionField() {
		return cy
			.get("[data-auto-id='consumption-360-consumption-info']")
			.find('div:nth-child(4) >div:nth-child(1)');
	}

	get Consumption360AverageConsumptionData() {
		return cy
			.get("[data-auto-id='consumption-360-consumption-info']")
			.find('div:nth-child(4) >div:nth-child(2)');
	}

	get Consumption360AssociatedAssetsHeader() {
		return cy.get('.panel .associated-assets-header >.left');
	}

	get Consumption360ChartYAxisdata() {
		return cy
			.get(".panel [role='graphics-datachart']")
			.find('.cxui-chart-y-axis-label');
	}

	get Consumption360ChartXAxisdata() {
		return cy
			.get(".panel [role='graphics-datachart']")
			.find('.cxui-chart-x-axis >g:nth-child(2) text');
	}

	get Consumption360ChartLegendReserveUsage() {
		return cy.get('span').contains('Reserve Usage');
	}

	get Consumption360ChartLegendOnDemandUsage() {
		return cy.get('span').contains('On-Demand Usage');
	}
}

export default new ConsumptionDashboard();
