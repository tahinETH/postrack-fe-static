"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface LazyVideoProps {
  src: string
  activeIndex: number
}

const LazyVideo = ({ src, activeIndex }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)

  // Decide whether to load the video
  useEffect(() => {
    // Use setTimeout to defer loading slightly for better performance
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [activeIndex])

  // Handle video loading
  useEffect(() => {
    if (!videoRef.current || !shouldLoad) return

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    videoRef.current.addEventListener('loadeddata', handleLoadedData)
    
    return () => {
      videoRef.current?.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [shouldLoad])

  // Reset video when changing slides
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(err => console.log('Video play failed:', err))
    }
  }, [activeIndex])

  if (!src) return null

  // Determine if we're showing video or image
  const isVideo = src.endsWith('.mp4')

  if (isVideo) {
    return (
      <div className="relative w-full">
        {(!isLoaded && shouldLoad) && (
          <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg absolute top-0 left-0" />
        )}
        {shouldLoad && (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className={`object-cover rounded-lg shadow-2xl w-full h-auto ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.3s ease-in-out' }}
            width={800}
            height={600}
          />
        )}
        {!shouldLoad && (
          <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" />
        )}
      </div>
    )
  }

  // Handle images
  return (
    <div className="relative w-full">
      <Image
        src={src}
        alt="Feature showcase"
        width={600}
        height={400}
        className="object-cover rounded-lg shadow-2xl"
        loading="lazy"
      />
    </div>
  )
}

export default LazyVideo