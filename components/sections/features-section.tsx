"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MessageSquare, Globe, BarChart3, TrendingUp, Users, Bot, Shield } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Schedule posts across all platforms with AI-optimized timing for maximum engagement",
  },
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    description: "Manage all your social conversations from one centralized dashboard",
  },
  {
    icon: Globe,
    title: "Multilingual AI",
    description: "Generate captions in Swahili, French, Pidgin, Zulu, and 20+ African languages",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Get AI-powered insights and ROI tracking to optimize your social strategy",
  },
  {
    icon: TrendingUp,
    title: "Trend Detection",
    description: "Stay ahead with real-time trend analysis and sentiment monitoring",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams with role management, approval workflows, and task assignment",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Your personal AI assistant for content creation and strategy optimization",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and advanced data protection",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Built to Empower Global Brands in Every Market
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to manage, monitor, and maximize your social media presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
