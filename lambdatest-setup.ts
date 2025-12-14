/**
 * LambdaTest Playwright Setup
 * Import `test` from this file in your test files to run tests on LambdaTest only.
 */

import * as base from "@playwright/test";
import path from "path";
import { chromium } from "playwright";

// LambdaTest capabilities template
const capabilities = {
  browserName: "Chrome", // Allowed: Chrome, MicrosoftEdge, pw-chromium, pw-firefox, pw-webkit
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "PlaywrightTypeScript_SpecificTest_Execution",
    name: "Playwright Test",
    user: "dayanidhipraveen44",
    accessKey: "LT_cZMmL167m49pc5QT7EDfqe9OC2bk7AZ58qquyW6BllP7PmI",
    network: true,
    video: true,
    console: true,
    tunnel: false,
    tunnelName: "",
    geoLocation: "",
  },
};

// Dynamically patch capabilities based on the project name
const modifyCapabilities = (configName: string, testName: string) => {
  const config = configName.split("@lambdatest")[0];
  const [browserName, browserVersion, platform] = config.split(":");
  capabilities.browserName = browserName || capabilities.browserName;
  capabilities.browserVersion = browserVersion || capabilities.browserVersion;
  capabilities["LT:Options"]["platform"] = platform || capabilities["LT:Options"]["platform"];
  capabilities["LT:Options"]["name"] = testName;
};

// LambdaTest-only test extension
const test = base.test.extend({
  page: async ({ page }, use, testInfo) => {
    const projectName = testInfo.project.name;

    // Ensure this test runs only under a LambdaTest project
    if (!projectName?.includes("@lambdatest")) {
      throw new Error(
        `This test must be run using a LambdaTest project. Current project: ${projectName}`
      );
    }

    // Get file name for reporting
    const fileName = testInfo.file.split(path.sep).pop();

    // Modify capabilities dynamically based on project
    modifyCapabilities(projectName, `${testInfo.title} - ${fileName}`);

    // Connect to LambdaTest Playwright endpoint
    const browser = await chromium.connect(
      `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify(capabilities)
      )}`,
    );

    // Open new page in LambdaTest browser
    const ltPage = await browser.newPage();

    // Use LambdaTest page for test execution
    await use(ltPage);

    // Set test status on LambdaTest dashboard
    const testStatus = {
      action: "setTestStatus",
      arguments: {
        status: testInfo.status,
        remark: testInfo.error?.stack || testInfo.error?.message,
      },
    };
    await ltPage.evaluate(() => {}, `lambdatest_action: ${JSON.stringify(testStatus)}`);

    // Close page and browser after test
    await ltPage.close();
    await browser.close();
  },
});

export default test;
