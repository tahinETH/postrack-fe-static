"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function CTASection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2
      }
    }
  }

  return (
    <section 
      className="py-20 relative overflow-hidden"
      aria-labelledby="cta-heading"
      ref={containerRef}
    >
      {/* Enhanced background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-tertiary/10"
        aria-hidden="true"
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-56 h-56 bg-tertiary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          <h2 
            id="cta-heading" 
            className="text-3xl md:text-4xl font-bold mb-6 text-tertiary"
          >
            Stop Publishing Blindly. Start Engineering Virality.
          </h2>
          
          <p className="text-lg mb-8 opacity-90 text-gray-700">
            Postrack gives you the tools to dominate X's golden hour and exploit long-tail engagement. Stop leaving virality to chance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="group relative overflow-hidden bg-tertiary text-white hover:bg-tertiary shadow-lg hover:shadow-xl hover:shadow-tertiary/20 transition-all"
            >
              <a 
                href="https://app.postrack.co"
                aria-label="Get started with Postrack"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                
                {/* Button animation overlay */}
                <span 
                  className="absolute inset-0 w-full bg-gradient-to-r from-blue-700 to-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  aria-hidden="true"
                ></span>
              </a>
            </Button>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}