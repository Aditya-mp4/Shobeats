"use client";

import { motion } from "framer-motion";
import { visualArchive } from "@/lib/site";

const spanClass = {
  hero: "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2",
  wide: "col-span-1 sm:col-span-2",
  sm: "col-span-1",
};

export default function VisualArchive() {
  return (
    <section id="visuals" className="relative z-20 scroll-mt-8 px-6 pb-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px w-14 bg-detect-magenta/80" />
          <p className="font-system text-sm uppercase tracking-[0.32em] text-white/45">
            Visual Archive
          </p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-4">
          {visualArchive.map((item, i) => (
            <motion.div
              key={item.src + i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden border border-white/10 bg-depth/80 ${spanClass[item.span] ?? spanClass.sm}`}
            >
              <img
                src={item.src}
                alt=""
                className="h-full w-full object-cover brightness-[0.9] transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-3 border border-detect-cyan/0 transition duration-300 group-hover:border-detect-cyan/35" />
              <div className="absolute bottom-3 left-3 font-system text-[10px] uppercase tracking-[0.22em] text-white/55">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
