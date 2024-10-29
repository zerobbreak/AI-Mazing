"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { AcademicCapIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";
import { ContentLayout } from "@/components/admin-panel/content-layout";
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
          setName(fetchedUser.name);
          setLearningPath(fetchedUser.learningPath);
          setHoursSpent(fetchedUser.hoursSpent);
          setPreferences(fetchedUser.preferences);
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="block">
            <UserIcon className="inline-block w-5 h-5 mr-1 text-gray-500" />
            Name:
          </Label>
          <Input
            id="name"
            type="text"
            value={name} // Controlled input from state
            onChange={(e) => setName(e.target.value)} // Update state on change
            required
          />
        </div>
        <div>
          <Label htmlFor="learningPath" className="block">
            <AcademicCapIcon className="inline-block w-5 h-5 mr-1 text-gray-500" />
            Learning Path:
          </Label>
          <Select value={learningPath} onValueChange={setLearningPath}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a learning path" />
            </SelectTrigger>
            <SelectContent>
              {presetLearningPaths.map((path) => (
                <SelectItem key={path} value={path}>
                  {path}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="hoursSpent" className="block">
            <ClockIcon className="inline-block w-5 h-5 mr-1 text-gray-500" />
            Hours Spent:
          </Label>
          <Input
            id="hoursSpent"
            type="number"
            value={hoursSpent} // Controlled input from state
            onChange={(e) => setHoursSpent(Number(e.target.value))} // Update state on change
            required
          />
        </div>
        <div>
          <Label htmlFor="preferences" className="block">
            Preferences:
          </Label>
          <Select value={preferences} onValueChange={setPreferences}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select your preference" />
            </SelectTrigger>
            <SelectContent>
              {presetPreferences.map((pref) => (
                <SelectItem key={pref} value={pref}>
                  {pref}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Update User</Button>
      </form>
    </ContentLayout>
  );
}
