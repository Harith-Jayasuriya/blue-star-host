"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Users, 
  Sun, 
  BookOpen,
  Heart,
  Globe,
  Mountain,
  Waves,
  Leaf,
  Coffee,
  Utensils,
  Music,
  Sparkles,
  ArrowRight,
  Plane,
  CreditCard,
  Phone,
  Shield,
  Languages,
  Compass,
  TreePalm,
  Bird,
  Gem,
  Crown,
  Landmark,
  ChevronDown,
  Star,
  Check,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { motion, type Variants } from "framer-motion"

// Animation variants with proper types
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

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
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
    transition: { type: "spring" as const, stiffness: 100, damping: 12 }
  }
}

// Hero images for parallax carousel
const heroImages = [
  "/sigiriya-rock-fortress-sri-lanka-aerial-view-sunri.jpg",
  "/pristine-tropical-beach-sri-lanka-palm-trees-turqu.jpg",
  "/tea-plantations-hill-country-sri-lanka-misty-mount.jpg",
  "/wild-elephants-safari-yala-national-park-sri-lanka.jpg",
]

// Quick stats
const quickStats = [
  { value: "65,610", label: "Square Kilometers", suffix: "km²" },
  { value: "22", label: "Million People", suffix: "M" },
  { value: "1,340", label: "Km Coastline", suffix: "km" },
  { value: "8", label: "UNESCO Sites", suffix: "" },
  { value: "2,500+", label: "Years of History", suffix: "yrs" },
  { value: "26°-30°", label: "Avg Temperature", suffix: "C" },
]

// Geography highlights with images
const geographyHighlights = [
  {
    title: "Pristine Beaches",
    description: "Sri Lanka boasts over 1,340 km of golden coastline with world-renowned beaches like Mirissa, Bentota, Unawatuna, and Arugam Bay. Crystal-clear waters, coral reefs, and palm-fringed shores make it a tropical paradise.",
    image: "/pristine-tropical-beach-sri-lanka-palm-trees-turqu.jpg",
    highlights: ["Whale Watching", "Surfing", "Snorkeling", "Beach Resorts"],
  },
  {
    title: "Misty Hill Country",
    description: "The central highlands rise dramatically to over 2,500 meters, featuring lush tea plantations, cascading waterfalls, and cool mountain air. Nuwara Eliya and Ella offer stunning landscapes and the famous scenic train rides.",
    image: "/tea-plantations-hill-country-sri-lanka-misty-mount.jpg",
    highlights: ["Tea Estates", "Waterfalls", "Hiking Trails", "Cool Climate"],
  },
  {
    title: "Wildlife Sanctuaries",
    description: "Home to diverse wildlife including leopards, elephants, sloth bears, and over 400 bird species. National parks like Yala, Udawalawe, and Wilpattu offer incredible safari experiences rivaling African destinations.",
    image: "/wild-elephants-safari-yala-national-park-sri-lanka.jpg",
    highlights: ["Leopards", "Wild Elephants", "Bird Watching", "Safari Tours"],
  },
]

// Historical periods with images
const historicalPeriods = [
  {
    era: "Ancient Kingdoms",
    period: "543 BC - 1017 AD",
    image: "/ancient-temple-ruins-sigiriya-sri-lanka.jpg",
    description: "The legendary arrival of Prince Vijaya from India marks the beginning of recorded Sri Lankan history. The ancient Sinhalese established sophisticated kingdoms with advanced irrigation systems, magnificent temples, and stupas that still stand today.",
    achievements: [
      "Anuradhapura - First capital, flourished for 1,400 years",
      "Introduction of Buddhism in 236 BC by Mahinda Thera",
      "Construction of massive irrigation tanks (Wewa) still in use",
      "Sigiriya Rock Fortress built by King Kashyapa",
      "Development of Pali literature and Buddhist scholarship"
    ],
  },
  {
    era: "Medieval Splendor",
    period: "1017 - 1505 AD",
    image: "/kandy-temple-tooth-buddhist-sri-lanka.jpg",
    description: "Following Chola invasions, Polonnaruwa emerged as the new capital, showcasing remarkable architectural achievements. The sacred Tooth Relic of Buddha was brought to Kandy, establishing it as the cultural and religious heart of the island.",
    achievements: [
      "Polonnaruwa - New capital with stunning stone architecture",
      "Gal Vihara - Masterpiece of rock-cut Buddha statues",
      "Temple of the Sacred Tooth Relic established in Kandy",
      "Development of unique Kandyan art and dance traditions",
      "Maritime trade with Arabs, Chinese, and Southeast Asia"
    ],
  },
  {
    era: "Colonial Era",
    period: "1505 - 1948 AD",
    image: "/galle-fort-lighthouse-sri-lanka-colonial.jpg",
    description: "Portuguese, Dutch, and British colonizers each left their mark on Sri Lanka. The Portuguese introduced Christianity, the Dutch built the iconic Galle Fort, and the British transformed the economy through tea, coffee, and rubber plantations.",
    achievements: [
      "Galle Fort - UNESCO World Heritage Dutch fortress",
      "Introduction of tea cultivation by the British",
      "Development of railways and modern infrastructure",
      "English education system established",
      "Blend of European and local architectural styles"
    ],
  },
  {
    era: "Independence & Modern Era",
    period: "1948 - Present",
    image: "/sigiriya-lion-rock-fortress-sri-lanka-sunrise.jpg",
    description: "Sri Lanka gained independence in 1948 and became a republic in 1972. Despite challenges, the nation has preserved its rich cultural heritage while embracing modern development, becoming a leading tourism destination in South Asia.",
    achievements: [
      "Independence from British rule on February 4, 1948",
      "First female prime minister in the world (1960)",
      "8 UNESCO World Heritage Sites recognized",
      "Growing tourism and technology sectors",
      "Preservation of ancient traditions and crafts"
    ],
  },
]

// Cultural traditions with detailed info
const traditions = [
  {
    title: "Buddhist Festivals",
    description: "Experience the magical atmosphere of Vesak with illuminated pandals and lanterns celebrating Buddha's birth, enlightenment, and passing. The spectacular Esala Perahera in Kandy features over 100 decorated elephants, traditional dancers, and drummers parading through ancient streets.",
    image: "/temple-of-tooth-kandy-sri-lanka-buddhist.jpg",
    icon: Sparkles,
    events: ["Vesak (May)", "Poson (June)", "Esala Perahera (July/August)", "Duruthu Perahera (January)"],
  },
  {
    title: "Traditional Dance & Music",
    description: "Sri Lanka's performing arts are a feast for the senses. Kandyan dance features elaborate costumes with silver ornaments and rhythmic movements. Low Country devil dancing combines exorcism rituals with acrobatic performances. The thundering drums and graceful movements tell stories of ancient legends.",
    image: "/stilt-fishermen-sri-lanka-traditional-sunset.jpg",
    icon: Music,
    events: ["Kandyan Dance", "Low Country Dance", "Sabaragamuwa Dance", "Traditional Drumming"],
  },
  {
    title: "Ayurveda & Wellness",
    description: "For over 3,000 years, Sri Lankans have practiced Ayurveda, an ancient system of natural healing. Today, you can experience authentic treatments at specialized resorts, from herbal massages to meditation retreats, all using locally grown medicinal plants.",
    image: "/luxury-beach-resort-mirissa-sri-lanka-sunset.jpg",
    icon: Leaf,
    events: ["Herbal Treatments", "Meditation Retreats", "Yoga Centers", "Spa Resorts"],
  },
  {
    title: "Ceylon Tea Heritage",
    description: "Sri Lanka is the world's fourth-largest tea producer, renowned for the distinctive flavor of Ceylon tea. Visit highland plantations dating back to the 1800s, witness the plucking and processing, and enjoy tastings with panoramic mountain views.",
    image: "/tea-plantations-hill-country-sri-lanka-misty-mount.jpg",
    icon: Coffee,
    events: ["Plantation Tours", "Tea Tasting", "Factory Visits", "High Tea Experiences"],
  },
]

// Cuisine section with images
const cuisineItems = [
  {
    name: "Rice & Curry",
    description: "The heart of Sri Lankan cuisine - steamed rice served with an array of curries, sambols, and accompaniments. Each region has unique variations.",
    spiceLevel: 4,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Hoppers (Appa)",
    description: "Bowl-shaped crispy pancakes made from fermented rice flour, often served with an egg in the center for breakfast.",
    spiceLevel: 1,
    image: "/hoppers.webp",
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "Kottu Roti",
    description: "Chopped flatbread stir-fried with vegetables, eggs, and meat on a hot griddle - the rhythmic chopping is iconic street food theater.",
    spiceLevel: 3,
    image: "/kottu.webp",
    color: "from-red-500 to-orange-600",
  },
  {
    name: "String Hoppers",
    description: "Delicate nests of steamed rice noodles, typically served at breakfast with curry and coconut sambol.",
    spiceLevel: 1,
    image: "/string.webp",
    color: "from-orange-300 to-yellow-400",
  },
  {
    name: "Lamprais",
    description: "A Dutch Burgher heritage dish - rice cooked in stock with curry, served wrapped in banana leaf and baked.",
    spiceLevel: 3,
    image: "/lamprais.webp",
    color: "from-green-600 to-emerald-500",
  }
]

// Practical info for travelers
const travelEssentials = [
  {
    icon: Plane,
    title: "Getting There",
    info: "Bandaranaike International Airport (CMB) near Colombo is the main gateway. Many international airlines operate direct flights from Asia, Middle East, Europe, and Australia.",
  },
  {
    icon: CreditCard,
    title: "Currency & Costs",
    info: "Sri Lankan Rupee (LKR). Budget travelers: $30-50/day. Mid-range: $50-150/day. Luxury: $200+/day. Credit cards accepted in cities; carry cash for rural areas.",
  },
  {
    icon: Languages,
    title: "Language",
    info: "Sinhala and Tamil are official languages. English is widely spoken in tourist areas, hotels, and by younger generations. Learning a few Sinhala phrases is appreciated!",
  },
  {
    icon: Shield,
    title: "Safety & Health",
    info: "Generally very safe for tourists. Drink bottled water, use mosquito repellent, and stay hydrated. Healthcare is good in cities. Travel insurance is recommended.",
  },
  {
    icon: Phone,
    title: "Connectivity",
    info: "4G mobile networks cover most areas. Tourist SIM cards are affordable at the airport. WiFi available in hotels and cafes. Power: 230V, Type D/G plugs.",
  },
  {
    icon: Compass,
    title: "Getting Around",
    info: "Trains offer scenic journeys. Private drivers are affordable and flexible. Tuk-tuks for short trips. Domestic flights available. Right-hand traffic.",
  },
]

// UNESCO World Heritage Sites
const unescoSites = [
  { name: "Sigiriya Rock Fortress", year: 1982, image: "https://plus.unsplash.com/premium_photo-1730145749791-28fc538d7203?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW51cmFkaGFwdXJhfGVufDB8fDB8fHww" },
  { name: "Ancient City of Polonnaruwa", year: 1982, image: "https://images.unsplash.com/photo-1709729508706-87741ec2d50a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Sacred City of Anuradhapura", year: 1982, image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Old Town of Galle", year: 1988, image: "https://images.unsplash.com/flagged/photo-1567498573339-688686a4b5df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FsbGV8ZW58MHx8MHx8fDA%3D" },
  { name: "Sacred City of Kandy", year: 1988, image: "/kandy-temple-tooth-buddhist-sri-lanka.jpg" },
  { name: "Sinharaja Forest Reserve", year: 1988, image: "https://images.unsplash.com/photo-1703566567802-e1945c83f0cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luaGFyYWphJTIwcmFpbiUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Golden Temple of Dambulla", year: 1991, image: "https://images.unsplash.com/photo-1586846288010-25744d79a132?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFtYnVsbGF8ZW58MHx8MHx8fDA%3D" },
  { name: "Central Highlands", year: 2010, image: "https://images.unsplash.com/photo-1574611122955-5baa61496637?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D" },
]

// Etiquette tips
const etiquetteTips = [
  { do: true, tip: "Remove shoes before entering temples and homes" },
  { do: true, tip: "Dress modestly at religious sites (cover shoulders and knees)" },
  { do: true, tip: "Use your right hand for greeting and eating" },
  { do: true, tip: "Ask permission before photographing people or sacred sites" },
  { do: false, tip: "Don't pose with Buddha statues or turn your back to them" },
  { do: false, tip: "Don't touch someone's head - it's considered sacred" },
  { do: false, tip: "Don't point with your finger or feet at people or objects" },
  { do: false, tip: "Don't display excessive public affection" },
]

export default function SriLankaPage() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const [activeHistoryIndex, setActiveHistoryIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Hero Section - Full Screen with Parallax */}
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
        
        {/* Animated Particles/Stars Effect - Fixed positions to avoid hydration mismatch */}
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
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '62%', top: '68%', animationDelay: '1.6s', animationDuration: '2.2s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '88%', top: '72%', animationDelay: '2.1s', animationDuration: '3.6s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '8%', top: '88%', animationDelay: '0.4s', animationDuration: '2.8s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '35%', top: '92%', animationDelay: '0.9s', animationDuration: '3.0s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '58%', top: '85%', animationDelay: '1.4s', animationDuration: '2.5s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '80%', top: '90%', animationDelay: '1.9s', animationDuration: '3.2s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '95%', top: '60%', animationDelay: '2.4s', animationDuration: '2.6s' }} />
          <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ left: '50%', top: '5%', animationDelay: '2.8s', animationDuration: '3.8s' }} />
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
                <Globe className="w-4 h-4 mr-2" />
                The Pearl of the Indian Ocean
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              Discover{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-gold to-orange animate-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Sri Lanka
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mb-4 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              An island of timeless wonders where ancient temples meet pristine beaches,
              misty mountains embrace lush tea gardens, and warm smiles welcome every traveler.
            </motion.p>
            
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              2,500+ years of history • 8 UNESCO World Heritage Sites • Endless adventures
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
                  onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
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

      {/* Quick Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-navy via-bluestar to-navy text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center border-r border-white/10 last:border-0"
                variants={staggerItem}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p 
                  className="text-2xl md:text-3xl font-bold text-gold mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  {stat.value}<span className="text-sm text-white/60">{stat.suffix}</span>
                </motion.p>
                <p className="text-xs text-white/70 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-12 lg:py-16 bg-background relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={scaleIn}>
                <Badge className="mb-4 bg-teal/10 text-teal border-teal/20">
                  About Sri Lanka
                </Badge>
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                variants={fadeInUp}
              >
                A Treasure Island of{" "}
                <span className="text-teal">Unforgettable</span> Experiences
              </motion.h2>
              <motion.div 
                className="space-y-4 text-muted-foreground text-lg"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p variants={fadeInUp}>
                  Nestled in the heart of the Indian Ocean, Sri Lanka is a compact island nation 
                  that packs an incredible diversity of experiences into its teardrop-shaped shores. 
                  From the ancient ruins of lost kingdoms to the rhythmic waves of palm-fringed beaches, 
                  every corner of this island tells a story.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Known as "Serendipity" by ancient Arab traders – the origin of the English word meaning 
                  pleasant surprises – Sri Lanka continues to delight visitors with unexpected discoveries. 
                  Whether you're watching elephants gather at sunset, sipping world-famous Ceylon tea in 
                  misty highlands, or exploring 2,000-year-old Buddhist temples, magic awaits.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  The warmth of Sri Lankan hospitality is legendary. With a genuine smile known locally 
                  as "Ayubowan" (may you live long), locals welcome travelers as honored guests, sharing 
                  their rich culture, spicy cuisine, and joyful celebrations.
                </motion.p>
              </motion.div>
              
              {/* Key Points */}
              <motion.div 
                className="grid grid-cols-2 gap-4 mt-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Landmark, text: "8 UNESCO World Heritage Sites" },
                  { icon: Bird, text: "400+ Bird Species" },
                  { icon: TreePalm, text: "15 National Parks" },
                  { icon: Gem, text: "World's Gem Capital" },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3"
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-teal" />
                    </motion.div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Image Grid */}
            <motion.div
              className="relative"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <motion.div 
                    className="relative h-48 rounded-2xl overflow-hidden shadow-xl group"
                    variants={staggerItem}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <Image
                      src="/sigiriya-lion-rock-fortress-sri-lanka-sunrise.jpg"
                      alt="Sigiriya Rock Fortress"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Sigiriya</span>
                  </motion.div>
                  <motion.div 
                    className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
                    variants={staggerItem}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <Image
                      src="/tea-plantations-hill-country-sri-lanka-misty-mount.jpg"
                      alt="Tea Plantations"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Hill Country</span>
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div 
                    className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
                    variants={staggerItem}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <Image
                      src="/pristine-tropical-beach-sri-lanka-palm-trees-turqu.jpg"
                      alt="Beaches"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Beaches</span>
                  </motion.div>
                  <motion.div 
                    className="relative h-48 rounded-2xl overflow-hidden shadow-xl group"
                    variants={staggerItem}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <Image
                      src="/leopard-yala-national-park-sri-lanka-wildlife.jpg"
                      alt="Wildlife"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Wildlife</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Geography & Landscapes */}
      <section className="py-12 lg:py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={scaleIn}>
              <Badge className="mb-4 bg-orange/10 text-orange border-orange/20">
                <Mountain className="w-4 h-4 mr-2" />
                Diverse Landscapes
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              variants={fadeInUp}
            >
              From Mountains to <span className="text-teal">Ocean</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              variants={fadeInUp}
            >
              Despite its small size, Sri Lanka offers an incredible diversity of landscapes – 
              all within a few hours' drive of each other
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {geographyHighlights.map((item, index) => (
              <motion.div
                key={index}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-center",
                  index % 2 === 1 && "lg:grid-flow-dense"
                )}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Image */}
                <motion.div
                  className={cn(
                    "relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group",
                    index % 2 === 1 && "lg:col-start-2"
                  )}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  
                  {/* Floating Tags */}
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                            {highlight}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
                  variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                >
                  <motion.span 
                    className="text-6xl font-bold text-teal/20"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    0{index + 1}
                  </motion.span>
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-foreground -mt-6 mb-4"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-12 lg:py-16 bg-navy text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={scaleIn}>
              <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">
                <BookOpen className="w-4 h-4 mr-2" />
                Rich Heritage
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              2,500 Years of <span className="text-gold">History</span>
            </motion.h2>
            <motion.p 
              className="text-white/70 max-w-2xl mx-auto text-lg"
              variants={fadeInUp}
            >
              Journey through time and discover the epic saga of one of Asia's oldest civilizations
            </motion.p>
          </motion.div>

          {/* Timeline Navigation */}
          <motion.div 
            className="flex justify-center gap-2 mb-8 flex-wrap"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {historicalPeriods.map((period, index) => (
              <motion.div key={index} variants={staggerItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={activeHistoryIndex === index ? "default" : "outline"}
                    onClick={() => setActiveHistoryIndex(index)}
                    className={cn(
                      "transition-all",
                      activeHistoryIndex === index
                        ? "bg-gold text-navy hover:bg-gold/90"
                        : "border-white/30 text-white hover:bg-white/10"
                    )}
                  >
                    {period.era}
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Period Display */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              key={activeHistoryIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={historicalPeriods[activeHistoryIndex].image}
                alt={historicalPeriods[activeHistoryIndex].era}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent" />
              <motion.div 
                className="absolute bottom-6 left-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gold text-sm font-medium mb-1">Period</p>
                <p className="text-3xl font-bold">{historicalPeriods[activeHistoryIndex].period}</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              key={`content-${activeHistoryIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-4 text-gold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {historicalPeriods[activeHistoryIndex].era}
              </motion.h3>
              <motion.p 
                className="text-white/80 text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {historicalPeriods[activeHistoryIndex].description}
              </motion.p>
              <div className="space-y-3">
                <p className="text-sm text-white/60 uppercase tracking-wider mb-2">Key Achievements</p>
                {historicalPeriods[activeHistoryIndex].achievements.map((achievement, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                    />
                    <span className="text-white/90">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* UNESCO World Heritage Sites */}
      <section className="py-12 lg:py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={scaleIn}>
              <Badge className="mb-4 bg-teal/10 text-teal border-teal/20">
                <Crown className="w-4 h-4 mr-2" />
                World Heritage
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              variants={fadeInUp}
            >
              8 UNESCO <span className="text-teal">World Heritage</span> Sites
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              variants={fadeInUp}
            >
              Sri Lanka has more UNESCO World Heritage Sites per square kilometer than almost any other country
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {unescoSites.map((site, index) => (
              <motion.div
                key={index}
                className="group relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge className="w-fit mb-2 bg-gold/20 text-gold border-gold/30 text-xs">
                      Since {site.year}
                    </Badge>
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                      {site.name}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture & Traditions */}
      <section className="py-12 lg:py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={scaleIn}>
              <Badge className="mb-4 bg-orange/10 text-orange border-orange/20">
                <Heart className="w-4 h-4 mr-2" />
                Living Heritage
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              variants={fadeInUp}
            >
              Culture & <span className="text-teal">Traditions</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              variants={fadeInUp}
            >
              Experience vibrant festivals, ancient rituals, and living traditions that have endured for millennia
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {traditions.map((tradition, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group h-full">
                  <div className="relative h-64">
                    <Image
                      src={tradition.image}
                      alt={tradition.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                    <motion.div 
                      className="absolute top-4 left-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <tradition.icon className="w-6 h-6 text-gold" />
                      </div>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-teal transition-colors">
                      {tradition.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{tradition.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tradition.events.map((event, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="bg-teal/10 text-teal">
                            {event}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cuisine Section */}
      <section className="py-12 lg:py-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={scaleIn}>
              <Badge className="mb-4 bg-orange/10 text-orange border-orange/20">
                <Utensils className="w-4 h-4 mr-2" />
                Culinary Journey
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              variants={fadeInUp}
            >
              A Feast for the <span className="text-orange">Senses</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Sri Lankan cuisine is an explosion of flavors – aromatic spices, fresh coconut, 
              and unique cooking techniques create dishes you won't find anywhere else. 
              From fiery curries to sweet tropical treats, prepare for a culinary adventure.
            </motion.p>
          </motion.div>

          {/* Food Gallery Carousel */}
          <motion.div 
            className="max-w-6xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {cuisineItems.map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      {/* Background Image */}
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent",
                        "group-hover:from-black/95 transition-all duration-500"
                      )} />
                      
                      {/* Spice Level Indicator */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-xl px-4 py-2.5 flex flex-col items-center gap-1 border border-white/20 shadow-lg">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-orange">Spice Level</span>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={cn(
                                "text-base transition-all drop-shadow-md",
                                i < item.spiceLevel 
                                  ? "scale-110 brightness-125" 
                                  : "opacity-30 scale-90 grayscale"
                              )}
                            >
                              🌶️
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500">
                        <div className="space-y-3">
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gold transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-white/80 text-sm md:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                            {item.description}
                          </p>
                          
                          {/* Decorative Line */}
                          <div className={cn(
                            "h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r",
                            item.color
                          )} />
                        </div>
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br",
                        item.color
                      )} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Arrows */}
              <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 w-12 h-12 bg-white/90 hover:bg-white border-2 border-orange/20 hover:border-orange text-orange shadow-lg" />
              <CarouselNext className="hidden md:flex -right-4 lg:-right-6 w-12 h-12 bg-white/90 hover:bg-white border-2 border-orange/20 hover:border-orange text-orange shadow-lg" />
            </Carousel>
          </motion.div>
          
          {/* Food List Cards - Below Gallery */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {cuisineItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="group p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange/20 flex items-start gap-4"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity bg-gradient-to-br", item.color)} />
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-foreground group-hover:text-orange transition-colors truncate">
                      {item.name}
                    </h4>
                    <div className="flex gap-0.5 flex-shrink-0">
                      {[...Array(item.spiceLevel)].map((_, i) => (
                        <span key={i} className="text-xs">🌶️</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Featured Badge */}
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="bg-white shadow-xl rounded-full py-3 px-6 flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Star className="w-5 h-5 text-orange fill-orange" />
              </motion.div>
              <div>
                <p className="font-bold text-sm">World's Best Ceylon Spices & Tea</p>
                <p className="text-xs text-muted-foreground">Authentic flavors since ancient times</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Climate Section with Interactive Map */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-teal/5 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={scaleIn}>
              <Badge className="mb-4 bg-teal/10 text-teal border-teal/20">
                <Sun className="w-4 h-4 mr-2" />
                Weather & Climate
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              variants={fadeInUp}
            >
              One Island, <span className="text-teal">Every Climate</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-3xl mx-auto text-lg"
              variants={fadeInUp}
            >
              Sri Lanka's unique geography creates diverse microclimates across the island. 
              From tropical beaches to cool mountains, there's always a perfect destination waiting for you – 
              <span className="text-teal font-semibold"> no matter when you visit!</span>
            </motion.p>
          </motion.div>

          {/* Centered Map with Info Cards Around - Desktop */}
          <div className="hidden lg:block max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-6 items-start">
              {/* Left Column - Top & Bottom Cards */}
              <div className="space-y-6">
                {/* Tropical Lowlands Card */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-orange/20 hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="w-8 h-8 text-orange" />
                    <div>
                      <h4 className="font-bold text-lg">Tropical Lowlands & Coastal</h4>
                      <p className="text-sm text-muted-foreground">West, South & North</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Warm tropical weather year-round with temperatures between 26-35°C. 
                    The west and south coasts are best from November to April.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange/10 text-orange">Beaches</Badge>
                    <Badge className="bg-orange/10 text-orange">Whale Watching</Badge>
                    <Badge className="bg-orange/10 text-orange">Water Sports</Badge>
                  </div>
                </div>
                
                {/* Hill Country Card */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-green-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Mountain className="w-8 h-8 text-green-600" />
                    <div>
                      <h4 className="font-bold text-lg">Cool Hill Country</h4>
                      <p className="text-sm text-muted-foreground">Kandy, Ella, Nuwara Eliya</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Escape to temperatures between 15-22°C year-round! Misty mountains, 
                    tea plantations, waterfalls, and stunning train journeys.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-500/10 text-green-600">Tea Estates</Badge>
                    <Badge className="bg-green-500/10 text-green-600">Hiking</Badge>
                    <Badge className="bg-green-500/10 text-green-600">Train Journeys</Badge>
                  </div>
                </div>
              </div>
              
              {/* Center Column - Map */}
              <div className="flex justify-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-teal/20">
                  <Image
                    src="/sri-lanka-climate-3.jpg"
                    alt="Sri Lanka Climate Zones Map"
                    width={450}
                    height={580}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Right Column - Top & Bottom Cards */}
              <div className="space-y-6">
                {/* East Coast Card */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-teal/20 hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Waves className="w-8 h-8 text-teal" />
                    <div>
                      <h4 className="font-bold text-lg">East Coast Paradise</h4>
                      <p className="text-sm text-muted-foreground">Trincomalee to Arugam Bay</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Best weather from April to September – perfect when the west has monsoon rains. 
                    Ideal for surfing, diving, and pristine uncrowded beaches.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal/10 text-teal">Surfing</Badge>
                    <Badge className="bg-teal/10 text-teal">Diving</Badge>
                    <Badge className="bg-teal/10 text-teal">Ancient Temples</Badge>
                  </div>
                </div>
                
                {/* Key Message Card */}
                <Card className="p-6 bg-gradient-to-r from-navy to-bluestar text-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Compass className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Perfect Weather Awaits!</h4>
                      <p className="text-white/80 text-sm">
                        No matter when you visit, there's always a region with ideal weather. 
                        Experience beaches, mountains, or rainforests – all in one trip!
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden max-w-xl mx-auto">
            {/* Map First */}
            <div className="flex justify-center mb-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/sri-lanka-climate-3.jpg"
                  alt="Sri Lanka Climate Zones Map"
                  width={350}
                  height={450}
                  className="w-full max-w-[350px] h-auto object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Climate Cards Stacked */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-orange/20">
                <div className="flex items-center gap-3 mb-2">
                  <Sun className="w-7 h-7 text-orange" />
                  <div>
                    <h4 className="font-bold">Tropical Lowlands & Coastal</h4>
                    <p className="text-xs text-muted-foreground">West, South & North</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  Warm tropical weather year-round, 26-35°C. Best Nov-Apr.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange/10 text-orange text-xs">Beaches</Badge>
                  <Badge className="bg-orange/10 text-orange text-xs">Whale Watching</Badge>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-teal/20">
                <div className="flex items-center gap-3 mb-2">
                  <Waves className="w-7 h-7 text-teal" />
                  <div>
                    <h4 className="font-bold">East Coast Paradise</h4>
                    <p className="text-xs text-muted-foreground">Trincomalee to Arugam Bay</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  Best Apr-Sep. Surfing, diving, uncrowded beaches.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-teal/10 text-teal text-xs">Surfing</Badge>
                  <Badge className="bg-teal/10 text-teal text-xs">Diving</Badge>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-green-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Mountain className="w-7 h-7 text-green-600" />
                  <div>
                    <h4 className="font-bold">Cool Hill Country</h4>
                    <p className="text-xs text-muted-foreground">Kandy, Ella, Nuwara Eliya</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  15-22°C year-round. Tea estates, waterfalls, train journeys.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500/10 text-green-600 text-xs">Tea Estates</Badge>
                  <Badge className="bg-green-500/10 text-green-600 text-xs">Hiking</Badge>
                </div>
              </div>
              
              <Card className="p-5 bg-gradient-to-r from-navy to-bluestar text-white">
                <div className="flex items-start gap-3">
                  <Compass className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Perfect Weather Awaits!</h4>
                    <p className="text-white/80 text-xs">
                      There's always a region with ideal weather – beaches, mountains, or rainforests!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Essentials */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-navy/10 text-navy border-navy/20">
              <Compass className="w-4 h-4 mr-2" />
              Plan Your Trip
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Travel <span className="text-teal">Essentials</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Everything you need to know before your Sri Lankan adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {travelEssentials.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.info}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Etiquette */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">
                <Users className="w-4 h-4 mr-2" />
                Cultural Tips
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Respect & <span className="text-teal">Etiquette</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A few simple gestures will earn you respect and warm smiles from locals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {etiquetteTips.map((tip, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-xl",
                    tip.do ? "bg-teal/5" : "bg-orange/5"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                    tip.do ? "bg-teal/20" : "bg-orange/20"
                  )}>
                    {tip.do ? (
                      <Check className="w-4 h-4 text-teal" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-orange" />
                    )}
                  </div>
                  <p className="text-sm">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/sigiriya-rock-fortress-sri-lanka-aerial-view-sunri.jpg"
            alt="Sri Lanka"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-bluestar/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">
                Magic of Sri Lanka?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let our expert team craft your perfect Sri Lankan adventure. 
              From ancient temples to pristine beaches, we'll create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tour-packages">
                <Button size="lg" className="bg-orange hover:bg-orange/90 text-white px-8 py-6 text-lg">
                  Browse Tour Packages
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/destinations">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-navy px-8 py-6 text-lg"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
