import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface HintSystemProps {
  hint: string
  explanation: string
}

export function HintSystem({ hint, explanation }: HintSystemProps) {
  const [showHint, setShowHint] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <Button variant="outline" size="sm" onClick={() => setShowHint(!showHint)}>
          {showHint ? "Hide Hint" : "Show Hint"}
        </Button>
        <Button variant="outline" size="sm" onClick={() => setShowExplanation(!showExplanation)}>
          {showExplanation ? "Hide Explanation" : "Show Explanation"}
        </Button>
      </div>
      {showHint && (
        <Card>
          <CardContent className="p-4">
            <p className="text-sm font-medium">Hint: {hint}</p>
          </CardContent>
        </Card>
      )}
      {showExplanation && (
        <Card>
          <CardContent className="p-4">
            <p className="text-sm">Explanation: {explanation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

