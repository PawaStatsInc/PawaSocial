"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  TrendingUp,
  TrendingDown,
  Users,
  MessageSquare,
  Heart,
  Eye,
  BarChart3,
  Activity,
  Calendar,
  Download,
  RefreshCw,
  ArrowLeft,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"

const performanceData = [
  { date: "Dec 1", reach: 12400, engagement: 890, clicks: 234, conversions: 12 },
  { date: "Dec 2", reach: 15600, engagement: 1250, clicks: 345, conversions: 18 },
  { date: "Dec 3", reach: 11200, engagement: 780, clicks: 189, conversions: 9 },
  { date: "Dec 4", reach: 18900, engagement: 1560, clicks: 456, conversions: 24 },
  { date: "Dec 5", reach: 16700, engagement: 1340, clicks: 378, conversions: 21 },
  { date: "Dec 6", reach: 14300, engagement: 1120, clicks: 298, conversions: 15 },
  { date: "Dec 7", reach: 19800, engagement: 1780, clicks: 523, conversions: 28 },
]

const platformData = [
  { name: "Instagram", engagement: 35, reach: 45, color: "#E4405F" },
  { name: "LinkedIn", engagement: 25, reach: 20, color: "#0077B5" },
  { name: "Twitter", engagement: 20, reach: 25, color: "#1DA1F2" },
  { name: "Facebook", engagement: 20, reach: 10, color: "#4267B2" },
]

const sentimentData = [
  { name: "Positive", value: 65, color: "#10B981" },
  { name: "Neutral", value: 25, color: "#6B7280" },
  { name: "Negative", value: 10, color: "#EF4444" },
]

const topPosts = [
  {
    id: 1,
    platform: "Instagram",
    content: "Behind the scenes of our product development process 🚀",
    engagement: 2450,
    reach: 18900,
    sentiment: "positive",
    date: "Dec 5",
  },
  {
    id: 2,
    platform: "LinkedIn",
    content: "5 key lessons from scaling our startup to 100+ employees",
    engagement: 1890,
    reach: 15600,
    sentiment: "positive",
    date: "Dec 3",
  },
  {
    id: 3,
    platform: "Twitter",
    content: "Excited to announce our partnership with @TechCorp! 🎉",
    engagement: 1560,
    reach: 12400,
    sentiment: "positive",
    date: "Dec 1",
  },
]

const audienceInsights = [
  { demographic: "Age 25-34", percentage: 35, growth: "+5%" },
  { demographic: "Age 35-44", percentage: 28, growth: "+2%" },
  { demographic: "Age 18-24", percentage: 22, growth: "+8%" },
  { demographic: "Age 45-54", percentage: 15, growth: "-1%" },
]

const competitorData = [
  { name: "Your Brand", engagement: 4.8, reach: 2400000, sentiment: 85 },
  { name: "Competitor A", engagement: 3.2, reach: 1800000, sentiment: 72 },
  { name: "Competitor B", engagement: 2.9, reach: 2100000, sentiment: 68 },
  { name: "Competitor C", engagement: 3.8, reach: 1600000, sentiment: 79 },
]

export default function AnalyticsPage() {
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
            <h1 className="text-2xl font-bold">Analytics & Intelligence Preview</h1>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/demo">Try Demo</Link>
            </Button>
          </div>
        </div>

        {/* Feature Description */}
        <div className="mb-8 p-6 bg-muted/50 rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">Experience Advanced Analytics</h2>
          <p className="text-muted-foreground">
            Explore our comprehensive analytics dashboard with real-time insights, performance tracking, audience
            analysis, sentiment monitoring, and AI-powered predictions. This preview showcases the full capabilities of
            PawaSocial's analytics engine.
          </p>
        </div>

        {/* Time Range and Export Controls */}
        <div className="flex justify-between items-center mb-6">
          <Select defaultValue="30d">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4M</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +0.3% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Click-through Rate</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.3%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +0.5% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.2%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
                    -0.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Your social media metrics over the last 7 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="reach"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="engagement"
                        stackId="2"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>Engagement distribution across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="engagement"
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {platformData.map((platform) => (
                      <div key={platform.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }} />
                        <span className="text-sm">{platform.name}</span>
                        <span className="text-sm text-muted-foreground">{platform.engagement}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing Posts</CardTitle>
                <CardDescription>Your best content from the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{post.platform}</Badge>
                          <Badge variant="default">Top Performer</Badge>
                          <Badge variant={post.sentiment === "positive" ? "default" : "secondary"}>
                            {post.sentiment}
                          </Badge>
                        </div>
                        <p className="text-sm mb-2">{post.content}</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{post.engagement} engagements</div>
                        <div className="text-xs text-muted-foreground">{post.reach} reach</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement vs Reach</CardTitle>
                  <CardDescription>Correlation between reach and engagement over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="reach" stroke="#8884d8" strokeWidth={2} />
                      <Line type="monotone" dataKey="engagement" stroke="#82ca9d" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                  <CardDescription>From reach to conversions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="clicks" fill="#8884d8" />
                      <Bar dataKey="conversions" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Platform Comparison</CardTitle>
                <CardDescription>Performance metrics across different platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platformData.map((platform) => (
                    <div key={platform.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{platform.name}</span>
                        <span className="text-sm text-muted-foreground">{platform.engagement}% engagement</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${platform.engagement}%`,
                            backgroundColor: platform.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audience" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                  <CardDescription>Age distribution of your followers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {audienceInsights.map((insight) => (
                      <div key={insight.demographic} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">{insight.demographic}</span>
                          <Badge variant="outline" className="text-xs">
                            {insight.growth}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-secondary rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: `${insight.percentage}%` }} />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">{insight.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Top locations of your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { country: "United States", percentage: 35 },
                      { country: "United Kingdom", percentage: 18 },
                      { country: "Canada", percentage: 12 },
                      { country: "Australia", percentage: 10 },
                      { country: "Germany", percentage: 8 },
                      { country: "Others", percentage: 17 },
                    ].map((location) => (
                      <div key={location.country} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{location.country}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-secondary rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: `${location.percentage}%` }} />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">{location.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Audience Growth</CardTitle>
                <CardDescription>Follower growth across platforms over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="reach" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sentiment" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Overall Sentiment</CardTitle>
                  <CardDescription>Sentiment analysis of all mentions and interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {sentimentData.map((sentiment) => (
                      <div key={sentiment.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sentiment.color }} />
                        <span className="text-sm">{sentiment.name}</span>
                        <span className="text-sm text-muted-foreground">{sentiment.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sentiment Trends</CardTitle>
                  <CardDescription>How sentiment has changed over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="engagement" stroke="#10B981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Multilingual Sentiment Analysis</CardTitle>
                <CardDescription>Sentiment breakdown by language</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { language: "English", positive: 68, neutral: 22, negative: 10 },
                    { language: "Swahili", positive: 72, neutral: 20, negative: 8 },
                    { language: "French", positive: 65, neutral: 25, negative: 10 },
                    { language: "Arabic", positive: 70, neutral: 18, negative: 12 },
                  ].map((lang) => (
                    <div key={lang.language} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{lang.language}</span>
                        <div className="flex gap-4 text-xs">
                          <span className="text-green-600">{lang.positive}% positive</span>
                          <span className="text-gray-600">{lang.neutral}% neutral</span>
                          <span className="text-red-600">{lang.negative}% negative</span>
                        </div>
                      </div>
                      <div className="flex w-full h-2 rounded-full overflow-hidden">
                        <div className="bg-green-500" style={{ width: `${lang.positive}%` }} />
                        <div className="bg-gray-400" style={{ width: `${lang.neutral}%` }} />
                        <div className="bg-red-500" style={{ width: `${lang.negative}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Analysis</CardTitle>
                <CardDescription>How you compare to your competitors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitorData.map((competitor) => (
                    <div key={competitor.name} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{competitor.name}</h3>
                        {competitor.name === "Your Brand" && <Badge variant="default">You</Badge>}
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Engagement Rate</p>
                          <p className="font-medium">{competitor.engagement}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Total Reach</p>
                          <p className="font-medium">{(competitor.reach / 1000000).toFixed(1)}M</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Sentiment Score</p>
                          <p className="font-medium">{competitor.sentiment}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Share</CardTitle>
                <CardDescription>Voice share in your industry</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={competitorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="engagement" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Predictions</CardTitle>
                  <CardDescription>AI-powered forecasts for the next 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">Follower Growth</span>
                      </div>
                      <p className="text-2xl font-bold text-green-700 dark:text-green-300">+15.2%</p>
                      <p className="text-sm text-green-600 dark:text-green-400">Expected growth in next 30 days</p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Engagement Rate</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">5.2%</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Predicted average engagement rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trending Topics</CardTitle>
                  <CardDescription>Topics likely to trend in your industry</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { topic: "#SustainableTech", probability: 85, trend: "rising" },
                      { topic: "#AIInnovation", probability: 78, trend: "stable" },
                      { topic: "#RemoteWork", probability: 72, trend: "declining" },
                      { topic: "#DigitalTransformation", probability: 68, trend: "rising" },
                    ].map((topic) => (
                      <div key={topic.topic} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <span className="font-medium">{topic.topic}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {topic.probability}% probability
                            </Badge>
                            <Badge
                              variant={
                                topic.trend === "rising"
                                  ? "default"
                                  : topic.trend === "declining"
                                    ? "destructive"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {topic.trend}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Create Content
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>AI Recommendations</CardTitle>
                <CardDescription>Smart suggestions to improve your performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                        Optimal Posting Schedule
                      </span>
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Post on Wednesdays at 2 PM and Fridays at 11 AM for maximum engagement
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-800 dark:text-orange-200">Content Strategy</span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Increase video content by 30% - your audience engages 2x more with videos
                    </p>
                  </div>

                  <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg border border-teal-200 dark:border-teal-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-teal-600" />
                      <span className="text-sm font-medium text-teal-800 dark:text-teal-200">Audience Expansion</span>
                    </div>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      Target 25-34 age group in Germany - high engagement potential detected
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center p-8 bg-primary/5 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Ready to unlock these insights for your business?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get access to comprehensive analytics, real-time monitoring, and AI-powered insights that help you make
            data-driven decisions and grow your social media presence.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">Try Demo</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
