"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Tour Packages", href: "#packages" },
  { name: "Destinations", href: "#destinations" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const tourTypes = [
  "Cultural Tours",
  "Beach Holidays",
  "Wildlife Safaris",
  "Adventure Tours",
  "Honeymoon Packages",
  "Ayurveda & Wellness",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo.svg" 
                  alt="Blue Star Travels" 
                  width={40} 
                  height={40} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Blue Star</span> <span className="text-teal">Travels</span>
              </span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Your gateway to authentic Sri Lankan experiences. Creating unforgettable journeys since 2010.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-teal transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Types */}
          <div>
            <h4 className="text-lg font-bold mb-6">Tour Types</h4>
            <ul className="space-y-3">
              {tourTypes.map((tour) => (
                <li key={tour}>
                  <a href="#packages" className="text-white/60 hover:text-teal transition-colors">
                    {tour}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-white/60">42 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal" />
                <span className="text-white/60">+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal" />
                <span className="text-white/60">hello@bluestartravels.lk</span>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-teal"
                required
              />
              <Button
                type="submit"
                size="icon"
                className={cn(
                  "flex-shrink-0 transition-all",
                  isSubscribed ? "bg-green-500" : "bg-teal hover:bg-teal/90",
                )}
                disabled={isSubscribed}
              >
                {isSubscribed ? <CheckCircle className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </Button>
            </form>
            {isSubscribed && <p className="text-green-400 text-sm mt-2 animate-in fade-in">Thanks for subscribing!</p>}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© 2026 Blue Star Travels. All rights reserved.</p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">We accept:</span>
              <div className="flex gap-2">
                {["Visa", "Mastercard", "Amex", "PayPal"].map((payment) => (
                  <div key={payment} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
