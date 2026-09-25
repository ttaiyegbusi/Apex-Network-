"use client";

import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-0 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full flex-1 flex flex-col">
        {/* Heading Content */}
        <ScrollFadeIn>
          <div className="flex flex-col items-center text-center gap-8 mb-12 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black max-w-4xl leading-[1.1] tracking-tight">
              One place for <span className="text-black">all </span>
              <span style={{ color: '#8B4513' }}>your</span>
              <br />
              <span style={{ color: '#8B4513' }}>Digital Finances.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
              Simplify your Crypto journey: Buy, sell and swap<br className="hidden md:block" /> cryptocurrencies with more possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-black text-white px-10 py-4 rounded-full font-medium text-base hover:bg-gray-900 transition-all">
                Get Started
              </button>
              <button className="bg-white text-black border border-gray-200 px-10 py-4 rounded-full font-medium text-base hover:bg-gray-50 transition-all shadow-sm">
                Download App
              </button>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Background Gradient + Phones */}
        <div className="relative w-full mt-4 flex-1 flex items-end justify-center">
          {/* Background Gradient Image */}
          <div className="absolute inset-x-0 bottom-0 w-full flex justify-center pointer-events-none">
            <div className="relative w-full max-w-6xl h-[600px]">
              <Image
                src="/hero/bg-gradient.png"
                alt=""
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Phone Mockups Image */}
          <ScrollFadeIn delay={0.3}>
            <div className="relative w-full max-w-5xl mx-auto flex justify-center z-10 pt-8">
              <Image
                src="/hero/phones.png"
                alt="Apex Network mobile app"
                width={1200}
                height={800}
                priority
                className="w-full h-auto object-contain"
                style={{ maxHeight: '650px' }}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
