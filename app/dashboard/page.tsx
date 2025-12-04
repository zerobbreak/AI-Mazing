"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  PresentationChartLineIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  FireIcon,
  ChevronRightIcon,
  PlayIcon,
  SparklesIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
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
import { 
  getDashboardUserData, 
  getQuickStats, 
  getUpcomingLessons, 
  getRecentActivity 
} from "@/lib/actions/dashboard.action";
import type { 
  DashboardUser, 
  QuickStat, 
  UpcomingLesson, 
  RecentActivity 
} from "@/types/dashboard";
import { DashboardSkeleton } from "@/components/loading/DashboardSkeleton";

export default function Dashboard() {
  const [user, setUser] = useState<DashboardUser | null>(null);
  const [quickStats, setQuickStats] = useState<QuickStat[]>([]);
  const [upcomingLessons, setUpcomingLessons] = useState<UpcomingLesson[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [userData, stats, lessons, activity] = await Promise.all([
          getDashboardUserData(),
          getQuickStats(),
          getUpcomingLessons(),
          getRecentActivity(),
        ]);
        
        setUser(userData);
        setQuickStats(stats);
        setUpcomingLessons(lessons);
        setRecentActivity(activity);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <ContentLayout title="Dashboard">
        <DashboardSkeleton />
      </ContentLayout>
    );
  }

  return (
    <ContentLayout title="Dashboard">
      <div className="container mx-auto p-6 space-y-6 text-white relative">
        
        {/* Hero Section with Progress */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 p-8 border border-gray-800">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Welcome back, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{user?.name}</span>!
                </h1>
                <p className="text-gray-400 text-lg">Let&apos;s continue your learning journey</p>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-4 py-2 text-sm">
                <FireIcon className="w-4 h-4 mr-1 inline" />
                12 Day Streak
              </Badge>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-400">Current Path</p>
                  <p className="text-xl font-bold text-white">{user?.learningPath}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {user?.progress}%
                  </p>
                  <p className="text-xs text-gray-400">Complete</p>
                </div>
              </div>
              <Progress value={user?.progress} className="h-3 bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:via-purple-500 [&>div]:to-pink-500" />
              <p className="text-xs text-gray-400 mt-2">{100 - (user?.progress || 0)}% to completion</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Continue Learning */}
          <Card className="lg:col-span-2 bg-gray-900 border-gray-800 overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-xl">Continue Learning</CardTitle>
                  <CardDescription className="text-gray-400">Pick up where you left off</CardDescription>
                </div>
                <Link href="/dashboard/learning-path">
                  <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                    View All <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <PlayIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">React State Management</h3>
                    <p className="text-sm text-gray-400 mb-3">Module 4 • Lesson 12 of 20</p>
                    <Progress value={60} className="h-2 bg-gray-800 [&>div]:bg-blue-500 mb-3" />
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" /> 25 min left
                      </span>
                      <span>•</span>
                      <span>60% complete</span>
                    </div>
                  </div>
                  <Link href="/dashboard/learning-path">
                    <Button className="bg-blue-600 hover:bg-blue-500">
                      Continue
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Lessons */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-purple-400" />
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingLessons.map((lesson, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-800/50 border border-gray-800 hover:border-gray-700 transition-colors">
                  <h4 className="text-sm font-semibold text-white mb-1">{lesson.title}</h4>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" /> {lesson.duration}
                    </span>
                    <span>{lesson.date}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recommended for You - Horizontal Scroll */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-yellow-400" />
              Recommended for You
            </h2>
            <Link href="/dashboard/recommendations">
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                View All <ChevronRightIcon className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {user?.recommendations.map((rec, index) => (
              <Card key={index} className="min-w-[300px] bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all flex-shrink-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                    <BookmarkIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{rec}</h3>
                  <p className="text-sm text-gray-400 mb-4">Master advanced concepts and best practices</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-gray-700 text-gray-400 text-xs">Advanced</Badge>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-500">
                      Start <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-800 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-white">
                      <span className={activity.color}>{activity.action}</span> {activity.item}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Performance Quick View */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <PresentationChartLineIcon className="w-5 h-5 text-green-400" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50">
                <div>
                  <p className="text-sm text-gray-400">Lessons Completed</p>
                  <p className="text-2xl font-bold text-white">{user?.completedLessons}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <AcademicCapIcon className="w-8 h-8 text-green-400" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50">
                <div>
                  <p className="text-sm text-gray-400">Performance Trend</p>
                  <Badge className={`mt-1 ${user?.performanceTrend === "Improving" ? "bg-green-500/20 text-green-400 border-green-500/50" : "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"}`}>
                    {user?.performanceTrend}
                  </Badge>
                </div>
                <Link href="/dashboard/analytics">
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    View Analytics
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Floating Virtual Tutor Button */}
        <Link href="/dashboard/virtual-tutor">
          <Button 
            className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-2xl shadow-purple-900/50 z-50 flex items-center justify-center"
            title="Virtual Tutor"
          >
            <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
          </Button>
        </Link>
      </div>
    </ContentLayout>
  );
}
