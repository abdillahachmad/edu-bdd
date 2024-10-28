const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
	require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin =
	require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

module.exports = defineConfig({
	// component: {
	// 	devServer: {
	// 		framework: 'react', // Sesuaikan framework yang digunakan
	// 		bundler: 'webpack',
	// 		webpackConfig: require('./webpack.config.js'), // Sesuaikan dengan konfigurasi Webpack
	// 	},
	// },

	e2e: {
		/*************  ✨ Codeium Command ⭐  *************/
		/**
		 * Sets up node event listeners for Cypress.
		 *
		 * This function integrates the Cucumber preprocessor plugin and configures
		 * the file preprocessor with esbuild support for .feature files. Additionally,
		 * it defines a custom task for logging messages to the console.
		 *
		 * @param {Function} on - Cypress event handler for hooking into various events Cypress emits
		 * @param {Object} config - The resolved Cypress configuration
		 * @returns {Object} - The updated Cypress configuration
		 */
		/******  cc8a8bdf-5e16-4681-b5bf-6b99b410716e  *******/
		async setupNodeEvents(on, config) {
			// Menambahkan plugin Cucumber
			await addCucumberPreprocessorPlugin(on, config)

			// Menggunakan esbuild plugin untuk mendukung file .feature
			on(
				'file:preprocessor',
				createBundler({
					plugins: [createEsbuildPlugin(config)],
				}),
			)

			// Task tambahan jika diperlukan
			on('task', {
				log: (message) => {
					console.log(message)
					return null
				},
			})

			return config
		},
		// Mengatur specPattern agar mendukung file .feature dan file non-Cucumber
		specPattern: [
			'cypress/e2e/**/*.feature',
			'cypress/e2e/*/.{cy.js,cy.ts}',
		],
		supportFile: 'cypress/support/e2e.js',
		stepDefinitions: 'cypress/support/step_definitions/**/*.js',
	},
})
