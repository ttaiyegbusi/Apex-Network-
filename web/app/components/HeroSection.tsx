"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollFadeIn } from "./ScrollFadeIn";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Safari and some embedded webviews skip the autoplay attribute on hydration,
  // so kick playback off once the file is ready.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = () => void video.play().catch(() => {});
    if (video.readyState >= 2) start();
    video.addEventListener("loadeddata", start);
    return () => video.removeEventListener("loadeddata", start);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        src="/video/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Light top fade so the sticky nav stays clean over the video */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/70 to-transparent pointer-events-none" />

      <div className="relative page-container w-full pt-40 pb-0 z-10">
        {/* Heading Content */}
        <ScrollFadeIn>
          <div className="flex flex-col items-center text-center gap-8 mb-12 relative">
            <h1 className="text-h3 md:text-h2 lg:text-h1 text-black max-w-4xl">
              One place for <span className="text-black">all </span>
              <span className="text-orange-950">your</span>{" "}
              <br className="hidden md:inline" />
              <span className="text-orange-950">Digital Finances.</span>
            </h1>
            <p className="text-p-md md:text-p-lg text-gray-700 max-w-xl">
              Simplify your Crypto journey: Buy, sell and swap
              <br className="hidden md:block" /> cryptocurrencies with more possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full text-p-md font-medium hover:bg-gray-900 transition-all">
                Get Started
              </button>
              <button className="w-full sm:w-auto bg-white text-black border border-gray-200 px-10 py-4 rounded-full text-p-md font-medium hover:bg-gray-50 transition-all shadow-sm">
                Download App
              </button>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Phone Mockups */}
        <ScrollFadeIn delay={0.3}>
          <div className="relative w-full flex justify-center items-end">
            <div className="relative w-full max-w-[1000px]">
              <Image
                src="/hero/phones.png"
                alt="Apex Network mobile app"
                width={819}
                height={411}
                priority
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
