"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Code2, Github, Mail, Eye, EyeOff, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
            <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
            <p className="text-muted-foreground">Join thousands of developers building amazing software</p>
          </div>
        </div>

        {/* Signup Form */}
        <Card className="border-border/50">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Sign up</CardTitle>
            <CardDescription>Create your developer account to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Social Signup */}
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

            {/* Registration Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" type="text" placeholder="John" className="bg-background" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" type="text" placeholder="Doe" className="bg-background" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" placeholder="johndoe" className="bg-background" required />
              </div>

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
                    placeholder="Create a strong password"
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="bg-background pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Password must contain:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-muted-foreground">At least 8 characters</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-muted-foreground">One uppercase letter</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-muted-foreground">One number</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link href="/terms" className="text-accent hover:text-accent/80 transition-colors">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-accent hover:text-accent/80 transition-colors">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  Send me updates about new features and developer resources
                </Label>
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Create account
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-accent hover:text-accent/80 transition-colors">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
