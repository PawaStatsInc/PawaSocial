"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "@/types/auth"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, userData: any) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInDemo: () => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token")
        if (token) {
          // Validate token and get user data
          // This would typically be an API call
          const userData = JSON.parse(localStorage.getItem("user_data") || "null")
          setUser(userData)
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // This would be replaced with actual API call
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error("Invalid credentials")
      }

      const { user, token } = await response.json()
      localStorage.setItem("auth_token", token)
      localStorage.setItem("user_data", JSON.stringify(user))
      setUser(user)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (email: string, password: string, userData: any) => {
    setIsLoading(true)
    try {
      // This would be replaced with actual API call
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, ...userData }),
      })

      if (!response.ok) {
        throw new Error("Signup failed")
      }

      const { user, token } = await response.json()
      localStorage.setItem("auth_token", token)
      localStorage.setItem("user_data", JSON.stringify(user))
      setUser(user)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    setIsLoading(true)
    try {
      // This would integrate with Google OAuth
      // For demo purposes, we'll simulate success
      const demoUser = {
        id: "google_user",
        email: "user@gmail.com",
        firstName: "John",
        lastName: "Doe",
        avatar: "/placeholder.svg?height=40&width=40",
      }

      localStorage.setItem("auth_token", "google_token")
      localStorage.setItem("user_data", JSON.stringify(demoUser))
      setUser(demoUser)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signInDemo = async () => {
    setIsLoading(true)
    try {
      const demoUser = {
        id: "demo_user",
        email: "demo@pawasocial.com",
        firstName: "Demo",
        lastName: "User",
        avatar: "/placeholder.svg?height=40&width=40",
        isDemo: true,
        company: "Demo Company",
        plan: "Enterprise Demo",
      }

      localStorage.setItem("auth_token", "demo_token")
      localStorage.setItem("user_data", JSON.stringify(demoUser))
      setUser(demoUser)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    setIsLoading(true)
    try {
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user_data")
      setUser(null)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signUp,
        signInWithGoogle,
        signInDemo,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
