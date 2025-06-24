import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    // Create or get demo user
    const demoUser = await prisma.user.upsert({
      where: { email: "demo@pawasocial.com" },
      update: {},
      create: {
        email: "demo@pawasocial.com",
        name: "Demo User",
        isDemo: true,
        onboardingCompleted: true,
        company: "Demo Company",
        role: "Marketing Manager",
      },
    })

    // Create demo connected accounts
    const platforms = ["facebook", "twitter", "instagram", "linkedin"]

    for (const platform of platforms) {
      await prisma.connectedAccount.upsert({
        where: {
          userId_platform_platformId: {
            userId: demoUser.id,
            platform,
            platformId: `demo_${platform}_id`,
          },
        },
        update: {},
        create: {
          userId: demoUser.id,
          platform,
          platformId: `demo_${platform}_id`,
          username: `demo_${platform}`,
          accessToken: `demo_token_${platform}`,
          isActive: true,
        },
      })
    }

    return NextResponse.json({
      success: true,
      user: {
        id: demoUser.id,
        email: demoUser.email,
        name: demoUser.name,
        isDemo: true,
      },
    })
  } catch (error) {
    console.error("Demo login error:", error)
    return NextResponse.json({ error: "Failed to create demo session" }, { status: 500 })
  }
}
