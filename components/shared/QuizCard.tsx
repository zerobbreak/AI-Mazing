import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, HelpCircle } from "lucide-react"
import Link from "next/link"
import { QuizSummary } from "@/type"

interface QuizCardProps {
  quiz: QuizSummary
}

export function QuizCard({ quiz }: QuizCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {quiz.title}
          <Badge variant="outline">{quiz.difficulty}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-2">{quiz.description}</p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <HelpCircle className="mr-1 h-4 w-4" />
            {quiz.questionCount} questions
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {Math.floor(quiz.timeLimit / 60)} minutes
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/dashboard/quizzes/${quiz.id}`} passHref>
          <Button className="w-full">Start Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

