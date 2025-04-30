import { StudySession, Question, User } from "./types";

export const mockUser: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex@example.com",
  avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
};

export const mockSessions: StudySession[] = [
  {
    id: "1",
    title: "Biology Midterm",
    documentName: "Biology_Chapter_5.pdf",
    date: "2025-03-15",
    score: 92,
    questionCount: 25,
    timeSpent: 32,
  },
  {
    id: "2",
    title: "Chemistry Review",
    documentName: "Chem_Notes_Week8.pdf",
    date: "2025-03-10",
    score: 78,
    questionCount: 20,
    timeSpent: 25,
  },
  {
    id: "3",
    title: "Physics Formulas",
    documentName: "Physics_Formulas.pdf",
    date: "2025-03-05",
    score: 85,
    questionCount: 15,
    timeSpent: 18,
  },
  {
    id: "4",
    title: "History Final",
    documentName: "History_Final_Review.pdf",
    date: "2025-02-28",
    score: 95,
    questionCount: 30,
    timeSpent: 45,
  },
];

export const mockQuestions: Question[] = [
  {
    id: "q1",
    text: "Which of the following is NOT a characteristic of living organisms?",
    options: [
      "Response to stimuli",
      "Reproduction",
      "Crystallization",
      "Growth and development",
    ],
    correctAnswer: 2,
  },
  {
    id: "q2",
    text: "What is the powerhouse of the cell?",
    options: [
      "Nucleus",
      "Mitochondria",
      "Endoplasmic reticulum",
      "Golgi apparatus",
    ],
    correctAnswer: 1,
  },
  {
    id: "q3",
    text: "Which organelle is responsible for protein synthesis?",
    options: [
      "Lysosome",
      "Ribosome",
      "Peroxisome",
      "Vacuole",
    ],
    correctAnswer: 1,
  },
  {
    id: "q4",
    text: "The process by which plants make their food is called:",
    options: [
      "Respiration",
      "Photosynthesis",
      "Digestion",
      "Excretion",
    ],
    correctAnswer: 1,
  },
  {
    id: "q5",
    text: "DNA replication occurs during which phase of the cell cycle?",
    options: [
      "G1 phase",
      "G2 phase",
      "S phase",
      "M phase",
    ],
    correctAnswer: 2,
  },
];