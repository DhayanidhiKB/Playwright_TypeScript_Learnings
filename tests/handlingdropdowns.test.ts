import { test, expect } from "@playwright/test"

test("handledropdowns", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo", { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Select the dropdown option
  await page.selectOption("#select-demo", 
    { label: "Friday" }); //you can also use value or Index  value: "Friday"  or index: 5
  
  // Verify the selection
  const selectedValue = await page.locator("#select-demo").inputValue();
  expect(selectedValue).toBe("Friday");
  
  console.log("Selected:", selectedValue);
});

test("handleMultiSelectdropdowns", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo", { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Select the dropdown option
  await page.selectOption("#multi-select", [
    { label: "Texas" },
    { index: 2 },
    { value: "Washington" }
  ]);
});

test("Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

   async function selectBootstrapOption(optionText: string) {
       await page.click("span.select2 span[role='combobox']");
       await page.locator(".select2-results__option")
           .locator("li", { hasText: optionText })
           .click();
   }
   await page.goto(
       "https://www.lambdatest.com/selenium-playground/bootstrap-dropdown-demo",
       { waitUntil: 'domcontentloaded', timeout: 60000 }
   );

   await selectBootstrapOption("India");
   await selectBootstrapOption("Denmark");

});
