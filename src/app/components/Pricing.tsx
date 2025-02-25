import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import Footer from "./Footer"

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
    icon: <Zap className="h-6 w-6" />,
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
    icon: <Zap className="h-6 w-6" />,
  },
]

export default function PricingSection() {
  return (
    <>
      <section 
        id="pricing" 
        aria-labelledby="pricing-heading"
        className="py-20 from-white to-gray-50 max-w-[1200px] mx-auto"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              id="pricing-heading" 
              className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600"
            >
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that's right for you and start optimizing your content strategy today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 place-items-center">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-8 rounded-2xl shadow-xl w-full max-w-[420px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  tier.mostPopular 
                    ? "bg-gradient-to-br from-tertiary to-blue-700 text-white border-2 border-blue-400" 
                    : "bg-white text-card-foreground border border-gray-200"
                }`}
              >
                {tier.mostPopular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-300 px-6 py-1.5 rounded-full text-tertiary text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-full ${tier.mostPopular ? "bg-white/20" : "bg-tertiary/10"}`}>
                    {tier.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${tier.mostPopular ? "text-white" : "text-tertiary"}`}>{tier.name}</h3>
                </div>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-extrabold">{tier.price}</span>
                  <span className="ml-2 text-sm opacity-90">{tier.period}</span>
                </div>
                
                <p className="text-sm mb-8 opacity-90">{tier.description}</p>
                
                <ul className="mb-8 flex-grow space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check 
                        className={`h-5 w-5 mr-3 flex-shrink-0 ${
                          tier.mostPopular ? "text-yellow-300" : "text-tertiary"
                        }`} 
                        aria-hidden="true"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  size="lg"
                  className={`w-full font-bold text-base py-6 ${
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
         {/*  
          <div className="mt-16 text-center p-8 bg-indigo-50 rounded-xl max-w-3xl mx-auto border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Need a custom solution?</h3>
            <p className="text-gray-600 mb-4">
              For agencies and enterprises with specific requirements, we offer tailored plans.
            </p>
            <Button variant="outline" className="bg-white hover:bg-gray-100 border-gray-300">
              Contact Us
            </Button>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  )
}