"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { AcademicCapIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { fetchUserById, updateUser } from "@/lib/actions/user.action";
import { useUserContext } from "@/context/UserContext";

interface User {
  id: number;
  name: string;
  learningPath: string;
  hoursSpent: number;
  preferences: string;
}

const presetPreferences = [
  "Visual Learning",
  "Auditory Learning",
  "Kinesthetic Learning",
  "Reading/Writing Learning",
];

const presetLearningPaths = [
  "Web Development",
  "Data Science",
  "Artificial Intelligence",
  "Digital Marketing",
];

export default function UserUpdateForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useUserContext();
  const id = user?.id; // Fetching the user ID from the URL

  // State for user details
  const [name, setName] = useState<string>("");
  const [learningPath, setLearningPath] = useState<string>("");
  const [hoursSpent, setHoursSpent] = useState<number>(0);
  const [preferences, setPreferences] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        const fetchedUser = await fetchUserById(id); // Fetch user by ID
        if (fetchedUser) {
          // Populate state with fetched user data
          setName(fetchedUser.name || "");
          setLearningPath(fetchedUser.learningPath || "");
          setHoursSpent(fetchedUser.hoursSpent || 0);
          setPreferences(fetchedUser.preferences || "");
        }
      }
    };

    fetchUser(); // Call the function to fetch user data
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      learningPath,
      hoursSpent,
      preferences,
    };

    try {
      const updatedUser = await updateUser(id, formData); // Update user data
      toast({
        title: "Success!",
        description: "User updated successfully.",
      });
      console.log("User updated successfully:", updatedUser);
      router.push("/dashboard"); // Redirect to dashboard
    } catch (error: any) {
      toast({
        title: "Error!",
        description: "Failed to update user: " + error.message,
        variant: "destructive",
      });
      console.error("Error updating user:", error);
    }
  };

  return (
    <ContentLayout title="Profile">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Edit Profile</CardTitle>
            <CardDescription className="text-gray-400">Update your personal information and learning preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300 flex items-center gap-2">
                  <UserIcon className="w-4 h-4 text-blue-400" />
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="learningPath" className="text-gray-300 flex items-center gap-2">
                  <AcademicCapIcon className="w-4 h-4 text-purple-400" />
                  Learning Path
                </Label>
                <Select value={learningPath} onValueChange={setLearningPath}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select a learning path" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    {presetLearningPaths.map((path) => (
                      <SelectItem key={path} value={path} className="focus:bg-gray-700 focus:text-white">
                        {path}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hoursSpent" className="text-gray-300 flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 text-green-400" />
                  Hours Spent
                </Label>
                <Input
                  id="hoursSpent"
                  type="number"
                  value={hoursSpent}
                  onChange={(e) => setHoursSpent(Number(e.target.value))}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferences" className="text-gray-300">
                  Learning Style Preference
                </Label>
                <Select value={preferences} onValueChange={setPreferences}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select your preference" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    {presetPreferences.map((pref) => (
                      <SelectItem key={pref} value={pref} className="focus:bg-gray-700 focus:text-white">
                        {pref}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                Update Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
