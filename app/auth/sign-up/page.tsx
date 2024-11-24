"use client"
import {z} from "zod";
import Image from "next/image"; // To include the unDraw illustration
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/utils/validation/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function page() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
  }
  return (
    <div className="h-screen flex">
      {/* Left Section - Sign Up Form */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center px-16">
        <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
        <p className="text-gray-400 mb-8">Create your account to get started</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormDescription>
                    Password must be minium 8 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormDescription>
                    Password must be minium 8 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>

        {/* Already have an account */}
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-purple-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2 bg-purple-500 flex items-center justify-center">
        <div className="text-center px-8">
          <h2 className="text-4xl font-bold text-white mb-4">WELCOME ABOARD!</h2>
          <p className="text-white mb-6">Join our amazing platform today</p>
          <Image
            src="/signup.svg" // Replace with the chosen illustration SVG
            alt="Sign Up Illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
