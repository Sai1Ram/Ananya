"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Clock } from "lucide-react"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const services = [
  "Bridal Makeup",
  "Pre-Bridal Package",
  "Engagement Makeup",
  "Party Makeup",
  "HD Makeup",
  "Keratin Treatment",
  "Hair Spa & Treatment",
  "Haircut & Styling",
  "Hair Coloring",
  "Hair Smoothening",
  "Gold Facial",
  "Diamond Facial",
  "Pearl Facial",
  "Fruit Facial",
  "Anti-Aging Facial",
  "De-Tan Treatment",
  "Full Body Waxing",
  "Threading & Waxing",
  "Body Polishing",
  "Manicure & Pedicure",
  "Saree Draping",
]

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    service: "",
    date: "",
    time: "",
  })

  const handleSubmit = () => {
    // Build WhatsApp message with booking details
    const message = `Hello! I would like to book an appointment at Ananya Ladies Beauty Spa.

*Booking Details:*
- Name: ${formData.name}
- Gender: ${formData.gender}
- Service: ${formData.service}
- Date: ${formData.date}
- Time: ${formData.time}

Please confirm my appointment. Thank you!`

    const whatsappUrl = `https://wa.me/918280086186?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    onOpenChange(false)
    
    // Reset form
    setFormData({
      name: "",
      gender: "",
      service: "",
      date: "",
      time: "",
    })
  }

  const isFormValid = formData.name && formData.gender && formData.service && formData.date && formData.time

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0a0a0a] border-[#2a2a2a] max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="font-serif text-2xl text-[#F5F0E8]">
            Book Your Appointment
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          {/* Name Input */}
          <Input
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-[#111] border-[#2a2a2a] text-[#F5F0E8] placeholder:text-[#666] focus-visible:border-[#C9A84C] focus-visible:ring-[#C9A84C]/20 h-12"
          />

          {/* Gender Select */}
          <Select
            value={formData.gender}
            onValueChange={(value) => setFormData({ ...formData, gender: value })}
          >
            <SelectTrigger className="bg-[#111] border-[#2a2a2a] text-[#F5F0E8] h-12 w-full data-[placeholder]:text-[#666] focus:border-[#C9A84C] focus:ring-[#C9A84C]/20">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent className="bg-[#111] border-[#2a2a2a]">
              <SelectItem value="female" className="text-[#F5F0E8] focus:bg-[#C9A84C]/20 focus:text-[#F5F0E8]">Female</SelectItem>
              <SelectItem value="male" className="text-[#F5F0E8] focus:bg-[#C9A84C]/20 focus:text-[#F5F0E8]">Male</SelectItem>
              <SelectItem value="other" className="text-[#F5F0E8] focus:bg-[#C9A84C]/20 focus:text-[#F5F0E8]">Other</SelectItem>
            </SelectContent>
          </Select>

          {/* Service Select */}
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
          >
            <SelectTrigger className="bg-[#111] border-[#2a2a2a] text-[#F5F0E8] h-12 w-full data-[placeholder]:text-[#666] focus:border-[#C9A84C] focus:ring-[#C9A84C]/20">
              <SelectValue placeholder="Select a Service" />
            </SelectTrigger>
            <SelectContent className="bg-[#111] border-[#2a2a2a] max-h-[200px]">
              {services.map((service) => (
                <SelectItem 
                  key={service} 
                  value={service}
                  className="text-[#F5F0E8] focus:bg-[#C9A84C]/20 focus:text-[#F5F0E8]"
                >
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Date Input */}
          <div className="relative">
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              className="bg-[#111] border-[#2a2a2a] text-[#F5F0E8] h-12 focus-visible:border-[#C9A84C] focus-visible:ring-[#C9A84C]/20 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666] pointer-events-none" />
          </div>

          {/* Time Input */}
          <div className="relative">
            <Input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="bg-[#111] border-[#2a2a2a] text-[#F5F0E8] h-12 focus-visible:border-[#C9A84C] focus-visible:ring-[#C9A84C]/20 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
            <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666] pointer-events-none" />
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="w-full bg-[#C9A84C] text-[#0a0a0a] py-3 rounded-md font-semibold text-base hover:bg-[#E8C96A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            Confirm
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
