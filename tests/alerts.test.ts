import { expect, test } from "@playwright/test";
import Alerts from "../pages/alerts";

let alertsPage: Alerts; // declare variable outside tests   

test.beforeEach(async ({ page }) => {
  alertsPage = new Alerts(page); // initialize before each test
});


test("handling alerts", async ({ page }) => {
    await alertsPage.handleJSAlert();
})

test("Modal alert", async ({ page }) => {
    await alertsPage.handleModalAlert();
})