"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QuizQuestion } from "./quiz-question"
import { type Quiz, type QuizResult, type UserPerformance, type DifficultyLevel, QuizDifficulty } from "@/types";
import { QuizResults } from "./QuizResults"
import { Timer } from "./timer"

interface QuizComponentProps {
  quiz: Quiz
  userPerformance: UserPerformance
  onComplete: (result: QuizResult) => void
}

export function QuizComponent({ quiz, userPerformance, onComplete }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeSpent, setTimeSpent] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [currentDifficulty, setCurrentDifficulty] = useState<QuizDifficulty>("Medium")

  const currentQuestion = quiz.questions[currentQuestionIndex]

  useEffect(() => {
    // Adjust difficulty based on user's past performance
    const subjectPerformance = userPerformance.subjectPerformance[quiz.subject]
    if (subjectPerformance) {
      if (subjectPerformance.averageScore > 80) {
        setCurrentDifficulty("Hard")
      } else if (subjectPerformance.averageScore < 60) {
        setCurrentDifficulty("Easy")
      } else {
        setCurrentDifficulty("Medium")
      }
    }
  }, [userPerformance, quiz.subject])

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    const score = quiz.questions.reduce((acc, question) => {
      return acc + (answers[question.id] === question.correctAnswer ? 1 : 0)
    }, 0)

    const result: QuizResult = {
      quizId: quiz.id,
      score,
      totalQuestions: quiz.questions.length,
      completedAt: new Date().toISOString(),
      timeSpent,
      answers,
      difficulty: currentDifficulty,
    }

    setIsFinished(true)
    onComplete(result)
  }

  const handleTimeUp = () => {
    handleSubmit()
  }

  if (isFinished) {
    return (
      <QuizResults
        result={{
          quizId: quiz.id,
          score: Object.values(answers).filter((answer, index) => answer === quiz.questions[index].correctAnswer)
            .length,
          totalQuestions: quiz.questions.length,
          completedAt: new Date().toISOString(),
          timeSpent,
          answers,
          difficulty: currentDifficulty,
        }}
      />
    )
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{quiz.title}</CardTitle>
        <Timer duration={quiz.timeLimit} onTimeUp={handleTimeUp} />
      </CardHeader>
      <CardContent className="space-y-6">
        <QuizQuestion question={currentQuestion} onAnswer={handleAnswer} currentAnswer={answers[currentQuestion.id]} />
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}>
            Previous
          </Button>
          <Button onClick={handleNext}>{currentQuestionIndex === quiz.questions.length - 1 ? "Finish" : "Next"}</Button>
        </div>
      </CardContent>
    </Card>
  )
}

