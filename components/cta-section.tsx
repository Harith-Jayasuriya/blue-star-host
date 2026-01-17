"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Users, Send, CheckCircle, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"

const contactInfo = [
  { icon: "📞", label: "+94 77 123 4567" },
  { icon: "✉️", label: "hello@bluestartravels.lk" },
  { icon: "📍", label: "42 Galle Road, Colombo 03, Sri Lanka" },
]

export function CTASection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(/sigiriya-rock-fortress-sri-lanka-aerial-view-sunri.jpg)`,
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            style={{
              left: `${10 + (i * 9)}%`,
              top: `${20 + (i * 7) % 60}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange/20 text-orange text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-4 h-4" />
              Start Your Journey
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Ready to Start Your{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-gold"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Sri Lankan Adventure?
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-white/70 text-lg mb-8 text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Fill out the form and our travel experts will craft the perfect itinerary for you. Your dream vacation is
              just a message away!
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-teal">{item.icon}</span>
                  </motion.div>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-2xl p-8 shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.4 }}
              >
                Plan Your Trip
              </motion.h3>

              <div className="space-y-4">
                <motion.div 
                  className="grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" className="border-border focus:border-teal transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-border focus:border-teal transition-colors"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="date">Travel Date</Label>
                    <div className="relative">
                      <Input id="date" type="date" className="border-border focus:border-teal transition-colors" required />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <div className="relative">
                      <Input
                        id="travelers"
                        type="number"
                        min="1"
                        placeholder="2"
                        className="border-border focus:border-teal transition-colors"
                        required
                      />
                      <Users className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 }}
                >
                  <Label htmlFor="message">Tell Us About Your Dream Trip</Label>
                  <textarea
                    id="message"
                    placeholder="I'm interested in exploring..."
                    className="w-full min-h-[100px] px-3 py-2 rounded-md border border-border focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-none transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className={cn(
                      "w-full font-semibold text-white transition-all",
                      isSubmitted ? "bg-green-500 hover:bg-green-500" : "bg-orange hover:bg-orange/90",
                    )}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <motion.span 
                        className="flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </motion.span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Inquiry
                      </span>
                    )}
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
