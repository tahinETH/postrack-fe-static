"use client"

import { Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrooklynFooterSection() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black pt-16 pb-12 border-t border-stone-800 relative">
      {/* Brooklyn-inspired texture */}
      <div className="absolute inset-0 bg-[url('/brick-texture.svg')] bg-repeat opacity-5" aria-hidden="true"></div>
      
      <div className=" mx-auto px-4 relative">
        <div className="flex flex-col items-center gap-8 mb-10">
          {/* Contact info with Brooklyn styling */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-lg font-medium text-white">
              <div className="p-2 rounded-full bg-amber-200/10">
                <Mail className="h-5 w-5 text-amber-300" />
              </div>
              <a 
                className="text-white hover:text-amber-300 transition-colors" 
                href="mailto:furkan@postrack.ai"
              >
                furkan@postrack.ai
              </a>
            </div>
            
            <Button
              data-tally-open="wvdrQv"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="bg-black hover:bg-amber-200 hover:text-black text-white border-2 border-amber-200 font-bold flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(251,191,36,0.5)] transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              Contact Us
            </Button>
          </div>

        </div>
        
        {/* Brooklyn-style divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-1 bg-amber-200 dark:bg-amber-300"></div>
          <div className="w-3 h-3 mx-2 bg-amber-200 dark:bg-amber-300 transform rotate-45"></div>
          <div className="w-16 h-1 bg-amber-200 dark:bg-amber-300"></div>
        </div>
        
        <div className="text-center flex items-center justify-center gap-1">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            <span>©</span>
            <span>{currentYear}</span>
            <span>Postrack. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}