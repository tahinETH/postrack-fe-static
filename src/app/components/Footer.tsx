"use client"


import {  Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background pt-16 pb-12 border-t border-border">
      <div className="container mx-auto px-4">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, GitHub].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div> 
        <Separator className="mb-8" />*/}
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@postrack.co">info@postrack.co</a>
          </div>
          
          <Button 
            data-tally-open="wvdrQv" 
            data-tally-emoji-text="👋" 
            data-tally-emoji-animation="wave"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            Contact Us
          </Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">© {currentYear} Postrack. All rights reserved.</div>
      </div>
    </footer>
  )
}
