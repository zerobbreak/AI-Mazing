"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"
import { updateUser } from "@/lib/actions/user.action"
import { onboardingSchema } from "@/lib/validations/validations"
import type { z } from "zod"

type OnboardingFormData = z.infer<typeof onboardingSchema>

interface User {
  id: string
  username: string | undefined
  fullName: string | null
  role: string
  onboarded: boolean
  grade: string | null
  goals: string[]
  learningPath: string | null
  subjects: string[]
  customGoal: string | null
}

interface OnboardingFormProps {
  user: User | null
}

export default function OnboardingForm({ user }: OnboardingFormProps) {
  const router = useRouter()

  const form = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      username: user?.username || "",
      fullName: user?.fullName || "",
      role: user?.role as "Student" | "Teacher" | undefined,
      grade: user?.grade || "",
      goals: user?.goals || [],
      learningPath: user?.learningPath || "",
      subjects: user?.subjects || [],
      customGoal: user?.customGoal || "",
    },
  })

  const predefinedGoals = [
    "Improve grades",
    "Prepare for exams",
    "Learn new topics",
    "Develop study skills",
    "Explore career options",
  ]

  const predefinedSubjects = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Geography",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Foreign Languages",
    "Art",
    "Music",
  ]

  const onSubmit = async (data: OnboardingFormData) => {
    console.log("Form submitted with data:", data)
    try {
      if (!user) {
        console.error("User not found")
        throw new Error("User not found")
      }

      console.log("Updating user with ID:", user.id)
      const update = await updateUser({
        userId: user.id,
        ...data,
        role: data.role as "Student" | "Teacher" | undefined,
      })

      console.log("Update result:", update)

      toast({
        title: "Success",
        description: "Your onboarding information has been submitted successfully!",
      })

      console.log("Redirecting to dashboard")
      router.push("/dashboard")
    } catch (error) {
      console.error("Onboarding submission error:", error)
      toast({
        title: "Error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <motion.form
        onSubmit={(e) => {
          console.log("Form submit event triggered")
          form.handleSubmit(onSubmit)(e)
        }}
        className="space-y-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Teacher">Teacher</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Grade</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your grade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[8, 9, 10, 11, 12].map((grade) => (
                    <SelectItem key={grade} value={grade.toString()}>
                      Grade {grade}
                    </SelectItem>
                  ))}
                  <SelectItem value="university">University</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="learningPath"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Learning Path</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your learning path" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="structured">Structured (Follow a set curriculum)</SelectItem>
                  <SelectItem value="flexible">Flexible (Learn at your own pace)</SelectItem>
                  <SelectItem value="project-based">Project-Based (Learn through practical projects)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="goals"
          render={() => (
            <FormItem>
              <FormLabel>What are your learning goals? (Select all that apply)</FormLabel>
              {predefinedGoals.map((goal) => (
                <FormField
                  key={goal}
                  control={form.control}
                  name="goals"
                  render={({ field }) => {
                    return (
                      <FormItem key={goal} className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(goal)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, goal])
                                : field.onChange(field.value?.filter((value: string) => value !== goal))
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{goal}</FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subjects"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select your subjects of interest (Select all that apply)</FormLabel>
              <div className="grid grid-cols-2 gap-4">
                {predefinedSubjects.map((subject) => (
                  <FormItem key={subject} className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(subject)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...field.value, subject])
                          } else {
                            field.onChange(field.value?.filter((value) => value !== subject))
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{subject}</FormLabel>
                  </FormItem>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="customGoal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Any other specific goals?</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter any additional goals here..." className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </motion.form>
    </Form>
  )
}

