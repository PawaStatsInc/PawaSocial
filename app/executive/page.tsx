"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Heart,
  Eye,
  DollarSign,
  Target,
  Download,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  BarChart3,
  Activity,
  Globe,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const executiveSummary = {
  totalReach: 2400000,
  reachGrowth: 20.1,
  engagementRate: 4.8,
  engagementGrowth: 2.1,
  roi: 324,
  roiGrowth: 54,
  customerSatisfaction: 87,
  satisfactionGrowth: 5,
  activeCampaigns: 12,
  campaignGrowth: 3,
  churnRate: 2.3,
  churnChange: -0.8,
}

const kpiData = [
  { metric: "Brand Awareness", current: 78, target: 85, trend: "up", change: "+12%" },
  { metric: "Customer Acquisition", current: 245, target: 300, trend: "up", change: "+18%" },
  { metric: "Customer Retention", current: 92, target: 95, trend: "up", change: "+3%" },
  { metric: "Market Share", current: 15.2, target: 18, trend: "up", change: "+2.1%" },
  { metric: "Social Sentiment", current: 85, target: 90, trend: "up", change: "+8%" },
  { metric: "Response Time", current: 2.4, target: 2.0, trend: "down", change: "-0.5h" },
]

const performanceData = [
  { month: "Jul", reach: 1800000, engagement: 3.2, roi: 245, satisfaction: 82 },
  { month: "Aug", reach: 1950000, engagement: 3.8, roi: 267, satisfaction: 84 },
  { month: "Sep", reach: 2100000, engagement: 4.1, roi: 289, satisfaction: 85 },
  { month: "Oct", reach: 2250000, engagement: 4.3, roi: 298, satisfaction: 86 },
  { month: "Nov", reach: 2350000, engagement: 4.6, roi: 312, satisfaction: 87 },
  { month: "Dec", reach: 2400000, engagement: 4.8, roi: 324, satisfaction: 87 },
]

const competitivePosition = [
  { competitor: "Your Company", marketShare: 15.2, sentiment: 85, growth: 12.3 },
  { competitor: "Competitor A", marketShare: 18.7, sentiment: 72, growth: 8.1 },
  { competitor: "Competitor B", marketShare: 14.9, sentiment: 68, growth: 5.4 },
  { competitor: "Competitor C", marketShare: 12.1, sentiment: 79, growth: 9.2 },
  { competitor: "Others", marketShare: 39.1, sentiment: 65, growth: 3.8 },
]

const aiInsights = [
  {
    type: "opportunity",
    title: "Untapped Market Segment",
    description: "AI analysis reveals 23% growth opportunity in the 25-34 demographic across LinkedIn and Instagram.",
    impact: "high",
    action: "Launch targeted campaign for young professionals",
    timeframe: "2 weeks",
    expectedRoi: "145%",
  },
  {
    type: "risk",
    title: "Competitor Activity Alert",
    description: "Competitor A increased ad spend by 40% in your key markets. Potential market share impact detected.",
    impact: "medium",
    action: "Increase competitive campaigns by 25%",
    timeframe: "1 week",
    expectedRoi: "89%",
  },
  {
    type: "optimization",
    title: "Budget Reallocation Opportunity",
    description: "Instagram campaigns showing 35% higher ROI than Facebook. Recommend budget shift.",
    impact: "high",
    action: "Reallocate $15K from Facebook to Instagram",
    timeframe: "Immediate",
    expectedRoi: "67%",
  },
  {
    type: "trend",
    title: "Emerging Content Trend",
    description: "Video content engagement up 78% in your industry. Early adoption could capture market attention.",
    impact: "medium",
    action: "Increase video content production by 50%",
    timeframe: "3 weeks",
    expectedRoi: "112%",
  },
]

const quickActions = [
  {
    title: "Approve Holiday Campaign",
    description: "Q4 holiday campaign ready for approval",
    urgency: "high",
    value: "$50K budget",
  },
  {
    title: "Review Competitor Analysis",
    description: "Weekly competitive intelligence report",
    urgency: "medium",
    value: "Market insights",
  },
  {
    title: "Customer Feedback Review",
    description: "23 new customer feedback items",
    urgency: "medium",
    value: "Product insights",
  },
  {
    title: "Budget Approval Request",
    description: "Instagram campaign budget increase",
    urgency: "high",
    value: "$15K request",
  },
  {
    title: "Team Performance Review",
    description: "Monthly team KPI assessment",
    urgency: "low",
    value: "Team optimization",
  },
]

const platformPerformance = [
  { platform: "Instagram", reach: 850000, engagement: 6.2, roi: 145, color: "#E4405F" },
  { platform: "LinkedIn", reach: 620000, engagement: 4.1, roi: 189, color: "#0077B5" },
  { platform: "Twitter", reach: 540000, engagement: 3.8, roi: 98, color: "#1DA1F2" },
  { platform: "Facebook", reach: 390000, engagement: 2.9, roi: 76, color: "#4267B2" },
]

export default function ExecutivePage() {
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
                <BreadcrumbPage>Executive Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-4 flex gap-2">
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
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Executive Overview</TabsTrigger>
            <TabsTrigger value="kpis">Key Metrics</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="competitive">Competitive Intel</TabsTrigger>
            <TabsTrigger value="actions">Quick Actions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3 lg:grid-cols-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{(executiveSummary.totalReach / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{executiveSummary.reachGrowth}% from last
                    month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{executiveSummary.engagementRate}%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{executiveSummary.engagementGrowth}% from
                    last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">ROI</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{executiveSummary.roi}%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{executiveSummary.roiGrowth}% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{executiveSummary.customerSatisfaction}%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{executiveSummary.satisfactionGrowth}% from
                    last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{executiveSummary.activeCampaigns}</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{executiveSummary.campaignGrowth} new this
                    month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{executiveSummary.churnRate}%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
                    {executiveSummary.churnChange}% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Key metrics performance over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="reach" stroke="#8884d8" strokeWidth={2} name="Reach (M)" />
                      <Line type="monotone" dataKey="engagement" stroke="#82ca9d" strokeWidth={2} name="Engagement %" />
                      <Line type="monotone" dataKey="roi" stroke="#ffc658" strokeWidth={2} name="ROI %" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>ROI comparison across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={platformPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="platform" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="roi" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Generated Executive Brief</CardTitle>
                  <CardDescription>Key insights and recommendations for this period</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          Strong Performance
                        </span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Your social media ROI increased by 54% this month, significantly outperforming industry
                        benchmarks. Instagram campaigns are driving the highest returns.
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Growth Opportunity</span>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        AI analysis identifies a 23% untapped market in the 25-34 demographic. Recommended budget
                        allocation: $25K for targeted campaigns.
                      </p>
                    </div>

                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                          Competitive Alert
                        </span>
                      </div>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        Competitor A increased ad spend by 40% in your key markets. Consider defensive strategies to
                        maintain market share.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Strategic Recommendations</CardTitle>
                  <CardDescription>AI-powered strategic actions for next quarter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Increase Instagram Investment</span>
                        <Badge variant="default">High Priority</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Reallocate $15K from Facebook to Instagram for 67% ROI improvement
                      </p>
                      <Button size="sm">Approve</Button>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Launch Video Content Strategy</span>
                        <Badge variant="secondary">Medium Priority</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Video engagement up 78% - increase production by 50%
                      </p>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Competitive Response Campaign</span>
                        <Badge variant="destructive">Urgent</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Counter competitor activity with 25% budget increase
                      </p>
                      <Button size="sm">Implement</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="kpis" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Key Performance Indicators</h2>
              <Button variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Customize KPIs
              </Button>
            </div>

            <div className="grid gap-4">
              {kpiData.map((kpi) => (
                <Card key={kpi.metric}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">{kpi.metric}</h3>
                      <Badge
                        variant={
                          kpi.trend === "up"
                            ? "default"
                            : kpi.trend === "down" && kpi.metric === "Response Time"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {kpi.trend === "up" ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {kpi.change}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">
                          {kpi.current}
                          {kpi.metric === "Response Time"
                            ? "h"
                            : kpi.metric.includes("Rate") ||
                                kpi.metric.includes("Share") ||
                                kpi.metric.includes("Sentiment")
                              ? "%"
                              : ""}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Target: {kpi.target}
                          {kpi.metric === "Response Time"
                            ? "h"
                            : kpi.metric.includes("Rate") ||
                                kpi.metric.includes("Share") ||
                                kpi.metric.includes("Sentiment")
                              ? "%"
                              : ""}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Progress to Target</span>
                          <span>{Math.round((kpi.current / kpi.target) * 100)}%</span>
                        </div>
                        <Progress
                          value={
                            kpi.metric === "Response Time"
                              ? (kpi.target / kpi.current) * 100
                              : (kpi.current / kpi.target) * 100
                          }
                          className="h-2"
                        />
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {kpi.metric === "Brand Awareness" && "Measured through surveys and social listening"}
                        {kpi.metric === "Customer Acquisition" && "New customers acquired this month"}
                        {kpi.metric === "Customer Retention" && "Percentage of customers retained"}
                        {kpi.metric === "Market Share" && "Share of voice in your industry"}
                        {kpi.metric === "Social Sentiment" && "Positive sentiment across all mentions"}
                        {kpi.metric === "Response Time" && "Average time to respond to customer inquiries"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>KPI Performance Summary</CardTitle>
                <CardDescription>Overall performance against strategic objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl font-bold text-green-600">5/6</div>
                    <p className="text-sm text-muted-foreground">KPIs on track</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">83%</div>
                    <p className="text-sm text-muted-foreground">Average target achievement</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">+12%</div>
                    <p className="text-sm text-muted-foreground">Overall improvement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">AI-Powered Insights</h2>
              <Button variant="outline">
                <Zap className="h-4 w-4 mr-2" />
                Generate New Insights
              </Button>
            </div>

            <div className="grid gap-4">
              {aiInsights.map((insight, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            insight.type === "opportunity"
                              ? "bg-green-100 dark:bg-green-900"
                              : insight.type === "risk"
                                ? "bg-red-100 dark:bg-red-900"
                                : insight.type === "optimization"
                                  ? "bg-blue-100 dark:bg-blue-900"
                                  : "bg-purple-100 dark:bg-purple-900"
                          }`}
                        >
                          {insight.type === "opportunity" && <TrendingUp className="h-5 w-5 text-green-600" />}
                          {insight.type === "risk" && <AlertTriangle className="h-5 w-5 text-red-600" />}
                          {insight.type === "optimization" && <Target className="h-5 w-5 text-blue-600" />}
                          {insight.type === "trend" && <BarChart3 className="h-5 w-5 text-purple-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{insight.title}</h3>
                          <p className="text-sm text-muted-foreground">{insight.description}</p>
                        </div>
                      </div>
                      <Badge variant={insight.impact === "high" ? "default" : "secondary"}>
                        {insight.impact} impact
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Recommended Action</p>
                        <p className="font-medium">{insight.action}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Timeframe</p>
                        <p className="font-medium">{insight.timeframe}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expected ROI</p>
                        <p className="font-medium">{insight.expectedRoi}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm">Implement</Button>
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                      <Button size="sm" variant="outline">
                        Dismiss
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Insight Performance</CardTitle>
                <CardDescription>How AI recommendations have performed over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">89%</div>
                    <p className="text-sm text-muted-foreground">Recommendation accuracy</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">156%</div>
                    <p className="text-sm text-muted-foreground">Average ROI improvement</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">23</div>
                    <p className="text-sm text-muted-foreground">Insights implemented</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">$2.4M</div>
                    <p className="text-sm text-muted-foreground">Value generated</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitive" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Competitive Intelligence</h2>
              <Button variant="outline">
                <Globe className="h-4 w-4 mr-2" />
                Market Analysis
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Market Position</CardTitle>
                <CardDescription>Your position relative to key competitors</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={competitivePosition}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="competitor" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="marketShare" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {competitivePosition.map((competitor) => (
                <Card key={competitor.competitor}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{competitor.competitor}</h3>
                        {competitor.competitor === "Your Company" && <Badge variant="default">You</Badge>}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Market Share</p>
                        <p className="font-medium text-lg">{competitor.marketShare}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Sentiment Score</p>
                        <p className="font-medium text-lg">{competitor.sentiment}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Growth Rate</p>
                        <p className="font-medium text-lg">{competitor.growth}%</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Market Share Progress</span>
                        <span>{competitor.marketShare}%</span>
                      </div>
                      <Progress value={competitor.marketShare} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Competitive Insights</CardTitle>
                <CardDescription>Key intelligence about your competitive landscape</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        Sentiment Leadership
                      </span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Your brand has the highest sentiment score (85%) among key competitors, indicating strong customer
                      satisfaction and brand perception.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-800 dark:text-orange-200">Market Share Gap</span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Competitor A leads with 18.7% market share. Your 12.3% growth rate is strong - maintain momentum
                      to close the gap.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Growth Opportunity</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Your 12.3% growth rate is the highest among competitors. Continue current strategies to gain
                      market share.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="actions" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Quick Actions</h2>
              <Button variant="outline">
                <Clock className="h-4 w-4 mr-2" />
                View All Tasks
              </Button>
            </div>

            <div className="grid gap-4">
              {quickActions.map((action, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{action.title}</h3>
                          <Badge
                            variant={
                              action.urgency === "high"
                                ? "destructive"
                                : action.urgency === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                            className="text-xs"
                          >
                            {action.urgency} priority
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{action.description}</p>
                        <p className="text-sm font-medium">{action.value}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">
                          {action.title.includes("Approve")
                            ? "Approve"
                            : action.title.includes("Review")
                              ? "Review"
                              : "View"}
                        </Button>
                        <Button size="sm" variant="outline">
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Automated Actions</CardTitle>
                <CardDescription>AI-powered actions that have been automatically executed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <div>
                        <span className="text-sm font-medium">Budget optimization executed</span>
                        <p className="text-xs text-muted-foreground">Reallocated $5K to high-performing campaigns</p>
                      </div>
                    </div>
                    <Badge variant="default">Completed</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <div>
                        <span className="text-sm font-medium">Negative sentiment alert sent</span>
                        <p className="text-xs text-muted-foreground">Customer service team notified of spike</p>
                      </div>
                    </div>
                    <Badge variant="default">Completed</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <div>
                        <span className="text-sm font-medium">Weekly report generated</span>
                        <p className="text-xs text-muted-foreground">Stakeholder report sent automatically</p>
                      </div>
                    </div>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Action Center Statistics</CardTitle>
                <CardDescription>Overview of actions and their impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">23</div>
                    <p className="text-sm text-muted-foreground">Actions completed this month</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <p className="text-sm text-muted-foreground">Pending approvals</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">89%</div>
                    <p className="text-sm text-muted-foreground">Automation success rate</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">2.4h</div>
                    <p className="text-sm text-muted-foreground">Average response time</p>
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
