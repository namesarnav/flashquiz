"use client";

import { useState } from "react";
import { Question } from "@/lib/types";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (questionId: string, selectedAnswer: number) => void;
  isAnswered: boolean;
  selectedAnswer?: number;
  showResult?: boolean;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  isAnswered,
  selectedAnswer,
  showResult = false,
}: QuestionCardProps) {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  
  const handleOptionClick = (optionIndex: number) => {
    if (!isAnswered) {
      onAnswer(question.id, optionIndex);
    }
  };
  
  const isCorrect = selectedAnswer === question.correctAnswer;
  
  return (
    <div className="bg-white dark:bg-card rounded-lg border border-border shadow-sm p-6 animate-in fade-in-50 duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </span>
        {showResult && isAnswered && (
          <div className={`flex items-center ${isCorrect ? "text-green-600" : "text-red-600"}`}>
            {isCorrect ? (
              <>
                <CheckCircle2 className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Correct</span>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Incorrect</span>
              </>
            )}
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-medium mb-6">{question.text}</h3>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-4 rounded-lg border text-left transition-all duration-200 ${
              isAnswered && selectedAnswer === index
                ? showResult
                  ? selectedAnswer === question.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : "border-red-500 bg-red-50 dark:bg-red-900/20"
                  : "border-primary bg-primary/5"
                : isAnswered
                ? showResult && index === question.correctAnswer
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : "border-border bg-background opacity-70"
                : hoveredOption === index
                ? "border-primary/50 bg-muted/50"
                : "border-border hover:border-primary/30"
            }`}
            onClick={() => handleOptionClick(index)}
            onMouseEnter={() => setHoveredOption(index)}
            onMouseLeave={() => setHoveredOption(null)}
            disabled={isAnswered}
          >
            <div className="flex items-center">
              <div className={`h-6 w-6 rounded-full border flex items-center justify-center mr-3 flex-shrink-0 ${
                isAnswered && selectedAnswer === index
                  ? showResult
                    ? selectedAnswer === question.correctAnswer
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-red-500 bg-red-500 text-white"
                    : "border-primary bg-primary text-white"
                  : isAnswered
                  ? showResult && index === question.correctAnswer
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-muted-foreground"
                  : "border-muted-foreground"
              }`}>
                <span className="text-sm font-medium">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
              <span className="text-sm">{option}</span>
            </div>
          </button>
        ))}
      </div>
      
      {showResult && isAnswered && !isCorrect && (
        <div className="mt-4 p-3 border border-border bg-muted/50 rounded-md">
          <p className="text-sm font-medium">Correct Answer: {String.fromCharCode(65 + question.correctAnswer)}</p>
        </div>
      )}
    </div>
  );
}