"use client"

import { Button } from "@/components/ui/button"
import { Button as MovingButton } from "@/components/ui/moving-border"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import LazyVideo from "./LazyVideo"

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
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="flex flex-col items-center"
          initial="hidden"
          animate="show"
          variants={container}
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
              Grow Your X Account with AI
            </motion.h1>
            
            <motion.p 
              className="leading-7 mt-10 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-medium"
              variants={item}
            >
              <span className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black font-bold inline-block">Get better at posting.</span> Postrack helps you learn the secret formula for every successful account, and lets you post like them.
            </motion.p>
            
            <motion.div 
              className="mt-14 flex flex-col sm:flex-row justify-center gap-6"
              variants={item}
            >
              <Button 
                
                className="bg-white text-sm h-8 dark:bg-amber-500 text-black dark:text-black border-neutral-200 dark:border-slate-800  font-bold  tracking-wide"
              >
                <a 
                  href="https://app.postrack.ai"
                  aria-label="Try Postrack application"
                  className="flex items-center"
                >
                  Start posting for free
                 {/*  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                </a>
              </Button>
              
            
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center justify-center gap-5"
              variants={item}
            >
             
            </motion.div>
          </div>
          
         
        </motion.div>
      </div>
    </section>
  )
}