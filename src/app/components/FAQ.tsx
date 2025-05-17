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
      "Postrack tracks granular first-hour engagement patterns invisible to Twitter Analytics, then provide AI-powered strategies to replicate viral moments and avoid dead-end posts.",
  },
  {
    question: "How is this better than Twitter Analytics?",
    answer:
      "Twitter shows you what happened. Postrack shows you why it happened—and how to make it happen again. For not only your account but any public account or post. " +
      "Track granular first-hour metrics Twitter doesn't surface: early verified engagement velocity, reply sentiment shifts, amplifier quality scoring.",
  },
  {
    question: "Can I analyze accounts I don't own?",
    answer:
      "Yes! Postrack works for any public Twitter account or post. Track influencers in your niche and monitor competitors' campaigns.",
  },
  {
    question: "How does real-time tracking work?",
    answer:
      "Our system captures fresh metrics every 5 minutes during the critical first hour, tracking elements Twitter ignores " +
      "like verified engagement velocity and reply sentiment shifts. After the first hour, Postrack continues monitoring at 30-minute intervals. " +
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
    question: "Do I need to connect my Twitter account?",
    answer:
      "Monitoring public posts requires no login, but connecting your Twitter account unlocks live alerts, AI rescue tactics, " +
      "and protected content analysis. Full access requires OAuth verification through Twitter's API.",
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
      "Yes! Manage unlimited Twitter profiles in one dashboard with separate performance dashboards. " +
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
      "Be tracking in 90 seconds: sign up, paste any Twitter post URL, and see your first analysis within 5 minutes. " +
      "Connect your own handle for full algorithm-decoding capabilities.",
  },
]

export default function BrooklynFAQSection() {
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
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }
  
  return (
    <section 
      className="w-full py-20 bg-white dark:bg-transparent" 
      id="faq"
      ref={sectionRef}
    >
      {/* Structured Data for SEO */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      
      <div className=" mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Postrack
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Accordion 
              type="single" 
              collapsible 
              className="w-full space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={item}>
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger 
                      className="text-lg font-medium p-5 text-left text-gray-900 dark:text-white w-full hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 p-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
        
        <div className="mt-10 text-center items-center mx-auto flex justify-center">
          <p className="text-gray-600 dark:text-gray-400">
            Have more questions? <a href="mailto:furkan@postrack.ai" className="text-amber-200 dark:text-amber-300 font-medium hover:underline">Contact the founder</a>
          </p>
        </div>
      </div>
    </section>
  )
}