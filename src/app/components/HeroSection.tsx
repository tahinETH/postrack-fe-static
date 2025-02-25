"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeroSection() {
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
    <section className="py-20 to-white text-center lg:text-left relative overflow-hidden">
      {/* Background gradient orbs */}
      {isLoaded && (
        <>
          <div 
            className="absolute top-20 right-10 w-72 h-72  rounded-full blur-3xl" 
            aria-hidden="true"
          />
          <div 
            className="absolute -bottom-20 -left-20 w-96 h-96  rounded-full blur-3xl" 
            aria-hidden="true"
          />
        </>
      )}
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div>
            <motion.h1 
              className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600"
              variants={item}
            >
              See How Posts Go Viral on X
            </motion.h1>
            
            <motion.p 
              className="leading-7 mt-6 text-gray-600 max-w-2xl mx-auto lg:mx-0 text-lg"
              variants={item}
            >
              <span className="underline decoration-[3px] decoration-blue-700">Track any account or post.</span> Postrack is the missing X analytics tool, for your account, and for any account you want to learn from. Analyze successful accounts, reverse-engineer viral posts, and up your X game.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              variants={item}
            >
              <Button 
                asChild 
                size="lg" 
                className="group bg-tertiary text-white hover:bg-tertiary/90 shadow-lg hover:shadow-xl hover:shadow-tertiary/20 transition-all"
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
                className="relative overflow-hidden group bg-white border border-gray-300 text-gray-900 hover:bg-slate-50 shadow-md"
              >
                <a 
                  href="https://app.postrack.co/example" 
                  className="flex items-center gap-2"
                  aria-label="See Postrack in action with examples"
                >
                  See In Action
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/25 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" 
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 lg:mt-0"
            variants={item}
          >
            <div className="relative group">
              <Link href="https://app.postrack.co/example">
                {/* Image frame effects */}
                <div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-tertiary to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" 
                  aria-hidden="true"
                />
                
                <Image
                  src="/example.png"
                  alt="Postrack Dashboard showing X analytics data"
                  className="rounded-lg shadow-2xl mx-auto transition-all duration-300 group-hover:-translate-y-1 relative"
                  width={800}
                  height={800}
                  priority
                />
              </Link>
              
              {/* Caption for the image */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <p className="text-xs text-gray-700">Live dashboard preview</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}