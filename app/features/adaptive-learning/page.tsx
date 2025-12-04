import PageHeader from "@/components/shared/PageHeader";
import FeatureSection from "@/components/shared/FeatureSection";
import NavMenu from "@/components/shared/NavMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowPathIcon, ScaleIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function AdaptiveLearningPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavMenu />
      <PageHeader 
        title="Adaptive Learning Engine" 
        subtitle="Experience a curriculum that evolves with you in real-time."
        badge="Personalized Education"
      />

      <FeatureSection 
        title="How It Works" 
        description="Our proprietary AI algorithms analyze your interactions, quiz scores, and time-on-task to build a dynamic knowledge graph. As you learn, the system adjusts the difficulty and format of upcoming lessons."
        align="center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <ArrowPathIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-Time Adjustments</h3>
            <p className="text-gray-400 text-sm">
              Struggling with a concept? We'll break it down. Breezing through? We'll ramp up the challenge.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <ScaleIcon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Balanced Difficulty</h3>
            <p className="text-gray-400 text-sm">
              We keep you in the "flow state" — not too hard, not too easy, just right for optimal learning.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-colors">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <ClockIcon className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Efficient Pacing</h3>
            <p className="text-gray-400 text-sm">
              Don't waste time on what you already know. Focus 100% of your energy on new material.
            </p>
          </div>
        </div>
      </FeatureSection>

      {/* New Section: Curriculum Examples */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-white">A Curriculum That Knows You</h2>
              <p className="text-gray-400 text-lg">
                Two students starting the same course will have completely different journeys. 
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Visual Learners</h4>
                    <p className="text-sm text-gray-400">Get more diagrams, video content, and interactive graphs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-400 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Code-First Learners</h4>
                    <p className="text-sm text-gray-400">Jump straight into IDE challenges and skip the theory videos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-400 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Theory Buffs</h4>
                    <p className="text-sm text-gray-400">Deep dive into documentation and academic papers before coding.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
               <h3 className="text-xl font-bold mb-6 relative z-10">Your Path vs. Standard Path</h3>
               <div className="space-y-6 relative z-10">
                 <div>
                   <div className="flex justify-between text-sm mb-2">
                     <span className="text-gray-400">Standard Bootcamp</span>
                     <span className="text-gray-500">Fixed Timeline (12 Weeks)</span>
                   </div>
                   <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                     <div className="h-full w-full bg-gray-600"></div>
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm mb-2">
                     <span className="text-blue-400 font-bold">AI-Mazing Path</span>
                     <span className="text-blue-400">Optimized (8 Weeks)</span>
                   </div>
                   <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                     <div className="h-full w-[66%] bg-gradient-to-r from-blue-500 to-purple-500"></div>
                   </div>
                   <p className="text-xs text-green-400 mt-2">✨ You saved 4 weeks by testing out of basics!</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to learn smarter?</h2>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8">
            <Link href="/auth/sign-up">Start Your Adaptive Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
