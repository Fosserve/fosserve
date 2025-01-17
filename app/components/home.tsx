'use client'

import { motion } from "framer-motion"
import background from "../../public/text-background/background.png"
import background1 from "../../public/text-background/background1.png"


export default function Hero() {
  return (
    <div className="flex justify-center align-center">
    <motion.div 
      className=" mx-auto text-center  space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="text-white/90">Revolutionizing </span>
        <span className="bg-clip-text text-transparent"
         style={{
            backgroundImage: `url(${background1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
>  
        Education 
        </span>
        <span className="text-white/90"> with FOSServe</span>
      </motion.h1>
      
      <motion.p 
        className="max-w-6xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
FOSServe is a flagship initiative by FOSS Andhra Foundation, aiming to digitalize educational institutions through cutting-edge free and open-source solutions.
</motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button 
          className="bg-[#2258ce] hover:bg-[#65acf5] text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Get a Demo
        </button>
      </motion.div>
    </motion.div>
    </div>
  )
}

