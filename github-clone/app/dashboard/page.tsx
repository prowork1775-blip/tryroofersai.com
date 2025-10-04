"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Code2,
  Users,
  Star,
  GitFork,
  Search,
  Plus,
  Clock,
  Activity,
  BookOpen,
  Settings,
  Bell,
  Filter,
  Calendar,
  TrendingUp,
  GitCommit,
  GitPullRequest as PullRequest,
  AlertCircle,
  LogOut,
  User,
  Github,
  ChevronDown,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function DashboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn !== "true") {
      router.push("/")
    }
  }, [router])

  const handleLogout = () => {
    setIsLoading(true)
    localStorage.removeItem("isLoggedIn")

    // Simulate logout process with animation
    setTimeout(() => {
      router.push("/")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="floating-particles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-border/30 bg-card/80 backdrop-blur-md sticky top-0 z-50 neumorphic">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center neumorphic pulse-glow">
                  <Github className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-heading font-bold text-foreground">GitFlow</span>
              </div>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search repositories..." className="pl-10 w-80 bg-muted/50 neumorphic-inset" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="neumorphic-hover">
                <Bell className="w-4 h-4" />
              </Button>
              <Button size="sm" className="bg-accent hover:bg-accent/90 neumorphic-hover pulse-glow">
                <Plus className="w-4 h-4 mr-2" />
                New Repository
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 neumorphic-hover">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/developer-avatar.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 neumorphic bg-card">
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/developer-avatar.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Developer</div>
                      <div className="text-xs text-muted-foreground">@johndev</div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="w-4 h-4 mr-2" />
                    Your Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Your Repositories
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer text-red-600 hover:text-red-700 focus:text-red-700"
                    onClick={handleLogout}
                    disabled={isLoading}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-red-600 mr-2"></div>
                        Signing out...
                      </>
                    ) : (
                      "Sign out"
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 neumorphic bg-card interactive-card">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 neumorphic-inset">
                    <AvatarImage src="/developer-profile.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">John Developer</CardTitle>
                    <CardDescription>@johndev</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-2 rounded-lg neumorphic-inset bg-muted/20">
                    <div className="text-2xl font-bold text-foreground">24</div>
                    <div className="text-xs text-muted-foreground">Repos</div>
                  </div>
                  <div className="p-2 rounded-lg neumorphic-inset bg-muted/20">
                    <div className="text-2xl font-bold text-foreground">156</div>
                    <div className="text-xs text-muted-foreground">Stars</div>
                  </div>
                  <div className="p-2 rounded-lg neumorphic-inset bg-muted/20">
                    <div className="text-2xl font-bold text-foreground">89</div>
                    <div className="text-xs text-muted-foreground">Forks</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start neumorphic-hover" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Repositories
                  </Button>
                  <Button variant="ghost" className="w-full justify-start neumorphic-hover" size="sm">
                    <Activity className="w-4 h-4 mr-2" />
                    Activity
                  </Button>
                  <Button variant="ghost" className="w-full justify-start neumorphic-hover" size="sm">
                    <Star className="w-4 h-4 mr-2" />
                    Starred
                  </Button>
                  <Button variant="ghost" className="w-full justify-start neumorphic-hover" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    Organizations
                  </Button>
                  <Button variant="ghost" className="w-full justify-start neumorphic-hover" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 neumorphic bg-card mt-6 interactive-card">
              <CardHeader>
                <CardTitle className="text-base">This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm p-2 rounded-lg neumorphic-inset bg-muted/20">
                  <span className="text-muted-foreground">Commits</span>
                  <span className="font-medium text-foreground">23</span>
                </div>
                <div className="flex items-center justify-between text-sm p-2 rounded-lg neumorphic-inset bg-muted/20">
                  <span className="text-muted-foreground">Pull Requests</span>
                  <span className="font-medium text-foreground">5</span>
                </div>
                <div className="flex items-center justify-between text-sm p-2 rounded-lg neumorphic-inset bg-muted/20">
                  <span className="text-muted-foreground">Issues Closed</span>
                  <span className="font-medium text-foreground">8</span>
                </div>
                <div className="flex items-center justify-between text-sm p-2 rounded-lg neumorphic-inset bg-muted/20">
                  <span className="text-muted-foreground">Code Reviews</span>
                  <span className="font-medium text-foreground">12</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList className="grid w-full max-w-md grid-cols-3 neumorphic bg-muted/50">
                  <TabsTrigger value="overview" className="neumorphic-hover">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="repositories" className="neumorphic-hover">
                    Repositories
                  </TabsTrigger>
                  <TabsTrigger value="activity" className="neumorphic-hover">
                    Activity
                  </TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="neumorphic-hover bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="neumorphic-hover bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    This Week
                  </Button>
                </div>
              </div>

              <TabsContent value="overview" className="space-y-6">
                {/* Recent Activity */}
                <Card className="border-0 neumorphic bg-card interactive-card glow-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg neumorphic-inset bg-muted/20 hover:bg-muted/30 transition-colors">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center neumorphic-inset">
                        <GitCommit className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Pushed 3 commits</span> to{" "}
                          <span className="text-accent">awesome-project</span>
                        </p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg neumorphic-inset bg-muted/20 hover:bg-muted/30 transition-colors">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center neumorphic-inset">
                        <PullRequest className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Opened pull request</span> in{" "}
                          <span className="text-accent">web-components</span>
                        </p>
                        <p className="text-xs text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg neumorphic-inset bg-muted/20 hover:bg-muted/30 transition-colors">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center neumorphic-inset">
                        <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Starred</span>{" "}
                          <span className="text-accent">react-hooks-library</span>
                        </p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg neumorphic-inset bg-muted/20 hover:bg-muted/30 transition-colors">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center neumorphic-inset">
                        <AlertCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Closed issue</span> in{" "}
                          <span className="text-accent">mobile-app</span>
                        </p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Repositories */}
                <Card className="border-0 neumorphic bg-card interactive-card glow-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Top Repositories
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 neumorphic bg-muted/20 rounded-lg hover:shadow-lg transition-all duration-300 interactive-card">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center neumorphic-inset">
                          <Code2 className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">awesome-project</h4>
                          <p className="text-sm text-muted-foreground">Modern web application</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>234</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>45</span>
                        </div>
                        <Badge variant="secondary" className="neumorphic">
                          TypeScript
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 neumorphic bg-muted/20 rounded-lg hover:shadow-lg transition-all duration-300 interactive-card">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center neumorphic-inset">
                          <Code2 className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">web-components</h4>
                          <p className="text-sm text-muted-foreground">Reusable UI components</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>189</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>32</span>
                        </div>
                        <Badge variant="secondary" className="neumorphic">
                          React
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 neumorphic bg-muted/20 rounded-lg hover:shadow-lg transition-all duration-300 interactive-card">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center neumorphic-inset">
                          <Code2 className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">mobile-app</h4>
                          <p className="text-sm text-muted-foreground">Cross-platform mobile app</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>156</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>28</span>
                        </div>
                        <Badge variant="secondary" className="neumorphic">
                          React Native
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="repositories" className="space-y-6">
                <Card className="border-0 neumorphic bg-card interactive-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Your Repositories</CardTitle>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 neumorphic-hover pulse-glow">
                        <Plus className="w-4 h-4 mr-2" />
                        New Repository
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Repository List */}
                    <div className="space-y-4">
                      <div className="border-b border-border/50 pb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-accent hover:underline cursor-pointer">
                              awesome-project
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              A modern web application built with Next.js and TypeScript
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span>TypeScript</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4" />
                                <span>234</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <GitFork className="w-4 h-4" />
                                <span>45</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>Updated 2 hours ago</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="neumorphic-hover bg-transparent">
                            <Star className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="border-b border-border/50 pb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-accent hover:underline cursor-pointer">
                              web-components
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              A collection of reusable React components with TypeScript support
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                                <span>React</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4" />
                                <span>189</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <GitFork className="w-4 h-4" />
                                <span>32</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>Updated 5 hours ago</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="neumorphic-hover bg-transparent">
                            <Star className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="border-b border-border/50 pb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-accent hover:underline cursor-pointer">
                              mobile-app
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Cross-platform mobile application built with React Native
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <span>React Native</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4" />
                                <span>156</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <GitFork className="w-4 h-4" />
                                <span>28</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>Updated 1 day ago</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="neumorphic-hover bg-transparent">
                            <Star className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card className="border-0 neumorphic bg-card interactive-card glow-effect">
                  <CardHeader>
                    <CardTitle>Activity Feed</CardTitle>
                    <CardDescription>Your recent development activity across all repositories</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 border border-border/50 rounded-lg neumorphic-inset bg-muted/20 hover:bg-muted/30 transition-colors">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center neumorphic-inset">
                          <GitCommit className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Pushed 3 commits</span> to{" "}
                            <span className="text-accent">awesome-project</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            feat: add user authentication, fix: resolve mobile layout issues, docs: update README
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 border border-border/50 rounded-lg neumorphic-inset bg-muted/20 hover:bg-muted/30 transition-colors">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center neumorphic-inset">
                          <PullRequest className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Opened pull request #42</span> in{" "}
                            <span className="text-accent">web-components</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Add new Button component with accessibility improvements
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">5 hours ago</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 border border-border/50 rounded-lg neumorphic-inset bg-muted/20 hover:bg-muted/30 transition-colors">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center neumorphic-inset">
                          <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Closed issue #28</span> in{" "}
                            <span className="text-accent">mobile-app</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">Fixed navigation bug on Android devices</p>
                          <p className="text-xs text-muted-foreground mt-2">1 day ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
