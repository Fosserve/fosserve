'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import background1 from "../../public/text-background/background1.png"
import bgImage from "../../public/images/bg-cover.png"


export default function BlogSection() {
  return (
    <section className="container flex flex-col mx-auto px-6 md:px-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center  mx-auto space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Connect:{' '}
          <span className="bg-clip-text text-transparent"
         style={{
            backgroundImage: `url(${background1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
>  
Empowering Students 
        </span>  and Faculty
        </h1>
        <p className="text-lg md:text-xl max-w-5xl text-white/70 text-muted-foreground leading-relaxed">
          Experience the power of connectivity and collaboration by empowering educators to create an interactive and engaging learning experience, ensuring student success and academic growth through our state-of-the-art student and faculty mobile applications for your institution.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
          className="bg-[#2258ce] hover:bg-[#65acf5] text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Know More
        </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-16 md:mt-24 relative max-w-5xl mx-auto"
      >
        <div className="relative flex justify-center items-end gap-4 md:gap-8">
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative w-[100%] md:w-[700px] h-96 md:h-[600px] -rotate-6 transform"
          >
            <Image
              src={bgImage.src}
              alt="Campus Connect Schedule Interface"
              fill
              className="object-cover rounded-3xl shadow-2xl"
              priority
            />
          </motion.div>
          {/* <motion.div
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative w-48 md:w-72 h-96 md:h-[600px] rotate-6 transform"
          >
            <Image
              src="/placeholder.svg?height=600&width=300"
              alt="Campus Connect Dashboard"
              fill
              className="object-cover rounded-3xl shadow-2xl"
              priority
            />
          </motion.div> */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </motion.div>
    </section>
  )
}

