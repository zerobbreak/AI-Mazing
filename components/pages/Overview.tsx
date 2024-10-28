"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to AI-Mazing Learning!</h1>
        <p className="mt-2 text-lg">
          Your personalized AI-powered platform for adaptive learning and interactive education.
        </p>
      </header>
      
      <main className="flex flex-col gap-6">
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Interactive Learning Paths</h2>
            <p>
              Explore personalized learning paths tailored to your academic needs and preferences.
            </p>
            <Button variant="outline" className="mt-2">Discover Learning Paths</Button>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Quizzes and Assessments</h2>
            <p>
              Engage with quizzes designed to reinforce your knowledge and track your progress.
            </p>
            <Button variant="outline" className="mt-2">Take a Quiz</Button>
          </Card>
        </section>

        <Separator />

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Chatbot Support</h2>
            <p>
              Get real-time assistance from our AI-powered chatbot for any questions or help you need.
            </p>
            <Button variant="outline" className="mt-2">Ask the Chatbot</Button>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Interactive Content</h2>
            <p>
              Enjoy a variety of games and simulations that make learning fun and engaging.
            </p>
            <Button variant="outline" className="mt-2">Explore Interactive Content</Button>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
