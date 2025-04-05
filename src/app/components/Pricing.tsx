import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import Footer from "./Footer"

const tiers = [
  {
    name: "Starter",
    price: "$TBD",
    period: "per month",
    description: "For hobbyists getting to know how they could optimize their posting.",
    features: [
      "Track 1 account",
      "Max 100,000 followers",
      "Real-time first-hour analytics",
      "Full lifespan data for posts",
    ],
    cta: "Get Started",
    mostPopular: true,
    icon: <Zap className="h-6 w-6" />,
  },
  {
    name: "Pro",
    price: "$TBD",
    period: "per month",
    description: "For dedicated creators doubling down on posting and going vital.",
    features: [
      "All Starter Features",
      "Max 250,000 followers",
      "5 individual post tracking",
      "Cross Post AI Analysis",
      "AI Post Generator",
    ],
    cta: "TBD",
    mostPopular: false,
    icon: <Zap className="h-6 w-6" />,
    disabled: true,
    comingSoon: true
  },
]

export default function BrooklynPricingSection() {
  return (
    <>
      <section 
        id="pricing" 
        aria-labelledby="pricing-heading"
        className="py-20 bg-[#F5F2E8] dark:bg-gray-900 relative overflow-hidden"
      >
        {/* Brooklyn-inspired background elements */}
        <div className="absolute inset-0 bg-[url('/brick-pattern.svg')] bg-repeat opacity-5 dark:opacity-10" aria-hidden="true"></div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-amber-500 dark:border-amber-400 opacity-20" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-amber-500 dark:border-amber-400 opacity-20" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 
              id="pricing-heading" 
              className="inline-block text-4xl font-black uppercase tracking-tight mb-6 bg-gradient-to-r from-amber-500 to-red-600 dark:from-amber-400 dark:to-red-500 bg-clip-text text-transparent transform -rotate-1"
            >
              Get Started Today
              </h2>
            
            <div className="w-24 h-1 bg-black dark:bg-amber-500 mx-auto my-4"></div>
            
            <p className="text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            Begin your content optimization journey with our Starter plan. More powerful features coming soon!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 place-items-center">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(251,191,36,1)] w-full max-w-[420px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(251,191,36,1)] transition-all duration-300 transform hover:-translate-y-1 border-2 ${
                  tier.mostPopular 
                    ? "bg-gradient-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 border-black dark:border-amber-400 transform rotate-1" 
                    : "bg-white dark:bg-gray-800 border-black dark:border-amber-400 transform -rotate-1"
                } ${tier.disabled ? "opacity-80" : ""}`}
              >
                {tier.mostPopular && (
                  <div className="absolute -top-4 -left-4 bg-black dark:bg-amber-500 text-white dark:text-black px-4 py-2 rounded shadow-md transform -rotate-6 font-bold text-sm uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                
                {tier.comingSoon && (
                  <div className="absolute -top-4 -right-4 bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded shadow-md transform rotate-6 font-bold text-sm uppercase tracking-wide">
                    Coming Soon
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-md ${
                    tier.mostPopular 
                      ? "bg-amber-500 dark:bg-amber-400 text-white dark:text-black" 
                      : "bg-black dark:bg-amber-500 text-white dark:text-black"
                  }`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-black dark:text-white uppercase tracking-tight">
                    {tier.name}
                  </h3>
                </div>
                
                <div className={`flex items-baseline mb-6 ${
                  tier.mostPopular ? "bg-amber-100 dark:bg-amber-900/30" : "bg-gray-100 dark:bg-gray-700/50"
                  } p-4 rounded-md border-l-4 ${
                    tier.mostPopular ? "border-amber-500 dark:border-amber-400" : "border-black dark:border-gray-400"
                  }`}>
                  <span className="text-5xl font-black text-gray-900 dark:text-white">{tier.price}</span>
                  {tier.period && <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{tier.period}</span>}
                </div>
                
                <p className="text-md mb-8 text-gray-700 dark:text-gray-300 border-b-2 border-gray-200 dark:border-gray-700 pb-4">{tier.description}</p>
                
                <ul className="mb-8 flex-grow space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        tier.mostPopular 
                          ? "bg-amber-500 dark:bg-amber-400 text-white dark:text-black" 
                          : "bg-black dark:bg-amber-500 text-white dark:text-black"
                      }`}>
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <span className="text-gray-800 dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  size="lg"
                  className={`w-full font-extrabold text-base py-6 uppercase tracking-wide ${
                    tier.mostPopular
                      ? "bg-black text-white dark:bg-amber-500 dark:text-black hover:bg-gray-800 dark:hover:bg-amber-400 border-2 border-black dark:border-amber-500"
                      : "bg-amber-500 text-black dark:bg-black dark:text-white hover:bg-amber-400 dark:hover:bg-gray-800 border-2 border-amber-500 dark:border-black"
                  }`}
                  aria-label={`${tier.cta} with ${tier.name} plan at ${tier.price} per month`}
                  disabled={tier.disabled}
                >
                  {tier.cta}
                </Button>
                
                {/* Money-back guarantee note - Brooklyn style */}
                {!tier.disabled && (
                  <div className="text-center mt-6 transform -rotate-2">
                    <div className="inline-block bg-black dark:bg-amber-500 text-white dark:text-black px-4 py-1 text-sm font-bold shadow-md">
                      14-day money-back guarantee
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <div className="bg-black dark:bg-amber-500 text-white dark:text-black px-6 py-3 transform -rotate-1 shadow-md max-w-md text-center">
              <p className="font-bold">
                Need a custom solution? <a href="mailto:info@postrack.co" className="underline decoration-2 underline-offset-4 hover:text-amber-300 dark:hover:text-amber-800 transition-colors">Reach out to our team</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}