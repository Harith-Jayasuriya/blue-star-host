"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, ArrowRight, Clock, TrendingUp, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

const destinations = [
  {
    id: 1,
    name: "Sigiriya",
    image: "/sigiriya-lion-rock-fortress-sri-lanka-sunrise.jpg",
    description: "Ancient rock fortress and UNESCO World Heritage Site",
    location: "Central Province",
    rating: 4.9,
    bestTime: "Year Round",
    highlights: ["Lion Rock", "Frescoes", "Water Gardens", "Ancient Ruins"],
    category: "Historical",
    duration: "Full Day",
    popularity: "Very High",
  },
  {
    id: 2,
    name: "Ella",
    image: "/ella-nine-arches-bridge-sri-lanka-mountains.jpg",
    description: "Hill country paradise with stunning mountain views",
    location: "Uva Province",
    rating: 4.8,
    bestTime: "Dec - Mar",
    highlights: ["Nine Arches Bridge", "Ella Rock", "Tea Plantations", "Waterfalls"],
    category: "Nature",
    duration: "2-3 Days",
    popularity: "High",
  },
  {
    id: 3,
    name: "Galle Fort",
    image: "/galle-fort-lighthouse-sri-lanka-colonial.jpg",
    description: "Colonial heritage with Dutch architecture",
    location: "Southern Province",
    rating: 4.7,
    bestTime: "Nov - Apr",
    highlights: ["Dutch Fort", "Lighthouse", "Museums", "Beaches"],
    category: "Historical",
    duration: "Half Day",
    popularity: "High",
  },
  {
    id: 4,
    name: "Yala National Park",
    image: "/yala-national-park-leopard-safari-sri-lanka.jpg",
    description: "Premier wildlife sanctuary for leopard spotting",
    location: "Southern Province",
    rating: 4.9,
    bestTime: "Feb - Jul",
    highlights: ["Leopards", "Elephants", "Birds", "Safari"],
    category: "Wildlife",
    duration: "Full Day",
    popularity: "Very High",
  },
  {
    id: 5,
    name: "Kandy",
    image: "/kandy-temple-tooth-buddhist-sri-lanka.jpg",
    description: "Cultural capital and home to the Temple of the Tooth",
    location: "Central Province",
    rating: 4.8,
    bestTime: "Year Round",
    highlights: ["Temple of Tooth", "Botanical Gardens", "Cultural Shows", "Lake"],
    category: "Cultural",
    duration: "1-2 Days",
    popularity: "Very High",
  },
  {
    id: 6,
    name: "Mirissa",
    image: "/pristine-tropical-beach-sri-lanka-palm-trees-turqu.jpg",
    description: "Tropical beach haven perfect for relaxation",
    location: "Southern Province",
    rating: 4.7,
    bestTime: "Nov - Apr",
    highlights: ["Beaches", "Whale Watching", "Surfing", "Sunset"],
    category: "Beach",
    duration: "2-3 Days",
    popularity: "High",
  },
  {
    id: 7,
    name: "Nuwara Eliya",
    image: "/tea-plantations-hill-country-sri-lanka-misty-mount.jpg",
    description: "Little England with tea plantations and cool climate",
    location: "Central Province",
    rating: 4.6,
    bestTime: "Mar - May",
    highlights: ["Tea Estates", "Gregory Lake", "Horse Racing", "Gardens"],
    category: "Nature",
    duration: "1-2 Days",
    popularity: "Medium",
  },
  {
    id: 8,
    name: "Anuradhapura",
    image: "/ancient-temple-ruins-sigiriya-sri-lanka.jpg",
    description: "Ancient capital with sacred Buddhist sites",
    location: "North Central Province",
    rating: 4.8,
    bestTime: "Year Round",
    highlights: ["Sacred Bodhi Tree", "Ruins", "Dagobas", "Museums"],
    category: "Historical",
    duration: "Full Day",
    popularity: "High",
  },
  {
    id: 9,
    name: "Polonnaruwa",
    image: "/placeholder.jpg",
    description: "Medieval capital with well-preserved ruins",
    location: "North Central Province",
    rating: 4.7,
    bestTime: "Year Round",
    highlights: ["Ancient Ruins", "Gal Vihara", "Royal Palace", "Archaeological Museum"],
    category: "Historical",
    duration: "Full Day",
    popularity: "Medium",
  },
  {
    id: 10,
    name: "Bentota",
    image: "/placeholder.jpg",
    description: "Coastal resort town with golden beaches",
    location: "Southern Province",
    rating: 4.6,
    bestTime: "Nov - Apr",
    highlights: ["Beaches", "Water Sports", "River Safari", "Resorts"],
    category: "Beach",
    duration: "2-3 Days",
    popularity: "High",
  },
  {
    id: 11,
    name: "Adam's Peak",
    image: "/placeholder.jpg",
    description: "Sacred mountain peak for pilgrimage",
    location: "Central Province",
    rating: 4.8,
    bestTime: "Dec - May",
    highlights: ["Sunrise", "Pilgrimage", "Hiking", "Views"],
    category: "Adventure",
    duration: "Overnight",
    popularity: "High",
  },
  {
    id: 12,
    name: "Udawalawe National Park",
    image: "/wild-elephants-safari-yala-national-park-sri-lanka.jpg",
    description: "Best place to see wild elephants",
    location: "Uva Province",
    rating: 4.7,
    bestTime: "Year Round",
    highlights: ["Elephants", "Birds", "Safari", "Nature"],
    category: "Wildlife",
    duration: "Half Day",
    popularity: "Medium",
  },
]

const categories = ["All", "Historical", "Nature", "Wildlife", "Beach", "Cultural", "Adventure"]

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredDestinations = selectedCategory === "All"
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{ backgroundImage: "url(/pristine-tropical-beach-sri-lanka-palm-trees-turqu.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bluestar/70 via-bluestar/40 to-navy/80" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div
            className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <Badge className="mb-4 bg-teal/20 text-teal border-teal/30 backdrop-blur-sm">
              Discover Sri Lanka
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-gold">Destinations</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Explore the most beautiful and culturally rich destinations across the Pearl of the Indian Ocean
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section ref={sectionRef} className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div
            className={cn(
              "mb-12 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "rounded-full transition-all",
                    selectedCategory === category
                      ? "bg-navy text-white hover:bg-navy/90"
                      : "border-border hover:border-navy hover:text-navy",
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredDestinations.map((destination, index) => (
              <Card
                key={destination.id}
                className={cn(
                  "group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-white/90 text-navy hover:bg-white">
                    {destination.category}
                  </Badge>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-xs font-semibold text-navy">{destination.rating}</span>
                  </div>

                  {/* Popularity Badge */}
                  {destination.popularity === "Very High" && (
                    <Badge className="absolute bottom-4 left-4 bg-orange text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-teal hover:bg-teal/90 text-white">
                      Explore Destination
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-teal transition-colors">
                      {destination.name}
                    </h3>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Key Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No destinations found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

