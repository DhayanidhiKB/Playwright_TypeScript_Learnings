import { defineConfig } from '@playwright/test';
import { on } from 'events';

export default defineConfig({
  testDir: './tests',

  // testMatch is evaluated relative to the `testDir` when `testDir` is set.
  // Use a pattern that matches the file name inside `./tests` only.

  testMatch: 'recordedtest.ts',
  use: {
    headless: false,
    screenshot:"on",
    video:"on"
  },
  reporter: [['html', { open: 'never' }]],
});

