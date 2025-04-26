import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Resource, Subject } from "@/types"
import { Badge } from "@/components/ui/badge"

interface ResourceListProps {
  resources: Resource[]
  subject: Subject
  subtopic: string
  getResourceTypeIcon: (type: string) => React.ReactNode
}

export function ResourceList({ resources, subject, subtopic, getResourceTypeIcon }: ResourceListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{subject}</CardTitle>
        <CardDescription>{subtopic}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <li key={resource.id}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{resource.title}</CardTitle>
                  {getResourceTypeIcon(resource.type)}
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{resource.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">{resource.difficulty}</Badge>
                    {resource.duration && <Badge variant="outline">{resource.duration} min</Badge>}
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

