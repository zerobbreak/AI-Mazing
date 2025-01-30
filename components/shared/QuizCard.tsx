import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, HelpCircle, Star } from "lucide-react"
import Link from "next/link"
import type { QuizSummary } from "@/type"

interface QuizCardProps {
  quiz: QuizSummary
  featured?: boolean
}

export function QuizCard({ quiz, featured = false }: QuizCardProps) {
  return (
    <Card className={`flex flex-col h-full ${featured ? "border-2 border-primary" : ""}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {featured && <Star className="h-5 w-5 text-yellow-400 fill-current" />}
            <span>{quiz.title}</span>
          </div>
          <Badge variant={featured ? "default" : "outline"}>{quiz.difficulty}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className={`${featured ? "text-base" : "text-sm"} text-muted-foreground mb-4`}>{quiz.description}</p>
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
        <Link href={`/dashboard/quizzes/${quiz.id}`} passHref className="w-full">
          <Button className={`w-full ${featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}>
            {featured ? "Start Featured Quiz" : "Start Quiz"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

