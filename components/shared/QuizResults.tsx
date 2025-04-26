import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { QuizResult } from "@/types"

interface QuizResultsProps {
  result: QuizResult
}

export function QuizResults({ result }: QuizResultsProps) {
  const percentage = (result.score / result.totalQuestions) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-2xl font-bold">
          Score: {result.score} / {result.totalQuestions}
        </p>
        <p className="text-xl">Percentage: {percentage.toFixed(2)}%</p>
        <p>
          Time Spent: {Math.floor(result.timeSpent / 60)}:{(result.timeSpent % 60).toString().padStart(2, "0")}
        </p>
        <p>Difficulty: {result.difficulty}</p>
      </CardContent>
    </Card>
  )
}

