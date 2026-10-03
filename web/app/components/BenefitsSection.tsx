"use client";

import { ScrollFadeIn } from "./ScrollFadeIn";

const benefits = [
  {
    title: "Reliable Transfers",
    description: "It's your money and it's our responsibility to keep it safe and protected for you.",
    icon: "/icons/benefits/reliable-transfers.svg",
  },
  {
    title: "Maximum Security",
    description: "It's your money and it's our responsibility to keep it safe and protected for you.",
    icon: "/icons/benefits/maximum-security.svg",
  },
  {
    title: "Continuous Customer Support",
    description: "We always put you first and work round-the-clock to support your needs.",
    icon: "/icons/benefits/customer-support.svg",
  },
  {
    title: "Multiple Choice",
    description: "Buy, sell or swap BTC, USDT, ETH and more, and trade the gift cards you actually have.",
    icon: "/icons/benefits/multiple-choice.svg",
  },
  {
    title: "Instant Transactions",
    description: "It's your money and it's our responsibility to keep it safe and protected for you.",
    icon: "/icons/benefits/instant-transactions.svg",
  },
  {
    title: "Low Cost",
    description: "We always put you first and work round-the-clock to support your needs.",
    icon: "/icons/benefits/low-cost.svg",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="page-container">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <p className="text-p-sm text-gray-500 mb-3">Why Apex Network?</p>
            <h2 className="text-h4 md:text-h3 lg:text-h2 text-black max-w-2xl mx-auto">
              Built for people who can&apos;t afford to wait
            </h2>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollFadeIn key={benefit.title + index} delay={index * 0.06}>
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col relative overflow-hidden" style={{ minHeight: '340px' }}>
                {/* Icon in top right corner */}
                <img
                  src={benefit.icon}
                  alt=""
                  width={84}
                  height={84}
                  aria-hidden="true"
                  className="absolute top-6 right-6"
                />

                {/* Spacer to push content to bottom */}
                <div className="flex-1" style={{ minHeight: '120px' }}></div>

                {/* Content at bottom */}
                <div className="max-w-[85%]">
                  <h3 className="text-h6 mb-3 text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-p-md text-gray-500">
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
