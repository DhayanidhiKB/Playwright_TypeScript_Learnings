import { Page, expect } from "@playwright/test";
const baseURL = "https://lambdatest.com/selenium-playground/";

export default class BasicInteractions {

    constructor(public page: Page) { }

    async validateUserMessagePlaceholder() {
        await this.page.goto(baseURL+"simple-form-demo", { waitUntil: 'domcontentloaded', timeout: 50000 });
        const messageInput = this.page.locator("//input[@id='user-message']");
        await messageInput.scrollIntoViewIfNeeded();
        await expect(messageInput).toHaveAttribute('placeholder', 'Please enter your Message');
        console.log("Before Entering data :" + await messageInput.inputValue());
        await messageInput.fill("Hello, This is a test message!");
        console.log("After Entering data :" + await messageInput.inputValue());
    }

    async sumTwoNumbers() {
        await this.page.goto(baseURL+"simple-form-demo", { waitUntil: 'domcontentloaded', timeout: 50000 });
        const firstNumberInput = this.page.locator("//input[@id='sum1']");
        const secondNumberInput = this.page.locator("//input[@id='sum2']");
        await firstNumberInput.scrollIntoViewIfNeeded();
        await firstNumberInput.fill("10");
        await secondNumberInput.fill("20");
        await this.page.waitForTimeout(500);

        await this.page.click("//button[normalize-space(text())='Get Sum']");

        await this.page.waitForTimeout(500);
        const resultText = this.page.locator("//div[@id='user-message']//p[@id='addmessage']");
        await expect(resultText).toHaveText("30", { timeout: 10000 });
    }

    async checboxDemo() {
        await this.page.goto(baseURL + "checkbox-demo", { waitUntil: 'domcontentloaded', timeout: 50000 });
        const singleCheckbox = this.page.locator("//label[normalize-space()='Click on check box']//input");
        await singleCheckbox.scrollIntoViewIfNeeded();
        await singleCheckbox.check();
        const successMessage = this.page.locator("//p[contains(text(),'Checked')]");
        await expect(successMessage).toHaveText("Checked!");
    }
}