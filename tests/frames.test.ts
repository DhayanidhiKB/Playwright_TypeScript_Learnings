import { test } from "@playwright/test";
import FramesPage from "../pages/framespage";

test("Interact with frames", async ({ page }) => {
    test.setTimeout(50000);
    const framesPage = new FramesPage(page);
    await framesPage.baseURL();
    await framesPage.interactWithFrames();
})

