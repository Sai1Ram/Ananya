"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import BookingModal from "@/components/booking-modal"

function Particle({ delay, left }: { delay: number; left: number }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C96A]"
      style={{ left: `${left}%`, bottom: "-10px" }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [-10, -800],
        opacity: [0, 1, 1, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}

export default function HeroSection() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [particles, setParticles] = useState<{ id: number; delay: number; left: number }[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      left: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E8C96A]/5 rounded-full blur-3xl" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <Particle key={particle.id} delay={particle.delay} left={particle.left} />
        ))}
      </div>



      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-8"
        />

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6"
        >
          <span className="shimmer-text">Ananya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[#C9A84C] text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
        >
          Ladies Beauty Spa
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif text-[#F5F0E8] text-2xl md:text-3xl lg:text-4xl italic mb-8"
        >
          Where Every Woman is a Bride
        </motion.p>

        {/* Decorative stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <StarIcon className="w-4 h-4 text-[#C9A84C]" />
          <StarIcon className="w-6 h-6 text-[#E8C96A]" />
          <StarIcon className="w-4 h-4 text-[#C9A84C]" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#0a0a0a] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#E8C96A] transition-all duration-300 hover:scale-105 gold-glow"
          >
            <CalendarIcon className="w-6 h-6" />
            Book an Appointment
          </button>
        </motion.div>

        {/* Booking Modal */}
        <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
      </div>

      {/* Scroll indicator - positioned outside content div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#C9A84C]/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="flex flex-col items-center gap-1">
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-4 bg-gradient-to-b from-[#C9A84C] to-transparent"
            />
            <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
