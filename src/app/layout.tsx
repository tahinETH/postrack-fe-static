// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import Script from 'next/script'

// Optional: Basic SEO metadata
export const metadata: Metadata = {
  title: "Postrack: Crack X's Algorithm",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://unpkg.com/react-scan/dist/auto.global.js" />
        <Script async src="https://tally.so/widgets/embed.js"></Script>


      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
