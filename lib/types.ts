export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface StudySession {
  id: string;
  title: string;
  documentName: string;
  date: string;
  score: number;
  questionCount: number;
  timeSpent: number; // in minutes
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizResults {
  id: string;
  title: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // in minutes
  date: string;
}