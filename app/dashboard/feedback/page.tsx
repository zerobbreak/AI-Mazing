"use client";
import { useState } from "react";
import { ChatBubbleLeftRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Textarea } from "@/components/ui/textarea";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = () => {
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  // Dummy feedback data
  const feedbackData = [
    {
      username: "johndoe123",
      date: "2024-10-25",
      rating: 5,
      comment:
        "The learning platform is incredibly intuitive and engaging. I love the adaptive learning paths!",
    },
    {
      username: "janedoe456",
      date: "2024-10-24",
      rating: 4,
      comment:
        "Great content overall. Some quizzes could use more in-depth questions to challenge the material covered.",
    },
    {
      username: "alexsmith",
      date: "2024-10-23",
      rating: 5,
      comment:
        "The virtual tutor feature is amazing! It’s like having a personal coach at my fingertips.",
    },
    {
      username: "susan_learner",
      date: "2024-10-22",
      rating: 3,
      comment:
        "The recommendations are helpful, but I wish there were more advanced options for Data Science.",
    },
    {
      username: "mike_b87",
      date: "2024-10-21",
      rating: 4,
      comment:
        "I really appreciate the community aspect and feedback sections. Great way to connect with other learners!",
    },
  ];

  return (
    <ContentLayout title="Feedback">
      <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-500 mb-4" />
      <Textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your feedback here..."
      />
      <Button onClick={handleFeedbackSubmit} className="mt-4">
        Submit Feedback
      </Button>

      <div className="container mx-auto p-6 space-y-10">
        <h2 className="text-2xl font-bold mb-4">User Feedback</h2>

        {feedbackData.map((feedback, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-blue-600">
                {feedback.username}
              </span>
              <span className="text-sm text-gray-500">{feedback.date}</span>
            </div>
            <div className="flex items-center space-x-1 mt-1">
              {[...Array(feedback.rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
              ))}
            </div>
            <p className="mt-2 text-gray-700">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
}
