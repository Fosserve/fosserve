'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const features = [
    {
        title: "FOSS Campus Manage",
        description:
          "Transform college administration with streamlined and automated processes for maximum efficiency.",
        gradient: "from-blue-500",
      },
      {
        title: "FOSS Admission CRM",
        description:
          "Digitize the college admissions process with advanced features and a seamless experience.",
        gradient: "from-orange-400",
      },
      {
        title: "FOSSFee",
        description:
          "Revolutionize fee collection with online payments, automated reminders, and financial transparency.",
        gradient: "from-green-400",
      },
      {
        title: "FOSS Exam Management",
        description:
          "Simplify exam management with enhanced security and efficient result processing.",
        gradient: "from-teal-400",
      },
      {
        title: "FOSSHR",
        description:
          "Streamline HR processes and boost productivity with advanced technology.",
        gradient: "from-red-500",
      },
      {
        title: "FOSS Hostel Management",
        description:
          "Ensure a well-organized hostel environment and enhance student living experiences.",
        gradient: "from-purple-400",
      },
      {
        title: "FOSS LMS",
        description:
          "Empower academic institutions with innovative tools for exceptional learning experiences.",
        gradient: "from-yellow-400",
      },
      {
        title: "FOSS Transport",
        description:
          "Enhance college transportation with real-time tracking and efficient route planning.",
        gradient: "from-green-500",
      },
]

export default function FeaturesEaxmple() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="min-h-screen bg-black py-24"
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-green-600 sm:text-5xl mb-4"
          >
            Comprehensive Modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80 max-w-3xl mx-auto"
          >
            Our suite of FOSS solutions is designed to revolutionize every aspect of educational institution management.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-90`} />
              <div className="relative p-8 text-white">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
                <button 
                  className="mt-4 px-3 py-2 rounded border border-white/90 text-white border-white hover:bg-white/10"
                >
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

