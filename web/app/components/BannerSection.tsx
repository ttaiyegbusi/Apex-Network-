"use client";

import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";

export function BannerSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--color-orange-400) 0%, var(--color-primary) 55%, var(--color-orange-600) 100%)" }}
    >
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          {/* Copy */}
          <ScrollFadeIn>
            <div className="py-16 lg:py-24 text-white">
              <p className="text-p-sm text-white/80 mb-3">Why Apex Network?</p>
              <h2 className="text-h4 md:text-h3 lg:text-h2 mb-5 max-w-lg">
                Your payout is minutes away
              </h2>
              <p className="text-p-md text-white/90 max-w-md mb-8">
                Join 300,000+ people who trade gift cards and crypto on Apex. Sign up
                free, check your rate, and get paid in Naira today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-black text-white px-8 py-3.5 rounded-full text-p-md font-medium hover:bg-gray-900 transition">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3.5 rounded-full text-p-md font-medium hover:bg-white/10 transition">
                  Download App
                </button>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Phones */}
          <ScrollFadeIn delay={0.15}>
            <div className="relative hidden lg:block h-[420px]">
              <div className="absolute inset-x-0 bottom-0 translate-y-8">
                <Image
                  src="/hero/phones.png"
                  alt="Apex Network mobile app"
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
