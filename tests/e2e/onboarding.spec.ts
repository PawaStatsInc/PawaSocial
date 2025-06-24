import { test, expect } from "@playwright/test"

test.describe("Onboarding Flow", () => {
  test("should complete social account connection", async ({ page }) => {
    // Mock authentication
    await page.goto("/onboarding/connect")

    await expect(page.locator("h1")).toContainText("Connect Your Social Accounts")

    // Should show all social platforms
    await expect(page.locator("text=Facebook")).toBeVisible()
    await expect(page.locator("text=Instagram")).toBeVisible()
    await expect(page.locator("text=Twitter/X")).toBeVisible()
    await expect(page.locator("text=LinkedIn")).toBeVisible()

    // Proceed button should be disabled initially
    await expect(page.locator("text=Proceed to Dashboard")).toBeDisabled()

    // Connect a social account
    await page.click("text=Connect Facebook")

    // Should show connected state
    await expect(page.locator("text=Connected")).toBeVisible()

    // Proceed button should be enabled
    await expect(page.locator("text=Proceed to Dashboard")).toBeEnabled()
  })
})
