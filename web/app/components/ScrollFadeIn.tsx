"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function ScrollFadeIn({
  children,
  delay = 0,
  duration = 0.6,
}: ScrollFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
