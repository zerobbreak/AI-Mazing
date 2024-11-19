"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { AcademicCapIcon, BookOpenIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <header className="bg-white dark:bg-gray-800 sticky top-0 z-50">
        <NavigationMenu className="container mx-auto px-6 flex justify-between items-center py-4">
          <NavigationMenuList >
            <div>
              <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                AI-Mazing Learning
              </Link>
            </div>
            <div className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="text-gray-700 dark:text-gray-200">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/features" className="text-gray-700 dark:text-gray-200">
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/pricing" className="text-gray-700 dark:text-gray-200">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <Button variant="ghost" className="bg-blue-600 text-white hover:bg-blue-700">
                Sign Up
              </Button>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center">
        {/* Hero Text */}
        <motion.div
          // className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
            Simplify Academic Work with AI
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            AI tools for smarter writing, personalized learning paths, and seamless reference management.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700">
              Get Started
            </Button>
            <Link href="/learn-more" className="text-blue-600 hover:underline dark:text-blue-400">
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          // className="lg:w-1/2 mt-12 lg:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/home.svg"
            alt="AI Dashboard"
            width={600}
            height={400}
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white text-center">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Feature Cards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            // className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <Card>
              <CardHeader className="flex items-center">
                <AcademicCapIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <CardTitle className="ml-4 text-lg font-bold text-gray-800 dark:text-white">
                  AI-Powered Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Paraphrasing, summarization, and personalized content improvement.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            // className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <Card>
              <CardHeader className="flex items-center">
                <BookOpenIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                <CardTitle className="ml-4 text-lg font-bold text-gray-800 dark:text-white">
                  Reference Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Automatically format and organize citations seamlessly.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            // className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <Card>
              <CardHeader className="flex items-center">
                <PresentationChartLineIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <CardTitle className="ml-4 text-lg font-bold text-gray-800 dark:text-white">
                  Predictive Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Identify performance gaps with AI insights and analytics.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">
                "This platform transformed my approach to academic writing!"
              </p>
              <h4 className="mt-4 font-bold text-gray-800 dark:text-white">- Student A</h4>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">
                "Managing references has never been easier. Highly recommend!"
              </p>
              <h4 className="mt-4 font-bold text-gray-800 dark:text-white">- Student B</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 AI-Mazing Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
