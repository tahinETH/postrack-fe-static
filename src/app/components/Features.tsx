"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Clock, Brain, Users, BarChart2, Zap, ShieldAlert, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Clock,
    title: "The 60-Minute Make-or-Break",
    desc: `X's algorithm prioritizes posts gaining traction fast. We show you exactly how your content performs in this decisive window with second-by-second tracking.

    `,
    details: [
      "We track exactly when each engagement happens, showing the impact of 10 likes in 5 minutes vs spread across an hour",
      "Compare performance patterns across your posts to identify what drives early momentum", 
      "Learn which posting strategies consistently generate rapid engagement"
    ],
    image: "/postrack_1.mp4",
  },
  {
    icon: Users,
    title: "Who Jumpstarted Virality?",
    desc: "Identify which early engagers have followers that actually respond. No more guessing if a repost from @somerandomdude matters.",
    details: [
      "Identify top amplifiers leading to the most impact on a post's viral growth",
      "Track silent engagement patterns like likes and bookmarks that show genuine interest",
      "Analyze loud engagements through quotes, retweets and comments that amplify reach",
    ],
    image: "/postrack_2.mp4",
  },
  {
    icon: Brain,
    title: "AI-Powered Engagement Analysis", 
    desc: "Our AI analyzes every engagement pattern and delivers detailed post-by-post reports, identifying key amplifiers and showing how each interaction impacts your profile's performance.",
    details: [
      "Comprehensive analysis of engagement patterns and their impact",
      "Identification of top amplifiers and their contribution to virality",
      "Profile-level performance tracking based on engagement metrics",
    ],
    image: "/postrack_3.mp4",
  },
  {
    icon: ShieldAlert,
    title: "Learn From the Best",
    desc: "Input your favorite accounts' handles to dissect their viral patterns. See what first-hour strategies they repeat, which posts flop, and how their engagement decays.",
    details: [
      "Track any account's first-hour engagement patterns to learn their winning formulas",
      "Compare successful vs unsuccessful posts to identify key differences in early traction",
      "Study how top accounts maintain engagement after the critical first hour"
    ],
    image: "/postrack_4.mp4",
  },
 /*  {
    icon: Zap,
    title: "10-Second Setup", 
    desc: "Paste in an X handle and we'll get you set up in seconds.",
    details: [
      "No connecting X or complex OAuth steps required",
      "Automatic data fetching after initial hookup",
      "Easy for beginners, robust for power users",
    ],
    image: "/placeholder.svg?height=400&width=600",
  }, */
]

export default function StickyFeatureScroll() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex((ref) => ref === entry.target)
          setActiveIndex(index)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, options)
    const currentRefs = sectionRefs.current

    currentRefs.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      currentRefs.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <div id="features" className="relative mb-20 md:mb-0 ">
      <div className="md:sticky md:top-0 md:h-[calc(100vh*2/3)] flex flex-col md:flex-row md:grid md:grid-cols-3 items-center">
        {/* Navigation Buttons */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex md:hidden justify-between px-4 z-10 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="pointer-events-auto  backdrop-blur-sm  text-tertiary p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="pointer-events-auto backdrop-blur-sm hover:bg-white/20 text-tertiary p-2 rounded-full shadow-lg transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="w-full md:col-span-1 flex items-center justify-center p-4">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-tertiary to-blue-700 bg-clip-text text-transparent">
              {features[activeIndex].title}
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              {features[activeIndex].desc}
            </p>
            <ul className="space-y-3 text-gray-600">
              {features[activeIndex].details.map((detail, index) => (
                <li key={index} className="flex items-start text-lg text-gray-500">
                  <span className="mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="w-full md:col-span-2 flex items-center justify-center p-4">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {features[activeIndex].image.endsWith('.mp4') ? (
              <video
                src={features[activeIndex].image}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover rounded-lg shadow-2xl"
                width={800}
                height={600}
              />
            ) : (
              <Image
                src={features[activeIndex].image}
                alt={features[activeIndex].title}
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-2xl"
              />
            )}
          </motion.div>
        </div>
      </div>

      <div className="hidden md:block">
        {features.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) {
                sectionRefs.current[i] = el
              }
            }}
            className={`${i < features.length - 1 ? 'h-[calc(100vh*2/3)]' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
