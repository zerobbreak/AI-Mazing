"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LearningPreferences } from "@/type"

interface PreferencesFormProps {
  initialData: LearningPreferences
  onSubmit: (data: LearningPreferences) => void
}

export function PreferencesForm({ initialData, onSubmit }: PreferencesFormProps) {
  const [preferences, setPreferences] = useState<LearningPreferences>(initialData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(preferences)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Preferences</CardTitle>
        <CardDescription>Customize your learning experience</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="dailyStudyGoal">Daily Study Goal</Label>
            <Select
              value={preferences.dailyStudyGoal}
              onValueChange={(value) => setPreferences({ ...preferences, dailyStudyGoal: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">1 hour</SelectItem>
                <SelectItem value="120">2 hours</SelectItem>
                <SelectItem value="180">3 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferredDifficulty">Preferred Difficulty</Label>
            <Select
              value={preferences.preferredDifficulty}
              onValueChange={(value) => setPreferences({ ...preferences, preferredDifficulty: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="darkMode"
              checked={preferences.darkMode}
              onCheckedChange={(checked) => setPreferences({ ...preferences, darkMode: checked })}
            />
            <Label htmlFor="darkMode">Enable Dark Mode</Label>
          </div>
          <Button type="submit">Save Preferences</Button>
        </form>
      </CardContent>
    </Card>
  )
}

