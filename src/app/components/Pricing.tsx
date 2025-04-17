import { Check, SparkleIcon, ZapIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import Footer from "./Footer"

const tiers = [
 /*  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Basic tools to get started with content optimization.",
    features: [
      "Coming soon...",
    ],
    cta: "Coming Soon",
    mostPopular: false,
    icon: <Clock className="h-5 w-5" />,
    comingSoon: true,
  }, */
  {
    name: "Good",
    price: "$20",
    period: "per month",
    description: "For creators starting their content optimization journey.",
    features: [
      "Unlimited post generation",
      "Analyze up to 5 accounts",
      "Monitor 1 account (up to 5,000 followers)",
      "Real-time analytics dashboard",
      "Basic AI recommendations",
    ],
    cta: "Get Good",
    mostPopular: false,
    icon: <ZapIcon className="h-5 w-5" />,
    comingSoon: false,
  },
  {
    name: "Better",
    price: "$45",
    period: "per month",
    description: "For serious creators scaling their social presence.",
    features: [
      "Unlimited post generation",
      "Unlimited account analysis",
      "Monitor 1 account (up to 50,000 followers)",
      "Advanced AI insights",
      "Priority support",
    ],
    cta: "Get Better",
    mostPopular: false,
    icon: <SparkleIcon className="h-5 w-5" />,
    comingSoon: false,
  },
]

export default function MinimalistPricingSection() {
  return (
    <>
      <section 
        id="pricing" 
        aria-labelledby="pricing-heading"
        className="py-24 bg-white dark:bg-gray-950 relative"
      >
        <div className="container mx-auto px-4 pt-10 relative z-10 max-w-5xl">
          <div className="text-center mb-20">
            
            <h2 
              id="pricing-heading" 
              className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white"
            >
              Choose Your Plan
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start optimizing your content strategy with our powerful analytics and AI tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-8 rounded-2xl w-full h-full transition-all duration-200 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg ${tier.comingSoon ? 'opacity-80' : ''}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-md ${
                    tier.name === "Pro" 
                      ? "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" 
                      : tier.name === "Free"
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}>
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
                      {!tier.comingSoon && (
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                          tier.name === "Pro" 
                            ? "text-amber-600 dark:text-amber-400" 
                            : tier.name === "Free"
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-yellow-600 dark:text-yellow-400"
                        }`}>
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </div>
                      )}
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  size="lg"
                  disabled={tier.comingSoon}
                  className={`w-full py-6 font-medium text-sm ${
                    tier.name === "Pro"
                      ? "bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700"
                      : tier.name === "Free"
                        ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 opacity-70"
                        : "bg-yellow-600 text-black hover:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-400"
                  }`}
                  aria-label={`${tier.cta} with ${tier.name} plan at ${tier.price} per month`}
                >
                  {tier.cta}
                </Button>
                
                {!tier.comingSoon && (
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                    14-day money-back guarantee
                  </p>
                )}

                {tier.comingSoon && 
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-8">
                  
                </p>
                }
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <div className="text-center max-w-md">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Need a custom solution? <a href="mailto:support@postrack.ai" className="text-amber-600 dark:text-amber-400 hover:underline">Contact us</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}