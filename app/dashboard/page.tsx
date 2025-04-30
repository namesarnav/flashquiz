import { mockSessions } from "@/lib/mockData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SessionCard from "@/components/dashboard/SessionCard";
import Link from "next/link";
import { PlusCircle, BarChart3, Flame, TrendingUp, Clock, Settings, HelpCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="mt-1 text-muted-foreground">
                Track your study progress and manage your study sessions
              </p>
            </div>
            <Link
              href="/upload"
              className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              New Study Session
            </Link>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-card rounded-lg border border-border shadow-sm p-5">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                  <p className="text-2xl font-bold">87%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg border border-border shadow-sm p-5">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Study Sessions</p>
                  <p className="text-2xl font-bold">{mockSessions.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg border border-border shadow-sm p-5">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Flame className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-2xl font-bold">5 days</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg border border-border shadow-sm p-5">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Study Time</p>
                  <p className="text-2xl font-bold">120 min</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Study Sessions */}
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Recent Study Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-medium mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/upload"
                className="bg-white dark:bg-card rounded-lg border border-border shadow-sm p-5 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <PlusCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Upload New Notes</p>
                    <p className="text-sm text-muted-foreground">Generate questions from your study materials</p>
                  </div>
                </div>
              </Link>
              
              <Link
                href="/"
                className="bg-white dark:bg-card rounded-lg border border-border shadow-sm p-5 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Account Settings</p>
                    <p className="text-sm text-muted-foreground">Manage your preferences and profile</p>
                  </div>
                </div>
              </Link>
              
              <Link
                href="/"
                className="bg-white dark:bg-card rounded-lg border border-border shadow-sm p-5 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Help & Support</p>
                    <p className="text-sm text-muted-foreground">Get assistance with using ExamPrep</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}