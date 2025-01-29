"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LineChart } from "@/components/shared/line-chart"
import { lessons, performanceMetrics, quizScores, subjectProgress } from "@/constants"
import { Award, BookOpen, TrendingUp } from "lucide-react"

const Page = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-xl sm:text-2xl font-bold">Welcome back, Student!</h1>
        <p className="text-sm sm:text-base text-muted-foreground">High School - Grade 11</p>
      </div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        {/* Overall Progress */}
        <Card className="sm:col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Overall Learning Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Progress</span>
                <span>65%</span>
              </div>
              <Progress value={65} />
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
              <div>
                <span>12/20</span>
                <p>Courses Completed</p>
              </div>
              <div className="text-right">
                <span>87</span>
                <p>Hours Studied</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subject Progress */}
        <Card className="sm:col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Subject Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjectProgress.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span>{subject.subject}</span>
                  <span>{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommended Lessons */}
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Recommended Lessons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {lessons.map((lesson) => (
              <div key={lesson.title} className="flex flex-col space-y-4 p-3 sm:p-4 border rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                  <div className="space-y-1">
                    <p className="font-medium text-sm sm:text-base">{lesson.title}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{lesson.subject}</Badge>
                      <Badge variant="outline">{lesson.level}</Badge>
                      <Badge variant="outline">{lesson.duration}</Badge>
                    </div>
                  </div>
                  <Button className="self-start sm:self-center">Start</Button>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{lesson.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-medium">Prerequisites:</p>
                  <div className="flex flex-wrap gap-1">
                    {lesson.prerequisites.map((prereq) => (
                      <Badge key={prereq} variant="secondary" className="text-xs">
                        {prereq}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Average Score</p>
                  <p className="text-lg sm:text-2xl font-bold">{performanceMetrics.averageScore.toFixed(1)}%</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-lg sm:text-2xl font-bold">{performanceMetrics.currentStreak} days</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-purple-100 rounded-full">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Total Quizzes Taken</p>
                  <p className="text-lg sm:text-2xl font-bold">{performanceMetrics.totalQuizzesTaken}</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold">Top Performing Subject</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm sm:text-base">{performanceMetrics.topSubject}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Average Score: {performanceMetrics.topSubjectScore.toFixed(1)}%
                  </p>
                </div>
                <Badge variant="secondary">Top Subject</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Recent Performance</h3>
              <div className="h-[200px] sm:h-[250px]">
                <LineChart quizScores={quizScores} />
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-xs sm:text-sm text-muted-foreground">Improvement Rate</p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">+{performanceMetrics.improvementRate}%</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Compared to last month</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Page

