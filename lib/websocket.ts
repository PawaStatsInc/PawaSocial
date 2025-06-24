export type WebSocketMessage = {
  type: "metrics" | "notification" | "activity" | "chart_update" | "heartbeat"
  data: any
  timestamp: number
}

export type ConnectionStatus = "connecting" | "connected" | "disconnected" | "error"

export class WebSocketManager {
  private ws: WebSocket | null = null
  private url: string
  private reconnectAttempts = 0
  private maxReconnectAttempts = 5
  private reconnectDelay = 1000
  private heartbeatInterval: NodeJS.Timeout | null = null
  private listeners: Map<string, Set<(data: any) => void>> = new Map()
  private statusListeners: Set<(status: ConnectionStatus) => void> = new Set()
  private status: ConnectionStatus = "disconnected"

  constructor(url: string) {
    this.url = url
  }

  connect() {
    if (this.ws?.readyState === WebSocket.OPEN) return

    this.setStatus("connecting")

    try {
      this.ws = new WebSocket(this.url)

      this.ws.onopen = () => {
        this.setStatus("connected")
        this.reconnectAttempts = 0
        this.startHeartbeat()
      }

      this.ws.onmessage = (event) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data)
          this.handleMessage(message)
        } catch (error) {
          console.error("Failed to parse WebSocket message:", error)
        }
      }

      this.ws.onclose = () => {
        this.setStatus("disconnected")
        this.stopHeartbeat()
        this.scheduleReconnect()
      }

      this.ws.onerror = () => {
        this.setStatus("error")
      }
    } catch (error) {
      this.setStatus("error")
      this.scheduleReconnect()
    }
  }

  disconnect() {
    this.stopHeartbeat()
    if (this.ws) {
      this.ws.close()
      this.ws = null
    }
    this.setStatus("disconnected")
  }

  subscribe(type: string, callback: (data: any) => void) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set())
    }
    this.listeners.get(type)!.add(callback)

    return () => {
      this.listeners.get(type)?.delete(callback)
    }
  }

  onStatusChange(callback: (status: ConnectionStatus) => void) {
    this.statusListeners.add(callback)
    callback(this.status) // Call immediately with current status

    return () => {
      this.statusListeners.delete(callback)
    }
  }

  private setStatus(status: ConnectionStatus) {
    this.status = status
    this.statusListeners.forEach((callback) => callback(status))
  }

  private handleMessage(message: WebSocketMessage) {
    const listeners = this.listeners.get(message.type)
    if (listeners) {
      listeners.forEach((callback) => callback(message.data))
    }
  }

  private startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({ type: "heartbeat", timestamp: Date.now() }))
      }
    }, 30000) // Send heartbeat every 30 seconds
  }

  private stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval)
      this.heartbeatInterval = null
    }
  }

  private scheduleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts)
      setTimeout(() => {
        this.reconnectAttempts++
        this.connect()
      }, delay)
    }
  }

  getStatus(): ConnectionStatus {
    return this.status
  }
}

// Singleton instance
let wsManager: WebSocketManager | null = null

export function getWebSocketManager(): WebSocketManager {
  if (!wsManager) {
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080"
    wsManager = new WebSocketManager(wsUrl)
  }
  return wsManager
}
