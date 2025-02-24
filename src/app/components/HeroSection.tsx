"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-20 to-white text-center lg:text-left">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
              See How Posts Go Viral on X
            </h1>
            <p className="leading-7 mt-6 text-gray-600 max-w-2xl mx-auto lg:mx-0 text-lg">
              <span className="underline decoration-[3px] decoration-blue-700">Track any account or post.</span> Postrack is the missing X analytics tool, for your account, and for any account you want to learn from. Analyze successful accounts, reverse-engineer viral posts, and up your X game.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="group bg-tertiary text-white hover:bg-tertiary/90">
                <a href="https://app.postrack.co">
                  Try Postrack
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" className="relative overflow-hidden group bg-white border border-gray-300 text-gray-900 hover:bg-slate-50">
                <a href="https://app.postrack.co/example" className="flex items-center gap-2">
                  See In Action
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/25 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <Link href="https://app.postrack.co/example">
              <Image
                src="/example.png"
                alt="Postrack Dashboard Preview"
                className="rounded-lg shadow-2xl mx-auto transition-transform duration-300 hover:-translate-y-1"
                width={800}
                height={800}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
