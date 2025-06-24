"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Check, Star, Zap, Users, Building, Crown } from "lucide-react"
import { useState } from "react"
import Head from "next/head"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams and growing businesses",
    icon: Zap,
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Up to 5 social accounts",
      "Schedule unlimited posts",
      "Basic analytics",
      "AI content suggestions",
      "Email support",
      "1 team member",
    ],
    limitations: ["Limited to 5 social accounts", "Basic reporting only", "Email support only"],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "Ideal for marketing teams and agencies",
    icon: Users,
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      "Up to 25 social accounts",
      "Advanced analytics & reporting",
      "AI content generation (20+ languages)",
      "Unified social inbox",
      "Team collaboration tools",
      "Priority support",
      "Up to 5 team members",
      "Custom branding",
    ],
    limitations: [],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Business",
    description: "For large teams and growing enterprises",
    icon: Building,
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      "Up to 100 social accounts",
      "Advanced AI insights",
      "Campaign management",
      "Media monitoring",
      "Custom integrations",
      "Dedicated account manager",
      "Up to 25 team members",
      "White-label options",
      "API access",
    ],
    limitations: [],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    icon: Crown,
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited social accounts",
      "Custom AI training",
      "Advanced security & compliance",
      "Dedicated infrastructure",
      "24/7 phone support",
      "Unlimited team members",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment options",
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales",
  },
]

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
  },
  {
    question: "What happens during the free trial?",
    answer:
      "You get full access to all Professional plan features for 14 days. No credit card required. You can cancel anytime during the trial.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment in full.",
  },
  {
    question: "Can I add more team members?",
    answer:
      "Yes, you can add team members at any time. Additional seats are charged at a prorated rate based on your current plan.",
  },
  {
    question: "What social platforms do you support?",
    answer:
      "We support all major platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, YouTube, and more. New platforms are added regularly.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No, there are no setup fees or hidden costs. You only pay the monthly or yearly subscription fee for your chosen plan.",
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <>
      <Head>
        <title>Pricing - PawaSocial | Flexible Plans for Every Team Size</title>
        <meta
          name="description"
          content="Choose the perfect PawaSocial plan for your team. From startups to enterprises, we have flexible pricing options with powerful social media management features."
        />
        <meta
          name="keywords"
          content="social media pricing, social media management cost, enterprise social media tools, team collaboration pricing"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Badge variant="secondary" className="mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  14-Day Free Trial
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                  Simple, Transparent
                  <span className="text-blue-600"> Pricing</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                  Choose the perfect plan for your team. Start with a free trial, scale as you grow, and only pay for
                  what you need.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                  <span className={`text-sm ${!isYearly ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                    Monthly
                  </span>
                  <Switch
                    checked={isYearly}
                    onCheckedChange={setIsYearly}
                    className="data-[state=checked]:bg-blue-600"
                  />
                  <span className={`text-sm ${isYearly ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                    Yearly
                  </span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Save 20%
                  </Badge>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Most Popular</Badge>
                      </div>
                    )}

                    <Card
                      className={`h-full ${plan.popular ? "ring-2 ring-blue-600 shadow-lg" : "hover:shadow-lg"} transition-all duration-300`}
                    >
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <plan.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <CardDescription className="text-base">{plan.description}</CardDescription>

                        <div className="py-6">
                          {plan.monthlyPrice ? (
                            <div className="text-center">
                              <span className="text-4xl font-bold text-slate-900">
                                ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                              </span>
                              <span className="text-slate-500 ml-2">/month</span>
                              {isYearly && (
                                <div className="text-sm text-green-600 mt-1">
                                  Billed annually (${plan.yearlyPrice}/year)
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-center">
                              <span className="text-2xl font-bold text-slate-900">Custom</span>
                              <div className="text-sm text-slate-500 mt-1">Contact for pricing</div>
                            </div>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <ul className="space-y-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6">
                          {plan.cta === "Contact Sales" ? (
                            <Link href="/contact">
                              <Button className="w-full" variant="outline">
                                {plan.cta}
                              </Button>
                            </Link>
                          ) : (
                            <Link href="/signup">
                              <Button
                                className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}`}
                                variant={plan.popular ? "default" : "outline"}
                              >
                                {plan.cta}
                              </Button>
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-slate-600">Everything you need to know about our pricing and plans</p>
              </motion.div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                        <p className="text-slate-600">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-blue-100 mb-8">Start your free trial today. No credit card required.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      Try Demo
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
