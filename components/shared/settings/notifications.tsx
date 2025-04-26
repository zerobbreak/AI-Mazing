"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { NotificationSettings } from "@/types"

interface NotificationsFormProps {
  initialData: NotificationSettings
  onSubmit: (data: NotificationSettings) => void
}

export function NotificationsForm({ initialData, onSubmit }: NotificationsFormProps) {
  const [settings, setSettings] = useState<NotificationSettings>(initialData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(settings)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage your notification preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="emailNotifications" className="flex flex-col space-y-1">
              <span>Email Notifications</span>
              <span className="text-sm text-muted-foreground">Receive updates via email</span>
            </Label>
            <Switch
              id="emailNotifications"
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="pushNotifications" className="flex flex-col space-y-1">
              <span>Push Notifications</span>
              <span className="text-sm text-muted-foreground">Get notifications in your browser</span>
            </Label>
            <Switch
              id="pushNotifications"
              checked={settings.pushNotifications}
              onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dailyReminders" className="flex flex-col space-y-1">
              <span>Daily Reminders</span>
              <span className="text-sm text-muted-foreground">Get reminded of your study goals</span>
            </Label>
            <Switch
              id="dailyReminders"
              checked={settings.dailyReminders}
              onCheckedChange={(checked) => setSettings({ ...settings, dailyReminders: checked })}
            />
          </div>
          <Button type="submit">Update Notifications</Button>
        </form>
      </CardContent>
    </Card>
  )
}

