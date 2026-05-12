"use client";

import { motion } from "framer-motion";

const accentRing = {
  cyan: "hover:border-detect-cyan/55",
  magenta: "hover:border-detect-magenta/55",
  lime: "hover:border-detect-lime/55",
  red: "hover:border-detect-red/55",
  violet: "hover:border-purple-400/55",
};

const accentLabel = {
  cyan: "text-detect-cyan",
  magenta: "text-detect-magenta",
  lime: "text-detect-lime",
  red: "text-detect-red",
  violet: "text-purple-300",
};

export default function MusicCard({ track }) {
  const ring = accentRing[track.accent] ?? accentRing.cyan;
  const label = accentLabel[track.accent] ?? accentLabel.cyan;
  const embedH = track.embedHeight ?? 152;
  const isAlbumClip = Boolean(track.embedAlbumClip);

  return (
    <motion.article
      whileHover={{
        y: -8,
        rotateX: 2.2,
        rotateY: -2.2,
        boxShadow:
          "0 28px 56px -18px rgba(0,0,0,0.82), 0 1px 0 rgba(255,255,255,0.06) inset",
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
      className={`group relative flex min-w-0 flex-col border border-white/10 bg-panel/75 p-5 shadow-[0_20px_44px_-22px_rgba(0,0,0,0.72),0_1px_0_rgba(255,255,255,0.05)_inset] backdrop-blur-sm transition-colors ${ring}`}
    >
      <div
        className={`absolute right-3 top-3 font-system text-[10px] uppercase tracking-[0.22em] ${label}`}
      >
        {track.tag}
      </div>

      <div className="relative shrink-0 overflow-hidden rounded-sm shadow-[0_8px_24px_-8px_rgba(0,0,0,0.55)] ring-1 ring-black/40">
        <img
          src={track.art}
          alt={track.title}
          className="mb-5 aspect-square w-full object-cover brightness-[0.92] contrast-110 transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-200 group-hover:opacity-100">
          <div className="absolute left-2 top-2 rounded-sm border border-detect-cyan/50 px-1.5 py-0.5 font-system text-[9px] uppercase tracking-[0.2em] text-detect-cyan">
            DETECTED
          </div>
          <div className="absolute bottom-2 right-2 font-system text-[9px] uppercase tracking-[0.18em] text-white/50">
            CONF: {(88 + track.id.length).toFixed(1)}%
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold uppercase leading-tight tracking-tight">
        {track.title}
      </h3>
      <p className="mt-3 font-system text-[11px] uppercase tracking-[0.2em] text-white/50">
        Role: {track.role}
      </p>

      <div className="mt-5 flex shrink-0 items-center justify-between border-t border-white/10 pt-4 font-system text-[11px] uppercase tracking-[0.18em] text-white/40">
        <span>Signal Lock</span>
        <a
          href={track.spotifyUrl}
          target="_blank"
          rel="noreferrer"
          className="text-white/55 transition hover:text-detect-cyan"
        >
          Spotify ↗
        </a>
      </div>

      {track.embedSrc ? (
        isAlbumClip ? (
          <div
            className="relative mt-4 w-full shrink-0 overflow-hidden rounded-md border border-white/10 bg-[#121212] leading-[0]"
            style={{ height: 268 }}
          >
            <iframe
              title={`Spotify — ${track.title}`}
              className="absolute left-0 top-[-52px] block border-0 md:top-[-56px]"
              style={{
                width: "100%",
                height: embedH,
                display: "block",
                verticalAlign: "top",
              }}
              src={track.embedSrc}
              height={embedH}
              width="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="mt-4 w-full shrink-0 overflow-hidden rounded-md border border-white/10 bg-[#121212] leading-[0]"
            style={{ height: embedH }}
          >
            <iframe
              title={`Spotify — ${track.title}`}
              className="block border-0"
              style={{
                width: "100%",
                height: embedH,
                display: "block",
                verticalAlign: "top",
              }}
              src={track.embedSrc}
              height={embedH}
              width="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        )
      ) : (
        <div className="mt-4 shrink-0 border border-white/10 bg-void/80 p-3 font-system text-[10px] uppercase leading-relaxed tracking-[0.2em] text-white/40">
          Embed pending — open Spotify link for full stream.
        </div>
      )}
    </motion.article>
  );
}
