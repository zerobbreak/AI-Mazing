"use client"

import { useState } from "react"
import { MetricsDisplay } from "@/components/shared/progress/metrics-display"
import { ProgressOverview } from "@/components/shared/progress/progress-overview"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { FocusArea, ProgressData } from "@/type"
import { SubjectDetails } from "@/components/shared/progress/subjectDetails"
import { FocusAreas } from "@/components/shared/progress/focus-area"

// Dummy data (in a real app, this would be fetched from an API)
const progressData: ProgressData = {
  overallAccuracy: 78.5,
  totalTimeSpent: 1260, // 21 hours
  subjectsProgress: [
    { subject: "Math", accuracy: 82, timeSpent: 420, masteryLevel: 75 },
    { subject: "Science", accuracy: 76, timeSpent: 360, masteryLevel: 70 },
    { subject: "History", accuracy: 88, timeSpent: 300, masteryLevel: 85 },
    { subject: "Literature", accuracy: 72, timeSpent: 180, masteryLevel: 65 },
  ],
}

const focusAreas: FocusArea[] = [
  {
    id: "1",
    subject: "Math",
    topic: "Algebra",
    recommendation: "Review quadratic equations and practice more complex problem-solving.",
    currentMastery: 65,
    suggestedResources: [
      "Khan Academy: Quadratic Equations",
      "MathIsFun: Algebra Basics",
      "YouTube: Solving Word Problems with Algebra",
    ],
    practiceQuestions: [
      "Solve for x: 2x^2 + 5x - 3 = 0",
      "A rectangle's length is 3 more than its width. If its area is 70 sq units, find its dimensions.",
      "Graph y = x^2 - 4x + 4 and identify its key features.",
    ],
  },
  {
    id: "2",
    subject: "Science",
    topic: "Chemistry",
    recommendation: "Focus on balancing chemical equations and understanding molar ratios.",
    currentMastery: 72,
    suggestedResources: [
      "Crash Course: Stoichiometry",
      "ChemTutor: Balancing Chemical Equations",
      "Interactive Periodic Table",
    ],
    practiceQuestions: [
      "Balance this equation: Fe + O2 → Fe2O3",
      "Calculate the molar mass of H2SO4",
      "How many moles of H2O are in 36 grams of water?",
    ],
  },
  {
    id: "3",
    subject: "Literature",
    topic: "Poetry Analysis",
    recommendation: "Work on identifying literary devices and interpreting themes in poems.",
    currentMastery: 58,
    suggestedResources: [
      "Poetry Foundation: Glossary of Poetic Terms",
      "LitCharts: How to Analyze a Poem",
      "TED-Ed: How to Read Poetry",
    ],
    practiceQuestions: [
      "Identify the metaphors in Robert Frost's 'The Road Not Taken'",
      "Analyze the theme of love in Shakespeare's Sonnet 18",
      "Explain the use of imagery in Emily Dickinson's 'Hope is the thing with feathers'",
    ],
  },
]

export default function ProgressPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Progress Tracking and Analytics</h1>
      <div className="space-y-6">
        <MetricsDisplay
          overallAccuracy={progressData.overallAccuracy}
          totalTimeSpent={progressData.totalTimeSpent}
          subjectsStudied={progressData.subjectsProgress.length}
        />
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="focus">Focus Areas</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
                <CardDescription>Your performance across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressOverview
                  subjectsProgress={progressData.subjectsProgress}
                  onSubjectSelect={setSelectedSubject}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="subjects">
            <Card>
              <CardHeader>
                <CardTitle>Subject Details</CardTitle>
                <CardDescription>Detailed progress for each subject</CardDescription>
              </CardHeader>
              <CardContent>
                <SubjectDetails
                  subjectsProgress={progressData.subjectsProgress}
                  selectedSubject={selectedSubject}
                  onSubjectSelect={setSelectedSubject}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="focus">
            <FocusAreas focusAreas={focusAreas} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

