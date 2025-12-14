import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";

test("loginTest", async ({ page }) => {
    test.setTimeout(50000);
    const loginPage = new LoginPage(page);
    await loginPage.myAccount();
    await loginPage.clickLoginButton();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.submitLogin();
})