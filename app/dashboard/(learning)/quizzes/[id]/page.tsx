"use client"

import { QuizComponent } from "@/components/shared/quiz"
import { Quiz, QuizResult, UserPerformance } from "@/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

// Mock data (in a real app, you'd fetch this from an API)
const mockQuizzes: Record<string, Quiz> = {
  "math-quiz-1": {
    id: "math-quiz-1",
    subject: "Mathematics",
    title: "Adaptive Math Challenge",
    description: "Test your math skills with questions that adapt to your level!",
    timeLimit: 300, // 5 minutes
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is 8 x 7?",
        options: ["54", "56", "62", "64"],
        correctAnswer: "56",
        explanation: "8 x 7 = 56. You can think of it as 8 groups of 7 or 7 groups of 8.",
        difficulty: "Easy",
        hint: "Try breaking it down: (8 x 5) + (8 x 2)",
      },
      {
        id: "q2",
        type: "short-answer",
        question: "Solve for x: 2x + 5 = 21",
        correctAnswer: "8",
        explanation: "Subtract 5 from both sides: 2x = 16, then divide by 2: x = 8",
        difficulty: "Medium",
        hint: "Start by isolating the term with x",
      },
      {
        id: "q3",
        type: "true-false",
        question: "The square root of 169 is 12",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "The square root of 169 is 13, because 13 x 13 = 169",
        difficulty: "Medium",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correctAnswer: "3.14",
        explanation: "π is approximately equal to 3.14159..., so to two decimal places it's 3.14",
        difficulty: "Easy",
      },
      {
        id: "q5",
        type: "short-answer",
        question: "If a triangle has angles of 45°, 45°, and 90°, what is the ratio of its sides?",
        correctAnswer: "1:1:√2",
        explanation:
          "This is a right-angled isosceles triangle. The two sides adjacent to the right angle are equal, and the hypotenuse is √2 times the length of either of these sides.",
        difficulty: "Hard",
        hint: "This is a special right triangle. Think about the properties of 45-45-90 triangles.",
      },
    ],
  },
}

const mockUserPerformance: UserPerformance = {
  userId: "user1",
  subjectPerformance: {
    Mathematics: {
      totalQuizzes: 5,
      averageScore: 75,
      averageDifficulty: 1, // Medium
    },
  },
}

export default function QuizPage() {
  const params = useParams()
  const quizId = params.id as string
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call to fetch quiz data
    const fetchQuiz = async () => {
      setLoading(true)
      try {
        // In a real app, you would fetch this data from an API
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
        const fetchedQuiz = mockQuizzes[quizId]
        if (fetchedQuiz) {
          setQuiz(fetchedQuiz)
        } else {
          setError("Quiz not found")
        }
      } catch (err) {
        setError("Failed to load quiz")
      } finally {
        setLoading(false)
      }
    }

    fetchQuiz()
  }, [quizId])

  const handleQuizComplete = (result: QuizResult) => {
    console.log("Quiz completed:", result)
    // Here you would typically save the result to your backend
    // and update the user's performance metrics
  }

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>
  }

  if (error || !quiz) {
    return <div className="container mx-auto py-8">{error || "An error occurred"}</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{quiz.title}</h1>
      <QuizComponent quiz={quiz} userPerformance={mockUserPerformance} onComplete={handleQuizComplete} />
    </div>
  )
}

