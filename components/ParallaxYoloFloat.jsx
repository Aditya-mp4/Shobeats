"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { y2kFloatEdges, y2kFloatNodes } from "@/lib/y2kFloatNodes";

const lineColors = [
  "#22d3ee",
  "#e879f9",
  "#a3e635",
  "#f472b6",
  "#67e8f9",
  "#f87171",
  "#c084fc",
  "#4ade80",
  "#fbbf24",
  "#38bdf8",
];

function YoloFrame({ color, label, conf }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-x-0 top-0 flex items-center justify-between border-b px-1 py-0.5 font-system text-[7px] uppercase tracking-[0.12em] md:text-[8px]"
        style={{
          borderColor: `${color}66`,
          background: "rgba(5,5,5,0.55)",
          color,
        }}
      >
        <span className="truncate pr-1">{label}</span>
        <span className="shrink-0 text-white/50">{conf}</span>
      </div>
      <div
        className="absolute inset-0 rounded-sm"
        style={{ boxShadow: `inset 0 0 0 1.5px ${color}`, opacity: 0.88 }}
      />
      <div
        className="absolute left-0 top-5 h-3 w-3 border-l-2 border-t-2 md:top-6 md:h-3.5 md:w-3.5"
        style={{ borderColor: color }}
      />
      <div
        className="absolute right-0 top-5 h-3 w-3 border-r-2 border-t-2 md:top-6 md:h-3.5 md:w-3.5"
        style={{ borderColor: color }}
      />
      <div
        className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 md:h-3.5 md:w-3.5"
        style={{ borderColor: color }}
      />
      <div
        className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 md:h-3.5 md:w-3.5"
        style={{ borderColor: color }}
      />
    </div>
  );
}

function scrollRevealFactor(scrollProgress) {
  return Math.min(1, Math.max(0, (scrollProgress - 0.12) / 0.26));
}

export default function ParallaxYoloFloat() {
  const rootRef = useRef(null);
  const itemRefs = useRef([]);
  const [points, setPoints] = useState([]);
  const [dims, setDims] = useState({ w: 1, h: 1 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 100, damping: 24, mass: 0.45 });
  const sy = useSpring(my, { stiffness: 100, damping: 24, mass: 0.45 });

  const nodes = y2kFloatNodes;
  const revealT = scrollRevealFactor(scrollProgress);

  const nodeOpacity = (n) => (n.revealOnScroll ? revealT : 1);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setScrollProgress(max <= 0 ? 1 : window.scrollY / max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 22);
      my.set((e.clientY / window.innerHeight - 0.5) * 16);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  useEffect(() => {
    let raf = 0;
    let last = 0;

    const measure = (time) => {
      if (!rootRef.current) return;
      const root = rootRef.current.getBoundingClientRect();
      const w = root.width || 1;
      const h = root.height || 1;

      if (time - last < 28) return;
      last = time;

      setDims({ w, h });

      const next = itemRefs.current.map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: r.left - root.left + r.width / 2,
          y: r.top - root.top + r.height / 2,
        };
      });
      setPoints(next);
    };

    const loop = (time) => {
      measure(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      last = 0;
      measure(performance.now());
    });
    if (rootRef.current) ro.observe(rootRef.current);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const lines = [];
  y2kFloatEdges.forEach(([a, b], i) => {
    const pa = points[a];
    const pb = points[b];
    if (!pa || !pb) return;
    const oa = nodeOpacity(nodes[a]);
    const ob = nodeOpacity(nodes[b]);
    const lineOp = 0.68 * Math.min(oa, ob);
    if (lineOp < 0.04) return;
    lines.push(
      <line
        key={`${a}-${b}-${i}`}
        x1={pa.x}
        y1={pa.y}
        x2={pb.x}
        y2={pb.y}
        stroke={lineColors[i % lineColors.length]}
        strokeWidth="1.25"
        opacity={lineOp}
        vectorEffect="non-scaling-stroke"
      />,
    );
  });

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[6] hidden overflow-visible md:block"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        width={dims.w}
        height={dims.h}
        viewBox={`0 0 ${dims.w} ${dims.h}`}
        preserveAspectRatio="none"
      >
        {lines}
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={n.id}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="absolute will-change-transform transition-opacity duration-500"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            width: `${n.w}vmin`,
            maxWidth: "min(22rem, 92vw)",
            zIndex: n.z,
            x: sx,
            y: sy,
            opacity: nodeOpacity(n),
          }}
        >
          <motion.div
            className="relative origin-center rounded-sm shadow-[0_0_24px_rgba(0,0,0,0.45)] ring-1 ring-white/5"
            animate={{
              y: [0, -n.amp, 0, n.amp * 0.55, 0],
              x: [0, n.amp * 0.4, 0, -n.amp * 0.32, 0],
              rotate: [-n.rot, n.rot * 0.75, -n.rot * 0.45, n.rot, -n.rot],
            }}
            transition={{
              repeat: Infinity,
              duration: n.dur,
              ease: "easeInOut",
              delay: i * 0.22,
            }}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={n.file}
                alt=""
                className="block w-full select-none brightness-[0.95] contrast-[1.05]"
                draggable={false}
              />
              <YoloFrame color={n.color} label={n.label} conf={n.conf} />
            </div>
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute inset-x-0 bottom-4 text-center font-system text-[9px] uppercase tracking-[0.2em] text-white/30">
        Detection mesh // parallax drift active
      </div>
    </div>
  );
}
