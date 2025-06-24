"use client"

import { motion } from "framer-motion"

const trustedCompanies = [
  "Microsoft for Startups",
  "Ndovu Wealth",
  "Agrisense Technologies",
  "Central Leadership Academy",
  "Think Green Afrika",
  "Alusive Africa",
]

export function TrustedBySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-12">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-gray-400 hover:text-gray-600 font-semibold text-lg whitespace-nowrap">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
