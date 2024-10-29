"use client";
import { useEffect, useState } from "react";
import { PresentationChartLineIcon, ChartPieIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ContentLayout } from "@/components/admin-panel/content-layout";

// Dummy data
const dummyStats = [
  { label: "Hours Spent", value: "75 hrs" },
  { label: "Lessons Completed", value: "25" },
  { label: "Quizzes Passed", value: "18" },
  { label: "Improvement Rate", value: "14%" },
];

const peerComparison = [
  { label: "Average Completion Time", user: "75 hrs", peers: "80 hrs" },
  { label: "Lessons Completed", user: "25", peers: "20" },
  { label: "Quizzes Passed", user: "18", peers: "15" },
];

const recentActivity = [
  { activity: "Completed 'Advanced React'", date: "2024-10-01" },
  { activity: "Passed 'Data Structures Quiz'", date: "2024-09-28" },
  { activity: "Watched 'Machine Learning Basics'", date: "2024-09-25" },
];

export default function Analytics() {
  const [progress, setProgress] = useState<number>(82); // Dummy progress percentage

  return (
    <ContentLayout title="Analytics">
      <div className="container mx-auto p-6 space-y-8">

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <PresentationChartLineIcon className="w-6 h-6 text-blue-500" />
              <CardTitle>Progress Overview</CardTitle>
              <CardDescription>Your learning progress at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Current Progress: <span className="font-semibold">{progress}%</span></p>
              <Progress value={progress} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Stats</CardTitle>
              <CardDescription>Track your learning performance</CardDescription>
            </CardHeader>
            <CardContent>
              {dummyStats.map((stat, index) => (
                <div key={index} className="flex justify-between py-1">
                  <span>{stat.label}</span>
                  <Badge variant="outline">{stat.value}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Peer Comparison and Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <ChartPieIcon className="w-6 h-6 text-purple-500" />
              <CardTitle>Peer Comparison</CardTitle>
              <CardDescription>See how you compare with others</CardDescription>
            </CardHeader>
            <CardContent>
              {peerComparison.map((comp, index) => (
                <div key={index} className="flex justify-between py-1">
                  <span>{comp.label}</span>
                  <div className="flex space-x-4">
                    <span className="text-blue-600">{comp.user}</span>
                    <span className="text-gray-600">|</span>
                    <span className="text-gray-500">{comp.peers}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ArrowTrendingUpIcon className="w-6 h-6 text-green-500" />
              <CardTitle>Trends & Improvement</CardTitle>
              <CardDescription>Analyze your progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                You're showing a consistent improvement rate of <span className="font-semibold">14%</span> over the past month. Keep it up!
              </p>
              <Progress value={progress} className="mt-4" />
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest learning milestones</CardDescription>
          </CardHeader>
          <CardContent>
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex justify-between py-1">
                <span>{activity.activity}</span>
                <span className="text-gray-500 text-sm">{activity.date}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
