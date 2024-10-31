import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //trufflehog token test
    env: {
      TRUFFLEHOG_FAKE_TOKEN: "ghp_12345abcdeFGHIJK67890LMNOPQrstuv9999",
    }
  },
});
