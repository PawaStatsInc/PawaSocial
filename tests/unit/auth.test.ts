import { authOptions } from "@/lib/auth"

describe("Auth Configuration", () => {
  it("should have required providers configured", () => {
    expect(authOptions.providers).toBeDefined()
    expect(authOptions.providers.length).toBeGreaterThan(0)

    const providerIds = authOptions.providers.map((p) => p.id)
    expect(providerIds).toContain("azure-ad")
    expect(providerIds).toContain("google")
  })

  it("should have proper callback configuration", () => {
    expect(authOptions.callbacks).toBeDefined()
    expect(authOptions.callbacks?.session).toBeDefined()
    expect(authOptions.callbacks?.jwt).toBeDefined()
  })

  it("should have custom pages configured", () => {
    expect(authOptions.pages).toBeDefined()
    expect(authOptions.pages?.signIn).toBe("/auth/signin")
  })
})
