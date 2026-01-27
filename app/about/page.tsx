"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Car,
  MapPin,
  Phone,
  Mail,
  Star,
  Compass,
  Sparkles,
  HandshakeIcon,
  Quote,
  ChevronDown,
  Heart
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, type Variants } from "framer-motion"

// Hero images
const heroImages = [
  "/sigiriya-rock-fortress-sri-lanka-aerial-view-sunri.jpg",
  "/galle-fort-lighthouse-sri-lanka-colonial.jpg",
  "/tea-plantations-hill-country-sri-lanka-misty-mount.jpg",
  "/stilt-fishermen-sri-lanka-traditional-sunset.jpg",
]

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
}

// Team members data
const teamMembers = [
  {
    name: "Lahiru Sandaruwan",
    role: "Chief Executive Officer",
    image: "/ceo.svg",
    quote: "Our mission is to show the world the true heart of Sri Lanka, one journey at a time.",
    description: "As the visionary behind Blue Star Travels, Lahiru has dedicated over 16 years to building a company that treats every traveler like family. His deep understanding of the industry and passion for hospitality sets the standard for our entire team.",
    highlights: ["16+ Years Industry Leader", "Visionary Founder", "Hospitality Expert"],
  },
  {
    name: "Menaka Dilshan",
    role: "Operations Manager",
    image: "/lahiru.svg",
    quote: "Every detail matters. We ensure your journey is seamless from the moment you arrive.",
    description: "Menaka is the backbone of our daily operations. With a keen eye for detail and exceptional organizational skills, he ensures that every tour, transfer, and experience runs perfectly. He personally oversees our vehicle fleet and guide network.",
    highlights: ["Logistics Master", "Fleet Manager", "Guest Experience Lead"],
  },
]

// Services offered
const services = [
  {
    icon: Car,
    title: "Luxury Fleet",
    description: "Travel in comfort with our modern, air-conditioned vehicle fleet tailored to your group size.",
  },
  {
    icon: Compass,
    title: "Tailor-Made Tours",
    description: "We don't believe in one-size-fits-all. Every itinerary is customized to your specific interests.",
  },
  {
    icon: HandshakeIcon,
    title: "Personalized Care",
    description: "From arrival to departure, you are our priority. We provide 24/7 support throughout your stay.",
  },
]

export default function AboutPage() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Hero Section - Full Screen with Parallax (Same as Sri Lanka page) */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background Images with Ken Burns */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1500",
              currentHeroImage === index ? "opacity-100" : "opacity-0",
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center animate-kenburns"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-bluestar/40 to-navy/90" />
        
        {/* Animated Particles - Fixed positions */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '10%', top: '15%', animationDelay: '0s', animationDuration: '2.5s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '25%', top: '8%', animationDelay: '0.5s', animationDuration: '3s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '45%', top: '20%', animationDelay: '1s', animationDuration: '2.8s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '70%', top: '12%', animationDelay: '1.5s', animationDuration: '3.2s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '85%', top: '25%', animationDelay: '2s', animationDuration: '2.6s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '5%', top: '45%', animationDelay: '0.3s', animationDuration: '3.5s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '30%', top: '55%', animationDelay: '0.8s', animationDuration: '2.9s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '55%', top: '40%', animationDelay: '1.3s', animationDuration: '3.1s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '78%', top: '50%', animationDelay: '1.8s', animationDuration: '2.7s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '92%', top: '35%', animationDelay: '2.3s', animationDuration: '3.3s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '15%', top: '70%', animationDelay: '0.6s', animationDuration: '2.4s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '40%', top: '75%', animationDelay: '1.1s', animationDuration: '3.4s' }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <Badge className="mb-6 bg-gold/20 text-gold border-gold/30 backdrop-blur-sm text-sm px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                A Family Business for 16 Years
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              About{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-gold to-orange"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Blue Star
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mb-4 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We are a family dedicated to sharing the soul of Sri Lanka with travelers from around the world.
            </motion.p>
            
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              16+ years of experience • Family owned & operated • Your journey, our passion
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link href="/tour-packages">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-orange hover:bg-orange/90 text-white px-8 py-6 text-lg shadow-lg shadow-orange/30">
                    <Compass className="w-5 h-5 mr-2" />
                    Explore Tours
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-navy px-8 py-6 text-lg"
                  onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Our Story
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                currentHeroImage === index ? "bg-gold w-12" : "bg-white/40 w-6 hover:bg-white/60",
              )}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Intro & Story Section */}
      <section id="story" className="py-12 lg:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Badge className="mb-4 bg-teal/10 text-teal border-teal/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Welcome to the <span className="text-teal">Blue Star Family</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Blue Star Travels began with a single vehicle and a passion for hospitality. 
                  We started with a simple promise: to treat every guest like a member of our own family.
                </p>
                <p>
                  Over the past 16 years, we have grown into a premier travel provider in Sri Lanka. 
                  Yet, our core values remain unchanged. We believe that the best travel experiences 
                  come from personal connections and authentic encounters.
                </p>
                <p>
                  Whether it's arranging a private luxury vehicle for your tour or guiding you to 
                  hidden gems off the beaten path, our experienced team handles every detail with care.
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-gold mb-1">16+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <h4 className="text-3xl font-bold text-gold mb-1">100%</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Family Owned</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/galle-fort-lighthouse-sri-lanka-colonial.jpg"
                  alt="Sri Lanka Scenery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
                  <div className="flex items-start gap-3">
                    <Quote className="w-6 h-6 text-gold flex-shrink-0" />
                    <p className="font-light italic">
                      "We don't just show you Sri Lanka; we invite you to experience its warmth and heart."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Badge className="mb-4 bg-orange/10 text-orange border-orange/20">
              <Users className="w-4 h-4 mr-2" />
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-teal">Leaders</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The dedicated individuals steering our vision and ensuring your journey is perfection.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-72 bg-gradient-to-b from-navy to-bluestar flex items-end justify-center pt-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="relative w-full h-full flex items-end justify-center z-10">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={280}
                        height={280}
                        className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                        style={{ maxHeight: '100%', width: 'auto' }}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 flex-1 flex flex-col bg-white relative">
                    <div className="absolute -top-5 right-6 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-5 h-5 text-navy fill-navy" />
                    </div>

                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2 border-teal text-teal text-xs">
                        {member.role}
                      </Badge>
                      <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
                      <p className="text-sm text-muted-foreground italic border-l-2 border-gold pl-3 py-1 mb-3">
                        "{member.quote}"
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {member.highlights.map((tag, i) => (
                          <Badge key={i} className="bg-navy/5 text-navy hover:bg-navy/10 border-0 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-12 lg:py-16 bg-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-teal to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-teal/10 text-teal border-teal/30">
                <Car className="w-4 h-4 mr-2" />
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                Facilitating Your <span className="text-teal">Perfect Tour</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We specialize in providing comprehensive travel solutions. From the moment you land 
                to your departure, we handle all logistics so you can focus on enjoying the journey.
              </p>

              <div className="grid gap-4">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-white hover:bg-white/80 transition-colors border border-slate-200 shadow-sm"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-navy">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid gap-4">
                <div className="relative h-56 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/wild-elephants-safari-yala-national-park-sri-lanka.jpg"
                    alt="Safari"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <p className="text-white font-bold text-lg drop-shadow-md">Wildlife Safaris</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-40 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/tea-plantations-hill-country-sri-lanka-misty-mount.jpg"
                      alt="Hill Country"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative h-40 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/pristine-tropical-beach-sri-lanka-palm-trees-turqu.jpg"
                      alt="Beaches"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
