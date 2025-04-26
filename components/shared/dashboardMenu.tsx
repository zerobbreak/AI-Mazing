"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  MessageSquare,
  BarChart,
  Lightbulb,
  Settings,
  HelpCircle,
  Brain,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    description: "Overview of your progress",
  },
  {
    title: "Learning Path",
    href: "/dashboard/learning-path",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "Your educational journey",
  },
  {
    title: "Interactive Quizzes",
    href: "/dashboard/quizzes",
    icon: <Brain className="w-5 h-5" />,
    description: "Test your knowledge",
  },
  {
    title: "Virtual Tutor",
    href: "/dashboard/tutor",
    icon: <MessageSquare className="w-5 h-5" />,
    description: "AI-powered assistance",
  },
];

const secondaryItems: NavItem[] = [
  {
    title: "Progress Analytics",
    href: "/dashboard/analytics",
    icon: <BarChart className="w-5 h-5" />,
    description: "Track your performance",
  },
  {
    title: "Recommendations",
    href: "/dashboard/recommendations",
    icon: <Lightbulb className="w-5 h-5" />,
    description: "Personalized content",
  },
  {
    title: "Study Materials",
    href: "/dashboard/materials",
    icon: <BookOpen className="w-5 h-5" />,
    description: "Access learning resources",
  },
];

const bottomItems: NavItem[] = [
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="w-5 h-5" />,
    description: "Manage your preferences",
  },
  {
    title: "Help & Support",
    href: "/dashboard/help",
    icon: <HelpCircle className="w-5 h-5" />,
    description: "Get assistance",
  },
];

const MainNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-white border-r h-screen">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg">AI Mazing</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500 px-2 pb-2">
            LEARNING
          </p>
          {navItems.map((item) => {
            const isActive: boolean = pathname === item.href;

            return (
              <Link key={item.title} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-2 relative group",
                    isActive &&
                      "bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                  {item.description && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block w-48 z-50">
                      {item.description}
                    </div>
                  )}
                </Button>
              </Link>
            );
          })}
        </div>
        <div className="space-y-1 mt-8">
          <p className="text-sm font-medium text-gray-500 px-2 pb-2">
            PROGRESS
          </p>
          {secondaryItems.map((item) => {
            const isActive: boolean = pathname === item.href;
            return (
              <Link key={item.title} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-2 relative group",
                    isActive &&
                      "bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                  {item.description && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block w-48 z-50">
                      {item.description}
                    </div>
                  )}
                </Button>
              </Link>
            );
          })}
        </div>
        <div className="mt-auto space-y-1">
          {bottomItems.map((item) => {

            const isActive: boolean = pathname === item.href;
            return (
            <Link key={item.title} href={item.href}>
              <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-2 relative group",
                    isActive &&
                      "bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  )}
                >
                {item.icon}
                <span>{item.title}</span>
                {item.description && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block w-48 z-50">
                    {item.description}
                  </div>
                )}
              </Button>
            </Link>
          )})}
        </div>
      </div>
    </div>
  );
}

export default MainNav;