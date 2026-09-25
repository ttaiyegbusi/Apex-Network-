"use client";

import { ScrollFadeIn } from "./ScrollFadeIn";

const services = [
  {
    title: "Bills",
    description: "Pay your everyday bills quickly, timely and securely, all from one place.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="billsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB366" />
            <stop offset="100%" stopColor="#FF7A00" />
          </linearGradient>
        </defs>
        <rect x="15" y="55" width="50" height="12" rx="2" fill="#E5E7EB" />
        <rect x="15" y="60" width="50" height="8" rx="2" fill="url(#billsGrad)" />
        <rect x="22" y="20" width="30" height="38" rx="3" fill="#FFF" stroke="#FFB366" strokeWidth="1"/>
        <rect x="22" y="20" width="30" height="38" rx="3" fill="url(#billsGrad)" opacity="0.9"/>
        <path d="M32 30 L36 34 L30 40 L40 40 L36 44" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="52" cy="30" r="6" fill="#FF7A00" stroke="#FFF" strokeWidth="1.5"/>
        <text x="52" y="33" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "Virtual Cards",
    description: "Make secure online payments with a virtual card built for everyday spending.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="cardsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB366" />
            <stop offset="100%" stopColor="#FF7A00" />
          </linearGradient>
        </defs>
        <rect x="15" y="55" width="50" height="12" rx="2" fill="#E5E7EB" />
        <rect x="15" y="60" width="50" height="8" rx="2" fill="url(#cardsGrad)" />
        <rect x="18" y="30" width="42" height="28" rx="4" fill="url(#cardsGrad)"/>
        <rect x="22" y="35" width="10" height="6" rx="1" fill="#FFD700" opacity="0.8"/>
        <text x="24" y="52" fontSize="4" fill="white">1234 7890</text>
        <circle cx="52" cy="47" r="4" fill="#FF5500" opacity="0.7"/>
        <circle cx="56" cy="47" r="4" fill="#FFD700" opacity="0.7"/>
      </svg>
    ),
  },
  {
    title: "Requests",
    description: "Send, track, and manage payment requests without unnecessary steps.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="reqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB366" />
            <stop offset="100%" stopColor="#FF7A00" />
          </linearGradient>
        </defs>
        <rect x="15" y="55" width="50" height="12" rx="2" fill="#E5E7EB" />
        <rect x="15" y="60" width="50" height="8" rx="2" fill="url(#reqGrad)" />
        <rect x="20" y="22" width="35" height="35" rx="3" fill="url(#reqGrad)"/>
        <circle cx="28" cy="32" r="3" fill="white"/>
        <rect x="34" y="30" width="15" height="1.5" rx="0.5" fill="white"/>
        <rect x="34" y="34" width="10" height="1.5" rx="0.5" fill="white"/>
        <rect x="24" y="42" width="20" height="1.5" rx="0.5" fill="white"/>
        <rect x="24" y="47" width="14" height="1.5" rx="0.5" fill="white"/>
        <circle cx="52" cy="52" r="8" fill="#FFF"/>
        <path d="M46 52 L58 46 L54 52 L58 58 Z" fill="#FF7A00"/>
      </svg>
    ),
  },
  {
    title: "Gift cards",
    description: "Buy and send digital gift cards for your favorite brands, all in one place.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="giftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB366" />
            <stop offset="100%" stopColor="#FF7A00" />
          </linearGradient>
        </defs>
        <rect x="15" y="55" width="50" height="12" rx="2" fill="#E5E7EB" />
        <rect x="15" y="60" width="50" height="8" rx="2" fill="url(#giftGrad)" />
        <rect x="18" y="28" width="28" height="30" rx="3" fill="url(#giftGrad)"/>
        <text x="21" y="38" fontSize="5" fill="white" fontWeight="bold">Gift</text>
        <text x="21" y="45" fontSize="5" fill="white" fontWeight="bold">Card</text>
        <circle cx="38" cy="34" r="2" fill="white"/>
        <rect x="46" y="35" width="18" height="23" rx="2" fill="#FFF" stroke="#FF7A00" strokeWidth="1"/>
        <path d="M55 30 Q52 25 48 27 Q47 30 55 34 Q63 30 62 27 Q58 25 55 30 Z" fill="#FF7A00"/>
        <rect x="46" y="42" width="18" height="2" fill="#FF7A00"/>
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20 items-start">
          <ScrollFadeIn>
            <div>
              <p className="text-gray-500 text-sm mb-4">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Apex network is the platform for financial transactions at scale.
              </h2>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <div className="flex flex-col items-start md:items-end gap-6 md:pt-4">
              <p className="text-gray-500 md:text-right max-w-md">
                Financial solutions specially tailored to your personal and business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-black text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-900 transition">
                  Get Started
                </button>
                <button className="bg-white text-black border border-gray-200 px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-50 transition">
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
              <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 min-h-[320px]">
                <div style={{ width: '80px', height: '80px' }} className="flex-shrink-0 mb-8">
                  {service.icon}
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-bold mb-3 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
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
