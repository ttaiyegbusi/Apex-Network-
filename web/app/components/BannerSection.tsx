"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ScrollFadeIn } from "./ScrollFadeIn";

// The band starts edge-to-edge and contracts to these insets as it scrolls in.
// The horizontal inset is a PERCENTAGE of the band's width, not a fixed px value:
// 100px of a 1440px frame is ~7%, and that same 7% stays proportionate on a phone.
// A fixed 100px would clip 200px off a 375px screen and leave a sliver.
const INSET_X_PCT = 7;
const INSET_Y = 28;
const RADIUS = 20;

export function BannerSection() {
  const ref = useRef<HTMLElement>(null);

  // 0 while the section is still entering, 1 once it reaches the middle of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const insetX = useTransform(scrollYProgress, [0, 1], [0, INSET_X_PCT]);
  const insetY = useTransform(scrollYProgress, [0, 1], [0, INSET_Y]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, RADIUS]);

  // Clipping rather than resizing: the element stays full-bleed, so nothing reflows
  // and the content underneath never shifts while the band contracts.
  const clipPath = useMotionTemplate`inset(${insetY}px ${insetX}% ${insetY}px ${insetX}% round ${radius}px)`;

  return (
    <section ref={ref} className="relative bg-white">
      <motion.div
        style={{
          clipPath,
          // Flat #fb8e0b with a fine dot texture, supplied as an export. The colour
          // underneath matches the image exactly, so there is no flash before it loads.
          backgroundColor: "var(--color-primary)",
          backgroundImage: "url(/banner/banner-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full"
      >
        {/* Content sits where the contracted card will be, so the clip never eats it */}
        <div className="mx-auto max-w-[1440px] px-10 md:px-16 lg:px-[150px]">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <ScrollFadeIn>
              <div className="py-12 md:py-16 lg:py-24 text-white">
                <p className="text-p-sm text-white/80 mb-3">Why Apex Network?</p>
                <h2 className="text-h5 sm:text-h4 md:text-h3 lg:text-h2 mb-5 max-w-lg">
                  Your payout is minutes away
                </h2>
                <p className="text-p-md text-white/90 max-w-md mb-8">
                  Join 300,000+ people who trade gift cards and crypto on Apex. Sign up
                  free, check your rate, and get paid in Naira today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="btn-dark hover:btn-dark-hover text-white px-8 py-3.5 rounded-full text-p-md font-medium transition">
                    Get Started
                  </button>
                  <button className="border border-white text-white px-8 py-3.5 rounded-full text-p-md font-medium hover:bg-white/10 transition">
                    Download App
                  </button>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.15}>
              {/* Visible at every width — the phones are the point of the banner.
                  Below lg the image just flows, so the column is exactly as tall as
                  the artwork and no dead space opens up above it. From lg it is
                  pinned to the bottom of a fixed-height column as before. Either
                  way the 40px nudge lets the band's clip-path crop the handsets. */}
              <div className="relative lg:h-[400px]">
                <div className="lg:absolute inset-x-0 bottom-0 translate-y-10">
                  {/* Banner-specific crop: tighter than the hero's phones.png, so the
                      screens stay readable at this size. Cut out of a white-background
                      export, hence the alpha — and hence `unoptimized`. */}
                  <Image
                    src="/banner/phones-banner.png"
                    alt="Apex Network mobile app"
                    width={668}
                    height={354}
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
