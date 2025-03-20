// app/page.tsx
"use client"
import React from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import Features from "./components/Features"
import CTASection from "./components/CTASection"
import FAQSection from "./components/FAQ"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils"
// Force static rendering for maximum speed.
export const dynamic = "force-static"

// (You can also do: export const revalidate = 86400; to re-gen once/day.)

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
  
     
      <div className="">
        <div className="mx-auto w-full">
          
         
            <div
      className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="relative z-50">
         <Navbar />
         <HeroSection />
         </div>
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
    </div>
        </div>
      </div>
      <div className="w-full  hidden lg:block bg-white dark:bg-slate-900">
          <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch">
              <div className="w-full md:w-1/4 h-20 overflow-hidden shadow-lg md:rounded-l-lg md:rounded-r-none">
                <div className="h-[10%] bg-black dark:bg-slate-900"></div>
                <div className="h-[90%] bg-white dark:bg-slate-800"></div>
              </div>
              <div className="w-full md:w-1/4 h-20 overflow-hidden shadow-lg -mt-[1px] md:mt-0 md:border-l-0">
                <div className="h-[30%] bg-black dark:bg-slate-900"></div>
                <div className="h-[70%] bg-white dark:bg-slate-800"></div>
              </div>
              <div className="w-full md:w-1/4 h-20 overflow-hidden shadow-lg -mt-[1px] md:mt-0 md:border-l-0">
                <div className="h-[50%] bg-black dark:bg-slate-900"></div>
                <div className="h-[50%] bg-white dark:bg-slate-800"></div>
              </div>
              <div className="w-full md:w-1/4 h-20 overflow-hidden shadow-lg -mt-[1px] md:mt-0 md:rounded-r-lg md:rounded-l-none md:border-l-0">
                <div className="h-[70%] bg-black dark:bg-slate-900"></div>
                <div className="h-[30%] bg-white dark:bg-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
      
        <HowItWorks />
      
     
      
      
        <Features />

       
      
      <CTASection />
      
        <FAQSection />
      
      <Footer />
    </main>
  )
}
