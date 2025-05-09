"use client"

import { Button } from "@/components/ui/button"
import { Button as MovingButton } from "@/components/ui/moving-border"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function BrooklynHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="pt-28 pb-10 text-center relative overflow-hidden bg-gray-50 dark:bg-transparent">
      <div className=" mx-auto px-6 relative">
        <motion.div 
          className="flex flex-col items-center"
          initial="hidden"
          animate="show"
          
        >
          <motion.div
            className="mb-8"
            variants={item}
          >
            <MovingButton 
              borderRadius="1rem"
              
              className=" bg-black cursor-default text-white dark:bg-black dark:text-white font-bold tracking-wide rounded-none"
            >
              <div className="flex flex-row items-center">
                <span className="text-xs font-normal">Optimized for</span>
                <Image 
                  src="/x-logo.jpg" 
                  alt="X (Twitter) Logo" 
                  width={20} 
                  height={20}
                  className=" ml-3"
                />
              </div>
            </MovingButton>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              className="scroll-m-20 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent dark:text-white"
              variants={item}
            >
              AI Copilot and Analytics for X
            </motion.h1>
            
            <p 
              className="mt-10 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-medium"
            >
             Get better at posting. Postrack helps you learn the secret formula for every successful account, and lets you post like them.
            </p>
            
            <motion.div 
              className="mt-14 flex flex-col justify-center gap-6"
              variants={item}
            >
              <Button 
                className="bg-white max-w-[200px] mx-auto text-sm h-12 dark:bg-amber-200 text-black dark:text-black border-neutral-200 dark:border-slate-800 font-bold tracking-wide"
              >
                <Link
                  href="https://app.postrack.ai"
                  aria-label="Try Postrack application"
                  className="flex items-center"
                  target="_blank"
                >
                  Start posting now
                 {/*  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                 
                </Link>
              </Button>
              
              <div className="bg-white max-w-[400px] mx-auto text-black  rounded-lg p-4 shadow-md transition-all duration-300 border border-gray-200 dark:border-amber-400 dark:bg-amber-50 flex flex-col  items-center justify-between gap-3">
                <div className="flex flex-col items-center">
                  <span className="font-medium text-gray-900">Take Postrack's X Improver Quiz</span>
                  <span className="text-xs text-gray-600">Discover how to improve your X strategy in just 60 seconds</span>
                </div>
                <Button 
                  className="bg-amber-200 hover:bg-amber-300 text-black font-medium px-4 py-2 rounded-md"
                  data-tally-open="wAaO50" 
                  data-tally-emoji-text="👋" 
                  data-tally-emoji-animation="wave"
                >
                  Take Quiz
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}