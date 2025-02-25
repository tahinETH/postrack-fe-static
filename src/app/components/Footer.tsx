"use client"

import { Mail, MessageSquare, Twitter, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  // Navigation links for the footer
  const footerLinks = {
    product: [
      { name: "Features", href: "/#features" },
      { name: "Pricing", href: "/plans" },
      { name: "FAQ", href: "/#faq" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    company: [
      { name: "About", href: "#" }, // Add actual links as they become available
      { name: "Blog", href: "#" },
    ],
  }

  // Social media links
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/in/", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/", icon: Github },
  ]

  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t border-gray-200" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-tertiary transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-tertiary transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-tertiary transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  aria-label={`Follow us on ${social.name}`}
                  className="text-gray-500 hover:text-tertiary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary rounded-full p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <a
                href="mailto:info@postrack.co"
                className="flex items-center gap-2 text-gray-600 hover:text-tertiary transition-colors focus-visible:outline-none focus-visible:underline"
              >
                <Mail className="h-5 w-5" />
                info@postrack.co
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="text-center md:text-left text-sm text-gray-500">
            © {currentYear} Postrack. All rights reserved.
          </div>
          
          <Button 
            data-tally-open="wvdrQv" 
            data-tally-emoji-text="👋" 
            data-tally-emoji-animation="wave"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 self-center md:self-auto"
          >
            <MessageSquare className="h-4 w-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </footer>
  )
}
