"use client";

import { ScrollFadeIn } from "./ScrollFadeIn";

export function BannerSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="relative bg-gradient-to-br from-[#FF7A00] to-[#FF5500] rounded-3xl p-10 md:p-16 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                  Ready to Take Control of Your Assets?
                </h2>
                <p className="text-lg text-white/90">
                  Join thousands of users who trust Apex Network for their crypto and fiat management
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-all hover:scale-105">
                  Get Started
                </button>
                <button className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105">
                  Download App
                </button>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
