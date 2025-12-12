import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto("https://ecommerce-playground.lambdatest.io/", { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]", { timeout: 10000 });
  await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]");
  
  // Wait for dropdown to appear
  await page.waitForTimeout(500);
  
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('praveendhaya98@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Praveen2@@');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByRole('textbox', { name: 'Last Name*' }).click();
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('Xavier');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForSelector("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]", { timeout: 10000 });
  await page.hover("//a[@role='button']//span[contains(text(),'My account')]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
  });
