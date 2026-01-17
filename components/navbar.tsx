"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tour Packages", href: "/tour-packages" },
  { name: "Destinations", href: "/destinations" },
  { name: "Sri Lanka", href: "/sri-lanka" },
  { name: "Contact", href: "#contact" },
]

// Pages with dark hero sections that need white navbar text before scroll
const darkHeroPages = ["/", "/sri-lanka", "/tour-packages", "/destinations"]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const hasDarkHero = darkHeroPages.includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                isScrolled || !hasDarkHero ? "bg-bluestar" : "bg-white/20 backdrop-blur-sm",
              )}
            >
              <span className="text-white font-bold text-lg">★</span>
            </div>
            <span className={cn("text-xl font-bold transition-colors", isScrolled || !hasDarkHero ? "text-bluestar" : "text-white")}>
              Blue Star <span className="text-teal">Travels</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith("#")
              const Component = isHashLink ? "a" : Link
              const href = isHashLink ? (isHomePage ? link.href : `/${link.href}`) : link.href
              
              return (
                <Component
                  key={link.name}
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-teal relative group",
                    isScrolled || !hasDarkHero ? "text-foreground" : "text-white",
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all group-hover:w-full" />
                </Component>
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-2 transition-colors",
                isScrolled || !hasDarkHero ? "text-foreground hover:text-teal" : "text-white hover:text-teal",
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+94 77 123 4567</span>
            </Button>
            <Button size="sm" className="bg-teal hover:bg-teal/90 text-white gap-2 animate-pulse">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn("lg:hidden", isScrolled || !hasDarkHero ? "text-foreground" : "text-white")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white rounded-xl shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isHashLink = link.href.startsWith("#")
                const Component = isHashLink ? "a" : Link
                const href = isHashLink ? (isHomePage ? link.href : `/${link.href}`) : link.href
                
                return (
                  <Component
                    key={link.name}
                    href={href}
                    className="text-foreground font-medium py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Component>
                )
              })}
              <hr className="my-2" />
              <Button className="bg-teal hover:bg-teal/90 text-white gap-2 w-full">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
