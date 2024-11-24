// app/onboarding/page.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  AcademicCapIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
  UserIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    educationLevel: "",
    institution: "",
    preferredCitationStyle: "",
    languagePreference: "en",
    darkMode: false,
    aiTone: "formal",
    interests: [],
    onboardingCompleted: false,
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="mx-auto max-w-4xl p-6 space-y-12">
      {/* Step Indicator */}
      <div className="flex items-center space-x-4">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`flex items-center space-x-2 ${
              step === stepNumber ? "text-blue-600 font-bold" : "text-gray-400"
            }`}
          >
            {stepNumber === 1 && <UserIcon className="w-6 h-6" />}
            {stepNumber === 2 && <AcademicCapIcon className="w-6 h-6" />}
            {stepNumber === 3 && <Cog6ToothIcon className="w-6 h-6" />}
            {stepNumber === 4 && <CheckCircleIcon className="w-6 h-6" />}
            <span>Step {stepNumber}</span>
          </div>
        ))}
      </div>

      {/* Onboarding Steps */}
      <Card className="bg-white shadow-md rounded-lg">
        <CardHeader>
          <CardTitle>
            {step === 1 && "Personal Information"}
            {step === 2 && "Education & Role"}
            {step === 3 && "Preferences"}
            {step === 4 && "Review & Complete"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full"
              />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <Select
                onValueChange={(value) => handleInputChange("role", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
              </Select>
              <Select
                onValueChange={(value) => handleInputChange("educationLevel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Education Level" />
                </SelectTrigger>
                <SelectItem value="highschool">Highschool</SelectItem>
                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
              </Select>
              <Input
                placeholder="Institution Name"
                value={formData.institution}
                onChange={(e) => handleInputChange("institution", e.target.value)}
                className="w-full"
              />
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <Select
                onValueChange={(value) =>
                  handleInputChange("preferredCitationStyle", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Preferred Citation Style" />
                </SelectTrigger>
                <SelectItem value="APA">APA</SelectItem>
                <SelectItem value="MLA">MLA</SelectItem>
                <SelectItem value="Chicago">Chicago</SelectItem>
                <SelectItem value="Harvard">Harvard</SelectItem>
              </Select>
              <div className="flex items-center space-x-4">
                <Button
                  variant={formData.darkMode ? "secondary" : "outline"}
                  onClick={() => handleInputChange("darkMode", !formData.darkMode)}
                >
                  {formData.darkMode ? (
                    <MoonIcon className="w-6 h-6 text-gray-600" />
                  ) : (
                    <SunIcon className="w-6 h-6 text-yellow-500" />
                  )}
                  <span className="ml-2">{formData.darkMode ? "Dark Mode" : "Light Mode"}</span>
                </Button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-4">
              <p className="text-gray-600">
                Please review your information before completing the onboarding process:
              </p>
              <ul className="list-disc pl-6 text-gray-800">
                <li>Name: {formData.name}</li>
                <li>Email: {formData.email}</li>
                <li>Role: {formData.role}</li>
                <li>Education Level: {formData.educationLevel}</li>
                <li>Institution: {formData.institution}</li>
                <li>Citation Style: {formData.preferredCitationStyle}</li>
                <li>Dark Mode: {formData.darkMode ? "Enabled" : "Disabled"}</li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        {step > 1 && (
          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
        )}
        {step < 4 && (
          <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white">
            Next
          </Button>
        )}
        {step === 4 && (
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => {
              handleInputChange("onboardingCompleted", true);
              alert("Onboarding Completed!");
            }}
          >
            Complete Onboarding
          </Button>
        )}
      </div>
    </div>
  );
}
