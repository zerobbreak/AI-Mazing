import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Question } from "@/types"

interface QuizQuestionProps {
  question: Question
  onAnswer: (answer: string) => void
  currentAnswer?: string
}

export function QuizQuestion({ question, onAnswer, currentAnswer }: QuizQuestionProps) {
  const [shortAnswer, setShortAnswer] = useState(currentAnswer || "")

  if (question.type === "short-answer") {
    return (
      <div className="space-y-4">
        <p className="text-lg font-medium">{question.question}</p>
        <Input
          value={shortAnswer}
          onChange={(e) => {
            setShortAnswer(e.target.value)
            onAnswer(e.target.value)
          }}
          placeholder="Type your answer here..."
        />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">{question.question}</p>
      <RadioGroup onValueChange={onAnswer} value={currentAnswer}>
        {question.options?.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={option} />
            <Label htmlFor={option}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

