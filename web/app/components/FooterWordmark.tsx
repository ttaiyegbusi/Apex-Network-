"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const FONT_SIZE = 580;
const FONT_WEIGHT = 700;
const LETTER_SPACING = -0.03; // em, matches the rest of the type scale
const DURATION = 1.1; // seconds per letter
const STAGGER = 0.16; // delay between letters

type Glyph = { char: string; x: number; width: number };

/**
 * Oversized footer wordmark: light fill with a dashed outline, scaled to fill
 * the container. Each letter slides up into place, staggered, whenever the
 * footer scrolls into view.
 *
 * Rendered as SVG because `stroke-dasharray` is the only way to get a dashed
 * outline on type — CSS `-webkit-text-stroke` is solid only.
 */
export function FooterWordmark({ text = "Apex" }: { text?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const [glyphs, setGlyphs] = useState<Glyph[]>([]);
  const [totalWidth, setTotalWidth] = useState(0);

  // Measure each glyph so letters can be clipped and animated individually
  // while keeping the natural advance widths of the real font.
  useEffect(() => {
    let cancelled = false;

    const measure = () => {
      if (cancelled) return;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const family = getComputedStyle(document.body).fontFamily;
      ctx.font = `${FONT_WEIGHT} ${FONT_SIZE}px ${family}`;

      const tracking = LETTER_SPACING * FONT_SIZE;
      let x = 0;
      const next: Glyph[] = [];
      for (const char of text.split("")) {
        const width = ctx.measureText(char).width + tracking;
        next.push({ char, x, width });
        x += width;
      }
      setGlyphs(next);
      setTotalWidth(x - tracking); // trailing tracking isn't part of the mark
    };

    // wait for Inter so the measurement matches what actually renders
    if (document.fonts?.status === "loaded") measure();
    else document.fonts?.ready.then(measure).catch(measure);

    return () => {
      cancelled = true;
    };
  }, [text]);

  // Crop the descender area slightly so the mark bleeds off the page bottom.
  const viewHeight = FONT_SIZE * 0.78;
  const baseline = FONT_SIZE * 0.74;

  return (
    <div ref={ref} aria-hidden="true" className="select-none pointer-events-none mt-16">
      {totalWidth > 0 && (
        <svg
          viewBox={`0 0 ${totalWidth} ${viewHeight}`}
          preserveAspectRatio="xMidYMax meet"
          className="block w-full h-auto overflow-hidden"
        >
          <defs>
            {glyphs.map((g, i) => (
              <clipPath key={`clip-${i}`} id={`wordmark-clip-${i}`}>
                <rect x={g.x} y={0} width={g.width} height={viewHeight} />
              </clipPath>
            ))}
          </defs>

          {glyphs.map((g, i) => (
            <g key={`${g.char}-${i}`} clipPath={`url(#wordmark-clip-${i})`}>
              <text
                x={g.x}
                y={baseline}
                fontSize={FONT_SIZE}
                fontWeight={FONT_WEIGHT}
                fill="var(--color-gray-50)"
                stroke="var(--color-gray-300)"
                strokeWidth={2}
                strokeDasharray="14 10"
                style={{
                  fontFamily: "inherit",
                  transform: inView ? "translateY(0)" : "translateY(110%)",
                  transition: `transform ${DURATION}s cubic-bezier(0.65, 0, 0.35, 1)`,
                  transitionDelay: inView ? `${i * STAGGER}s` : "0s",
                  willChange: "transform",
                }}
              >
                {g.char}
              </text>
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}
