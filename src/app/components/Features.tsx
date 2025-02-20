"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Clock, Brain, Users, BarChart2, Zap, ShieldAlert } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Clock,
    title: "The 60-Minute Make-or-Break",
    desc: "X's algorithm prioritizes posts gaining traction fast. We show you exactly how your content performs in this decisive window with second-by-second tracking.",
    details: [
      "Posts with 5+ replies in first 15 minutes get 6x more algorithmic boost",
      "Real-time tracking of early engagement velocity",
      "Precise timestamps of key virality triggers",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Users,
    title: "Who Jumpstarted Virality?",
    desc: "Identify which early engagers have followers that actually respond. No more guessing if a repost from @somerandomdude matters.",
    details: [
      "Sort amplifiers by follower activity rate",
      "Filter by verified status and niche authority",
      "Track which amplifiers consistently drive engagement",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Brain,
    title: "Your Personal Viral Blueprint",
    desc: "Our AI compares your top-performing first-hour patterns to suggest replicable tactics: optimal posting times, hook formulas, CTAs.",
    details: [
      "Pattern analysis of your highest-performing posts",
      "AI-generated hook and CTA recommendations",
      "Personalized posting time optimization",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: ShieldAlert,
    title: "Spy (Legally) On Your Competition",
    desc: "Input industry leaders' handles to dissect their viral patterns. See what first-hour strategies they repeat, which posts flop, and how their engagement decays.",
    details: [
     
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: BarChart2,
    title: "Growth & Verified Impact",
    desc: "Measure follow growth and track verified user engagement.",
    details: [
      "Watch how verified likes & reposts boost visibility",
      "Track new followers gained after viral posts",
      "Uncover patterns that drive consistent growth",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Zap,
    title: "10-Second Setup",
    desc: "Paste in an X handle and we'll get you set up in seconds.",
    details: [
      "No coding or complex OAuth steps required",
      "Automatic data fetching after initial hookup",
      "Easy for beginners, robust for power users",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
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

  return (
    <div id="features" className="relative px-4 md:px-20 lg:px-40" style={{ height: `${features.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex items-center justify-center px-20">
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
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={features[activeIndex].image || "/placeholder.svg"}
              alt={features[activeIndex].title}
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      <div>
        {features.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) {
                sectionRefs.current[i] = el
              }
            }}
            className={`${i < features.length - 1 ? 'h-screen' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

