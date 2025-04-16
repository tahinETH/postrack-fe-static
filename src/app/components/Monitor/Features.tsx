"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Clock, Brain, Users, BarChart2, Zap, ShieldAlert, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import LazyVideo from "./LazyVideo"

// Add type for the color options
type ColorKey = 'amber' | 'red' | 'black';

const features = [
  {
    icon: Clock,
    title: "The 60-Minute Make-or-Break",
    desc: `X's algorithm prioritizes posts gaining traction fast. We show you exactly how your content performs in this decisive window with second-by-second tracking.`,
    details: [
      "We track exactly when each engagement happens, showing the impact of 10 likes in 5 minutes vs spread across an hour",
      "Compare performance patterns across your posts to identify what drives early momentum", 
      "Learn which posting strategies consistently generate rapid engagement"
    ],
    image: "/postrack_1.mp4",
    color: "amber" as ColorKey
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
    color: "red" as ColorKey
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
    color: "black" as ColorKey
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
    color: "amber" as ColorKey
  }
] as const;

// Map color names to Tailwind classes
const colorClasses: Record<ColorKey, {
  bg: string;
  bgLight: string;
  text: string;
  border: string;
  shadow: string;
}> = {
  amber: {
    bg: "bg-amber-500",
    bgLight: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500 dark:border-amber-400",
    shadow: "shadow-amber-200/50 dark:shadow-amber-500/20"
  },
  red: {
    bg: "bg-red-500",
    bgLight: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-500 dark:border-red-400",
    shadow: "shadow-red-200/50 dark:shadow-red-500/20"
  },
  black: {
    bg: "bg-black dark:bg-gray-800",
    bgLight: "bg-gray-100 dark:bg-gray-800/50",
    text: "text-gray-900 dark:text-gray-300",
    border: "border-black dark:border-gray-600",
    shadow: "shadow-gray-200/50 dark:shadow-gray-700/20"
  }
};

export default function BrooklynFeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])

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
          if (index >= 0) setActiveIndex(index)
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
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  return (
    <div id="features" className="relative bg-transparent">
      {/* Background subway-inspired texture */}
      <div className="absolute inset-0 bg-[url('/subway-texture.svg')] bg-repeat opacity-5 dark:opacity-10" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-24">
         
          <motion.div 
            className="mt-20 max-w-7xl mx-auto"
            variants={item}
          >
            <div className="relative max-w-[800px] mx-auto group hover:scale-[102%] transition-all duration-300">
              <Link href="https://app.postrack.ai/example">
                {/* Video frame effects */}
                <div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-600 rounded-md blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" 
                  aria-hidden="true"
                />
                
                <div className="relative rounded-md overflow-hidden border-4 border-black dark:border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(245,158,11,1)]">
                  <LazyVideo 
                    src="/example_page.mp4" 
                    activeIndex={0} 
                  />
                </div>
              </Link>
              
              {/* Caption for the video */}
              <div className="absolute -bottom-6 right-6 bg-black text-white dark:bg-amber-500 dark:text-black px-5 py-3 rounded-md shadow-md font-bold uppercase text-xs tracking-wider">
                Live dashboard preview
              </div>
            </div>
          </motion.div>
          <div className="w-32 h-1 bg-black dark:bg-amber-500 mx-auto my-6"></div>
          
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how Postrack helps you optimize your content strategy
          </p>
        </div>
        
        {features.map((feature, index) => {
          const colorSet = colorClasses[feature.color];
          
          return (
            <div 
              key={index} 
              ref={(el) => { sectionRefs.current[index] = el }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center mb-36 relative`}
            >
              {/* Brooklyn-style corner decorations */}
              <div className={`absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 ${colorSet.border} -z-10 opacity-50`} aria-hidden="true"></div>
              <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 ${colorSet.border} -z-10 opacity-50`} aria-hidden="true"></div>
              
              <div className="w-full md:w-1/2 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  {/* Feature number tag */}
                {/*   <div className={`absolute -left-2 md:-left-4 top-0 ${colorSet.bg} text-white dark:text-black w-10 h-10 rounded flex items-center justify-center text-lg font-bold transform -rotate-3 shadow-md`}>
                    {index + 1}
                  </div> */}
                  
                  <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                    <div className={`p-4 rounded-lg ${colorSet.bgLight} transform -rotate-3`}>
                      <feature.icon className={`h-7 w-7 ${colorSet.text}`} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  </div>
                  
                  <p className={`text-xl text-gray-800 dark:text-gray-300 mb-8 border-l-4 ${colorSet.border} pl-5 py-2`}>
                    {feature.desc}
                  </p>
                  
                  <ul className="space-y-6 text-gray-700 dark:text-gray-400">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-lg">
                        <span className={`${colorSet.text} font-bold mr-3 text-2xl leading-none`}>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Brooklyn-inspired video frame */}
                  <div className={`absolute -inset-1 ${colorSet.bg} opacity-70 blur-sm rounded-lg transform rotate-1`} aria-hidden="true"></div>
                  
                  <div className={`relative rounded-lg overflow-hidden border-4 ${index % 2 === 0 ? 'border-black dark:border-amber-500' : 'border-amber-500 dark:border-amber-400'} shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[8px_8px_0px_0px_rgba(251,191,36,0.2)] transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                    <LazyVideo 
                      src={feature.image} 
                      activeIndex={index} 
                    />
                    
                    {/* Video tag */}
                    <div className={`absolute -right-2 -bottom-2 ${colorSet.bg} text-white dark:text-black py-1 px-3 text-sm font-bold transform -rotate-3 rounded shadow-md`}>
                      Preview
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
      
     
    
    </div>
  )
}