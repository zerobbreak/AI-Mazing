"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  userId: string; // This is Clerk's user ID
  username?: string;
  fullName?: string;
  role?: "Student" | "Teacher";
  grade?: string;
  goals?: string[];
  learningPath: string;
  subjects?: string[];
  customGoal?: string;
}

export async function updateUser({
  userId,
  username,
  fullName,
  role,
  grade,
  goals,
  learningPath,
  subjects,
  customGoal,
}: Params): Promise<void> {
  connectToDB();

  try {
    console.log("Updating user with ID:", userId);
    console.log("Update data:", {
      username,
      fullName,
      role,
      grade,
      goals,
      learningPath,
      subjects,
      customGoal,
    });

    const existingUser = await User.findOne({
      id: userId,
    });

    if (!existingUser) {
      await User.create({
        id: userId,
        username,
        fullName,
        role,
        grade,
        goals,
        learningPath,
        subjects,
        customGoal,
        onboarded: true,
      });
    } else {
      await User.updateOne(
        { id: userId },
        {
          username,
          fullName,
          role,
          grade,
          goals,
          learningPath,
          subjects,
          customGoal,
          onboarded: true,
        }
      );
    }
  } catch (error: any) {
    console.error("Error in updateUser:", error);
    throw new Error(`Failed to update user: ${error}`);
  }
}

export const fetchUser = async (userId: string) => {
  await connectToDB();
  try {
    const user = await User.findOne({ clerkUserId: userId });
    console.log("Fetched user:", user);
    return user;
  } catch (error: any) {
    console.error("Error in fetchUser:", error);
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
};
