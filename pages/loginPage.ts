import { Page } from '@playwright/test';
import * as appValues from '../test-data/appvalues.json';
const loginURL = "https://ecommerce-playground.lambdatest.io/index.php?";
export default class LoginPage{
    
    constructor(public page: Page){}

    async myAccount(){
            await this.page.goto(loginURL, { waitUntil: 'domcontentloaded', timeout: 50000 });
            await this.page.waitForSelector("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]", { timeout: 10000 });
            await this.page.hover("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]");
            await this.page.waitForTimeout(500);
    }
    
    async clickLoginButton(){
        await this.page.click("text=Login");
    }

    async enterEmail(){
        await this.page.fill("input[name='email']", appValues.email);
    }

    async enterPassword(){
        await this.page.fill("input[name='password']", appValues.password);
    }

    async submitLogin(){
        await Promise.all([this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 }),  
        await this.page.click("//input[@type='submit']")
        ]);
    }
}