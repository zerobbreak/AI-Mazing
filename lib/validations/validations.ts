import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["student", "parent", "teacher"], {
    required_error: "Please select a role",
  }),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export const onboardingSchema = z.object({
  username: z.string(),
  fullName: z.string(),
  role: z.string(),
  grade: z.string(),
  goals: z.array(z.string()),
  learningPath: z.string(),
  subjects: z.array(z.string()),
  customGoal: z.string().optional(),
})



