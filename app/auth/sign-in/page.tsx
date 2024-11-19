// File: pages/login.tsx

import { Input } from "@/components/ui/input"; // ShadCN Input component
import { Button } from "@/components/ui/button"; // ShadCN Button component
import { LockClosedIcon, EyeIcon } from "@heroicons/react/24/solid"; // Heroicons
import Image from "next/image"; // To include the unDraw illustration

export default function Page() {
  return (
    <div className="h-screen flex">
      {/* Left Section - Login Form */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center px-16">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="text-gray-400 mb-8">Enter your account details</p>
        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <Input type="text" placeholder="Enter your username" className="w-full" />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full pr-10"
              />
              <EyeIcon className="absolute right-2 top-2 w-6 h-6 text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="mb-6">
            <a href="#" className="text-sm text-purple-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
            Login
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-purple-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2 bg-purple-500 flex items-center justify-center">
        <div className="text-center px-8">
          <h2 className="text-4xl font-bold text-white mb-4">WELCOME TO AI Mazing</h2>
          <p className="text-white mb-6">Login to access your account</p>
          <Image
            src="/login.svg" // Replace with the downloaded unDraw SVG
            alt="Illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
