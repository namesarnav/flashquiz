"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRound, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Only show auth links on landing page
  const showAuthLinks = pathname === "/";
  
  // Don't show navigation in auth pages
  const showNavigation = !pathname.includes("/auth/");
  
  return (
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
          
          {/* Desktop navigation */}
          {showNavigation && (
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                href="/dashboard"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
                )}
              >
                Dashboard
              </Link>
              <Link 
                href="/upload"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/upload" ? "text-primary" : "text-muted-foreground"
                )}
              >
                Upload Notes
              </Link>
              <Link 
                href="/pricing"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
                )}
              >
                Pricing
              </Link>
              <div className="flex items-center space-x-2 ml-4">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <UserRound className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Alex</span>
                <Link href="/" className="ml-2 text-muted-foreground hover:text-primary">
                  <LogOut className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          )}
          
          {/* Auth links for landing page */}
          {showAuthLinks && (
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/pricing"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Pricing
              </Link>
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
          )}
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {showNavigation ? (
              <>
                <Link 
                  href="/dashboard"
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    pathname === "/dashboard" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-gray-50 hover:text-gray-900"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/upload"
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    pathname === "/upload" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-gray-50 hover:text-gray-900"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Upload Notes
                </Link>
                <Link 
                  href="/pricing"
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    pathname === "/pricing" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-gray-50 hover:text-gray-900"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <div className="pt-4 pb-3 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center px-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium">Alex Johnson</div>
                      <div className="text-sm text-muted-foreground">alex@example.com</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-3">
                    <Link 
                      href="/"
                      className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-gray-50 hover:text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link 
                  href="/pricing"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/auth/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  href="/auth/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}