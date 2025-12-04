"use client";

import { SignUpForm } from "@/components/shared/signupForm";
import { RocketLaunchIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
      {/* Left Side: Form */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="w-full max-w-md space-y-8">
           <SignUpForm/>
        </div>
      </div>

      {/* Right Side: Decorative */}
      <div className="hidden lg:flex relative bg-gray-900 items-center justify-center overflow-hidden border-l border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/20 via-gray-900 to-blue-900/20 z-0"></div>
        
        <div className="relative z-10 p-12 max-w-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-purple-900/20">
            <RocketLaunchIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Join the Revolution</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Create your account today and get instant access to:
          </p>
          <ul className="space-y-4">
            {[
              "Personalized AI Learning Path",
              "24/7 Virtual Tutor Support",
              "Predictive Performance Analytics",
              "Industry-Recognized Certifications"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
