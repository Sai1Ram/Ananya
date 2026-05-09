"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { X } from "lucide-react"

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "bridal", name: "Bridal" },
  { id: "makeup", name: "Makeup" },
  { id: "hair", name: "Hair" },
  { id: "skincare", name: "Skincare" },
]

const galleryItems = [
  {
    id: 1,
    category: "bridal",
    title: "Traditional Bridal Makeup",
    description: "Beautiful bridal makeup with traditional jewelry",
    image: "/gallery/bridal-1.jpg",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    category: "bridal",
    title: "Radiant Bridal Look",
    description: "Elegant bridal makeover with perfect glow",
    image: "/gallery/bridal-2.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    category: "makeup",
    title: "Party Glam",
    description: "Stunning party makeup look",
    image: "/gallery/makeup-1.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    category: "hair",
    title: "Bridal Hairstyle",
    description: "Intricate bridal hair bun with flowers",
    image: "/gallery/hair-1.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    category: "bridal",
    title: "Mehndi Design",
    description: "Beautiful bridal mehndi artwork",
    image: "/gallery/bridal-3.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    category: "makeup",
    title: "HD Makeup",
    description: "Professional HD makeup application",
    image: "/gallery/makeup-2.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    category: "hair",
    title: "Keratin Treatment",
    description: "Silky smooth hair after keratin treatment",
    image: "/gallery/hair-2.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 8,
    category: "skincare",
    title: "Luxury Facial",
    description: "Relaxing facial treatment at our spa",
    image: "/gallery/skincare-1.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 9,
    category: "skincare",
    title: "Glowing Skin",
    description: "Radiant skin after facial treatment",
    image: "/gallery/skincare-2.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 10,
    category: "makeup",
    title: "Engagement Look",
    description: "Elegant engagement makeup",
    image: "/gallery/engagement-1.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    id: 11,
    category: "skincare",
    title: "Nail Art",
    description: "Beautiful manicure with nail art",
    image: "/gallery/manicure-1.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 12,
    category: "bridal",
    title: "Our Salon",
    description: "Premium salon ambiance",
    image: "/gallery/salon-1.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A84C]/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-medium">
                Our Work
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
            </motion.div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] mb-6">
              Happy Customers{" "}
              <span className="text-[#C9A84C]">Gallery</span>
            </h1>
            
            <p className="text-[#a8a8a8] max-w-2xl mx-auto text-lg">
              Explore our collection of stunning transformations. Every face tells a story of beauty, 
              confidence, and the magic touch of our expert beauticians.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-[#C9A84C] text-[#0a0a0a] border-[#C9A84C]"
                    : "text-[#a8a8a8] border-[#2a2a2a] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`${item.span} relative group cursor-pointer overflow-hidden border border-[#2a2a2a]`}
                  onClick={() => setSelectedImage(item)}
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-[#0a0a0a]/80 border border-[#C9A84C]/30 text-[#C9A84C] text-xs tracking-wider uppercase">
                    {item.category}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[#F5F0E8] font-serif text-lg mb-1">{item.title}</p>
                      <p className="text-[#a8a8a8] text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* View button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#C9A84C] text-[#0a0a0a] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border border-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[80vh] bg-[#111] border border-[#2a2a2a] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/80 border border-[#C9A84C]/30 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/3] bg-[#111]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info bar */}
              <div className="p-6 border-t border-[#2a2a2a]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs tracking-wider uppercase mb-3">
                      {selectedImage.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#F5F0E8] mb-2">{selectedImage.title}</h3>
                    <p className="text-[#a8a8a8]">{selectedImage.description}</p>
                  </div>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-6 py-3 bg-[#C9A84C] text-[#0a0a0a] font-medium hover:bg-[#E8C96A] transition-all duration-300"
                  >
                    Book Similar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-4">
              Want to See More?
            </h2>
            <p className="text-[#a8a8a8] mb-8 max-w-xl mx-auto">
              Follow us on Instagram for daily beauty inspiration, behind-the-scenes looks, 
              and the latest transformations from our salon.
            </p>
            <a
              href="https://www.instagram.com/ananyabeautyspa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-medium hover:opacity-90 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @ananyabeautyspa
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a0a0a] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Brides" },
              { number: "2000+", label: "Makeovers" },
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Services Offered" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-serif text-4xl md:text-5xl text-[#C9A84C] mb-2">{stat.number}</p>
                <p className="text-[#a8a8a8] text-sm tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
