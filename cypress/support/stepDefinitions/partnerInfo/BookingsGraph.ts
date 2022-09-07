/// <reference types="Cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('Verify Bookings section header', () => {
	cy.contains('Bookings by Total Contract Value').scrollIntoView();

	cy.get("[class='text-ellipsis panel__label pull-left']").contains(
		'Bookings',
	);
});

Then('Verify Booking sub header', () => {
	cy.get("[class='bookingLabel']").contains(
		'Bookings by Total Contract Value',
	);
});

Then('Verify bookings data summary for Total Average Max', () => {
	cy.get("[class='bookingValuesList']").contains('Total');
	cy.get("[class='bookingValuesList']").contains('Average');
	cy.get("[class='bookingValuesList']").contains('Max');
});

Then('Verify footer text in bookings graph', () => {
	cy.get(
		'app-bookings-trend:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > span',
	).contains(
		'*Data includes all bookings and may span beyond the four quarters shown.',
	);
});

Then('Verify Quarter in bookings graph', () => {
	cy.get('app-line-trend-chart').contains('Q4 FY22');
});
