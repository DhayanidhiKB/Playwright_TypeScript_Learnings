import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  //testMatch: '**/handlingdropdowns.test.ts',
  use: {
    headless: false,
    screenshot: 'off',
    video: 'off',
  },
  reporter: [['html', { open: 'never' }]],
});