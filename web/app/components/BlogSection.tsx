"use client";

import { useRef } from "react";
import { ScrollFadeIn } from "./ScrollFadeIn";

const posts = [
  {
    title: "Introducing Apex Network",
    excerpt:
      "It's your money and it's our responsibility to keep it safe and protected for you.",
    date: "April 11, 2021",
  },
  {
    title: "How to sell a gift card on Apex.",
    excerpt:
      "From upload to payout: what to do, how long it takes, and how to avoid a rejected trade.",
    date: "April 10, 2021",
  },
  {
    title: "5 gift card scams to watch out for",
    excerpt:
      "Spot fake buyers, used codes and phishing messages before they cost you.",
    date: "April 9, 2021",
  },
  {
    title: "USDT vs BTC: which should you hold?",
    excerpt:
      "A plain-English look at what each is best for, volatility and when to swap.",
    date: "April 8, 2021",
  },
];

export function BlogSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const amount = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="page-container">
        <ScrollFadeIn>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-p-sm text-gray-500 mb-3">Blogs and Stories</p>
              <h2 className="text-h4 md:text-h3 lg:text-h2 text-black">
                Learn, trade smarter, stay safe
              </h2>
            </div>

            <div className="hidden sm:flex gap-3 flex-shrink-0 pb-2">
              <button
                onClick={() => scroll("prev")}
                aria-label="Previous posts"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-black transition"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 4L6 8L10 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("next")}
                aria-label="Next posts"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-black transition"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </ScrollFadeIn>

        <div
          ref={trackRef}
          className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: "none" }}
        >
          {posts.map((post) => (
            <article
              key={post.title}
              className="snap-start flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[300px] cursor-pointer"
            >
              {/* Thumbnail */}
              <div
                className="w-full h-44 rounded-2xl mb-4 overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-orange-300) 0%, var(--color-orange-400) 45%, var(--color-primary) 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                  }}
                />
              </div>

              <h3 className="text-h6 text-black mb-2">
                {post.title}
              </h3>
              <p className="text-p-sm text-gray-500 mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <p className="text-p-sm text-gray-400">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
