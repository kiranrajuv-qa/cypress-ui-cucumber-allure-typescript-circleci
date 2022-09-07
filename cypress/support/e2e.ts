require('cypress-plugin-tab');
import '@shelex/cypress-allure-plugin';
import './commands';

// Hide fetch/XHR requests

if (Cypress.env('hide-xhr')) {
	const app = window.top;
	if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
		const style = app.document.createElement('style');
		style.innerHTML =
			'.command-name-request, .command-name-xhr { display: none }';
		style.setAttribute('data-hide-command-log-request', '');

		app.document.head.appendChild(style);
	}
}
