"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Brain,
  Target,
  Users,
  Globe,
  Zap,
  TrendingUp,
  Shield,
  Heart,
  Award,
  Building,
  Rocket,
} from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
                  About PawaStats
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Empowering African
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Businesses
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8 leading-relaxed">
                PawaStats exists to empower African startups, medium & large businesses with AI-driven data analytics
                that optimize decision-making, improve operational efficiency, and drive sustainable growth. We are here
                to transform raw data into actionable insights that level the playing field for businesses in emerging
                markets.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/signup">Get Started Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/demo">Try PawaSocial Demo</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">What Do We Do?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We develop AI and data solutions across various industries to empower large & medium enterprises,
                  Startups, Small & Micro Businesses. Our flagship product, PawaSocial, is a comprehensive platform that
                  integrates three key areas of intelligence: social, media & customer.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-2 hover:border-blue-200 transition-colors">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Social Intelligence</h3>
                      <p className="text-gray-600">
                        Monitor brand mentions, analyze sentiment, track competitor activity, and engage with your
                        audience across all social platforms.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-2 hover:border-purple-200 transition-colors">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BarChart3 className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Media Intelligence</h3>
                      <p className="text-gray-600">
                        Track media coverage, analyze PR impact, monitor news mentions, and measure your brand's media
                        presence across traditional and digital channels.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-2 hover:border-green-200 transition-colors">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Brain className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Customer Intelligence</h3>
                      <p className="text-gray-600">
                        Understand customer behavior, predict trends, segment audiences, and personalize experiences
                        with AI-powered customer insights.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                  <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We believe that every business, regardless of size or location, deserves access to world-class data
                    analytics and AI-powered insights. Our mission is to democratize data intelligence for African
                    businesses and emerging markets worldwide.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Optimize Decision-Making</h4>
                        <p className="text-gray-600">Transform complex data into clear, actionable insights</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Improve Operational Efficiency</h4>
                        <p className="text-gray-600">Streamline processes with AI-powered automation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Drive Sustainable Growth</h4>
                        <p className="text-gray-600">Build long-term success with data-driven strategies</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">500+</div>
                        <div className="text-blue-100">Businesses Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">15+</div>
                        <div className="text-blue-100">Countries</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">1M+</div>
                        <div className="text-blue-100">Data Points Analyzed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">99.9%</div>
                        <div className="text-blue-100">Uptime</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Who We Serve</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From startups to enterprises, we provide tailored solutions for businesses at every stage of their
                  growth journey.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div variants={fadeInUp}>
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Startups</h3>
                    <p className="text-sm text-gray-600">Get enterprise-level insights without enterprise costs</p>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <Building className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">SMEs</h3>
                    <p className="text-sm text-gray-600">Scale your operations with data-driven decision making</p>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Enterprises</h3>
                    <p className="text-sm text-gray-600">Advanced analytics for complex business challenges</p>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">NGOs</h3>
                    <p className="text-sm text-gray-600">Measure impact and optimize outreach programs</p>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Our Values</h2>
                <p className="text-xl text-gray-600">The principles that guide everything we do</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Trust & Security</h3>
                  <p className="text-gray-600">
                    Your data is protected with enterprise-grade security and complete transparency
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for the highest quality in everything we deliver to our clients
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Accessibility</h3>
                  <p className="text-gray-600">
                    Making advanced analytics accessible to businesses of all sizes and budgets
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of African businesses already using PawaSocial to drive growth and make smarter decisions
                with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">Start Your Free Trial</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-blue-600"
                  asChild
                >
                  <Link href="/demo">Try Demo</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
