"use client";

import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";

const benefits = [
  {
    title: "Reliable Transfers",
    description: "It's your money and it's our responsibility to keep it safe and protected for you.",
    icon: "/hero/icons/reliable-transfers.png",
  },
  {
    title: "Maximum Security",
    description: "It's your money and it's our responsibility to keep it safe and protected for you.",
    icon: "/hero/icons/maximum-security.png",
  },
  {
    title: "Continuous Customer Support",
    description: "We always put you first and work round-the-clock to support your needs.",
    icon: "/hero/icons/customer-support.png",
  },
  {
    title: "Continuous Customer Support",
    description: "We always put you first and work round-the-clock to support your needs.",
    icon: "/hero/icons/support-247.png",
  },
  {
    title: "Instant Transactions",
    description: "It's your money and it's our responsibility to keep it safe and protected for you.",
    icon: "/hero/icons/instant-transactions.png",
  },
  {
    title: "Low Cost",
    description: "We always put you first and work round-the-clock to support your needs.",
    icon: "/hero/icons/low-cost.png",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm mb-3">Why Apex Network?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              What you will be getting from regularly
            </h2>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollFadeIn key={benefit.title + index} delay={index * 0.06}>
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col relative overflow-hidden" style={{ minHeight: '340px' }}>
                {/* Icon in top right corner */}
                <div className="absolute top-6 right-6 w-24 h-24">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-1" style={{ minHeight: '120px' }}></div>

                {/* Content at bottom */}
                <div className="max-w-[85%]">
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
