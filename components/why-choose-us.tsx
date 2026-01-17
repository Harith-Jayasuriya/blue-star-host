"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Sparkles, Globe, DollarSign } from "lucide-react"
import { motion, useInView } from "framer-motion"

const features = [
  {
    icon: Trophy,
    title: "Expert Local Guides",
    description: "Our certified guides bring deep cultural knowledge and insider access to hidden gems",
    stat: "50+",
    statLabel: "Expert Guides",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Fully Customizable Tours",
    description: "Every journey is tailored to your preferences, pace, and interests",
    stat: "100%",
    statLabel: "Customizable",
    gradient: "from-teal to-cyan-500",
  },
  {
    icon: Globe,
    title: "24/7 Support",
    description: "Round-the-clock assistance from our dedicated team wherever you are",
    stat: "24/7",
    statLabel: "Available",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "Competitive pricing with no hidden costs and best value for your money",
    stat: "15%",
    statLabel: "Avg Savings",
    gradient: "from-green-500 to-emerald-500",
  },
]

function AnimatedCounter({ end, duration = 2000 }: { end: string; duration?: number }) {
  const [count, setCount] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const numericEnd = Number.parseInt(end.replace(/[^0-9]/g, ""))
          const suffix = end.replace(/[0-9]/g, "")

          let start = 0
          const increment = numericEnd / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= numericEnd) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start) + suffix)
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <span ref={ref}>{count}</span>
}

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

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
}

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={sectionRef} className="py-12 lg:py-16 bg-navy text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-teal rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-orange rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-teal/20 text-teal text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
          >
            Why Travel With Us
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The <span className="text-teal">Blue Star</span> Difference
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We go above and beyond to create unforgettable experiences that exceed expectations
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors cursor-pointer"
            >
              {/* Icon */}
              <motion.div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Stat Counter */}
              <div className="mb-4">
                <motion.span 
                  className="text-4xl lg:text-5xl font-bold text-gold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                >
                  <AnimatedCounter end={feature.stat} />
                </motion.span>
                <p className="text-sm text-white/50">{feature.statLabel}</p>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>

              {/* Hover Line */}
              <motion.div 
                className={`h-1 rounded-full bg-gradient-to-r ${feature.gradient} mt-4`}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
