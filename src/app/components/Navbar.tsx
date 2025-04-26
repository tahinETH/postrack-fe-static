"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-6">
      <div className="relative flex w-full max-w-7xl mx-auto flex-col items-center rounded-lg border border-[#212121] bg-[#0d0d0de6] p-3 lg:flex-row">
        <div className="absolute inset-0 -z-10 rounded-xl" style={{backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)"}}></div>
        <div className="relative flex h-8 w-full items-center justify-between gap-5 lg:flex-row">
          <div className="flex items-center justify-center">
            <Link 
              href="/" 
              className="transition-all duration-150"
              aria-label="Postrack home page"
            >
              <div className="flex items-center justify-between">
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-black dark:bg-amber-200 p-1 rounded-sm mr-2"
                >
                  <Image
                    src="/favicon.ico"
                    alt="Postrack Logo"
                    width={24}
                    height={24}
                    role="presentation"
                    className="transition-transform group-hover:scale-110"
                  />
                </motion.div>
                <div className="text-xl font-bold tracking-tight text-white">POSTRACK</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation links */}
          <div className="absolute left-1/2 hidden h-full -translate-x-1/2 transform items-center gap-6 text-sm lg:flex">
            <div className="relative h-full w-fit">
              <Link href="/#pricing" className="relative flex h-full items-center gap-1.5 text-sm text-[#9C9C9D] hover:text-amber-300">
                Pricing
              </Link>
            </div>
            <div className="relative h-full w-fit">
              <Link href="/#ai-workshop" className="relative flex h-full items-center gap-1.5 text-sm text-[#9C9C9D] hover:text-amber-300">
                AI Workshop
              </Link>
            </div>
            <div className="relative h-full w-fit">
              <Link href="/#account-analysis" className="relative flex h-full items-center gap-1.5 text-sm text-[#9C9C9D] hover:text-amber-300">
                Account Analysis
              </Link>
            </div>
            <div className="relative h-full w-fit">
              <Link href="/#monitor-virality" className="relative flex h-full items-center gap-1.5 text-sm text-[#9C9C9D] hover:text-amber-300">
                Monitor Virality
              </Link>
            </div>
            <div className="relative h-full w-fit">
              <Link href="/#faq" className="relative flex h-full items-center gap-1.5 text-sm text-[#9C9C9D] hover:text-amber-300">
                FAQ
              </Link>
            </div>
          </div>
          
          
          <div className="hidden grow flex-row items-center justify-end md:grow-0 lg:flex">
            <Link 
              href="https://app.postrack.ai" 
              target="_blank"
              className="transition-all duration-150"
              aria-label="Go to Postrack application"
            >
              <div className="ml-1 hidden h-8 w-28 items-center justify-center rounded-lg bg-amber-200 hover:bg-amber-300 sm:flex">
                <p className="text-sm font-semibold tracking-tight text-black">Go To App</p>
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex grow items-center justify-end lg:hidden">
            <button
              type="button"
              className="focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open main menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu" 
            className="md:hidden bg-[#0d0d0de6] border border-[#212121] shadow-lg fixed inset-0 top-[73px] z-40 overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)"}}
          >
            <motion.div 
              className="space-y-1 px-6 py-8 divide-y divide-gray-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="py-6">
                <Link
                  href="/plans"
                  className="block rounded-md px-3 py-4 text-lg font-medium text-[#9C9C9D] hover:text-amber-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/workshop"
                  className="block rounded-md px-3 py-4 text-lg font-medium text-[#9C9C9D] hover:text-amber-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AI Workshop
                </Link>
                <Link
                  href="/account-analysis"
                  className="block rounded-md px-3 py-4 text-lg font-medium text-[#9C9C9D] hover:text-amber-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Account Analysis
                </Link>
                <Link
                  href="/monitor-virality"
                  className="block rounded-md px-3 py-4 text-lg font-medium text-[#9C9C9D] hover:text-amber-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Monitor Virality
                </Link>
                <Link
                  href="/faq"
                  className="block rounded-md px-3 py-4 text-lg font-medium text-[#9C9C9D] hover:text-amber-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>
              
              <div className="py-6">
                <Button 
                  asChild 
                  className="w-full mt-2 bg-amber-200 text-black hover:bg-amber-300 max-w-[120px] mx-auto text-sm h-auto font-bold tracking-wide"
                >
                  <Link 
                    href="https://app.postrack.ai"
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