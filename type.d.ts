export type QuestionType = "multiple-choice" | "true-false" | "short-answer";
export type EducationLevel = "High School" | "University";
export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export interface PerformanceMetrics {
  averageScore: number;
  currentStreak: number;
  totalQuizzesTaken: number;
  topSubject: Subject;
  topSubjectScore: number;
  improvementRate: number;
}

export interface QuizScore {
  subject: Subject;
  quizNumber: number;
  score: number;
}

export interface Lesson {
  title: string;
  subject: Subject;
  level: DifficultyLevel;
  duration: string;
  description: string;
  prerequisites: string[];
}

export interface SubjectProgress {
  subject: Subject;
  progress: number;
}


export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Quiz {
  id: string;
  subject: string;
  title: string;
  description: string;
  timeLimit: number; // in minutes
  questions: Question[];
}

export interface PastPaper extends Quiz {
  year: number;
  term: "Spring" | "Summer" | "Fall" | "Winter";
}

export interface Results {
  quizId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  answers: Record<string, string>;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  completed: boolean;
  order: number;
}

export interface LearningPathProgress {
  completedLessons: number;
  totalLessons: number;
}

//Quiz
export type QuestionType = "multiple-choice" | "true-false" | "short-answer"
export type QuizDifficulty = "Easy" | "Medium" | "Hard"

export interface Question {
  id: string
  type: QuestionType
  question: string
  options?: string[]
  correctAnswer: string
  explanation: string
  difficulty: QuizDifficulty
  hint?: string
}

export interface Quiz {
  id: string
  subject: string
  title: string
  description: string
  timeLimit: number // in seconds
  questions: Question[]
}

export interface QuizResult {
  quizId: string
  score: number
  totalQuestions: number
  completedAt: string
  timeSpent: number
  answers: Record<string, string>
  difficulty: QuizDifficulty
}

export interface UserPerformance {
  userId: string
  subjectPerformance: Record<
    string,
    {
      totalQuizzes: number
      averageScore: number
      averageDifficulty: number // 0: Easy, 1: Medium, 2: Hard
    }
  >
}

export interface QuizSummary {
  id: string
  title: string
  subject: string
  description: string
  difficulty: QuizDifficulty
  questionCount: number
  timeLimit: number
}

//Chat
export type MessageRole = "user" | "assistant"

export interface Message {
  role: MessageRole
  content: string
}

export interface Topic {
  id: string
  name: string
  description: string
}

//Progress
export interface Progress {
  subject: string
  accuracy: number
  timeSpent: number // in minutes
  masteryLevel: number // 0-100
}

export interface ProgressData {
  overallAccuracy: number
  totalTimeSpent: number // in minutes
  subjectsProgress: Progress[]
}

export interface FocusArea {
  subject: string
  topic: string
  recommendation: string
}

//Materials
export type ResourceType = "article" | "video" | "exercise"

export type Subject = "Mathematics" | "Science" | "English" | "History" | "Foreign Language"

export interface Resource {
  id: string
  title: string
  type: ResourceType
  description: string
  url: string
  duration?: number // in minutes
  difficulty: "beginner" | "intermediate" | "advanced"
  subject: Subject
  subtopic: string
}

export interface UserLearningPattern {
  preferredResourceTypes: ResourceType[]
  strongSubjects: Subject[]
  weakSubjects: Subject[]
  averageStudyTime: number // in minutes
}

//Settings
export interface UserProfile {
  fullName: string
  email: string
  bio: string
}

export interface UserStatistics {
  coursesCompleted: number
  totalStudyTime: number // in hours
  averageQuizScore: number // percentage
  currentStreak: number // days
}

export interface LearningPreferences {
  dailyStudyGoal: string
  preferredDifficulty: string
  darkMode: boolean
}

export interface NotificationSettings {
  emailNotifications: boolean
  pushNotifications: boolean
  dailyReminders: boolean
}
