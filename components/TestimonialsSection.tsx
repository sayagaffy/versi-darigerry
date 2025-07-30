const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "👩‍💼",
    content: "BicaraPintar has revolutionized how our team communicates. The AI responses are incredibly accurate and helpful."
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    avatar: "👨‍💻",
    content: "The integration is seamless and the AI understands technical context perfectly. It's like having a smart colleague."
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "👩‍🎨",
    content: "Our customer engagement has improved dramatically since implementing BicaraPintar. Highly recommended!"
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-purple-200">
            Join thousands of satisfied users who have transformed their communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-purple-300 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-purple-200 italic">"{testimonial.content}"</p>
              <div className="flex text-yellow-400 mt-4">
                {"★".repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
