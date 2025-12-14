import BasicInteractions from "../pages/basicinteractions";
import test from "../lambdatest-setup";


let basicInteractions: BasicInteractions; // declare variable outside tests

test.beforeEach(async ({ page }) => {
    test.setTimeout(50000);
    basicInteractions = new BasicInteractions(page); // initialize before each test
});

test.describe.configure({ mode: 'parallel' });

test("basicinteractions", async ({ page }) => {
    test.setTimeout(50000);
    await basicInteractions.validateUserMessagePlaceholder();
})

test("sum", async ({ page }) => {
    test.setTimeout(50000);
    await basicInteractions.sumTwoNumbers();
})

test("checkbox demo", async ({ page }) => {
    test.setTimeout(50000);
    await basicInteractions.checboxDemo();
})

