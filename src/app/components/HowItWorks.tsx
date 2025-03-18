"use client"

import { Link2, Clock, Users, Brain } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function BrooklynHowItWorks() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  const steps = [
    { 
      icon: Link2, 
      title: "Submit Any Account or Post", 
      description: "Type in an X Handle or paste a link to an individual post.",
      bgColor: "bg-white dark:bg-gray-800",
      accentColor: "border-t-4 border-amber-500 dark:border-amber-400",
      iconBg: "bg-gray-100 dark:bg-gray-700"
    },
    { 
      icon: Clock, 
      title: "Track the Golden Hour", 
      description: "We monitor posts every 5 minutes during the first critical hour, capturing exactly how early engagement triggers X's algorithm.",
      bgColor: "bg-white dark:bg-gray-800",
      accentColor: "border-t-4 border-red-500 dark:border-red-400",
      iconBg: "bg-gray-100 dark:bg-gray-700"
    },
    { 
      icon: Brain, 
      title: "Sustained Growth", 
      description: "First-hour data tells you how to hack the algorithm. Post-first-hour trends show you how to keep momentum.",
      bgColor: "bg-white dark:bg-gray-800",
      accentColor: "border-t-4 border-black dark:border-amber-400",
      iconBg: "bg-gray-100 dark:bg-gray-700"
    },
    { 
      icon: Users, 
      title: "Map the Virality Path", 
      description: "See which posts did well, which early reposts/likes came from verified accounts, influencers, or niche communities—the amplifiers that actually move the needle.",
      bgColor: "bg-white dark:bg-gray-800",
      accentColor: "border-t-4 border-amber-500 dark:border-amber-400",
      iconBg: "bg-gray-100 dark:bg-gray-700"
    }
  ]

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
    show: { opacity: 1, y: 0 }
  }

  return (
    <section 
      id="how-it-works" 
      className="pt-20 pb-40 bg-[#F5F2E8] dark:bg-slate-800 overflow-hidden"
      ref={sectionRef}
      aria-labelledby="how-it-works-heading"
    >
      {/* Brick pattern background */}
      <div className="absolute inset-0 bg-[url('/brick-pattern.svg')] bg-repeat opacity-5 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-[2px] w-12 bg-amber-500 dark:bg-amber-400 mr-4"></div>
            <h2 
              id="how-it-works-heading" 
              className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-black to-black dark:from-amber-400 dark:to-amber-400 bg-clip-text text-transparent uppercase"
            >
              Cracking X's Code
            </h2>
            <div className="h-[2px] w-12 bg-amber-500 dark:bg-amber-400 ml-4"></div>
          </div>
          
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our step-by-step approach to discover what makes content go viral on X
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Connection line using subway-inspired dots and dashes */}
          <div className="absolute top-1/3 left-0 right-0 h-2 -z-10 hidden lg:flex justify-between px-12" aria-hidden="true">
            <div className="w-full border-t-2 border-dashed border-gray-400 dark:border-gray-600 my-auto"></div>
          </div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              className="relative"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              {/* Step number - like a Brooklyn street sign */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-black dark:bg-amber-500 text-white dark:text-black rounded-full flex items-center justify-center text-sm font-bold z-10 shadow-lg">
                {index + 1}
              </div>
              
              <div className={`${step.bgColor} ${step.accentColor} rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[5px_5px_0px_0px_rgba(251,191,36,0.2)] p-6 h-full hover:translate-y-[-4px] hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.15)] dark:hover:shadow-[5px_5px_15px_0px_rgba(251,191,36,0.3)] transition-all duration-300`}>
                <div className={`${step.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <step.icon className="h-6 w-6 text-amber-500 dark:text-amber-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                
                <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
              </div>
              
              {/* Subway connector dots */}
              {index < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/3 w-6 h-6 bg-amber-500 dark:bg-amber-400 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Footer note styled like a Brooklyn street sign */}
        <div className="mt-16 flex justify-center">
          <div className="bg-black dark:bg-amber-500 text-white dark:text-black py-3 px-6 max-w-md text-center rounded-sm transform -rotate-1 shadow-md">
            <p className="font-medium">
              All of this happens automatically in the background so you can focus on creating great content
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}