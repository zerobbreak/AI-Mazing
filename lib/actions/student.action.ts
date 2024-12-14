"use server";

import { revalidatePath } from "next/cache";
import Student from "../models/student.model";
import mongoose from "mongoose";
import { connectToDB } from "../mongoose";

type UpdateStudentParams = {
  userId: string; // Clerk-managed user ID (required for finding the student)
  username: string; // Required during onboarding
  name: string; // Required during onboarding
  gradeLevel: string; // Required during onboarding
};

export async function updateStudent(
  params: UpdateStudentParams
): Promise<{ success: boolean; error?: string }> {
  const { userId, username, name, gradeLevel } = params;

  // Validate required fields
  if (!userId || !username || !name || !gradeLevel) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    // Update the student document with required fields
    const updatedStudent = await Student.findOneAndUpdate(
      { id: userId }, // Match by Clerk-managed user ID
      { username: username, name, gradeLevel, onboarded: true  }, // Set required fields and mark as onboarded
      { new: true, upsert: true } // Return the updated document; do not create if missing
    );

    if (!updatedStudent) {
      return { success: false, error: "Student not found." };
      // new Error("Student not found");
    }

    // Revalidate any dependent paths
    // revalidatePath("student/edit");

    return { success: true };
  } catch (error) {
    console.error("Error updating required student data:", error);
    return {
      success: false,
      error: "Failed to update student. Please try again.",
    };
  }
}

export async function fetchStudent(userId: string) {
  try {
    connectToDB();

    return await Student.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch student: ${error.message}`);
  }
}
