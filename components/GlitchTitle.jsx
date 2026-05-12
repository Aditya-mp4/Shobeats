"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";

/**
 * Hero lockup: SHO solid / BEATS gradient fade + tactical accents (reference layout).
 */
export default function GlitchTitle({ className = "" }) {
  const [skew, setSkew] = useState(0);

  const glitch = useCallback(() => {
    setSkew((Math.random() - 0.5) * 2.4);
    setTimeout(() => setSkew(0), 85);
  }, []);

  return (
    <div className={`relative inline-block max-w-full ${className}`}>
      <div
        className="pointer-events-none absolute -left-1 top-1/2 z-[2] hidden -translate-y-1/2 items-center gap-1.5 sm:flex md:-left-1"
        aria-hidden
      >
        <span className="h-2 w-2 shrink-0 rounded-full border border-detect-lime/60 bg-[radial-gradient(circle_at_30%_30%,#22d3ee_0%,transparent_55%)] shadow-[0_0_12px_rgba(34,211,238,0.35)]" />
        <span className="h-px w-4 bg-detect-cyan/45" />
      </div>

      <div
        className="pointer-events-none absolute left-[34%] top-[8%] z-0 h-[92%] w-px bg-detect-cyan/40 mix-blend-screen md:left-[36%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[4%] top-0 z-0 h-full w-px bg-detect-cyan/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[52%] top-[12%] z-0 h-[78%] w-px bg-detect-magenta/25"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-[30%] top-1/2 z-0 h-[min(72%,14rem)] w-[min(58%,22rem)] -translate-y-1/2 rounded-full bg-white/[0.14] blur-[48px] md:blur-[72px]"
        aria-hidden
      />

      <motion.h1
        onMouseEnter={glitch}
        className="relative z-[1] cursor-default select-none font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.09em] md:text-8xl lg:text-[9rem]"
        style={{ transform: `skewX(${skew}deg)` }}
      >
        <span className="text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.08)]">SHO</span>
        <span
          className="bg-gradient-to-r from-neutral-200 via-neutral-500 to-[#050505] bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          BEATS
        </span>
      </motion.h1>
    </div>
  );
}
