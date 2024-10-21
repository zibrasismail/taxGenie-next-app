import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import heroImage from '@/public/homepage.png'

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src={heroImage}
          alt="Office workspace"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 lg:p-12">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">TaxGenie</h1>
            <div className="space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Simplify Your Taxes</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">Effortless tax management for individuals and businesses</p>
            <Button size="lg">Get Started</Button>
          </div>
          <div className="self-end">
            <Button variant="secondary" size="sm">Skip Video</Button>
          </div>
        </div>
      </div>

      {/* Account Type Selection */}
      <div className="py-12 px-6 md:px-8 lg:px-12 bg-secondary/20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Select Account Type</h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="w-full sm:w-auto">Personal</Button>
          <Button size="lg" className="w-full sm:w-auto">Business</Button>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-muted py-12 px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">7 Steps to Simplify Your Taxes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[1, 2, 3, 4, 5, 6, 7].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-2">
                  {step}
                </div>
                <span className="text-sm">Step {step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "GST Management", description: "Effortlessly manage your GST calculations and submissions." },
              { title: "Tax Summaries", description: "Get clear and concise summaries of your tax data." },
              { title: "Secure Data Handling", description: "Your data is protected with state-of-the-art security measures." },
              { title: "Two-Factor Authentication", description: "Enhance your account security with 2FA." }
            ].map((feature, index) => (
              <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-secondary/10 py-12 px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "TaxGenie made filing my taxes stress-free and straightforward. Highly recommend!", author: "Sarah J." },
              { quote: "The best app for managing business taxes. Easy to use and reliable.", author: "Michael R." },
              { quote: "Love the features and the customer support is top-notch.", author: "Emily T." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border">
                <p className="text-sm mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="text-xs text-primary">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Connect With Us</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="hover:underline">Facebook</Link></li>
              <li><Link href="#" className="hover:underline">Twitter</Link></li>
              <li><Link href="#" className="hover:underline">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
