import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-tertiary/60 text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-tertiary">Stop Publishing Blindly. Start Engineering Virality.</h2>
          <p className="text-xl mb-8 opacity-90">
          Postrack gives you the tools to dominate X’s golden hour and exploit long-tail engagement. Stop leaving virality to chance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group bg-tertiary text-white hover:bg-tertiary">
              <a href="https://app.postrack.co">
                Start My 14-Day Virality Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              <a href="#case-study">See Case Study: 0→250k Views in 1 Hour</a>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">14-day audit. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}

