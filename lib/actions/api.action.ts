"use server";

export async function fetchResponse(user: any) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Here are some recommendations for ${user.name} based on their progress in ${user.learningPath}.`;
}
