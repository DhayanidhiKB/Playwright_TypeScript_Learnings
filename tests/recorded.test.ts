import { test } from "@playwright/test";
import LoginPage from '../pages/loginPage';
import RecordedTest from '../pages/recordedtest';

let loginPage: LoginPage;
let recordedtest: RecordedTest; // declare variable outside tests

test.beforeEach(async ({ page }) => {
  test.setTimeout(50000);
  loginPage = new LoginPage(page); 
  recordedtest = new RecordedTest(page);// initialize before each test
});

test('test', async ({ page }) => {
  await loginPage.myAccount();
  await recordedtest.loginAndEditAccount();
});
