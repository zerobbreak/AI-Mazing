import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Target, Book } from "lucide-react"

interface MetricsDisplayProps {
  overallAccuracy: number
  totalTimeSpent: number
  subjectsStudied: number
}

export function MetricsDisplay({ overallAccuracy, totalTimeSpent, subjectsStudied }: MetricsDisplayProps) {
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Overall Accuracy</CardTitle>
          <Target className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{overallAccuracy.toFixed(1)}%</div>
          <p className="text-xs text-muted-foreground">+2.5% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Time Spent</CardTitle>
          <Clock className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatTime(totalTimeSpent)}</div>
          <p className="text-xs text-muted-foreground">+3h 20m from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subjects Studied</CardTitle>
          <Book className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{subjectsStudied}</div>
          <p className="text-xs text-muted-foreground">+1 new subject this week</p>
        </CardContent>
      </Card>
    </div>
  )
}

