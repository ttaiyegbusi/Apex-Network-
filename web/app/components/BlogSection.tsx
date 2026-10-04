"use client";

import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { CarouselArrows } from "./CarouselArrows";
import { useCarousel } from "./useCarousel";

// One thumbnail export was supplied, so every post points at it for now. The field
// is per-post, so dropping in individual artwork later is a one-line change each.
const THUMBNAIL = "/blog/thumbnail.png";

const posts = [
  {
    title: "Introducing Apex Network",
    excerpt:
      "It's your money and it's our responsibility to keep it safe and protected for you.",
    date: "April 11, 2021",
    image: THUMBNAIL,
  },
  {
    title: "How to sell a gift card on Apex.",
    excerpt:
      "From upload to payout: what to do, how long it takes, and how to avoid a rejected trade.",
    date: "April 10, 2021",
    image: THUMBNAIL,
  },
  {
    title: "5 gift card scams to watch out for",
    excerpt:
      "Spot fake buyers, used codes and phishing messages before they cost you.",
    date: "April 9, 2021",
    image: THUMBNAIL,
  },
  {
    title: "USDT vs BTC: which should you hold?",
    excerpt:
      "A plain-English look at what each is best for, volatility and when to swap.",
    date: "April 8, 2021",
    image: THUMBNAIL,
  },
];

export function BlogSection() {
  const { trackRef, scrollPrev, scrollNext } = useCarousel();

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

            <CarouselArrows onPrev={scrollPrev} onNext={scrollNext} className="shrink-0 pb-2" />
          </div>
        </ScrollFadeIn>

        <div
          ref={trackRef}
          className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-5 scroll-pl-5 lg:mx-0 lg:px-0 lg:scroll-pl-0"
          style={{ scrollbarWidth: "none" }}
        >
          {posts.map((post) => (
            <article
              key={post.title}
              className="snap-start shrink-0 w-[88%] sm:w-[300px] cursor-pointer"
            >
              {/* Thumbnail. The artwork is abstract and carries no information the
                  title doesn't already give, so it's decorative: alt is empty.
                  `unoptimized` because its rounded corners are transparent, and the
                  image optimizer flattens alpha to opaque white. */}
              <div className="w-full h-44 rounded-2xl mb-4 overflow-hidden relative">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  unoptimized
                  sizes="(min-width: 640px) 300px, 88vw"
                  className="object-cover"
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
