import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  Play,
  Store,
  Utensils,
  Building,
  Users,
  ArrowRight,
  Clock,
  MessageSquare,
  DollarSign,
  AlertTriangle,
  BatteryLow,
  User,
  Heart,
  Briefcase,
  ShoppingBag,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="font-bold text-2xl ">SupportAI</div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#features" className="text-muted-foreground hover: transition">
            Features
          </Link>
          <Link href="#use-cases" className="text-muted-foreground hover: transition">
            Use Cases
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover: transition">
            Pricing
          </Link>
          <Link href='/login'>
            <Button variant="outline" className=" border-border hover:bg-card">
              Log in
            </Button>
          </Link>
          <Link href="/login">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Sign up
            </Button>
          </Link>
          <ThemeToggle/>
        </nav>
        <Button variant="ghost" className="md:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
            Automate Customer Support in 5 Minutes
          </h1>
          <p className="text-xl text-muted-foreground">
            Deliver instant, accurate responses to your customers 24/7 without hiring more staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">Start Free Trial</Button>
            <Button variant="outline" className=" border-border hover:bg-card text-lg py-6 px-8">
              <Play className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 bg-card rounded-xl overflow-hidden shadow-2xl border border-border">
          <div className="aspect-video relative flex items-center justify-center">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Demo video thumbnail"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-700">
                <Play className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center  mb-16">
            Why Businesses Need Automated Support
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className=" text-2xl">Rising Customer Expectations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-purple-600/20 p-2 rounded-full h-min">
                    <Clock className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className=" font-medium">Always-on demand</p>
                    <p className="text-muted-foreground">64% of customers want a response within 90 seconds</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-purple-600/20 p-2 rounded-full h-min">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className=" font-medium">Channel overload</p>
                    <p className="text-muted-foreground">Customers bounce among chat, email, social and voice</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className=" text-2xl">Impact on Small Businesses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-purple-600/20 p-2 rounded-full h-min">
                    <DollarSign className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className=" font-medium">Lost sales</p>
                    <p className="text-muted-foreground">
                      73% of consumers leave a purchase unmade if questions aren't answered
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-purple-600/20 p-2 rounded-full h-min">
                    <AlertTriangle className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className=" font-medium">Brand harm</p>
                    <p className="text-muted-foreground">80% of dissatisfied customers rant publicly about bad experiences</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-purple-600/20 p-2 rounded-full h-min">
                    <BatteryLow className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className=" font-medium">Agent burnout</p>
                    <p className="text-muted-foreground">Repeated tickets consume up to 40% of support staff time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className=" text-2xl">Who It Impacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-purple-600/20 p-2 rounded-full h-min">
                    <User className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className=" font-medium">Micro-enterprises</p>
                    <p className="text-muted-foreground">One- or two-person operations without IT/support personnel</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-purple-600/20 p-2 rounded-full h-min">
                    <Heart className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className=" font-medium">Nonprofits & local authorities</p>
                    <p className="text-muted-foreground">Volunteer responders can't scale during high load</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-purple-600/20 p-2 rounded-full h-min">
                    <Users className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className=" font-medium">End customers</p>
                    <p className="text-muted-foreground">They expect quick, precise self-service or live assistance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-4">Perfect For Any Business</h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Our AI support solution adapts to your specific industry needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card border-border shadow-lg hover:bg-gray-750 transition">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <Utensils className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className=" text-xl">For Restaurants</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Handle reservations, menu questions, and special requests automatically.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-lg hover:bg-gray-750 transition">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <Store className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className=" text-xl">For Retail Stores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Answer product questions, check inventory, and process simple returns.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-lg hover:bg-gray-750 transition">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <Building className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className=" text-xl">For Real Estate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Schedule viewings, answer property questions, and qualify leads 24/7.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-lg hover:bg-gray-750 transition">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className=" text-xl">For Professional Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Book appointments, answer FAQs, and collect client information.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-lg hover:bg-gray-750 transition">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <ShoppingBag className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className=" text-xl">For E-commerce</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Handle order status, returns, and product recommendations.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-lg hover:bg-gray-750 transition">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <Heart className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className=" text-xl">For Nonprofits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Answer donation questions, volunteer inquiries, and event information.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center  mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Choose the plan that works for your business
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className=" text-2xl">Free</CardTitle>
                <CardDescription className="text-muted-foreground">For small businesses just getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold ">$0</span>
                  <span className="text-muted-foreground ml-2">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Up to 100 customer queries/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Basic AI responses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Website chat widget</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-700 hover:bg-gray-600">Start Free</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-600  px-4 py-1 text-sm font-medium">
                MOST POPULAR
              </div>
              <CardHeader>
                <CardTitle className=" text-2xl">Premium</CardTitle>
                <CardDescription className="text-muted-foreground">For growing businesses with higher volume</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold ">$49</span>
                  <span className="text-muted-foreground ml-2">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Unlimited customer queries</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Advanced AI with custom training</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Multi-channel support (chat, email, social)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Human handoff for complex issues</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Start Free Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold ">Ready to transform your customer support?</h2>
            <p className="text-xl text-gray-200">
              Join thousands of businesses that have automated their support in just 5 minutes.
            </p>
            <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg py-6 px-8 mt-4">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-muted-foreground text-sm">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className=" font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=" font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=" font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=" font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover: transition">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">© 2025 SupportAI. All rights reserved.</div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover: transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover: transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover: transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover: transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
