"use server";

import { redirect } from "next/navigation"
import { fetchUser } from "@/lib/actions/user.action"
import { currentUser } from "@clerk/nextjs/server"
import OnboardingForm from "@/components/shared/OnboardingForm";

export default async function OnboardingPage() {
  const user = await currentUser()
  if (!user) redirect("/sign-in");

  const userInfo = await fetchUser(user.id)
  if (userInfo?.onboarded) redirect("/dashboard")

  const userData = {
    id: user.id, 
    username: user.username ?? userInfo.username ?? "", 
    fullName: user.fullName ?? userInfo.fullName ?? "", 
    role: userInfo?.role ?? "Student", 
    onboarded: userInfo?.isOnboarded ?? false,
    grade: userInfo?.grade ?? "", 
    goals: userInfo?.goals ?? [], 
    learningPath: userInfo?.learningPath ?? "", 
    subjects: userInfo?.subjects ?? [], 
    customGoal: userInfo?.customGoal ?? "",
  }

  return <OnboardingForm user={userData}/>
}

