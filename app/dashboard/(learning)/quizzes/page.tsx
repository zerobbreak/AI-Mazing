import { QuizCard } from "@/components/shared/QuizCard"
import { QuizSummary } from "@/type"

// In a real application, you would fetch this data from an API
const mockQuizzes: QuizSummary[] = [
  {
    id: "math-quiz-1",
    title: "Adaptive Math Challenge",
    subject: "Mathematics",
    description: "Test your math skills with questions that adapt to your level!",
    difficulty: "Medium",
    questionCount: 5,
    timeLimit: 300,
  },
  {
    id: "science-quiz-1",
    title: "General Science Quiz",
    subject: "Science",
    description: "Explore various scientific concepts in this comprehensive quiz!",
    difficulty: "Easy",
    questionCount: 10,
    timeLimit: 600,
  },
  {
    id: "history-quiz-1",
    title: "World History Challenge",
    subject: "History",
    description: "Travel through time and test your knowledge of world history!",
    difficulty: "Hard",
    questionCount: 15,
    timeLimit: 900,
  },
]

export default function HomePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Available Quizzes</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockQuizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  )
}

