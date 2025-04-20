"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"


interface LazyVideoProps {
  src: string
  activeIndex: number
}

const LazyVideo = ({ src, activeIndex }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  

  // Generate poster image path from video src
  const getPosterImage = (videoSrc: string) => {
    if (videoSrc.endsWith('.mp4')) {
      return videoSrc.replace('.mp4', '-poster.png')
    }
    return videoSrc
  }

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
      setIsPlaying(false)
    }
  }, [activeIndex])

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Video play failed:', err))
    }
  }

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
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              loop
              muted
              playsInline
              poster={getPosterImage(src)}
              className={`object-cover rounded-lg w-full h-auto ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 0.3s ease-in-out' }}
              width={800}
              height={600}
            />
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg cursor-pointer"
                onClick={handlePlayVideo}
              >
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <Play className="h-8 w-8 text-black ml-1" />
                </div>
              </div>
            )}
          </div>
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
        alt="Feature showcase for Postrack"
        width={600}
        height={400}
        className="object-cover rounded-lg shadow-2xl"
      />
    </div>
  )
}

export default LazyVideo