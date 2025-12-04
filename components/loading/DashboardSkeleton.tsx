export function DashboardSkeleton() {
  return (
    <div className="container mx-auto p-6 space-y-6 text-white relative animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 p-8 border border-gray-800">
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="h-10 w-96 bg-gray-800 rounded-lg"></div>
              <div className="h-6 w-64 bg-gray-800 rounded-lg"></div>
            </div>
            <div className="h-10 w-32 bg-gray-800 rounded-full"></div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-4 w-24 bg-gray-800 rounded"></div>
                <div className="h-6 w-40 bg-gray-800 rounded"></div>
              </div>
              <div className="text-right space-y-2">
                <div className="h-8 w-20 bg-gray-800 rounded"></div>
                <div className="h-3 w-16 bg-gray-800 rounded"></div>
              </div>
            </div>
            <div className="h-3 w-full bg-gray-800 rounded-full"></div>
            <div className="h-2 w-32 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>

      {/* Quick Stats Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gray-800"></div>
            <div className="h-8 w-20 bg-gray-800 rounded"></div>
            <div className="h-3 w-24 bg-gray-800 rounded"></div>
          </div>
        ))}
      </div>

      {/* Continue Learning & Upcoming Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Continue Learning Skeleton */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-6 w-40 bg-gray-800 rounded"></div>
                <div className="h-4 w-48 bg-gray-800 rounded"></div>
              </div>
              <div className="h-8 w-20 bg-gray-800 rounded"></div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-xl bg-gray-800 flex-shrink-0"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 w-48 bg-gray-800 rounded"></div>
                  <div className="h-4 w-32 bg-gray-800 rounded"></div>
                  <div className="h-2 w-full bg-gray-800 rounded-full"></div>
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-20 bg-gray-800 rounded"></div>
                    <div className="h-3 w-20 bg-gray-800 rounded"></div>
                  </div>
                </div>
                <div className="h-10 w-24 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Lessons Skeleton */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
          <div className="h-6 w-32 bg-gray-800 rounded"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-3 rounded-lg bg-gray-800/50 border border-gray-800 space-y-2">
              <div className="h-4 w-full bg-gray-800 rounded"></div>
              <div className="flex items-center justify-between">
                <div className="h-3 w-16 bg-gray-800 rounded"></div>
                <div className="h-3 w-24 bg-gray-800 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations Skeleton */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-8 w-64 bg-gray-800 rounded"></div>
          <div className="h-8 w-20 bg-gray-800 rounded"></div>
        </div>
        
        <div className="flex gap-4 overflow-x-hidden">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="min-w-[300px] bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gray-800"></div>
              <div className="h-5 w-40 bg-gray-800 rounded"></div>
              <div className="h-4 w-full bg-gray-800 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
              <div className="flex items-center justify-between">
                <div className="h-6 w-20 bg-gray-800 rounded-full"></div>
                <div className="h-9 w-20 bg-gray-800 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & Performance Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
            <div className="h-6 w-40 bg-gray-800 rounded"></div>
            <div className="space-y-3">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="flex items-start gap-3 pb-3 border-b border-gray-800 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-gray-800 mt-2"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-full bg-gray-800 rounded"></div>
                    <div className="h-3 w-24 bg-gray-800 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuickLoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-800 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-700 border-t-purple-500 rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    </div>
  );
}
