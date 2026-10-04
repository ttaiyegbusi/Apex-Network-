"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ScrollFadeIn } from "./ScrollFadeIn";

// The band starts edge-to-edge and contracts to these insets as it scrolls in.
const INSET_X = 100; // matches the page gutter, so it lands flush with other sections
const INSET_Y = 40;
const RADIUS = 20;

export function BannerSection() {
  const ref = useRef<HTMLElement>(null);

  // 0 while the section is still entering, 1 once it reaches the middle of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const insetX = useTransform(scrollYProgress, [0, 1], [0, INSET_X]);
  const insetY = useTransform(scrollYProgress, [0, 1], [0, INSET_Y]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, RADIUS]);

  // Clipping rather than resizing: the element stays full-bleed, so nothing reflows
  // and the content underneath never shifts while the band contracts.
  const clipPath = useMotionTemplate`inset(${insetY}px ${insetX}px ${insetY}px ${insetX}px round ${radius}px)`;

  return (
    <section ref={ref} className="relative bg-white">
      <motion.div
        style={{
          clipPath,
          background:
            "linear-gradient(135deg, var(--color-orange-400) 0%, var(--color-primary) 55%, var(--color-orange-600) 100%)",
        }}
        className="w-full"
      >
        {/* Content sits where the contracted card will be, so the clip never eats it */}
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[150px]">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
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

            <ScrollFadeIn delay={0.15}>
              <div className="relative hidden lg:block h-[400px]">
                <div className="absolute inset-x-0 bottom-0 translate-y-10">
                  <Image
                    src="/hero/phones.png"
                    alt="Apex Network mobile app"
                    width={900}
                    height={600}
                    unoptimized
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
