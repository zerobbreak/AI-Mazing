import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export function EducationStatus(grade?: number, course?: string) {
  if (grade && grade >= 8 && grade <= 12) {
    return `High School - Grade ${grade}`;
  } else {
    return `University - Studying ${course || "Unknown Course"}`;
  }
}
