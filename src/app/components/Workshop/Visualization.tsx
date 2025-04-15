"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Visualization() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const visualizationCards = [
    {
      type: "Media Idea",
      description: "A picture or brief video of the actual coffee cup the user ordered, the latte art, or the interior/exterior of the specific coffee shop they visited."
    },
    {
      type: "AI Generation Idea",
      description: "A cozy, slightly stylized illustration of a coffee cup on a table by a window, capturing a peaceful morning vibe."
    },
    {
      type: "Meme Idea",
      description: "A GIF of someone happily sipping coffee, looking relaxed in a cafe setting, or a meme about the necessity of coffee or the joy of a cafe visit."
    }
  ]

  const nextCard = () => {
    if (carouselRef.current) {
      const newIndex = (currentCardIndex + 1) % visualizationCards.length
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
      const newIndex = (currentCardIndex - 1 + visualizationCards.length) % visualizationCards.length
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
        setShowRightArrow(scrollLeft < (visualizationCards.length - 1) * cardWidth - 50)
      }
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
      return () => carousel.removeEventListener('scroll', handleScroll)
    }
  }, [currentCardIndex, visualizationCards.length])

  return (
    <Card 
      className="h-[550px] w-full max-w-2xl mx-auto py-3 px-8 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 dark:border-blue-500 dark:shadow-[0_0_15px_rgba(59,130,246,0.5)] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 h-full flex flex-col"
      >
        {/* Input Box */}
        <div className="mt-8 mb-4">
          <div className="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Post:</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm min-h-[40px]">i went to a coffee shop today.</p>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="flex justify-center mb-4">
          <div className="rounded-full p-1">
            <ArrowDown className="h-5 w-5 dark:text-blue-400" />
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
              {visualizationCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="w-[500px] flex-none snap-center px-1"
                >
                  <div className="bg-slate-700 border border-blue-700/50 rounded-md overflow-hidden h-[200px]">
                    <div className="p-3 border-b border-blue-600/30">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-semibold text-blue-400 mr-2">{card.type}:</span>
                      </div>
                      <p className="font-semibold text-white text-sm">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 gap-1">
          {visualizationCards.map((_, index) => (
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
                  ? 'bg-blue-500 w-4' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to visualization ${index + 1}`}
            />
          ))}
        </div>

        {/* Try Now Button */}
        <div className="flex justify-center mt-6">
          <Button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium"
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
