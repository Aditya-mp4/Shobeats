"use client";

import MusicCard from "@/components/MusicCard";
import { featuredTracks } from "@/lib/site";

export default function MusicSystem() {
  return (
    <section id="music" className="relative z-20 scroll-mt-8 px-6 pb-28 lg:px-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px w-14 bg-detect-cyan/80" />
          <p className="font-system text-sm uppercase tracking-[0.32em] text-white/45">
            Music System
          </p>
        </div>

        <div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1400px" }}
        >
          {featuredTracks.map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}
