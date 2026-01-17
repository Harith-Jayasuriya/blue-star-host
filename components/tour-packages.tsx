"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, ArrowRight, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"

const tours = [
  {
    id: 1,
    title: "Cultural Triangle Explorer",
    image: "/ancient-temple-ruins-sigiriya-sri-lanka.jpg",
    duration: "7 Days",
    price: "$899",
    rating: 4.9,
    highlights: ["Sigiriya Rock", "Dambulla Cave Temple", "Polonnaruwa"],
    category: "Cultural",
  },
  {
    id: 2,
    title: "Beach Paradise Escape",
    image: "/luxury-beach-resort-mirissa-sri-lanka-sunset.jpg",
    duration: "5 Days",
    price: "$699",
    rating: 4.8,
    highlights: ["Mirissa Beach", "Whale Watching", "Galle Fort"],
    category: "Beach",
  },
  {
    id: 3,
    title: "Wildlife Safari Adventure",
    image: "/leopard-yala-national-park-sri-lanka-wildlife.jpg",
    duration: "4 Days",
    price: "$599",
    rating: 4.9,
    highlights: ["Yala Safari", "Udawalawe", "Minneriya"],
    category: "Wildlife",
  },
  {
    id: 4,
    title: "Hill Country Journey",
    image: "/nine-arches-bridge-ella-sri-lanka-train.jpg",
    duration: "6 Days",
    price: "$749",
    rating: 4.7,
    highlights: ["Ella", "Nuwara Eliya", "Train Ride"],
    category: "Adventure",
  },
  {
    id: 5,
    title: "Coastal Discovery Tour",
    image: "/stilt-fishermen-sri-lanka-traditional-sunset.jpg",
    duration: "8 Days",
    price: "$999",
    rating: 4.8,
    highlights: ["Bentota", "Hikkaduwa", "Trincomalee"],
    category: "Beach",
  },
  {
    id: 6,
    title: "Spiritual Journey",
    image: "/temple-of-tooth-kandy-sri-lanka-buddhist.jpg",
    duration: "5 Days",
    price: "$649",
    rating: 4.9,
    highlights: ["Kandy Temple", "Adam's Peak", "Anuradhapura"],
    category: "Cultural",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      mass: 0.8,
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      delay: 0.8,
    },
  },
}

export function TourPackages() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="packages" ref={sectionRef} className="py-12 lg:py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Badge variant="secondary" className="mb-4 bg-teal/10 text-teal border-teal/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Curated Experiences
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Our Popular <span className="text-teal">Tour Packages</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Handcrafted itineraries designed to showcase the best of Sri Lanka, from ancient ruins to pristine beaches
          </motion.p>
        </motion.div>

        {/* Tour Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{ perspective: 1000 }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer outline-none focus:outline-none h-full">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${tour.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 150 }}
                  >
                    <Badge className="bg-white/90 text-navy hover:bg-white backdrop-blur-sm">
                      {tour.category}
                    </Badge>
                  </motion.div>

                  {/* Rating */}
                  <motion.div 
                    className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 150 }}
                  >
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-xs font-semibold text-navy">{tour.rating}</span>
                  </motion.div>

                  {/* Overlay on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-navy/80 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Button className="bg-orange hover:bg-orange/90 text-white shadow-lg">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-teal transition-colors"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {tour.title}
                  </motion.h3>

                  {/* Highlights */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {tour.highlights.map((highlight, i) => (
                      <motion.span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: "var(--teal)", color: "white" }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Meta Info */}
                  <motion.div 
                    className="flex items-center justify-between pt-4 border-t border-border"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">From</span>
                      <motion.p 
                        className="text-xl font-bold text-teal"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {tour.price}
                      </motion.p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 bg-transparent group"
            >
              View All Packages
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
