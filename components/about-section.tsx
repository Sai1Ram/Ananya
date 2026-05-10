"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles, Award, Heart, Clock } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "Only the finest international beauty brands",
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Professionally trained beauticians",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Treatments tailored to your needs",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "We respect your precious time",
    },
  ]

  return (
    <section id="about" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#E8C96A]/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8]">
            Where Beauty Meets{" "}
            <span className="relative inline-block">
              <span className="text-[#C9A84C]">Elegance</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.path
                  d="M0 4 Q50 0 100 4 T200 4"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2"
                />
              </motion.svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Logo showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Rotating border */}
              <motion.div
                className="absolute inset-[-3px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, #C9A84C, transparent, #E8C96A, transparent)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Main logo container */}
              <div className="relative aspect-square rounded-full bg-[#0a0a0a] p-2 overflow-hidden">
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/images/logo.jpg"
                    alt="Ananya Ladies Beauty Spa"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 border border-[#C9A84C]/30 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 border border-[#E8C96A]/20 rounded-full"
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />

              {/* Experience badge - elegant diamond shape */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 sm:-right-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-10"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rotate-45 bg-gradient-to-br from-[#C9A84C] to-[#8B6914] p-[2px] shadow-lg shadow-[#C9A84C]/20"
                >
                  <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                    <div className="-rotate-45 text-center">
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C9A84C] leading-none">
                        10+
                      </div>
                      <div className="text-[#F5F0E8] text-[8px] sm:text-[9px] tracking-wider uppercase mt-1">
                        Years
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Main description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[#F5F0E8]/90 leading-relaxed font-light">
                Welcome to{" "}
                <span className="text-[#C9A84C] font-medium">
                  Ananya Ladies Beauty Spa
                </span>{" "}
                — a sanctuary of elegance exclusively designed for women who
                deserve nothing but the finest in beauty and self-care.
              </p>

              <p className="text-[#a8a8a8] leading-relaxed">
                Founded by{" "}
                <span className="text-[#C9A84C] font-medium">Sanjukta Sahu</span>,
                our spa is nestled in an atmosphere of tranquility and luxury. We specialize
                in bridal transformations, premium hair treatments, and
                comprehensive skincare. Our expert beauticians bring years of
                experience in both traditional and contemporary techniques,
                ensuring you leave feeling absolutely radiant.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
              <Sparkles className="w-5 h-5 text-[#C9A84C]" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-4 rounded-xl bg-[#111]/50 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <div>
                      <h4 className="text-[#F5F0E8] font-medium text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[#a8a8a8] text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
              {[
                { number: "5000+", label: "Happy Brides" },
                { number: "50+", label: "Expert Artists" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center flex-1 min-w-[100px]"
                >
                  <div className="font-serif text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#E8C96A] to-[#C9A84C]">
                    {stat.number}
                  </div>
                  <div className="text-[#a8a8a8] text-xs mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
