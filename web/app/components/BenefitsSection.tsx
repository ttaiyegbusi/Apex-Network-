"use client";

import { ScrollFadeIn } from "./ScrollFadeIn";

const benefits = [
  {
    title: "Reliable Transfers",
    description: "It's your money and it's our responsibility to keep it safe and protected for you.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="reliableGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="20" height="20" rx="3" fill="url(#reliableGrad)"/>
        <path d="M15 22 L20 17 L25 22 M20 17 L20 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 27 L22 27" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Maximum Security",
    description: "It's your money and it's our responsibility to keep it safe and protected for you.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
        <path d="M20 8 L12 12 L12 20 Q12 27 20 32 Q28 27 28 20 L28 12 Z" fill="url(#secGrad)"/>
        <path d="M20 15 L21 18 L24 18 L21.5 20 L22.5 23 L20 21 L17.5 23 L18.5 20 L16 18 L19 18 Z" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Continuous Customer Support",
    description: "We always put you first and work round-the-clock to support your needs.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="supportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="16" r="6" fill="url(#supportGrad)"/>
        <path d="M8 32 Q8 24 20 24 Q32 24 32 32" fill="url(#supportGrad)"/>
        <circle cx="30" cy="12" r="3" fill="#FFB800"/>
        <path d="M30 10 L30.5 11.5 L32 11.5 L30.75 12.5 L31.25 14 L30 13 L28.75 14 L29.25 12.5 L28 11.5 L29.5 11.5 Z" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Instant Transactions",
    description: "It's your money and it's our responsibility to keep it safe and protected for you.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="instantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="12" fill="url(#instantGrad)"/>
        <path d="M22 10 L14 22 L19 22 L17 30 L26 17 L21 17 Z" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Low Cost",
    description: "We always put you first and work round-the-clock to support your needs.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="costGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
        <ellipse cx="20" cy="16" rx="12" ry="4" fill="url(#costGrad)"/>
        <path d="M8 16 L8 22 Q8 26 20 26 Q32 26 32 22 L32 16" fill="url(#costGrad)"/>
        <ellipse cx="20" cy="22" rx="12" ry="4" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "We always put you first and work round-the-clock to support your needs.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="supp24Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
        <path d="M12 22 L12 18 Q12 10 20 10 Q28 10 28 18 L28 22" fill="none" stroke="url(#supp24Grad)" strokeWidth="2"/>
        <rect x="8" y="20" width="6" height="10" rx="2" fill="url(#supp24Grad)"/>
        <rect x="26" y="20" width="6" height="10" rx="2" fill="url(#supp24Grad)"/>
      </svg>
    ),
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
              <div className="bg-white rounded-2xl p-8 h-full min-h-[220px] flex flex-col hover:shadow-lg transition-all duration-300 relative">
                {/* Icon in top right corner */}
                <div style={{ width: '56px', height: '56px' }} className="absolute top-6 right-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <div style={{ width: '28px', height: '28px' }}>
                    {benefit.icon}
                  </div>
                </div>

                {/* Content at bottom */}
                <div className="mt-auto pt-16">
                  <h3 className="text-lg font-bold mb-3 text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
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
