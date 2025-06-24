export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  company?: string
  role?: string
  teamSize?: string
  isDemo?: boolean
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, userData: any) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInDemo: () => Promise<void>
  signOut: () => Promise<void>
}
