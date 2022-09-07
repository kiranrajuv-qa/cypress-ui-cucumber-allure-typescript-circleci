/// <reference types="Cypress" />

import { Before } from '@badeball/cypress-cucumber-preprocessor';
import login from '../../fixtures/login/users.json';
import app from '../pageObjects/app.po';

function doLogin(username: string, password: string) {
	cy.window().then((win) => {
		win.sessionStorage.clear();
		win.localStorage.clear();
	});
	cy.clearLocalStorage();
	cy.clearCookies();
	cy.visit('/');
	// cy.get('body')
	// 	.then(($body) => {
	// 		if ($body.find('#userInput').length > 0) return '#userInput';
	// 		else return '#idp-discovery-username';
	// 	})
	// 	.then((selector) => {
	// 		cy.wait(2000)
	// 			.get(selector)
	// 			.fill(username)
	// 			.type('{enter}', { force: true });
	// 	});
	const userNameBox = '#idp-discovery-username';
	cy.waitUntil(() => {
		if (!Cypress.$(userNameBox).length) {
			return cy.reload().then(() => false);
		} else {
			return true;
		}
	});
	cy.get(userNameBox).fill(username).type('{enter}');
	cy.log('Entered User Name');
	cy.get('#okta-signin-password').as('passwordBox');
	cy.get('@passwordBox').type(password, { log: false });
	cy.log('Entered Password');
	cy.get('#okta-signin-submit').click();
	cy.waitUntil(() => !!Cypress.$('[data-auto-id="HeaderCPLogoLink"]').length);
	app.headerLogo.should('exist').and('be.visible');
}

function appShouldLaunchOnTodayFacet() {
	cy.url().should('contain', '/today');
	app.todayFacet.should('exist').and('be.visible');
	app.customersFacet.should('exist').and('be.visible');
	app.partnerOffersFacet.should('exist').and('be.visible');
	app.learningFacet.should('exist').and('be.visible');
}

function appShouldLaunchOnCustomersFacet() {
	cy.url().should('contain', '/customers');
	app.customersFacet.should('exist').and('be.visible');
	app.learningFacet.should('exist').and('be.visible');
}

let firstScenario = true;

Before({ tags: '@pa_hcaas_st' }, () => {
	if (firstScenario) {
		doLogin(
			Cypress.env('PA_ST_HCAAS_USER'),
			Cypress.env('PORTAL_PASSWORD'),
		);
		appShouldLaunchOnTodayFacet();
	}
	firstScenario = false;
});

Before({ tags: '@pa_hcaas_only' }, () => {
	if (firstScenario) {
		doLogin(
			Cypress.env('PA_HCAAS_ONLY_USER'),
			Cypress.env('PORTAL_PASSWORD'),
		);
		appShouldLaunchOnCustomersFacet();
	}
	firstScenario = false;
});

Before({ tags: '@pa_st_only' }, () => {
	if (firstScenario) {
		doLogin(Cypress.env('PA_ST_ONLY_USER'), Cypress.env('PORTAL_PASSWORD'));
		appShouldLaunchOnTodayFacet();
	}
	firstScenario = false;
});

Before({ tags: '@pa_lca' }, () => {
	if (firstScenario) {
		doLogin(Cypress.env('PA_LCA_USER'), Cypress.env('PORTAL_PASSWORD'));
		appShouldLaunchOnTodayFacet();
	}
	firstScenario = false;
});

Before({ tags: '@exec' }, () => {
	if (firstScenario) doLogin(login.exec.username, login.exec.password);
	firstScenario = false;
});

Before({ tags: '@csm' }, () => {
	if (firstScenario) doLogin(login.csm.username, login.csm.password);
	firstScenario = false;
});

Before({ tags: '@css' }, () => {
	if (firstScenario) doLogin(login.css.username, login.css.password);
	firstScenario = false;
});

Before({ tags: '@cxpl' }, () => {
	if (firstScenario) doLogin(login.cxpl.username, login.cxpl.password);
	firstScenario = false;
});

Before({ tags: '@rm' }, () => {
	if (firstScenario) doLogin(login.rm.username, login.rm.password);
	firstScenario = false;
});

Before({ tags: '@pam' }, () => {
	if (firstScenario) doLogin(login.pam.username, login.pam.password);
	firstScenario = false;
});

Before({ tags: '@vpam' }, () => {
	if (firstScenario) doLogin(login.vpam.username, login.vpam.password);
	firstScenario = false;
});

Before({ tags: '@pbds' }, () => {
	if (firstScenario) doLogin(login.pbds.username, login.pbds.password);
	firstScenario = false;
});

Before({ tags: '@pssm' }, () => {
	if (firstScenario) doLogin(login.pssm.username, login.pssm.password);
	firstScenario = false;
});

Before({ tags: '@non_pls' }, () => {
	if (firstScenario) doLogin(login.non_pls.username, login.non_pls.password);
	firstScenario = false;
});

Before({ tags: '@pls_expired' }, () => {
	if (firstScenario)
		doLogin(login.pls_expired.username, login.pls_expired.password);
	firstScenario = false;
});

Before({ tags: '@pls_grace' }, () => {
	if (firstScenario)
		doLogin(login.pls_grace.username, login.pls_grace.password);
	firstScenario = false;
});

Before({ tags: '@pom' }, () => {
	if (firstScenario) doLogin(login.pom.username, login.pom.password);
	firstScenario = false;
});

Before({ tags: '@day_zero' }, () => {
	if (firstScenario)
		doLogin(login.day_zero.username, login.day_zero.password);
	firstScenario = false;
});
