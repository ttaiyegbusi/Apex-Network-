"use client";

import { useState } from "react";
import { ScrollFadeIn } from "./ScrollFadeIn";

const categories = [
  "All",
  "Account & Security",
  "Deposit & Wallets",
  "Technical Support",
] as const;

type Category = (typeof categories)[number];

const faqs: { question: string; answer: string; category: Exclude<Category, "All"> }[] = [
  {
    question: "Are there hidden fees?",
    answer:
      "No. We believe in transparent pricing. Any applicable fees are clearly displayed before you confirm a transaction, so you always know exactly what you'll pay. There are no surprise charges.",
    category: "Deposit & Wallets",
  },
  {
    question: "How do I report a transaction I don't recognize?",
    answer:
      "Open the transaction from your history and tap Report. Our team reviews every report and will get back to you, usually within a few hours.",
    category: "Account & Security",
  },
  {
    question: "How do I enable two-factor authentication?",
    answer:
      "Go to Settings, then Security, and turn on Two-Factor Authentication. You can use an authenticator app or SMS. We strongly recommend an authenticator app.",
    category: "Account & Security",
  },
  {
    question: "How do I secure my account?",
    answer:
      "Use a strong, unique password, turn on two-factor authentication, and never share your login details or one-time codes with anyone, including anyone claiming to be Apex support.",
    category: "Account & Security",
  },
  {
    question: "How long do transactions take?",
    answer:
      "Crypto transfers usually confirm within minutes. Naira payouts typically land in your bank account within 5 to 10 minutes, depending on your bank.",
    category: "Deposit & Wallets",
  },
  {
    question: "How do I fund my virtual card?",
    answer:
      "Open the Cards tab, select your virtual card, and tap Fund. You can top up from your Naira balance or any crypto wallet in your account.",
    category: "Technical Support",
  },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const visible =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <ScrollFadeIn className="lg:col-span-5">
            <div
              className="w-16 h-16 rounded-full mb-8 flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, var(--color-orange-200) 0%, var(--color-orange-400) 55%, var(--color-primary) 100%)",
              }}
            >
              <span className="text-white text-h5">?</span>
            </div>
            <p className="text-p-sm text-gray-500 mb-4">FAQ</p>
            <h2 className="text-h4 md:text-h3 text-black">
              Questions you&apos;re probably thinking about. We Answer them all
            </h2>
          </ScrollFadeIn>

          {/* Right column */}
          <ScrollFadeIn delay={0.1} className="lg:col-span-7">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-6 bg-gray-50 p-1.5 rounded-full w-fit">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-p-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-white text-black shadow-sm"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="bg-gray-50 rounded-2xl p-2">
              {visible.length === 0 && (
                <p className="text-p-sm text-gray-500 p-6">
                  No questions in this category yet.
                </p>
              )}

              {visible.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-xl transition-colors ${
                      isOpen ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <button
                      className="w-full flex justify-between items-center gap-4 p-5 text-left"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-p-md font-medium text-black">
                        {faq.question}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 -mt-1 text-p-md text-gray-500">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
