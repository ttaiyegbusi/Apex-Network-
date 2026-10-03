"use client";

import { useRef } from "react";

/** Horizontal scroll track that advances one card per arrow press. */
export function useCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const amount = card ? card.offsetWidth + gap : track.clientWidth * 0.8;
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return { trackRef, scrollPrev: () => scrollBy("prev"), scrollNext: () => scrollBy("next") };
}
