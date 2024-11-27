"use client";
import {
  ChatBubbleLeftEllipsisIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import NavMenu from "@/components/shared/NavMenu";
import { motion } from "motion/react";
import Image from "next/image";
import { PhoneIcon } from "lucide-react";

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
    content:
      "Analyze performance trends and forecast areas needing improvement.",
    href: "/features/predictive-analytics",
    icon: <PresentationChartLineIcon className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Chatbots & Virtual Tutors",
    description: "Get answers and support anytime, anywhere.",
    content:
      "Our intelligent chatbots and virtual tutors provide real-time assistance.",
    href: "/features/chatbot",
    icon: <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-purple-600" />,
  },
];

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
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const child = {
  hidden: { opacity: 0, y: -50 }, // Cards start off-screen above
  visible: { opacity: 1, y: 0 }, // Slide down into position
};

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
      <section className="space-y-8 px-6 py-12">
        <h3 className="text-3xl font-semibold text-gray-800 text-center">
          Our Core Features
        </h3>

        {/* Motion Container for Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Cards */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={child} // Each card inherits child animation
              className="bg-white shadow-lg rounded-lg"
            >
              <Card>
                <CardHeader>
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{feature.content}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href={feature.href}
                    className="text-blue-600 hover:underline"
                  >
                    Learn More
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16">
        {/* Left Content */}
        <div className="max-w-lg space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-900">
            AI-Powered Solutions at Your Fingertips
          </h2>
          <p className="text-lg text-gray-600">
            Unlock the power of AI for document analysis, summarization, and
            much more—all in real time.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Queue Card Animation */}
        <div className="relative w-full md:w-2/3 h-auto">
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
                className="bg-white shadow-md rounded-lg p-6"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="mb-4 mx-auto"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 mb-10">
            This platform is designed to revolutionize the way students,
            professors, and institutions manage academic work by combining
            cutting-edge AI tools with intuitive features. It provides an
            integrated solution for academic writing, collaboration, and study
            assistance, tailored to the needs of modern learners and educators.
            Powered by Amazon Bedrock’s generative AI models, the platform
            simplifies document management, enhances content quality, and
            fosters efficient learning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Free Plan Card */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className=" text-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                  Free
                </h3>
                <span className="text-4xl font-extrabold text-blue-500 mb-6">
                  $0
                </span>
                <p className="text-sm text-gray-600 mb-6">per month</p>
                <ul className="text-gray-600 space-y-3 mb-6">
                  <li>• 10 Documents Analyzed</li>
                  <li>• 5 Hours of AI Assistance</li>
                  <li>• Access to Basic Features</li>
                </ul>
                <motion.button
                  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started
                </motion.button>
              </Card>
            </motion.div>

            {/* Standard Plan Card */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className=" p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                  Standard
                </h3>
                <span className="text-4xl font-extrabold text-blue-500 mb-6">
                  $29
                </span>
                <p className="text-sm text-gray-600 mb-6">per month</p>
                <ul className="text-gray-600 space-y-3 mb-6">
                  <li>• 50 Documents Analyzed</li>
                  <li>• 20 Hours of AI Assistance</li>
                  <li>• Access to Premium Features</li>
                </ul>
                <motion.button
                  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started
                </motion.button>
              </Card>
            </motion.div>

            {/* Premium Plan Card (Highlighted) */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-lg shadow-2xl max-w-sm w-full transform scale-105">
                <h3 className="text-2xl font-semibold mb-4">Premium</h3>
                <span className="text-4xl font-extrabold mb-6">$79</span>
                <p className="text-sm mb-6">per month</p>
                <ul className="space-y-3 mb-6">
                  <li>• Unlimited Documents Analyzed</li>
                  <li>• 50 Hours of AI Assistance</li>
                  <li>• Access to All Premium Features</li>
                  <li>• Priority Support</li>
                  <li>• Advanced Custom Integrations</li>
                </ul>
                <motion.button
                  className="w-full py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started
                </motion.button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Social Media Links */}
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-semibold text-blue-500 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 2a2 2 0 00-2 2v2h-3v3h3v9h3V9h3l-1-3h-2V4a2 2 0 012-2h-3z"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M23 3a10.7 10.7 0 01-3.07.84A4.52 4.52 0 0022.46 1a9.03 9.03 0 01-2.88 1.1A4.47 4.47 0 0016.54 2c-2.46 0-4.46 2.01-4.46 4.46 0 .35.04.7.12 1.03A12.7 12.7 0 011.64 3.15a4.46 4.46 0 001.39 5.95A4.42 4.42 0 012 8.5v.03a4.47 4.47 0 003.58-1.49 4.47 4.47 0 003.56 2.64c-.12.3-.18.62-.18.96 0 2.62 2.12 4.74 4.74 4.74 1.45 0 2.75-.69 3.66-1.76a9.46 9.46 0 003.19-.67c-.12-.35-.19-.72-.19-1.1 0-4.48 3.62-8.1 8.1-8.1 4.48 0 8.1 3.62 8.1 8.1 0 4.46-3.62 8.1-8.1 8.1-.85 0-1.68-.13-2.48-.37a8.93 8.93 0 01-4.02 1.05c-2.68 0-4.88-2.2-4.88-4.88 0-.25.02-.5.06-.75a13.18 13.18 0 0012.92-13.23c.33-.06.67-.09 1-.09z"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 8a6 6 0 10-12 0 6 6 0 0012 0zM2 18v-6h4v6H2zM4 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 2a2 2 0 012 2v16a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h18zm-10 7a3 3 0 110 6 3 3 0 010-6zm-5 1a5 5 0 1110 0 5 5 0 01-10 0zm10 9H7a3 3 0 00-3 3v3h16v-3a3 3 0 00-3-3z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-semibold text-blue-500 mb-4">
                Contact Us
              </h4>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <EnvelopeIcon className="w-5 h-5" />
                <p>Email: support@platform.com</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <PhoneIcon className="w-5 h-5" />
                <p>Phone: +1 (234) 567-890</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <MapPinIcon className="w-5 h-5" />
                <p>Address: 123 Main St, City, Country</p>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-semibold text-blue-500 mb-4">
                Company
              </h4>
              <a
                href="/terms"
                className="text-gray-400 hover:text-blue-500 mb-2 transition"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-blue-500 mb-2 transition"
              >
                Privacy Policy
              </a>
              <a
                href="/contact"
                className="text-gray-400 hover:text-blue-500 mb-2 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-400">
              © 2024 Your Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
