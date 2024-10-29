"use client";
import Link from "next/link";
import {
  StarIcon,
  BookmarkIcon,
  ChevronRightIcon,
  ClockIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentLayout } from "@/components/admin-panel/content-layout";

// Dummy data for recommendations
const recommendationsData = [
  {
    title: "Mastering React",
    description: "Advanced concepts and best practices for building modern web applications.",
    category: "Frontend Development",
    rating: 4.8,
    time: "8 hours",
    difficulty: "Intermediate",
    path: "/recommendations/react",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Gain a deep understanding of data structures and algorithms, essential for technical interviews.",
    category: "Computer Science",
    rating: 4.5,
    time: "12 hours",
    difficulty: "Advanced",
    path: "/recommendations/dsa",
  },
  {
    title: "Machine Learning Basics",
    description: "A foundational course on machine learning concepts and applications.",
    category: "AI & ML",
    rating: 4.7,
    time: "10 hours",
    difficulty: "Beginner",
    path: "/recommendations/ml-basics",
  },
];

export default function Recommendations() {
  return (
    <ContentLayout title="Recommendations">
      <div className="container mx-auto p-6 space-y-10">
        {/* Page Header */}
        <section className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Personalized Recommendations</h2>
          <p className="text-gray-600 mt-2">
            Handpicked courses and resources tailored to elevate your learning experience.
          </p>
        </section>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendationsData.map((rec, index) => (
            <Card key={index} className="shadow-md rounded-lg hover:shadow-lg transition duration-200 ease-in-out">
              <CardHeader className="flex items-center space-x-4">
                <BookmarkIcon className="w-6 h-6 text-purple-500" />
                <div>
                  <CardTitle>{rec.title}</CardTitle>
                  <CardDescription>{rec.category}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{rec.description}</p>

                {/* Additional Details */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">{rec.time}</span>
                  </div>
                  <Badge variant="outline" className="text-xs py-1 px-2">
                    {rec.difficulty}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-600">{rec.rating} / 5.0</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <Link href={rec.path} passHref>
                    <Button variant="link" className="text-blue-600 hover:text-blue-700">
                      View Details <ChevronRightIcon className="w-4 h-4 inline-block ml-1" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="text-gray-700 hover:bg-gray-200">
                    <AcademicCapIcon className="w-4 h-4 mr-1 inline-block" />
                    Start Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
