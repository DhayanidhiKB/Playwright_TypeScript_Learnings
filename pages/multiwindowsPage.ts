let facebookPage: Page;
import { expect, Page, test } from "@playwright/test";
const baseURL = "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo";

export default class MultiWindowsPage {
    constructor(public page: Page) { }

    async openNewTab() {
        await this.page.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 50000 });

        const [multiPage] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click("#followboth")
        ])
        await multiPage.waitForLoadState();

        const pages = multiPage.context().pages();
        console.log('No.of tabs: ' + pages.length);

        pages.forEach(tab => {
            console.log(tab.url());
        })

        for (let index = 0; index < pages.length; index++) {
            const url = pages[index].url()
            if (url == "https://www.facebook.com/lambdatest/") {
                facebookPage = pages[index];
            }
        }
        const text = await facebookPage.textContent("//h1")
        console.log(text);
    }

}