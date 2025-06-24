"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, MessageSquare, TrendingUp, Eye, Brain, Home, ChevronRight, ArrowRight } from "lucide-react"

const modules = [
  {
    id: "overview",
    name: "Overview",
    icon: Home,
    color: "bg-blue-500",
    features: [
      "Real-time performance metrics",
      "Cross-platform analytics",
      "AI-powered insights",
      "Team collaboration tools",
    ],
  },
  {
    id: "social",
    name: "Social Media",
    icon: MessageSquare,
    color: "bg-green-500",
    features: ["Multi-platform publishing", "Content scheduling", "Engagement management", "Social listening"],
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: BarChart3,
    color: "bg-purple-500",
    features: ["Advanced reporting", "Audience insights", "Performance tracking", "ROI measurement"],
  },
  {
    id: "campaigns",
    name: "Campaigns",
    icon: TrendingUp,
    color: "bg-orange-500",
    features: ["Campaign management", "A/B testing", "Budget optimization", "Performance analysis"],
  },
  {
    id: "ai",
    name: "AI Assistant",
    icon: Brain,
    color: "bg-pink-500",
    features: ["Content generation", "Smart recommendations", "Automated responses", "Predictive analytics"],
  },
  {
    id: "monitoring",
    name: "Media Monitoring",
    icon: Eye,
    color: "bg-indigo-500",
    features: ["Brand monitoring", "Sentiment analysis", "Competitor tracking", "Crisis detection"],
  },
]

export function InteractiveDashboard() {
  const [activeModule, setActiveModule] = useState("overview")

  const activeModuleData = modules.find((m) => m.id === activeModule)

  return (
    <div className="relative rounded-xl border bg-white shadow-2xl overflow-hidden">
      {/* Dashboard Header */}
      <div className="bg-gray-50 border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <h3 className="font-semibold text-gray-900">PawaSocial Dashboard</h3>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Live Demo
          </Badge>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r min-h-[500px]">
          <div className="p-4">
            <nav className="space-y-2">
              {modules.map((module) => {
                const Icon = module.icon
                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all ${
                      activeModule === module.id
                        ? "bg-white shadow-sm text-gray-900"
                        : "text-gray-600 hover:bg-white/50"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${module.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{module.name}</span>
                    {activeModule === module.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg ${activeModuleData?.color} flex items-center justify-center`}>
                    {activeModuleData?.icon && <activeModuleData.icon className="w-5 h-5 text-white" />}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{activeModuleData?.name}</h2>
                </div>
                <p className="text-gray-600">
                  Explore the powerful features of our {activeModuleData?.name.toLowerCase()} module
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {activeModuleData?.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Mock Chart/Data Visualization */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Live Data Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Interactive charts and real-time data</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Call to Action Overlay */}
      <div className="absolute bottom-4 right-4">
        <Button size="sm" className="shadow-lg">
          Try Full Dashboard
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
