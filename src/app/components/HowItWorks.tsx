"use client"

import { Link2, Clock, Users, Brain } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  const steps = [
    { 
      icon: Link2, 
      title: "Submit Any Account or Post", 
      description: "Type in an X Handle or paste a link to an individual post.",
      color: "bg-blue-50 text-blue-600",
      shadowColor: "shadow-blue-200/50"
    },
    { 
      icon: Clock, 
      title: "Track the Golden Hour", 
      description: "We monitor posts every 5 minutes during the first critical hour, capturing exactly how early engagement triggers X's algorithm.",
      color: "bg-purple-50 text-purple-600",
      shadowColor: "shadow-purple-200/50"
    },
    { 
      icon: Brain, 
      title: "Sustained Growth", 
      description: "First-hour data tells you how to hack the algorithm. Post-first-hour trends show you how to keep momentum.",
      color: "bg-tertiary/10 text-tertiary",
      shadowColor: "shadow-tertiary/30"
    },
    { 
      icon: Users, 
      title: "Map the Virality Path", 
      description: "See which posts did well, which early reposts/likes came from verified accounts, influencers, or niche communities—the amplifiers that actually move the needle.",
      color: "bg-green-50 text-green-600",
      shadowColor: "shadow-green-200/50"
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
      className="py-20 bg-white overflow-hidden"
      ref={sectionRef}
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            id="how-it-works-heading" 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-black to-tertiary bg-clip-text text-transparent"
          >
            Cracking X's Code
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our step-by-step approach to discover what makes content go viral on X
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Connection lines between steps */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 hidden lg:block" aria-hidden="true"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              className="flex flex-col items-center text-center relative  group"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-semibold shadow-sm">
                {index + 1}
              </div>
              
              <div className={`${step.color} p-5 rounded-full mb-6 shadow-lg ${step.shadowColor} transition-all duration-300 `}>
                <step.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional context */}
        <div className="mt-16 text-center mx-auto justify-center items-center flex">
          <p className="text-gray-500 italic">
            All of this happens automatically in the background so you can focus on creating great content
          </p>
        </div>
      </div>
    </section>
  )
}