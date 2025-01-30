"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import type { Course, EducationLevel, LearningPath,  } from "@/type"
import { CourseCard } from "@/components/shared/CourseCard"
import { ChevronRight, BookOpen, Code, FlaskRoundIcon as Flask, Calculator } from "lucide-react"

const LearningPathPage = () => {
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
      completed: false,
      order: 3,
    },
  ]

  const learningPaths: LearningPath[] = [
    {
      id: "math",
      title: "Mathematics",
      description: "Master mathematical concepts from algebra to calculus.",
      icon: <Calculator className="w-6 h-6" />,
    },
    {
      id: "programming",
      title: "Computer Science",
      description: "Learn programming languages and software development.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      id: "science",
      title: "Natural Sciences",
      description: "Explore physics, chemistry, and biology fundamentals.",
      icon: <Flask className="w-6 h-6" />,
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
          <h1 className="text-2xl sm:text-3xl font-bold">Your Learning Paths</h1>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="education-level" className="whitespace-nowrap">
                Education Level:
              </Label>
              <div className="flex items-center space-x-2">
                <span
                  className={`text-sm ${educationLevel === "High School" ? "font-medium" : "text-muted-foreground"}`}
                >
                  High School
                </span>
                <Switch
                  id="education-level"
                  checked={educationLevel === "University"}
                  onCheckedChange={(checked) => setEducationLevel(checked ? "University" : "High School")}
                />
                <span
                  className={`text-sm ${educationLevel === "University" ? "font-medium" : "text-muted-foreground"}`}
                >
                  University
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Overall Progress</Label>
            <Progress value={(progress.completedLessons / progress.totalLessons) * 100} />
            <p className="text-sm text-muted-foreground">
              {progress.completedLessons} of {progress.totalLessons} lessons completed
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Available Learning Paths</h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="bg-card text-card-foreground rounded-lg shadow-md p-4 sm:p-6 space-y-3 sm:space-y-4"
              >
                <div className="flex items-center space-x-3">
                  {path.icon}
                  <h3 className="text-lg sm:text-xl font-semibold">{path.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{path.description}</p>
                <Button variant="outline" className="w-full text-sm">
                  Explore Path <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Recommended for You</h2>
          <div className="bg-card text-card-foreground rounded-lg shadow-md p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-lg sm:text-xl font-semibold">Continue Your Math Journey</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Based on your progress, we recommend continuing with the Mathematics learning path.
            </p>
            <Button className="w-full text-sm">Resume Learning</Button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Your Current Courses</h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses
              .sort((a, b) => a.order - b.order)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningPathPage

