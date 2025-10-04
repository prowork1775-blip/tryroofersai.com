"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Plus, Users, BookOpen, Rocket, Star, Code, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function GetStartedPage() {
  const router = useRouter()
  const [isCreating, setIsCreating] = useState(false)

  const handleCreateRepository = () => {
    setIsCreating(true)
    localStorage.setItem("isLoggedIn", "true")

    // Simulate repository creation with loading animation
    setTimeout(() => {
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <header className="border-b border-border/30 bg-card/80 backdrop-blur-md sticky top-0 z-50 neumorphic">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center neumorphic pulse-glow">
                <Github className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">GitFlow</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="neumorphic-hover">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-accent hover:bg-accent/90 neumorphic-hover pulse-glow">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 px-6 aurora-bg">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge
            variant="secondary"
            className="mb-6 bg-accent/10 text-accent border-accent/20 neumorphic px-4 py-2 glow-effect animate-bounce"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Welcome to GitFlow
          </Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-balance mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight animate-fade-in">
            Let's get you started
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-12 leading-relaxed max-w-2xl mx-auto animate-slide-up">
            Choose how you'd like to begin your journey with GitFlow. Whether you're starting fresh or joining a team,
            we've got you covered.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 neumorphic bg-card hover:shadow-2xl transition-all duration-500 p-6 text-center group hover:scale-105 interactive-card glow-effect">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-6 neumorphic-inset mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Plus className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="font-heading text-2xl mb-4">Create a repository</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Start a new project from scratch or import an existing codebase to begin collaborating
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  onClick={handleCreateRepository}
                  disabled={isCreating}
                  className="w-full bg-accent hover:bg-accent/90 neumorphic-hover pulse-glow relative overflow-hidden"
                >
                  {isCreating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating...
                    </>
                  ) : (
                    "Create Repository"
                  )}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 neumorphic bg-card hover:shadow-2xl transition-all duration-500 p-6 text-center group hover:scale-105 interactive-card">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-6 neumorphic-inset mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="font-heading text-2xl mb-4">Join a team</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Collaborate with your team members on existing projects and contribute to shared repositories
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link href="/signup">
                  <Button
                    variant="outline"
                    className="w-full neumorphic-hover bg-transparent relative overflow-hidden group"
                  >
                    Join Team
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 neumorphic bg-card hover:shadow-2xl transition-all duration-500 p-6 text-center group hover:scale-105 interactive-card">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-6 neumorphic-inset mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <BookOpen className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="font-heading text-2xl mb-4">Explore features</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Learn about GitFlow's powerful features and see how they can improve your development workflow
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  variant="outline"
                  className="w-full neumorphic-hover bg-transparent relative overflow-hidden group"
                >
                  View Demo
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-balance">
              Popular repositories to explore
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Discover trending projects and get inspired by what the community is building
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 neumorphic bg-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="border-b border-border/30 bg-muted/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center neumorphic-inset">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-heading">facebook/react</CardTitle>
                      <CardDescription className="text-sm">
                        The library for web and native user interfaces
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="gap-1 neumorphic px-2 py-1 text-xs">
                      <Star className="w-3 h-3" />
                      223k
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    JavaScript
                  </span>
                  <span>Updated 2 hours ago</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 neumorphic bg-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="border-b border-border/30 bg-muted/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center neumorphic-inset">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-heading">vercel/next.js</CardTitle>
                      <CardDescription className="text-sm">The React Framework for the Web</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="gap-1 neumorphic px-2 py-1 text-xs">
                      <Star className="w-3 h-3" />
                      122k
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    TypeScript
                  </span>
                  <span>Updated 1 hour ago</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 neumorphic bg-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="border-b border-border/30 bg-muted/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center neumorphic-inset">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-heading">microsoft/vscode</CardTitle>
                      <CardDescription className="text-sm">Visual Studio Code</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="gap-1 neumorphic px-2 py-1 text-xs">
                      <Star className="w-3 h-3" />
                      156k
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    TypeScript
                  </span>
                  <span>Updated 3 hours ago</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 neumorphic bg-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="border-b border-border/30 bg-muted/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center neumorphic-inset">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-heading">angular/angular</CardTitle>
                      <CardDescription className="text-sm">Deliver web apps with confidence</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="gap-1 neumorphic px-2 py-1 text-xs">
                      <Star className="w-3 h-3" />
                      93k
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    TypeScript
                  </span>
                  <span>Updated 4 hours ago</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-balance">Ready to start building?</h2>
          <p className="text-lg opacity-90 text-balance mb-8 leading-relaxed">
            Join millions of developers who trust GitFlow for their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                variant="secondary"
                className="bg-card text-card-foreground hover:bg-card/90 neumorphic-hover px-8 py-3"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create your account
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent neumorphic-hover px-8 py-3"
              >
                Explore repositories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
