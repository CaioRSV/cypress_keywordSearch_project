const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      INVERTEXTO_URL: "https://www.invertexto.com/crsvsti",
      GOOGLE_URL: "https://www.google.com/",
      YOUTUBE_URL: "https://www.youtube.com/",
      PINTEREST_URL: "https://br.pinterest.com/"
    },
  },
});
