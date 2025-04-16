"use client"

import { Link2, Clock, Users, Brain, BarChart2, Zap, ShieldAlert, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import LazyVideo from "./LazyVideo"

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  const features = [
    { 
      icon: Link2, 
      title: "Monitor ANY Account", 
      description: "X limits you to your own analytics - Postrack lets you track competitors, influencers, and rising stars",
      color: "amber"
    },
    { 
      icon: Clock, 
      title: "Real-Time Virality Radar", 
      description: "X shows daily summaries - Postrack tracks posts every 5 minutes in the first hour to catch viral moments as they happen",
      color: "red"
    },
    { 
      icon: Brain, 
      title: "Algorithm Decoder", 
      description: "X tells you views - Postrack shows HOW posts gain traction and WHY some maintain momentum",
      color: "black"
    },
    { 
      icon: Users, 
      title: "Amplifier Network Mapping", 
      description: "X hides sharing patterns - Postrack exposes exactly which accounts and communities drive virality",
      color: "amber"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  // Features from BrooklynFeatureSection
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])


  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-white dark:bg-transparent"
      ref={sectionRef}
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 
            id="how-it-works-heading" 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            <span className="bg-blue-500 text-white px-2 py-1 rounded">Post Analytics</span> X Won't Show You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            While X shows basic numbers, Postrack reveals the hidden patterns that actually drive virality
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              variants={item}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-800 p-6 h-full transition-all duration-200 hover:shadow-md">
                <div className="bg-gray-100 dark:bg-gray-700 w-10 h-10 rounded-md flex items-center justify-center mb-4">
                  <feature.icon className={`h-5 w-5 text-${feature.color === 'black' ? 'gray-900' : `${feature.color}-500`} dark:text-${feature.color === 'black' ? 'amber' : feature.color}-400`} />
                </div>
                
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
       

        {/* Brooklyn Feature Section Integration */}
        <div className="relative bg-transparent">
          {/* Background subway-inspired texture */}
          <div className="absolute inset-0 bg-[url('/subway-texture.svg')] bg-repeat opacity-5 dark:opacity-10" aria-hidden="true"></div>
          
          <motion.div 
            className="mt-20 max-w-7xl mx-auto mb-20"
            variants={item}
          >
            <div className="relative max-w-[800px] mx-auto group hover:scale-[102%] transition-all duration-300">
              <Link href="https://app.postrack.ai/example">
                {/* Video frame effects */}
                <div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-600 rounded-md blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" 
                  aria-hidden="true"
                />
                
                <div className="relative rounded-md overflow-hidden border-4 border-black dark:border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(245,158,11,1)]">
                  <LazyVideo 
                    src="/example_page.mp4" 
                    activeIndex={0} 
                  />
                </div>
              </Link>
              
              {/* Caption for the video */}
              <div className="absolute -bottom-6 right-6 bg-black text-white dark:bg-amber-500 dark:text-black px-5 py-3 rounded-md shadow-md font-bold uppercase text-xs tracking-wider">
                Live dashboard preview
              </div>
            </div>
          </motion.div>

         
        </div>
        <div className="mt-12 flex justify-center mb-20">
          <div className="bg-gray-100 dark:bg-gray-800 py-3 px-6 max-w-md text-center rounded-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Track what X hides - automatic monitoring of the metrics that actually matter
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}