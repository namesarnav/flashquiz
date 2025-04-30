import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Brain, BookCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-background/90 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center mr-2">
                  <span className="font-bold text-sm">EX</span>
                </div>
                <span className="font-semibold text-xl tracking-tight">ExamPrep</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/auth/login"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Log in
              </Link>
              <Link 
                href="/auth/signup"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Sign up
              </Link>
            </div>
            
            <div className="md:hidden">
              <Link 
                href="/auth/login"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transform your <span className="text-primary">study notes</span> into exam success
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              ExamPrep uses AI to generate personalized practice questions from your lecture notes and slides.
              Study smarter, not harder, and ace your exams with confidence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get started for free
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why students love ExamPrep</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform makes studying efficient, personalized, and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Personalized Learning</h3>
              <p className="text-muted-foreground">
                Generate questions from your own study materials for truly targeted practice.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Time-Efficient</h3>
              <p className="text-muted-foreground">
                Create practice tests in seconds instead of spending hours making flashcards.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Active Recall</h3>
              <p className="text-muted-foreground">
                Proven study technique that helps you remember information longer.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get from notes to quiz in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="font-bold text-sm">1</span>
              </div>
              <div className="pt-2 pl-8">
                <h3 className="text-xl font-medium mb-3">Upload your notes</h3>
                <p className="text-muted-foreground mb-4">
                  Upload your lecture notes, slides, or study materials in PDF format.
                </p>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-muted-foreground/50" />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="font-bold text-sm">2</span>
              </div>
              <div className="pt-2 pl-8">
                <h3 className="text-xl font-medium mb-3">Generate questions</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI analyzes your content and creates tailored multiple-choice questions.
                </p>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <Brain className="h-10 w-10 text-muted-foreground/50" />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="font-bold text-sm">3</span>
              </div>
              <div className="pt-2 pl-8">
                <h3 className="text-xl font-medium mb-3">Test your knowledge</h3>
                <p className="text-muted-foreground mb-4">
                  Take the quiz and get instant feedback on your performance.
                </p>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <BookCheck className="h-10 w-10 text-muted-foreground/50" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Try it now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">What students say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of students who've improved their grades with ExamPrep
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="font-medium">M</span>
                </div>
                <div>
                  <p className="font-medium">Michael T.</p>
                  <p className="text-sm text-muted-foreground">Medical Student</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "ExamPrep helped me study for my anatomy finals. It's like having a personal tutor that knows exactly what's in my lecture notes."
              </p>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="font-medium">S</span>
                </div>
                <div>
                  <p className="font-medium">Sarah K.</p>
                  <p className="text-sm text-muted-foreground">Computer Science Major</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The questions generated from my algorithms notes were challenging and really tested my understanding. My midterm score improved by 15%!"
              </p>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="font-medium">J</span>
                </div>
                <div>
                  <p className="font-medium">James L.</p>
                  <p className="text-sm text-muted-foreground">History Major</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I used to spend hours making flashcards. Now I just upload my history lecture slides and get perfect practice questions instantly."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-primary rounded-xl p-8 md:p-12 text-primary-foreground shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to ace your next exam?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of students who are studying smarter, not harder.
              </p>
              <Link
                href="/auth/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 py-2 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Start for free
              </Link>
              <p className="mt-4 text-sm opacity-80">No credit card required</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-background border-t border-gray-100 dark:border-gray-800 py-8 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center">
                <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center mr-2">
                  <span className="font-bold text-sm">EX</span>
                </div>
                <span className="font-semibold text-xl tracking-tight">ExamPrep</span>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Ace your exams with AI-powered question generation from your study materials.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-sm mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-sm mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ExamPrep. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/" className="text-xs text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/" className="text-xs text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}