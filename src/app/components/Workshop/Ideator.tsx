"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Ideator() {
  const [inputText] = useState("i went to a coffee shop today.")
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const ideaCards = [
    {
        idea: "Reflected on how many people go to coffee shops just to look busy",
        example: "Went to a coffee shop today. Noticed 5 out of 7 laptops open on Notion dashboards and 0 keys being pressed. Huge productivity theater energy. I just sat there and actually drank coffee. Felt rebellious."
      },
    {
      idea: "Unexpected observation",
      example: "Went to a coffee shop today. Saw someone ask the cashier if their beans were AI-roasted. We've gone too far."
    },
    {
      idea: "Unexpected inspiration strikes during a cafe visit",
      example: "I went to a coffee shop today to relax. Left with two new startup ideas scribbled on a napkin and enough caffeine to accidentally build half of it. 10/10 would impulsively ideate again."
    },
    {
      idea: "Overheard a strange or interesting conversation in the coffee shop",
      example: "Guy next to me at the café spent 20 minutes pitching an app to track how many times you exhale per day. Found myself exhaling aggressively out of pure secondhand embarrassment. 10/10 entertainment with my espresso."
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

  // Handle scroll events to update the current card index
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft
        const cardWidth = 500 // Fixed card width
        const newIndex = Math.round(scrollLeft / cardWidth)
        
        if (newIndex !== currentCardIndex) {
          setCurrentCardIndex(newIndex)
        }
        
        // Show/hide arrows based on scroll position
        setShowLeftArrow(scrollLeft > 50) // Show left arrow after 50px scroll
        setShowRightArrow(scrollLeft < (ideaCards.length - 1) * cardWidth - 50) // Hide right arrow near end
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
      className="h-[550px] w-full max-w-2xl mx-auto py-3 px-8 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 dark:border-amber-200 dark:shadow-[0_0_15px_rgba(245,158,11,0.5)] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 h-full flex flex-col"
      >
        {/* Profile Card */}
        <Card className="w-[250px] mb-4 border border-gray-200 dark:border-gray-700 shadow-sm">
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                <Image 
                  src="https://postrack.s3.eu-central-003.backblazeb2.com/levelsio.jpg" 
                  alt="Pieter Levels Profile Picture on X" 
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Pieter Levels</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">@levelsio</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input Box */}
        <div className="mb-4">
          <div className="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1"> Random Ramblings:</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm min-h-[40px]">{inputText}</p>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="flex justify-center mb-4">
          <div className="rounded-full p-1">
            <ArrowDown className="h-5 w-5 dark:text-amber-300" />
          </div>
        </div>

        {/* Horizontal Scrolling Cards with Hover Navigation Arrows */}
        <div className="relative flex-grow">
          {/* Left Arrow - Only visible when hovered and not at the beginning */}
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
          
          {/* Right Arrow - Only visible when hovered and not at the end */}
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
          
          {/* Scrollable Container */}
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
                  <div className="bg-slate-700 border border-slate-700 rounded-md overflow-hidden h-[200px]">
                    <div className="p-3 border-b border-slate-600">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-semibold text-amber-300 mr-2">Post Idea:</span>
                      </div>
                      <p className="font-semibold text-white text-sm">{card.idea}</p>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-semibold text-amber-300 mr-2">Example Post:</span>
                      </div>
                      <p className="text-sm text-slate-200">{card.example}</p>
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
                  const cardWidth = 500 // Fixed card width
                  carouselRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth'
                  })
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentCardIndex === index 
                  ? 'bg-amber-300 w-4' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to idea ${index + 1}`}
            />
          ))}
        </div>

        {/* Try Now Button */}
        <div className="flex justify-center mt-6">
          <Button 
            className="bg-amber-300 hover:bg-amber-300 text-black font-medium"
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