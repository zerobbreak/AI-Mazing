import PageHeader from "@/components/shared/PageHeader";
import FeatureSection from "@/components/shared/FeatureSection";
import NavMenu from "@/components/shared/NavMenu";
import { UserGroupIcon, GlobeAmericasIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavMenu />
      <PageHeader 
        title="About AI-Mazing" 
        subtitle="We are on a mission to democratize elite education through artificial intelligence."
        badge="Our Story"
      />

      <FeatureSection 
        title="The Future of Learning" 
        description="Traditional education models were built for the industrial age. We believe in a future where every student has a personalized tutor, a custom curriculum, and the support they need to reach their full potential."
        align="left"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <GlobeAmericasIcon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Access</h3>
                <p className="text-gray-400 text-sm">
                    Breaking down geographical and economic barriers to high-quality education.
                </p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <SparklesIcon className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation First</h3>
                <p className="text-gray-400 text-sm">
                    Constantly pushing the boundaries of what's possible with EdTech and AI.
                </p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <UserGroupIcon className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Driven</h3>
                <p className="text-gray-400 text-sm">
                    Built by learners, for learners. We listen to our community to shape our roadmap.
                </p>
            </div>
        </div>
      </FeatureSection>

      <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                  <p className="text-gray-400">The principles that guide every decision we make.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                  {[
                      { title: "Student Obsession", desc: "We don't just build software; we build careers. Every feature must serve the learner." },
                      { title: "Radical Transparency", desc: "No hidden fees, no dark patterns. Just honest education." },
                      { title: "Continuous Evolution", desc: "The tech world moves fast. We move faster to keep our curriculum current." },
                      { title: "Access for All", desc: "We are committed to keeping our pricing affordable for students globally." }
                  ].map((value, i) => (
                      <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                          <h3 className="font-bold text-lg mb-2 text-white">{value.title}</h3>
                          <p className="text-sm text-gray-400">{value.desc}</p>
                      </div>
                  ))}
              </div>

              <div className="text-center">
                  <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
                  <div className="flex flex-wrap justify-center gap-8">
                      {[1, 2, 3].map((i) => (
                          <div key={i} className="w-64 bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group">
                              <div className="h-48 bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                                  <UserGroupIcon className="w-16 h-16 text-gray-600 group-hover:text-gray-400 transition-colors" />
                              </div>
                              <div className="p-6">
                                  <h4 className="font-bold text-lg">Team Member {i}</h4>
                                  <p className="text-blue-400 text-sm">Co-Founder</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">Want to help shape the future?</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  We're always looking for passionate educators, engineers, and designers to join our mission.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/contact">View Open Positions</Link>
              </Button>
          </div>
      </section>
    </div>
  );
}
