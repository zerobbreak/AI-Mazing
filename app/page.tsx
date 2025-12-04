import NavMenu from "@/components/shared/NavMenu";
import HeroSection from "@/components/home/HeroSection";
import BentoGrid from "@/components/home/BentoGrid";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-blue-500/30">
      {/* Navbar */}
      <NavMenu />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <Stats />

      {/* Bento Grid Features */}
      <BentoGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl shadow-blue-900/50">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">Ready to Unlock Your Potential?</h2>
                    <p className="text-blue-100 text-lg">
                        Join thousands of learners who are transforming their careers with AI-Mazing Learning.
                    </p>
                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 font-bold rounded-full shadow-lg transition-transform hover:scale-105">
                        <Link href="/auth/sign-up">Get Started for Free</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
                <h3 className="text-white text-lg font-bold flex items-center gap-2">
                    <RocketLaunchIcon className="w-5 h-5 text-blue-500" /> AI-Mazing
                </h3>
                <p className="text-sm">
                    Empowering the next generation of learners with artificial intelligence.
                </p>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="hover:text-blue-400 transition">Features</Link></li>
                    <li><Link href="#" className="hover:text-blue-400 transition">Pricing</Link></li>
                    <li><Link href="#" className="hover:text-blue-400 transition">Enterprise</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="hover:text-blue-400 transition">Blog</Link></li>
                    <li><Link href="#" className="hover:text-blue-400 transition">Community</Link></li>
                    <li><Link href="#" className="hover:text-blue-400 transition">Help Center</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-blue-400 transition">Terms of Service</Link></li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} AI-Mazing Learning. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
