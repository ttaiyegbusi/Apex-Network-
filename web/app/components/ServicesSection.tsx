"use client";

import Image from "next/image";
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

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-start">
          <ScrollFadeIn>
            <div>
              <p className="text-gray-500 text-sm mb-4">Our Services</p>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-black leading-[1.15]">
                Apex network is the platform for financial transactions at scale.
              </h2>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <div className="flex flex-col items-start md:items-end gap-6 md:pt-2">
              <p className="text-gray-500 md:text-right max-w-md leading-relaxed">
                Financial solutions specially tailored to your personal and business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-gray-900 transition">
                  Get Started
                </button>
                <button className="bg-white text-black border border-gray-200 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-gray-50 transition">
                  Download App
                </button>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollFadeIn key={service.title} delay={index * 0.08}>
              <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col min-h-[440px] hover:shadow-lg transition-all duration-300">
                {/* 3D Icon */}
                <div className="relative w-48 h-48 mb-auto -mt-2 -ml-2">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain object-left-top"
                  />
                </div>

                {/* Content at bottom */}
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-3 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {service.description}
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
