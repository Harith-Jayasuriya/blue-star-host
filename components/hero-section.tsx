"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Star, Shield, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const heroImages = [
  "/sigiriya-rock-fortress-sri-lanka-aerial-view-sunri.jpg",
  "/pristine-tropical-beach-sri-lanka-palm-trees-turqu.jpg",
  "/tea-plantations-hill-country-sri-lanka-misty-mount.jpg",
  "/wild-elephants-safari-yala-national-park-sri-lanka.jpg",
]

const trustBadges = [
  { icon: Users, label: "500+ Happy Travelers" },
  { icon: Shield, label: "Licensed & Certified" },
  { icon: Star, label: "5-Star Rated" },
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center animate-kenburns"
            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-bluestar/70 via-bluestar/40 to-navy/80" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${15 + (i * 5) % 70}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bluestar/20 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-white flex items-center justify-center overflow-hidden"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Image 
                src="/logo.svg" 
                alt="Blue Star Travels" 
                width={20} 
                height={20} 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <span className="text-white font-medium">Blue Star Travels</span>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 text-balance"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Discover the{" "}
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-gold inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Pearl of the Indian Ocean
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl text-pretty"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Authentic Sri Lankan Adventures Crafted for Global Travelers
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-orange/30"
            >
              Explore Tours
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-navy font-semibold px-8 py-6 text-lg transition-all"
            >
              Plan Your Journey
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <badge.icon className="w-4 h-4 text-gold" />
              <span className="text-white/90 text-sm font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#packages"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>

      {/* Image Indicators */}
      <motion.div 
        className="absolute bottom-8 right-8 flex gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              currentImage === index ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70",
            )}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </section>
  )
}
