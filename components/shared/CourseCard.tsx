import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Course } from "@/type"
import Link from "next/link"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 hover:bg-green-100",
    Intermediate: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    Advanced: "bg-red-100 text-red-800 hover:bg-red-100",
  }

  return (
    <Card className="relative">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-sm text-muted-foreground">{course.description}</p>
          </div>
          {course.completed && (
            <div className="rounded-full p-1 bg-green-100">
              <Check className="h-4 w-4 text-green-600" />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={difficultyColors[course.difficulty]}>
            {course.difficulty}
          </Badge>
          <Link href={`/learning-path/${course.id}`}>Revisit</Link>
        </div>
      </CardContent>
    </Card>
  )
}

