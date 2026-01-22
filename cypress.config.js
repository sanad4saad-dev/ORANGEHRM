const { defineConfig } = require("cypress");
const { report } = require("process");

module.exports = defineConfig({
projectId: "j6t6z5", // your Cypress project ID



  video:true, // for recording videos of test runs
  reporter: "mochawesome", // specify the reporter
  reporterOptions: {
    reportDir: "cypress/reports", // directory to save reports
    overwrite: true, // do not overwrite existing reports
    html: true, // generate HTML report
    json: false // generate JSON report
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    testIsolation: false //integration
  },
});
