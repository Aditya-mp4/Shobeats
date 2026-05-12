import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import CRTEffect from "@/components/CRTEffect";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  title: "SHOBEATS — Audio System",
  description:
    "Vocalist, producer, and AI artist. Immersive portfolio — machine vision, Y2K systems, emotional cyberpunk.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body className={`font-display antialiased bg-void text-white`}>
        <div className="crt-root">
          <CRTEffect />
          {children}
        </div>
      </body>
    </html>
  );
}
