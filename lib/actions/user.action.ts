"use server";

import { redirect } from "next/navigation";
import prisma from "../prisma";
import { User } from "@prisma/client";

export async function fetchUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Handle case when user is not found
      redirect("/login"); // Redirect to login or another page if needed
    }

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Could not fetch user data");
  }
}

// Fetch user by ID
export const fetchUserById = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id }
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw Error("Failed to fetch user");
  }
};

// Example updateUser function
export const updateUser = async (id: number, data: Partial<User>) => {
  return await prisma.user.update({
    where: { id },
    data: {
      name: data.name,
      learningPath: data.learningPath,
      hoursSpent: data.hoursSpent,
      performanceTrend: data.performanceTrend !== undefined ? data.performanceTrend : undefined, // Ensure it's passed as a number
    },
  });
};

