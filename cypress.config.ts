import { defineConfig } from "cypress";

export default defineConfig({
  env: { ...process.env },
  e2e: {
    baseUrl: "https://churras-plum.vercel.app/",

    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {},
  },
});
