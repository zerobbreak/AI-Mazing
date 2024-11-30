import { z } from "zod";

export const onboardingSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  gradeLevel: z.enum(["Primary", "Secondary", "University"], {
    errorMap: () => ({ message: "Select a valid grade level" }),
  }),
});
