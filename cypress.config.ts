import { defineConfig } from "cypress";
import { verifyDownloadTasks } from "cy-verify-downloads"; // verify download

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      on("task", verifyDownloadTasks); // verify download
    },
    env: {
      theInternet: "https://the-internet.herokuapp.com/",
      webDriverUniversity: "https://webdriveruniversity.com/",
      qaPractice: "https://qa-practice.netlify.app/",
      demoQA: "https://demoqa.com/",
      kitchen: "https://example.cypress.io/",
      hideXhr: true,
    },
  },

  // add global screen size
  // viewportHeight: 1000,
  // viewportWidth: 1400,
});
