"use client";
import { useEffect, useState } from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { getAllUsers } from "@/lib/actions/user.action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Community() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    };
    loadUsers();
  }, []);

  return (
    <ContentLayout title="Community">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
        <Card className="md:col-span-2 bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <UserGroupIcon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-white">Community Members</CardTitle>
                <CardDescription className="text-gray-400">Connect with fellow learners</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border border-gray-800 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors">
                  <div className="flex items-center space-x-4">
                    <Avatar className="border-2 border-gray-700">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                      <AvatarFallback className="bg-gray-700 text-gray-300">{user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-sm text-gray-400">{user.learningPath || "Exploration"}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-400">Progress</p>
                    <p className="text-2xl font-bold text-blue-400">{user.progress || 0}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Community Rules</CardTitle>
            <CardDescription className="text-gray-400">Guidelines for a safe learning space</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-300">
              {[
                "Be respectful and supportive of others' learning journeys.",
                "Share knowledge and resources freely.",
                "Constructive feedback is encouraged.",
                "No spam or self-promotion."
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
