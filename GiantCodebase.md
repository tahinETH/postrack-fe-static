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

## ./src/app/components/Navbar.tsx
```
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu} from "lucide-react"





export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between p-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Postrack</span>
            
            <div className="text-2xl font-bold text-blue-600">Postrack</div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
         
        </div>
       {/*  <div className="justify-end">
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="https://app.postrack.co">Go To App</Link>
          </Button>
        </div> */}
      </nav>
      {/* Mobile menu */}
      {/*mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Postrack</span>
                
                <div className="text-2xl font-bold text-blue-600">Postrack</div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <React.Fragment key={item.name}>
                      {item.dropdownItems ? (
                        <>
                          <div className="font-semibold leading-6 text-gray-900">{item.name}</div>
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full">
                    <Link href="https://app.postrack.co">
                      Try for free
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )*/}
      
    </header>
  )
}

```

## ./src/app/components/CTASection.tsx
```
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-tertiary/60 text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-tertiary">Stop Publishing Blindly. Start Engineering Virality.</h2>
          <p className="text-xl mb-8 opacity-90">
          Postrack gives you the tools to dominate X’s golden hour and exploit long-tail engagement. Stop leaving virality to chance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group bg-tertiary text-white hover:bg-tertiary">
              <a href="https://app.postrack.co">
                Start My 7-Day Virality Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              <a href="#case-study">See Case Study: 0→250k Views in 1 Hour</a>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">14-day audit. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}

```

## ./src/app/components/Pricing.tsx
```
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Hobby",
    price: "$49",
    description: "For creators serious about optimizing their content strategy.",
    features: [
      "Track 1 account",
      "Max 5000 followers",
      "Real-time first-hour analytics",
      "Automated post tracking",
      "AI-powered insights",
      "Competitor analysis",
      "30-day data retention",
      "Email alerts",
    ],
    cta: "Subscribe",
    mostPopular: true,
  },
  {
    name: "Locked In",
    price: "$99",
    description: "For teams and agencies managing multiple accounts.",
    features: [
      "All Pro features",
      "Unlimited account tracking",
      "API access",
      "Dedicated support",
      "90-day data retention",
      "Custom integrations",
    ],
    cta: "Subscribe",
    mostPopular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-radial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that's right for you and start optimizing your content strategy today.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col p-8 rounded-lg shadow-lg ${
                tier.mostPopular ? "bg-tertiary text-white ring-2 ring-tertiary" : "bg-card text-card-foreground"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <div className="text-4xl font-bold mb-6">{tier.price}</div>
              <p className="text-sm mb-6">{tier.description}</p>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-3">
                    <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className={`w-full ${
                  tier.mostPopular
                    ? "bg-white text-tertiary hover:bg-gray-100"
                    : "bg-tertiary text-white hover:bg-tertiary/90"
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

```

## ./src/app/components/Features.tsx
```
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

```

## ./src/app/components/HowItWorks.tsx
```
"use client"

import { Link2, Clock, Users, Brain } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    { icon: Link2, title: "Submit Any Account or Post", description: "Type in an X Handle or paste a link to an individual post." },
    { icon: Clock, title: "Track the Golden Hour", description: "We monitor your post every 5 minutes during the first critical hour, capturing exactly how early engagement triggers X's algorithm." },
    { icon: Brain, title: "Sustained Growth", description: "First-hour data tells you how to hack the algorithm. Post-first-hour trends show you how to keep momentum. Get weekly reports comparing early spikes to long-term engagement decay rates." },
    { icon: Users, title: "Map the Virality Path", description: "See which early reposts/likes came from verified accounts, influencers, or niche communities—the amplifiers that actually move the needle." }
    
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cracking X's Code</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

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
export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-tertiary to-purple-600">
         See How Posts Go Viral on X
        </h1>
        <p className="leading-7 mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
         <span className="underline decoration-[3px] decoration-blue-700">Track any account or post.</span> Learn from competitors, reverse-engineer viral posts, and benchmark against industry leaders
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg" className="group bg-tertiary text-white hover:bg-tertiary/90">
            <a href="https://app.postrack.co">
           Try Postrack
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white hover:bg-gray-50">
            <a href="#how-it-works">See In Action</a>
          </Button>
        </div>
        <div className="mt-16">
          <Image
            src="/example.jpeg"
            alt="Postrack Dashboard Preview"
            className="rounded-lg shadow-2xl mx-auto"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  )
}
```

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

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Postrack?",
      answer:
        "Postrack goes beyond basic analytics to reveal why your content succeeds or fails. " +
        "We track granular first-hour engagement patterns invisible to X Analytics, then provide AI-powered strategies to replicate viral moments and avoid dead-end posts.",
    },
    {
      question: "How is this better than X Analytics?",
      answer:
        "X shows you what happened. We show you why it happened—and how to make it happen again. " +
        "Track granular first-hour metrics X doesn't surface: early verified engagement velocity, reply sentiment shifts, amplifier quality scoring.",
    },
    {
        question: "Can I analyze accounts I don't own?",
        answer:
          "Yes! Postrack works for any public X account or post. Track influencers in your niche, monitor competitors' campaigns, or study viral posts—no permissions needed.",
      },

    {
      question: "How does real-time tracking work?",
      answer:
        "Our system captures fresh metrics every 5 minutes during the critical first hour, tracking elements X ignores " +
        "like verified engagement velocity and reply sentiment shifts. After the first hour, we continue monitoring at 30-minute intervals. " +
        "We store this granular data to show you exactly when and why posts gain traction.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We treat your data like nuclear codes. Minimal storage, military-grade encryption, and zero credential exposure. " +
        "Our security protocols are audited quarterly to meet fintech-grade standards.",
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

  return (
    <section className="py-16 bg-muted/10" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-normal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
 
        
    </section>
  )
}
```

## ./src/app/layout.tsx
```
// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import Script from 'next/script'

// Optional: Basic SEO metadata
export const metadata: Metadata = {
  title: "Postrack: Crack X's Algorithm",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://unpkg.com/react-scan/dist/auto.global.js" />
        <Script async src="https://tally.so/widgets/embed.js"></Script>
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
```

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
    <main className="flex flex-col min-h-screen ">
      {/* 
        Each section is a simple, static React server component 
        with minimal or no additional client-side code. 
      */}
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <CTASection />
      <FAQSection />
      <Pricing />
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

body {
  font-family: Arial, Helvetica, sans-serif;
}

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
}
```

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

