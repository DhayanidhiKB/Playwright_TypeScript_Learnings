let facebookPage: Page;
import { expect, Page, test } from "@playwright/test";
import MultiWindowsPage from "../pages/multiwindowsPage";

test("Interact with multiple tabs", async ({ page }) => {
    const multiWindowsPage = new MultiWindowsPage(page);
    await multiWindowsPage.openNewTab();
})