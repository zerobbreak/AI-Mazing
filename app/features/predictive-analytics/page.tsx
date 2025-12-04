import PageHeader from "@/components/shared/PageHeader";
import FeatureSection from "@/components/shared/FeatureSection";
import NavMenu from "@/components/shared/NavMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChartBarIcon, ArrowTrendingUpIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function PredictiveAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavMenu />
      <PageHeader 
        title="Predictive Analytics" 
        subtitle="See the future of your learning performance with data-driven insights."
        badge="Data Science"
      />

      <FeatureSection 
        title="Visualize Your Progress" 
        description="Our dashboard doesn't just show you what you've done; it shows you where you're going. We use historical data to forecast your mastery timeline and identify potential roadblocks."
        align="center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
           {/* Mock Chart Card */}
           <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
             <div className="flex items-center justify-between mb-6">
               <h3 className="font-bold flex items-center gap-2">
                 <ArrowTrendingUpIcon className="w-5 h-5 text-green-400" /> Performance Forecast
               </h3>
               <span className="text-xs text-gray-400">Next 30 Days</span>
             </div>
             <div className="h-48 flex items-end justify-between gap-2 px-2">
                {[30, 45, 40, 60, 55, 75, 80, 90].map((h, i) => (
                  <div key={i} className="w-full bg-green-500/20 rounded-t-sm relative group">
                    <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-green-500 rounded-t-sm transition-all duration-500 group-hover:bg-green-400"></div>
                  </div>
                ))}
             </div>
           </div>

           {/* Insights Card */}
           <div className="space-y-4 text-left">
             <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-4 flex gap-4">
               <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                 <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400" />
               </div>
               <div>
                 <h4 className="font-bold text-sm">Risk Alert</h4>
                 <p className="text-xs text-gray-400 mt-1">
                   You're spending 40% less time on "Advanced State Management" than recommended. Consider reviewing this module.
                 </p>
               </div>
             </div>
             
             <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-4 flex gap-4">
               <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                 <ChartBarIcon className="w-5 h-5 text-blue-400" />
               </div>
               <div>
                 <h4 className="font-bold text-sm">Mastery Projection</h4>
                 <p className="text-xs text-gray-400 mt-1">
                   Based on your current velocity, you are on track to complete the React Certification by December 15th.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </FeatureSection>

      {/* New Section: Metrics We Track */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Deep Dive Metrics</h2>
            <p className="text-gray-400">We track over 50 data points to ensure you're on the right path.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Code Efficiency", value: "O(n)", color: "text-blue-400" },
              { label: "Focus Time", value: "45m", color: "text-purple-400" },
              { label: "Retention Rate", value: "94%", color: "text-green-400" },
              { label: "Error Frequency", value: "Low", color: "text-yellow-400" }
            ].map((metric, i) => (
              <div key={i} className="bg-gray-800/30 border border-gray-700 p-6 rounded-xl text-center hover:bg-gray-800/50 transition-colors">
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Take control of your data</h2>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-500 text-white rounded-full px-8">
            <Link href="/auth/sign-up">View Your Analytics</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
