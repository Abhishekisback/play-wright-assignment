import { test, expect } from "@playwright/test";

test("User Journey & PDP Validation", async ({ page }) => {
  // Step 1: Login
  await page.goto("/");
  await page.fill('[data-test="username"]', process.env.USER_NAME || "");
  await page.fill('[data-test="password"]', process.env.PASSWORD || "");
  await page.click('[data-test="login-button"]');
  // Step 2: Click on product image for Sauce Labs Backpack
  await page
    .locator(".inventory_item")
    .filter({ hasText: "Sauce Labs Backpack" })
    .locator(".inventory_item_name")
    .click();

  // Step 3: Verify PDP title
  await expect(page.locator(".inventory_details_name")).toHaveText(
    "Sauce Labs Backpack"
  );

  // Step 4: Validate Add to Cart button
  const addToCartBtn = page.locator('[data-test="add-to-cart"]');
  await expect(addToCartBtn).toBeVisible();
  await expect(addToCartBtn).toBeEnabled();
});
