import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, GraduationCap, School, FileText, Download } from "lucide-react"
import Link from "next/link"

const subjects = [
  {
    name: "Mathematics",
    icon: "π",
    description: "Algebra, Calculus, Statistics",
    topics: ["Linear Algebra", "Calculus I, II, III", "Probability & Statistics", "Discrete Mathematics"],
    resources: ["Textbooks", "Video Lectures", "Problem Sets", "Interactive Simulations"],
  },
  {
    name: "Science",
    icon: "π¬",
    description: "Physics, Chemistry, Biology",
    topics: ["Classical Mechanics", "Organic Chemistry", "Molecular Biology", "Quantum Physics"],
    resources: ["Lab Manuals", "Scientific Journals", "Experiment Videos", "3D Molecular Models"],
  },
  {
    name: "Literature",
    icon: "π",
    description: "Classic and Modern Literature",
    topics: ["Shakespeare", "American Literature", "World Poetry", "Contemporary Fiction"],
    resources: ["eBooks", "Literary Analyses", "Author Biographies", "Audio Books"],
  },
  {
    name: "History",
    icon: "π",
    description: "World History, Local History",
    topics: ["Ancient Civilizations", "Renaissance", "World Wars", "Post-Colonial Era"],
    resources: ["Historical Documents", "Timelines", "Map Collections", "Biographical Accounts"],
  },
  {
    name: "Computer Science",
    icon: "π»",
    description: "Programming, Algorithms, Data Structures",
    topics: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Web Development"],
    resources: ["Coding Environments", "Algorithm Visualizations", "Project Ideas", "Tech Documentation"],
  },
  {
    name: "Languages",
    icon: "π",
    description: "English, Spanish, French, and more",
    topics: ["Grammar", "Conversation", "Literature", "Cultural Studies"],
    resources: ["Language Exchange Platforms", "Pronunciation Guides", "Vocabulary Lists", "Cultural Media"],
  },
]

const pastPapers = [
  { year: 2022, subjects: ["Mathematics", "Physics", "Literature"] },
  { year: 2021, subjects: ["Chemistry", "Biology", "History"] },
  { year: 2020, subjects: ["Computer Science", "Languages", "Economics"] },
]

export default function MaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Educational Materials</h1>
        <p className="text-xl text-muted-foreground">
          Access a wide range of resources for both university and high school students
        </p>
      </header>

      <Tabs defaultValue="university" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="university">
            <GraduationCap className="mr-2 h-4 w-4" />
            University
          </TabsTrigger>
          <TabsTrigger value="highschool">
            <School className="mr-2 h-4 w-4" />
            High School
          </TabsTrigger>
        </TabsList>
        <TabsContent value="university" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">University Materials</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <Card key={subject.name}>
                <CardHeader>
                  <CardTitle>{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="topics">
                      <AccordionTrigger>Topics Covered</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5">
                          {subject.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="resources">
                      <AccordionTrigger>Available Resources</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5">
                          {subject.resources.map((resource, index) => (
                            <li key={index}>{resource}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/materials/university/${subject.name.toLowerCase()}`}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Resources
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="highschool" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">High School Materials</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <Card key={subject.name}>
                <CardHeader>
                  <CardTitle>{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="topics">
                      <AccordionTrigger>Topics Covered</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5">
                          {subject.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="resources">
                      <AccordionTrigger>Available Resources</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5">
                          {subject.resources.map((resource, index) => (
                            <li key={index}>{resource}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/materials/highschool/${subject.name.toLowerCase()}`}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Resources
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Past Papers</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastPapers.map((paper) => (
            <Card key={paper.year}>
              <CardHeader>
                <CardTitle>{paper.year} Exam Papers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {paper.subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  View Papers
                </Button>
                <Button className="ml-2">
                  <Download className="mr-2 h-4 w-4" />
                  Download All
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

