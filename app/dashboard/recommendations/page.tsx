"use client";
import { useEffect, useState } from "react";
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
import { useUserContext } from "@/context/UserContext";
import { fetchUserById } from "@/lib/actions/user.action";

// Default data if user has no specific recommendations
const defaultRecommendations = [
  {
    title: "Mastering React",
    description: "Advanced concepts and best practices for building modern web applications.",
    category: "Frontend Development",
    rating: 4.8,
    time: "8 hours",
    difficulty: "Intermediate",
    path: "#",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Gain a deep understanding of data structures and algorithms, essential for technical interviews.",
    category: "Computer Science",
    rating: 4.5,
    time: "12 hours",
    difficulty: "Advanced",
    path: "#",
  },
  {
    title: "Machine Learning Basics",
    description: "A foundational course on machine learning concepts and applications.",
    category: "AI & ML",
    rating: 4.7,
    time: "10 hours",
    difficulty: "Beginner",
    path: "#",
  },
];

export default function Recommendations() {
  const { user } = useUserContext();
  const [recommendations, setRecommendations] = useState<any[]>(defaultRecommendations);

  useEffect(() => {
    const loadData = async () => {
      if (user?.id) {
        const fetchedUser = await fetchUserById(Number(user.id));
        if (fetchedUser?.recommendations && fetchedUser.recommendations.length > 0) {
            // If recommendations are just strings, map them to objects. 
            // If you store JSON strings, parse them. 
            // Assuming simple strings for now as per schema.
            const mappedRecs = fetchedUser.recommendations.map(rec => ({
                title: rec,
                description: "Recommended based on your learning path.",
                category: fetchedUser.learningPath || "General",
                rating: 4.5,
                time: "Flexible",
                difficulty: "Adaptive",
                path: "#"
            }));
            setRecommendations(mappedRecs);
        }
      }
    };
    loadData();
  }, [user]);

  return (
    <ContentLayout title="Recommendations">
      <div className="container mx-auto p-6 space-y-10 text-white">
        {/* Page Header */}
        <section className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Personalized Recommendations</h2>
          <p className="text-gray-400 mt-2">
            Handpicked courses and resources tailored to elevate your learning experience.
          </p>
        </section>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 space-y-0 pb-2">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <BookmarkIcon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-white text-lg">{rec.title}</CardTitle>
                  <CardDescription className="text-gray-400">{rec.category}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">{rec.description}</p>

                {/* Additional Details */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-400">{rec.time}</span>
                  </div>
                  <Badge variant="outline" className="text-xs py-0.5 px-2 border-gray-700 text-gray-300 bg-gray-800">
                    {rec.difficulty}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-medium text-gray-400">{rec.rating} / 5.0</span>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center gap-2">
                  <Link href={rec.path} passHref className="w-full">
                    <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                      View Details
                    </Button>
                  </Link>
                  <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white">
                    <AcademicCapIcon className="w-4 h-4 mr-1 inline-block" />
                    Start
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
