"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, Target, DollarSign, Zap } from "lucide-react"
import { useLiveMetrics } from "@/hooks/use-live-data"

export function LiveMetricsWidget() {
  const { data: metrics, lastUpdated } = useLiveMetrics()

  if (!metrics) return null

  const metricsConfig = [
    {
      title: "Total Reach",
      value: metrics.reach.toLocaleString(),
      icon: Users,
      trend: "+12.5%",
      trendUp: true,
    },
    {
      title: "Engagement Rate",
      value: `${metrics.engagement}%`,
      icon: Zap,
      trend: "+2.1%",
      trendUp: true,
    },
    {
      title: "ROI",
      value: `${metrics.roi}%`,
      icon: DollarSign,
      trend: "+15.3%",
      trendUp: true,
    },
    {
      title: "Active Campaigns",
      value: metrics.activeCampaigns.toString(),
      icon: Target,
      trend: "+3",
      trendUp: true,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metricsConfig.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="relative">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Badge variant={metric.trendUp ? "default" : "destructive"} className="flex items-center gap-1">
                  {metric.trendUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {metric.trend}
                </Badge>
                <span>from last hour</span>
              </div>
              {lastUpdated && (
                <div className="absolute top-2 right-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
