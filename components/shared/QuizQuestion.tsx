import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HintSystem } from "./hint-system"
import { Question } from "@/types"

interface QuizQuestionProps {
  question: Question
  onAnswer: (answer: string) => void
  currentAnswer?: string
}

export function QuizQuestion({ question, onAnswer, currentAnswer }: QuizQuestionProps) {
  const [shortAnswer, setShortAnswer] = useState(currentAnswer || "")
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = () => {
    if (question.type === "short-answer") {
      onAnswer(shortAnswer)
    }
    setShowFeedback(true)
  }

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">{question.question}</p>
      {question.type === "short-answer" ? (
        <Input
          value={shortAnswer}
          onChange={(e) => setShortAnswer(e.target.value)}
          placeholder="Type your answer here..."
        />
      ) : (
        <RadioGroup onValueChange={onAnswer} value={currentAnswer}>
          {question.options?.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
      <Button onClick={handleSubmit}>Submit Answer</Button>
      {showFeedback && <HintSystem hint={question.hint || "No hint available"} explanation={question.explanation} />}
    </div>
  )
}

