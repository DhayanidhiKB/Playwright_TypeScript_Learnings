import { Page, expect } from '@playwright/test';
import * as appValues from '../test-data/appvalues.json';
export default class Alerts {

    constructor(public page: Page) { }

    async handleJSAlert() {
        const JSAlertURL = "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo";
        await this.page.goto(JSAlertURL);
        this.page.on("dialog", async (alert) => {
            const text = alert.defaultValue();
            console.log(text);
            await alert.accept(appValues.firstName);
        })
        await this.page.locator("button:has-text('Click Me')").nth(2).click();
        expect(this.page.locator("id=prompt-demo")).toContainText("'" + appValues.firstName + "'");
    }

    async handleModalAlert() {
        const ModalAlertURL = "https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo";
        await this.page.goto(ModalAlertURL)
        await this.page.click("//button[@data-target='#myModal']")
        await this.page.click("(//button[text()='Save Changes'])[1]")
    }
}
