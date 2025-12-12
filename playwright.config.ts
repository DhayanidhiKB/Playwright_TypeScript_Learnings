import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/recorded.test.ts', // <-- glob works for all subfolders
  use: {
    headless: false,
    screenshot: 'off',
    video: 'off',
  },
  reporter: [['html', { open: 'never' }]],
});
