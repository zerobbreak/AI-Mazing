"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Course, EducationLevel } from "@/type"
import { CourseCard } from "@/components/shared/CourseCard"

export default function LearningPathPage() {
  const [educationLevel, setEducationLevel] = useState<EducationLevel>("High School")

  const courses: Course[] = [
    {
      id: "1",
      title: "Basic Algebra",
      description: "Learn fundamental algebraic concepts and equations.",
      difficulty: "Beginner",
      completed: true,
      order: 1,
    },
    {
      id: "2",
      title: "Geometry Essentials",
      description: "Explore geometric shapes, theorems, and proofs.",
      difficulty: "Intermediate",
      completed: true,
      order: 2,
    },
    {
      id: "3",
      title: "Introduction to Trigonometry",
      description: "Understand trigonometric functions and their applications.",
      difficulty: "Advanced",
      completed: true,
      order: 3,
    },
  ]

  const progress = {
    completedLessons: courses.filter((course) => course.completed).length,
    totalLessons: courses.length,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Your Learning Path</h1>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Label htmlFor="education-level">Education Level:</Label>
              <span className={educationLevel === "High School" ? "font-medium" : "text-muted-foreground"}>
                High School
              </span>
              <Switch
                id="education-level"
                checked={educationLevel === "University"}
                onCheckedChange={(checked) => setEducationLevel(checked ? "University" : "High School")}
              />
              <span className={educationLevel === "University" ? "font-medium" : "text-muted-foreground"}>
                University
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Progress</Label>
            <Progress value={(progress.completedLessons / progress.totalLessons) * 100} />
            <p className="text-sm text-muted-foreground">
              {progress.completedLessons} of {progress.totalLessons} lessons completed
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses
            .sort((a, b) => a.order - b.order)
            .map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>
      </div>
    </div>
  )
}

