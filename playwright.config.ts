import { defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/recorded.test.ts', // <-- glob works for all subfolders
  projects: [
    //Config to run cross Browser Testing in LambdaTest
    //  {
    //   name: "chrome:latest:MacOS Ventura@lambdatest",
    //   use: {
    //     viewport: { width: 1920, height: 1080 },
    //   },
    // },
    //Config to run cross Browser Testing in Local
    {
      name: 'Chrome',
      use: {
          ...devices['Desktop Chrome'],
          channel: 'chrome',
      }
    },
    {
      name: 'Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      }
    },
  ],
  use: {
    headless: false,
    screenshot: 'off',
    video: 'off',
  },
  reporter: [['html', { open: 'never' }]],
});