import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { platform, accessToken, refreshToken, platformId, username, expiresAt } = await request.json()

    const connectedAccount = await prisma.connectedAccount.create({
      data: {
        userId: session.user.id,
        platform,
        platformId,
        username,
        accessToken,
        refreshToken,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
        isActive: true,
      },
    })

    // Update user onboarding status if this is their first connected account
    const userConnectedAccounts = await prisma.connectedAccount.count({
      where: { userId: session.user.id, isActive: true },
    })

    if (userConnectedAccounts === 1) {
      await prisma.user.update({
        where: { id: session.user.id },
        data: { onboardingCompleted: true },
      })
    }

    return NextResponse.json({
      success: true,
      account: {
        id: connectedAccount.id,
        platform: connectedAccount.platform,
        username: connectedAccount.username,
      },
    })
  } catch (error) {
    console.error("Social connect error:", error)
    return NextResponse.json({ error: "Failed to connect social account" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const connectedAccounts = await prisma.connectedAccount.findMany({
      where: { userId: session.user.id, isActive: true },
      select: {
        id: true,
        platform: true,
        username: true,
        createdAt: true,
      },
    })

    return NextResponse.json({ accounts: connectedAccounts })
  } catch (error) {
    console.error("Get connected accounts error:", error)
    return NextResponse.json({ error: "Failed to fetch connected accounts" }, { status: 500 })
  }
}
