"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"
import {
  Sparkles, Crown, Droplets, Waves, CircleDot, Scissors, Gem,
  Heart, Star, Flower2, Sun, Moon, Palette, Brush, Eye, Smile
} from "lucide-react"
import Link from "next/link"

const serviceCategories = [
  {
    title: "Hair Cuts & Styling",
    description: "Expert haircuts and styling to enhance your natural beauty",
    services: [
      { icon: Scissors, name: "Hair Cut", description: "Professional haircuts tailored to your face shape and style", popular: false },
      { icon: Brush, name: "Hair Styling", description: "Creative styling for weddings, parties, and everyday looks", popular: false },
      { icon: Droplets, name: "Blow Dry", description: "Professional blow-drying with styling products for perfect finish", popular: false },
      { icon: Palette, name: "Global Color", description: "Vibrant color transformation with premium international brands", popular: true },
      { icon: Star, name: "Root Touch Up", description: "Professional root coloring to maintain your desired color", popular: false },
      { icon: Sparkles, name: "Highlight Color", description: "Stylish highlights and lowlights for dimensional beauty", popular: true },
      { icon: Droplets, name: "Shampoo & Conditioning", description: "Professional cleansing and conditioning treatments", popular: false },
      { icon: Heart, name: "Head Massage", description: "Relaxing head massage to rejuvenate and relieve tension", popular: false },
      { icon: Flower2, name: "Hair Spa", description: "Deep conditioning hair spa for nourished, glossy hair", popular: false },
    ]
  },
  {
    title: "Hair Texture Services",
    description: "Transform your hair texture with advanced treatments",
    services: [
      { icon: Waves, name: "Keratin", description: "Professional keratin treatment for silky, frizz-free hair lasting 3-6 months", popular: true },
      { icon: Brush, name: "Botox", description: "Hair botox treatment for repair and smoothing of damaged hair", popular: true },
      { icon: Waves, name: "Smoothening", description: "Chemical smoothening for permanently smooth, manageable hair", popular: false },
      { icon: Scissors, name: "Straightening", description: "Professional hair straightening for sleek, straight locks", popular: false },
      { icon: Droplets, name: "Nani Plastic", description: "Advanced nano plastic treatment for ultra-smooth, shiny hair", popular: false },
    ]
  },
  {
    title: "Hair Treatments",
    description: "Specialized treatments for healthy, beautiful hair",
    services: [
      { icon: Droplets, name: "Spa Treatment", description: "Intensive hair spa with premium serums and oils", popular: true },
      { icon: CircleDot, name: "Dandruff Treatment", description: "Targeted treatment to eliminate dandruff and scalp issues", popular: false },
      { icon: Sun, name: "Scalp Treatment", description: "Deep scalp cleansing and conditioning for healthy hair growth", popular: false },
      { icon: Star, name: "Hairfall Factor Treatment with Meso Gun", description: "Advanced meso therapy to combat hair fall and stimulate growth", popular: true },
      { icon: Gem, name: "Plex Treatment", description: "Protective plex treatment to strengthen and repair hair bonds", popular: false },
      { icon: Heart, name: "Ultimate Repair Treatment", description: "Comprehensive repair treatment for severely damaged hair", popular: false },
    ]
  },
  {
    title: "Skin Care Services",
    description: "Professional skincare treatments for radiant, healthy skin",
    services: [
      { icon: CircleDot, name: "Skin Care with Treatment", description: "Customized facial treatments based on your skin type", popular: true },
      { icon: Sun, name: "Deep Cleansing for Dehydrated Skin", description: "Intensive hydration and cleansing for dry, dehydrated skin", popular: false },
      { icon: Palette, name: "Exfoliating Treatment for Oily Skin", description: "Deep exfoliation to control oil and refine pores", popular: false },
      { icon: Moon, name: "Skin Treatment for Dry Skin", description: "Nourishing treatment with moisturizers and hydrating masks", popular: false },
      { icon: Brush, name: "Skin Treatment for Oily Skin", description: "Balancing treatment to control sebum and mattify skin", popular: false },
      { icon: Sparkles, name: "Deep Pigmentation Treatment with Laser", description: "Advanced laser treatment for pigmentation and dark spots", popular: true },
      { icon: Eye, name: "Hyper Pigmentation Treatment", description: "Specialized treatment to fade hyperpigmentation and even skin tone", popular: false },
    ]
  },
  {
    title: "Make-up Services",
    description: "Professional makeup for every occasion",
    services: [
      { icon: Sparkles, name: "Party Makeup", description: "Glamorous makeup for parties and special celebrations", popular: false },
      { icon: Heart, name: "Engagement Makeup", description: "Stunning engagement makeup with elegant hairstyling", popular: true },
      { icon: Crown, name: "Bridal & Groom Makeup", description: "Complete bridal and groom makeup for your wedding day", popular: true },
      { icon: Gem, name: "Reception Makeup", description: "Elegant makeup for reception with long-lasting finish", popular: false },
      { icon: Flower2, name: "Hair Styling & Saree Draping", description: "Expert hair styling combined with traditional saree draping", popular: false },
    ]
  },
  {
    title: "Nail Services",
    description: "Beautiful nail art and extensions",
    services: [
      { icon: Star, name: "Nail Extensions", description: "Stunning nail extensions with various styles and finishes", popular: true },
      { icon: Sparkles, name: "Gel Paint", description: "Long-lasting gel nail polish with professional application", popular: true },
      { icon: Palette, name: "Nail Art", description: "Creative and intricate nail art designs for all occasions", popular: false },
    ]
  },
  {
    title: "Foot & Hand Care",
    description: "Premium pampering for hands and feet",
    services: [
      { icon: Droplets, name: "Pedicure", description: "Complete foot care with nail care and foot massage", popular: false },
      { icon: CircleDot, name: "Manicure", description: "Professional manicure with nail care and hand treatment", popular: false },
      { icon: Sun, name: "Heel Peel Treatment", description: "Intensive heel treatment for soft, smooth feet", popular: true },
      { icon: Flower2, name: "Arogyam Foot Therapy with Pedicure", description: "Traditional foot therapy combined with professional pedicure", popular: false },
    ]
  },
]

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorations */}
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
                Our Services
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
            </motion.div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] mb-6">
              Premium Beauty{" "}
              <span className="text-[#C9A84C]">Services</span>
            </h1>

            <p className="text-[#a8a8a8] max-w-2xl mx-auto text-lg mb-8">
              Discover our comprehensive range of beauty treatments designed to enhance your natural radiance.
              From bridal makeup to everyday pampering, we have got you covered.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0a0a0a] font-medium hover:bg-[#E8C96A] transition-all duration-300"
              >
                Book Appointment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <Link
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#C9A84C] text-[#C9A84C] font-medium hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300"
              >
                Call Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111]'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-3">
                {category.title}
              </h2>
              <p className="text-[#a8a8a8]">{category.description}</p>
              <div className="w-20 h-[2px] bg-gradient-to-r from-[#C9A84C] to-transparent mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative h-full p-6 bg-gradient-to-br from-[#141414] to-[#0d0d0d] border border-[#252525] hover:border-[#C9A84C]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,168,76,0.12)]">
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#C9A84C]/0 group-hover:border-[#C9A84C] transition-all duration-500" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#C9A84C]/0 group-hover:border-[#C9A84C] transition-all duration-500" />

                      {/* Popular badge */}
                      {service.popular && (
                        <div className="absolute top-4 right-4 px-2 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs tracking-wider uppercase">
                          Popular
                        </div>
                      )}

                      {/* Icon */}
                      <div className="relative w-12 h-12 mb-4 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C9A84C] via-[#E8C96A] to-[#C9A84C] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-[2px] rounded-full bg-[#0d0d0d]" />
                        <Icon className="relative z-10 w-5 h-5 text-[#C9A84C] group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      {/* Content */}
                      <h3 className="font-serif text-xl text-[#F5F0E8] mb-2 group-hover:text-[#E8C96A] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-[#888] text-sm leading-relaxed mb-4 group-hover:text-[#a8a8a8] transition-colors duration-300">
                        {service.description}
                      </p>
                      {/* <p className="text-[#C9A84C] font-medium text-sm">
                        {service.price}
                      </p> */}

                      {/* Decorative line */}
                      <div className="h-[1px] w-12 bg-gradient-to-r from-[#C9A84C] to-transparent mt-4" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-6">
              Ready to Experience{" "}
              <span className="text-[#C9A84C]">Luxury?</span>
            </h2>
            <p className="text-[#a8a8a8] mb-8 max-w-2xl mx-auto">
              Book your appointment today and let our expert beauticians pamper you with the finest treatments.
              Walk in as a guest, leave as a queen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0a0a0a] font-medium hover:bg-[#E8C96A] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Now
              </button>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#C9A84C] text-[#C9A84C] font-medium hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300"
              >
                Visit Our Spa
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </main>
  )
}
