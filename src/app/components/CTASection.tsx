"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function CTASection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.2
      }
    }
  }
  
  return (
    <section 
      className="py-20 bg-white dark:bg-transparent"
      aria-labelledby="cta-heading"
      ref={containerRef}
    >
      <div className=" mx-auto  px-4">
        <motion.div 
          className="max-w-3xl bg-slate-800 p-10 rounded-xl mx-auto border-2 border-slate-600"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          <div className="text-center">
            <h2 
              id="cta-heading" 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Stop Publishing Blindly. Start Engineering Growth.
            </h2>
            
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Postrack gives you the tools to dominate X's golden hour and exploit long-tail engagement. Stop leaving virality to chance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-black h-8 hover:bg-gray-800 text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-black font-medium"
              >
                <Link 
                  href="https://app.postrack.ai"
                  className="flex items-center"
                >
                  Get Started
                  
                </Link>
              </Button>
              
              <Link 
                href="https://x.com/frknnsh" 
                className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white underline decoration-1 underline-offset-2"
              >
                DM Founder For Questions
              </Link>
            </div>
            
            <div className="mt-10 bg-gray-50 dark:bg-gray-800 py-3 px-6 max-w-md mx-auto text-center rounded-md border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                "Understanding your post's early performance helps optimize future content for better engagement."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}