"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride, December 2024",
    content: "Ananya made my wedding day absolutely magical. The bridal makeup was flawless and lasted throughout the entire celebration. I received so many compliments!",
    rating: 5,
  },
  {
    name: "Kavitha Reddy",
    role: "Bride, October 2024",
    content: "The pre-bridal package transformed my skin completely. The team understood exactly what I wanted and exceeded all my expectations. Truly a luxury experience.",
    rating: 5,
  },
  {
    name: "Anjali Menon",
    role: "Bride, November 2024",
    content: "From the moment I walked in, I felt like royalty. The attention to detail, the premium products, and the skilled artists made me look and feel beautiful on my special day.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Regular Client",
    content: "I&apos;ve been coming to Ananya for over a year now. The hair spa treatments have completely transformed my hair. The ladies-only environment is so comfortable and relaxing.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-[#111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">
            What Our Clients Say
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] mt-4 mb-6">
            Client <span className="text-[#C9A84C]">Testimonials</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main testimonial */}
          <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 md:p-12 relative">
            {/* Quote icon */}
            <div className="absolute -top-4 left-8 text-[#C9A84C] text-6xl font-serif leading-none">
              &ldquo;
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center md:justify-start">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-[#C9A84C] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#F5F0E8] text-lg md:text-xl leading-relaxed mb-8 text-center md:text-left font-serif italic"
              >
                {testimonials[activeIndex].content}
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center md:justify-start gap-4"
              >
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C96A] flex items-center justify-center text-[#0a0a0a] font-serif text-xl">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#F5F0E8] font-medium">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-[#C9A84C] text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Closing quote */}
            <div className="absolute -bottom-4 right-8 text-[#C9A84C] text-6xl font-serif leading-none rotate-180">
              &ldquo;
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#C9A84C] w-6"
                      : "bg-[#2a2a2a] hover:bg-[#C9A84C]/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}
