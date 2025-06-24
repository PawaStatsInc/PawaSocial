"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, ExternalLink, ArrowRight } from "lucide-react"
import Head from "next/head"

interface ConnectedAccount {
  id: string
  platform: string
  username: string
  createdAt: string
}

const socialPlatforms = [
  {
    id: "facebook",
    name: "Facebook",
    description: "Connect your Facebook pages and profiles",
    color: "bg-blue-600",
    icon: "📘",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Manage your Instagram business account",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    icon: "📷",
  },
  {
    id: "twitter",
    name: "Twitter/X",
    description: "Connect your Twitter account",
    color: "bg-black",
    icon: "🐦",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Connect your LinkedIn profile or company page",
    color: "bg-blue-700",
    icon: "💼",
  },
]

export default function ConnectAccountsPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([])
  const [isLoading, setIsLoading] = useState<string | null>(null)

  useEffect(() => {
    fetchConnectedAccounts()
  }, [])

  const fetchConnectedAccounts = async () => {
    try {
      const response = await fetch("/api/social/connect")
      if (response.ok) {
        const data = await response.json()
        setConnectedAccounts(data.accounts)
      }
    } catch (error) {
      console.error("Failed to fetch connected accounts:", error)
    }
  }

  const handleConnect = async (platform: string) => {
    setIsLoading(platform)

    try {
      // In a real implementation, this would redirect to OAuth flow
      // For demo purposes, we'll simulate the connection
      const mockConnection = {
        platform,
        accessToken: `mock_token_${platform}`,
        platformId: `mock_id_${platform}`,
        username: `demo_${platform}`,
        expiresAt: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
      }

      const response = await fetch("/api/social/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mockConnection),
      })

      if (response.ok) {
        await fetchConnectedAccounts()
      }
    } catch (error) {
      console.error(`Failed to connect ${platform}:`, error)
    } finally {
      setIsLoading(null)
    }
  }

  const handleProceedToDashboard = () => {
    router.push("/dashboard")
  }

  const isConnected = (platformId: string) => {
    return connectedAccounts.some((account) => account.platform === platformId)
  }

  const canProceed = connectedAccounts.length > 0
  const progress = (connectedAccounts.length / socialPlatforms.length) * 100

  return (
    <>
      <Head>
        <title>Connect Social Accounts - PawaSocial</title>
        <meta name="description" content="Connect your social media accounts to get started with PawaSocial" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">P</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Connect Your Social Accounts</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Link at least one social media account to start managing your presence with PawaSocial
              </p>
            </div>

            {/* Progress */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">Setup Progress</h3>
                    <p className="text-sm text-slate-600">
                      {connectedAccounts.length} of {socialPlatforms.length} accounts connected
                    </p>
                  </div>
                  <Badge variant={canProceed ? "default" : "secondary"}>{Math.round(progress)}% Complete</Badge>
                </div>
                <Progress value={progress} className="h-2" />
              </CardContent>
            </Card>

            {/* Social Platforms */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {socialPlatforms.map((platform) => {
                const connected = isConnected(platform.id)
                const loading = isLoading === platform.id

                return (
                  <motion.div
                    key={platform.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card
                      className={`transition-all hover:shadow-lg ${connected ? "ring-2 ring-green-500 bg-green-50/30" : ""}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center text-white text-xl`}
                            >
                              {platform.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900">{platform.name}</h3>
                              <p className="text-sm text-slate-600">{platform.description}</p>
                            </div>
                          </div>
                          {connected ? (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          ) : (
                            <Circle className="w-6 h-6 text-slate-300" />
                          )}
                        </div>

                        {connected ? (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-green-800">Connected</p>
                                <p className="text-xs text-green-600">
                                  @{connectedAccounts.find((acc) => acc.platform === platform.id)?.username}
                                </p>
                              </div>
                              <Badge variant="outline" className="border-green-200 text-green-700">
                                Active
                              </Badge>
                            </div>
                          </div>
                        ) : (
                          <Button
                            onClick={() => handleConnect(platform.id)}
                            disabled={loading}
                            className="w-full"
                            variant="outline"
                          >
                            {loading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin mr-2" />
                                Connecting...
                              </>
                            ) : (
                              <>
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Connect {platform.name}
                              </>
                            )}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Continue Button */}
            <div className="text-center">
              <Button
                onClick={handleProceedToDashboard}
                disabled={!canProceed}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
              >
                Proceed to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {!canProceed && (
                <p className="text-sm text-slate-500 mt-3">Connect at least one social account to continue</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
