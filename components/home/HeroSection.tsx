import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: "url('/assets/images/aurora-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900/50 via-gray-900/20 to-gray-900"></div>

      <div className="container relative z-10 px-4 mx-auto text-center space-y-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-medium animate-fade-in-up">
          <SparklesIcon className="w-4 h-4 mr-2 text-blue-400" />
          <span>The Future of Learning is Here</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight animate-fade-in-up delay-100">
          Unlock Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
            True Intelligence
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">
          AI-Mazing adapts to your unique learning style, providing real-time feedback, personalized paths, and a 24/7 virtual tutor to help you master any skill.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-900/50 transition-all hover:scale-105">
            <Link href="/auth/sign-up">Get Started Free</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all hover:scale-105">
            <Link href="/about">Explore Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
