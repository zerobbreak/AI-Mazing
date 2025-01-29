"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PastPaper, Quiz, QuizResult } from "@/type"
import { QuizComponent } from "@/components/shared/quiz"
import { PastPaperComponent } from "@/components/shared/past-paper"

// Dummy data
const dummyQuiz: Quiz = {
  id: "1",
  subject: "Mathematics",
  title: "Algebra Fundamentals",
  description: "Test your knowledge of basic algebraic concepts",
  timeLimit: 30,
  questions: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Solve for x: 2x + 5 = 13",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      correctAnswer: "x = 4",
      explanation: "Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4",
    },
    {
      id: "q2",
      type: "true-false",
      question: "The solution to x² = 16 is x = 4",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "x² = 16 has two solutions: x = 4 or x = -4",
    },
    {
      id: "q3",
      type: "short-answer",
      question: "What is the slope of the line y = 2x + 3?",
      correctAnswer: "2",
      explanation: "In the equation y = mx + b, m represents the slope. Here, m = 2",
    },
  ],
}

const dummyPastPapers: PastPaper[] = [
  {
    ...dummyQuiz,
    id: "math-2023-summer",
    title: "Mathematics Summer 2023",
    year: 2023,
    term: "Summer",
  },
  {
    ...dummyQuiz,
    id: "math-2023-spring",
    title: "Mathematics Spring 2023",
    year: 2023,
    term: "Spring",
  },
]

export default function SubjectPage() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null)

  const handleQuizComplete = (result: QuizResult) => {
    console.log("Quiz completed:", result)
    setActiveQuiz(null)
    // Here you would typically save the result to your backend
  }

  return (
    <div className="container mx-auto py-8">
      <Tabs defaultValue="practice" className="space-y-6">
        <TabsList>
          <TabsTrigger value="practice">Practice Quiz</TabsTrigger>
          <TabsTrigger value="past-papers">Past Papers</TabsTrigger>
        </TabsList>

        <TabsContent value="practice">
          {activeQuiz ? (
            <QuizComponent quiz={activeQuiz} onComplete={handleQuizComplete} />
          ) : (
            <QuizComponent quiz={dummyQuiz} onComplete={handleQuizComplete} />
          )}
        </TabsContent>

        <TabsContent value="past-papers">
          <div className="grid gap-6 md:grid-cols-2">
            {dummyPastPapers.map((paper) => (
              <PastPaperComponent key={paper.id} paper={paper} onStart={() => setActiveQuiz(paper)} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

