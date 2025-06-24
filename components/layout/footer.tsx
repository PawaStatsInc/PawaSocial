import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600" />
              <span className="text-xl font-bold">PawaSocial</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered social media management platform for global teams.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2 text-sm">
              <Link href="/pricing" className="block text-muted-foreground hover:text-primary">
                Pricing
              </Link>
              <Link href="/demo" className="block text-muted-foreground hover:text-primary">
                Demo
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary">
                About Us
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="block text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/security" className="block text-muted-foreground hover:text-primary">
                Security
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:pawastatsinc@gmail.com" className="hover:text-primary">
                  pawastatsinc@gmail.com
                </a>
              </div>
              <div className="flex space-x-3">
                <Link
                  href="https://linkedin.com/company/pawastats"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/pawastats" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 PawaSocial by PawaStats Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
