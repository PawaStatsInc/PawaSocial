"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { useRouter } from "next/router"

export function HeroSection() {
  const router = useRouter()

  const handleDemoClick = () => {
    router.push("/demo")
  }

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-white/50 backdrop-blur mb-8">
          <span className="text-blue-600 font-medium">✨ New:</span>
          <span className="ml-2">AI-powered multilingual content generation</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
          Unified Social Media
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Intelligence
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          Manage, monitor, and maximize your brand's presence across all social channels with AI-powered insights
          designed for global teams.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/signup">
            <Button size="lg" className="text-base px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-base"
            onClick={handleDemoClick}
          >
            <Play className="mr-2 h-4 w-4" />
            Try Demo
          </button>
        </div>
      </div>
    </section>
  )
}
