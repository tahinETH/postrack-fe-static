"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false)
    }
  }

  // Close menu when route changes or on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm transition-all">
      <div className="container mx-auto px-4">
        <nav 
          className="flex items-center justify-between p-4 bg-transparent" 
          aria-label="Main navigation"
          onKeyDown={handleKeyDown}
        >
          <div className="flex lg:flex-1">
            <Link 
              href="/" 
              className="-m-1.5 p-1.5 flex items-center gap-2 transition-opacity hover:opacity-90 group"
              aria-label="Postrack home page"
            >
              <motion.div 
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/favicon.ico"
                  alt=""
                  width={24}
                  height={24}
                  role="presentation"
                  className="transition-transform group-hover:scale-110"
                />
              </motion.div>
              <div className="text-xl font-normal mt-1">Postrack</div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open main menu'}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/plans" 
              className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 rounded-md px-2 py-1 animated-underline"
            >
              Plans
            </Link>
            <Button 
              asChild 
              className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-md hover:shadow-lg transition-all"
            >
              <Link href="https://app.postrack.co" aria-label="Go to Postrack application">
                Go To App
              </Link>
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu" 
            className="md:hidden bg-white shadow-lg fixed inset-0 top-[73px] z-40 overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="space-y-1 px-6 py-8 divide-y divide-gray-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="py-6">
                <Link
                  href="/plans"
                  className="block rounded-md px-3 py-4 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plans
                </Link>
              </div>
              
              <div className="py-6">
                <Button 
                  asChild 
                  className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-700 py-6 text-lg h-auto"
                >
                  <Link 
                    href="https://app.postrack.co"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Go to Postrack application"
                  >
                    Go To App
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}