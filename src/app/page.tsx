// app/page.tsx
import React from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Monitor from "./components/Monitor/Monitor"
import Workshop from "./components/Workshop/Workshop"
import CTASection from "./components/CTASection"
import FAQSection from "./components/FAQ"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils"
import Account from "./components/Account/Account"
// Force static rendering for maximum speed.
export const dynamic = "force-static"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Postrack: AI Copilot & Analytics for X", // More specific title
  description: "Unlock viral growth on X. Postrack provides AI-driven content generation, real-time analytics, and competitor insights to optimize your posting strategy.",
  // Optionally override OpenGraph/Twitter specifically for the homepage if needed
  openGraph: {
    title: "Postrack: AI Copilot & Analytics for X",
    description: "Unlock viral growth on X with AI content tools and deep analytics.",
    images: ['/og-image-homepage.jpg'], 
  },
  twitter: {
    title: "Postrack: AI Copilot & Analytics for X",
    description: "Unlock viral growth on X with AI content tools and deep analytics.",
    images: ['/og-image-homepage.jpg'], // Maybe a different Twitter image?
  }
}

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-black relative">
      {/* Dot background pattern */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )} />
      
      {/* Radial gradient overlay for faded look */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
     <Navbar />
      <div className="relative z-20">
        <div className="mx-auto w-full">
          <div className="relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg">
            <div className="relative z-50">
              
              <HeroSection />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20">
        <Workshop/>
        <Account/>
        <Monitor />
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  )
}
