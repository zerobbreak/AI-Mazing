import type { FocusArea } from "@/type"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, ChevronDown, ChevronUp, Target, Zap } from "lucide-react"

interface FocusAreaItemProps {
  area: FocusArea
  isExpanded: boolean
  onToggle: () => void
}

export function FocusAreaItem({ area, isExpanded, onToggle }: FocusAreaItemProps) {
  const getIcon = (subject: string) => {
    switch (subject) {
      case "Math":
        return <Target className="h-6 w-6 text-primary" />
      case "Science":
        return <Zap className="h-6 w-6 text-primary" />
      case "Literature":
        return <BookOpen className="h-6 w-6 text-primary" />
      default:
        return <BookOpen className="h-6 w-6 text-primary" />
    }
  }

  return (
    <div className="bg-muted p-4 rounded-lg">
      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-2 rounded-full">{getIcon(area.subject)}</div>
        <div className="flex-grow">
          <h3 className="font-semibold text-lg">
            {area.subject}: {area.topic}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{area.recommendation}</p>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-sm">
              Current mastery: <span className="font-medium">{area.currentMastery}%</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onToggle}>
              {isExpanded ? (
                <>
                  Less <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Progress towards mastery</span>
              <span>{area.currentMastery}%</span>
            </div>
            <Progress value={area.currentMastery} className="h-2" />
          </div>
          <div>
            <h4 className="font-medium mb-2">Suggested Resources:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {area.suggestedResources.map((resource, index) => (
                <li key={index}>{resource}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Practice Questions:</h4>
            <ul className="list-decimal list-inside space-y-1 text-sm">
              {area.practiceQuestions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
          <Button variant="outline" className="w-full">
            Start Focused Practice
          </Button>
        </div>
      )}
    </div>
  )
}

