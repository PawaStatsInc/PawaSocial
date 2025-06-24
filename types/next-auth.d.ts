declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      isDemo?: boolean
      onboardingCompleted?: boolean
    }
  }

  interface User {
    id: string
    isDemo?: boolean
    onboardingCompleted?: boolean
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    isDemo?: boolean
    onboardingCompleted?: boolean
  }
}
