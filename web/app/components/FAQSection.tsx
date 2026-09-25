"use client";

import { ScrollFadeIn } from "./ScrollFadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "How do I get started with Apex Network?",
    answer: "Simply download our app, create an account, verify your identity, and you're ready to start managing your crypto and fiat assets. The process takes less than 5 minutes.",
  },
  {
    question: "Is my crypto really secure?",
    answer: "Yes, we use industry-leading encryption and multi-layer security protocols. Your assets are stored in secure, audited wallets with insurance protection.",
  },
  {
    question: "What are the fees?",
    answer: "We offer transparent, competitive pricing. Most transactions cost less than 1%, with no hidden fees. Check our pricing page for detailed breakdown.",
  },
  {
    question: "Can I use virtual cards globally?",
    answer: "Yes, our virtual cards work at merchants worldwide that accept Mastercard. You can shop online or set up subscriptions in any currency.",
  },
  {
    question: "How fast are transactions?",
    answer: "Crypto transfers are typically confirmed within minutes. Fiat transfers depend on your bank but usually complete within 1-2 business days.",
  },
  {
    question: "Do you support all cryptocurrencies?",
    answer: "We support all major cryptocurrencies including Bitcoin, Ethereum, USDC, and more. Check our full list of supported assets in the app.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <button
                  className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-semibold text-base text-black pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-[#FF7A00] text-white rotate-45" : "bg-gray-100 text-gray-600"}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
