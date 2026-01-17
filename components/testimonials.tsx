"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, useInView, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "An absolutely magical experience! Blue Star Travels exceeded all our expectations. The guides were knowledgeable, accommodations were perfect, and every detail was meticulously planned.",
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "Australia",
    flag: "🇦🇺",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The wildlife safari was incredible! We saw leopards, elephants, and so much more. Our guide knew exactly where to find them. A trip of a lifetime!",
  },
  {
    id: 3,
    name: "Emma Johansson",
    country: "Sweden",
    flag: "🇸🇪",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "From the ancient temples to the stunning beaches, every moment was unforgettable. The team at Blue Star made us feel like family. Highly recommend!",
  },
  {
    id: 4,
    name: "David Thompson",
    country: "Canada",
    flag: "🇨🇦",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The cultural immersion was authentic and respectful. We learned so much about Sri Lankan traditions. The food tours were a highlight!",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            Traveler Stories
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What Our <span className="text-teal">Guests Say</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Real experiences from real travelers who explored Sri Lanka with us
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="px-4"
              >
                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-8 lg:p-12">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ opacity: 0, rotate: -20 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <Quote className="w-12 h-12 text-teal/20 mb-6" />
                    </motion.div>

                    {/* Rating */}
                    <motion.div 
                      className="flex gap-1 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                        >
                          <Star className="w-5 h-5 fill-gold text-gold" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.p 
                      className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>

                    {/* Author */}
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-teal/50 flex items-center justify-center text-white text-xl font-bold"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {testimonials[currentIndex].name.charAt(0)}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {testimonials[currentIndex].flag}
                          </motion.span>
                          {testimonials[currentIndex].country}
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <motion.div 
            className="flex justify-center items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent hover:bg-navy hover:text-white hover:border-navy"
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    currentIndex === index ? "bg-teal w-8" : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50",
                  )}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent hover:bg-navy hover:text-white hover:border-navy"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
