"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { social } from "@/lib/site";

const links = [
  { label: "Spotify", href: social.spotifyArtist, accent: "text-detect-cyan border-detect-cyan/40 hover:border-detect-cyan" },
  { label: "Instagram", href: social.instagram, accent: "text-detect-magenta border-detect-magenta/40 hover:border-detect-magenta" },
  { label: "YouTube", href: social.youtube, accent: "text-detect-red border-detect-red/35 hover:border-detect-red" },
  { label: "SoundCloud", href: social.soundcloud, accent: "text-white/70 border-white/15 hover:border-white/40" },
  { label: "Email", href: social.email, accent: "text-detect-lime border-detect-lime/35 hover:border-detect-lime" },
];

export default function TerminalContact() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="relative z-20 scroll-mt-8 px-6 pb-24 lg:px-16">
      <div className="relative mx-auto max-w-3xl overflow-hidden border border-white/10 bg-panel/75 p-8 backdrop-blur-md lg:p-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grid-fine bg-grid-sm"
          aria-hidden
        />

        <div className="relative z-10 font-system">
          <p className="text-xs uppercase tracking-[0.34em] text-detect-cyan">Contact Terminal</p>

          <div className="mt-8 space-y-3 text-sm uppercase tracking-[0.18em] text-white/70 md:text-base">
            <p className="text-white/85">Connect to SHOBEATS?</p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="border border-detect-cyan/50 px-4 py-2 text-detect-cyan transition hover:bg-detect-cyan/10"
              >
                [Y] Yes
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="border border-white/15 px-4 py-2 text-white/45 transition hover:border-detect-magenta/40 hover:text-detect-magenta"
              >
                [N] No
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.25 }}
                className="mt-10 grid gap-3 sm:grid-cols-2"
              >
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={l.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className={`border bg-void/40 px-4 py-3 text-center text-xs uppercase tracking-[0.2em] transition ${l.accent}`}
                  >
                    {l.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-10 text-[10px] uppercase tracking-[0.28em] text-white/28">
            SHOBEATS // SIGNAL_ACTIVE // 2026
          </p>
        </div>
      </div>
    </section>
  );
}
