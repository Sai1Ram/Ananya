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
    title: "Bridal Services",
    description: "Make your special day unforgettable with our premium bridal packages",
    services: [
      {
        icon: Crown,
        name: "Bridal Makeup",
        description: "Complete bridal transformation with premium products, airbrush makeup, and long-lasting finish for your special day",
        price: "Starting from Rs. 15,000",
        popular: true,
      },
      {
        icon: Gem,
        name: "Pre-Bridal Package",
        description: "Complete preparation including facials, body polishing, hair treatments, and skin care starting 1 month before wedding",
        price: "Starting from Rs. 25,000",
        popular: true,
      },
      {
        icon: Heart,
        name: "Engagement Makeup",
        description: "Glamorous makeup for your engagement ceremony with hairstyling included",
        price: "Starting from Rs. 8,000",
        popular: false,
      },
      {
        icon: Flower2,
        name: "Saree Draping",
        description: "Expert saree draping in various styles - Nivi, Bengali, Gujarati, South Indian, and more",
        price: "Starting from Rs. 500",
        popular: false,
      },
    ]
  },
  {
    title: "Hair Services",
    description: "Transform your hair with our expert treatments and styling",
    services: [
      {
        icon: Waves,
        name: "Keratin Treatment",
        description: "Professional keratin smoothening for silky, frizz-free, manageable hair lasting 3-6 months",
        price: "Starting from Rs. 5,000",
        popular: true,
      },
      {
        icon: Droplets,
        name: "Hair Spa & Treatment",
        description: "Deep conditioning, nourishing hair spa for healthy, lustrous, and strong hair",
        price: "Starting from Rs. 800",
        popular: false,
      },
      {
        icon: Scissors,
        name: "Haircut & Styling",
        description: "Trendy haircuts, blow dry, straightening, and styling for all occasions",
        price: "Starting from Rs. 300",
        popular: false,
      },
      {
        icon: Palette,
        name: "Hair Coloring",
        description: "Global color, highlights, balayage, and fashion colors with premium brands",
        price: "Starting from Rs. 2,500",
        popular: false,
      },
      {
        icon: Brush,
        name: "Hair Smoothening",
        description: "Permanent straightening treatment for poker-straight, smooth hair",
        price: "Starting from Rs. 4,000",
        popular: false,
      },
    ]
  },
  {
    title: "Skin Care & Facials",
    description: "Rejuvenate your skin with our luxurious facial treatments",
    services: [
      {
        icon: CircleDot,
        name: "Gold Facial",
        description: "Luxurious gold facial for instant glow, anti-aging benefits, and radiant skin",
        price: "Starting from Rs. 1,500",
        popular: true,
      },
      {
        icon: Sun,
        name: "Diamond Facial",
        description: "Premium diamond facial for deep cleansing, exfoliation, and luminous skin",
        price: "Starting from Rs. 2,000",
        popular: false,
      },
      {
        icon: Moon,
        name: "Pearl Facial",
        description: "Natural pearl extracts for skin whitening and brightening effects",
        price: "Starting from Rs. 1,200",
        popular: false,
      },
      {
        icon: Sparkles,
        name: "Fruit Facial",
        description: "Natural fruit extracts for refreshing, hydrating, and nourishing skin",
        price: "Starting from Rs. 800",
        popular: false,
      },
      {
        icon: Star,
        name: "Anti-Aging Facial",
        description: "Advanced treatment to reduce fine lines, wrinkles, and signs of aging",
        price: "Starting from Rs. 2,500",
        popular: false,
      },
      {
        icon: Eye,
        name: "De-Tan Treatment",
        description: "Effective tan removal treatment for face and body",
        price: "Starting from Rs. 600",
        popular: false,
      },
    ]
  },
  {
    title: "Makeup Services",
    description: "Professional makeup for every occasion",
    services: [
      {
        icon: Sparkles,
        name: "Party Makeup",
        description: "Glamorous looks for parties, receptions, and special events",
        price: "Starting from Rs. 3,000",
        popular: true,
      },
      {
        icon: Smile,
        name: "HD Makeup",
        description: "High-definition makeup perfect for photoshoots and video recordings",
        price: "Starting from Rs. 5,000",
        popular: false,
      },
      {
        icon: Eye,
        name: "Eye Makeup",
        description: "Stunning eye makeup including smokey eyes, cut crease, and artistic looks",
        price: "Starting from Rs. 1,000",
        popular: false,
      },
    ]
  },
  {
    title: "Body Treatments",
    description: "Complete body care and pampering services",
    services: [
      {
        icon: Droplets,
        name: "Full Body Waxing",
        description: "Complete body waxing with premium wax for smooth, hair-free skin",
        price: "Starting from Rs. 1,500",
        popular: true,
      },
      {
        icon: CircleDot,
        name: "Threading & Waxing",
        description: "Precise eyebrow shaping, upper lip, and full face threading",
        price: "Starting from Rs. 50",
        popular: false,
      },
      {
        icon: Sun,
        name: "Body Polishing",
        description: "Full body scrub and polish for soft, glowing, and smooth skin",
        price: "Starting from Rs. 2,000",
        popular: false,
      },
      {
        icon: Flower2,
        name: "Manicure & Pedicure",
        description: "Classic and spa manicure/pedicure with nail art options",
        price: "Starting from Rs. 400",
        popular: false,
      },
      {
        icon: Star,
        name: "Bleach & Clean-Up",
        description: "Face and body bleach with deep cleansing clean-up",
        price: "Starting from Rs. 300",
        popular: false,
      },
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
