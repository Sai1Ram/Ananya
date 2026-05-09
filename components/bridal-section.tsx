"use client"

import { motion } from "framer-motion"

const bridalOfferings = [
  {
    title: "Pre-Bridal Package",
    description: "Complete skincare, hair treatments, and beauty prep in the weeks leading to your big day",
    features: ["Facial Series", "Hair Spa", "Body Polish", "Threading & Waxing"],
  },
  {
    title: "Day-of Bridal Look",
    description: "Stunning makeup and hairstyling that lasts throughout your celebration",
    features: ["HD Bridal Makeup", "Hair Styling", "Saree Draping", "Touch-up Kit"],
  },
  {
    title: "Post-Bridal Care",
    description: "Rejuvenating treatments to restore your skin's natural glow after the festivities",
    features: ["Detox Facial", "Hair Recovery", "Relaxing Massage", "Glow Treatment"],
  },
]

export default function BridalSection() {
  return (
    <section id="bridal" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E8C96A]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">
            Our Specialty
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] mt-4 mb-6">
            We Make Every Bride{" "}
            <span className="text-[#C9A84C] italic">Unforgettable</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <StarIcon className="w-6 h-6 text-[#C9A84C]" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </div>
          <p className="text-[#a8a8a8] mt-8 max-w-2xl mx-auto leading-relaxed">
            Your wedding day deserves nothing but perfection. Our expert bridal artists 
            combine traditional elegance with modern techniques to create looks that 
            reflect your unique beauty.
          </p>
        </motion.div>

        {/* Bridal Offerings */}
        <div className="grid md:grid-cols-3 gap-8">
          {bridalOfferings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-[#111] border border-[#2a2a2a] p-8 h-full transition-all duration-500 hover:border-[#C9A84C] relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number */}
                <div className="absolute top-4 right-4 font-serif text-6xl text-[#C9A84C]/10 group-hover:text-[#C9A84C]/20 transition-colors duration-300">
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl text-[#F5F0E8] mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">
                    {offering.title}
                  </h3>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed mb-6">
                    {offering.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {offering.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[#F5F0E8] text-sm">
                        <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mt-16"
        />
      </div>
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
