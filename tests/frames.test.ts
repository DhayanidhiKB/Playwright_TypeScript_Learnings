import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);

    //Switch to frame using frameLocator
    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Praveen");
    await frame.locator("input[name='lname']").fill("Dhaya");

    //Inside Nested frame
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("praveen@gmail.com")
    await frame.locator("input[name='fname']").fill("letcode");//switching to parent frame

})

test("Interact with frames - 2nd way", async ({ page }) => {
    const myFrame = page.frame("firstFr")

    //if null function is not there in playwright then code will be
    // if (myFrame != null) {
    //     await myFrame.fill("", "")
    // }
    await page.goto("https://letcode.in/frame");
    await myFrame?.fill("input[name='fname']", "Praveen") //?.null function if frame is not null then it will do the action
    await myFrame?.fill("input[name='lname']", "Dhaya")

    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")
    await page.waitForTimeout(3000);
})


