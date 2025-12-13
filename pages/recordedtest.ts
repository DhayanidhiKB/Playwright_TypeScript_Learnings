import { Page } from "@playwright/test";

export default class RecordedTest {

    constructor(public page: Page) { }

    async loginAndEditAccount() {

        await this.page.getByRole('link', { name: 'Login' }).click();
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).click();
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill('praveendhaya98@gmail.com');
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill('Praveen2@@');
        await this.page.getByRole('button', { name: 'Login' }).click();
        await this.page.getByRole('link', { name: ' Edit your account' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name*' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name*' }).fill('Xavier');
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForSelector("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]", { timeout: 10000 });
        await this.page.hover("//a[@role='button']//span[contains(text(),'My account')]");
        await this.page.getByRole('link', { name: 'Logout', exact: true }).click();

    }
}