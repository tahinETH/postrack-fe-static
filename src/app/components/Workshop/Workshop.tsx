"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, PenTool, MessageSquare, BarChart2, Lightbulb, Image as ImageIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import People from "./People"
import Refinement from "./Refinement"
import Ideator from "./Ideator"
import Reply from "./Reply"
import Visualization from "./Visualization"

type FeatureCard = {
  id: string
  icon: React.ElementType
  title: string
  description: string
  badgeText: string
  color: "amber" | "red" | "green" | "blue"
  highlights: string[]
  buttonText: string
  demoText: string
  wip?: boolean
}

export default function Workshop() {
  const [activeCard, setActiveCard] = useState<string | null>("ideator")

  const features: FeatureCard[] = [
    {
      id: "ideator",
      icon: Lightbulb,
      title: "Smart Idea Generator",
      description: "Brainstorm posts using patterns from viral content in your niche.",
      badgeText: "Proven Ideas",
      color: "amber",
      highlights: [
        "Find hidden trends in viral content",
        "Break down threads into formulas",
        "Keep your unique voice"
      ],
      buttonText: "Get Inspired",
      demoText: "Help me create a thread about Instagram growth hacks that uses trends from @MarketingExpert's top posts..."
    },
    {
      id: "refiner",
      icon: PenTool,
      title: "Post Perfector",
      description: "Turn rough ideas into posts that actually perform.",
      badgeText: "Make It Better",
      color: "red",
      highlights: [
        "Fix awkward phrasing instantly",
        "Add attention-grabbing hooks",
        "Match top creators' style"
      ],
      buttonText: "Level Up My Draft",
      demoText: "Make this draft punchier like @ViralWriter's posts: '5 analytics mistakes killing your growth...'"
    },
    {
      id: "responder",
      icon: MessageSquare,
      title: "Reply Architect",
      description: "Craft responses that boost your visibility.",
      badgeText: "Smart Replies",
      color: "green",
      highlights: [
        "Turn replies into growth tools",
        "Get featured in big threads",
        "Build valuable relationships"
      ],
      buttonText: "Build Better Replies",
      demoText: "Help me craft a reply to @StartupLeader's viral thread that positions me as an expert..."
    },
    {
      id: "visualizer",
      icon: ImageIcon,
      title: "Visual Content Ideas",
      description: "Get ideas for eye-catching visuals to accompany your tweets.",
      badgeText: "Visual Fire",
      color: "blue",
      highlights: [
        "Find perfect media for your tweets",
        "Create audience-resonating memes",
        "Make posts instantly shareable"
      ],
      buttonText: "Get Visual Ideas",
      demoText: "What kind of visuals would work well with my tweet about coffee shop productivity?",
      wip: true
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  return (
    <section id="ai-workshop" className="py-20 bg-white dark:bg-transparent">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Create Posts That Actually Work
          </h2>
         {/*  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Turn insights from top accounts into your own viral-ready content
          </p> */}
        </motion.div>

        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 text-center text-gray-800 dark:text-gray-200">
            Steal proven strategies from winners (like an artist)
          </h3>
          <People/>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cards Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature) => {
              const isActive = activeCard === feature.id
              const feature_color = isActive ? feature.color : "gray";
              const iconBgColor = isActive ? `bg-${feature.color}-100 dark:bg-${feature.color}-900/30` : "bg-gray-100 dark:bg-gray-800";
              const iconTextColor = isActive ? `text-${feature.color}-700 dark:text-${feature.color}-300` : "text-gray-700 dark:text-gray-300";
              const badgeClass = isActive ? `bg-${feature.color}-100 text-${feature.color}-800 dark:bg-${feature.color}-900 dark:text-${feature.color}-300` : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
              const borderColor = isActive ? `border-${feature.color}-400 dark:border-${feature.color}-500` : "border-gray-200 dark:border-gray-800";
              
              return (
                <motion.div key={feature.id} variants={item}>
                  <Card 
                    className={`h-[300px] cursor-pointer transition-all duration-200 border ${isActive ? borderColor : 'border-gray-200 dark:border-gray-800'} ${isActive ? 'shadow-md' : ''}`}
                    onClick={() => setActiveCard(feature.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className={`p-2 rounded-md ${iconBgColor} mb-2`}>
                          <feature.icon className={`h-5 w-5 ${iconTextColor}`} />
                        </div>
                        <div className="flex gap-2">
                          {feature.wip && (
                            <Badge variant="outline" className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                              WIP
                            </Badge>
                          )}
                          <Badge variant="outline" className={`text-xs ${isActive ? badgeClass : ""}`}>
                            {feature.badgeText}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {feature.description}
                      </CardDescription>
                      <ul className="pt-8 space-y-1">
                        {feature.highlights.map((highlight, index) => (
                          <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                            <span className="mr-1.5 text-xs">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
          
          {/* Feature Detail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {activeCard ? (
              <div className="h-full">
                
                  
               {activeCard === "ideator" && (
                <Ideator/>
               )}
               {activeCard === "refiner" && (
                <Refinement/>
               )}
               {activeCard === "responder" && (
                <Reply/>
               )}
               {activeCard === "visualizer" && (
                <Visualization/>
               )}
               

              </div>
            ) : (
              <Card className="border border-dashed border-gray-200 dark:border-gray-800 h-full flex items-center justify-center p-8 text-center">
                <div>
                  <Sparkles className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Your Content Power-Ups
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md">
                    Click any tool to start creating content that performs
                  </p>
                </div>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}