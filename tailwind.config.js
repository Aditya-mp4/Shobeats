/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        depth: "#0B0B0B",
        panel: "#111111",
        raised: "#181818",
        surface: "#1C1C1C",
        surface2: "#222222",
        surface3: "#2A2A2A",
        detect: {
          cyan: "#22d3ee",
          lime: "#a3e635",
          magenta: "#e879f9",
          red: "#f87171",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        system: ["var(--font-ibm-plex-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-tactical":
          "linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)",
        "grid-fine":
          "linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)",
      },
      backgroundSize: {
        grid: "80px 80px",
        "grid-sm": "40px 40px",
      },
      boxShadow: {
        detect: "0 0 40px rgba(34, 211, 238, 0.12)",
        "detect-magenta": "0 0 48px rgba(232, 121, 249, 0.14)",
      },
      animation: {
        scan: "scan 2.8s linear infinite",
        jitter: "jitter 0.35s steps(2) infinite",
        "chromatic-drift": "chromatic 4s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        jitter: {
          "0%, 100%": { transform: "translate(0,0)" },
          "25%": { transform: "translate(0.5px,-0.5px)" },
          "50%": { transform: "translate(-0.5px,0.5px)" },
          "75%": { transform: "translate(0.3px,0.3px)" },
        },
        chromatic: {
          "0%, 100%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(8deg)" },
        },
      },
    },
  },
  plugins: [],
};
