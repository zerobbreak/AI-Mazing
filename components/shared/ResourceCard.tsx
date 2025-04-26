import { Button } from "@/components/ui/button"
import { Video, FileText, PenTool, BookOpen } from "lucide-react"

 interface Resource {
    id: string
    title: string
    type: "video" | "article" | "practice" | "summary"
    url: string
  }

  
interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = () => {
    switch (resource.type) {
      case "video":
        return <Video className="size-4" />
      case "article":
        return <FileText className="size-4" />
      case "practice":
        return <PenTool className="size-4" />
      case "summary":
        return <BookOpen className="size-4" />
    }
  }

  return (
    <Button variant="outline" className="justify-start h-auto py-2 px-3" asChild>
      <a href={resource.url} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className="text-sm">{resource.title}</span>
        </div>
      </a>
    </Button>
  )
}

