"use client"

import {
  ChatBubbleLeftEllipsisIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import NavMenu from "@/components/shared/NavMenu"
import { motion } from "framer-motion"
import Image from "next/image"
import { PhoneIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const features = [
  {
    title: "Adaptive Learning Paths",
    description: "Personalized content that evolves with you.",
    content: "Our AI tailors lessons to fit each student’s learning style.",
    href: "/features/adaptive-learning",
    icon: <AcademicCapIcon className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Predictive Analytics",
    description: "Insights that address learning gaps.",
    content: "Analyze performance trends and forecast areas needing improvement.",
    href: "/features/predictive-analytics",
    icon: <PresentationChartLineIcon className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Chatbots & Virtual Tutors",
    description: "Get answers and support anytime, anywhere.",
    content: "Our intelligent chatbots and virtual tutors provide real-time assistance.",
    href: "/features/chatbot",
    icon: <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-purple-600" />,
  },
]

const cards = [
  {
    id: 1,
    title: "Document Summarization",
    description: "Quickly summarize long documents with ease.",
    image: "/home.svg",
  },
  {
    id: 2,
    title: "Predictive Analytics",
    description: "Get insights and identify learning gaps instantly.",
    image: "/login.svg",
  },
  {
    id: 3,
    title: "AI Virtual Tutors",
    description: "Instant assistance for all your questions.",
    image: "/signup.svg",
  },
  {
    id: 4,
    title: "Plagiarism Detection",
    description: "Ensure originality and avoid content duplication.",
    image: "/plageriasm.svg",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student",
    content:
      "AI-Mazing Learning has revolutionized my study habits. The personalized learning paths and AI tutors have helped me improve my grades significantly.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Dr. Michael Chen",
    role: "Professor",
    content:
      "As an educator, I'm impressed by the platform's ability to adapt to each student's needs. It's a game-changer in the field of education.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Emily Rodriguez",
    role: "Parent",
    content:
      "My daughter's confidence in her studies has soared since using AI-Mazing Learning. The progress tracking feature helps me stay involved in her education.",
    avatar: "/placeholder.svg",
  },
]

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
}

const child = {
  hidden: { opacity: 0, y: -50 }, // Cards start off-screen above
  visible: { opacity: 1, y: 0 }, // Slide down into position
}

export default function Page() {
  return (
    <div className="mx-auto p-6 space-y-12 bg-background text-foreground">
      {/* Navbar */}
      <NavMenu />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-xl shadow-inner">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 dark:text-white">
            Welcome to <span className="text-blue-600 dark:text-blue-500">AI-Mazing Learning</span>
          </h1>
          <p className="text-xl text-gray-700 mb-6 dark:text-gray-300">
            Unlock your potential with personalized, AI-driven learning paths and interactive content.
          </p>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-600"
            size="lg"
          >
            Get Started
          </Button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 mt-8 md:mt-0"
        >
          <Image
            src="/home.svg"
            width={500}
            height={500}
            alt="AI-powered learning illustration"
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </section>

      {/* Core Features Section */}
      <section className="space-y-8 px-6 py-16 bg-background">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12 dark:text-white">
          Our Core Features
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={child}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:text-white"
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 dark:bg-blue-700 text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="dark:text-gray-300">
                  <p>{feature.content}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href={feature.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    Learn More →
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12 dark:text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full flex flex-col dark:bg-gray-800 dark:text-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="dark:text-white">{testimonial.name}</CardTitle>
                        <CardDescription className="dark:text-gray-300">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="dark:text-gray-300">
                    <p>{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Solutions Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-16 bg-muted">
        {/* Left Content */}
        <div className="max-w-lg space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight dark:text-white">
            AI-Powered Solutions at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Unlock the power of AI for document analysis, summarization, and much more—all in real time.
          </p>
          <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-600">
            Get Started
          </Button>
        </div>

        {/* Queue Card Animation */}
        <div className="w-full md:w-1/2">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="bg-white shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="mb-4 mx-auto"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-2 dark:text-white">{card.title}</h3>
                <p className="text-gray-600 text-center dark:text-gray-300">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Pricing Plans</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto dark:text-gray-300">
            Choose the perfect plan to unlock the full potential of AI-powered learning and academic assistance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan Card */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="w-full max-w-sm dark:bg-gray-800 dark:text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Free</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$0</span>
                    <span className="text-gray-600 dark:text-gray-300">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="dark:text-gray-300">
                  <ul className="space-y-3 mb-6">
                    <li>• 10 Documents Analyzed</li>
                    <li>• 5 Hours of AI Assistance</li>
                    <li>• Access to Basic Features</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Standard Plan Card */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="w-full max-w-sm border-blue-200 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Standard</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$29</span>
                    <span className="text-gray-600 dark:text-gray-300">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="dark:text-gray-300">
                  <ul className="space-y-3 mb-6">
                    <li>• 50 Documents Analyzed</li>
                    <li>• 20 Hours of AI Assistance</li>
                    <li>• Access to Premium Features</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Premium Plan Card */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="w-full max-w-sm bg-gradient-to-br from-blue-500 to-indigo-600 text-white transform scale-105 shadow-xl dark:bg-gradient-to-br dark:from-blue-700 dark:to-indigo-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold dark:text-gray-100">Premium</CardTitle>
                  <CardDescription className="text-blue-100 dark:text-gray-100">
                    <span className="text-4xl font-extrabold dark:text-gray-100">$79</span>
                    <span className="dark:text-gray-100">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="dark:text-gray-100">
                  <ul className="space-y-3 mb-6">
                    <li>• Unlimited Documents Analyzed</li>
                    <li>• 50 Hours of AI Assistance</li>
                    <li>• Access to All Premium Features</li>
                    <li>• Priority Support</li>
                    <li>• Advanced Custom Integrations</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Media Links */}
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-semibold text-blue-400 mb-4 dark:text-blue-300">Follow Us</h4>
              <div className="flex space-x-6">
                {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-300 dark:hover:text-blue-300"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Replace with actual social media icons */}
                    <div className="w-6 h-6 bg-white rounded-full dark:bg-gray-700"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-semibold text-blue-400 mb-4 dark:text-blue-300">Contact Us</h4>
              <div className="space-y-2">
                <p className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-400 dark:text-blue-300" />
                  support@platform.com
                </p>
                <p className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-2 text-blue-400 dark:text-blue-300" />
                  +1 (234) 567-890
                </p>
                <p className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2 text-blue-400 dark:text-blue-300" />
                  123 Main St, City, Country
                </p>
              </div>
            </div>

            {/* Company Links */}
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-semibold text-blue-400 mb-4 dark:text-blue-300">Company</h4>
              <nav className="flex flex-col space-y-2">
                {["Terms of Service", "Privacy Policy", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-blue-400 transition-colors duration-300 dark:hover:text-blue-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center dark:border-gray-700">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} AI-Mazing Learning. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

