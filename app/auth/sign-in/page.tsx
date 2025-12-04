import { LoginForm } from "@/components/shared/loginForm"
import { SparklesIcon } from "@heroicons/react/24/outline"

export default function Page() {
  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
      {/* Left Side: Form */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="w-full max-w-md space-y-8">
           <LoginForm/>
        </div>
      </div>

      {/* Right Side: Decorative */}
      <div className="hidden lg:flex relative bg-gray-900 items-center justify-center overflow-hidden border-l border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 p-12 text-center max-w-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-900/20">
            <SparklesIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Welcome Back</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>System Operational</span>
          </div>
        </div>
      </div>
    </div>
  )
}
