"use client";

import { motion } from "framer-motion";

export default function CustomCursor({ x, y, visible }) {
  if (!visible) return null;

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10050] h-2 w-2 rounded-full bg-detect-cyan shadow-[0_0_10px_rgba(34,211,238,0.95)] ring-1 ring-white/40"
        style={{
          transform: `translate(${x - 4}px, ${y - 4}px)`,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10049] h-5 w-5 rounded-full border-2 border-detect-cyan/90 bg-black/30 shadow-[0_0_16px_rgba(34,211,238,0.5),0_0_0_1px_rgba(0,0,0,0.6)_inset]"
        animate={{ x: x - 10, y: y - 10 }}
        transition={{ type: "spring", stiffness: 900, damping: 44, mass: 0.1 }}
      />
    </>
  );
}
