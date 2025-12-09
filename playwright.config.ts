import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.ts',
  use: {
    headless: false,
  },
});

