import { QuizResults } from "@/lib/types";
import { Check, Clock, Calendar, BarChart2 } from "lucide-react";
import Link from "next/link";

interface ScoreCardProps {
  results: QuizResults;
}

export default function ScoreCard({ results }: ScoreCardProps) {
  // Format date
  const formattedDate = new Date(results.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  
  // Calculate percentage
  const percentage = Math.round((results.correctAnswers / results.totalQuestions) * 100);
  
  return (
    <div className="bg-white dark:bg-card rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-medium mb-2">{results.title}</h2>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="h-16 w-16 rounded-full border-4 border-primary flex items-center justify-center">
              <span className="text-lg font-semibold">{percentage}%</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-muted-foreground">Your Score</p>
              <p className="font-medium">{results.correctAnswers} of {results.totalQuestions} correct</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-muted-foreground mr-2" />
              <div>
                <p className="text-xs text-muted-foreground">Time Spent</p>
                <p className="text-sm font-medium">{results.timeSpent} min</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
              <div>
                <p className="text-xs text-muted-foreground">Date</p>
                <p className="text-sm font-medium">{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <h3 className="text-sm font-medium mb-2">Performance Overview</h3>
          
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className={`h-full ${
                percentage >= 80 ? "bg-green-500" : 
                percentage >= 60 ? "bg-yellow-500" : 
                "bg-red-500"
              } transition-all duration-300 ease-in-out`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Correct</p>
                  <p className="text-lg font-medium">{results.correctAnswers}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-3">
                  <BarChart2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Incorrect</p>
                  <p className="text-lg font-medium">{results.totalQuestions - results.correctAnswers}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Time</p>
                  <p className="text-lg font-medium">{(results.timeSpent / results.totalQuestions).toFixed(1)} min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-muted/30 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Review your answers to learn from your mistakes.
        </p>
        <div className="flex space-x-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center px-3 py-1.5 border border-input bg-background rounded-md text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            Back to Dashboard
          </Link>
          <Link
            href={`/quiz?retake=true&sessionId=${results.id}`}
            className="inline-flex items-center px-3 py-1.5 border border-transparent bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Retake Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}