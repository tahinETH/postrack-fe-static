import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "For creators serious about optimizing their content strategy.",
    features: [
      "Track 1 account",
      "Max 50,000 followers",
      "Real-time first-hour analytics",
      "Full lifespan data for posts",
      "AI-powered insights",
    ],
    cta: "Subscribe",
    mostPopular: true,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For teams and agencies managing multiple accounts.",
    features: [
      "All Starter Features",
      "Max 250,000 followers",
      "5 individual post tracking",
      "Cross Post AI Analysis",
      "AI Post Generator",
    ],
    cta: "Subscribe",
    mostPopular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-radial max-w-[1000px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that's right for you and start optimizing your content strategy today.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col p-8 rounded-lg shadow-lg w-full max-w-[400px] ${
                tier.mostPopular ? "bg-tertiary text-white ring-2 ring-tertiary" : "bg-card text-card-foreground"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <div className="text-4xl font-bold mb-6">{tier.price}</div>
              <p className="text-sm mb-6">{tier.description}</p>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-3">
                    <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className={`w-full ${
                  tier.mostPopular
                    ? "bg-white text-tertiary hover:bg-gray-100"
                    : "bg-tertiary text-white hover:bg-tertiary/90"
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
