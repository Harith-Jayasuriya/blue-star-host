import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TourPackages } from "@/components/tour-packages"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Destinations } from "@/components/destinations"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TourPackages />
      <WhyChooseUs />
      <Destinations />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
