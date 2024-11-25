"use client"
import {
  ChatBubbleLeftEllipsisIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavMenu from "@/components/shared/NavMenu";
import { motion } from "motion/react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto p-6 space-y-12">
      {/* Navbar */}
      <NavMenu />

      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">AI-Mazing Learning</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Unlock your potential with personalized, AI-driven learning paths
            and interactive content.
          </p>
          <Button
            className="mt-6 bg-blue-600 text-white hover:bg-blue-700"
            size="lg"
          >
            Get Started
          </Button>
        </motion.div>

        {/* Image */}
        <motion.div
        //   className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/home.svg"
            width={500}
            height={500}
            alt="Home image"
            priority
          />
        </motion.div>
      </section>

      {/* Core Features Section */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Our Core Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card */}
          <Card className="bg-white shadow-lg rounded-lg">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AcademicCapIcon className="w-6 h-6 text-blue-600" />
                <CardTitle>Adaptive Learning Paths</CardTitle>
              </div>
              <CardDescription>
                Personalized content that evolves with you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our AI tailors lessons to fit each student’s learning style,
                ensuring a unique path to success.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/features/adaptive-learning"
                className="text-blue-600"
              >
                Learn More
              </Link>
            </CardFooter>
          </Card>

          {/* Predictive Analytics Card */}
          <Card className="bg-white shadow-lg rounded-lg">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <PresentationChartLineIcon className="w-6 h-6 text-green-600" />
                <CardTitle>Predictive Analytics</CardTitle>
              </div>
              <CardDescription>
                Insights that identify and address learning gaps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Analyze performance trends and forecast areas needing
                improvement to keep you on track.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/features/predictive-analytics"
                className="text-green-600"
              >
                Learn More
              </Link>
            </CardFooter>
          </Card>

          {/* Chatbots and Virtual Tutors Card */}
          <Card className="bg-white shadow-lg rounded-lg">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-purple-600" />
                <CardTitle>Chatbots & Virtual Tutors</CardTitle>
              </div>
              <CardDescription>
                Get answers and support anytime, anywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our intelligent chatbots and virtual tutors provide real-time
                assistance for all your questions.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/features/chatbot" className="text-purple-600">
                Learn More
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
