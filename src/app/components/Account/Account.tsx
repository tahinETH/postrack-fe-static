"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, BarChart4, TrendingUp, List, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type AnalysisFeature = {
  id: string
  icon: React.ElementType
  title: string
  description: string
  color: "purple" | "indigo" | "cyan" | "emerald"
}

export default function Account() {
    const features: AnalysisFeature[] = [
        {
          id: "competitive-intel",
          icon: Search,
          title: "Spy on Competitors (Ethically)",
          description: "See exactly what content works for any account in your niche - best posts, hidden patterns, and growth hacks",
          color: "purple"
        },
        {
          id: "statistical-patterns",
          icon: BarChart4,
          title: "Engagement Science",
          description: "AI reveals which post elements actually drive shares - optimal length, media types, and secret timing patterns",
          color: "indigo"
        },
       
        {
          id: "top-content",
          icon: List,
          title: "Proven Content Library",
          description: "Instantly access any account's top 1% performing posts - filter by views, shares, and engagement rate",
          color: "emerald"
        }
      ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  return (
    <section id="account-analysis" className="py-20 bg-white/90 dark:bg-black">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Reverse Engineer Any Account
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how they post, what they post, and what works.
          </p>
        </motion.div>

        {/* Feature Cards Row */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {features.map((feature) => {
            const iconBgColor = `bg-${feature.color}-100 dark:bg-${feature.color}-900/30`;
            const iconTextColor = `text-${feature.color}-700 dark:text-${feature.color}-300`;
            
            return (
              <motion.div key={feature.id} variants={fadeIn}>
                <Card className="border border-gray-200 dark:border-gray-800 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className={`p-2 rounded-md ${iconBgColor} mb-3`}>
                        <feature.icon className={`h-5 w-5 ${iconTextColor}`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="relative w-full max-w-[1200px]">
          <div className="shadow-xl rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="https://postrack.s3.eu-central-003.backblazeb2.com/account_analysis.png"
                alt="Account Analysis Dashboard"
                width={1000}
                height={1080}
                className=" mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  )
}