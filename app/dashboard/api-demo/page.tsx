"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { ServerIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function ApiDemoPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch data from our custom API route
      const res = await fetch('/api/stats');
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Failed to fetch API:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
     <ContentLayout title="API Architecture Demo">
      <div className="container mx-auto p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
            {/* Explanation Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ServerIcon className="w-5 h-5 text-blue-500"/>
                        Next.js API Routes (Route Handlers)
                    </CardTitle>
                    <CardDescription>
                        How server-side API architecture works in Next.js App Router
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-gray-600">
                    <p>
                        In Next.js, you can build a full API backend within the same application using <strong>Route Handlers</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Files named <code>route.ts</code> in the <code>app</code> directory become API endpoints.
                        </li>
                        <li>
                            They support standard HTTP methods: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>, etc.
                        </li>
                        <li>
                            They run on the server, allowing secure database access (like Prisma) without exposing secrets to the client.
                        </li>
                    </ul>
                    <div className="bg-slate-100 p-3 rounded-md font-mono text-xs mt-4">
                        GET /api/stats
                    </div>
                </CardContent>
            </Card>

            {/* Demo Card */}
            <Card>
            <CardHeader>
                <CardTitle>Live Demonstration</CardTitle>
                <CardDescription>
                    Click the button to fetch real-time data from <code>/api/stats</code>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <Button 
                        onClick={fetchData} 
                        disabled={loading}
                        className="w-full sm:w-auto"
                    >
                        {loading ? (
                            <>
                                <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin" />
                                Fetching from Server...
                            </>
                        ) : (
                            "Call API Endpoint"
                        )}
                    </Button>

                    {data && (
                        <div className="w-full bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-auto max-h-[300px]">
                            <div className="flex justify-between text-xs text-slate-400 mb-2 border-b border-slate-800 pb-2">
                                <span>Status: {data.success ? "200 OK" : "Error"}</span>
                                <span>Time: {new Date(data.timestamp).toLocaleTimeString()}</span>
                            </div>
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </CardContent>
            </Card>
        </div>
      </div>
    </ContentLayout>
  );
}
