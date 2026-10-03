"use client";

import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";

type Testimonial = {
  name: string;
  location: string;
  quote?: string;
  photo?: string;
  gradient: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John",
    location: "Lagos, Nigeria",
    quote:
      "I can move money, pay bills, and manage everything from one app. It just makes things simpler.",
    gradient: "linear-gradient(145deg, #6B5B4F 0%, #3D3430 100%)",
  },
  {
    name: "Bolatito",
    location: "Lagos, Nigeria",
    gradient: "linear-gradient(145deg, #C9A227 0%, #6B5410 100%)",
  },
  {
    name: "Christopher",
    location: "Nairobi, Kenya",
    gradient: "linear-gradient(145deg, #8B4513 0%, #3A1D08 100%)",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden h-full min-h-[340px] md:min-h-[400px] lg:min-h-[440px]"
      style={{ background: testimonial.gradient }}
    >
      {testimonial.photo && (
        <Image
          src={testimonial.photo}
          alt={testimonial.name}
          fill
          className="object-cover object-top"
        />
      )}

      {/* Bottom scrim so text stays legible over any photo */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-label-lg">{testimonial.name}</p>
        <p className="text-p-sm text-white/70 mt-0.5">{testimonial.location}</p>
        {testimonial.quote && (
          <p className="mt-4 text-p-md text-white/95 max-w-md">
            {testimonial.quote}
          </p>
        )}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="py-24 bg-white">
      <div className="page-container">
        <ScrollFadeIn>
          <div className="text-center mb-14">
            <p className="text-p-sm text-gray-500 mb-3">Customer Stories</p>
            <h2 className="text-h4 md:text-h3 lg:text-h2 text-black mb-4">
              Trusted by over 35,000 users
            </h2>
            <p className="text-p-md text-gray-500 max-w-xl mx-auto">
              Thousands of people trade on Apex every day. Here&apos;s what some of them say.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          <ScrollFadeIn className="md:col-span-2 lg:col-span-6">
            <TestimonialCard testimonial={featured} />
          </ScrollFadeIn>

          {rest.map((testimonial, index) => (
            <ScrollFadeIn
              key={testimonial.name}
              delay={(index + 1) * 0.1}
              className="lg:col-span-3"
            >
              <TestimonialCard testimonial={testimonial} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
