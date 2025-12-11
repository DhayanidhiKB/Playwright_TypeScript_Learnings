import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/basicinteractions.spec.ts',
  use: {
    headless: false,
    screenshot: 'on',
    video: 'on',
  },
  reporter: [['html', { open: 'never' }]],
});