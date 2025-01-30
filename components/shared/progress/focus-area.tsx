import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { FocusArea } from "@/type"
import { Button } from "@/components/ui/button"
import { FocusAreaItem } from "./focus-area_item"

interface FocusAreasProps {
  focusAreas: FocusArea[]
}

export function FocusAreas({ focusAreas }: FocusAreasProps) {
  const [expandedArea, setExpandedArea] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedArea(expandedArea === id ? null : id)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Areas Needing Focus</CardTitle>
        <CardDescription>Recommended topics to improve your performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {focusAreas.map((area) => (
            <FocusAreaItem
              key={area.id}
              area={area}
              isExpanded={expandedArea === area.id}
              onToggle={() => toggleExpand(area.id)}
            />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline">Generate New Focus Areas</Button>
        </div>
      </CardContent>
    </Card>
  )
}

