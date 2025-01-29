"use client"

import { ChatInterface } from "@/components/shared/chat-interface"
import { TopicSelector } from "@/components/shared/topic-selector"
import { Topic } from "@/type"
import { useState } from "react"


const topics: Topic[] = [
  { id: "1", name: "Mathematics", description: "Includes algebra, geometry, calculus, and more." },
  { id: "2", name: "Science", description: "Covers physics, chemistry, biology, and earth sciences." },
  { id: "3", name: "Literature", description: "Explores various genres, authors, and literary analysis." },
  { id: "4", name: "History", description: "Covers world history, civilizations, and historical events." },
  { id: "5", name: "Computer Science", description: "Includes programming, algorithms, and computer systems." },
]

export default function VirtualTutorPage() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Virtual Tutor</h1>
      <div className="mb-6">
        <TopicSelector topics={topics} onSelectTopic={setSelectedTopic} />
      </div>
      <ChatInterface selectedTopic={selectedTopic} />
    </div>
  )
}

