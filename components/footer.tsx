"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Tour Packages", href: "/tour-packages" },
  { name: "Destinations", href: "/destinations" },
  { name: "About Us", href: "/about" },
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
              Your gateway to authentic Sri Lankan experiences. A family business with 16 years of experience.
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
                  {link.href.startsWith("#") ? (
                    <a href={link.href} className="text-white/60 hover:text-teal transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-white/60 hover:text-teal transition-colors">
                      {link.name}
                    </Link>
                  )}
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

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-white/60">Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal" />
                <span className="text-white/60">+94 74 120 7909</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal" />
                <span className="text-white/60">bluestartravels26@gmail.com</span>
              </li>
            </ul>
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
