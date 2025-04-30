"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScoreCard from "@/components/results/ScoreCard";
import QuestionCard from "@/components/quiz/QuestionCard";
import { mockQuestions } from "@/lib/mockData";
import { QuizResults } from "@/lib/types";
import { Loader2 } from "lucide-react";

export default function ResultsPage() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<QuizResults | null>(null);
  
  // Simulate API call to get results
  useEffect(() => {
    const timer = setTimeout(() => {
      setResults({
        id: "result1",
        title: "Biology Midterm",
        score: 80,
        totalQuestions: 5,
        correctAnswers: 4,
        timeSpent: 12,
        date: new Date().toISOString(),
      });
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Mock user answers - in a real app, these would come from the backend
  const mockAnswers = {
    q1: 2, // correct
    q2: 1, // correct
    q3: 1, // correct
    q4: 0, // incorrect (correct is 1)
    q5: 2, // correct
  };
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-10 w-10 text-primary mx-auto animate-spin" />
            <p className="mt-4 text-lg font-medium">Calculating your results...</p>
            <p className="text-muted-foreground">Just a moment while we analyze your performance</p>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold tracking-tight mb-8">Quiz Results</h1>
            
            {results && (
              <ScoreCard results={results} />
            )}
            
            <div className="mt-12">
              <h2 className="text-xl font-medium mb-6">Question Review</h2>
              
              <div className="space-y-6">
                {mockQuestions.map((question, index) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    questionNumber={index + 1}
                    totalQuestions={mockQuestions.length}
                    onAnswer={() => {}} // No action needed in review mode
                    isAnswered={true}
                    selectedAnswer={mockAnswers[question.id as keyof typeof mockAnswers]}
                    showResult={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}