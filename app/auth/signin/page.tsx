"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Play, Loader2 } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const router = useRouter()

  const handleProviderSignIn = async (provider: string) => {
    setIsLoading(provider)
    try {
      const result = await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: false,
      })

      if (result?.ok) {
        router.push("/dashboard")
      }
    } catch (error) {
      console.error(`${provider} sign in error:`, error)
    } finally {
      setIsLoading(null)
    }
  }

  const handleDemoLogin = async () => {
    setIsLoading("demo")
    try {
      // Create demo user session
      const response = await fetch("/api/auth/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })

      if (response.ok) {
        // Sign in with demo credentials
        const result = await signIn("credentials", {
          email: "demo@pawasocial.com",
          password: "demo",
          redirect: false,
        })

        if (result?.ok) {
          router.push("/dashboard")
        }
      }
    } catch (error) {
      console.error("Demo login error:", error)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <>
      <Head>
        <title>Sign In - PawaSocial</title>
        <meta name="description" content="Sign in to your PawaSocial account" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
            <p className="text-slate-600">Sign in to your PawaSocial account</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in</CardTitle>
              <CardDescription className="text-center">Choose your preferred sign-in method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Azure AD Sign In */}
              <Button
                onClick={() => handleProviderSignIn("azure-ad")}
                disabled={isLoading !== null}
                className="w-full"
                variant="outline"
              >
                {isLoading === "azure-ad" ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Mail className="mr-2 h-4 w-4" />
                )}
                Continue with Microsoft
              </Button>

              {/* Google Sign In */}
              <Button
                onClick={() => handleProviderSignIn("google")}
                disabled={isLoading !== null}
                className="w-full"
                variant="outline"
              >
                {isLoading === "google" ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                )}
                Continue with Google
              </Button>

              <Separator className="my-4" />

              {/* Demo Login */}
              <div className="space-y-3">
                <div className="text-center">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                    <Play className="w-3 h-3 mr-1" />
                    Try Demo
                  </Badge>
                </div>

                <Button
                  onClick={handleDemoLogin}
                  disabled={isLoading !== null}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {isLoading === "demo" ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Play className="mr-2 h-4 w-4" />
                  )}
                  Demo Login
                </Button>

                <p className="text-xs text-center text-slate-500">
                  Explore all features with sample data - no account needed
                </p>
              </div>

              <Separator className="my-4" />

              <div className="text-center text-sm">
                <span className="text-slate-600">Don't have an account? </span>
                <Link href="/auth/signup" className="text-blue-600 hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  )
}
