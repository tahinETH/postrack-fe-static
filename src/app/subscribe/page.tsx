import Pricing from "../components/Pricing"
import Navbar from "../components/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Postrack - AI Copilot and Analytics for X",
    description: "Get full access to Postrack's powerful X analytics, AI content generation, and competitor tracking features with one simple, affordable plan.",
    openGraph: {
      title: "Postrack Pricing",
      description: "Simple, all-access pricing for Postrack's X optimization suite.",
    },
    twitter: {
      title: "Postrack Pricing",
      description: "Simple, all-access pricing for Postrack's X optimization suite.",
    }
  }
export default function PricingPage() {
    return (
        <div>
            <Navbar />
            <Pricing />
        </div>
    )
}
