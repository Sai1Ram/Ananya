"use client"

import { motion } from "framer-motion"
import { Sparkles, Crown, Droplets, Waves, CircleDot, Scissors, Gem, GripHorizontal } from "lucide-react"

const services = [
  {
    icon: Crown,
    title: "Bridal Makeup",
    description: "Complete bridal transformation with premium products for your special day",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "Party Makeup",
    description: "Glamorous looks for any occasion, from subtle elegance to bold statements",
    highlight: false,
  },
  {
    icon: Droplets,
    title: "Hair Spa & Treatment",
    description: "Rejuvenating hair therapies for healthy, lustrous locks",
    highlight: false,
  },
  {
    icon: Waves,
    title: "Keratin/Smoothening",
    description: "Professional hair smoothening for silky, manageable hair",
    highlight: false,
  },
  {
    icon: CircleDot,
    title: "Facial & Skincare",
    description: "Luxurious facials and treatments for radiant, glowing skin",
    highlight: false,
  },
  {
    icon: Scissors,
    title: "Threading & Waxing",
    description: "Precise and gentle hair removal services for flawless finish",
    highlight: false,
  },
  {
    icon: GripHorizontal,
    title: "Saree Draping",
    description: "Expert saree draping in various styles for the perfect traditional look",
    highlight: false,
  },
  {
    icon: Gem,
    title: "Pre-Bridal Package",
    description: "Complete preparation packages to make you wedding-ready",
    highlight: true,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Subtle radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A84C]/5 rounded-full blur-[120px]" />
        
        {/* Corner decorations */}
        <svg className="absolute top-12 left-12 w-24 h-24 text-[#C9A84C]/10" viewBox="0 0 100 100">
          <path d="M0 50 Q0 0 50 0" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M10 50 Q10 10 50 10" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-12 right-12 w-24 h-24 text-[#C9A84C]/10 rotate-180" viewBox="0 0 100 100">
          <path d="M0 50 Q0 0 50 0" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M10 50 Q10 10 50 10" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-medium">
              What We Offer
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] mb-6">
            Our Premium{" "}
            <span className="relative">
              <span className="text-[#C9A84C]">Services</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#C9A84C] via-[#E8C96A] to-[#C9A84C]"
              />
            </span>
          </h2>
          
          <p className="text-[#a8a8a8] max-w-2xl mx-auto text-lg">
            Experience the finest beauty treatments tailored to enhance your natural radiance
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLarge = service.highlight
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group relative ${isLarge ? 'lg:col-span-2 lg:row-span-1' : ''}`}
              >
                <div className={`
                  relative h-full overflow-hidden
                  bg-gradient-to-br from-[#141414] to-[#0d0d0d]
                  border border-[#252525]
                  transition-all duration-500
                  hover:border-[#C9A84C]/60
                  hover:shadow-[0_0_40px_rgba(201,168,76,0.12)]
                  ${isLarge ? 'p-8 md:p-10' : 'p-6'}
                `}>
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C9A84C]/0 group-hover:border-[#C9A84C] transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C9A84C]/0 group-hover:border-[#C9A84C] transition-all duration-500" />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/5 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Content */}
                  <div className={`relative z-10 flex ${isLarge ? 'flex-row items-center gap-8' : 'flex-col'}`}>
                    {/* Icon container */}
                    <div className={`
                      relative flex items-center justify-center
                      ${isLarge ? 'w-20 h-20 flex-shrink-0' : 'w-14 h-14 mb-5'}
                    `}>
                      {/* Rotating border effect */}
                      <div className={`
                        absolute inset-0 rounded-full
                        bg-gradient-to-r from-[#C9A84C] via-[#E8C96A] to-[#C9A84C]
                        opacity-30 group-hover:opacity-100
                        transition-opacity duration-500
                        ${isLarge ? 'animate-[spin_8s_linear_infinite]' : ''}
                      `} />
                      <div className={`
                        absolute inset-[2px] rounded-full bg-[#0d0d0d]
                      `} />
                      
                      {/* Icon */}
                      <Icon className={`
                        relative z-10 text-[#C9A84C]
                        transition-transform duration-500
                        group-hover:scale-110
                        ${isLarge ? 'w-9 h-9' : 'w-6 h-6'}
                      `} />
                    </div>
                    
                    {/* Text content */}
                    <div className={isLarge ? 'flex-1' : ''}>
                      <h3 className={`
                        font-serif text-[#F5F0E8] mb-2
                        group-hover:text-[#E8C96A] transition-colors duration-300
                        ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'}
                      `}>
                        {service.title}
                      </h3>
                      
                      <p className={`
                        text-[#888] leading-relaxed
                        group-hover:text-[#a8a8a8] transition-colors duration-300
                        ${isLarge ? 'text-base max-w-md' : 'text-sm'}
                      `}>
                        {service.description}
                      </p>
                      
                      {/* Decorative line */}
                      <motion.div 
                        className={`
                          h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent
                          mt-4 origin-left
                          ${isLarge ? 'w-32' : 'w-16'}
                        `}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                  
                  {/* Highlight badge for special services */}
                  {isLarge && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs tracking-wider uppercase">
                      Popular
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#888] mb-6">
            Explore our complete range of beauty services and treatments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0a0a0a] hover:bg-[#E8C96A] transition-all duration-300 group"
            >
              <span className="font-medium tracking-wide">View All Services</span>
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
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300 group"
            >
              <span className="font-medium tracking-wide">Enquire Now</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
