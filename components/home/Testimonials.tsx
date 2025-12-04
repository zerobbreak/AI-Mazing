import { StarIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Frontend Developer",
      content: "AI-Mazing completely changed how I learn. The adaptive path meant I didn't waste time on things I already knew. I got my React certification in half the time!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      content: "The predictive analytics are scary accurate. It told me I was weak in SQL joins, and sure enough, that's where I struggled in interviews. The targeted practice fixed it.",
      avatar: "MC"
    },
    {
      name: "Jessica Williams",
      role: "UX Designer",
      content: "Having a 24/7 AI tutor is a game changer. It's like having a senior engineer sitting next to you, ready to explain complex concepts whenever you get stuck.",
      avatar: "JW"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by Learners Worldwide
          </h2>
          <p className="text-gray-400 text-lg">
            Join thousands of students who have accelerated their careers with AI-Mazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/30 transition-colors">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
