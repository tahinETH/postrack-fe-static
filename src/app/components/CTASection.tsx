"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function BrooklynCTASection() {
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
      className="py-20 relative overflow-hidden bg-[#F5F2E8] dark:bg-gray-900"
      aria-labelledby="cta-heading"
      ref={containerRef}
    >
      {/* Brooklyn-inspired background elements */}
      <div className="absolute inset-0 bg-[url('/brick-texture.svg')] bg-repeat opacity-5 dark:opacity-10" aria-hidden="true"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-amber-500 dark:border-amber-400 opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-amber-500 dark:border-amber-400 opacity-20" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(251,191,36,1)] border-2 border-black dark:border-amber-500 transform -rotate-1">
            <h2 
              id="cta-heading" 
              className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-amber-500 to-red-600 dark:from-amber-400 dark:to-red-500 bg-clip-text text-transparent text-center uppercase tracking-tight"
            >
              Stop Publishing Blindly. Start Engineering Virality.
            </h2>
            
            <div className="w-20 h-1 bg-black dark:bg-amber-500 mx-auto mb-6"></div>
            
            <p className="text-lg mb-8 text-gray-800 dark:text-gray-300 text-center">
              Postrack gives you the tools to dominate X's golden hour and exploit long-tail engagement. Stop leaving virality to chance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="group relative overflow-hidden bg-white text-white hover:bg-amber-500 hover:text-black border-2 border-black dark:border-amber-500 shadow-lg transition-all font-bold uppercase tracking-wide h-[44px] px-6"
              >
                <a 
                  href="https://app.postrack.ai"
                  aria-label="Get started with Postrack"
                >
                  <span className="relative z-10 flex items-center text-black">
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  
                  {/* Button animation overlay */}
                  <span 
                    className="absolute inset-0 w-full bg-gradient-to-r from-amber-500 to-amber-400 dark:from-amber-500 dark:to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    aria-hidden="true"
                  ></span>
                </a>
              </Button>
              
              {/* Brooklyn-style decorated link */}
              <div className="relative transform rotate-1 self-center mt-4 sm:mt-0">
                <a 
                  href="https://app.postrack.ai/example" 
                  className="text-gray-800 dark:text-amber-400 font-bold hover:text-amber-600 dark:hover:text-amber-300 underline decoration-2 underline-offset-4 decoration-gray-400 hover:decoration-amber-500 dark:decoration-gray-600 dark:hover:decoration-amber-400 flex items-center"
                >
                  See Examples First
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-500 dark:bg-amber-400 opacity-20"></div>
              </div>
            </div>
            
            {/* Brooklyn-style testimonial tag */}
            <div className="mt-8 flex justify-center">
              <div className="bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded transform -rotate-2 border-l-4 border-amber-500 dark:border-amber-400 shadow-md max-w-sm">
                <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                "Understanding your post's early performance helps optimize future content for better engagement."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}