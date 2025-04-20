"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface LazyVideoProps {
  src: string
  activeIndex: number
}

const LazyVideo = ({ src, activeIndex }: LazyVideoProps) => {
  // Generate poster image path from video src
  const getPosterImage = (videoSrc: string) => {
    if (videoSrc.endsWith('.mp4')) {
      return videoSrc.replace('.mp4', '-poster.png')
    }
    return videoSrc
  }

  if (!src) return null

  // Determine if we're showing video or image
  const isVideo = src.endsWith('.mp4')
  
  // For videos, use the poster image instead
  const imageSrc = isVideo ? getPosterImage(src) : src

  return (
    <div className="relative w-full">
      <Link href="https://app.postrack.ai/example">
        <Image
          src={imageSrc}
          alt="Feature showcase for Postrack"
          width={800}
          height={600}
          className="object-cover rounded-lg w-full h-auto shadow-2xl"
        />
      </Link>
    </div>
  )
}

export default LazyVideo