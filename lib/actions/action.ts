"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function authenticate(
  prevState: String | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        default:
          return "Something went wrong";
      }
    }
    throw error;
  }
}

type SignupData = {
  email: string;
  password: string;
  confirmPassword: string;
};
// Sign Up Action
export async function signupAction({
  email,
  password,
  confirmPassword,
}: SignupData) {
  if (password !== confirmPassword) {
    return { success: false, error: "Passwords do not match" };
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return { success: false, error: "User already exists" };
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  await prisma.user.create({
      data: {
          email,
          password: hashedPassword,
      },
  });

  return { success: true };
}
