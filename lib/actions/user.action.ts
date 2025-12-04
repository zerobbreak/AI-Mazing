"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function fetchUserById(id: number) {
  try {
    // Ensure id is a number if it comes as string
    const userId = Number(id);
    if (isNaN(userId)) return null;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user");
  }
}

export async function updateUser(id: number, data: any) {
  try {
    const userId = Number(id);
    const user = await prisma.user.update({
      where: { id: userId },
      data,
    });
    revalidatePath("/dashboard/profile");
    revalidatePath("/dashboard/analytics");
    revalidatePath("/dashboard/learning-path");
    return user;
  } catch (error) {
    console.error("Failed to update user:", error);
    throw new Error("Failed to update user");
  }
}

export async function fetchUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user");
  }
}

export async function submitFeedback(userId: number, content: string) {
  try {
    const feedback = await prisma.feedback.create({
      data: {
        userId: Number(userId),
        content,
      },
    });
    revalidatePath("/dashboard/feedback");
    return feedback;
  } catch (error) {
    console.error("Failed to submit feedback:", error);
    throw new Error("Failed to submit feedback");
  }
}

export async function getFeedback() {
  try {
    const feedback = await prisma.feedback.findMany({
      include: {
        user: {
          select: { name: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return feedback;
  } catch (error) {
    console.error("Failed to fetch feedback:", error);
    throw new Error("Failed to fetch feedback");
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        learningPath: true,
        progress: true,
      },
      orderBy: {
        progress: "desc",
      },
      take: 10, // Limit to top 10 for leaderboard style
    });
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw new Error("Failed to fetch users");
  }
}
