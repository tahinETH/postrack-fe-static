"use client"

import { Button } from "@/components/ui/button"
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
    <section className="pt-28 pb-48 text-center lg:text-left relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Brooklyn-inspired background elements */}
      {isLoaded && (
        <>
          <div 
            className="absolute top-0 right-0 w-full h-full bg-[url('/brooklyn-bridge.svg')] bg-no-repeat bg-right-top opacity-5 dark:opacity-10" 
            aria-hidden="true"
          />
         
          <div 
            className="absolute top-40 right-20 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-10 dark:opacity-15" 
            aria-hidden="true"
          />
        </>
      )}
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div>
            <motion.h1 
              className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-600 dark:from-amber-400 dark:to-red-500"
              variants={item}
            >
              Go Viral on X
            </motion.h1>
            
            <motion.p 
              className="leading-7 mt-10 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 text-lg font-medium"
              variants={item}
            >
              <span className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black font-bold inline-block transform -rotate-1">Track any account or post.</span> Analyze successful accounts, reverse-engineer viral posts, and up your X game.
            </motion.p>
            
            <motion.div 
              className="mt-14 flex flex-col sm:flex-row justify-center lg:justify-start gap-6"
              variants={item}
            >
              <Button 
                asChild 
                size="lg" 
                className="group bg-black text-white dark:bg-amber-500 dark:text-black h-[36px] shadow-lg hover:bg-amber-600 hover:shadow-amber-200/50 dark:hover:bg-amber-400 transition-all font-bold uppercase tracking-wide"
              >
                <a 
                  href="https://app.postrack.co"
                  aria-label="Try Postrack application"
                >
                  Try Postrack
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                className="relative overflow-hidden h-[36px] group bg-transparent border-2 border-black dark:border-amber-500 text-black dark:text-amber-500 hover:bg-black hover:text-white dark:hover:bg-amber-500 dark:hover:text-black uppercase tracking-wide font-bold"
              >
                <a 
                  href="https://app.postrack.co/example" 
                  className="flex items-center gap-2"
                  aria-label="See Postrack in action with examples"
                >
                  See In Action
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center justify-center lg:justify-start gap-5"
              variants={item}
            >
              <div className="flex items-center bg-gray-900 dark:bg-amber-400 rounded-md px-5 py-1 shadow-md">
                <Image 
                  src="/x-logo.jpg" 
                  alt="X (Twitter) Logo" 
                  width={28} 
                  height={28}
                  className="rounded-full"
                />
                <span className="ml-3 text-sm text-white dark:text-black font-bold">Optimized for</span>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-400 font-medium">
                Grow your X audience with AI-assisted data.
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20 lg:mt-0"
            variants={item}
          >
            <div className="relative group hover:scale-[102%] transition-all duration-300 transform -rotate-2 hover:rotate-0">
              <Link href="https://app.postrack.co/example">
                {/* Video frame effects - Brooklyn-inspired border */}
                <div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-600 rounded-md blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" 
                  aria-hidden="true"
                />
                
                {/* Graffiti-style outline */}
                <div className="absolute o -inset-2 border-2 border-dashed border-black dark:border-amber-500 rounded-md opacity-50 group-hover:opacity-100 transition-all"></div>
                
                <div className="relative rounded-md overflow-hidden border-4 border-black dark:border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(245,158,11,1)]">
                  <LazyVideo 
                    src="/example.mp4" 
                    activeIndex={0} 
                  />
                </div>
              </Link>
              
              {/* Caption for the video */}
              <div className="absolute -bottom-6 right-6 bg-black text-white dark:bg-amber-500 dark:text-black px-5 py-3 rounded-md shadow-md transform rotate-2 font-bold uppercase text-xs tracking-wider">
                Live dashboard preview
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}