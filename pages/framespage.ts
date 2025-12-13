import { Page } from "@playwright/test";
const baseURL = "https://letcode.in/frame"
export default class FramesPage {

    constructor(public page: Page) { }

    async baseURL(){
        await this.page.goto(baseURL);
    }

    async interactWithFrames() {
        const allframes = this.page.frames();
        console.log("No.of frames: " + allframes.length);

        //Switch to frame using frameLocator
        const frame = this.page.frameLocator("#firstFr")
        await frame.locator("input[name='fname']").fill("Praveen");
        await frame.locator("input[name='lname']").fill("Dhaya");

        //Inside Nested frame
        const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
        await innerFrame.locator("input[name='email']").fill("praveen@gmail.com")
        await frame.locator("input[name='fname']").fill("letcode");//switching to parent frame


    }
}
