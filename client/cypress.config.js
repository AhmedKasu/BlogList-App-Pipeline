const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'xbu615',
  e2e: {
    defaultCommandTimeout: 15000,
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
