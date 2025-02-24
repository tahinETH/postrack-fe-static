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
    <section className="py-16 " id="faq">
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
