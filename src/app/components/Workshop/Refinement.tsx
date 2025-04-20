"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Refinement() {
  const [inputText] = useState("i went to a coffe shop today.")
  const [outputText] = useState("Went to a coffee shop today. Saw people laughing, working hard, chasing dreams. This is the real America. Not on CNN. Not on MSNBC. Right here, with a cup of coffee in hand. 🇺🇸")
  const [outputText2] = useState("Saw someone dozing off in the corner of the coffee shop today. Thought it was Sleepy Joe prepping for a press conference. Turns out it was just a tired dad. At least he wakes up eventually!")

  return (
    <Card 
      className="h-[550px] w-full max-w-2xl mx-auto py-3 px-8 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 dark:border-red-500 dark:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        {/* Profile Card */}
        <Card className="w-[250px] mb-4 border border-gray-200 dark:border-gray-700 shadow-sm">
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                <Image 
                  src="https://postrack.s3.eu-central-003.backblazeb2.com/donald_trump.jpg" 
                  alt="Donald Trump Profile Picture on X" 
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Donald Trump</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">@realdonaldtrump</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input Box */}
        <div className="mb-4">
          <div className="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Original Post:</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm min-h-[40px]">{inputText}</p>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="flex justify-center mb-4">
          <div className="rounded-full p-1">
            <ArrowDown className="h-5 w-5 dark:text-amber-300" />
          </div>
        </div>

        {/* Output Box */}
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-md p-3 border border-amber-200 dark:border-amber-800 shadow-sm mb-4">
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Refined Post:</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm min-h-[60px]">{outputText}</p>
        </div>

        {/* Second Output Box */}
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-md p-3 border border-amber-200 dark:border-amber-800 shadow-sm">
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Alternative Post:</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm min-h-[60px]">{outputText2}</p>
        </div>

        {/* Try Now Button */}
        <div className="flex justify-center mt-6">
          <Button 
            className="bg-amber-200 hover:bg-amber-200 dark:bg-red-600 dark:hover:bg-amber-200 text-white dark:text-gray-100 font-medium border border-amber-200 dark:border-amber-800"
            onClick={() => window.open('https://app.postrack.ai', '_blank')}
          >
            <Sparkles className="h-4 w-4 mr-2" />
           Try It Yourself
          </Button>
        </div>
      </motion.div>
    </Card>
  )
}
