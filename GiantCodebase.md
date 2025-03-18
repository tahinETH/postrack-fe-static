# Giant Codebase

## ./next-env.d.ts
```
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

## ./tailwind.config.ts
```
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{ts,tsx}',
	  './components/**/*.{ts,tsx}',
	  './app/**/*.{ts,tsx}',
	  './src/**/*.{ts,tsx}',
	],
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: '#ffffff',
    				foreground: '#1e1e2a'
    			},
    			secondary: {
    				DEFAULT: 'rgba(112, 115, 147, 0.1607)',
    				foreground: '#000000'
    			},
    			tertiary: {
    				DEFAULT: '#475ded',
    				foreground: '#ffffff'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(71, 93, 237, 0.1) 0%, rgba(71, 93, 237, 0) 100%)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
```

## ./next.config.ts
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
```

## ./src/app/plans/page.tsx
```
import Pricing from "../components/Pricing"
import Navbar from "../components/Navbar"
export default function PricingPage() {
    return (
        <div>
            <Navbar />
            <Pricing />
        </div>
    )
}
```

## ./src/app/components/Navbar.tsx
```
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false)
    }
  }

  // Close menu when route changes or on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm transition-all">
      <div className="container mx-auto px-4">
        <nav 
          className="flex items-center justify-between p-4 bg-transparent" 
          aria-label="Main navigation"
          onKeyDown={handleKeyDown}
        >
          <div className="flex lg:flex-1">
            <Link 
              href="/" 
              className="-m-1.5 p-1.5 flex items-center gap-2 transition-opacity hover:opacity-90 group"
              aria-label="Postrack home page"
            >
              <motion.div 
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/favicon.ico"
                  alt=""
                  width={24}
                  height={24}
                  role="presentation"
                  className="transition-transform group-hover:scale-110"
                />
              </motion.div>
              <div className="text-xl font-normal mt-1">Postrack</div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open main menu'}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/plans" 
              className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 rounded-md px-2 py-1 animated-underline"
            >
              Plans
            </Link>
            <Button 
              asChild 
              className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-md hover:shadow-lg transition-all"
            >
              <Link href="https://app.postrack.co" aria-label="Go to Postrack application">
                Go To App
              </Link>
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu" 
            className="md:hidden bg-white shadow-lg fixed inset-0 top-[73px] z-40 overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="space-y-1 px-6 py-8 divide-y divide-gray-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="py-6">
                <Link
                  href="/plans"
                  className="block rounded-md px-3 py-4 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plans
                </Link>
              </div>
              
              <div className="py-6">
                <Button 
                  asChild 
                  className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-700 py-6 text-lg h-auto"
                >
                  <Link 
                    href="https://app.postrack.co"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Go to Postrack application"
                  >
                    Go To App
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}```

## ./src/app/components/CTASection.tsx
```
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
}```

## ./src/app/components/Pricing.tsx
```
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import Footer from "./Footer"

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "per month",
    description: "For creators serious about optimizing their content strategy.",
    features: [
      "Track 1 account",
      "Max 50,000 followers",
      "Real-time first-hour analytics",
      "Full lifespan data for posts",
      "AI-powered insights",
    ],
    cta: "Get Started",
    mostPopular: true,
    icon: <Zap className="h-6 w-6" />,
  },
  {
    name: "Pro",
    price: "$99",
    period: "per month",
    description: "For teams and agencies managing multiple accounts.",
    features: [
      "All Starter Features",
      "Max 250,000 followers",
      "5 individual post tracking",
      "Cross Post AI Analysis",
      "AI Post Generator",
    ],
    cta: "Get Started",
    mostPopular: false,
    icon: <Zap className="h-6 w-6" />,
  },
]

export default function PricingSection() {
  return (
    <>
      <section 
        id="pricing" 
        aria-labelledby="pricing-heading"
        className="py-20 from-white to-gray-50 max-w-[1200px] mx-auto"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              id="pricing-heading" 
              className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600"
            >
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that's right for you and start optimizing your content strategy today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 place-items-center">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-8 rounded-2xl shadow-xl w-full max-w-[420px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  tier.mostPopular 
                    ? "bg-gradient-to-br from-tertiary to-blue-700 text-white border-2 border-blue-400" 
                    : "bg-white text-card-foreground border border-gray-200"
                }`}
              >
                {tier.mostPopular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-300 px-6 py-1.5 rounded-full text-tertiary text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-full ${tier.mostPopular ? "bg-white/20" : "bg-tertiary/10"}`}>
                    {tier.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${tier.mostPopular ? "text-white" : "text-tertiary"}`}>{tier.name}</h3>
                </div>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-extrabold">{tier.price}</span>
                  <span className="ml-2 text-sm opacity-90">{tier.period}</span>
                </div>
                
                <p className="text-sm mb-8 opacity-90">{tier.description}</p>
                
                <ul className="mb-8 flex-grow space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check 
                        className={`h-5 w-5 mr-3 flex-shrink-0 ${
                          tier.mostPopular ? "text-yellow-300" : "text-tertiary"
                        }`} 
                        aria-hidden="true"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  size="lg"
                  className={`w-full font-bold text-base py-6 ${
                    tier.mostPopular
                      ? "bg-white text-tertiary hover:bg-gray-100 focus:ring focus:ring-white/50"
                      : "bg-tertiary text-white hover:bg-tertiary/90 focus:ring focus:ring-tertiary/30"
                  }`}
                  aria-label={`${tier.cta} with ${tier.name} plan at ${tier.price} per month`}
                >
                  {tier.cta}
                </Button>
                
                {/* Money-back guarantee note */}
                <p className="text-xs text-center mt-4 opacity-80">
                  14-day money-back guarantee
                </p>
              </div>
            ))}
          </div>
         {/*  
          <div className="mt-16 text-center p-8 bg-indigo-50 rounded-xl max-w-3xl mx-auto border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Need a custom solution?</h3>
            <p className="text-gray-600 mb-4">
              For agencies and enterprises with specific requirements, we offer tailored plans.
            </p>
            <Button variant="outline" className="bg-white hover:bg-gray-100 border-gray-300">
              Contact Us
            </Button>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  )
}```

## ./src/app/components/Features.tsx
```
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Clock, Brain, Users, BarChart2, Zap, ShieldAlert, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import LazyVideo from "./LazyVideo"

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
      <div className="md:sticky md:top-0 md:h-[calc(100vh*2/3)] lg:h-screen flex flex-col md:flex-row md:grid md:grid-cols-3 items-center">
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
            <LazyVideo 
              src={features[activeIndex].image} 
              activeIndex={activeIndex} 
            />
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
```

## ./src/app/components/HowItWorks.tsx
```
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
}```

## ./src/app/components/Footer.tsx
```
"use client"


import {  Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background pt-16 pb-12 border-t border-border">
      <div className="container mx-auto px-4">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, GitHub].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div> 
        <Separator className="mb-8" />*/}
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@postrack.co">info@postrack.co</a>
          </div>
          
          <Button 
            data-tally-open="wvdrQv" 
            data-tally-emoji-text="👋" 
            data-tally-emoji-animation="wave"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            Contact Us
          </Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">© {currentYear} Postrack. All rights reserved.</div>
      </div>
    </footer>
  )
}
```

## ./src/app/components/HeroSection.tsx
```
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import LazyVideo from "./LazyVideo"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="py-20 to-white text-center lg:text-left relative overflow-hidden">
      {/* Background gradient orbs */}
      {isLoaded && (
        <>
          <div 
            className="absolute top-20 right-10 w-72 h-72  rounded-full blur-3xl" 
            aria-hidden="true"
          />
          <div 
            className="absolute -bottom-20 -left-20 w-96 h-96  rounded-full blur-3xl" 
            aria-hidden="true"
          />
        </>
      )}
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div>
            <motion.h1 
              className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600"
              variants={item}
            >
              See How Posts Go Viral on X
            </motion.h1>
            
            <motion.p 
              className="leading-7 mt-6 text-gray-600 max-w-2xl mx-auto lg:mx-0 text-lg"
              variants={item}
            >
              <span className="underline decoration-[3px] decoration-blue-700">Track any account or post.</span> Postrack is the missing X analytics tool, for your account, and for any account you want to learn from. Analyze successful accounts, reverse-engineer viral posts, and up your X game.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              variants={item}
            >
              <Button 
                asChild 
                size="lg" 
                className="group bg-tertiary text-white hover:bg-tertiary/90 shadow-lg hover:shadow-xl hover:shadow-tertiary/20 transition-all"
              >
                <a 
                  href="https://app.postrack.co"
                  aria-label="Try Postrack application"
                >
                  Try Postrack
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                className="relative overflow-hidden group bg-white border border-gray-300 text-gray-900 hover:bg-slate-50 shadow-md"
              >
                <a 
                  href="https://app.postrack.co/example" 
                  className="flex items-center gap-2"
                  aria-label="See Postrack in action with examples"
                >
                  See In Action
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/25 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" 
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 lg:mt-0"
            variants={item}
          >
            <div className="relative group hover:scale-[102%] transition-all duration-300">
              <Link href="https://app.postrack.co/example">
                {/* Video frame effects */}
                <div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-tertiary to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 " 
                  aria-hidden="true"
                />
                
                <LazyVideo 
                  src="/example.mp4" 
                  activeIndex={0} 
                />
              </Link>
              
              {/* Caption for the video */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <p className="text-xs text-gray-700">Live dashboard preview</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}```

## ./src/app/components/LazyVideo.tsx
```
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface LazyVideoProps {
  src: string
  activeIndex: number
}

const LazyVideo = ({ src, activeIndex }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)

  // Decide whether to load the video
  useEffect(() => {
    // Use setTimeout to defer loading slightly for better performance
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [activeIndex])

  // Handle video loading
  useEffect(() => {
    if (!videoRef.current || !shouldLoad) return

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    videoRef.current.addEventListener('loadeddata', handleLoadedData)
    
    return () => {
      videoRef.current?.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [shouldLoad])

  // Reset video when changing slides
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(err => console.log('Video play failed:', err))
    }
  }, [activeIndex])

  if (!src) return null

  // Determine if we're showing video or image
  const isVideo = src.endsWith('.mp4')

  if (isVideo) {
    return (
      <div className="relative w-full">
        {(!isLoaded && shouldLoad) && (
          <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg absolute top-0 left-0" />
        )}
        {shouldLoad && (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className={`object-cover rounded-lg shadow-2xl w-full h-auto ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.3s ease-in-out' }}
            width={800}
            height={600}
          />
        )}
        {!shouldLoad && (
          <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" />
        )}
      </div>
    )
  }

  // Handle images
  return (
    <div className="relative w-full">
      <Image
        src={src}
        alt="Feature showcase"
        width={600}
        height={400}
        className="object-cover rounded-lg shadow-2xl"
        loading="lazy"
      />
    </div>
  )
}

export default LazyVideo```

## ./src/app/components/FAQ.tsx
```
"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, useInView } from "framer-motion"
import Script from "next/script"

// FAQ data
const faqs = [
  {
    question: "What is Postrack?",
    answer:
      "Postrack goes beyond basic analytics to reveal why content succeeds or fails. " +
      "We track granular first-hour engagement patterns invisible to X Analytics, then provide AI-powered strategies to replicate viral moments and avoid dead-end posts.",
  },
  {
    question: "How is this better than X Analytics?",
    answer:
      "X shows you what happened. We show you why it happened—and how to make it happen again. For not only your account but any public account or post. " +
      "Track granular first-hour metrics X doesn't surface: early verified engagement velocity, reply sentiment shifts, amplifier quality scoring.",
  },
  {
    question: "Can I analyze accounts I don't own?",
    answer:
      "Yes! Postrack works for any public X account or post. Track influencers in your niche and monitor competitors' campaigns.",
  },
  {
    question: "How does real-time tracking work?",
    answer:
      "Our system captures fresh metrics every 5 minutes during the critical first hour, tracking elements X ignores " +
      "like verified engagement velocity and reply sentiment shifts. After the first hour, we continue monitoring at 30-minute intervals. " +
      "We store this granular data to show you exactly when and why posts gain traction.",
  },
  {
    question: "Can Postrack access historical data?",
    answer:
      "Postrack begins tracking from the moment you submit an account or post. We cannot access data from before submission. " +
      "However, if the account or post you're interested in is already being tracked in our system (because someone else submitted it), " +
      "you'll automatically see all the historical data we've collected since it was first added to our platform.",
  },
  {
    question: "Do I need to connect my X account?",
    answer:
      "Monitoring public posts requires no login, but connecting your X account unlocks live alerts, AI rescue tactics, " +
      "and protected content analysis. Full access requires OAuth verification through X's API.",
  },
  {
    question: "Free vs. Pro: What's the difference?",
    answer:
      "Free users get basic metrics for one post. Paid unlocks multi-post tracking, first-hour analytics, real-time rescue alerts, " +
      "amplifier quality scores, and our full suite of AI optimization tactics.",
  },
  {
    question: "Can I track multiple accounts?",
    answer:
      "Yes! Manage unlimited X profiles in one dashboard with separate performance dashboards. " +
      "Agencies love our multi-client support for coordinating rescue campaigns across accounts.",
  },
  {
    question: "What kind of AI-driven insights do you provide?",
    answer:
      "Our AI analyzes engagement patterns to suggest viral replication strategies and emergency fixes. " +
      "You'll get automatic rescue playbooks for failing posts, amplifier targeting lists, and ideal posting schedules tailored to your audience.",
  },
  {
    question: "How do I get started?",
    answer:
      "Be tracking in 90 seconds: sign up, paste any X post URL, and see your first analysis within 5 minutes. " +
      "Connect your own handle for full algorithm-decoding capabilities.",
  },
]

export default function FAQSection() {
  const sectionRef = React.useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Create FAQ Schema for structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section 
      className="py-16 mx-auto items-center flex" 
      id="faq"
      ref={sectionRef}
      aria-labelledby="faq-heading"
    >
      {/* Structured Data for SEO */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      
      <div className="lg:w-[800px]">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            id="faq-heading" 
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Postrack and how it helps you optimize your content
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="bg-white rounded-lg divide-y divide-gray-100 w-full"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full"
              >
                <AccordionItem value={`item-${index}`} className="border-none w-full">
                  <AccordionTrigger 
                    className="text-base font-medium p-5 text-left w-full"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700 p-5 pt-0 w-full">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        {/* <div className="mt-12 text-center">
          <p className="text-gray-500">
            Have more questions? <a href="mailto:info@postrack.co" className="text-tertiary hover:underline">Contact our support team</a>
          </p>
        </div> */}
      </div>
    </section>
  )
}```

## ./src/app/layout.tsx
```
// app/layout.tsx
import "./globals.css"
import type { Metadata, Viewport } from "next"
import Script from 'next/script'
import { Inter } from 'next/font/google'

// Load Inter font with specific subsets
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// OpenGraph and Twitter Card Images
const ogImageUrl = "/og-image.jpg" // Create this 1200×630px image for social sharing

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#475ded",
}

// Improved SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://postrack.co"), // Update with your actual domain
  title: {
    template: "%s | Postrack",
    default: "Postrack: See How Posts Go Viral on X",
  },
  description: "Track any account or post on X. Postrack analyzes successful accounts and reverse-engineers viral posts to help you optimize your X content strategy.",
  keywords: [
    "X analytics", 
    "Twitter analytics", 
    "viral posts", 
    "social media tracking", 
    "engagement tracking", 
    "content strategy",
    "first hour analytics",
    "golden hour tracking",
    "X algorithm",
    "viral content"
  ],
  authors: [{ name: "Postrack Team" }],
  creator: "Postrack",
  publisher: "Postrack",
  applicationName: "Postrack",
  
  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://postrack.co",
    title: "Postrack: See How Posts Go Viral on X",
    description: "Track any account or post on X. Postrack helps you analyze successful accounts and reverse-engineer viral posts.",
    siteName: "Postrack",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Postrack - X Analytics Tool"
      }
    ]
  },
  
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Postrack: See How Posts Go Viral on X",
    description: "Track any account or post on X. Postrack helps you analyze successful accounts and reverse-engineer viral posts.",
    creator: "@postrack", // Update with your actual X handle
    images: [ogImageUrl],
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://postrack.co",
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' }
    ],
  },
  
  // Verification tags
  verification: {
    // google: "your-google-site-verification-id", // Add if you have one
    // yandex: "your-yandex-verification-id", // Add if you have one
  },
  
  // App information
  manifest: "/manifest.json", // Create this for PWA support
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script async src="https://tally.so/widgets/embed.js"></Script>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#475ded" />
      </head>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        {/* Skip to content link for keyboard accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        
        {/* Main content wrapper */}
        <main id="main-content" className="flex-grow flex flex-col">
          {children}
        </main>
        
        {/* Accessibility announcement region for screen readers */}
        <div 
          className="sr-only" 
          role="status" 
          aria-live="polite" 
          id="a11y-status"
        ></div>
      </body>
    </html>
  )
}```

## ./src/app/page.tsx
```
// app/page.tsx
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import Features from "./components/Features"
import CTASection from "./components/CTASection"
import FAQSection from "./components/FAQ"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"
// Force static rendering for maximum speed.
export const dynamic = "force-static"
// (You can also do: export const revalidate = 86400; to re-gen once/day.)

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen  ">
      {/* 
        Each section is a simple, static React server component 
        with minimal or no additional client-side code. 
      */}
      
      <div className="bg-gradient-to-b from-purple-50 via-pink-50 to-white px-20 ">
        <div className="max-w-[1200px] mx-auto">
      <Navbar />
      <HeroSection />
      </div>
      </div>
      <div className="px-20 max-w-[1200px] mx-auto">
      <HowItWorks />
      <Features />
      </div>
      <CTASection />
      <div className="max-w-[1200px] mx-auto">
      <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
```

## ./src/app/globals.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Improved font loading for better performance */
@layer base {
  html {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    @apply scroll-smooth;
  }
  
  /* Improved focus styles for accessibility */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-tertiary/80;
  }
  
  /* Base contrast improvements */
  body {
    @apply bg-background text-foreground antialiased;
  }
  
  /* Skip to content link for keyboard users */
  .skip-to-content {
    @apply sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 
    focus:px-4 focus:py-2 focus:bg-white focus:text-tertiary focus:shadow-lg focus:rounded-md;
  }
  
  /* Improved heading hierarchy and spacing */
  h1, h2, h3, h4, h5, h6 {
    @apply text-gray-900 font-bold;
  }
  
  h1 {
    @apply text-4xl sm:text-5xl lg:text-6xl leading-tight;
  }
  
  h2 {
    @apply text-3xl sm:text-4xl leading-tight;
  }
  
  h3 {
    @apply text-2xl sm:text-3xl;
  }
  
  /* Better paragraph readability */
  p {
    @apply max-w-prose;
  }
  
  /* Improved link states */
  a:not([class]) {
    @apply text-tertiary underline underline-offset-4 hover:text-tertiary/80 
     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary/60
     focus-visible:rounded;
  }
  
  /* Custom selection color */
  ::selection {
    @apply bg-tertiary/20 text-gray-900;
  }
}

/* Animation utilities */
@layer utilities {
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradientAnimation 4s ease infinite alternate;
  }
  
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  
  /* Subtle hover animations */
  .hover-lift {
    @apply transition-all duration-300;
  }
  
  .hover-lift:hover {
    @apply -translate-y-1 shadow-lg;
  }
  
  /* Animated underline */
  .animated-underline {
    position: relative;
  }
  
  .animated-underline::after {
    @apply bg-tertiary;
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
  }
  
  .animated-underline:hover::after, 
  .animated-underline:focus::after {
    transform-origin: left;
    transform: scaleX(1);
  }
}

/* Theme colors and variables */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}```

## ./src/components/ui/card.tsx
```
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

## ./src/components/ui/accordion.tsx
```
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

## ./src/components/ui/separator.tsx
```
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
```

## ./src/components/ui/button.tsx
```
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

## ./src/components/ui/dropdown-menu.tsx
```
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
```

## ./src/components/ui/input.tsx
```
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

## ./src/lib/utils.ts
```
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

