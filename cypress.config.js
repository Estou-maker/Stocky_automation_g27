const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  env:{
    USER_EMAIL: 'employee1',
    USER_PASSWORD: '123',
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      return on ('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.feature'
  },
});
