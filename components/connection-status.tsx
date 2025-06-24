"use client"

import { useWebSocket } from "./websocket-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wifi, WifiOff, RotateCcw } from "lucide-react"

export function ConnectionStatus() {
  const { status, connect } = useWebSocket()

  const getStatusConfig = () => {
    switch (status) {
      case "connected":
        return {
          variant: "default" as const,
          icon: <Wifi className="h-3 w-3" />,
          text: "Connected",
          color: "text-green-600",
        }
      case "connecting":
        return {
          variant: "secondary" as const,
          icon: <div className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />,
          text: "Connecting",
          color: "text-yellow-600",
        }
      case "disconnected":
        return {
          variant: "outline" as const,
          icon: <WifiOff className="h-3 w-3" />,
          text: "Disconnected",
          color: "text-gray-600",
        }
      case "error":
        return {
          variant: "destructive" as const,
          icon: <WifiOff className="h-3 w-3" />,
          text: "Error",
          color: "text-red-600",
        }
    }
  }

  const config = getStatusConfig()

  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <Badge variant={config.variant} className="flex items-center gap-1">
        {config.icon}
        <span className="text-xs">{config.text}</span>
      </Badge>
      {(status === "disconnected" || status === "error") && (
        <Button variant="ghost" size="sm" onClick={connect} className="h-6 w-6 p-0">
          <RotateCcw className="h-3 w-3" />
        </Button>
      )}
    </div>
  )
}
