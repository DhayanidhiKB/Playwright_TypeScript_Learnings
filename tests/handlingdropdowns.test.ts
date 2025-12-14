import test from "../lambdatest-setup";
import HandlingDropdownsPage from "../pages/handlingdropdownsPage";

test("handledropdowns", async ({ page }) => {
  test.setTimeout(50000);
  const handlingDropdownsPage = new HandlingDropdownsPage(page);
  await handlingDropdownsPage.navigateToDropdownPage();
  await handlingDropdownsPage.singleSelectDropdown();
});

test("handleMultiSelectdropdowns", async ({ page }) => {
  test.setTimeout(50000);
  const handlingDropdownsPage = new HandlingDropdownsPage(page);
  await handlingDropdownsPage.navigateToDropdownPage();
  await handlingDropdownsPage.multiSelectDropdown();
});