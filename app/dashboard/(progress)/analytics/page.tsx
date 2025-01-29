import { FocusAreas } from "@/components/shared/progress/focus-area"
import { MetricsDisplay } from "@/components/shared/progress/metrics-display"
import { ProgressOverview } from "@/components/shared/progress/progress-overview"
import { FocusArea, ProgressData } from "@/type"

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
    subject: "Math",
    topic: "Algebra",
    recommendation: "Review quadratic equations and practice more complex problem-solving.",
  },
  {
    subject: "Science",
    topic: "Chemistry",
    recommendation: "Focus on balancing chemical equations and understanding molar ratios.",
  },
  {
    subject: "Literature",
    topic: "Poetry Analysis",
    recommendation: "Work on identifying literary devices and interpreting themes in poems.",
  },
]

export default function ProgressPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Progress Tracking and Analytics</h1>
      <div className="space-y-6">
        <MetricsDisplay
          overallAccuracy={progressData.overallAccuracy}
          totalTimeSpent={progressData.totalTimeSpent}
          subjectsStudied={progressData.subjectsProgress.length}
        />
        <ProgressOverview subjectsProgress={progressData.subjectsProgress} />
        <FocusAreas focusAreas={focusAreas} />
      </div>
    </div>
  )
}

