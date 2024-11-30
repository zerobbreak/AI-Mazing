"use server";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { fetchStudent } from "@/lib/actions/student.action";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRightIcon, CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

// User data type declaration
interface UserDataProps {
  name: string;
  username: string;
  gradeLevel: string;
  preferences: {
    language: string;
    notificationsEnabled: boolean;
    theme: string;
  };
  studyRecommendations: string[];
  subjects: string[];
  uploadedDocuments: string[];
  performance: {
    attendanceRate: number;
    averageTaskCompletionTime: number;
  };
  onboarded: boolean;
}

export default async function Dashboard() {
  const userInfo = await currentUser();
  const user = await fetchStudent(userInfo?.id);

  if (!user) return <div>Loading.......</div>;

  // Check for missing fields
  const missingData =
    !user.name || !user.gradeLevel || user.subjects.length === 0;
  return (
    <ContentLayout title="Overview">
      <div className="container mx-auto p-6 space-y-10">
      {/* Step-by-Step Guide */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <div className="flex items-center space-x-3">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          <h3 className="text-2xl font-bold text-gray-800">Getting Started</h3>
        </div>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Review your profile information.</li>
          <li>Add missing details like subjects, preferences, and study recommendations.</li>
          <li>Track your progress and explore personalized recommendations.</li>
        </ol>
      </section>

      {/* Profile Incomplete Alert */}
      {missingData && (
        <Alert variant="destructive" className="rounded-lg shadow-md">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" />
          <div>
            <AlertDescription>
              <h3 className="text-lg font-semibold text-yellow-800">Your profile is incomplete.</h3>
              <p className="text-yellow-700">
                Complete your profile to get personalized recommendations and a better experience.
              </p>
            </AlertDescription>
          </div>
          <Link href="/dashboard/profile" passHref>
            <Button variant="default" className="ml-auto mt-4">
              Complete Profile
            </Button>
          </Link>
        </Alert>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Learning Path */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <ArrowRightIcon className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-blue-600">Learning Path</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Continue with {user.gradeLevel || "your grade level"} journey.
            </p>
            <Link href="/dashboard/learning-path" passHref>
              <Button className="mt-4" variant="secondary">
                Explore Learning Path
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Performance Analytics */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <ArrowRightIcon className="h-5 w-5 text-green-600" />
              <CardTitle className="text-green-600">Performance Analytics</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Attendance Rate: {user.performance.attendanceRate}%
            </p>
            <p className="text-gray-700">
              Task Completion Time: {user.performance.averageTaskCompletionTime} minutes
            </p>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <ArrowRightIcon className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-purple-600">Recommendations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            {user.studyRecommendations.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700">
                {user.studyRecommendations.map(({ rec, index }: any) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No recommendations available yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    </ContentLayout>
  );
}
