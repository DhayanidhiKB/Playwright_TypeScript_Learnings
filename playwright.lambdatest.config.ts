import baseConfig from "./playwright.config";
import { defineConfig } from "@playwright/test";

export default defineConfig({
  ...baseConfig,
   timeout: 120000, // 2 minutes per test
  expect: {
    timeout: 10000, // default expect timeout
  },
  projects: baseConfig.projects?.filter(project =>
    project.name && project.name.includes("@lambdatest")
  ),
   use: {
    ...baseConfig.use,
    headless: true, // CI-friendly
    screenshot: "off",
    video: "off",
  },
});
