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
            <a href="#how-it-works">See An Example</a>
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
