"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Code2, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to sign in
          </Link>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">DevHub</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reset your password</h1>
            <p className="text-muted-foreground">Enter your email and we'll send you a reset link</p>
          </div>
        </div>

        {/* Reset Form */}
        <Card className="border-border/50">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Forgot password</CardTitle>
            <CardDescription>We'll send you instructions to reset your password</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background" required />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                <Mail className="w-4 h-4 mr-2" />
                Send reset link
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/login" className="text-accent hover:text-accent/80 transition-colors">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <Card className="border-border/50 bg-muted/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="text-sm font-medium text-foreground">Need help?</h3>
              <p className="text-xs text-muted-foreground">
                If you don't receive an email within a few minutes, check your spam folder or{" "}
                <Link href="/support" className="text-accent hover:text-accent/80 transition-colors">
                  contact support
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
