"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ImageWithLoaderProps extends Omit<ImageProps, 'onLoad'> {
  wrapperClassName?: string
}

export default function ImageWithLoader({ 
  wrapperClassName = "",
  className = "",
  alt,
  ...props 
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative ${wrapperClassName}`}>
      {/* Loading skeleton */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center z-10"
          >
            <div className="flex flex-col items-center gap-3">
              {/* Shimmer effect */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent"
                />
              </div>
              
              {/* Spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-8 h-8 border-2 border-[#C9A84C]/20 border-t-[#C9A84C] rounded-full"
              />
              
              {/* Loading text */}
              <span className="text-[#666] text-xs tracking-wider">Loading</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual image */}
      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
