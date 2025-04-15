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
  
  return (
    <section 
      className="w-full py-16 items-center flex bg-[#F5F2E8] dark:bg-gray-900" 
      id="faq"
      ref={sectionRef}
      aria-labelledby="faq-heading"
    >
      {/* Structured Data for SEO */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            id="faq-heading" 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-600 dark:from-amber-400 dark:to-red-500 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-black dark:bg-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Postrack and how it helps you optimize your content
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="bg-white dark:bg-gray-800 rounded-md divide-y divide-gray-100 dark:divide-gray-700 w-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(251,191,36,1)] border-2 border-black dark:border-amber-500"
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
                    className="text-lg font-medium p-5 text-left text-gray-900 dark:text-white w-full hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-lg dark:text-gray-300 p-5 pt-0 w-full border-l-2 border-amber-500 dark:border-amber-400 ml-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 inline-block py-2 px-4 rounded-md transform -rotate-1 border-l-2 border-amber-500 dark:border-amber-400">
            Have more questions? <a href="mailto:info@postrack.ai" className="text-amber-600 dark:text-amber-400 font-bold hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  )
}