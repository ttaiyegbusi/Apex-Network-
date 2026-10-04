"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { CarouselArrows } from "./CarouselArrows";
import { useCarousel } from "./useCarousel";

type Testimonial = {
  name: string;
  location: string;
  quote?: string;
  photo?: string;
  gradient: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John",
    location: "Lagos, Nigeria",
    quote:
      "I can move money, pay bills, and manage everything from one app. It just makes things simpler.",
    gradient: "linear-gradient(145deg, #6B5B4F 0%, #3D3430 100%)",
  },
  {
    name: "Bolatito",
    location: "Lagos, Nigeria",
    gradient: "linear-gradient(145deg, #C9A227 0%, #6B5410 100%)",
  },
  {
    name: "Christopher",
    location: "Nairobi, Kenya",
    gradient: "linear-gradient(145deg, #8B4513 0%, #3A1D08 100%)",
  },
];

/** Ratio of an expanded panel to a collapsed one, measured from the design (514px : 248px). */
const EXPANDED_GROW = 2.07;

// Panels glide in from the right, one after another. These mirror the service
// cards in ServicesSection so the two sections read as the same gesture — keep
// them in step if either set is retuned.
const CARD_SHIFT = 90;        // px each card travels
const CARD_DURATION = 0.85;   // long enough to read as deliberate, not snappy
const CARD_STAGGER = 0.12;    // gap between consecutive cards
const CARD_EASE = [0.22, 1, 0.36, 1] as const; // easeOutQuint: quick start, soft landing

function TestimonialCard({
  testimonial,
  expanded,
}: {
  testimonial: Testimonial;
  expanded: boolean;
}) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden h-full w-full"
      style={{ background: testimonial.gradient }}
    >
      {testimonial.photo && (
        <Image
          src={testimonial.photo}
          alt={testimonial.name}
          fill
          className="object-cover object-top"
        />
      )}

      {/* scrim so the caption stays legible over any photo */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-label-lg whitespace-nowrap">{testimonial.name}</p>
        <p className="text-p-sm text-white/70 mt-0.5 whitespace-nowrap">
          {testimonial.location}
        </p>

        {testimonial.quote && (
          // 0fr -> 1fr animates the height without needing a fixed value
          <div
            className={`grid transition-all duration-500 ease-out ${
              expanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <p className="overflow-hidden text-p-md text-white/95 max-w-md">
              {testimonial.quote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const { trackRef, scrollPrev, scrollNext } = useCarousel();
  const [active, setActive] = useState(0);

  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: false, margin: "-12%" });
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-white">
      <div className="page-container">
        <ScrollFadeIn>
          <div className="text-center mb-14">
            <p className="text-p-sm text-gray-500 mb-3">Customer Stories</p>
            <h2 className="text-h4 md:text-h3 lg:text-h2 text-black mb-4">
              Trusted by over 35,000 users
            </h2>
            <p className="text-p-md text-gray-500 max-w-xl mx-auto">
              Thousands of people trade on Apex every day. Here&apos;s what some of them say.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Desktop / tablet: panels that expand on hover */}
        <div className="hidden md:block">
          <div ref={rowRef} className="flex gap-5 h-[400px] lg:h-[440px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                aria-label={`${testimonial.name}, ${testimonial.location}`}
                className="relative min-w-0 cursor-pointer rounded-2xl transition-[flex-grow] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{ flexGrow: active === index ? EXPANDED_GROW : 1, flexBasis: 0 }}
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
                <TestimonialCard testimonial={testimonial} expanded={active === index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: swipeable carousel — there is no hover on touch */}
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-5 scroll-pl-5 md:hidden"
        >
          {testimonials.map((testimonial, index) => (
            <ScrollFadeIn
              key={testimonial.name}
              delay={index * 0.1}
              className={`snap-start shrink-0 ${index === 0 ? "w-[72%]" : "w-[55%]"}`}
            >
              <div className="h-[340px]">
                <TestimonialCard testimonial={testimonial} expanded={index === 0} />
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <CarouselArrows
          onPrev={scrollPrev}
          onNext={scrollNext}
          className="md:hidden justify-center mt-8"
        />
      </div>
    </section>
  );
}
