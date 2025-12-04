"use client";
import { useEffect, useState } from "react";
import { PresentationChartLineIcon, ChartPieIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useUserContext } from "@/context/UserContext";
import { fetchUserById } from "@/lib/actions/user.action";

export default function Analytics() {
  const { user } = useUserContext();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (user?.id) {
        const fetchedUser = await fetchUserById(Number(user.id));
        setUserData(fetchedUser);
      }
      setLoading(false);
    };
    loadData();
  }, [user]);

  if (loading) {
    return (
      <ContentLayout title="Analytics">
        <div className="p-6">Loading analytics...</div>
      </ContentLayout>
    );
  }

  const stats = [
    { label: "Hours Spent", value: `${userData?.hoursSpent || 0} hrs` },
    { label: "Lessons Completed", value: `${userData?.completedLessons || 0}` },
    { label: "Quizzes Passed", value: "N/A" }, // Not in DB yet
    { label: "Performance Trend", value: userData?.performanceTrend || "Stable" },
  ];

  const progress = userData?.progress || 0;

  return (
    <ContentLayout title="Analytics">
      <div className="container mx-auto p-6 space-y-8 text-white">

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-900 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <PresentationChartLineIcon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-white">Progress Overview</CardTitle>
                  <CardDescription className="text-gray-400">Your learning progress at a glance</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-end mb-2">
                <span className="text-gray-400">Current Progress</span>
                <span className="text-3xl font-bold text-blue-400">{progress}%</span>
              </div>
              <Progress value={progress} className="h-3 bg-gray-800 [&>div]:bg-blue-500" />
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <ChartPieIcon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-white">Performance Stats</CardTitle>
                  <CardDescription className="text-gray-400">Track your learning performance</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-gray-800 last:border-0">
                    <span className="text-gray-300">{stat.label}</span>
                    <Badge variant="outline" className="border-gray-700 text-gray-300 bg-gray-800">{stat.value}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Peer Comparison and Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-900 border-gray-800 hover:border-pink-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <ChartPieIcon className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <CardTitle className="text-white">Peer Comparison</CardTitle>
                  <CardDescription className="text-gray-400">See how you compare with others</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-400">Average Completion Time</span>
                  <span className="text-gray-500">Target: 80 hrs</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-pink-500" style={{ width: `${Math.min((userData?.hoursSpent || 0) / 80 * 100, 100)}%` }}></div>
                   </div>
                   <span className="text-pink-400 font-bold">{userData?.hoursSpent || 0} hrs</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-400">Lessons Completed</span>
                  <span className="text-gray-500">Target: 20</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-pink-500" style={{ width: `${Math.min((userData?.completedLessons || 0) / 20 * 100, 100)}%` }}></div>
                   </div>
                   <span className="text-pink-400 font-bold">{userData?.completedLessons || 0}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <ArrowTrendingUpIcon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-white">Trends & Improvement</CardTitle>
                  <CardDescription className="text-gray-400">Analyze your progress over time</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 mb-6">
                <p className="text-gray-300">
                  Your performance trend is currently: <span className="font-bold text-green-400">{userData?.performanceTrend || "Stable"}</span>.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Weekly Growth</span>
                  <span>+12%</span>
                </div>
                <Progress value={progress} className="h-2 bg-gray-800 [&>div]:bg-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ContentLayout>
  );
}
