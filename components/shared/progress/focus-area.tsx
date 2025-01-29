import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FocusArea } from "@/type"

interface FocusAreasProps {
  focusAreas: FocusArea[]
}

export function FocusAreas({ focusAreas }: FocusAreasProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Areas Needing Focus</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {focusAreas.map((area, index) => (
            <li key={index} className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold">
                {area.subject}: {area.topic}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{area.recommendation}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

