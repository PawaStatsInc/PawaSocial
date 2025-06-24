"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, BarChart3, Target, Globe, Users, Zap, TrendingUp, Bell, Bot } from "lucide-react"
import Head from "next/head"
import Link from "next/link"

const features = [
  {
    icon: Calendar,
    title: "Smart Content Scheduling",
    description: "Schedule posts across all platforms with AI-optimized timing for maximum engagement",
    benefits: ["Bulk scheduling", "Best time recommendations", "Content calendar", "Auto-posting"],
    color: "blue",
  },
  {
    icon: MessageSquare,
    title: "Unified Social Inbox",
    description: "Manage all your social conversations from one centralized dashboard",
    benefits: ["Multi-platform messaging", "Auto-responses", "Team collaboration", "Priority filtering"],
    color: "green",
  },
  {
    icon: Bot,
    title: "AI Content Generation",
    description: "Generate engaging captions in 20+ languages including Swahili, French, and Pidgin",
    benefits: ["Multilingual support", "Brand voice training", "Content suggestions", "Hashtag optimization"],
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your social media performance with predictive analytics",
    benefits: ["Real-time metrics", "Custom reports", "ROI tracking", "Competitor analysis"],
    color: "orange",
  },
  {
    icon: Target,
    title: "Campaign Management",
    description: "Create, manage, and optimize social media campaigns across multiple platforms",
    benefits: ["Campaign tracking", "A/B testing", "Budget optimization", "Performance alerts"],
    color: "red",
  },
  {
    icon: TrendingUp,
    title: "Trend Detection",
    description: "Stay ahead with real-time trend analysis and sentiment monitoring",
    benefits: ["Trending topics", "Sentiment analysis", "Viral content detection", "Industry insights"],
    color: "indigo",
  },
  {
    icon: Bell,
    title: "Media Monitoring",
    description: "Monitor brand mentions and track your online reputation across the web",
    benefits: ["Brand monitoring", "Mention alerts", "Crisis management", "Influencer tracking"],
    color: "pink",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams with role management, approval workflows, and task assignment",
    benefits: ["Role-based access", "Approval workflows", "Task management", "Team analytics"],
    color: "teal",
  },
  {
    icon: Globe,
    title: "Global Localization",
    description: "Manage multiple brands and regions with localized content and insights",
    benefits: ["Multi-region support", "Local insights", "Currency conversion", "Time zone management"],
    color: "yellow",
  },
]

const integrations = [
  "Facebook",
  "Instagram",
  "Twitter",
  "LinkedIn",
  "TikTok",
  "YouTube",
  "WhatsApp Business",
  "Telegram",
  "Pinterest",
  "Snapchat",
  "Google My Business",
  "Slack",
]

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features - PawaSocial | Complete Social Media Management Suite</title>
        <meta
          name="description"
          content="Explore PawaSocial's comprehensive features: AI content generation, unified inbox, advanced analytics, campaign management, and more. Built for global teams."
        />
        <meta
          name="keywords"
          content="social media features, AI content generation, social media analytics, campaign management, unified inbox, brand monitoring"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Badge variant="secondary" className="mb-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Complete Feature Suite
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                  Everything You Need to
                  <span className="text-blue-600"> Dominate Social Media</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                  From AI-powered content creation to advanced analytics, PawaSocial provides all the tools your team
                  needs to manage, monitor, and maximize your social media presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-${feature.color}-100`}
                        >
                          <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center text-sm text-slate-600">
                              <div className={`w-2 h-2 rounded-full bg-${feature.color}-500 mr-3`} />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Connect All Your Platforms</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  PawaSocial integrates with all major social media platforms and business tools
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-slate-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-xs font-medium text-slate-600">{integration.slice(0, 2)}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900">{integration}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Social Strategy?
                </h2>
                <p className="text-xl text-blue-100 mb-8">Join thousands of teams worldwide who trust PawaSocial</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
