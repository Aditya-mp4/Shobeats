"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DetectionOverlay({ className = "" }) {
  const [size, setSize] = useState({ w: 1440, h: 900 });

  useEffect(() => {
    const onResize = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const w = Math.max(size.w, 320);
  const h = Math.max(size.h, 320);

  return (
    <svg
      className={`pointer-events-none fixed inset-0 z-[5] hidden opacity-[0.36] lg:block ${className}`}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.line
        x1={w * 0.12}
        y1={h * 0.14}
        x2={w * 0.42}
        y2={h * 0.28}
        stroke="#22d3ee"
        strokeWidth="1"
        opacity="0.55"
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "linear" }}
      />
      <motion.line
        x1={w * 0.42}
        y1={h * 0.28}
        x2={w * 0.68}
        y2={h * 0.2}
        stroke="#e879f9"
        strokeWidth="1"
        opacity="0.45"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ repeat: Infinity, duration: 5.1, ease: "linear" }}
      />
      <motion.line
        x1={w * 0.68}
        y1={h * 0.2}
        x2={w * 0.86}
        y2={h * 0.38}
        stroke="#a3e635"
        strokeWidth="1"
        opacity="0.4"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: "linear" }}
      />

      <rect
        x={w * 0.08}
        y={h * 0.1}
        width={w * 0.12}
        height={h * 0.14}
        stroke="#22d3ee"
        strokeWidth="1.2"
        opacity="0.5"
      />
      <text
        x={w * 0.08}
        y={h * 0.09}
        fill="#22d3ee"
        style={{ fontSize: 9 }}
        className="font-system tracking-[0.35em]"
      >
        VISUAL_NODE_01
      </text>

      <rect
        x={w * 0.55}
        y={h * 0.18}
        width={w * 0.16}
        height={h * 0.16}
        stroke="#e879f9"
        strokeWidth="1.2"
        opacity="0.48"
      />
      <text
        x={w * 0.55}
        y={h * 0.17}
        fill="#e879f9"
        style={{ fontSize: 9 }}
        className="font-system tracking-[0.35em]"
      >
        AUDIO_OBJECT_02
      </text>

      <rect
        x={w * 0.72}
        y={h * 0.55}
        width={w * 0.18}
        height={h * 0.12}
        stroke="#a3e635"
        strokeWidth="1.2"
        opacity="0.42"
      />
      <text
        x={w * 0.72}
        y={h * 0.535}
        fill="#a3e635"
        style={{ fontSize: 9 }}
        className="font-system tracking-[0.35em]"
      >
        SIGNAL_03
      </text>

      <circle cx={w * 0.42} cy={h * 0.28} r="3" fill="#22d3ee" opacity="0.8" />
      <circle cx={w * 0.68} cy={h * 0.2} r="3" fill="#e879f9" opacity="0.75" />
      <circle cx={w * 0.86} cy={h * 0.38} r="3" fill="#a3e635" opacity="0.7" />
    </svg>
  );
}
