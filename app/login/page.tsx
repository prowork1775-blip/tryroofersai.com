"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Code2, Github, Mail, Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to DevHub
          </Link>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">DevHub</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your developer account</p>
          </div>
        </div>

        {/* Login Form */}
        <Card className="border-border/50">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Sign in</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="bg-transparent">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bg-background pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-muted-foreground">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-accent hover:text-accent/80 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Sign in
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-accent hover:text-accent/80 transition-colors">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-accent hover:text-accent/80 transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-accent hover:text-accent/80 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
