import { z } from "zod";

export const Step1Schema = z.object({
  curriculumCode: z.string().min(1, "Curriculum code is required"),
  name: z.string().min(1, "Subject name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export const Step2Schema = z.object({
  gradeName: z.string().min(1, "Grade name is required"),
  level: z.enum(["Primary", "Secondary", "University"], {
    errorMap: () => ({ message: "Please select a valid level" }),
  }),
});

export const Step3Schema = z.object({
  resourceCode: z.string().min(1, "Resource code is required"),
  materialName: z.string().min(1, "Material name is required"),
  content: z.string().min(1, "Content type is required"), // Accepts free text
});

