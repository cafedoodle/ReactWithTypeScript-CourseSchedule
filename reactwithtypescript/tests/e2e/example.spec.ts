import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/reactwithtypescript/);
});

// test("user navigates to Info page from home", async ({ page }) => {
//   await page.goto("/"); // baseURL is set in config

//   // Click the "Info" link
//   await page.getByRole("link", { name: "Info" }).click();

//   // Assert that "Info Page" is now visible
//   await expect(page.getByText("Info Page")).toBeVisible();
//   // Assert that the heading is present
//   await expect(page.getByRole("heading", { name: "Info Page" })).toBeVisible();
// });

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
