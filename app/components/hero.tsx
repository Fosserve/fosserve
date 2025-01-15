'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Campus Connect: 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Empowering Students and Faculty
            </span>
          </motion.h1>
          
          <motion.p
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the power of connectivity and collaboration by empowering educators to create an interactive and engaging learning experience, ensuring student success and academic growth through our state-of-the-art student and faculty mobile applications for your institution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Know more
            </button>
          </motion.div>
        </motion.div>

        {/* Phone mockups */}
        <motion.div 
          className="relative mt-16 md:mt-24"
          style={{ opacity }}
        >
          <motion.div
            className="absolute left-1/2 transform -translate-x-[60%] -translate-y-1/2"
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 0.8, duration: 1, type: "spring" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20154507-siL9BZls76SJvXiGLxMdAuW6u09ScK.png"
              alt="Schedule Interface"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            className="absolute left-1/2 transform -translate-x-[40%] -translate-y-1/2"
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 200 }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20154507-siL9BZls76SJvXiGLxMdAuW6u09ScK.png"
              alt="Dashboard Interface"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-1 rounded-full bg-gray-400"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

