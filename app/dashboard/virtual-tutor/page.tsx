// components/RapidApiDisplay.tsx
"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PaperAirplaneIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { fetchResponse } from "@/lib/actions/api.action";
import { useUserContext } from "@/context/UserContext";
import { fetchUserById } from "@/lib/actions/user.action";
import { useEffect } from "react";

export default function RapidApiDisplay() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { user } = useUserContext();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
      if (user) {
          // Fetch full user details if needed, or just use session user
          // For now, let's use session user and maybe fetch more if needed
          // But wait, user from context is from session, might not have all fields.
          // Let's fetch full user.
           const loadData = async () => {
              if (user.id) {
                  const fetchedUser = await fetchUserById(Number(user.id));
                  setUserData(fetchedUser);
              }
           }
           loadData();
      }
  }, [user]);

  const currentUser = userData || {
    name: user?.name || "Learner",
    learningPath: "General",
    progress: 0,
  }; 

  async function handleFetchRecommendations() {
    setLoading(true);

    try {
      // You can update fetchChatGPTResponse to accept user-specific data if needed
      const chatGPTResponse = await fetchResponse(currentUser);
      setResponse(chatGPTResponse);
    } catch (error) {
      setResponse("Error fetching recommendations");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContentLayout title="Virtual Tutor">
      <div className="container mx-auto p-6 flex justify-center">
        <Card className="w-full max-w-2xl bg-gray-900 border-gray-800 shadow-xl">
          <CardHeader className="border-b border-gray-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-white text-xl">Virtual Tutor</CardTitle>
                <p className="text-gray-400 text-sm">AI-powered personalized assistance for <span className="text-blue-400 font-medium">{currentUser.name}</span></p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700">
              <span className="text-gray-400">Current Focus:</span>
              <Badge variant="outline" className="border-blue-500 text-blue-400 bg-blue-500/10">
                {currentUser.learningPath || "General Learning"}
              </Badge>
            </div>

            <div className="space-y-4">
              {response ? (
                <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 text-gray-300 leading-relaxed">
                  <div className="flex items-center gap-2 mb-3 text-purple-400 font-medium">
                    <PaperAirplaneIcon className="w-4 h-4" />
                    <span>AI Response</span>
                  </div>
                  {response}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>Ready to help! Click below to get started.</p>
                </div>
              )}
            </div>

            <Button
              onClick={handleFetchRecommendations}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-none h-12 text-lg shadow-lg shadow-blue-900/20"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Thinking...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <PaperAirplaneIcon className="w-5 h-5" />
                  Get Recommendations
                </span>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
