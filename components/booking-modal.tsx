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
import { WHATSAPP_NUMBER, STAFF_MEMBERS } from "@/lib/constants"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const services = [
  "Hair Cut", "Hair Styling", "Blow Dry", "Global Color", "Root Touch Up", "Highlight Color", "Shampoo & Conditioning", "Head Massage", "Hair Spa",
  "Keratin", "Botox", "Smoothening", "Straightening", "Nani Plastic",
  "Spa Treatment", "Dandruff Treatment", "Scalp Treatment", "Hairfall Factor Treatment with Meso Gun", "Plex Treatment", "Ultimate Repair Treatment",
  "Hydra Facial", "Carbon Facial", "Deep Cleansing for Dehydrated Skin", "Exfoliating Treatment for Oily Skin", "Clean-Up", "D-Tan Treatment", "Body Polishing", "Full Body Waxing", "Full Face Threading",
  "Party Makeup", "Engagement Makeup", "Bridal & Groom Makeup", "Reception Makeup", "Hair Styling & Saree Draping",
  "Nail Extensions", "Gel Paint", "Nail Art",
  "Pedicure", "Manicure", "Heel Peel Treatment", "Arogyam Foot Therapy with Pedicure"
]

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    staff: "",
    date: "",
    time: "",
  })

  const handleSubmit = () => {
    // Build WhatsApp message with booking details
    const message = `Hello! I would like to book an appointment at Ananya Ladies Salon and Makeup Studio.

*Booking Details:*
- Name: ${formData.name}
- Service: ${formData.service}
- Staff: ${formData.staff}
- Date: ${formData.date}
- Time: ${formData.time}

Please confirm my appointment. Thank you!`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    onOpenChange(false)

    // Reset form
    setFormData({
      name: "",
      service: "",
      staff: "",
      date: "",
      time: "",
    })
  }

  const isFormValid = formData.name && formData.service && formData.staff && formData.date && formData.time

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

          {/* Service Select */}
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
          >
            <SelectTrigger className="bg-[#111] border-[#2a2a2a] text-[#F5F0E8] h-12 w-full data-[placeholder]:text-[#666] focus:border-[#C9A84C] focus:ring-[#C9A84C]/20">
              <SelectValue placeholder="Select a Service">
                {formData.service}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-[#111] border-[#2a2a2a] max-h-[250px]">
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

          {/* Staff Select */}
          <Select
            value={formData.staff}
            onValueChange={(value) => setFormData({ ...formData, staff: value })}
          >
            <SelectTrigger className="bg-[#111] border-[#2a2a2a] text-[#F5F0E8] h-12 w-full data-[placeholder]:text-[#666] focus:border-[#C9A84C] focus:ring-[#C9A84C]/20">
              <SelectValue placeholder="Select Staff Member">
                {formData.staff}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-[#111] border-[#2a2a2a]">
              {STAFF_MEMBERS.map((staff) => (
                <SelectItem
                  key={staff.name}
                  value={staff.name}
                  className="text-[#F5F0E8] focus:bg-[#C9A84C]/20 focus:text-[#F5F0E8] py-2"
                >
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium text-[#F5F0E8]">{staff.name}</span>
                    <span className="text-[10px] text-[#C9A84C] tracking-widest uppercase mt-0.5 font-light">
                      {staff.specialization}
                    </span>
                  </div>
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
