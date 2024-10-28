"use client";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { loginAction } from "@/lib/actions/auth.acton";
import { useToast } from "@/hooks/use-toast";

export function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const response = await loginAction(formData);
    if (response.success) {
      toast({ title: "Welcome", description: "Logged in successfully!" });
      router.push("/dashboard");
    } else {
      toast({ title: "Error", description: response.error, variant: "destructive" });
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to log in to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
          <Button variant="outline" className="w-full">Login with Google</Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account? <Link href="/auth/sign-up" className="underline">Sign up</Link>
        </div>
      </CardContent>
    </Card>
  );
}
