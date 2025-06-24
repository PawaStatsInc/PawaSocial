import { test, expect } from "@playwright/test"

test.describe("Authentication Flow", () => {
  test("should display sign in page", async ({ page }) => {
    await page.goto("/auth/signin")

    await expect(page.locator("h1")).toContainText("Welcome back")
    await expect(page.locator("text=Continue with Microsoft")).toBeVisible()
    await expect(page.locator("text=Continue with Google")).toBeVisible()
    await expect(page.locator("text=Demo Login")).toBeVisible()
  })

  test("should handle demo login flow", async ({ page }) => {
    await page.goto("/auth/signin")

    // Click demo login
    await page.click("text=Demo Login")

    // Should redirect to dashboard
    await expect(page).toHaveURL("/dashboard")

    // Should show demo user indicator
    await expect(page.locator("text=Demo")).toBeVisible()
  })

  test("should redirect unauthenticated users to signin", async ({ page }) => {
    await page.goto("/dashboard")

    // Should redirect to sign in page
    await expect(page).toHaveURL("/auth/signin")
  })
})
