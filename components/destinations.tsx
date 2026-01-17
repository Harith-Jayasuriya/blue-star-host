"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView, AnimatePresence } from "framer-motion"

const destinations = [
  {
    name: "Sigiriya",
    image: "/sigiriya-lion-rock-fortress-sri-lanka-sunrise.jpg",
    description: "Ancient rock fortress",
  },
  {
    name: "Ella",
    image: "/ella-nine-arches-bridge-sri-lanka-mountains.jpg",
    description: "Hill country paradise",
  },
  {
    name: "Galle Fort",
    image: "/galle-fort-lighthouse-sri-lanka-colonial.jpg",
    description: "Colonial heritage",
  },
  {
    name: "Yala",
    image: "/yala-national-park-leopard-safari-sri-lanka.jpg",
    description: "Wildlife sanctuary",
  },
  {
    name: "Kandy",
    image: "/kandy-temple-tooth-buddhist-sri-lanka.jpg",
    description: "Cultural capital",
  },
  {
    name: "Mirissa",
    image: "/pristine-tropical-beach-sri-lanka-palm-trees-turqu.jpg",
    description: "Beach haven",
  },
  {
    name: "Nuwara Eliya",
    image: "/tea-plantations-hill-country-sri-lanka-misty-mount.jpg",
    description: "Little England",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
}

export function Destinations() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1))
    } else {
      setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <section id="destinations" ref={sectionRef} className="py-12 lg:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-orange/10 text-orange text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1, type: "spring" }}
            >
              Explore Sri Lanka
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Top <span className="text-teal">Destinations</span>
            </motion.h2>
          </div>

          {/* Navigation Arrows */}
          <motion.div 
            className="flex gap-2 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-border hover:bg-navy hover:text-white hover:border-navy bg-transparent"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-border hover:bg-navy hover:text-white hover:border-navy bg-transparent"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="flex gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative flex-shrink-0 w-[280px] md:w-[320px] lg:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Image with Ken Burns */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${destination.image})` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div 
                  className="flex items-center gap-2 text-white/80 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.description}</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">
                  {destination.name}
                </h3>

                {/* Explore Button - Shows on Hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <Button
                    size="sm"
                    className="bg-teal hover:bg-teal/90 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0"
                  >
                    Explore
                  </Button>
                </motion.div>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                whileHover={{ borderColor: "rgba(0, 178, 169, 0.5)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          {destinations.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                currentIndex === index ? "bg-teal w-8" : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50",
              )}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
