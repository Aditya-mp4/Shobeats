"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BootSequence from "@/components/BootSequence";
import DetectionOverlay from "@/components/DetectionOverlay";
import HeroSystem from "@/components/HeroSystem";
import MusicSystem from "@/components/MusicSystem";
import VisualArchive from "@/components/VisualArchive";
import ExperimentalPanel from "@/components/ExperimentalPanel";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TerminalContact from "@/components/TerminalContact";
import SystemNav from "@/components/SystemNav";
import CustomCursor from "@/components/CustomCursor";
import FloatingWindow from "@/components/FloatingWindow";
import ParallaxYoloFloat from "@/components/ParallaxYoloFloat";
import { social, resumeDownload } from "@/lib/site";


export default function Portfolio() {
  const [bootDone, setBootDone] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBootDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 900px)");
    const apply = () => setFinePointer(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!finePointer) return undefined;
    document.body.classList.add("cursor-system");
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => {
      document.body.classList.remove("cursor-system");
      window.removeEventListener("mousemove", move);
    };
  }, [finePointer]);

  const scrollToId = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {!bootDone && <BootSequence />}

      {bootDone && (
      <>
        <CustomCursor x={cursor.x} y={cursor.y} visible={finePointer} />

      <main className="relative min-h-screen overflow-x-hidden bg-void text-white selection:bg-detect-cyan/25 [perspective:1800px]">
        <a
          href="#music"
          className="fixed left-4 top-4 z-[10002] -translate-y-16 bg-detect-cyan px-4 py-2 font-system text-[11px] uppercase tracking-[0.2em] text-void transition focus:translate-y-0"
        >
          Skip To Content
        </a>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 hidden max-w-[14rem] border border-detect-cyan/20 bg-depth/90 px-4 py-3 shadow-detect backdrop-blur-md md:block"
        >
          <p className="font-system text-[10px] uppercase tracking-[0.28em] text-detect-cyan">
            System Notification
          </p>
          <p className="mt-2 font-system text-xs uppercase tracking-[0.18em] text-white/65">
            Artist signal stable.
          </p>
        </motion.div>

        <SystemNav />
        <DetectionOverlay />

        <div
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.08] bg-grid-tactical bg-grid"
          aria-hidden
        />

        <ParallaxYoloFloat />

        <FloatingWindow
          title="FallenKnight_Player.exe"
          className="fixed right-[4%] top-[14%] z-[15] hidden border-detect-cyan/25 lg:block"
          initialOffset={{ x: 0, y: 0 }}
        >
          <p className="font-system text-xs uppercase tracking-[0.22em] text-detect-cyan">
            Now Playing
          </p>
          <p className="mt-2 text-xl font-bold uppercase leading-tight">Fallen Knight</p>
          <p className="mt-1 font-system text-[10px] uppercase tracking-[0.22em] text-white/40">
            SHOBEATS // SWITCHBORED
          </p>
          <div className="relative mt-5 h-10 overflow-hidden border border-white/10 bg-void/60">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
              className="absolute inset-y-0 w-24 bg-detect-cyan/18 blur-xl"
            />
          </div>
        </FloatingWindow>

        <HeroSystem
          onEnterArchive={() => scrollToId("visuals")}
          onOpenSystems={() => scrollToId("systems")}
        />
        <MusicSystem />
        <VisualArchive />
        <ExperimentalPanel />
        <ExperienceTimeline />
        <TerminalContact />

        <footer className="relative z-20 border-t border-white/10 px-6 py-10 lg:px-16">
          <div className="mb-8 flex items-center justify-end">
            <a
              href={resumeDownload.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/12 bg-depth/85 px-6 py-4 font-system text-[11px] uppercase tracking-[0.28em] text-white/80 shadow-lg backdrop-blur-md transition hover:border-detect-cyan/35 hover:text-detect-cyan md:text-[12px]"
            >
              Download Resume
            </a>
          </div>

          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-2xl font-bold uppercase tracking-tight">SHOBEATS</p>
              <p className="mt-2 font-system text-[11px] uppercase tracking-[0.24em] text-white/38">
                Futuristic audio system // 2026
              </p>
            </div>
            <div className="flex flex-wrap gap-2 font-system text-[11px] uppercase tracking-[0.2em]">
              <a
                href={social.spotifyArtist}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-3 py-2 transition hover:border-detect-cyan"
              >
                Spotify
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-3 py-2 transition hover:border-detect-magenta"
              >
                Instagram
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-3 py-2 transition hover:border-detect-red"
              >
                YouTube
              </a>
              <a
                href={social.soundcloud}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-3 py-2 transition hover:border-white/45"
              >
                SoundCloud
              </a>
            </div>
          </div>
        </footer>
      </main>
      </>
      )}
    </>
  );
}
