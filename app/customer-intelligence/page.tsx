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
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  TrendingUp,
  TrendingDown,
  Heart,
  MessageSquare,
  Star,
  AlertTriangle,
  CheckCircle,
  Target,
  BarChart3,
  Filter,
  Search,
  ExternalLink,
  Mail,
  Plus,
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

const customerProfiles = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@techcorp.com",
    company: "TechCorp Inc",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=40&width=40",
    loyaltyScore: 92,
    churnRisk: "low",
    ltv: 15600,
    totalInteractions: 45,
    lastInteraction: "2 hours ago",
    platforms: ["LinkedIn", "Twitter"],
    interests: ["AI", "Marketing", "SaaS"],
    stage: "advocate",
    sentiment: "positive",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@startup.io",
    company: "StartupIO",
    role: "CEO",
    avatar: "/placeholder.svg?height=40&width=40",
    loyaltyScore: 78,
    churnRisk: "medium",
    ltv: 8900,
    totalInteractions: 23,
    lastInteraction: "1 day ago",
    platforms: ["LinkedIn", "Instagram"],
    interests: ["Entrepreneurship", "Tech", "Growth"],
    stage: "customer",
    sentiment: "neutral",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma@designstudio.com",
    company: "Design Studio",
    role: "Creative Director",
    avatar: "/placeholder.svg?height=40&width=40",
    loyaltyScore: 45,
    churnRisk: "high",
    ltv: 3200,
    totalInteractions: 12,
    lastInteraction: "5 days ago",
    platforms: ["Instagram", "Twitter"],
    interests: ["Design", "UX", "Creativity"],
    stage: "prospect",
    sentiment: "negative",
  },
]

const journeyStages = [
  { stage: "Awareness", customers: 1250, conversion: 15 },
  { stage: "Interest", customers: 890, conversion: 25 },
  { stage: "Consideration", customers: 567, conversion: 35 },
  { stage: "Purchase", customers: 234, conversion: 45 },
  { stage: "Retention", customers: 189, conversion: 85 },
  { stage: "Advocacy", customers: 156, conversion: 92 },
]

const loyaltyDistribution = [
  { name: "Champions", value: 25, color: "#10B981" },
  { name: "Loyalists", value: 35, color: "#3B82F6" },
  { name: "Satisfied", value: 25, color: "#F59E0B" },
  { name: "At Risk", value: 15, color: "#EF4444" },
]

const churnPrediction = [
  { month: "Jan", predicted: 12, actual: 10 },
  { month: "Feb", predicted: 15, actual: 14 },
  { month: "Mar", predicted: 18, actual: 16 },
  { month: "Apr", predicted: 14, actual: 13 },
  { month: "May", predicted: 16, actual: 15 },
  { month: "Jun", predicted: 20, actual: 18 },
]

const feedbackPatterns = [
  {
    category: "Product Features",
    positive: 78,
    negative: 22,
    volume: 234,
    trend: "up",
    change: "+12%",
  },
  {
    category: "Customer Support",
    positive: 65,
    negative: 35,
    volume: 189,
    trend: "down",
    change: "-8%",
  },
  {
    category: "Pricing",
    positive: 45,
    negative: 55,
    volume: 156,
    trend: "stable",
    change: "0%",
  },
  {
    category: "User Experience",
    positive: 82,
    negative: 18,
    volume: 298,
    trend: "up",
    change: "+18%",
  },
]

const crmIntegrations = [
  { name: "Salesforce", status: "connected", lastSync: "2 minutes ago", records: 1250 },
  { name: "HubSpot", status: "connected", lastSync: "5 minutes ago", records: 890 },
  { name: "Zoho CRM", status: "disconnected", lastSync: "Never", records: 0 },
  { name: "Pipedrive", status: "connected", lastSync: "1 hour ago", records: 567 },
]

export default function CustomerIntelligencePage() {
  const [selectedCustomer, setSelectedCustomer] = useState(customerProfiles[0])
  const [filterStage, setFilterStage] = useState("all")

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
                <BreadcrumbPage>Customer Intelligence</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Tabs defaultValue="profiles" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profiles">Customer Profiles</TabsTrigger>
            <TabsTrigger value="journey">Journey Mapping</TabsTrigger>
            <TabsTrigger value="loyalty">Loyalty Analysis</TabsTrigger>
            <TabsTrigger value="churn">Churn Prediction</TabsTrigger>
            <TabsTrigger value="feedback">Feedback Patterns</TabsTrigger>
            <TabsTrigger value="crm">CRM Integration</TabsTrigger>
          </TabsList>

          <TabsContent value="profiles" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Customer Profiles</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search customers..." className="pl-8 w-64" />
                </div>
                <Select value={filterStage} onValueChange={setFilterStage}>
                  <SelectTrigger className="w-32">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Stages</SelectItem>
                    <SelectItem value="prospect">Prospects</SelectItem>
                    <SelectItem value="customer">Customers</SelectItem>
                    <SelectItem value="advocate">Advocates</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,847</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Loyalty Score</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +5 points from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">High Churn Risk</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
                    -8% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. LTV</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$9,240</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +18% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Customer Profiles</CardTitle>
                  <CardDescription>Detailed view of your customer base with AI-powered insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerProfiles.map((customer) => (
                      <div
                        key={customer.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedCustomer.id === customer.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                        }`}
                        onClick={() => setSelectedCustomer(customer)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                              <AvatarFallback>
                                {customer.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{customer.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {customer.role} at {customer.company}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                customer.churnRisk === "low"
                                  ? "default"
                                  : customer.churnRisk === "medium"
                                    ? "secondary"
                                    : "destructive"
                              }
                              className="text-xs"
                            >
                              {customer.churnRisk} risk
                            </Badge>
                            <Badge
                              variant={
                                customer.sentiment === "positive"
                                  ? "default"
                                  : customer.sentiment === "negative"
                                    ? "destructive"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {customer.sentiment}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Loyalty Score</p>
                            <p className="font-medium">{customer.loyaltyScore}/100</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">LTV</p>
                            <p className="font-medium">${customer.ltv.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Interactions</p>
                            <p className="font-medium">{customer.totalInteractions}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Last Active</p>
                            <p className="font-medium">{customer.lastInteraction}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex gap-1">
                            {customer.platforms.map((platform) => (
                              <Badge key={platform} variant="outline" className="text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-1">
                            {customer.interests.slice(0, 2).map((interest) => (
                              <Badge key={interest} variant="secondary" className="text-xs">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Details</CardTitle>
                  <CardDescription>Detailed profile for {selectedCustomer.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={selectedCustomer.avatar || "/placeholder.svg"} alt={selectedCustomer.name} />
                        <AvatarFallback className="text-lg">
                          {selectedCustomer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{selectedCustomer.name}</h3>
                        <p className="text-muted-foreground">{selectedCustomer.role}</p>
                        <p className="text-sm text-muted-foreground">{selectedCustomer.company}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Loyalty Score</span>
                          <span className="text-sm font-bold">{selectedCustomer.loyaltyScore}/100</span>
                        </div>
                        <Progress value={selectedCustomer.loyaltyScore} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Lifetime Value</p>
                          <p className="font-semibold text-lg">${selectedCustomer.ltv.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Total Interactions</p>
                          <p className="font-semibold text-lg">{selectedCustomer.totalInteractions}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Contact Information</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{selectedCustomer.email}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Active Platforms</p>
                        <div className="flex gap-2">
                          {selectedCustomer.platforms.map((platform) => (
                            <Badge key={platform} variant="outline">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Interests</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedCustomer.interests.map((interest) => (
                            <Badge key={interest} variant="secondary" className="text-xs">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="journey" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Customer Journey Mapping</h2>
              <Button variant="outline">
                <Target className="h-4 w-4 mr-2" />
                Optimize Journey
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Journey Funnel</CardTitle>
                <CardDescription>Customer progression through different stages</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={journeyStages}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="stage" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="customers" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {journeyStages.map((stage, index) => (
                <Card key={stage.stage}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold">{stage.stage}</h3>
                          <p className="text-sm text-muted-foreground">{stage.customers.toLocaleString()} customers</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{stage.conversion}%</div>
                        <p className="text-sm text-muted-foreground">conversion rate</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Stage Progress</span>
                          <span>{stage.conversion}%</span>
                        </div>
                        <Progress value={stage.conversion} className="h-2" />
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Avg. Time in Stage</p>
                          <p className="font-medium">
                            {stage.stage === "Awareness"
                              ? "3 days"
                              : stage.stage === "Interest"
                                ? "7 days"
                                : stage.stage === "Consideration"
                                  ? "14 days"
                                  : stage.stage === "Purchase"
                                    ? "2 days"
                                    : stage.stage === "Retention"
                                      ? "90 days"
                                      : "180 days"}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Drop-off Rate</p>
                          <p className="font-medium">{100 - stage.conversion}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Key Actions</p>
                          <p className="font-medium">
                            {stage.stage === "Awareness"
                              ? "Content views"
                              : stage.stage === "Interest"
                                ? "Email opens"
                                : stage.stage === "Consideration"
                                  ? "Demo requests"
                                  : stage.stage === "Purchase"
                                    ? "Transactions"
                                    : stage.stage === "Retention"
                                      ? "Product usage"
                                      : "Referrals"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Journey Optimization Insights</CardTitle>
                <CardDescription>AI-powered recommendations to improve customer journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-medium text-red-800 dark:text-red-200">
                        High Drop-off at Consideration Stage
                      </span>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      65% of prospects drop off during consideration. Consider adding more social proof and case
                      studies.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        Strong Retention Performance
                      </span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      85% retention rate is above industry average. Your onboarding process is working well.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Advocacy Opportunity</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      92% of advocates are highly engaged. Implement a referral program to leverage this group.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="loyalty" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Loyalty Analysis</h2>
              <Button variant="outline">
                <Star className="h-4 w-4 mr-2" />
                Loyalty Program
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Loyalty Distribution</CardTitle>
                  <CardDescription>Customer segmentation by loyalty level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={loyaltyDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {loyaltyDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {loyaltyDistribution.map((segment) => (
                      <div key={segment.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }} />
                        <span className="text-sm">{segment.name}</span>
                        <span className="text-sm text-muted-foreground">{segment.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Loyalty Trends</CardTitle>
                  <CardDescription>How customer loyalty has evolved over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={[
                        { month: "Jan", score: 72 },
                        { month: "Feb", score: 74 },
                        { month: "Mar", score: 73 },
                        { month: "Apr", score: 76 },
                        { month: "May", score: 78 },
                        { month: "Jun", score: 78 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4">
              {loyaltyDistribution.map((segment) => (
                <Card key={segment.name}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: segment.color }} />
                        <h3 className="font-semibold">{segment.name}</h3>
                        <Badge variant="outline">{segment.value}% of customers</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Avg. LTV</p>
                        <p className="font-medium">
                          $
                          {segment.name === "Champions"
                            ? "15,600"
                            : segment.name === "Loyalists"
                              ? "9,800"
                              : segment.name === "Satisfied"
                                ? "5,400"
                                : "2,100"}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Retention Rate</p>
                        <p className="font-medium">
                          {segment.name === "Champions"
                            ? "95%"
                            : segment.name === "Loyalists"
                              ? "85%"
                              : segment.name === "Satisfied"
                                ? "65%"
                                : "35%"}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Referral Rate</p>
                        <p className="font-medium">
                          {segment.name === "Champions"
                            ? "45%"
                            : segment.name === "Loyalists"
                              ? "25%"
                              : segment.name === "Satisfied"
                                ? "8%"
                                : "2%"}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Engagement Score</p>
                        <p className="font-medium">
                          {segment.name === "Champions"
                            ? "92"
                            : segment.name === "Loyalists"
                              ? "78"
                              : segment.name === "Satisfied"
                                ? "54"
                                : "28"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        {segment.name === "Champions"
                          ? "Your most valuable customers who actively promote your brand"
                          : segment.name === "Loyalists"
                            ? "Satisfied customers who are likely to repurchase"
                            : segment.name === "Satisfied"
                              ? "Content customers but may switch to competitors"
                              : "Customers at risk of churning"}
                      </p>
                      <Button size="sm" variant="outline">
                        View Segment Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="churn" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Churn Prediction</h2>
              <Button variant="outline">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Prevention Campaign
              </Button>
            </div>

            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Predicted Churn</CardTitle>
                  <TrendingDown className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">customers this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Prevention Success</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">73%</div>
                  <p className="text-xs text-muted-foreground">of at-risk customers retained</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Model Accuracy</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89%</div>
                  <p className="text-xs text-muted-foreground">prediction accuracy</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Churn Prediction vs Actual</CardTitle>
                <CardDescription>AI model performance over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={churnPrediction}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="predicted" stroke="#8884d8" strokeWidth={2} name="Predicted" />
                    <Line type="monotone" dataKey="actual" stroke="#82ca9d" strokeWidth={2} name="Actual" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>High-Risk Customers</CardTitle>
                <CardDescription>Customers with high probability of churning in the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerProfiles
                    .filter((c) => c.churnRisk === "high")
                    .map((customer) => (
                      <div key={customer.id} className="p-4 border rounded-lg border-red-200 bg-red-50 dark:bg-red-950">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                              <AvatarFallback>
                                {customer.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{customer.name}</h3>
                              <p className="text-sm text-muted-foreground">{customer.company}</p>
                            </div>
                          </div>
                          <Badge variant="destructive">85% churn risk</Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                          <div>
                            <p className="text-muted-foreground">Last Interaction</p>
                            <p className="font-medium">{customer.lastInteraction}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Loyalty Score</p>
                            <p className="font-medium">{customer.loyaltyScore}/100</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">LTV at Risk</p>
                            <p className="font-medium">${customer.ltv.toLocaleString()}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <p className="text-sm font-medium">Risk Factors:</p>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline" className="text-xs">
                              Low engagement
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Support tickets
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Reduced usage
                            </Badge>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Reach Out
                          </Button>
                          <Button size="sm" variant="outline">
                            <Star className="h-4 w-4 mr-2" />
                            Offer Incentive
                          </Button>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Churn Prevention Strategies</CardTitle>
                <CardDescription>AI-recommended actions to reduce customer churn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Proactive Outreach</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Reach out to customers who haven't engaged in 7+ days with personalized check-ins.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">Loyalty Incentives</span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Offer exclusive discounts or features to customers with declining engagement scores.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                        Product Education
                      </span>
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Provide additional training and resources to customers showing signs of feature underutilization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Feedback Analysis</h2>
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Collect Feedback
              </Button>
            </div>

            <div className="grid gap-4">
              {feedbackPatterns.map((pattern) => (
                <Card key={pattern.category}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{pattern.category}</h3>
                        <Badge variant="outline">{pattern.volume} mentions</Badge>
                        <Badge
                          variant={
                            pattern.trend === "up" ? "default" : pattern.trend === "down" ? "destructive" : "secondary"
                          }
                          className="text-xs"
                        >
                          {pattern.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : pattern.trend === "down" ? (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          ) : null}
                          {pattern.change}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Sentiment Distribution</span>
                        <div className="flex gap-4">
                          <span className="text-green-600">{pattern.positive}% positive</span>
                          <span className="text-red-600">{pattern.negative}% negative</span>
                        </div>
                      </div>
                      <div className="flex w-full h-3 rounded-full overflow-hidden">
                        <div className="bg-green-500" style={{ width: `${pattern.positive}%` }} />
                        <div className="bg-red-500" style={{ width: `${pattern.negative}%` }} />
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Top Keywords</p>
                        <p className="font-medium">
                          {pattern.category === "Product Features"
                            ? "AI, automation, integration"
                            : pattern.category === "Customer Support"
                              ? "response time, helpful, knowledgeable"
                              : pattern.category === "Pricing"
                                ? "expensive, value, competitive"
                                : "intuitive, design, mobile"}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Avg. Rating</p>
                        <p className="font-medium">
                          {pattern.category === "Product Features"
                            ? "4.2/5"
                            : pattern.category === "Customer Support"
                              ? "3.8/5"
                              : pattern.category === "Pricing"
                                ? "3.2/5"
                                : "4.5/5"}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Response Rate</p>
                        <p className="font-medium">
                          {pattern.category === "Product Features"
                            ? "85%"
                            : pattern.category === "Customer Support"
                              ? "92%"
                              : pattern.category === "Pricing"
                                ? "67%"
                                : "78%"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Button size="sm" variant="outline">
                        View Detailed Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Feedback Insights</CardTitle>
                <CardDescription>Key insights from customer feedback analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        Strong Product Satisfaction
                      </span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      78% positive feedback on product features, particularly AI integration and automation
                      capabilities.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-800 dark:text-orange-200">Pricing Concerns</span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      55% negative sentiment on pricing. Consider value communication or pricing adjustments.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">UX Excellence</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      User experience feedback is trending up with 82% positive sentiment and 4.5/5 average rating.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crm" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">CRM Integration</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Integration
              </Button>
            </div>

            <div className="grid gap-4">
              {crmIntegrations.map((integration) => (
                <Card key={integration.name}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <span className="font-semibold text-lg">{integration.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{integration.name}</h3>
                          <p className="text-sm text-muted-foreground">Last sync: {integration.lastSync}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={integration.status === "connected" ? "default" : "secondary"}>
                          {integration.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          {integration.status === "connected" ? "Configure" : "Connect"}
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Synced Records</p>
                        <p className="font-medium">{integration.records.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Sync Status</p>
                        <p className="font-medium">{integration.status === "connected" ? "Active" : "Inactive"}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Data Quality</p>
                        <p className="font-medium">{integration.status === "connected" ? "98%" : "N/A"}</p>
                      </div>
                    </div>

                    {integration.status === "connected" && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Sync Progress</span>
                          <span>100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Data Synchronization</CardTitle>
                <CardDescription>Real-time sync status and data flow between systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold">2,847</div>
                      <p className="text-sm text-muted-foreground">Total Contacts</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold">1,234</div>
                      <p className="text-sm text-muted-foreground">Active Deals</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold">567</div>
                      <p className="text-sm text-muted-foreground">Companies</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold">98%</div>
                      <p className="text-sm text-muted-foreground">Data Quality</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">Contact synchronization</span>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">Deal pipeline sync</span>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">Activity tracking</span>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <span className="text-sm">Custom field mapping</span>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integration Benefits</CardTitle>
                <CardDescription>How CRM integration enhances your customer intelligence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">360° Customer View</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Combine social media interactions with CRM data for complete customer profiles.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        Automated Lead Scoring
                      </span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      AI-powered lead scoring based on social engagement and CRM activity.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                        Enhanced Analytics
                      </span>
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Cross-platform analytics combining social media and sales data for better insights.
                    </p>
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
