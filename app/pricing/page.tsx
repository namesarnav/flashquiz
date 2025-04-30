"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "Up to 20 questions per document",
      "Basic question types",
      "PDF document support",
      "24-hour support response time",
    ],
    cta: "Get started",
    href: "/auth/signup",
  },
  {
    name: "Basic",
    price: "10",
    description: "For serious students",
    features: [
      "Up to 50 questions per document",
      "Advanced question types",
      "PDF & Word document support",
      "4-hour support response time",
      "Progress tracking",
    ],
    cta: "Start free trial",
    href: "/auth/signup?plan=basic",
    popular: true,
  },
  {
    name: "Premium",
    price: "20",
    description: "For power users",
    features: [
      "Unlimited questions",
      "All question types",
      "All document formats supported",
      "1-hour support response time",
      "Advanced analytics",
      "Custom question templates",
      "API access",
    ],
    cta: "Start free trial",
    href: "/auth/signup?plan=premium",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that's right for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm ${
                  tier.popular ? "border-primary" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-center text-sm font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium">{tier.name}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{tier.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-4 flex-1 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={tier.href}
                  className={`w-full rounded-md px-4 py-2 text-center text-sm font-medium transition-colors ${
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="grid gap-6 mt-8">
              <div className="text-left">
                <h3 className="font-medium mb-2">Can I switch plans later?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards and PayPal. For Premium plans, we also support wire transfers.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-medium mb-2">Do you offer student discounts?</h3>
                <p className="text-muted-foreground">
                  Yes! Students with a valid .edu email address get 20% off any paid plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}