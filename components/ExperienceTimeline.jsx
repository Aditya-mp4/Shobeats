"use client";

const entries = [
  {
    accent: "cyan",
    tag: "Switchbored EP",
    title: "Lead vocalist + production lane",
    body: "Five-song EP: lead vocals, songwriting support, production assistance, and mixing / mastering collaboration end-to-end.",
  },
  {
    accent: "magenta",
    tag: "Music Society",
    title: "Active member // social + performance",
    body: "Multi-year involvement: social media lead, staged performances, gigs, competitions, and collaborative projects across the society network.",
  },
  {
    accent: "lime",
    tag: "Production Journey",
    title: "FL Studio since 2018 // voice since childhood",
    body: "Independent releases and continuous craft — vocal performance as root instrument, production as systems thinking, and creative tooling as part of the art.",
  },
];

const dot = {
  cyan: "bg-detect-cyan",
  magenta: "bg-detect-magenta",
  lime: "bg-detect-lime",
};

const label = {
  cyan: "text-detect-cyan",
  magenta: "text-detect-magenta",
  lime: "text-detect-lime",
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative z-20 scroll-mt-8 px-6 pb-28 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px w-14 bg-detect-lime/80" />
          <p className="font-system text-sm uppercase tracking-[0.32em] text-white/45">
            Experience // Tactical Timeline
          </p>
        </div>

        <div className="space-y-12 border-l border-white/12 pl-8">
          {entries.map((e) => (
            <article key={e.tag} className="relative">
              <div
                className={`absolute -left-[34px] top-1.5 h-3.5 w-3.5 rounded-full ${dot[e.accent]}`}
              />
              <p
                className={`mb-2 font-system text-xs uppercase tracking-[0.24em] ${label[e.accent]}`}
              >
                {e.tag}
              </p>
              <h3 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">
                {e.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/68 md:text-base">
                {e.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
