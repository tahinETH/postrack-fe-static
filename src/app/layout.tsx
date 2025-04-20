// app/layout.tsx
import "./globals.css"
import type { Metadata, Viewport } from "next"
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

// Declare dataLayer on the Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void; // Also declare gtag if used directly
  }
}

// Load Inter font with specific subsets


// OpenGraph and Twitter Card Images
const ogImageUrl = "/og-image-homepage.jpg" // Create this 1200×630px image for social sharing

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#475ded",
}


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Postrack",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "55"
  },
  "offers": {
    "@type": "Offer",
    "price": "30",
    "priceCurrency": "USD",
    "url": "https://postrack.ai/subscribe"
  },
  "description": "AI Copilot and Analytics for X. Track engagement, analyze competitors, and generate viral-ready content.",
  "url": "https://postrack.ai",
  "potentialAction": {
        "@type": "Action",
        "target": "https://app.postrack.ai",
        "name": "Go to App"
   }
};

export const metadata: Metadata = {
  metadataBase: new URL("https://postrack.ai"), // Update with your actual domain
  title: {
    template: "%s | Postrack",
    default: "Postrack: Optimize X Engagement",
  },
  description: "Track any account or post on X. Postrack analyzes successful accounts and reverse-engineers viral posts to help you optimize your X content strategy.",
  keywords: [
    "X analytics",
    "AI for X",
    "X tracking tool",
    "first hour analytics X",
    "X competitor analysis",
    "viral post tracking X",
    "X growth tool",
    "AI content generation X",
    "X performance metrics",
    "Twitter analytics", // Keep for search volume
    "X engagement tracking",
    "golden hour tracking X",
    "understand X algorithm",
    "X AI copilot",
    "reverse engineer X success",
    "X content strategy tool",
    "improve X posts"
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
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YZC4ZVZSD8"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YZC4ZVZSD8');
        `}} />
        <Script async src="https://tally.so/widgets/embed.js"></Script>
        <Script id="software-schema" type="application/ld+json">
      {JSON.stringify(softwareSchema)}
    </Script>
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