import { test, expect } from "@playwright/test"

test("login test demo", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/", { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    // Wait for the element to be visible before hovering
    await page.waitForSelector("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]", { timeout: 10000 });
    await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]");
    
    // Wait a bit for dropdown to appear
    await page.waitForTimeout(500);
    
    // Use a more reliable selector for Login button
    await page.click("text=Login");
    await page.waitForTimeout(5000);
    await page.fill("input[name='email']", "px18@gmail.com")
    await page.waitForTimeout(5000);
    await page.fill("input[name='password']", "Px@12345")
    await page.waitForTimeout(5000);
    await page.click("//input[@type='submit']")
    await page.waitForTimeout(5000);

    await page.waitForTimeout(5000);
})