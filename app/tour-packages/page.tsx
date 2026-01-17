"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, ArrowRight, MapPin, Users, Calendar, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

const allTours = [
  {
    id: 1,
    title: "Cultural Triangle Explorer",
    image: "/ancient-temple-ruins-sigiriya-sri-lanka.jpg",
    duration: "7 Days",
    price: "$899",
    originalPrice: "$1099",
    rating: 4.9,
    reviews: 127,
    highlights: ["Sigiriya Rock", "Dambulla Cave Temple", "Polonnaruwa", "Anuradhapura"],
    category: "Cultural",
    difficulty: "Moderate",
    groupSize: "12-16",
    includes: ["Accommodation", "Meals", "Guide", "Transport"],
  },
  {
    id: 2,
    title: "Beach Paradise Escape",
    image: "/luxury-beach-resort-mirissa-sri-lanka-sunset.jpg",
    duration: "5 Days",
    price: "$699",
    originalPrice: "$849",
    rating: 4.8,
    reviews: 98,
    highlights: ["Mirissa Beach", "Whale Watching", "Galle Fort", "Bentota"],
    category: "Beach",
    difficulty: "Easy",
    groupSize: "8-12",
    includes: ["Resort Stay", "Breakfast", "Water Sports", "Transport"],
  },
  {
    id: 3,
    title: "Wildlife Safari Adventure",
    image: "/leopard-yala-national-park-sri-lanka-wildlife.jpg",
    duration: "4 Days",
    price: "$599",
    originalPrice: "$749",
    rating: 4.9,
    reviews: 156,
    highlights: ["Yala Safari", "Udawalawe", "Minneriya", "Wilpattu"],
    category: "Wildlife",
    difficulty: "Moderate",
    groupSize: "6-10",
    includes: ["Safari Tours", "Lodge", "Meals", "Expert Guide"],
  },
  {
    id: 4,
    title: "Hill Country Journey",
    image: "/nine-arches-bridge-ella-sri-lanka-train.jpg",
    duration: "6 Days",
    price: "$749",
    originalPrice: "$899",
    rating: 4.7,
    reviews: 89,
    highlights: ["Ella", "Nuwara Eliya", "Train Ride", "Tea Plantations"],
    category: "Adventure",
    difficulty: "Moderate",
    groupSize: "10-14",
    includes: ["Hotels", "Train Tickets", "Meals", "Guide"],
  },
  {
    id: 5,
    title: "Coastal Discovery Tour",
    image: "/stilt-fishermen-sri-lanka-traditional-sunset.jpg",
    duration: "8 Days",
    price: "$999",
    originalPrice: "$1199",
    rating: 4.8,
    reviews: 112,
    highlights: ["Bentota", "Hikkaduwa", "Trincomalee", "Arugam Bay"],
    category: "Beach",
    difficulty: "Easy",
    groupSize: "8-12",
    includes: ["Beach Resorts", "All Meals", "Snorkeling", "Transport"],
  },
  {
    id: 6,
    title: "Spiritual Journey",
    image: "/temple-of-tooth-kandy-sri-lanka-buddhist.jpg",
    duration: "5 Days",
    price: "$649",
    originalPrice: "$799",
    rating: 4.9,
    reviews: 143,
    highlights: ["Kandy Temple", "Adam's Peak", "Anuradhapura", "Dambulla"],
    category: "Cultural",
    difficulty: "Challenging",
    groupSize: "12-18",
    includes: ["Temples", "Accommodation", "Meals", "Spiritual Guide"],
  },
  {
    id: 7,
    title: "Luxury Honeymoon Package",
    image: "/pristine-tropical-beach-sri-lanka-palm-trees-turqu.jpg",
    duration: "10 Days",
    price: "$1899",
    originalPrice: "$2299",
    rating: 5.0,
    reviews: 67,
    highlights: ["Private Villas", "Spa Treatments", "Romantic Dinners", "Sunset Cruises"],
    category: "Luxury",
    difficulty: "Easy",
    groupSize: "2",
    includes: ["5-Star Resorts", "All Meals", "Spa", "Private Transport"],
  },
  {
    id: 8,
    title: "Tea Trail Experience",
    image: "/tea-plantations-hill-country-sri-lanka-misty-mount.jpg",
    duration: "5 Days",
    price: "$679",
    originalPrice: "$829",
    rating: 4.6,
    reviews: 74,
    highlights: ["Tea Estates", "Factory Tours", "Mountain Views", "Local Culture"],
    category: "Cultural",
    difficulty: "Easy",
    groupSize: "8-12",
    includes: ["Plantation Stays", "Tastings", "Meals", "Guide"],
  },
  {
    id: 9,
    title: "Adventure Sports Extravaganza",
    image: "/placeholder.jpg",
    duration: "6 Days",
    price: "$849",
    originalPrice: "$999",
    rating: 4.7,
    reviews: 91,
    highlights: ["White Water Rafting", "Surfing", "Rock Climbing", "Zip Lining"],
    category: "Adventure",
    difficulty: "Challenging",
    groupSize: "6-10",
    includes: ["Equipment", "Instructors", "Accommodation", "Meals"],
  },
]

const categories = ["All", "Cultural", "Beach", "Wildlife", "Adventure", "Luxury"]

export default function TourPackagesPage() {
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

  const filteredTours = selectedCategory === "All" 
    ? allTours 
    : allTours.filter(tour => tour.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{ backgroundImage: "url(/sigiriya-rock-fortress-sri-lanka-aerial-view-sunri.jpg)" }}
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
              Explore Our Tours
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Tour <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-gold">Packages</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Discover Sri Lanka with our carefully curated tour packages designed for every type of traveler
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section ref={sectionRef} className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div
            className={cn(
              "mb-12 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="flex items-center gap-4 mb-6">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">Filter by Category</h3>
            </div>
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

          {/* Tour Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTours.map((tour, index) => (
              <Card
                key={tour.id}
                className={cn(
                  "group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${tour.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-white/90 text-navy hover:bg-white">
                    {tour.category}
                  </Badge>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-xs font-semibold text-navy">{tour.rating}</span>
                  </div>

                  {/* Discount Badge */}
                  {tour.originalPrice && (
                    <Badge className="absolute bottom-4 left-4 bg-orange text-white">
                      Save {Math.round(((parseFloat(tour.originalPrice.replace('$', '')) - parseFloat(tour.price.replace('$', ''))) / parseFloat(tour.originalPrice.replace('$', ''))) * 100)}%
                    </Badge>
                  )}

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-orange hover:bg-orange/90 text-white">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-teal transition-colors">
                    {tour.title}
                  </h3>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{tour.groupSize}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{tour.difficulty}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-sm font-semibold">{tour.rating}</span>
                      <span className="text-sm text-muted-foreground">({tour.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-1">
                      {tour.includes.map((item, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      {tour.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {tour.originalPrice}
                        </span>
                      )}
                      <p className="text-2xl font-bold text-teal">{tour.price}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">per person</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No tours found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

