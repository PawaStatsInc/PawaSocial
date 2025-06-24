"use client"

import { useEffect, useState } from "react"
import { useWebSocket } from "@/components/websocket-provider"

export function useLiveData<T>(type: string, initialData?: T) {
  const [data, setData] = useState<T | undefined>(initialData)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const { subscribe } = useWebSocket()

  useEffect(() => {
    const unsubscribe = subscribe(type, (newData: T) => {
      setData(newData)
      setLastUpdated(new Date())
    })

    return unsubscribe
  }, [type, subscribe])

  return { data, lastUpdated }
}

export function useLiveMetrics() {
  return useLiveData("metrics", {
    reach: 125000,
    engagement: 8.5,
    roi: 245,
    activeCampaigns: 12,
  })
}

export function useLiveNotifications() {
  const [notifications, setNotifications] = useState<any[]>([])
  const { subscribe } = useWebSocket()

  useEffect(() => {
    const unsubscribe = subscribe("notification", (notification: any) => {
      setNotifications((prev) => [notification, ...prev].slice(0, 50)) // Keep last 50
    })

    return unsubscribe
  }, [subscribe])

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return { notifications, unreadCount, markAsRead }
}
