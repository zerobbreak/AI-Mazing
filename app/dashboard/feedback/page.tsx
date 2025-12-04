"use client";
import { useState, useEffect } from "react";
import { ChatBubbleLeftRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Textarea } from "@/components/ui/textarea";
import { useUserContext } from "@/context/UserContext";
import { submitFeedback, getFeedback } from "@/lib/actions/user.action";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Feedback() {
  const { user } = useUserContext();
  const { toast } = useToast();
  const [feedbackContent, setFeedbackContent] = useState("");
  const [feedbackList, setFeedbackList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadFeedback = async () => {
    const data = await getFeedback();
    setFeedbackList(data);
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  const handleFeedbackSubmit = async () => {
    if (!feedbackContent.trim()) return;
    if (!user?.id) {
      toast({
        title: "Error",
        description: "You must be logged in to submit feedback.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await submitFeedback(Number(user.id), feedbackContent);
      setFeedbackContent("");
      toast({
        title: "Success",
        description: "Feedback submitted successfully!",
      });
      loadFeedback();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContentLayout title="Feedback">
      <div className="container mx-auto p-6 space-y-10 text-white">
        <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-800">
            <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">Share your thoughts</h2>
            </div>
            <Textarea
                value={feedbackContent}
                onChange={(e) => setFeedbackContent(e.target.value)}
                placeholder="What do you think about the platform?"
                className="mb-4 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
            />
            <Button onClick={handleFeedbackSubmit} disabled={loading} className="bg-blue-600 hover:bg-blue-500 text-white">
                {loading ? "Submitting..." : "Submit Feedback"}
            </Button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Community Feedback</h2>
          <div className="space-y-4">
            {feedbackList.map((feedback, index) => (
              <div key={index} className="bg-gray-900 shadow-sm border border-gray-800 p-4 rounded-lg hover:border-gray-700 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                     <Avatar className="h-8 w-8 border border-gray-700">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${feedback.user.name}`} />
                        <AvatarFallback className="bg-gray-800 text-gray-400">{feedback.user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-white">
                        {feedback.user.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(feedback.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-300 mt-2">{feedback.content}</p>
              </div>
            ))}
            {feedbackList.length === 0 && (
                <p className="text-gray-500 italic">No feedback yet. Be the first to share!</p>
            )}
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
