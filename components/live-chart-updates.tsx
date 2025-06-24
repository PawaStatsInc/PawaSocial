"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { useLiveData } from "@/hooks/use-live-data"

export function LiveChartUpdates() {
  const { data: chartData, lastUpdated } = useLiveData("chart_update", [
    { time: "00:00", engagement: 65, reach: 120, sentiment: 75 },
    { time: "04:00", engagement: 72, reach: 135, sentiment: 78 },
    { time: "08:00", engagement: 68, reach: 128, sentiment: 72 },
    { time: "12:00", engagement: 85, reach: 165, sentiment: 82 },
    { time: "16:00", engagement: 92, reach: 180, sentiment: 85 },
    { time: "20:00", engagement: 78, reach: 145, sentiment: 80 },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Real-time Analytics
          <div className="flex items-center gap-2">
            {lastUpdated && (
              <span className="text-xs text-muted-foreground">Updated {lastUpdated.toLocaleTimeString()}</span>
            )}
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            engagement: {
              label: "Engagement",
              color: "hsl(var(--chart-1))",
            },
            reach: {
              label: "Reach",
              color: "hsl(var(--chart-2))",
            },
            sentiment: {
              label: "Sentiment",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="time" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="var(--color-engagement)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="reach"
                stroke="var(--color-reach)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="sentiment"
                stroke="var(--color-sentiment)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
