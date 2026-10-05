"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ScrollFadeIn } from "./ScrollFadeIn";

const services = [
  {
    title: "Bills",
    description: "Pay your everyday bills quickly, timely and securely, all from one place.",
    icon: "/hero/icons/bills.png",
  },
  {
    title: "Virtual Cards",
    description: "Make secure online payments with a virtual card built for everyday spending.",
    icon: "/hero/icons/virtual-cards.png",
  },
  {
    title: "Requests",
    description: "Send, track, and manage payment requests without unnecessary steps.",
    icon: "/hero/icons/requests.png",
  },
  {
    title: "Gift cards",
    description: "Buy and send digital gift cards for your favorite brands, all in one place.",
    icon: "/hero/icons/gift-cards.png",
  },
];

// Cards glide in from the right, one after another.
const CARD_SHIFT = 90;        // px each card travels
const CARD_DURATION = 0.85;   // long enough to read as deliberate, not snappy
const CARD_STAGGER = 0.12;    // gap between consecutive cards
const CARD_EASE = [0.22, 1, 0.36, 1] as const; // easeOutQuint: quick start, soft landing

export function ServicesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: false, margin: "-12%" });
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-white">
      <div className="page-container">
        {/* Header Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-start">
          <ScrollFadeIn>
            <div>
              <p className="text-p-sm text-gray-500 mb-4">Our Services</p>
              <h2 className="text-h4 md:text-h3 lg:text-h2 text-black">
                One app for the money moves you make every day
              </h2>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <div className="flex flex-col items-start gap-6 md:pt-2">
              <p className="text-p-md text-gray-500">
                From the gift card in your inbox to the light bill on your table, Apex gets it done in a few taps.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Matching border on both so they end up the same height — the outlined
                      sibling's 1px border otherwise makes it 2px taller wherever they
                      stack instead of stretching to a shared row height. */}
                <button className="btn-dark hover:btn-dark-hover text-white border border-transparent px-8 py-3.5 rounded-full text-p-md font-medium transition">
                  Get Started
                </button>
                <button className="bg-white text-black border border-gray-200 px-8 py-3.5 rounded-full text-p-md font-medium hover:bg-gray-50 transition">
                  Download App
                </button>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Service Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={false}
              animate={
                reduceMotion || inView
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: CARD_SHIFT, scale: 0.97 }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: CARD_DURATION,
                      delay: inView ? index * CARD_STAGGER : 0,
                      ease: CARD_EASE,
                    }
              }
            >
              <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col min-h-[320px]">
                {/* 3D Icon */}
                <div className="relative w-28 h-28 -ml-2">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-contain object-left-top"
                  />
                </div>

                {/* Content at bottom */}
                <div className="mt-auto">
                  <h3 className="text-h5 mb-3 text-black">
                    {service.title}
                  </h3>
                  <p className="text-p-md text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
