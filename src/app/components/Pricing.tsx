import { Check, SparkleIcon, ZapIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import Footer from "./Footer"
import Link from "next/link"

const tiers = [
  {
    name: "All Access",
    price: "$30",
    period: "per month",
    description: "Everything you need to optimize your content and grow your audience.",
    features: [
      "Unlimited AI generation",
      "Track up to 10 accounts simultaneously",
      "Monitor any account (up to 10,000 followers)",
      "Real-time analytics dashboard", 
      "Advanced AI insights & recommendations",
    ],
    cta: "Get Started",
    mostPopular: true,
    icon: <SparkleIcon className="h-5 w-5" />,
    comingSoon: false,
    link: "https://app.postrack.ai"
  }
]

export default function MinimalistPricingSection() {
  return (
    <>
      <section 
        id="pricing" 
        aria-labelledby="pricing-heading"
        className="py-24 bg-black relative"
      >
        <div className=" mx-auto px-4 pt-10 relative z-10 max-w-5xl">
          <div className="text-center mb-20">
            
            <h2 
              id="pricing-heading" 
              className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white"
            >
              Simple, Transparent Pricing
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              One plan with everything you need to optimize your content strategy.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="relative flex flex-col p-8 rounded-2xl w-full h-full transition-all duration-200 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-amber-50 text-amber-200 dark:bg-amber-900/30 dark:text-amber-300">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {tier.name}
                  </h3>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">{tier.period}</span>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-100 dark:border-gray-800">
                  {tier.description}
                </p>
                
                <ul className="mb-8 flex-grow space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 text-amber-200 dark:text-amber-300">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={tier.link} target="_blank">
                  <Button
                    size="lg"
                    className="w-full py-6 font-medium text-sm bg-amber-200 text-black hover:bg-amber-200 dark:bg-amber-300 dark:hover:bg-amber-300"
                    aria-label={`${tier.cta} with ${tier.name} plan at ${tier.price} per month`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
                
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <div className="text-center max-w-md">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Need a custom solution? <a href="mailto:furkan@postrack.ai" className="text-amber-200 dark:text-amber-300 hover:underline">Contact the founder</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}