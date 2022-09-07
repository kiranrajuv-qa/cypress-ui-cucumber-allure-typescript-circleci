import { defineConfig } from 'cypress';

const createEsbuildPlugin =
	require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills =
	require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin =
	require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
	defaultCommandTimeout: 20000,
	pageLoadTimeout: 120000,
	requestTimeout: 10000,
	responseTimeout: 60000,
	execTimeout: 60000,
	taskTimeout: 60000,

	screenshotsFolder: 'results/screenshots',
	videosFolder: 'results/videos',
	downloadsFolder: 'results/downloads',

	viewportWidth: 1920,
	viewportHeight: 1080,

	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		configFile: 'reporter-config.json',
	},

	retries: {
		runMode: 0,
		openMode: 0,
	},

	env: {
		allure: true,
		allureClearSkippedTests: true,
		allureResultsPath: 'results/allure',
		TAGS: 'not @ignore',
		'hide-xhr': false,
	},

	e2e: {
		specPattern: 'cypress/e2e/**/*.{feature,features}',
		setupNodeEvents(on, config) {
			addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
			on(
				'file:preprocessor',
				createBundler({
					plugins: [nodePolyfills(), createEsbuildPlugin(config)],
				}),
			);
			allureWriter(on, config);
			return config;
		},
	},
});
