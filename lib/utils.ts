import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName: string | null | undefined): string {
  if (!fullName || typeof fullName !== "string") {
    return "";
  }

  return fullName
    .split(" ") // Split the name into an array of words
    .map((name) => name.charAt(0).toUpperCase()) // Take the first character of each word and make it uppercase
    .join(""); // Join the initials together
}
