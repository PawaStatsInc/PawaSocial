"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import {
  Bot,
  Send,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Calendar,
  Target,
  Zap,
  Brain,
  Users,
  BarChart3,
  CheckCircle,
  Lightbulb,
  Wand2,
  ArrowLeft,
  Play,
  UserPlus,
} from "lucide-react"

const chatHistory = [
  {
    id: 1,
    type: "user",
    message: "Help me create a content strategy for our new product launch",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    type: "ai",
    message:
      "I'd be happy to help you create a comprehensive content strategy for your product launch! Based on your brand's performance data, here's what I recommend:\n\n**Pre-Launch Phase (2-3 weeks):**\n- Teaser posts with countdown timers\n- Behind-the-scenes content\n- User-generated content campaigns\n\n**Launch Week:**\n- Product demo videos\n- Customer testimonials\n- Live Q&A sessions\n\n**Post-Launch:**\n- Success stories\n- Feature highlights\n- Community engagement\n\nWould you like me to create specific post templates for any of these phases?",
    timestamp: "10:31 AM",
  },
  {
    id: 3,
    type: "user",
    message: "Yes, create templates for the teaser posts in multiple languages",
    timestamp: "10:35 AM",
  },
  {
    id: 4,
    type: "ai",
    message:
      "Perfect! Here are teaser post templates in multiple languages:\n\n**English:**\n🚀 Something big is coming... Can you guess what it is? Drop your predictions below! #ComingSoon #Innovation\n\n**Swahili:**\n🚀 Kitu kikubwa kinakuja... Je, unaweza kukisia ni nini? Weka maoni yako hapa chini! #KinakujaHivi #Uvumbuzi\n\n**French:**\n🚀 Quelque chose de grand arrive... Pouvez-vous deviner ce que c'est ? Partagez vos prédictions ci-dessous ! #BientôtDisponible #Innovation\n\n**Arabic:**\n🚀 شيء كبير قادم... هل يمكنك تخمين ما هو؟ شارك توقعاتك أدناه! #قريباً #الابتكار\n\nWould you like me to adapt these for specific platforms or create more variations?",
    timestamp: "10:36 AM",
  },
]

const automationRules = [
  {
    id: 1,
    name: "Auto-respond to customer inquiries",
    trigger: "New message with keywords: 'help', 'support', 'issue'",
    action: "Send helpful response and escalate to human agent",
    status: "active",
    lastTriggered: "2 hours ago",
  },
  {
    id: 2,
    name: "Schedule weekly performance reports",
    trigger: "Every Monday at 9:00 AM",
    action: "Generate and send analytics summary to team",
    status: "active",
    lastTriggered: "2 days ago",
  },
  {
    id: 3,
    name: "Boost high-performing posts",
    trigger: "Post reaches 100+ engagements in first hour",
    action: "Automatically boost post with $50 budget",
    status: "paused",
    lastTriggered: "1 week ago",
  },
]

const aiInsights = [
  {
    type: "optimization",
    title: "Optimal Posting Schedule",
    description:
      "Your audience is most active on Wednesdays at 2 PM. Consider scheduling more content during this time.",
    impact: "high",
    action: "Schedule 3 posts for next Wednesday",
  },
  {
    type: "content",
    title: "Content Gap Analysis",
    description: "You're missing educational content. Your audience engages 40% more with how-to posts.",
    impact: "medium",
    action: "Create 2 educational posts this week",
  },
  {
    type: "engagement",
    title: "Response Time Improvement",
    description: "Your average response time is 4 hours. Reducing to 2 hours could improve satisfaction by 25%.",
    impact: "high",
    action: "Set up auto-responses for common queries",
  },
  {
    type: "trend",
    title: "Trending Hashtag Opportunity",
    description: "#SustainableTech is trending in your industry. Consider creating content around this topic.",
    impact: "medium",
    action: "Create sustainability-focused post",
  },
]

export default function AIAssistantPage() {
  const [message, setMessage] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [selectedTone, setSelectedTone] = useState("professional")
  const [autoMode, setAutoMode] = useState(false)

  const sendMessage = () => {
    if (message.trim()) {
      // Add message to chat history
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="h-4 w-px bg-border" />
            <h1 className="text-2xl font-bold">AI Assistant Preview</h1>
          </div>
          <div className="flex gap-3">
            <Link href="/signup">
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Try Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Preview */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Social Media Assistant</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience intelligent automation, multilingual content creation, and smart insights that transform your
              social media strategy.
            </p>
          </div>
        </div>

        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="chat">AI Chat</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="insights">Smart Insights</TabsTrigger>
            <TabsTrigger value="workflows">Workflows</TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    AI Assistant Chat
                  </CardTitle>
                  <CardDescription>
                    Get help with content creation, strategy, and social media management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96 w-full pr-4">
                    <div className="space-y-4">
                      {chatHistory.map((chat) => (
                        <div key={chat.id} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              chat.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap">{chat.message}</p>
                            <p className="text-xs opacity-70 mt-1">{chat.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="flex gap-2 mt-4">
                    <Input
                      placeholder="Ask me anything about your social media strategy..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Settings</CardTitle>
                  <CardDescription>Customize AI responses and behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Response Language</Label>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="swahili">Swahili</SelectItem>
                        <SelectItem value="arabic">Arabic</SelectItem>
                        <SelectItem value="igbo">Igbo</SelectItem>
                        <SelectItem value="pidgin">Nigerian Pidgin</SelectItem>
                        <SelectItem value="yoruba">Yoruba</SelectItem>
                        <SelectItem value="zulu">Zulu</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="amharic">Amharic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tone">Communication Tone</Label>
                    <Select value={selectedTone} onValueChange={setSelectedTone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-mode">Auto-pilot Mode</Label>
                    <Switch id="auto-mode" checked={autoMode} onCheckedChange={setAutoMode} />
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Quick Actions
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Content Ideas
                      </Button>
                      <Button size="sm" variant="outline">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        Trend Analysis
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4 mr-1" />
                        Schedule Posts
                      </Button>
                      <Button size="sm" variant="outline">
                        <Target className="h-4 w-4 mr-1" />
                        Campaign Ideas
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="automation" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Automation Rules</h2>
              <Button>
                <Zap className="h-4 w-4 mr-2" />
                Create Rule
              </Button>
            </div>

            <div className="grid gap-4">
              {automationRules.map((rule) => (
                <Card key={rule.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{rule.name}</h3>
                          <Badge variant={rule.status === "active" ? "default" : "secondary"}>{rule.status}</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>
                            <strong>Trigger:</strong> {rule.trigger}
                          </p>
                          <p>
                            <strong>Action:</strong> {rule.action}
                          </p>
                          <p>
                            <strong>Last triggered:</strong> {rule.lastTriggered}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant={rule.status === "active" ? "secondary" : "default"} size="sm">
                          {rule.status === "active" ? "Pause" : "Activate"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Create New Automation Rule</CardTitle>
                <CardDescription>Set up automated actions to streamline your workflow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="rule-name">Rule Name</Label>
                  <Input id="rule-name" placeholder="Enter rule name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trigger">Trigger Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select trigger" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-message">New message received</SelectItem>
                      <SelectItem value="high-engagement">High engagement post</SelectItem>
                      <SelectItem value="mention">Brand mention detected</SelectItem>
                      <SelectItem value="schedule">Time-based schedule</SelectItem>
                      <SelectItem value="keyword">Keyword detected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="action">Automated Action</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select action" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="send-response">Send auto-response</SelectItem>
                      <SelectItem value="boost-post">Boost post</SelectItem>
                      <SelectItem value="notify-team">Notify team</SelectItem>
                      <SelectItem value="create-report">Generate report</SelectItem>
                      <SelectItem value="schedule-post">Schedule follow-up post</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  <Zap className="h-4 w-4 mr-2" />
                  Create Automation Rule
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Smart Insights</h2>
              <Button variant="outline">
                <Brain className="h-4 w-4 mr-2" />
                Refresh Insights
              </Button>
            </div>

            <div className="grid gap-4">
              {aiInsights.map((insight, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            insight.type === "optimization"
                              ? "bg-blue-100 dark:bg-blue-900"
                              : insight.type === "content"
                                ? "bg-green-100 dark:bg-green-900"
                                : insight.type === "engagement"
                                  ? "bg-purple-100 dark:bg-purple-900"
                                  : "bg-orange-100 dark:bg-orange-900"
                          }`}
                        >
                          {insight.type === "optimization" && <TrendingUp className="h-5 w-5 text-blue-600" />}
                          {insight.type === "content" && <Lightbulb className="h-5 w-5 text-green-600" />}
                          {insight.type === "engagement" && <Users className="h-5 w-5 text-purple-600" />}
                          {insight.type === "trend" && <BarChart3 className="h-5 w-5 text-orange-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{insight.title}</h3>
                            <Badge variant={insight.impact === "high" ? "destructive" : "secondary"}>
                              {insight.impact} impact
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            {insight.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>AI Performance Summary</CardTitle>
                <CardDescription>How AI assistance has improved your social media performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">+34%</div>
                    <p className="text-sm text-muted-foreground">Engagement Rate</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">-2.5h</div>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+67%</div>
                    <p className="text-sm text-muted-foreground">Content Efficiency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workflows" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">AI Workflows</h2>
              <Button>
                <Wand2 className="h-4 w-4 mr-2" />
                Create Workflow
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Content Creation Workflow
                  </CardTitle>
                  <CardDescription>Automated content generation and scheduling</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Analyze trending topics</p>
                        <p className="text-xs text-muted-foreground">AI scans industry trends</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Generate content ideas</p>
                        <p className="text-xs text-muted-foreground">Create relevant post suggestions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Schedule optimal posting</p>
                        <p className="text-xs text-muted-foreground">Auto-schedule at peak times</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Configure Workflow
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Customer Service Workflow
                  </CardTitle>
                  <CardDescription>Automated customer inquiry handling</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Detect customer inquiries</p>
                        <p className="text-xs text-muted-foreground">Monitor mentions and messages</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Analyze sentiment & urgency</p>
                        <p className="text-xs text-muted-foreground">Prioritize critical issues</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Auto-respond or escalate</p>
                        <p className="text-xs text-muted-foreground">Send response or alert team</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Configure Workflow
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Analytics Workflow
                  </CardTitle>
                  <CardDescription>Automated performance reporting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Collect performance data</p>
                        <p className="text-xs text-muted-foreground">Gather metrics from all platforms</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Generate insights</p>
                        <p className="text-xs text-muted-foreground">AI analyzes trends and patterns</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Send weekly reports</p>
                        <p className="text-xs text-muted-foreground">Email summary to stakeholders</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Configure Workflow
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Campaign Optimization
                  </CardTitle>
                  <CardDescription>Automated campaign performance optimization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Monitor campaign metrics</p>
                        <p className="text-xs text-muted-foreground">Track ROI and engagement</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-lime-100 dark:bg-lime-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Identify optimization opportunities</p>
                        <p className="text-xs text-muted-foreground">AI suggests improvements</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Auto-adjust budgets</p>
                        <p className="text-xs text-muted-foreground">Reallocate spend to top performers</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Configure Workflow
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Social Media Strategy?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of businesses using AI to optimize their social media presence and drive growth.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline">
                    Try Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
