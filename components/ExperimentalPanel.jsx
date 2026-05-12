"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";

const aiTopics = [
  "Suno AI & generative stems",
  "AI-assisted composition workflows",
  "Prompt engineering as instrumentation",
  "Human-in-the-loop arrangement",
];

export default function ExperimentalPanel() {
  const videoRef = useRef(null);

  const handlePointerEnter = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    try {
      await v.play();
    } catch {
      v.muted = true;
      try {
        await v.play();
      } catch {
        /* ignore */
      }
    }
  }, []);

  const handlePointerLeave = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.muted = true;
    try {
      v.currentTime = 0;
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <section id="systems" className="relative z-20 scroll-mt-8 px-6 pb-28 lg:px-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-white/10 bg-panel/70 p-8 shadow-[0_28px_70px_-36px_rgba(0,0,0,0.88),0_1px_0_rgba(255,255,255,0.06)_inset] ring-1 ring-white/[0.04] backdrop-blur-md transition-transform duration-500 hover:-translate-y-0.5 lg:p-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09] bg-grid-fine bg-grid-sm"
          aria-hidden
        />

        <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 font-system text-xs uppercase tracking-[0.34em] text-detect-lime">
              Experimental Systems // Primary
            </p>
            <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight lg:text-6xl">
              Gesture
              <br />
              Controlled
              <br />
              Music
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/68 md:text-base">
              Realtime gesture-controlled music interaction — motion input, audio routing, and
              performance-oriented UI. Laboratory build: tracking overlays, session capture, and
              tactile control metaphors.
            </p>
            <ul className="mt-8 space-y-2 font-system text-[11px] uppercase tracking-[0.2em] text-white/48">
              <li>Input: Hand / pose tracking</li>
              <li>Output: MIDI + audio control bus</li>
              <li>Status: Build channel open</li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-detect-lime/35 bg-void/60 shadow-[0_22px_50px_-24px_rgba(0,0,0,0.78),0_0_0_1px_rgba(163,230,53,0.12)_inset] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-22px_rgba(0,0,0,0.82)]">
            <div
              className="group relative aspect-video w-full cursor-pointer outline-none"
              tabIndex={0}
              onMouseEnter={handlePointerEnter}
              onMouseLeave={handlePointerLeave}
              onFocus={handlePointerEnter}
              onBlur={handlePointerLeave}
              role="presentation"
            >
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src="/assets/gesture-demo.mp4"
                poster="/assets/gesture-thumb.png"
                loop
                playsInline
                muted
                preload="auto"
              />
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-detect-lime/10 via-transparent to-detect-cyan/5"
                animate={{ opacity: [0.5, 0.85, 0.5] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
              />
              <motion.div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-detect-lime/50"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "linear" }}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="rounded-full border border-detect-lime/50 bg-void/80 px-3 py-1.5 font-system text-[10px] uppercase tracking-[0.2em] text-detect-lime">
                  Audio on
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-5 border border-detect-lime/40" />
            <div className="absolute left-3 top-3 border border-detect-lime/50 bg-void/90 px-2.5 py-1 font-system text-[10px] uppercase tracking-[0.2em] text-detect-lime">
              Lab Feed // Demo.mp4
            </div>
            <div className="absolute bottom-3 right-3 max-w-[16rem] border border-white/10 bg-void/85 p-2 font-system text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white/45">
              Hover (or focus) the frame — video plays with sound. Keio KMD gesture session.
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mt-14 border border-white/10 bg-depth/80 p-6 lg:p-8"
        >
          <p className="font-system text-xs uppercase tracking-[0.34em] text-detect-magenta">
            Secondary Exploration // AI Music Lab
          </p>
          <h3 className="mt-3 text-2xl font-bold uppercase tracking-tight lg:text-3xl">
            AI Music Experiments
          </h3>
          <ul className="mt-6 grid gap-3 font-system text-[11px] uppercase tracking-[0.18em] text-white/55 md:grid-cols-2">
            {aiTopics.map((t) => (
              <li
                key={t}
                className="border border-white/8 bg-void/50 px-3 py-2 text-white/60"
              >
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
