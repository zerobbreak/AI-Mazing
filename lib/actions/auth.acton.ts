"use server";

import prisma from '@/lib/prisma';

type SignupData = {
  email: string;
  password: string;
  confirmPassword: string;
};
// Sign Up Action
export async function signupAction({ email, password, confirmPassword }: SignupData) {
  if (password !== confirmPassword) {
    return { success: false, error: "Passwords do not match" };
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return { success: false, error: "User already exists" };
  }

  // Create the user
  const newUser = await prisma.user.create({
    data: { email, password },
  });

  return { success: true, user: newUser };
}

type LoginData = {
  email: string;
  password: string;
};
// Login Action
export async function loginAction({ email, password }: LoginData) {
  // Fetch user from database by email
  const user = await prisma.user.findUnique({ where: { email } });

  // Check if user exists and password matches (assuming plaintext for this example)
  if (user && user.password === password) {
    return { success: true, user };
  }

  return { success: false, error: "Invalid email or password" };
}