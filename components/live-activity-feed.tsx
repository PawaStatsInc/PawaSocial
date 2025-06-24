"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLiveData } from "@/hooks/use-live-data"
import { MessageCircle, Heart, Share, UserPlus } from "lucide-react"

export function LiveActivityFeed() {
  const { data: activities } = useLiveData("activity", [
    {
      id: "1",
      type: "mention",
      platform: "twitter",
      user: "john_doe",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "Great product! Love the new features.",
      timestamp: Date.now() - 300000,
      engagement: { likes: 12, shares: 3, comments: 5 },
    },
    {
      id: "2",
      type: "follower",
      platform: "instagram",
      user: "sarah_smith",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "New follower from Instagram",
      timestamp: Date.now() - 600000,
      engagement: { followers: 1 },
    },
  ])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "mention":
        return <MessageCircle className="h-4 w-4" />
      case "like":
        return <Heart className="h-4 w-4" />
      case "share":
        return <Share className="h-4 w-4" />
      case "follower":
        return <UserPlus className="h-4 w-4" />
      default:
        return <MessageCircle className="h-4 w-4" />
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "twitter":
        return "bg-blue-500"
      case "instagram":
        return "bg-pink-500"
      case "facebook":
        return "bg-blue-600"
      case "linkedin":
        return "bg-blue-700"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Live Activity Feed
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {activities?.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg border">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                  <AvatarFallback>{activity.user[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">@{activity.user}</span>
                    <Badge variant="secondary" className={`text-white ${getPlatformColor(activity.platform)}`}>
                      {activity.platform}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(activity.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.content}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {activity.engagement.likes && (
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {activity.engagement.likes}
                      </div>
                    )}
                    {activity.engagement.shares && (
                      <div className="flex items-center gap-1">
                        <Share className="h-3 w-3" />
                        {activity.engagement.shares}
                      </div>
                    )}
                    {activity.engagement.comments && (
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {activity.engagement.comments}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-muted-foreground">{getActivityIcon(activity.type)}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
