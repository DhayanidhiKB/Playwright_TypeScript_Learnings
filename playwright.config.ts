import { defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/handlingdropdowns.test.ts', // <-- glob works for all subfolders
  projects: [
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