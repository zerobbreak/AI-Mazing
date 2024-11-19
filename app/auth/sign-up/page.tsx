// File: pages/signup.tsx

import { Input } from "@/components/ui/input"; // ShadCN Input component
import { Button } from "@/components/ui/button"; // ShadCN Button component
import { EyeIcon } from "@heroicons/react/24/solid"; // Heroicons
import Image from "next/image"; // To include the unDraw illustration

export default function page() {
  return (
    <div className="h-screen flex">
      {/* Left Section - Sign Up Form */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center px-16">
        <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
        <p className="text-gray-400 mb-8">Create your account to get started</p>
        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <Input type="text" placeholder="Enter your username" className="w-full" />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" placeholder="Enter your email" className="w-full" />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <Input
                type="password"
                placeholder="Create a password"
                className="w-full pr-10"
              />
              <EyeIcon className="absolute right-2 top-2 w-6 h-6 text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <Input
                type="password"
                placeholder="Confirm your password"
                className="w-full pr-10"
              />
              <EyeIcon className="absolute right-2 top-2 w-6 h-6 text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Sign Up Button */}
          <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
            Sign Up
          </Button>
        </form>

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
