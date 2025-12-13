import { Page, expect } from "@playwright/test";
const baseURL = "https://www.lambdatest.com/selenium-playground/select-dropdown-demo";
export default class HandlingDropdownsPage {

    constructor(public page: Page) { }

    async navigateToDropdownPage() {
        await this.page.goto(baseURL);
    }

    async singleSelectDropdown() {
        await this.page.selectOption("#select-demo",
            { label: "Friday" }); //you can also use value or Index  value: "Friday"  or index: 5

        // Verify the selection
        const selectedValue = await this.page.locator("#select-demo").inputValue();
        expect(selectedValue).toBe("Friday");

    }

    async multiSelectDropdown() {
        await this.page.selectOption("#multi-select", [
            { label: "Texas" },
            { index: 2 },
            { value: "Washington" }
        ]);
    }

}


