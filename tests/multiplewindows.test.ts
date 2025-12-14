let facebookPage: Page;
import test from "../lambdatest-setup";
import { expect, Page} from "@playwright/test";
import MultiWindowsPage from "../pages/multiwindowsPage";

test("Interact with multiple tabs", async ({ page }) => {
    test.setTimeout(50000);
    const multiWindowsPage = new MultiWindowsPage(page);
    await multiWindowsPage.openNewTab();
})