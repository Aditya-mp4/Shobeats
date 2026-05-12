"use client";

import { motion } from "framer-motion";
import GlitchTitle from "@/components/GlitchTitle";

export default function HeroSystem({ onEnterArchive, onOpenSystems }) {
  return (
    <section className="relative z-20 flex min-h-screen items-center justify-center px-6 lg:px-16">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: "linear" }}
        className="absolute left-6 top-24 z-30 rounded-full border border-detect-cyan/25 bg-depth/90 px-3 py-2 font-system text-[10px] uppercase tracking-[0.32em] text-detect-cyan/90 shadow-detect md:left-10"
      >
        SIGNAL_ACTIVE
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 4.6, ease: "linear" }}
        className="absolute bottom-20 right-6 z-30 rounded-full border border-detect-magenta/25 bg-depth/90 px-3 py-2 font-system text-[10px] uppercase tracking-[0.32em] text-detect-magenta/90 shadow-detect-magenta md:right-12"
      >
        AUDIO_ENTITY
      </motion.div>

      <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-30"
        >
          <p className="mb-5 font-system text-[11px] uppercase tracking-[0.38em] text-white/45">
            Signal Detected // Artist Lock
          </p>

          <GlitchTitle />

          <div className="mt-8 space-y-2 font-system text-xs uppercase tracking-[0.22em] text-white/65 md:text-sm">
            <motion.div
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ repeat: Infinity, duration: 2.1, ease: "linear" }}
              className="flex items-center gap-2 text-detect-cyan"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-detect-cyan" />
              Live Channel Open
            </motion.div>
            <div>Vocalist // Producer // AI Artist</div>
            <div className="text-white/50">Active Since 2018</div>
            <div className="text-white/50">FL Studio // Creative Systems</div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={onEnterArchive}
              className="border border-detect-cyan/60 bg-detect-cyan/10 px-6 py-3 font-system text-xs uppercase tracking-[0.22em] text-detect-cyan transition hover:bg-detect-cyan/15"
            >
              Enter Archive
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={onOpenSystems}
              className="border border-white/15 bg-panel/60 px-6 py-3 font-system text-xs uppercase tracking-[0.22em] text-white/75 transition hover:border-detect-cyan/35 hover:text-detect-cyan"
            >
              Open Systems
            </motion.button>
          </div>
        </motion.div>

        <div className="relative z-20 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] w-[min(92vw,280px)] overflow-hidden border border-white/10 bg-panel/50 shadow-[0_28px_60px_-28px_rgba(0,0,0,0.75),0_1px_0_rgba(255,255,255,0.06)_inset] ring-1 ring-white/[0.05] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_36px_72px_-28px_rgba(0,0,0,0.82)] md:w-[420px] lg:w-[min(44vw,500px)]"
          >
            <img
              src="/assets/site/profile-hero.png"
              alt="SHOBEATS performance portrait"
              className="h-full w-full object-cover object-[58%_center] brightness-[0.88] contrast-110"
            />

            <div className="pointer-events-none absolute inset-5 border border-detect-cyan/55" />

            <div className="absolute left-3 top-3 border border-detect-cyan/80 bg-void/85 px-2.5 py-1 font-system text-[10px] uppercase tracking-[0.2em] text-detect-cyan">
              Vocalist 98%
            </div>

            <div className="absolute bottom-3 right-3 border border-detect-magenta/70 bg-void/85 px-2.5 py-1 font-system text-[10px] uppercase tracking-[0.2em] text-detect-magenta">
              Audio Entity
            </div>

            <div className="absolute bottom-3 left-3 font-system text-[10px] leading-relaxed tracking-[0.14em] text-white/35">
              X: 102.332
              <br />
              Y: 442.912
              <br />
              STATUS: ACTIVE
            </div>

            <motion.div
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ repeat: Infinity, duration: 1.9, ease: "linear" }}
              className="pointer-events-none absolute left-3 top-12 h-8 w-8 border-l border-t border-detect-cyan"
            />
            <motion.div
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
              className="pointer-events-none absolute bottom-12 right-3 h-8 w-8 border-b border-r border-detect-magenta"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
