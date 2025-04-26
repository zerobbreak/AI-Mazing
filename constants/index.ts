import { Lesson, PerformanceMetrics, QuizScore, SubjectProgress } from "@/types";

export type Subject = "Mathematics" | "Science" | "English" | "History";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export const lessons: Lesson[] = [
  {
    title: "Quadratic Equations",
    subject: "Mathematics",
    level: "Intermediate",
    duration: "45 mins",
    description:
      "Learn to solve quadratic equations using various methods including factoring and the quadratic formula.",
    prerequisites: ["Basic Algebra", "Linear Equations"],
  },
  {
    title: "Cell Biology",
    subject: "Science",
    level: "Beginner",
    duration: "30 mins",
    description:
      "Explore the fundamental structures of cells and their functions in living organisms.",
    prerequisites: ["Introduction to Biology"],
  },
  {
    title: "Shakespeare's Macbeth",
    subject: "English",
    level: "Advanced",
    duration: "60 mins",
    description:
      "Analyze the themes of ambition and moral corruption in Shakespeare's tragic play.",
    prerequisites: ["Literary Analysis", "Poetry Basics"],
  },
];

export const subjectProgress: SubjectProgress[] = [
  { subject: "Mathematics", progress: 75 },
  { subject: "Science", progress: 60 },
  { subject: "English", progress: 80 },
  { subject: "History", progress: 70 },
];

export const performanceMetrics: PerformanceMetrics = {
  averageScore: 87.6,
  currentStreak: 7,
  totalQuizzesTaken: 25,
  topSubject: "Mathematics",
  topSubjectScore: 92.5,
  improvementRate: 5.3,
};

export const quizScores: QuizScore[] = [
  { subject: "Mathematics", quizNumber: 1, score: 85 },
  { subject: "Mathematics", quizNumber: 2, score: 88 },
  { subject: "Mathematics", quizNumber: 3, score: 82 },
  { subject: "Mathematics", quizNumber: 4, score: 85 },
  { subject: "Mathematics", quizNumber: 5, score: 90 },
  { subject: "Science", quizNumber: 1, score: 80 },
  { subject: "Science", quizNumber: 2, score: 75 },
  { subject: "Science", quizNumber: 3, score: 78 },
  { subject: "Science", quizNumber: 4, score: 82 },
  { subject: "Science", quizNumber: 5, score: 85 },
  { subject: "English", quizNumber: 1, score: 90 },
  { subject: "English", quizNumber: 2, score: 85 },
  { subject: "English", quizNumber: 3, score: 88 },
  { subject: "English", quizNumber: 4, score: 92 },
  { subject: "English", quizNumber: 5, score: 89 },
  { subject: "History", quizNumber: 1, score: 75 },
  { subject: "History", quizNumber: 2, score: 78 },
  { subject: "History", quizNumber: 3, score: 80 },
  { subject: "History", quizNumber: 4, score: 77 },
  { subject: "History", quizNumber: 5, score: 82 },
];

export const FIELD_NAMES = {
  fullName: "Full Name",
  email: "Email",
  password: "Password",
  role: "Role",
}

export const FIELD_TYPES = {
  name: "text",
  email: "email",
  password: "password",
  role: "select",
}