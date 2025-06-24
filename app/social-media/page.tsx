"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  MessageSquare,
  Send,
  CalendarIcon,
  ImageIcon,
  Video,
  FileText,
  Heart,
  Share2,
  MessageCircle,
  Filter,
  Search,
  Plus,
  Clock,
  Bot,
  Zap,
  ArrowLeft,
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import Link from "next/link"

const inboxMessages = [
  {
    id: 1,
    platform: "Instagram",
    type: "comment",
    user: "sarah_johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Love this new product! When will it be available in stores?",
    time: "2 hours ago",
    sentiment: "positive",
    priority: "high",
    status: "unread",
  },
  {
    id: 2,
    platform: "LinkedIn",
    type: "message",
    user: "Mike Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Interested in partnership opportunities. Can we schedule a call?",
    time: "4 hours ago",
    sentiment: "neutral",
    priority: "high",
    status: "unread",
  },
  {
    id: 3,
    platform: "Twitter",
    type: "mention",
    user: "@techreview",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Great review of @yourcompany's latest feature update!",
    time: "6 hours ago",
    sentiment: "positive",
    priority: "medium",
    status: "read",
  },
  {
    id: 4,
    platform: "Facebook",
    type: "comment",
    user: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Having issues with the mobile app. Can someone help?",
    time: "8 hours ago",
    sentiment: "negative",
    priority: "high",
    status: "unread",
  },
]

const scheduledPosts = [
  {
    id: 1,
    platform: "Instagram",
    content: "Excited to announce our new product line! 🚀 #innovation #tech",
    scheduledTime: "Today, 2:00 PM",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
  {
    id: 2,
    platform: "LinkedIn",
    content: "5 tips for improving your social media strategy in 2024",
    scheduledTime: "Tomorrow, 9:00 AM",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
  {
    id: 3,
    platform: "Twitter",
    content: "Just published our Q4 results. Thank you to our amazing team! 💪",
    scheduledTime: "Dec 28, 3:00 PM",
    status: "published",
    engagement: { likes: 245, comments: 32, shares: 89 },
  },
]

const contentLibrary = [
  {
    id: 1,
    type: "image",
    name: "product-hero.jpg",
    size: "2.4 MB",
    tags: ["product", "hero", "marketing"],
    lastUsed: "2 days ago",
  },
  {
    id: 2,
    type: "video",
    name: "team-intro.mp4",
    size: "15.2 MB",
    tags: ["team", "introduction", "culture"],
    lastUsed: "1 week ago",
  },
  {
    id: 3,
    type: "template",
    name: "Holiday Campaign Template",
    size: "Text",
    tags: ["holiday", "campaign", "template"],
    lastUsed: "3 days ago",
  },
]

export default function SocialMediaPage() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [newPostContent, setNewPostContent] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [aiLanguage, setAiLanguage] = useState("english")

  const generateAICaption = () => {
    const suggestions = {
      english:
        "🚀 Exciting news! We're launching something amazing that will transform how you work. Stay tuned for the big reveal! #innovation #productivity #tech",
      swahili:
        "🚀 Habari za kushangaza! Tunazindua kitu cha ajabu kitakachobadilisha jinsi unavyofanya kazi. Subiri ufunuo mkuu! #uvumbuzi #uzalishaji #teknolojia",
      arabic:
        "🚀 أخبار مثيرة! نحن نطلق شيئًا مذهلاً سيغير طريقة عملك. ترقبوا الكشف الكبير! #الابتكار #الإنتاجية #التكنولوجيا",
      french:
        "🚀 Nouvelles passionnantes ! Nous lançons quelque chose d'incroyable qui transformera votre façon de travailler. Restez à l'écoute pour la grande révélation ! #innovation #productivité #tech",
    }
    setNewPostContent(suggestions[aiLanguage as keyof typeof suggestions])
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Social Media Management</h1>
              <p className="text-muted-foreground mt-2">
                Manage all your social media accounts from one unified dashboard
              </p>
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
        </div>

        <Tabs defaultValue="inbox" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="inbox">Unified Inbox</TabsTrigger>
            <TabsTrigger value="compose">Compose & Schedule</TabsTrigger>
            <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
            <TabsTrigger value="library">Content Library</TabsTrigger>
            <TabsTrigger value="analytics">Post Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="inbox" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Unified Inbox</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search messages..." className="pl-8 w-64" />
                </div>
                <Select>
                  <SelectTrigger className="w-32">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="unread">Unread</SelectItem>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="positive">Positive</SelectItem>
                    <SelectItem value="negative">Negative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4">
              {inboxMessages.map((message) => (
                <Card
                  key={message.id}
                  className={cn(
                    "cursor-pointer transition-colors hover:bg-muted/50",
                    message.status === "unread" && "border-l-4 border-l-blue-500",
                  )}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <img
                          src={message.avatar || "/placeholder.svg"}
                          alt={message.user}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{message.user}</span>
                            <Badge variant="outline" className="text-xs">
                              {message.platform}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {message.type}
                            </Badge>
                            <Badge
                              variant={
                                message.sentiment === "positive"
                                  ? "default"
                                  : message.sentiment === "negative"
                                    ? "destructive"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {message.sentiment}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{message.content}</p>
                          <div className="flex items-center gap-4">
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Reply
                            </Button>
                            <Button size="sm" variant="outline">
                              <Heart className="h-4 w-4 mr-1" />
                              Like
                            </Button>
                            <Button size="sm" variant="outline">
                              <Share2 className="h-4 w-4 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-2">{message.time}</p>
                        <Badge variant={message.priority === "high" ? "destructive" : "secondary"} className="text-xs">
                          {message.priority}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="compose" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Compose & Schedule</h2>
              <Button onClick={generateAICaption}>
                <Bot className="h-4 w-4 mr-2" />
                AI Caption Generator
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Create New Post</CardTitle>
                <CardDescription>Compose and schedule posts across multiple platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="platforms">Select Platforms</Label>
                  <div className="flex gap-2">
                    {["Instagram", "LinkedIn", "Twitter", "Facebook"].map((platform) => (
                      <Button
                        key={platform}
                        variant={selectedPlatforms.includes(platform) ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                          setSelectedPlatforms((prev) =>
                            prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform],
                          )
                        }}
                      >
                        {platform}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Post Content</Label>
                  <Textarea
                    id="content"
                    placeholder="What's on your mind?"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="min-h-32"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{newPostContent.length}/280 characters</span>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="ai-language">AI Language:</Label>
                      <Select value={aiLanguage} onValueChange={setAiLanguage}>
                        <SelectTrigger className="w-32">
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
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Add Image
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4 mr-2" />
                    Add Video
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Add Document
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {selectedDate ? format(selectedDate, "PPP") : "Schedule for later"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Save Draft</Button>
                    <Button>
                      {selectedDate ? "Schedule Post" : "Post Now"}
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scheduled Posts</CardTitle>
                <CardDescription>Manage your upcoming and published posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{post.platform}</Badge>
                          <Badge variant={post.status === "scheduled" ? "secondary" : "default"}>{post.status}</Badge>
                        </div>
                        <p className="text-sm mb-2">{post.content}</p>
                        <p className="text-xs text-muted-foreground">{post.scheduledTime}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        {post.status === "published" && (
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {post.engagement.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              {post.engagement.comments}
                            </span>
                            <span className="flex items-center gap-1">
                              <Share2 className="h-4 w-4" />
                              {post.engagement.shares}
                            </span>
                          </div>
                        )}
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Content Calendar</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>December 2024</CardTitle>
                <CardDescription>Drag and drop to reschedule posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 text-center font-medium text-sm">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 6 + 1
                    const isCurrentMonth = day > 0 && day <= 31
                    const hasPost = [15, 18, 22, 25, 28].includes(day)

                    return (
                      <div
                        key={i}
                        className={cn(
                          "min-h-24 p-2 border rounded-lg",
                          isCurrentMonth ? "bg-background" : "bg-muted/50",
                          hasPost && "border-blue-500 bg-blue-50 dark:bg-blue-950",
                        )}
                      >
                        {isCurrentMonth && (
                          <>
                            <div className="text-sm font-medium mb-1">{day}</div>
                            {hasPost && (
                              <div className="space-y-1">
                                <div className="text-xs p-1 bg-blue-100 dark:bg-blue-900 rounded">Instagram Post</div>
                                {day === 22 && (
                                  <div className="text-xs p-1 bg-green-100 dark:bg-green-900 rounded">
                                    LinkedIn Article
                                  </div>
                                )}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="library" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Content Library</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Upload Content
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {contentLibrary.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      {item.type === "image" && <ImageIcon className="h-8 w-8 text-blue-500" />}
                      {item.type === "video" && <Video className="h-8 w-8 text-green-500" />}
                      {item.type === "template" && <FileText className="h-8 w-8 text-purple-500" />}
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.size}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Last used: {item.lastUsed}</span>
                      <Button size="sm" variant="outline">
                        Use
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Post Analytics</h2>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Last 30 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8%</div>
                  <p className="text-xs text-muted-foreground">+0.3% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Best Performing</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Instagram</div>
                  <p className="text-xs text-muted-foreground">6.2% engagement rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Response Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4h</div>
                  <p className="text-xs text-muted-foreground">-0.5h from last month</p>
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
                  {[
                    {
                      platform: "Instagram",
                      content: "Behind the scenes of our product development",
                      engagement: 1250,
                      reach: 15600,
                    },
                    {
                      platform: "LinkedIn",
                      content: "5 lessons learned from scaling our startup",
                      engagement: 890,
                      reach: 12400,
                    },
                    {
                      platform: "Twitter",
                      content: "Excited to announce our Series A funding! 🎉",
                      engagement: 2100,
                      reach: 28900,
                    },
                  ].map((post, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{post.platform}</Badge>
                          <Badge variant="default">Top Performer</Badge>
                        </div>
                        <p className="text-sm mb-2">{post.content}</p>
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
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
