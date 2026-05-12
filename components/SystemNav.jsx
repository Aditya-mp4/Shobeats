"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, resumeDownload } from "@/lib/site";

export default function SystemNav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="fixed right-5 top-5 z-50 md:right-6 md:top-6">
      <div className="flex items-center gap-2">
        <a
          href={resumeDownload.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/12 bg-depth/85 px-4 py-2 font-system text-[11px] uppercase tracking-[0.28em] text-white/75 shadow-lg backdrop-blur-md transition hover:border-detect-cyan/35 hover:text-detect-cyan"
        >
          Resume
        </a>


        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-white/12 bg-depth/85 px-4 py-2 font-system text-[11px] uppercase tracking-[0.28em] text-white/75 shadow-lg backdrop-blur-md transition hover:border-detect-cyan/35 hover:text-detect-cyan"
        >
          System
        </button>
      </div>


      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-14 w-56 rounded-2xl border border-white/10 bg-depth/95 p-4 shadow-detect backdrop-blur-xl"
          >
            <ul className="space-y-2 font-system text-[11px] uppercase tracking-[0.22em] text-white/65">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className="w-full rounded-md px-2 py-2 text-left transition hover:bg-detect-cyan/10 hover:text-detect-cyan"
                  >
                    [{String(index + 1).padStart(2, "0")}] {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  );
}

