import { test, expect } from "@playwright/test"
import LoginPage from "../pages/loginPage";

test("loginTest", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.myAccount();
    await loginPage.clickLoginButton();
    await loginPage.enterEmail("px18@gmail.com");
    await loginPage.enterPassword("Px@12345");
    await loginPage.submitLogin();
})