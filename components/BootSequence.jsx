"use client";

import { motion } from "framer-motion";

export default function BootSequence() {
  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center overflow-hidden bg-void text-detect-cyan font-system">
      <div
        className="absolute inset-0 opacity-[0.12] bg-grid-fine bg-grid-sm"
        aria-hidden
      />

      <div className="relative z-10 px-6 text-left text-xs uppercase leading-[2.4] tracking-[0.28em] md:text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
            BOOTING AUDIO SYSTEM...
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            SCANNING SIGNAL...
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-detect-magenta"
          >
            ARTIST DETECTED.
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-8 font-system text-[10px] uppercase tracking-[0.32em] text-white/25">
        SYS_INIT // 01
      </div>
    </div>
  );
}
