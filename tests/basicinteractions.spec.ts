import { expect, test } from "@playwright/test";

test.describe.configure({ mode: 'parallel' });

test("basicinteractions", async ({ page }) => {
    await page.goto("https://lambdatest.com/selenium-playground/simple-form-demo", { waitUntil: 'domcontentloaded', timeout: 60000 });
    const messageInput=page.locator("//input[@id='user-message']");
    await messageInput.scrollIntoViewIfNeeded();
    await expect(messageInput).toHaveAttribute('placeholder','Please enter your Message');
    console.log("Before Entering data :" + await messageInput.inputValue());
    await messageInput.fill("Hello, This is a test message!");
    console.log("After Entering data :" + await messageInput.inputValue());
})

test("sum",async({page})=>{
    await page.goto("https://lambdatest.com/selenium-playground/simple-form-demo", { waitUntil: 'domcontentloaded', timeout: 60000 });
    const firstNumberInput=page.locator("//input[@id='sum1']");
    const secondNumberInput=page.locator("//input[@id='sum2']");
    await firstNumberInput.scrollIntoViewIfNeeded();
    await firstNumberInput.fill("10");
    await secondNumberInput.fill("20");
    await page.waitForTimeout(500);
    
    await page.click("//button[normalize-space(text())='Get Sum']");

    await page.waitForTimeout(500);
    const resultText = page.locator("//div[@id='user-message']//p[@id='addmessage']");
    await expect(resultText).toHaveText("30", { timeout: 10000 });
})

test("checkbox demo",async({page})=>{
    await page.goto("https://lambdatest.com/selenium-playground/checkbox-demo", { waitUntil: 'domcontentloaded', timeout: 60000 });
    const singleCheckbox=page.locator("//input[@id='isAgeSelected']");
    await singleCheckbox.scrollIntoViewIfNeeded();
    await singleCheckbox.check();
    const successMessage=page.locator("//div[@id='txtAge']");
    await expect(successMessage).toHaveText("Success - Check box is checked");
})

