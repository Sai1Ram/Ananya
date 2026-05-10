"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#C9A84C] to-transparent" />

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
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] mt-4 mb-6">
            Book Your <span className="text-[#C9A84C]">Appointment</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-6" />
          <p className="text-[#a8a8a8] max-w-xl mx-auto">
            Ready to experience luxury beauty care? Book your appointment today via WhatsApp 
            or visit us at our spa.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* WhatsApp Booking */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#2a2a2a] p-6 sm:p-8 text-center group hover:border-[#C9A84C] transition-all duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors duration-300">
              <WhatsAppIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#25D366]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E8] mb-2 sm:mb-3">
              Book via WhatsApp
            </h3>
            <p className="text-[#a8a8a8] text-sm sm:text-base mb-4 sm:mb-6">
              Quick and easy booking through WhatsApp. {"We'll"} respond within minutes!
            </p>
            <Link
              href="https://wa.me/918280086186?text=Hello! I would like to book an appointment at Ananya Ladies Beauty Spa."
              target="_blank"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              Chat Now
            </Link>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#2a2a2a] p-6 sm:p-8 text-center group hover:border-[#C9A84C] transition-all duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-[#f09433]/10 via-[#e6683c]/10 to-[#bc1888]/10 flex items-center justify-center">
              <InstagramIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#E1306C]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E8] mb-2 sm:mb-3">
              Follow Us
            </h3>
            <p className="text-[#a8a8a8] text-sm sm:text-base mb-4 sm:mb-6">
              See our latest work, bridal transformations, and beauty inspiration
            </p>
            <Link
              href="https://www.instagram.com/ananyabeautyspa"
              target="_blank"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="truncate">@ananyabeautyspa</span>
            </Link>
          </motion.div>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-6 border border-[#2a2a2a] bg-[#111]"
          >
            <LocationIcon className="w-8 h-8 text-[#C9A84C] mx-auto mb-4" />
            <h4 className="text-[#F5F0E8] font-medium mb-2">Our Location</h4>
            <p className="text-[#a8a8a8] text-sm">
              Kamapalli Main Rd, Natabar Nagar 2<br />
              Kamapalli, Brahmapur, Odisha 760004
            </p>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 border border-[#2a2a2a] bg-[#111]"
          >
            <ClockIcon className="w-8 h-8 text-[#C9A84C] mx-auto mb-4" />
            <h4 className="text-[#F5F0E8] font-medium mb-2">Working Hours</h4>
            <p className="text-[#a8a8a8] text-sm">
              Sunday - Saturday: 10:30 AM - 9:00 PM<br />
              (Everyday)
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 border border-[#2a2a2a] bg-[#111]"
          >
            <PhoneIcon className="w-8 h-8 text-[#C9A84C] mx-auto mb-4" />
            <h4 className="text-[#F5F0E8] font-medium mb-2">Call Us</h4>
            <p className="text-[#a8a8a8] text-sm">
              Office: +91 8280086186<br />
              Owner: +91 7008499542
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}
