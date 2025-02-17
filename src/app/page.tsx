// app/page.tsx
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import Features from "./components/Features"
import CTASection from "./components/CTASection"
import FAQSection from "./components/FAQ"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"
// Force static rendering for maximum speed.
export const dynamic = "force-static"
// (You can also do: export const revalidate = 86400; to re-gen once/day.)

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen ">
      {/* 
        Each section is a simple, static React server component 
        with minimal or no additional client-side code. 
      */}
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <CTASection />
      <FAQSection />
      <Pricing />
      <Footer />
    </main>
  )
}
