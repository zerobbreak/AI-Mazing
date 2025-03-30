import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserStatistics } from "@/types"
import { BookOpen, Clock, Target, Flame } from "lucide-react"

interface StatisticsCardProps {
  statistics: UserStatistics
}

export function StatisticsCard({ statistics }: StatisticsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Statistics</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>Courses Completed</span>
          </div>
          <span className="font-bold">{statistics.coursesCompleted}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>Total Study Time</span>
          </div>
          <span className="font-bold">{statistics.totalStudyTime} hours</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-muted-foreground" />
            <span>Average Quiz Score</span>
          </div>
          <span className="font-bold">{statistics.averageQuizScore}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame className="h-4 w-4 text-muted-foreground" />
            <span>Current Streak</span>
          </div>
          <span className="font-bold">{statistics.currentStreak} days</span>
        </div>
      </CardContent>
    </Card>
  )
}

