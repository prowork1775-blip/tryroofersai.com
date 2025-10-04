"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Zap,
  Star,
  Shield,
  CheckCircle2,
  Sun,
  Moon,
  Home,
  Calendar,
  MapPin,
  XCircle,
  Pause,
  Smile,
  Frown,
  Infinity,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const FloatingParticles = () => (
    <div className="floating-particles">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className={`particle ${i % 3 === 0 ? "particle-code" : i % 3 === 1 ? "particle-star" : "particle-dot"}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        >
          {i % 5 === 0 && <Home className="w-3 h-3" />}
          {i % 7 === 0 && <MessageSquare className="w-2 h-2" />}
        </div>
      ))}
    </div>
  )

  const AnimatedGrid = () => (
    <div className="animated-grid">
      <div className="grid-lines-horizontal">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-line" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
      <div className="grid-lines-vertical">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-line" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedGrid />
      <FloatingParticles />
      <div
        className="spotlight enhanced-spotlight"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />

      <header className="border-b border-border/30 bg-card/90 backdrop-blur-xl sticky top-0 z-50 neumorphic header-glow">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center neumorphic pulse-glow rotating-logo">
                <Home className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <Link href="/" className="flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl font-heading font-bold text-foreground gradient-text">
                  RoofersAI
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-all duration-500 font-medium nav-link"
              >
                Home
              </Link>
              <a
                href="#process"
                className="text-muted-foreground hover:text-foreground transition-all duration-500 font-medium nav-link"
              >
                Process
              </a>
              <a
                href="#benefits"
                className="text-muted-foreground hover:text-foreground transition-all duration-500 font-medium nav-link"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-all duration-500 font-medium nav-link"
              >
                Pricing
              </a>
            </nav>
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="neumorphic-hover theme-toggle">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Link href="/schedule-call">
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 neumorphic-hover pulse-glow cta-button text-xs md:text-sm px-3 md:px-4"
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-32 px-4 md:px-6 aurora-bg enhanced-aurora min-h-[80vh] md:min-h-[90vh] flex items-center">
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <Badge
            variant="secondary"
            className="mb-6 md:mb-8 bg-accent/20 text-accent-foreground border-accent/30 neumorphic px-3 py-1.5 md:px-4 md:py-2 glow-effect floating-badge text-xs md:text-sm"
          >
            <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
            FOR CONTRACTORS ONLY
          </Badge>

          <p className="text-sm md:text-lg text-muted-foreground mb-3 md:mb-4 fade-in-up">Watch The Video Below 👇</p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-balance mb-6 md:mb-8 text-foreground leading-tight hero-title px-2">
            GET Unlimited Pre-Qualified
            <br />
            Leads - ONLY Pay Per Lead
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-balance mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto fade-in-up font-semibold px-2">
            ($0 Setup Fees + No Contracts)
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-12 px-4">
            <Link href="/schedule-call">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground neumorphic-hover px-6 py-3 md:px-8 md:py-4 text-base md:text-lg pulse-glow enhanced-cta w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                Schedule a Call
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 mb-12 md:mb-20">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-sm md:text-base text-muted-foreground font-medium ml-2">24+ 4.8 Star Reviews</span>
          </div>

          <div className="relative max-w-5xl mx-auto px-2">
            <Card className="border-0 neumorphic bg-card overflow-hidden repo-preview">
              <div className="aspect-video bg-muted/30 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5"></div>
                <div className="relative z-10 text-center p-4 md:p-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 neumorphic-inset pulse-glow group-hover:scale-110 transition-transform cursor-pointer">
                    <div className="w-0 h-0 border-t-6 md:border-t-8 border-t-transparent border-l-8 md:border-l-12 border-l-accent border-b-6 md:border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">Watch Demo Video</p>
                  <p className="text-xs md:text-sm text-muted-foreground/70">See how contractors get qualified leads</p>
                </div>
                <img
                  src="/roofing-contractor-using-smartphone-with-ai-sms-da.jpg"
                  alt="RoofersAI Demo"
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm md:text-base text-muted-foreground font-medium mb-3 md:mb-4">
            Trusted by Top Contractors
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-base md:text-lg text-foreground font-semibold ml-2">24+ 4.8 Star Reviews</span>
          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="mb-4 md:mb-6 bg-accent/10 text-accent border-accent/20 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold"
            >
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              PROCESS
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 text-balance px-2">
              A Proven & Easy Process to Success:{" "}
              <span className="text-muted-foreground">Qualified Leads To Closings</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12 md:mb-16 px-2">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed text-center">
              Our process cuts high lead costs with our zero-ad spend system, keeping our team in-house to contact
              homeowners in your area, finding and vetting qualified leads, and having them ready to hire you as a
              Contractor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-card p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge
                    variant="secondary"
                    className="mb-2 md:mb-3 bg-accent text-white px-2.5 py-0.5 md:px-3 md:py-1 text-xs font-semibold"
                  >
                    Step 1
                  </Badge>
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3 text-foreground">
                    Choose your zip codes.
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Each contractor we work with gets their own zip codes exclusively handpicked, and once chosen, we
                    cannot work with any other contractor there.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-0 bg-card p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge
                    variant="secondary"
                    className="mb-2 md:mb-3 bg-accent text-white px-2.5 py-0.5 md:px-3 md:py-1 text-xs font-semibold"
                  >
                    Step 2
                  </Badge>
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3 text-foreground">
                    Backend at work.
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We have perfected our system to a tee, allowing us to start generating you ready-to-hire qualified
                    leads in as little as 1 day. No need to wait 2 weeks, get results instantly.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-0 bg-card p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge
                    variant="secondary"
                    className="mb-2 md:mb-3 bg-accent text-white px-2.5 py-0.5 md:px-3 md:py-1 text-xs font-semibold"
                  >
                    Step 3
                  </Badge>
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3 text-foreground">
                    Qualification Criteria:
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We start by verifying contact info - they are indeed the homeowner. Not contracted with a roofer.
                    Ready to hire within 1-4 Weeks. They have been vetted by our Lead Review Team and they are motivated
                    to hire.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-0 bg-card p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Pause className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge
                    variant="secondary"
                    className="mb-2 md:mb-3 bg-accent text-white px-2.5 py-0.5 md:px-3 md:py-1 text-xs font-semibold"
                  >
                    Step 4
                  </Badge>
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3 text-foreground">
                    You're in control.
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Now that you're consistently getting qualified leads, it's up to you how many you want per week. If
                    you want to stop the lead flow, simply pause the system with the click of a button so you have
                    maximum flexibility.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 md:py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="mb-4 md:mb-6 bg-accent/10 text-accent border-accent/20 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold"
            >
              <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              BENEFITS
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4 text-balance px-2">
              Benefits of our Meticulous Process:
            </h2>
            <p className="text-base md:text-xl text-muted-foreground text-balance px-2">
              Carefully refinder over the past 4 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Smile className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground">With Roof Pilot:</h3>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg md:text-xl mb-1.5 md:mb-2 text-foreground">
                      No Startup Cost.
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Each contractor we work with gets their own zip codes exclusively handpicked, and once chosen, we
                      cannot work with any other roofer there.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg md:text-xl mb-1.5 md:mb-2 text-foreground">
                      No Commitments.
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      We know we don't have to make you sign a contract because we know you'll love our leads and
                      continue using our service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg md:text-xl mb-1.5 md:mb-2 text-foreground">
                      Cost Efficient.
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Simply pay only $75 per qualified lead and nothing else. No closing %. Just a one-time fee only
                      after you get a lead.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <Frown className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground">Without:</h3>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-destructive rounded-full flex items-center justify-center">
                      <XCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg md:text-xl mb-1.5 md:mb-2 text-foreground">
                      $500-$3000 Startups
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Companies simply only make their money this way because they can't deliver on their service where
                      we only make money as you love and continue wanting our qualified leads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-destructive rounded-full flex items-center justify-center">
                      <XCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg md:text-xl mb-1.5 md:mb-2 text-foreground">
                      Monthly Contracts
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      They tell you it takes weeks to start getting results but they simply just have not worked in your
                      market before and are not confident in their ability or simply don't know what they are doing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-destructive rounded-full flex items-center justify-center">
                      <XCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg md:text-xl mb-1.5 md:mb-2 text-foreground">
                      Never-ending hidden fees.
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Unclear pricing and hidden costs can drain your budget and have you losing money
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4 text-balance px-2">
              Transparent Pricing,
              <br />
              <span className="text-muted-foreground">No Hidden Fees Guaranteed!</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-2">No contracts. Pause or cancel anytime.</p>
          </div>

          <Card className="border-0 bg-card shadow-xl max-w-lg mx-auto p-6 md:p-8">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Infinity className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
            </div>

            <Badge
              variant="secondary"
              className="mb-3 md:mb-4 bg-accent text-white px-2.5 py-0.5 md:px-3 md:py-1 text-xs font-semibold"
            >
              CUSTOM
            </Badge>

            <h3 className="font-heading font-bold text-xl md:text-2xl mb-4 md:mb-6 text-foreground">
              We Offer Bulk Discounts For Contractors Who Buy Bulk.
            </h3>

            <div className="mb-6 md:mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-heading font-bold text-foreground">$X</span>
                <span className="text-muted-foreground text-base md:text-lg">/lead</span>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Infinity className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent" />
                </div>
                <span className="text-sm md:text-base text-muted-foreground">Everything Mentioned</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Infinity className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent" />
                </div>
                <span className="text-sm md:text-base text-muted-foreground">Customized approaches</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent" />
                </div>
                <span className="text-sm md:text-base text-accent font-semibold">Discounts For Bulk</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">+</span>
                <span className="text-sm md:text-base text-foreground font-semibold">And More...</span>
              </div>
            </div>

            <Link href="/schedule-call">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white py-5 md:py-6 text-base md:text-lg font-semibold"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Get a Quote
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground relative overflow-hidden cta-section">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90 animated-gradient"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 text-balance cta-title px-2">
            Ready to Get Qualified Leads?
          </h2>
          <p className="text-base md:text-xl opacity-90 text-balance mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
            Join top contractors who are closing more deals with our zero-ad spend lead generation system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <Link href="/schedule-call">
              <Button
                size="lg"
                variant="secondary"
                className="bg-card text-card-foreground hover:bg-card/90 neumorphic-hover px-6 py-3 md:px-8 md:py-4 text-base md:text-lg pulse-glow cta-primary w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                Schedule a Call
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground fill-primary-foreground" />
              ))}
            </div>
            <span className="text-sm md:text-base font-medium ml-2">24+ 4.8 Star Reviews</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/30 bg-card py-12 md:py-16 px-4 md:px-6 neumorphic footer-glow">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center neumorphic-inset pulse-glow">
                  <Home className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-lg md:text-xl text-foreground gradient-text">
                  RoofersAI
                </span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Zero-ad spend lead generation platform built specifically for roofing contractors.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base text-foreground">Product</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground">
                <li>
                  <a href="#process" className="hover:text-foreground transition-colors footer-link">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-foreground transition-colors footer-link">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors footer-link">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors footer-link">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base text-foreground">
                Resources
              </h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors footer-link">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors footer-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors footer-link">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base text-foreground">Company</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors footer-link">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2025 RoofersAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
