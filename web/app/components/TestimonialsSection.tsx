"use client";

import { ScrollFadeIn } from "./ScrollFadeIn";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Crypto Investor",
    content: "Apex Network made it so easy to manage both my crypto and USD. Highly recommend!",
    initials: "SJ",
  },
  {
    name: "Mike Chen",
    role: "Freelancer",
    content: "I love the virtual cards feature. Perfect for my online payments without worrying about crypto volatility.",
    initials: "MC",
  },
  {
    name: "Emma Rodriguez",
    role: "Entrepreneur",
    content: "Finally a platform that understands the modern investor. Seamless integration of fiat and crypto.",
    initials: "ER",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              What Our Users Say
            </h2>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollFadeIn key={testimonial.name} delay={index * 0.1}>
              <div className="p-8 bg-gray-50 rounded-2xl h-full flex flex-col">
                <div className="text-4xl text-[#FF7A00] mb-4 font-serif">"</div>
                <p className="mb-8 text-gray-700 leading-relaxed flex-1">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFB366] to-[#FF7A00] text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
