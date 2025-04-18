// app/layout.tsx
import "./globals.css"
import type { Metadata, Viewport } from "next"
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


// Load Inter font with specific subsets


// OpenGraph and Twitter Card Images
const ogImageUrl = "/og-image.jpg" // Create this 1200×630px image for social sharing

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#475ded",
}

// Improved SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://postrack.ai"), // Update with your actual domain
  title: {
    template: "%s | Postrack",
    default: "Postrack: Optimize X Engagement",
  },
  description: "Track any account or post on X. Postrack analyzes successful accounts and reverse-engineers viral posts to help you optimize your X content strategy.",
  keywords: [
    "X analytics", 
    "Twitter analytics", 
    "viral posts", 
    "social media tracking", 
    "engagement tracking", 
    "content strategy",
    "first hour analytics",
    "golden hour tracking",
    "X algorithm",
    "viral content"
  ],
  authors: [{ name: "Postrack Team" }],
  creator: "Postrack",
  publisher: "Postrack",
  applicationName: "Postrack",
  
  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://postrack.ai",
    title: "Postrack: Optimize X Engagement",
    description: "Track any account or post on X. Postrack helps you analyze successful accounts and reverse-engineer viral posts.",
    siteName: "Postrack",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Postrack - X Analytics Tool"
      }
    ]
  },
  
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Postrack: Optimize X Engagement",
    description: "Track any account or post on X. Postrack helps you analyze successful accounts and reverse-engineer viral posts.",
    creator: "@postrack", // Update with your actual X handle
    images: [ogImageUrl],
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://postrack.ai",
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' }
    ],
  },
  
  // Verification tags
  verification: {
    // google: "your-google-site-verification-id", // Add if you have one
    // yandex: "your-yandex-verification-id", // Add if you have one
  },
  
  // App information
  manifest: "/manifest.json", // Create this for PWA support
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className + " dark"}>
      <head>
        <Script async src="https://tally.so/widgets/embed.js"></Script>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#475ded" />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Skip to content link for keyboard accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        
        {/* Main content wrapper */}
        <main id="main-content" className={`flex-grow flex flex-col`} >
          {children}
        </main>
        
        {/* Accessibility announcement region for screen readers */}
        <div 
          className="sr-only" 
          role="status" 
          aria-live="polite" 
          id="a11y-status"
        ></div>
      </body>
    </html>
  )
}