const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio:true,                      //Record And Play function
    watchForFileChanges:false,                  //For reloading automatiocally
    reporter:'cypress-mochawesome-reporter',    //For mocha freamwork report generation
    video : true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);   //mocha freamwork
    },
    
  },
});
