import { 
  UserPlusIcon, 
  ClipboardDocumentCheckIcon, 
  MapIcon, 
  TrophyIcon 
} from "@heroicons/react/24/outline";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlusIcon,
      title: "Sign Up & Set Goals",
      description: "Create your profile and tell us what you want to master. Python? React? Data Science? We've got you covered."
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Take Assessment",
      description: "Our AI evaluates your current skill level with a dynamic quiz to identify your strengths and gaps."
    },
    {
      icon: MapIcon,
      title: "Follow Custom Path",
      description: "Get a personalized curriculum that adapts in real-time as you learn, ensuring you're always challenged but never overwhelmed."
    },
    {
      icon: TrophyIcon,
      title: "Master & Certify",
      description: "Complete projects, earn badges, and get certified to showcase your new skills to the world."
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Journey to Mastery
          </h2>
          <p className="text-gray-400 text-lg">
            Four simple steps to transform your career with AI-Mazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-gray-900 border-4 border-gray-800 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors duration-300 z-10">
                <step.icon className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
