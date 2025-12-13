import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import RecordedTest from '../pages/recordedtest';

let loginPage: LoginPage; // declare variable outside tests
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page); // initialize before each test
});

let recordedtest: RecordedTest; // declare variable outside tests
test.beforeEach(async ({ page }) => {
  recordedtest = new RecordedTest(page); // initialize before each test
});

test('test', async ({ page }) => {
  await loginPage.myAccount();
  await recordedtest.loginAndEditAccount();
});
