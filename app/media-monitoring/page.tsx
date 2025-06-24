"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Search,
  Plus,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  MessageSquare,
  Globe,
  Users,
  BarChart3,
  Filter,
  RefreshCw,
  Bell,
  ExternalLink,
  Heart,
  Eye,
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
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"

const mentions = [
  {
    id: 1,
    source: "Twitter",
    author: "@techreview",
    content:
      "Just tried @YourBrand's new feature and it's incredible! The AI integration is seamless and intuitive. Highly recommend! #innovation #tech",
    sentiment: "positive",
    reach: 15600,
    engagement: 234,
    timestamp: "2 hours ago",
    url: "https://twitter.com/techreview/status/123",
    verified: true,
  },
  {
    id: 2,
    source: "LinkedIn",
    author: "Sarah Johnson",
    content:
      "Attended @YourBrand's webinar yesterday. Great insights on digital transformation. The team really knows their stuff!",
    sentiment: "positive",
    reach: 8900,
    engagement: 156,
    timestamp: "5 hours ago",
    url: "https://linkedin.com/posts/sarah-johnson-123",
    verified: false,
  },
  {
    id: 3,
    source: "Reddit",
    author: "u/developer123",
    content:
      "Has anyone else had issues with YourBrand's API lately? Getting timeout errors consistently. Support hasn't been helpful.",
    sentiment: "negative",
    reach: 2300,
    engagement: 89,
    timestamp: "8 hours ago",
    url: "https://reddit.com/r/programming/comments/123",
    verified: false,
  },
  {
    id: 4,
    source: "Instagram",
    author: "@lifestyle_blogger",
    content:
      "Loving the new update from @yourbrand! The interface is so much cleaner now. Great job team! 👏 #userexperience",
    sentiment: "positive",
    reach: 12400,
    engagement: 567,
    timestamp: "12 hours ago",
    url: "https://instagram.com/p/ABC123",
    verified: true,
  },
  {
    id: 5,
    source: "News Article",
    author: "TechCrunch",
    content: "YourBrand raises $50M Series B to expand AI capabilities and international presence",
    sentiment: "neutral",
    reach: 45000,
    engagement: 1200,
    timestamp: "1 day ago",
    url: "https://techcrunch.com/2024/12/article",
    verified: true,
  },
]

const sentimentData = [
  { name: "Positive", value: 65, color: "#10B981" },
  { name: "Neutral", value: 25, color: "#6B7280" },
  { name: "Negative", value: 10, color: "#EF4444" },
]

const mentionTrends = [
  { date: "Dec 1", mentions: 45, positive: 28, negative: 5, neutral: 12 },
  { date: "Dec 2", mentions: 52, positive: 34, negative: 7, neutral: 11 },
  { date: "Dec 3", mentions: 38, positive: 25, negative: 4, neutral: 9 },
  { date: "Dec 4", mentions: 67, positive: 42, negative: 8, neutral: 17 },
  { date: "Dec 5", mentions: 59, positive: 38, negative: 6, neutral: 15 },
  { date: "Dec 6", mentions: 71, positive: 46, negative: 9, neutral: 16 },
  { date: "Dec 7", mentions: 83, positive: 54, negative: 11, neutral: 18 },
]

const competitorMentions = [
  { name: "Your Brand", mentions: 425, sentiment: 85, share: 35 },
  { name: "Competitor A", mentions: 312, sentiment: 72, share: 26 },
  { name: "Competitor B", mentions: 289, sentiment: 68, share: 24 },
  { name: "Competitor C", mentions: 178, sentiment: 79, share: 15 },
]

const topKeywords = [
  { keyword: "AI integration", mentions: 89, trend: "up", change: "+23%" },
  { keyword: "user experience", mentions: 67, trend: "up", change: "+15%" },
  { keyword: "customer support", mentions: 45, trend: "down", change: "-8%" },
  { keyword: "pricing", mentions: 34, trend: "stable", change: "0%" },
  { keyword: "features", mentions: 78, trend: "up", change: "+12%" },
]

const influencers = [
  {
    name: "Alex Chen",
    handle: "@alexchen_tech",
    platform: "Twitter",
    followers: 125000,
    engagement: 4.2,
    mentions: 12,
    sentiment: "positive",
    verified: true,
  },
  {
    name: "Sarah Williams",
    handle: "@sarahw_design",
    platform: "Instagram",
    followers: 89000,
    engagement: 6.8,
    mentions: 8,
    sentiment: "positive",
    verified: true,
  },
  {
    name: "Tech Review Hub",
    handle: "@techreviewhub",
    platform: "YouTube",
    followers: 234000,
    engagement: 3.5,
    mentions: 5,
    sentiment: "neutral",
    verified: true,
  },
]

export default function MediaMonitoringPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d")
  const [alertsEnabled, setAlertsEnabled] = useState(true)

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">PawaSocial</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Media Monitoring</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-4 flex gap-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="alerts">Alerts</Label>
            <Switch id="alerts" checked={alertsEnabled} onCheckedChange={setAlertsEnabled} />
          </div>
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Tabs defaultValue="mentions" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="mentions">Mentions</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
            <TabsTrigger value="influencers">Influencers</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="mentions" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Brand Mentions</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search mentions..." className="pl-8 w-64" />
                </div>
                <Select>
                  <SelectTrigger className="w-32">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="reddit">Reddit</SelectItem>
                    <SelectItem value="news">News</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Mentions</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">425</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +18% from last week
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Reach</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4M</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +25% from last week
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15.6K</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +12% from last week
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sentiment Score</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +3% from last week
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4">
              {mentions.map((mention) => (
                <Card key={mention.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{mention.source}</Badge>
                        <span className="font-medium">{mention.author}</span>
                        {mention.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified
                          </Badge>
                        )}
                        <Badge
                          variant={
                            mention.sentiment === "positive"
                              ? "default"
                              : mention.sentiment === "negative"
                                ? "destructive"
                                : "secondary"
                          }
                          className="text-xs"
                        >
                          {mention.sentiment}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{mention.timestamp}</span>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-sm mb-4">{mention.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {mention.reach.toLocaleString()} reach
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {mention.engagement} engagement
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Reply
                        </Button>
                        <Button variant="outline" size="sm">
                          Share
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sentiment" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Sentiment Analysis</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Keyword
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Overall Sentiment</CardTitle>
                  <CardDescription>Sentiment distribution across all mentions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
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
                    </PieChart>
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
                    <AreaChart data={mentionTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="positive"
                        stackId="1"
                        stroke="#10B981"
                        fill="#10B981"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="neutral"
                        stackId="1"
                        stroke="#6B7280"
                        fill="#6B7280"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="negative"
                        stackId="1"
                        stroke="#EF4444"
                        fill="#EF4444"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Keyword Sentiment Analysis</CardTitle>
                <CardDescription>Sentiment breakdown by key topics and keywords</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topKeywords.map((keyword) => (
                    <div key={keyword.keyword} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{keyword.keyword}</span>
                        <Badge variant="outline" className="text-xs">
                          {keyword.mentions} mentions
                        </Badge>
                        <Badge
                          variant={
                            keyword.trend === "up" ? "default" : keyword.trend === "down" ? "destructive" : "secondary"
                          }
                          className="text-xs"
                        >
                          {keyword.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : keyword.trend === "down" ? (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          ) : null}
                          {keyword.change}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex h-2 w-24 rounded-full overflow-hidden">
                          <div className="bg-green-500 w-3/5" />
                          <div className="bg-gray-400 w-1/5" />
                          <div className="bg-red-500 w-1/5" />
                        </div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multilingual Sentiment</CardTitle>
                <CardDescription>Sentiment analysis across different languages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { language: "English", positive: 68, neutral: 22, negative: 10, mentions: 245 },
                    { language: "Spanish", positive: 72, neutral: 20, negative: 8, mentions: 89 },
                    { language: "French", positive: 65, neutral: 25, negative: 10, mentions: 67 },
                    { language: "German", positive: 70, neutral: 18, negative: 12, mentions: 34 },
                  ].map((lang) => (
                    <div key={lang.language} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{lang.language}</span>
                        <div className="flex gap-4 text-xs">
                          <span className="text-green-600">{lang.positive}% positive</span>
                          <span className="text-gray-600">{lang.neutral}% neutral</span>
                          <span className="text-red-600">{lang.negative}% negative</span>
                          <span className="text-muted-foreground">{lang.mentions} mentions</span>
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

          <TabsContent value="trends" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Trending Topics</h2>
              <Button variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                Export Trends
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Mention Volume Trends</CardTitle>
                <CardDescription>Daily mention volume over the selected period</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mentionTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="mentions" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Trending Keywords</CardTitle>
                  <CardDescription>Most mentioned keywords and their trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topKeywords.map((keyword, index) => (
                      <div key={keyword.keyword} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium w-4">#{index + 1}</span>
                          <span className="text-sm">{keyword.keyword}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{keyword.mentions}</span>
                          <Badge
                            variant={
                              keyword.trend === "up"
                                ? "default"
                                : keyword.trend === "down"
                                  ? "destructive"
                                  : "secondary"
                            }
                            className="text-xs"
                          >
                            {keyword.change}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Trends</CardTitle>
                  <CardDescription>Mention distribution across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                      data={[
                        { platform: "Twitter", mentions: 156 },
                        { platform: "LinkedIn", mentions: 89 },
                        { platform: "Reddit", mentions: 67 },
                        { platform: "Instagram", mentions: 78 },
                        { platform: "News", mentions: 35 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="platform" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="mentions" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Emerging Topics</CardTitle>
                <CardDescription>New topics gaining traction in conversations about your brand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      topic: "Sustainability initiatives",
                      growth: "+145%",
                      mentions: 23,
                      description: "Discussions about environmental impact",
                    },
                    {
                      topic: "Remote work tools",
                      growth: "+89%",
                      mentions: 34,
                      description: "Features for distributed teams",
                    },
                    {
                      topic: "Mobile app performance",
                      growth: "+67%",
                      mentions: 45,
                      description: "User feedback on mobile experience",
                    },
                    {
                      topic: "Integration capabilities",
                      growth: "+56%",
                      mentions: 29,
                      description: "Third-party integrations and APIs",
                    },
                  ].map((topic) => (
                    <div key={topic.topic} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{topic.topic}</h3>
                        <Badge variant="default">{topic.growth}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{topic.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{topic.mentions} mentions</span>
                        <Button variant="outline" size="sm">
                          Explore
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Competitive Analysis</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Competitor
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Share of Voice</CardTitle>
                <CardDescription>Your brand's mention share compared to competitors</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={competitorMentions}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="mentions" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {competitorMentions.map((competitor) => (
                <Card key={competitor.name}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{competitor.name}</h3>
                        {competitor.name === "Your Brand" && <Badge variant="default">You</Badge>}
                      </div>
                      <Badge variant="outline">{competitor.share}% share</Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Total Mentions</p>
                        <p className="font-medium text-lg">{competitor.mentions}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Sentiment Score</p>
                        <p className="font-medium text-lg">{competitor.sentiment}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Share of Voice</p>
                        <p className="font-medium text-lg">{competitor.share}%</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Market Share</span>
                        <span>{competitor.share}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${competitor.share}%` }} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Competitive Insights</CardTitle>
                <CardDescription>Key insights from competitor analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        Leading in Sentiment
                      </span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Your brand has the highest sentiment score (85%) among competitors, indicating strong customer
                      satisfaction.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        Share of Voice Growth
                      </span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Your share of voice increased by 8% this month, outpacing Competitor A and B.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-800 dark:text-orange-200">Opportunity Area</span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Competitor C is gaining traction in the "mobile experience" conversation. Consider addressing this
                      topic.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="influencers" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Influencer Tracking</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Influencer
              </Button>
            </div>

            <div className="grid gap-4">
              {influencers.map((influencer) => (
                <Card key={influencer.handle}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{influencer.name}</h3>
                            {influencer.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{influencer.handle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{influencer.platform}</Badge>
                        <Badge
                          variant={
                            influencer.sentiment === "positive"
                              ? "default"
                              : influencer.sentiment === "negative"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {influencer.sentiment}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Followers</p>
                        <p className="font-medium">{influencer.followers.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Engagement Rate</p>
                        <p className="font-medium">{influencer.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Brand Mentions</p>
                        <p className="font-medium">{influencer.mentions}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Reach Score</p>
                        <p className="font-medium">
                          {Math.round((influencer.followers * influencer.engagement) / 10000)}K
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          Contact
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">
                        <Bell className="h-4 w-4 mr-1" />
                        Track
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Influencer Insights</CardTitle>
                <CardDescription>Key insights about influencer engagement with your brand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                        High-Value Influencers
                      </span>
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      3 influencers with 100K+ followers have mentioned your brand positively this week.
                    </p>
                  </div>

                  <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg border border-teal-200 dark:border-teal-800">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-teal-600" />
                      <span className="text-sm font-medium text-teal-800 dark:text-teal-200">Growing Engagement</span>
                    </div>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      Influencer mentions of your brand increased by 35% compared to last month.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                        Collaboration Opportunity
                      </span>
                    </div>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      @alexchen_tech has mentioned your brand 12 times with positive sentiment. Consider reaching out
                      for collaboration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Alert Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Alert
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Active Alerts</CardTitle>
                <CardDescription>Real-time notifications for important mentions and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 border rounded-lg border-red-200 bg-red-50 dark:bg-red-950">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-red-800 dark:text-red-200">Negative Sentiment Spike</h3>
                        <Badge variant="destructive">High Priority</Badge>
                      </div>
                      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                        Negative mentions increased by 40% in the last 2 hours. Primarily related to "customer support"
                        issues.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border rounded-lg border-orange-200 bg-orange-50 dark:bg-orange-950">
                    <Bell className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-orange-800 dark:text-orange-200">Viral Mention Detected</h3>
                        <Badge variant="secondary">Medium Priority</Badge>
                      </div>
                      <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                        A tweet about your brand has gained 10K+ engagements in the last hour. Consider amplifying this
                        content.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View Tweet
                        </Button>
                        <Button size="sm" variant="outline">
                          Amplify
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border rounded-lg border-blue-200 bg-blue-50 dark:bg-blue-950">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-200">Competitor Activity</h3>
                        <Badge variant="outline">Low Priority</Badge>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                        Competitor A launched a new product. Their mention volume increased by 200% today.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Analyze
                        </Button>
                        <Button size="sm" variant="outline">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alert Settings</CardTitle>
                <CardDescription>Configure when and how you want to be notified</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Mention Alerts</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="brand-mentions">Brand mentions</Label>
                        <Switch id="brand-mentions" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="competitor-mentions">Competitor mentions</Label>
                        <Switch id="competitor-mentions" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="influencer-mentions">Influencer mentions</Label>
                        <Switch id="influencer-mentions" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Sentiment Alerts</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="negative-spike">Negative sentiment spike</Label>
                        <Switch id="negative-spike" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="positive-trend">Positive trend detection</Label>
                        <Switch id="positive-trend" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Volume Alerts</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="volume-spike">Mention volume spike</Label>
                        <Switch id="volume-spike" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="viral-content">Viral content detection</Label>
                        <Switch id="viral-content" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Notification Channels</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-notifications">Email notifications</Label>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="slack-notifications">Slack notifications</Label>
                        <Switch id="slack-notifications" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="sms-notifications">SMS notifications (critical only)</Label>
                        <Switch id="sms-notifications" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
