import { test, expect } from "@playwright/test";

test.describe("Login flow", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);
    await page.click('button[type="submit"]');

    await page.waitForSelector("text=Logout");
    const logoutText = await page.textContent("text=Logout");
    expect(logoutText).toContain("Logout");
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("wrongpassword");
    await page.click('button[type="submit"]');

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
