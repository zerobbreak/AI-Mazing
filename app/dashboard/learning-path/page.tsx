"use client";
import { useEffect, useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useUserContext } from "@/context/UserContext";
import { fetchUserById } from "@/lib/actions/user.action";
import { Progress } from "@/components/ui/progress";

export default function LearningPath() {
  const { user } = useUserContext();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      if (user?.id) {
        const fetchedUser = await fetchUserById(Number(user.id));
        setUserData(fetchedUser);
      }
    };
    loadData();
  }, [user]);

  return (
    <ContentLayout title="Learning Path">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
        <Card className="bg-gray-900 border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
               <AcademicCapIcon className="w-6 h-6 text-indigo-400" />
            </div>
            <CardTitle className="text-white">Current Learning Path</CardTitle>
            <CardDescription className="text-gray-400">Your active path in AI studies</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              {userData?.learningPath || "Not Selected"}
            </p>
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>{userData?.progress || 0}%</span>
            </div>
            <Progress value={userData?.progress || 0} className="h-2 bg-gray-800 [&>div]:bg-indigo-500" />
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <AcademicCapIcon className="w-6 h-6 text-purple-400" />
            </div>
            <CardTitle className="text-white">Upcoming Courses</CardTitle>
            <CardDescription className="text-gray-400">Continue your journey with these next steps</CardDescription>
          </CardHeader>
          <CardContent>
            {userData?.learningPath ? (
               <div className="space-y-4">
                 {[
                   `Advanced ${userData.learningPath} Concepts`,
                   `${userData.learningPath} Real-world Projects`,
                   `${userData.learningPath} Interview Prep`
                 ].map((course, i) => (
                   <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
                     <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-400">
                       {i + 1}
                     </div>
                     <span className="text-gray-300">{course}</span>
                   </div>
                 ))}
               </div>
            ) : (
              <div className="text-center py-6 text-gray-500">
                <p>Select a learning path in your profile to see upcoming courses.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
