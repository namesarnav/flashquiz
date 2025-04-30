"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuestionCard from "@/components/quiz/QuestionCard";
import ProgressBar from "@/components/quiz/ProgressBar";
import { mockQuestions } from "@/lib/mockData";
import { Question } from "@/lib/types";
import { ArrowLeft, ArrowRight, Clock, Loader2 } from "lucide-react";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [quizComplete, setQuizComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  
  // Initialize with mock questions after a simulated loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuestions(mockQuestions);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Timer countdown
  useEffect(() => {
    if (loading || quizComplete) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [loading, quizComplete]);
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  const handleAnswer = (questionId: string, selectedAnswer: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));
  };
  
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      submitQuiz();
    }
  };
  
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };
  
  const submitQuiz = () => {
    setQuizComplete(true);
    
    // Simulate API call to save results
    setTimeout(() => {
      router.push("/results");
    }, 1500);
  };
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-10 w-10 text-primary mx-auto animate-spin" />
            <p className="mt-4 text-lg font-medium">Loading quiz questions...</p>
            <p className="text-muted-foreground">Please wait while we prepare your study session</p>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  if (quizComplete) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-10 w-10 text-primary mx-auto animate-spin" />
            <p className="mt-4 text-lg font-medium">Submitting your answers...</p>
            <p className="text-muted-foreground">You'll see your results shortly</p>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = answers[currentQuestion.id] !== undefined;
  const answeredCount = Object.keys(answers).length;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold tracking-tight">Biology Midterm Quiz</h1>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                <span className="font-medium">{formatTime(timeLeft)}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <ProgressBar current={answeredCount} total={questions.length} />
            </div>
            
            {currentQuestion && (
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
                isAnswered={isAnswered}
                selectedAnswer={answers[currentQuestion.id]}
              />
            )}
            
            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>
              
              <div className="text-sm text-muted-foreground">
                {currentQuestionIndex + 1} of {questions.length}
              </div>
              
              <button
                onClick={nextQuestion}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                {currentQuestionIndex < questions.length - 1 ? (
                  <>
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  "Finish Quiz"
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}