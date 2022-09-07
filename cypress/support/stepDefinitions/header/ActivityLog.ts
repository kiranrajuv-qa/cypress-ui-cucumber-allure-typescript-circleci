/// <reference types="Cypress" />

import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import activitylog_messages from '../../../fixtures/testdata/cpmirror/activitylog_messages.json';
import { interceptActivityLog } from '../../intercepts/activitylog';
import { ActivityLogPO } from '../../pageObjects/header/activitylog.po';

Then('{string} should be available', (tabname: string) => {
	ActivityLogPO.getSideNavBar().should('contain', tabname);
});

When('Click on Activity Log', () => {
	ActivityLogPO.getActivityLogIcon().click();
});

Then('Activity Log Page is active', () => {
	ActivityLogPO.getALContainer().should('contain', 'Activity Log');
});

When('Date Picker is avalible', () => {
	ActivityLogPO.getDatePicker();
});

And('Click on Date Picker', () => {
	ActivityLogPO.getDatePicker().click();
});

And('Last 30 Days should be active', () => {
	ActivityLogPO.getDateRanges()
		.find('button')
		.eq(3)
		.should('have.class', 'active');
	ActivityLogPO.getALContainer().contains('Apply').click();
});

Then('Validate logs', () => {
	cy.get('body').then(($body) => {
		if ($body.find('[data-auto-id="NoResultsFoundTxt"]').length) {
			cy.log('notable');
			ActivityLogPO.getALContainer().contains('Clear All').click();
		} else {
			cy.get('input[name="daterangeInput"]')
				.invoke('val')
				.then((sometext) => {
					console.log('txt', sometext);
					const txt = sometext.toString();
					const limitdates = txt.split('- ');
					const stdate = new Date(limitdates[0]);
					const eddate = new Date(limitdates[1]);
					eddate.setDate(eddate.getDate() + 1);
					console.log('txt', stdate, eddate);
					cy.get('.admin-container')
						.find('.cxui-table > tbody > tr > td:nth-child(1)')
						.each(($el, index, $list) => {
							let flag = false;
							if ($list.length > 0) {
								const str = $el.text();
								const pdate = new Date(str.replace('IST', ''));
								if (pdate >= stdate && pdate <= eddate) {
									flag = true;
									console.log('fg', flag);
								} else {
									flag = false;
									expect(flag).to.be.true;
								}
							}
							expect(flag).to.be.true;
						});
				});
		}
	});
});

And('Select {string} on Date Picker', (range: string) => {
	ActivityLogPO.getDateRanges().contains(range).click();
	ActivityLogPO.getALContainer().contains('Apply').click();
});

When('Enter search string {string}', (searchstr: string) => {
	ActivityLogPO.getSearchBox().type(searchstr).type('{enter}');
});

Then('Logs should contain respective search word', () => {
	ActivityLogPO.getTablerows().each(($el) => {
		cy.wrap($el).contains('access');
	});
});

And('Clear searchbox', () => {
	ActivityLogPO.getSearchClose().click();
});

Then('Error alert should be displayed', () => {
	ActivityLogPO.getALContainer().should(
		'contain',
		activitylog_messages.errmsg,
	);
});

Then('No Results found should be displayed', () => {
	ActivityLogPO.getALContainer().should(
		'contain',
		activitylog_messages.errmsg2,
	);
});

And('Click on Export to CSV', () => {
	ActivityLogPO.getMore().click();
	interceptActivityLog();
	cy.contains('Export to CSV').click();
});

Then('Check if the api is getting called', () => {
	cy.wait('@logdata');
});

And('Select event type from Dropdown', () => {
	ActivityLogPO.getDropDown().click();
	ActivityLogPO.getDDMenu().click();
});

Then('All displayed Logs should be of selected event type', () => {
	ActivityLogPO.getEventtypeColumn().each(($el) => {
		cy.wrap($el).contains('User');
	});
});
