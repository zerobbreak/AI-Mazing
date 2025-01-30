"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ResourceList } from "@/components/shared/materials/ResourceList"
import type { Resource, Subject, UserLearningPattern } from "@/type"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Video, FileText, PenTool } from "lucide-react"

// Mock data (in a real app, this would be fetched from an API)
const mockResources: Resource[] = [
  {
    id: "1",
    title: "Quadratic Equations Explained",
    type: "video",
    description: "A comprehensive guide to solving quadratic equations.",
    url: "https://example.com/quadratic-equations",
    duration: 20,
    difficulty: "intermediate",
    subject: "Mathematics",
    subtopic: "Algebra",
  },
  {
    id: "2",
    title: "Cell Biology Basics",
    type: "article",
    description: "Learn about the fundamental building blocks of life.",
    url: "https://example.com/cell-biology",
    duration: 15,
    difficulty: "beginner",
    subject: "Science",
    subtopic: "Biology",
  },
  {
    id: "3",
    title: "Shakespeare's Sonnets Analysis",
    type: "exercise",
    description: "Practice analyzing Shakespeare's sonnets with guided questions.",
    url: "https://example.com/shakespeare-sonnets",
    difficulty: "advanced",
    subject: "English",
    subtopic: "Literature",
  },
  {
    id: "4",
    title: "World War II Timeline",
    type: "article",
    description: "An interactive timeline of major events in World War II.",
    url: "https://example.com/ww2-timeline",
    duration: 25,
    difficulty: "intermediate",
    subject: "History",
    subtopic: "20th Century",
  },
  {
    id: "5",
    title: "Spanish Verb Conjugation Practice",
    type: "exercise",
    description: "Interactive exercises to master Spanish verb conjugations.",
    url: "https://example.com/spanish-verbs",
    difficulty: "beginner",
    subject: "Foreign Language",
    subtopic: "Spanish",
  },
]

const mockUserLearningPattern: UserLearningPattern = {
  preferredResourceTypes: ["video", "exercise"],
  strongSubjects: ["Mathematics", "Science"],
  weakSubjects: ["History", "Foreign Language"],
  averageStudyTime: 30,
}

export default function RecommendationPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("All")

  const filteredResources = useMemo(() => {
    return mockResources.filter(
      (resource) =>
        (activeTab === "All" || resource.subject === activeTab) &&
        (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.subtopic.toLowerCase().includes(searchTerm.toLowerCase())),
    )
  }, [searchTerm, activeTab])

  const organizedResources = useMemo(() => {
    const organized: Record<Subject, Record<string, Resource[]>> = {
      Mathematics: {},
      Science: {},
      English: {},
      History: {},
      "Foreign Language": {},
    }

    filteredResources.forEach((resource) => {
      if (!organized[resource.subject][resource.subtopic]) {
        organized[resource.subject][resource.subtopic] = []
      }
      organized[resource.subject][resource.subtopic].push(resource)
    })

    return organized
  }, [filteredResources])

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "article":
        return <FileText className="h-4 w-4" />
      case "exercise":
        return <PenTool className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Recommended Resources</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search and Filter</CardTitle>
          <CardDescription>Find resources by subject, topic, or title</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="search">Search Resources</Label>
              <Input
                id="search"
                type="text"
                placeholder="Search by subject, topic, or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-1"
              />
            </div>
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as Subject)}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Mathematics">Math</TabsTrigger>
                <TabsTrigger value="Science">Science</TabsTrigger>
                <TabsTrigger value="English">English</TabsTrigger>
                <TabsTrigger value="History">History</TabsTrigger>
                <TabsTrigger value="Foreign Language">Languages</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-10">
        {Object.entries(organizedResources).map(([subject, subtopics]) =>
          Object.entries(subtopics).map(([subtopic, resources]) => (
            <ResourceList
              key={`${subject}-${subtopic}`}
              resources={resources}
              subject={subject as Subject}
              subtopic={subtopic}
              getResourceTypeIcon={getResourceTypeIcon}
            />
          )),
        )}
      </div>

      <div className="mt-8 text-center">
        <Button asChild>
          <a href="/learning-path">View Your Learning Path</a>
        </Button>
      </div>
    </div>
  )
}

