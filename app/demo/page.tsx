"use client"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, User, Lock } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import { useState } from "react"

export default function DemoPage() {
  const router = useRouter()
  const { signInDemo } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")

  const handleDemoLogin = async () => {
    try {
      await signInDemo()
      // Stay on the demo page to show the full interactive experience
      setActiveTab("overview")
    } catch (error) {
      console.error("Demo login error:", error)
    }
  }

  return (
    <>
      <Head>
        <title>Demo - PawaSocial | Try Our Platform</title>
        <meta
          name="description"
          content="Experience PawaSocial's powerful social media management features with our interactive demo. No signup required."
        />
        <meta name="keywords" content="demo, try platform, social media demo, interactive demo" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-slate-900">PawaSocial</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/signin">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl"
          >
            <div className="text-center mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 mb-4">
                <Play className="w-3 h-3 mr-1" />
                Interactive Demo
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Experience PawaSocial
                <span className="text-blue-600"> In Action</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore our full-featured social media management platform with sample data. No signup required - jump
                right in and see what PawaSocial can do for your team.
              </p>
            </div>

            <Card className="shadow-xl border-0 mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Demo Account Access</CardTitle>
                <CardDescription>Pre-configured with sample data to showcase all features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Demo Credentials
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Email:</span>
                      <div className="font-mono bg-white p-2 rounded border mt-1">demo@pawasocial.com</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Password:</span>
                      <div className="font-mono bg-white p-2 rounded border mt-1">demo123</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-4">What You'll Experience:</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• Complete social media dashboard with real-time metrics</li>
                    <li>• AI-powered content generation in multiple languages</li>
                    <li>• Unified inbox with sample conversations</li>
                    <li>• Advanced analytics and campaign tracking</li>
                    <li>• Team collaboration features</li>
                    <li>• Media monitoring and brand mentions</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-amber-800 font-medium">Demo Limitations</p>
                    <p className="text-amber-700 mt-1">
                      This is a read-only demo with sample data. You won't be able to connect real social accounts or
                      publish actual content. For full functionality, sign up for a free trial.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleDemoLogin}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-lg py-3"
                  size="lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Launch Demo Dashboard
                </Button>

                <div className="text-center">
                  <p className="text-sm text-slate-600">
                    Ready to get started with your own account?{" "}
                    <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                      Start your free trial
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">No Signup Required</h3>
                <p className="text-sm text-slate-600">Jump right in and explore all features instantly</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Real Sample Data</h3>
                <p className="text-sm text-slate-600">Experience realistic scenarios with authentic data</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Full Feature Access</h3>
                <p className="text-sm text-slate-600">Try every tool and feature in our platform</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
