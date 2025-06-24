import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { AuthProvider } from "@/components/auth/auth-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "PawaSocial - AI-Powered Social Media Management Platform",
  description:
    "Unified social media intelligence platform for global teams. Manage, monitor, and maximize your brand's presence with AI-powered insights, multilingual content generation, and enterprise-grade analytics.",
  keywords:
    "social media management, AI analytics, social media dashboard, content scheduling, brand monitoring, ROI tracking, multilingual social media, enterprise social media tools, social media intelligence, digital marketing platform",
  authors: [{ name: "PawaSocial" }],
  creator: "PawaSocial",
  publisher: "PawaSocial",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pawasocial.com",
    title: "PawaSocial - AI-Powered Social Media Management Platform",
    description:
      "Unified social media intelligence platform for global teams. Manage, monitor, and maximize your brand's presence with AI-powered insights.",
    siteName: "PawaSocial",
  },
  twitter: {
    card: "summary_large_image",
    title: "PawaSocial - AI-Powered Social Media Management Platform",
    description:
      "Unified social media intelligence platform for global teams. Manage, monitor, and maximize your brand's presence with AI-powered insights.",
    creator: "@pawasocial",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
