import { test, expect } from "@playwright/test"

import HandlingDropdownsPage from "../pages/handlingdropdownsPage";

test("handledropdowns", async ({ page }) => {
  const handlingDropdownsPage = new HandlingDropdownsPage(page);
  await handlingDropdownsPage.navigateToDropdownPage();
  await handlingDropdownsPage.singleSelectDropdown();
});

test("handleMultiSelectdropdowns", async ({ page }) => {
  const handlingDropdownsPage = new HandlingDropdownsPage(page);
  await handlingDropdownsPage.navigateToDropdownPage();
  await handlingDropdownsPage.multiSelectDropdown();
});


