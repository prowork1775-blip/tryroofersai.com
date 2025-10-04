"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Home, Sun, Moon } from "lucide-react"

export default function ScheduleCallPage() {
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

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
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
              <Link
                href="/#process"
                className="text-muted-foreground hover:text-foreground transition-all duration-500 font-medium nav-link"
              >
                Process
              </Link>
              <Link
                href="/#benefits"
                className="text-muted-foreground hover:text-foreground transition-all duration-500 font-medium nav-link"
              >
                Benefits
              </Link>
              <Link
                href="/#pricing"
                className="text-muted-foreground hover:text-foreground transition-all duration-500 font-medium nav-link"
              >
                Pricing
              </Link>
            </nav>
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="neumorphic-hover theme-toggle">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 neumorphic-hover pulse-glow cta-button text-xs md:text-sm px-3 md:px-4"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/20 text-accent-foreground border-accent/30 neumorphic px-3 py-1.5 md:px-4 md:py-2 glow-effect floating-badge text-xs md:text-sm"
          >
            <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
            SEE IF YOUR ZIP CODES ARE AVAILABLE
          </Badge>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3 md:mb-4 hero-title">
            Request a demo
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up">
            No Setup fees and no long-term commitments. Just $75 per exclusive qualified seller lead. No hidden fees.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="w-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden">
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/prowork1775/30min"
              style={{ minWidth: "100%", height: "800px" }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
