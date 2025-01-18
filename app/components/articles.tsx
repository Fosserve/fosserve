'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import background from "../../public/images/bg-cover.png"
import background1 from "../../public/text-background/background1.png"

const articles = [
  {
    title: "Annamacharya Institutions Digital Transformation Journey with CampX",
    date: "November 27, 2024",
    image: background,
    link: "#",
    logo: true
  },
  {
    title: "Anurag University: A Digital Transformation Journey with CampX",
    date: "November 27, 2024",
    image: background,
    link: "#",
    logo: true
  },
  {
    title: "How India Could Become a Vishwaguru – Global Leader in the Higher Education Sector",
    date: "March 2, 2024",
    image: background,
    link: "#",
    logo: false
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-transparent bg-clip-text" style={{
            backgroundImage: `url(${background1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            Stay Informed, Stay Ahead
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Explore insightful articles, expert perspectives, and industry trends on campus management, technology integration, student engagement, and more. Stay updated with the latest advancements and make informed decisions for your institution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ArticleCard {...article} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ArticleCard({ 
  title, 
  date, 
  image, 
  link, 
  logo 
}: {
  title: string
  date: string
  image: string
  link: string
  logo: boolean
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl overflow-hidden transition-all duration-300 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600"
    >
      <div className={`relative h-64 ${logo ? 'bg-[#304FFE]' : ''}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-gray-100">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">
            {date}
          </span>
          <motion.a
            href={link}
            whileHover={{ x: 5 }}
            className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 group flex items-center gap-1"
          >
            Read More 
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

