"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  AcademicCapIcon,
  PresentationChartLineIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ContentLayout } from "@/components/admin-panel/content-layout";

// User data type declaration
interface UserDataProps {
  name: string;
  learningPath: string;
  progress: number;
  recommendations: string[];
  completedLessons: number;
  hoursSpent: number;
  performanceTrend: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<UserDataProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  const dummyUserData = {
    name: "John Doe",
    learningPath: "Maths",
    progress: 68, // Progress percentage
    recommendations: [
      "Algebra ",
      "Statistics",
      "Geometry",
    ],
    completedLessons: 15,
    hoursSpent: 32,
    performanceTrend: "Improving",
  };
  
  useEffect(() => {
    // Simulate fetching user data and set the dummy data
    setUser(dummyUserData);
  }, []);

  if (error) return <div>Error: {error}</div>;
  console.log(user);

  return (
    <ContentLayout title="Overview">
      <div className="container mx-auto p-6 space-y-10">
        {/* Welcome Banner */}
        <section className="bg-blue-50 p-8 rounded-lg text-center shadow-md">
          <h2 className="text-3xl font-bold text-blue-600">
            Welcome back, {user?.name}!
          </h2>
          <p className="text-gray-700 mt-2">
            You’re currently {user?.progress}% through the{" "}
            <strong>{user?.learningPath}</strong> path.
          </p>
          <Progress value={user?.progress} className="mt-4" />
        </section>

        {/* Message to Complete Setup */}
        {(!user?.name || !user?.learningPath) && (
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <p className="text-lg font-semibold text-yellow-800">
              Finish up setup: Please complete your profile setup.
            </p>
            <Link href={`/dashboard/profile`} passHref>
              <Button className="mt-2 bg-yellow-600 text-white hover:bg-yellow-700">
                Complete Setup
              </Button>
            </Link>
          </div>
        )}

        {/* Core Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Learning Paths Section */}
          <Card className="shadow-md rounded-lg hover:shadow-lg transition duration-200 ease-in-out">
            <CardHeader className="flex items-center space-x-4">
              <AcademicCapIcon className="w-6 h-6 text-blue-500" />
              <div>
                <CardTitle>Core Subject</CardTitle>
                <CardDescription>
                  Your current journey and next steps
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Continue with <strong>{user?.learningPath}</strong>.
              </p>
              <Link href="/dashboard/learning-path" passHref>
                <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">
                  Continue Learning
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Performance Analytics Section */}
          <Card className="shadow-md rounded-lg hover:shadow-lg transition duration-200 ease-in-out">
            <CardHeader className="flex items-center space-x-4">
              <PresentationChartLineIcon className="w-6 h-6 text-green-500" />
              <div>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Track your progress and trends
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Completed Lessons:</strong> {user?.completedLessons}
              </p>
              <p>
                <strong>Total Hours:</strong> {user?.hoursSpent} hrs
              </p>
              <p>
                <strong>Trend:</strong>{" "}
                <Badge
                  variant="outline"
                  color={
                    user?.performanceTrend === "Improving" ? "green" : "yellow"
                  }
                >
                  {user?.performanceTrend}
                </Badge>
              </p>
              <Link href="/dashboard/analytics" passHref>
                <Button className="mt-4 bg-green-600 text-white hover:bg-green-700">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recommendations Section */}
          <Card className="shadow-md rounded-lg hover:shadow-lg transition duration-200 ease-in-out">
            <CardHeader className="flex items-center space-x-4">
              <BookmarkIcon className="w-6 h-6 text-purple-500" />
              <div>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>
                  Based on the weaknesses of the students
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {user?.recommendations.map((rec, index) => (
                <div key={index} className="py-1">
                  <Link href={`/recommendations/${rec}`} passHref>
                    <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {rec}
                    </Button>
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Community and Feedback Section */}
        <section className="bg-gray-100 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">
            Community & Feedback
          </h3>
          <p className="text-gray-600 mt-2">
            Connect with peers and share your experiences, or provide feedback
            on the platform.
          </p>
          <Link href="/dashboard/community" passHref>
            <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">
              Join the Community
            </Button>
          </Link>
        </section>
      </div>
    </ContentLayout>
  );
}
