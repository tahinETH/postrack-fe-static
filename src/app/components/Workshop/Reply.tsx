"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Reply() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const ideaCards = [
    {
      idea: "Ask whether boredom is a signal for a lack of curiosity, and connect it to the idea of becoming interested as a means to become interesting.",
      example: "The cure for boredom is curiosity, and there's no known cure for curiosity"
    },
    {
      idea: "Explore the question: Does avoiding boredom require deliberate practice, like going for daily walks, or is it a natural state for some?",
      example: "Maybe the antidote to boredom really is just a 20 minute walk in the direction of anything"
    },
    {
      idea: "Quote the 'Complaining would be understandable if it worked, but it doesn't work,' suggesting that boredom is often disguised as complaint and deflection.",
      example: "Boredom disguised as complaining is still boredom"
    },
    {
      idea: "Apply the lens of phenomenology: Is boredom a property of the world, or of the observer's mind structuring experience?",
      example: "Is boredom in the world or in the way we see the world?"
    }
  ]

  const nextCard = () => {
    if (carouselRef.current) {
      const newIndex = (currentCardIndex + 1) % ideaCards.length
      const cardWidth = 500 // Fixed card width
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      })
      setCurrentCardIndex(newIndex)
    }
  }

  const prevCard = () => {
    if (carouselRef.current) {
      const newIndex = (currentCardIndex - 1 + ideaCards.length) % ideaCards.length
      const cardWidth = 500 // Fixed card width
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      })
      setCurrentCardIndex(newIndex)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft
        const cardWidth = 500 // Fixed card width
        const newIndex = Math.round(scrollLeft / cardWidth)
        
        if (newIndex !== currentCardIndex) {
          setCurrentCardIndex(newIndex)
        }
        
        setShowLeftArrow(scrollLeft > 50)
        setShowRightArrow(scrollLeft < (ideaCards.length - 1) * cardWidth - 50)
      }
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
      return () => carousel.removeEventListener('scroll', handleScroll)
    }
  }, [currentCardIndex, ideaCards.length])

  return (
    <Card 
      className="h-[550px] w-full max-w-2xl mx-auto py-3 px-8 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 dark:border-green-500 dark:shadow-[0_0_15px_rgba(34,197,94,0.5)] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 h-full flex flex-col"
      >
       
        {/* Image Box */}
        
         
              <Image
                src="https://postrack.s3.eu-central-003.backblazeb2.com/reply_post.png"
                alt="Reply Post Example"
                width={400}
                height={180}
                className="rounded-lg mx-auto justify-center flex mb-4 "
              />
         
        

        {/* Arrow Indicator */}
        <div className="flex justify-center mb-4">
          <div className="rounded-full p-1">
            <ArrowDown className="h-5 w-5 dark:text-green-400" />
          </div>
        </div>

        {/* Horizontal Scrolling Cards with Hover Navigation Arrows */}
        <div className="relative flex-grow">
          {showLeftArrow && (
            <div className="absolute left-0 top-0 bottom-0 z-10 w-12 flex items-center justify-start opacity-0 hover:opacity-100 transition-opacity">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={prevCard}
                className="h-8 w-8 p-0 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-700 ml-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          {showRightArrow && (
            <div className="absolute right-0 top-0 bottom-0 z-10 w-12 flex items-center justify-end opacity-0 hover:opacity-100 transition-opacity">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={nextCard}
                className="h-8 w-8 p-0 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-700 mr-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          <div 
            ref={carouselRef}
            className="relative overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex">
              {ideaCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="w-[500px] flex-none snap-center px-1"
                >
                  <div className="bg-slate-700 border border-green-700/50 rounded-md overflow-hidden h-[200px]">
                    <div className="p-3 border-b border-green-600/30">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-semibold text-green-400 mr-2">Post Idea:</span>
                      </div>
                      <p className="font-semibold text-white text-sm">{card.idea}</p>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-semibold text-green-400 mr-2">Example Post:</span>
                      </div>
                      <p className="text-white text-sm">{card.example}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 gap-1">
          {ideaCards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (carouselRef.current) {
                  const cardWidth = 500
                  carouselRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth'
                  })
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentCardIndex === index 
                  ? 'bg-green-500 w-4' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to idea ${index + 1}`}
            />
          ))}
        </div>

        {/* Try Now Button */}
        <div className="flex justify-center mt-6">
          <Button 
            className="bg-green-500 hover:bg-green-600 text-black font-medium"
            onClick={() => window.open('https://app.postrack.ai', '_blank')}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Try It Yourself
          </Button>
        </div>
      </motion.div>
    </Card>
  )
}
