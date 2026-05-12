"use client";

import { motion } from "framer-motion";

export default function FloatingWindow({
  title,
  children,
  className = "",
  initialOffset = { x: 0, y: 0 },
}) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ scale: 1.02 }}
      initial={{ opacity: 0, ...initialOffset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`z-40 w-[min(92vw,18rem)] cursor-grab select-none border border-white/12 bg-depth/90 shadow-detect backdrop-blur-md active:cursor-grabbing md:w-72 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 font-system text-[10px] uppercase tracking-[0.22em] text-white/45">
        <span className="truncate">{title}</span>
        <span className="shrink-0 pl-2">— □ ×</span>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  );
}
