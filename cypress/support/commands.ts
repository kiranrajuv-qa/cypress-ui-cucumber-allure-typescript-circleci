// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
import 'cypress-fill-command';
import 'cypress-wait-until';

export enum GetPatternSelectors {
	None = '',
	Contains = '*',
	StartsWith = '^',
	EndsWith = '$',
}

interface AngularTestability {
	isStable(): boolean;
	whenStable(
		doneCb: (didWork: boolean, tasks?: unknown[]) => void,
		timeout?: number,
	): void;
}

declare global {
	namespace Cypress {
		interface Chainable {
			waitUntilAngularStable(timeout?: number): void;
			mockSplitTreatment(
				...treatments: Array<{
					name: string;
					on: boolean;
					config?: unknown;
				}>
			): void;
			getByDataAutoId(
				value: string,
				selector?: GetPatternSelectors,
				option?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
			): Cypress.Chainable<JQuery<HTMLElement>>;
		}

		interface Window {
			getAllAngularRootElements(): Element[];
			getAngularTestability(element: Element): AngularTestability;
		}
	}
}

Cypress.Commands.add(
	'getByDataAutoId',
	(
		value: string,
		selector: GetPatternSelectors = GetPatternSelectors.None,
		options?,
	) => {
		return cy.get(`[data-auto-id${selector}="${value}"]`, options);
	},
);

Cypress.Commands.add('waitUntilAngularStable', (timeout = 5000) => {
	cy.window().then((win: Cypress.Window) => {
		return new Cypress.Promise((resolve, reject) => {
			const rootElements = win?.getAllAngularRootElements();
			if (!rootElements || rootElements.length === 0) {
				return reject(new Error('No Angular root element found'));
			}

			const rootEl = win.getAllAngularRootElements()[0];
			const testability = win.getAngularTestability(rootEl);
			if (!testability) {
				return reject(new Error('No Angular testability found'));
			}

			if (testability.isStable()) {
				cy.log('Testability is already stable');
				resolve();
			} else {
				testability.whenStable((didWork: boolean, tasks?: any[]) => {
					if (didWork) {
						cy.log('Testability has become stable');
					} else {
						cy.log(
							`${
								(tasks || []).length
							} tasks are still pending after ${
								timeout / 1000
							} seconds`,
						);
					}
					resolve();
				}, timeout);
			}
		});
	});
});

Cypress.Commands.add(
	'mockSplitTreatment',
	(
		...treatments: Array<{ name: string; on: boolean; config?: unknown }>
	): void => {
		// intercept the request to split.io and use a custom response.
		cy.intercept(
			{
				method: 'GET',
				hostname: 'sdk.split.io',
				pathname: '/api/splitChanges',
			},
			{
				body: {
					splits: treatments.map((treatment) => ({
						trafficTypeName: 'user',
						name: treatment.name,
						trafficAllocation: 100,
						trafficAllocationSeed: 746384024,
						seed: 2091661424,
						status: 'ACTIVE',
						killed: false,
						defaultTreatment: 'on',
						changeNumber: 1640069843217,
						algo: 2,
						configurations: treatment.config
							? {
									on: JSON.stringify(treatment.config),
							  }
							: {},
						conditions: [
							{
								conditionType: 'ROLLOUT',
								matcherGroup: {
									combiner: 'AND',
									matchers: [
										{
											keySelector: {
												trafficType: 'user',
												attribute: null,
											},
											matcherType: 'ALL_KEYS',
											negate: false,
											userDefinedSegmentMatcherData: null,
											whitelistMatcherData: null,
											unaryNumericMatcherData: null,
											betweenMatcherData: null,
											booleanMatcherData: null,
											dependencyMatcherData: null,
											stringMatcherData: null,
										},
									],
								},
								// Set the percentage of traffic based on whether flag is enabled.
								partitions: [
									{
										treatment: 'on',
										size: treatment.on ? 100 : 0,
									},
									{
										treatment: 'off',
										size: treatment.on ? 0 : 100,
									},
								],
								label: 'default rule',
							},
						],
					})),
					since: -1,
					till: 1640069843217,
				},
			},
		).as('splitIo');
	},
);
