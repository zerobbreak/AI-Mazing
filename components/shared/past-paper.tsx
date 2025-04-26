import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PastPaper } from "@/types"

interface PastPaperComponentProps {
  paper: PastPaper
  onStart: () => void
}

export function PastPaperComponent({ paper, onStart }: PastPaperComponentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{paper.title}</CardTitle>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>
              {paper.term} {paper.year}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{paper.timeLimit} minutes</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">{paper.description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <p>{paper.questions.length} questions</p>
          </div>
          <Button onClick={onStart}>Start Paper</Button>
        </div>
      </CardContent>
    </Card>
  )
}

