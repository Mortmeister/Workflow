import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("User can navigate from home to a venue details page", async ({
    page,
  }) => {
    await page.goto("/");

    const venues = page.locator("#venue-container a");
    await expect(venues.first()).toBeVisible();

    await venues.first().click();

    const heading = page.locator("h1");
    await expect(heading).toHaveText(/venue details/i, { timeout: 1000 });
    await expect(heading).toBeVisible();
  });
});
