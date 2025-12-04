import { 
  ChatBubbleLeftRightIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BentoGrid() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Everything You Need to Excel
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A complete ecosystem designed to accelerate your learning journey through intelligent tools and community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large Card: AI Tutor */}
          <div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Personal AI Tutor</h3>
                <p className="text-gray-400 max-w-md">
                  Get instant answers, code reviews, and explanations. Your AI companion is available 24/7 to help you unblock challenges and master concepts.
                </p>
              </div>
              
              {/* Mock Chat Interface */}
              <div className="mt-8 space-y-3 bg-gray-900/50 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs">AI</div>
                  <div className="bg-gray-800 rounded-lg rounded-tl-none p-3 text-sm text-gray-300 max-w-[80%]">
                    Hello! I noticed you're studying React Hooks. Would you like a quick quiz to test your knowledge?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs">You</div>
                  <div className="bg-blue-600/20 rounded-lg rounded-tr-none p-3 text-sm text-blue-100 max-w-[80%]">
                    Yes, that sounds great! Let's start with useEffect.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Card: Analytics */}
          <div className="relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 h-full flex flex-col relative z-10">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Analytics</h3>
              <p className="text-gray-400 text-sm mb-6">
                Visualize your progress and identify knowledge gaps with precision.
              </p>
              {/* Mock Chart */}
              <div className="flex-1 flex items-end gap-2 h-24 mt-auto">
                {[40, 65, 45, 80, 60, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-green-500/20 rounded-t-sm relative group-hover:bg-green-500/40 transition-colors">
                    <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-green-500 rounded-t-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medium Card: Community */}
          <div className="relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 h-full flex flex-col relative z-10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vibrant Community</h3>
              <p className="text-gray-400 text-sm mb-6">
                Connect with peers, share projects, and grow together.
              </p>
              <div className="flex -space-x-3 mt-auto">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-xs font-medium">
                    U{i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-400">
                  +2k
                </div>
              </div>
            </div>
          </div>

          {/* Wide Card: Learning Paths */}
          <div className="md:col-span-3 relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
             <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
               <div className="space-y-4 max-w-xl">
                 <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                   <AcademicCapIcon className="w-6 h-6 text-orange-400" />
                 </div>
                 <h3 className="text-2xl font-bold">Adaptive Learning Paths</h3>
                 <p className="text-gray-400">
                   Whether you're a beginner or an expert, our AI curates a custom curriculum just for you.
                 </p>
               </div>
               <Button asChild variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300">
                 <Link href="/dashboard/learning-path" className="flex items-center gap-2">
                   View Paths <ArrowRightIcon className="w-4 h-4" />
                 </Link>
               </Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
