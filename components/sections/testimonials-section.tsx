"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Kimani",
    role: "Marketing Director",
    company: "TechStart Kenya",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "PawaSocial transformed how we manage our social presence across Africa. The multilingual AI is incredible - it understands our local context perfectly.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "Social Media Manager",
    company: "GrowthCorp Nigeria",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The unified inbox saved us hours every day. Managing conversations across 6 platforms from one place is a game-changer for our team.",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    role: "CEO",
    company: "Digital Solutions Tanzania",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Finally, a social media tool that gets the African market. The insights and analytics help us make data-driven decisions that actually work here.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Loved by Teams Worldwide</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">See what our customers are saying about PawaSocial</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-6">"{testimonial.content}"</blockquote>
                  <div className="flex items-center">
                    <Avatar className="mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
