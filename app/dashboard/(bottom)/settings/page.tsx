"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LearningPreferences, NotificationSettings, UserProfile, UserStatistics } from "@/type"
import { ProfileForm } from "@/components/shared/settings/profile-form"
import { StatisticsCard } from "@/components/shared/settings/statistics"
import { PreferencesForm } from "@/components/shared/settings/preferences"
import { NotificationsForm } from "@/components/shared/settings/notifications"

// Mock data (in a real app, this would be fetched from an API)
const mockProfile: UserProfile = {
  fullName: "John Doe",
  email: "john@example.com",
  bio: "",
}

const mockStatistics: UserStatistics = {
  coursesCompleted: 12,
  totalStudyTime: 87,
  averageQuizScore: 85,
  currentStreak: 7,
}

const mockPreferences: LearningPreferences = {
  dailyStudyGoal: "60",
  preferredDifficulty: "intermediate",
  darkMode: false,
}

const mockNotifications: NotificationSettings = {
  emailNotifications: true,
  pushNotifications: false,
  dailyReminders: true,
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const handleProfileSubmit = (data: UserProfile) => {
    console.log("Profile updated:", data)
    // Here you would typically save to your backend
  }

  const handlePreferencesSubmit = (data: LearningPreferences) => {
    console.log("Preferences updated:", data)
    // Here you would typically save to your backend
  }

  const handleNotificationsSubmit = (data: NotificationSettings) => {
    console.log("Notifications updated:", data)
    // Here you would typically save to your backend
  }

  return (
    <div className="container mx-auto py-8 p-10">
      <h1 className="text-3xl font-bold mb-6">Settings and Profile</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ProfileForm initialData={mockProfile} onSubmit={handleProfileSubmit} />
            <StatisticsCard statistics={mockStatistics} />
          </div>
        </TabsContent>

        <TabsContent value="preferences">
          <PreferencesForm initialData={mockPreferences} onSubmit={handlePreferencesSubmit} />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationsForm initialData={mockNotifications} onSubmit={handleNotificationsSubmit} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

