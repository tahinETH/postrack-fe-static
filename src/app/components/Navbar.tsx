"use client"

import * as React from "react"
import Link from "next/link"
import { Menu} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"





export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <nav className="container mx-auto flex items-center justify-between p-4 bg-transparent" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Postrack</span>
            <Image
              src="/favicon.ico"
              alt="Postrack Logo"
              width={24}
              height={24}
            />
            <div className="text-xl font-normal mt-1">Postrack</div>
          </Link>
        </div>
        
        <div className="justify-end">
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="https://app.postrack.co">Go To App</Link>
          </Button>
        </div>
      </nav>
   
      
    </header>
  )
}

