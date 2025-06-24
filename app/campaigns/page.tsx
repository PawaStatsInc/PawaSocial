"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Megaphone,
  Plus,
  Target,
  DollarSign,
  TrendingUp,
  BarChart3,
  Settings,
  Play,
  Pause,
  Edit,
  Copy,
  Archive,
  AlertCircle,
  CheckCircle,
  Clock,
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
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"

const campaigns = [
  {
    id: 1,
    name: "Holiday Season 2024",
    status: "active",
    budget: 5000,
    spent: 3200,
    reach: 125000,
    engagement: 8500,
    conversions: 245,
    roi: 320,
    startDate: "Dec 1, 2024",
    endDate: "Dec 31, 2024",
    platforms: ["Instagram", "Facebook", "LinkedIn"],
    objective: "Brand Awareness",
  },
  {
    id: 2,
    name: "Product Launch Campaign",
    status: "completed",
    budget: 8000,
    spent: 7800,
    reach: 200000,
    engagement: 15600,
    conversions: 450,
    roi: 425,
    startDate: "Nov 1, 2024",
    endDate: "Nov 30, 2024",
    platforms: ["Instagram", "Twitter", "LinkedIn"],
    objective: "Conversions",
  },
  {
    id: 3,
    name: "Brand Awareness Q1",
    status: "draft",
    budget: 10000,
    spent: 0,
    reach: 0,
    engagement: 0,
    conversions: 0,
    roi: 0,
    startDate: "Jan 1, 2025",
    endDate: "Mar 31, 2025",
    platforms: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
    objective: "Brand Awareness",
  },
]

const campaignPerformanceData = [
  { date: "Week 1", reach: 25000, engagement: 1800, conversions: 45, spend: 800 },
  { date: "Week 2", reach: 32000, engagement: 2400, conversions: 62, spend: 1000 },
  { date: "Week 3", reach: 28000, engagement: 2100, conversions: 58, spend: 900 },
  { date: "Week 4", reach: 40000, engagement: 2200, conversions: 80, spend: 1200 },
]

const topCreatives = [
  {
    id: 1,
    name: "Holiday Special Offer",
    type: "image",
    platform: "Instagram",
    impressions: 45000,
    clicks: 2300,
    ctr: 5.1,
    conversions: 89,
    spend: 450,
  },
  {
    id: 2,
    name: "Product Demo Video",
    type: "video",
    platform: "Facebook",
    impressions: 38000,
    clicks: 1900,
    ctr: 5.0,
    conversions: 76,
    spend: 380,
  },
  {
    id: 3,
    name: "Customer Testimonial",
    type: "carousel",
    platform: "LinkedIn",
    impressions: 22000,
    clicks: 980,
    ctr: 4.5,
    conversions: 45,
    spend: 220,
  },
]

const budgetAllocation = [
  { platform: "Instagram", budget: 2000, spent: 1200, color: "#E4405F" },
  { platform: "Facebook", budget: 1500, spent: 900, color: "#4267B2" },
  { platform: "LinkedIn", budget: 1000, spent: 700, color: "#0077B5" },
  { platform: "Twitter", budget: 500, spent: 400, color: "#1DA1F2" },
]

export default function CampaignsPage() {
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0])
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

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
            <Separator orientation="vertical" className="h-4" />
            <h1 className="text-2xl font-bold">Campaign Management</h1>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button asChild>
              <Link href="/demo">Try Demo</Link>
            </Button>
          </div>
        </div>

        {/* Feature Description */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Campaign Management Preview</h2>
              <p className="text-muted-foreground">
                Explore our comprehensive campaign management tools. Create, monitor, and optimize your marketing
                campaigns across multiple platforms with AI-powered insights and automation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Create Campaign Button */}
        <div className="flex justify-end mb-6">
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Campaign</DialogTitle>
                <DialogDescription>
                  Set up a new marketing campaign with budget and targeting options.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="campaign-name" className="text-right">
                    Campaign Name
                  </Label>
                  <Input id="campaign-name" className="col-span-3" placeholder="Enter campaign name" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="objective" className="text-right">
                    Objective
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select campaign objective" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="awareness">Brand Awareness</SelectItem>
                      <SelectItem value="traffic">Website Traffic</SelectItem>
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="conversions">Conversions</SelectItem>
                      <SelectItem value="leads">Lead Generation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="budget" className="text-right">
                    Budget ($)
                  </Label>
                  <Input id="budget" type="number" className="col-span-3" placeholder="5000" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="platforms" className="text-right">
                    Platforms
                  </Label>
                  <div className="col-span-3 flex gap-2">
                    {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((platform) => (
                      <Button key={platform} variant="outline" size="sm">
                        {platform}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="description" className="col-span-3" placeholder="Campaign description..." />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>Create Campaign</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="creatives">Top Creatives</TabsTrigger>
            <TabsTrigger value="budget">Budget & ROI</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <Megaphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$11,000</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">372%</div>
                  <p className="text-xs text-muted-foreground">+52% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">695</div>
                  <p className="text-xs text-muted-foreground">+23% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                  <CardDescription>Weekly performance metrics for active campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={campaignPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="reach" stroke="#8884d8" strokeWidth={2} />
                      <Line type="monotone" dataKey="engagement" stroke="#82ca9d" strokeWidth={2} />
                      <Line type="monotone" dataKey="conversions" stroke="#ffc658" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Budget Allocation</CardTitle>
                  <CardDescription>Budget distribution across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={budgetAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="budget"
                      >
                        {budgetAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {budgetAllocation.map((platform) => (
                      <div key={platform.platform} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }} />
                        <span className="text-sm">{platform.platform}</span>
                        <span className="text-sm text-muted-foreground">${platform.budget}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Campaigns</CardTitle>
                <CardDescription>Manage and monitor all your marketing campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{campaign.name}</h3>
                            <Badge
                              variant={
                                campaign.status === "active"
                                  ? "default"
                                  : campaign.status === "completed"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {campaign.status}
                            </Badge>
                            <Badge variant="outline">{campaign.objective}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>
                              {campaign.startDate} - {campaign.endDate}
                            </span>
                            <span>Platforms: {campaign.platforms.join(", ")}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-1" />
                            Duplicate
                          </Button>
                          {campaign.status === "active" ? (
                            <Button variant="outline" size="sm">
                              <Pause className="h-4 w-4 mr-1" />
                              Pause
                            </Button>
                          ) : campaign.status === "draft" ? (
                            <Button size="sm">
                              <Play className="h-4 w-4 mr-1" />
                              Launch
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm">
                              <Archive className="h-4 w-4 mr-1" />
                              Archive
                            </Button>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Budget</p>
                          <p className="font-medium">${campaign.budget.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Spent</p>
                          <p className="font-medium">${campaign.spent.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Reach</p>
                          <p className="font-medium">{campaign.reach.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Engagement</p>
                          <p className="font-medium">{campaign.engagement.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Conversions</p>
                          <p className="font-medium">{campaign.conversions}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">ROI</p>
                          <p className="font-medium">{campaign.roi}%</p>
                        </div>
                      </div>

                      {campaign.status === "active" && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Budget Progress</span>
                            <span>{Math.round((campaign.spent / campaign.budget) * 100)}%</span>
                          </div>
                          <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Campaign Performance</h2>
              <Select defaultValue="holiday">
                <SelectTrigger className="w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="holiday">Holiday Season 2024</SelectItem>
                  <SelectItem value="product">Product Launch Campaign</SelectItem>
                  <SelectItem value="brand">Brand Awareness Q1</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Reach vs Engagement</CardTitle>
                  <CardDescription>Weekly reach and engagement trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={campaignPerformanceData}>
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
                  <CardDescription>From impressions to conversions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={campaignPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="conversions" fill="#8884d8" />
                      <Bar dataKey="spend" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Platform Performance Comparison</CardTitle>
                <CardDescription>How different platforms are performing for this campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {budgetAllocation.map((platform) => (
                    <div key={platform.platform} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{platform.platform}</h3>
                        <Badge variant="outline">{Math.round((platform.spent / platform.budget) * 100)}% spent</Badge>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Budget</p>
                          <p className="font-medium">${platform.budget}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Spent</p>
                          <p className="font-medium">${platform.spent}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">CPM</p>
                          <p className="font-medium">$12.50</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">CPC</p>
                          <p className="font-medium">$1.85</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Progress value={(platform.spent / platform.budget) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="creatives" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top Performing Creatives</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Creative
              </Button>
            </div>

            <div className="grid gap-4">
              {topCreatives.map((creative) => (
                <Card key={creative.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{creative.name}</h3>
                          <Badge variant="outline">{creative.type}</Badge>
                          <Badge variant="outline">{creative.platform}</Badge>
                          <Badge variant="default">Top Performer</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4 mr-1" />
                          Duplicate
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Impressions</p>
                        <p className="font-medium">{creative.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Clicks</p>
                        <p className="font-medium">{creative.clicks.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">CTR</p>
                        <p className="font-medium">{creative.ctr}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Conversions</p>
                        <p className="font-medium">{creative.conversions}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Spend</p>
                        <p className="font-medium">${creative.spend}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">CPA</p>
                        <p className="font-medium">${(creative.spend / creative.conversions).toFixed(2)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Creative Performance Insights</CardTitle>
                <CardDescription>AI-powered insights about your creative performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        High Performing Creative Type
                      </span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Video creatives are performing 40% better than static images. Consider creating more video
                      content.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        Optimization Opportunity
                      </span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Your Instagram creatives have 2x higher engagement. Consider reallocating budget from Facebook to
                      Instagram.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                        Creative Fatigue Alert
                      </span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      "Holiday Special Offer" creative is showing declining performance. Consider refreshing or pausing
                      this creative.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Budget & ROI Analysis</h2>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Budget Settings
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$23,500</div>
                  <p className="text-xs text-muted-foreground">Across all campaigns</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$11,900</div>
                  <p className="text-xs text-muted-foreground">50.6% of total budget</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">372%</div>
                  <p className="text-xs text-muted-foreground">+52% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>ROI by Campaign</CardTitle>
                  <CardDescription>Return on investment for each campaign</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={campaigns.filter((c) => c.status !== "draft")}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="roi" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cost Per Acquisition</CardTitle>
                  <CardDescription>CPA trends across campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {campaigns
                      .filter((c) => c.status !== "draft")
                      .map((campaign) => (
                        <div key={campaign.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <span className="font-medium">{campaign.name}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {campaign.conversions} conversions
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold">
                              ${(campaign.spent / campaign.conversions).toFixed(2)}
                            </div>
                            <div className="text-xs text-muted-foreground">CPA</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Budget Optimization Recommendations</CardTitle>
                <CardDescription>AI-powered suggestions to improve your budget allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        Increase Instagram Budget
                      </span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Instagram is delivering 25% lower CPA. Consider increasing budget by $500 for better ROI.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        Optimize Bidding Strategy
                      </span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Switch to target CPA bidding on Facebook to reduce cost per acquisition by an estimated 15%.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                        Dayparting Opportunity
                      </span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Your ads perform 30% better between 2-6 PM. Consider scheduling more budget during these hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Campaign Optimization</h2>
              <Button>
                <Target className="h-4 w-4 mr-2" />
                Auto-Optimize
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Alerts</CardTitle>
                  <CardDescription>Issues that need your attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 border rounded-lg border-red-200 bg-red-50 dark:bg-red-950">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-red-800 dark:text-red-200">High CPA Alert</p>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Facebook campaign CPA increased by 45% in the last 3 days
                        </p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Investigate
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 border rounded-lg border-orange-200 bg-orange-50 dark:bg-orange-950">
                      <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-orange-800 dark:text-orange-200">Budget Pacing</p>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          Holiday campaign is spending 20% faster than planned
                        </p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Adjust Budget
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 border rounded-lg border-green-200 bg-green-50 dark:bg-green-950">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-800 dark:text-green-200">Opportunity Detected</p>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          LinkedIn campaign has room for 30% budget increase
                        </p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Scale Up
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Optimization Actions</CardTitle>
                  <CardDescription>Recommended actions to improve performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Pause underperforming ad sets</span>
                        <Badge variant="destructive">High Impact</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        3 ad sets with CPA above $50 should be paused
                      </p>
                      <Button size="sm">Apply</Button>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Increase budget for top performers</span>
                        <Badge variant="default">Medium Impact</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Boost budget for 2 high-performing ad sets by 25%
                      </p>
                      <Button size="sm">Apply</Button>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Update audience targeting</span>
                        <Badge variant="secondary">Low Impact</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Exclude low-converting demographics</p>
                      <Button size="sm" variant="outline">
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>A/B Test Results</CardTitle>
                <CardDescription>Current and completed tests with results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Headline Test: "Save 50%" vs "Limited Time Offer"</h3>
                      <Badge variant="default">Winner Detected</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
                        <p className="text-sm font-medium text-green-800 dark:text-green-200">Variant A: "Save 50%"</p>
                        <p className="text-sm text-green-700 dark:text-green-300">CTR: 3.2% | Conversions: 45</p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
                        <p className="text-sm font-medium">Variant B: "Limited Time Offer"</p>
                        <p className="text-sm text-muted-foreground">CTR: 2.1% | Conversions: 28</p>
                      </div>
                    </div>
                    <Button size="sm">Apply Winner</Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Creative Test: Video vs Static Image</h3>
                      <Badge variant="secondary">In Progress</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="p-3 border rounded">
                        <p className="text-sm font-medium">Variant A: Video</p>
                        <p className="text-sm text-muted-foreground">CTR: 4.1% | Conversions: 32</p>
                      </div>
                      <div className="p-3 border rounded">
                        <p className="text-sm font-medium">Variant B: Static Image</p>
                        <p className="text-sm text-muted-foreground">CTR: 2.8% | Conversions: 24</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={65} className="flex-1" />
                      <span className="text-sm text-muted-foreground">65% complete</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Launch Your Campaigns?</h2>
            <p className="text-muted-foreground mb-6">
              Start managing your marketing campaigns with AI-powered insights and optimization tools.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/demo">Try Demo</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
