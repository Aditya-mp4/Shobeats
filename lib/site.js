export const social = {
  spotifyArtist: "https://open.spotify.com/artist/6D9UpokVLsPmC4TDRfNtQW",
  instagram: "https://www.instagram.com/shobeatsmusic/",
  youtube: "https://youtube.com/@shobeatsmusic",
  soundcloud: "https://soundcloud.com/shobhitmehra",
  email: "mailto:shobeats0@gmail.com",
};

// Update this link to your actual Google Drive “download” URL.
export const resumeDownload = {
  label: "DOWNLOAD_RESUME",
  // Best practice: use a direct download link (or a share link that triggers download)
  // Example: https://drive.google.com/uc?export=download&id=FILE_ID
  href: "https://drive.google.com/uc?export=download&id=YOUR_DRIVE_FILE_ID",
};


export const navItems = [
  { label: "MUSIC", id: "music" },
  { label: "VISUALS", id: "visuals" },
  { label: "SYSTEMS", id: "systems" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "CONTACT", id: "contact" },
];

export const featuredTracks = [
  {
    id: "fallen-knight",
    title: "Fallen Knight",
    role: "Lead Vocalist // Switchbored",
    accent: "cyan",
    art: "/assets/site/music-cluster.png",
    spotifyUrl: "https://open.spotify.com/track/5KHyBVWs5UeNXSlBEmO19X",
    embedSrc:
      "https://open.spotify.com/embed/track/5KHyBVWs5UeNXSlBEmO19X?utm_source=generator&theme=0",
    tag: "TRACK_01",
    embedHeight: 152,
  },
  {
    id: "hum-delisha",
    title: "Hum w Delisha",
    role: "Producer + Mix/Master",
    accent: "magenta",
    art: "/assets/Hum.jpg",
    spotifyUrl: "https://open.spotify.com/track/1UMrW4NxpAYSRdjnuKXafd",
    embedSrc:
      "https://open.spotify.com/embed/track/1UMrW4NxpAYSRdjnuKXafd?utm_source=generator&theme=0",
    tag: "TRACK_02",
    embedHeight: 152,
  },
  {
    id: "tu-dikhe",
    title: "Tu Dikhe",
    role: "Producer + Mix/Master // feat. Raam Dhoundiyal",
    accent: "lime",
    art: "/assets/site/music-tu-dikhe.png",
    spotifyUrl: "https://open.spotify.com/track/6nOHY4kT9suUTxyadgMj8e",
    embedSrc:
      "https://open.spotify.com/embed/track/6nOHY4kT9suUTxyadgMj8e?utm_source=generator&theme=0",
    tag: "TRACK_03",
    embedHeight: 152,
  },
  {
    id: "cluster-ep",
    title: "Cluster",
    role: "Switchbored EP — Collaborator",
    accent: "red",
    art: "/assets/site/music-cluster.png",
    spotifyUrl: "https://open.spotify.com/album/2GTRblnQt6lmOLncTXMhH4",
    embedSrc:
      "https://open.spotify.com/embed/album/2GTRblnQt6lmOLncTXMhH4?utm_source=generator&theme=0",
    tag: "EP_04",
    embedHeight: 352,
    embedAlbumClip: true,
  },
  {
    id: "hikari",
    title: "Hikari",
    role: "Instrumental EP — Beats by SHOBEATS",
    accent: "violet",
    art: "/assets/site/music-hikari.png",
    spotifyUrl: "https://open.spotify.com/track/2tHytla8Btsjy9b9mEJsdz",
    embedSrc:
      "https://open.spotify.com/embed/track/2tHytla8Btsjy9b9mEJsdz?utm_source=generator&theme=0",
    tag: "TRACK_05",
    embedHeight: 152,
  },
];

export const visualArchive = [
  {
    src: "/assets/site/gallery-01-live.png",
    label: "LIVE_FIELD_01",
    span: "hero",
  },
  {
    src: "/assets/site/gallery-02-duo.png",
    label: "PERFORMANCE_DUO_02",
    span: "sm",
  },
  {
    src: "/assets/site/gallery-04-band.png",
    label: "CLUSTER_UNIT_03",
    span: "sm",
  },
  {
    src: "/assets/site/gallery-03-award.png",
    label: "CULTURE_WIN_04",
    span: "wide",
  },
  {
    src: "/assets/site/gallery-05-flstudio.png",
    label: "DAW_SESSION_05",
    span: "sm",
  },
];
