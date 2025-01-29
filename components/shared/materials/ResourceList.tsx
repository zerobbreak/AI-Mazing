
import { Resource, Subject } from "@/type"
import { ResourceCard } from "./ResourceCard"

interface ResourceListProps {
  resources: Resource[]
  subject: Subject
  subtopic: string
}

export function ResourceList({ resources, subject, subtopic }: ResourceListProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">{subject}</h2>
      <h3 className="text-xl font-semibold mb-4">{subtopic}</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  )
}

