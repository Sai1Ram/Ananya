"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const galleryImages = [
  { id: 1, span: "col-span-1 row-span-2" },
  { id: 2, span: "col-span-1 row-span-1" },
  { id: 3, span: "col-span-1 row-span-1" },
  { id: 4, span: "col-span-1 row-span-1" },
  { id: 5, span: "col-span-1 row-span-2" },
  { id: 6, span: "col-span-1 row-span-1" },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-[#111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">
            Our Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] mt-4 mb-6">
            Beauty <span className="text-[#C9A84C]">Gallery</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${image.span} relative group overflow-hidden border border-[#2a2a2a]`}
            >
              {/* Placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#111]">
                {/* Decorative pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#C9A84C]/10 font-serif text-6xl">✦</div>
                </div>
                
                {/* Image placeholder text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#a8a8a8] opacity-50 group-hover:opacity-0 transition-opacity duration-300">
                  <CameraIcon className="w-8 h-8 mb-2" />
                  <span className="text-xs">Bridal Look {image.id}</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[#F5F0E8] font-serif text-lg">Bridal Elegance</p>
                  <p className="text-[#C9A84C] text-sm">View Details</p>
                </div>
              </div>

              {/* Zoom effect indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#C9A84C] text-[#0a0a0a] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIcon className="w-4 h-4" />
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Gallery CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#a8a8a8] mb-6">
            Explore our complete gallery of happy customers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/gallery"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0a0a0a] hover:bg-[#E8C96A] transition-all duration-300 group"
            >
              <span className="font-medium tracking-wide">View Full Gallery</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ananyabeautyspa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-colors duration-300"
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="font-medium">@ananyabeautyspa</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ZoomIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}
