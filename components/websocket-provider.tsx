"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { getWebSocketManager, type ConnectionStatus } from "@/lib/websocket"

interface WebSocketContextType {
  status: ConnectionStatus
  connect: () => void
  disconnect: () => void
  subscribe: (type: string, callback: (data: any) => void) => () => void
}

const WebSocketContext = createContext<WebSocketContextType | null>(null)

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<ConnectionStatus>("disconnected")
  const wsManager = getWebSocketManager()

  useEffect(() => {
    const unsubscribe = wsManager.onStatusChange(setStatus)

    // Auto-connect on mount
    wsManager.connect()

    return () => {
      unsubscribe()
      wsManager.disconnect()
    }
  }, [wsManager])

  const contextValue: WebSocketContextType = {
    status,
    connect: () => wsManager.connect(),
    disconnect: () => wsManager.disconnect(),
    subscribe: (type: string, callback: (data: any) => void) => wsManager.subscribe(type, callback),
  }

  return <WebSocketContext.Provider value={contextValue}>{children}</WebSocketContext.Provider>
}

export function useWebSocket() {
  const context = useContext(WebSocketContext)
  if (!context) {
    throw new Error("useWebSocket must be used within a WebSocketProvider")
  }
  return context
}
