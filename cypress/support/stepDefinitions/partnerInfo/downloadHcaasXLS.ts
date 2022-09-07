/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import downloadCsvXls from '../../pageObjects/partnerInfo/HcaasContracts';

Then('Verify XlS download 3 dots', () => {
	downloadCsvXls.hcasContractsTab.click();
	downloadCsvXls.dotIconMore.should('be.visible');
	downloadCsvXls.dotIconMore.click();
});

Then('Verify XLS download menu option', () => {
	downloadCsvXls.menuXls.should('be.visible');
});

Then('Verify XLS download when search is applied', () => {
	downloadCsvXls.menuXls.type('{esc}');
	downloadCsvXls.search.type('Hybrid{enter}');
	downloadCsvXls.dotIconMore.click();
	downloadCsvXls.menuXls.should('be.visible');
});
