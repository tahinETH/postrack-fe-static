"use client"

import { Link2, Clock, Users, Brain } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    { icon: Link2, title: "Submit Any Account or Post", description: "Type in an X Handle or paste a link to an individual post." },
    { icon: Clock, title: "Track the Golden Hour", description: "We monitor your post every 5 minutes during the first critical hour, capturing exactly how early engagement triggers X's algorithm." },
    { icon: Brain, title: "Sustained Growth", description: "First-hour data tells you how to hack the algorithm. Post-first-hour trends show you how to keep momentum. Get weekly reports comparing early spikes to long-term engagement decay rates." },
    { icon: Users, title: "Map the Virality Path", description: "See which early reposts/likes came from verified accounts, influencers, or niche communities—the amplifiers that actually move the needle." }
    
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cracking X's Code</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
