"use server";

import {
  FireIcon,
  TrophyIcon,
  ClockIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import type { DashboardUser, QuickStat, UpcomingLesson, RecentActivity } from "@/types/dashboard";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

/**
 * Fetch user dashboard data from database
 * Retrieves the authenticated user's information
 */
export async function getDashboardUserData(): Promise<DashboardUser> {
  try {
    const session = await auth();
    
    if (!session?.user?.email) {
      // Return default data if no session
      return {
        name: "Guest User",
        learningPath: "Not Set",
        progress: 0,
        recommendations: [],
        completedLessons: 0,
        hoursSpent: 0,
        performanceTrend: "No Data",
      };
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        name: true,
        learningPath: true,
        progress: true,
        recommendations: true,
        completedLessons: true,
        hoursSpent: true,
        performanceTrend: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      name: user.name || "User",
      learningPath: user.learningPath || "Not Set",
      progress: user.progress || 0,
      recommendations: user.recommendations || [],
      completedLessons: user.completedLessons || 0,
      hoursSpent: user.hoursSpent || 0,
      performanceTrend: user.performanceTrend || "No Data",
    };
  } catch (error) {
    console.error("Error fetching dashboard user data:", error);
    // Return fallback data on error
    return {
      name: "User",
      learningPath: "Not Set",
      progress: 0,
      recommendations: [],
      completedLessons: 0,
      hoursSpent: 0,
      performanceTrend: "No Data",
    };
  }
}

/**
 * Get quick stats for dashboard overview
 * Calculates stats based on user's actual data
 */
export async function getQuickStats(): Promise<QuickStat[]> {
  try {
    const session = await auth();
    
    if (!session?.user?.email) {
      return getDefaultQuickStats(0);
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        hoursSpent: true,
        completedLessons: true,
        progress: true,
        createdAt: true,
      },
    });

    if (!user) {
      return getDefaultQuickStats(0);
    }

    // Calculate learning streak (days since account creation)
    const daysSinceCreation = Math.floor(
      (new Date().getTime() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24)
    );
    const streak = Math.max(1, daysSinceCreation);

    // Calculate points based on completed lessons and progress
    const points = (user.completedLessons || 0) * 100 + (user.progress || 0) * 10;

    return [
      { 
        label: "Learning Streak", 
        value: `${streak} days`, 
        icon: FireIcon, 
        color: "text-orange-400", 
        bg: "bg-orange-500/20" 
      },
      { 
        label: "Points Earned", 
        value: points.toLocaleString(), 
        icon: TrophyIcon, 
        color: "text-yellow-400", 
        bg: "bg-yellow-500/20" 
      },
      { 
        label: "Study Time", 
        value: `${user.hoursSpent || 0}h`, 
        icon: ClockIcon, 
        color: "text-blue-400", 
        bg: "bg-blue-500/20" 
      },
      { 
        label: "Rank", 
        value: await calculateUserRank(user.progress || 0), 
        icon: BoltIcon, 
        color: "text-purple-400", 
        bg: "bg-purple-500/20" 
      },
    ];
  } catch (error) {
    console.error("Error fetching quick stats:", error);
    return getDefaultQuickStats(0);
  }
}

/**
 * Helper function to get default quick stats
 */
function getDefaultQuickStats(hoursSpent: number): QuickStat[] {
  return [
    { 
      label: "Learning Streak", 
      value: "0 days", 
      icon: FireIcon, 
      color: "text-orange-400", 
      bg: "bg-orange-500/20" 
    },
    { 
      label: "Points Earned", 
      value: "0", 
      icon: TrophyIcon, 
      color: "text-yellow-400", 
      bg: "bg-yellow-500/20" 
    },
    { 
      label: "Study Time", 
      value: `${hoursSpent}h`, 
      icon: ClockIcon, 
      color: "text-blue-400", 
      bg: "bg-blue-500/20" 
    },
    { 
      label: "Rank", 
      value: "N/A", 
      icon: BoltIcon, 
      color: "text-purple-400", 
      bg: "bg-purple-500/20" 
    },
  ];
}

/**
 * Calculate user's rank based on progress compared to other users
 */
async function calculateUserRank(userProgress: number): Promise<string> {
  try {
    const higherRankedUsers = await prisma.user.count({
      where: {
        progress: {
          gt: userProgress,
        },
      },
    });
    
    return `#${higherRankedUsers + 1}`;
  } catch (error) {
    console.error("Error calculating user rank:", error);
    return "N/A";
  }
}

/**
 * Get upcoming scheduled lessons
 * TODO: Create a Lessons table in database to store scheduled lessons
 */
export async function getUpcomingLessons(): Promise<UpcomingLesson[]> {
  // For now, return placeholder data
  // TODO: Fetch from database based on user's learning path and schedule
  
  return [
    { 
      title: "Advanced State Management", 
      duration: "45 min", 
      date: "Today, 3:00 PM" 
    },
    { 
      title: "API Integration Best Practices", 
      duration: "60 min", 
      date: "Tomorrow, 2:00 PM" 
    },
    { 
      title: "Testing React Components", 
      duration: "30 min", 
      date: "Dec 6, 10:00 AM" 
    },
  ];
}

/**
 * Get recent user activity feed
 * TODO: Create an Activity table in database to track user activities
 */
export async function getRecentActivity(): Promise<RecentActivity[]> {
  // For now, return placeholder data
  // TODO: Fetch from activity log table in database
  
  return [
    { 
      action: "Completed", 
      item: "React Hooks Deep Dive", 
      time: "2 hours ago", 
      color: "text-green-400" 
    },
    { 
      action: "Started", 
      item: "Advanced TypeScript", 
      time: "5 hours ago", 
      color: "text-blue-400" 
    },
    { 
      action: "Earned", 
      item: "Problem Solver Badge", 
      time: "1 day ago", 
      color: "text-yellow-400" 
    },
  ];
}

