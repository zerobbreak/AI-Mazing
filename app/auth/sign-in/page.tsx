"use client";
import { z } from "zod";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/utils/validation/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signInSchema>) {
    setIsSubmitting(true);
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      console.log(res);

      if (res?.error) {
        toast({
          title: "Error",
          description: res.error,
          variant: "destructive",
        });
      } else {
        const session = await fetch("/api/auth/session").then((res) =>
          res.json()
        );

        console.log(session);
        if (session?.user?.onboarded) {
          router.push("/dashboard");
        } else {
          router.push("/onboarding");
        }

        toast({ 
          title: "Success", 
          description: "Login successful!" 
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsImageVisible(true), 200);
  }, []);

  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center px-16">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="text-gray-400 mb-8">Enter your account details</p>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2 bg-purple-500 flex items-center justify-center">
        <motion.div
          className="text-center px-8"
          initial={{ translateY: 16, opacity: 0 }}
          animate={{
            translateY: isImageVisible ? 0 : 16,
            opacity: isImageVisible ? 1 : 0,
          }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            WELCOME TO AI Mazing
          </h2>
          <p className="text-white mb-6">Login to access your account</p>
          <Image
            src="/login.svg" // Update with the correct path
            alt="Login Illustration"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </div>
  );
}
