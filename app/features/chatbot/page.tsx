import PageHeader from "@/components/shared/PageHeader";
import FeatureSection from "@/components/shared/FeatureSection";
import NavMenu from "@/components/shared/NavMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChatBubbleLeftRightIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavMenu />
      <PageHeader 
        title="AI Virtual Tutor" 
        subtitle="24/7 support for every coding challenge, concept, and question."
        badge="Intelligent Assistance"
      />

      <FeatureSection 
        title="More Than Just a Chatbot" 
        description="Our Virtual Tutor is context-aware. It knows what lesson you're on, what code you've written, and where you're getting stuck. It provides tailored hints, not just generic answers."
        align="center"
      >
        <div className="max-w-3xl mx-auto mt-12 bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
          {/* Chat Header */}
          <div className="bg-gray-900 p-4 border-b border-gray-800 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-sm text-gray-400 font-mono">Tutor Session: React Hooks</span>
          </div>
          
          {/* Chat Body */}
          <div className="p-6 space-y-6 font-mono text-sm">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs flex-shrink-0">You</div>
              <div className="bg-gray-900 p-4 rounded-xl rounded-tl-none text-gray-300">
                I keep getting an infinite loop in my useEffect. Here is my code...
              </div>
            </div>
            
            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs flex-shrink-0">AI</div>
              <div className="bg-blue-900/20 p-4 rounded-xl rounded-tr-none text-blue-100 border border-blue-500/20">
                <p className="mb-2">I see the issue! You're updating the state <code>count</code> inside the dependency array of <code>useEffect</code>.</p>
                <div className="bg-black/50 p-3 rounded border border-blue-500/30 text-xs">
                  <span className="text-pink-400">useEffect</span>(() ={">"} {"{"}<br/>
                  &nbsp;&nbsp;setCount(c ={">"} c + 1);<br/>
                  {"}"}, [count]); <span className="text-gray-500">// ❌ This causes the loop</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
                    <CodeBracketIcon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-bold">Code Debugging</h4>
                <p className="text-sm text-gray-400 mt-1">Paste your snippets and get instant fixes.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
                    <LightBulbIcon className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="font-bold">Concept Explanation</h4>
                <p className="text-sm text-gray-400 mt-1">Complex topics simplified into plain English.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-bold">Socratic Method</h4>
                <p className="text-sm text-gray-400 mt-1">Guides you to the answer instead of just giving it.</p>
            </div>
        </div>
      </FeatureSection>

      {/* New Section: Supported Languages */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Fluent in 20+ Languages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "JavaScript", "TypeScript", "Rust", "Go", "Java", "C++", "SQL", "React", "Next.js"].map((lang) => (
              <div key={lang} className="px-6 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-300 font-mono hover:bg-gray-700 hover:text-white hover:border-blue-500 transition-all cursor-default">
                {lang}
              </div>
            ))}
            <div className="px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700 border-dashed text-gray-500 font-mono">
              + many more
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Meet your new study buddy</h2>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-500 text-white rounded-full px-8">
            <Link href="/auth/sign-up">Chat with AI Tutor</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
