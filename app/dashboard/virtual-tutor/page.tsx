// components/RapidApiDisplay.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PaperAirplaneIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { fetchResponse } from "@/lib/actions/api.action";

export default function RapidApiDisplay() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const dummyUser = {
    name: "Alice Jones",
    learningPath: "Data Science",
    progress: 70,
    completedLessons: 20,
    hoursSpent: 30,
    performanceTrend: "Improving",
  }; 

  async function handleFetchRecommendations() {
    setLoading(true);

    try {
      // You can update fetchChatGPTResponse to accept user-specific data if needed
      const chatGPTResponse = await fetchResponse(dummyUser);
      setResponse(chatGPTResponse);
    } catch (error) {
      setResponse("Error fetching recommendations");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="p-6 border rounded-lg shadow-sm max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Virtual Tutor</CardTitle>
        <p className="text-gray-600">Personalized recommendations for {dummyUser.name}</p>
      </CardHeader>
      <CardContent>
        <div className="text-md text-gray-800 mb-4">
          Learning Path: {dummyUser.learningPath || "N/A"}
        </div>
        <Button
          onClick={handleFetchRecommendations}
          variant="ghost"
          disabled={loading}
        >
          {loading ? "Fetching Recommendations..." : "Refresh Recommendations"}
        </Button>
        {response && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-800">
            {response}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
