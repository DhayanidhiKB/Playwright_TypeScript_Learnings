import { expect, test } from "@playwright/test";
import BasicInteractions from "../pages/basicinteractions";

let basicInteractions: BasicInteractions; // declare variable outside tests

test.beforeEach(async ({ page }) => {
    basicInteractions = new BasicInteractions(page); // initialize before each test
});

test.describe.configure({ mode: 'parallel' });

test("basicinteractions", async ({ page }) => {
    await basicInteractions.validateUserMessagePlaceholder();
})

test("sum", async ({ page }) => {
    await basicInteractions.sumTwoNumbers();
})

test("checkbox demo", async ({ page }) => {
    await basicInteractions.checboxDemo();
})

