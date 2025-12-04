export default function Stats() {
  const stats = [
    { label: "Active Learners", value: "10,000+" },
    { label: "Skills Mastered", value: "50,000+" },
    { label: "AI Interactions", value: "1M+" },
    { label: "User Satisfaction", value: "4.9/5" },
  ];

  return (
    <section className="py-12 bg-gray-900 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
