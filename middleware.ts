import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth")
    const isOnboardingPage = req.nextUrl.pathname.startsWith("/onboarding")
    const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard")
    const isApiRoute = req.nextUrl.pathname.startsWith("/api")
    const isPublicPage = ["/", "/about", "/pricing"].includes(req.nextUrl.pathname)

    // Allow public pages and API routes
    if (isPublicPage || isApiRoute) {
      return NextResponse.next()
    }

    // Redirect to signin if not authenticated and trying to access protected routes
    if (!isAuth && !isAuthPage) {
      return NextResponse.redirect(new URL("/auth/signin", req.url))
    }

    // Redirect authenticated users away from auth pages
    if (isAuth && isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    // Handle onboarding flow for non-demo users
    if (isAuth && token) {
      const isDemo = token.isDemo as boolean
      const onboardingCompleted = token.onboardingCompleted as boolean

      // Demo users bypass onboarding
      if (isDemo) {
        if (isOnboardingPage) {
          return NextResponse.redirect(new URL("/dashboard", req.url))
        }
        return NextResponse.next()
      }

      // Regular users must complete onboarding before accessing dashboard
      if (!onboardingCompleted && isDashboardPage) {
        return NextResponse.redirect(new URL("/onboarding/connect", req.url))
      }

      // Redirect completed users away from onboarding
      if (onboardingCompleted && isOnboardingPage) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to public routes without authentication
        const isPublicRoute = ["/", "/about", "/pricing"].includes(req.nextUrl.pathname)
        const isAuthRoute = req.nextUrl.pathname.startsWith("/auth")
        const isApiRoute = req.nextUrl.pathname.startsWith("/api")

        if (isPublicRoute || isAuthRoute || isApiRoute) {
          return true
        }

        // Require authentication for all other routes
        return !!token
      },
    },
  },
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
}
