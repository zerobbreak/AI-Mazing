import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Video, Dumbbell } from "lucide-react"
import { Resource } from "@/types"

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const iconMap = {
    article: BookOpen,
    video: Video,
    exercise: Dumbbell,
  }

  const Icon = iconMap[resource.type]

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{resource.title}</CardTitle>
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge>{resource.subject}</Badge>
          <Badge variant="outline">{resource.subtopic}</Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          {resource.duration ? `${resource.duration} mins` : "Variable duration"}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant="secondary">{resource.difficulty}</Badge>
        <Button asChild>
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            Open Resource
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

