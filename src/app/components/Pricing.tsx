import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "per month",
    description: "For creators serious about optimizing their content strategy.",
    features: [
      "Track 1 account",
      "Max 50,000 followers",
      "Real-time first-hour analytics",
      "Full lifespan data for posts",
      "AI-powered insights",
    ],
    cta: "Get Started",
    mostPopular: true,
  },
  {
    name: "Pro",
    price: "$99",
    period: "per month",
    description: "For teams and agencies managing multiple accounts.",
    features: [
      "All Starter Features",
      "Max 250,000 followers",
      "5 individual post tracking",
      "Cross Post AI Analysis",
      "AI Post Generator",
    ],
    cta: "Get Started",
    mostPopular: false,
  },
]

export default function PricingSection() {
  return (
    <section 
      id="pricing" 
      aria-labelledby="pricing-heading"
      className="py-20 bg-gradient-radial max-w-[1000px] mx-auto"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="pricing-heading" 
            className="text-3xl font-bold mb-4"
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you and start optimizing your content strategy today.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-lg shadow-lg w-full max-w-[400px] hover:shadow-xl transition-shadow duration-300 ${
                tier.mostPopular 
                  ? "bg-tertiary text-white ring-2 ring-tertiary" 
                  : "bg-card text-card-foreground"
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-300 px-4 py-1 rounded-full text-tertiary text-sm font-medium shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="ml-2 text-sm opacity-90">{tier.period}</span>
              </div>
              
              <p className="text-sm mb-6 opacity-90">{tier.description}</p>
              
              <ul className="mb-8 flex-grow space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check 
                      className={`h-5 w-5 mr-3 flex-shrink-0 ${
                        tier.mostPopular ? "text-white" : "text-tertiary"
                      }`} 
                      aria-hidden="true"
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                size="lg"
                className={`w-full ${
                  tier.mostPopular
                    ? "bg-white text-tertiary hover:bg-gray-100 focus:ring focus:ring-white/50"
                    : "bg-tertiary text-white hover:bg-tertiary/90 focus:ring focus:ring-tertiary/30"
                }`}
                aria-label={`${tier.cta} with ${tier.name} plan at ${tier.price} per month`}
              >
                {tier.cta}
              </Button>
              
              {/* Money-back guarantee note */}
              <p className="text-xs text-center mt-4 opacity-80">
                14-day money-back guarantee
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need custom enterprise solutions? <a href="#" className="text-tertiary underline hover:text-tertiary/90 focus:outline-none focus:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  )
}