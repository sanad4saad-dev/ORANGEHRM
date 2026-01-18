const { defineConfig } = require("cypress");

module.exports = defineConfig({

  vifeo:true, // for recording videos of test runs

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    testIsolation: false //integration
  },
});
