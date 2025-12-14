import { test } from "@playwright/test";
import Alerts from "../pages/alerts";

let alertsPage: Alerts; // declare variable outside tests   

test.beforeEach(async ({ page }) => {
  test.setTimeout(50000);
  alertsPage = new Alerts(page); // initialize before each test
});


test("handling alerts", async ({ page }) => {
    await alertsPage.handleJSAlert();
})

test("Modal alert", async ({ page }) => {
    await alertsPage.handleModalAlert();
})