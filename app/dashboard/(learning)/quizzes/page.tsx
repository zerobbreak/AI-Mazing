"use client";

import { useState } from "react";
import { QuizCard } from "@/components/shared/QuizCard";
import type { QuizSummary } from "@/types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Trophy,
  TrendingUp,
  Award,
  BookOpen,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { LineChart } from "@/components/shared/line-chart";
import {
  lessons,
  performanceMetrics,
  quizScores,
  subjectProgress,
} from "@/constants";

// In a real application, you would fetch this data from an API
const mockQuizzes: QuizSummary[] = [
  {
    id: "math-quiz-1",
    title: "Adaptive Math Challenge",
    subject: "Mathematics",
    description:
      "Test your math skills with questions that adapt to your level!",
    difficulty: "Medium",
    questionCount: 5,
    timeLimit: 300,
  },
  {
    id: "science-quiz-1",
    title: "General Science Quiz",
    subject: "Science",
    description:
      "Explore various scientific concepts in this comprehensive quiz!",
    difficulty: "Easy",
    questionCount: 10,
    timeLimit: 600,
  },
  {
    id: "history-quiz-1",
    title: "World History Challenge",
    subject: "History",
    description:
      "Travel through time and test your knowledge of world history!",
    difficulty: "Hard",
    questionCount: 15,
    timeLimit: 900,
  },
  {
    id: "literature-quiz-1",
    title: "Classic Literature Trivia",
    subject: "Literature",
    description:
      "Test your knowledge of classic literature and famous authors!",
    difficulty: "Medium",
    questionCount: 12,
    timeLimit: 720,
  },
  {
    id: "geography-quiz-1",
    title: "Global Geography Explorer",
    subject: "Geography",
    description: "Explore the world's countries, capitals, and landmarks!",
    difficulty: "Easy",
    questionCount: 8,
    timeLimit: 480,
  },
];

const quizCategories = [
  "All",
  "Mathematics",
  "Science",
  "History",
  "Literature",
  "Geography",
];

const topPerformers = [
  { name: "Alice Johnson", score: 98, quizzes: 15 },
  { name: "Bob Smith", score: 95, quizzes: 12 },
  { name: "Charlie Brown", score: 92, quizzes: 18 },
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredQuizzes = mockQuizzes.filter((quiz) => {
    const matchesSearch =
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || quiz.subject === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "All" || quiz.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6">
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        {/* Quiz Central Section */}
        <div className="sm:col-span-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Quiz Central
          </h1>

          {/* Featured Quiz */}
          <Card className="mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                Featured Quiz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <QuizCard quiz={mockQuizzes[0]} featured={true} />
            </CardContent>
          </Card>

          {/* Search and Filters */}
          <div className="mb-6 space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:gap-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {quizCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedDifficulty}
              onValueChange={setSelectedDifficulty}
            >
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Difficulties</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Quiz List */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
            {filteredQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>

          {/* Quiz Categories */}
          <Card className="mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Filter size={24} />
                Quiz Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {quizCategories.slice(1).map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs sm:text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Trophy size={24} />
                Top Performers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 sm:gap-4">
                      <Badge variant="secondary">{index + 1}</Badge>
                      <div>
                        <p className="font-semibold text-sm sm:text-base">
                          {performer.name}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {performer.quizzes} quizzes completed
                        </p>
                      </div>
                    </div>
                    <Badge variant="default" className="text-xs sm:text-sm">
                      {performer.score}% avg. score
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
