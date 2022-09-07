/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import app from '../../pageObjects/app.po';
import downloadCsvXls from '../../pageObjects/partnerInfo/HcaasContracts';

Then('Verify csv download 3 dots', () => {
	app.customersFacet.click();
	downloadCsvXls.hcasContractsTab.click();
	downloadCsvXls.dotIconMore.should('be.visible');
	downloadCsvXls.dotIconMore.click();
});

Then('Verify csv download menu option', () => {
	downloadCsvXls.menuCsv.should('be.visible');
});

Then('Verify csv download when search is applied', () => {
	downloadCsvXls.menuCsv.type('{esc}');
	downloadCsvXls.search.type('Hybrid{enter}');
	downloadCsvXls.dotIconMore.click();
	downloadCsvXls.menuCsv.should('be.visible');
});

Then('Verify csv download is disabled when no data is displayed', () => {
	downloadCsvXls.menuCsv.type('{esc}');
	downloadCsvXls.search.type('Hybridxyz{enter}');
	downloadCsvXls.dotIconMore.click();
});
