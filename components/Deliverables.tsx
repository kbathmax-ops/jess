"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  { num: "01", title: "Photography", desc: "Portraits, editorial, events, product — curated for your vision." },
  { num: "02", title: "Social Media Management", desc: "Content strategy, scheduling, captions, and growth for your brand." },
  { num: "03", title: "Creative Direction", desc: "Visual concepts, mood boards, set design, and art direction." },
  { num: "04", title: "Content Creation", desc: "Reels, TikToks, photo dumps, campaigns — built for engagement." },
  { num: "05", title: "Brand Identity", desc: "Visual language development — color, typography, mood, aesthetic." },
  { num: "06", title: "Event Coverage", desc: "Full-day coverage with same-day delivery of curated selections." },
];

export default function Deliverables() {
  return (
    <section
      id="deliverables"
      className="relative py-28 md:py-36 px-8 md:px-16 lg:px-24"
      style={{ background: "#F5EDD8" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-20 flex-wrap gap-4">
          <div>
            <ScrollReveal>
              <p
                className="text-rust text-xs tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                (04) — Services
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(56px, 8vw, 110px)",
                  letterSpacing: "0.02em",
                  color: "#1A1410",
                }}
              >
                Deliverables
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" delay={0.2}>
            <span
              className="self-end pb-4"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "48px",
                lineHeight: 1,
                color: "#C0392B",
              }}
            >
              (4)
            </span>
          </ScrollReveal>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Service list */}
          <div className="flex flex-col gap-0">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.07}>
                <div
                  className="deliverable-item py-7 border-b"
                  style={{ borderColor: "rgba(26,20,16,0.1)" }}
                >
                  <div className="flex items-baseline gap-4 mb-1">
                    <span
                      className="text-rust"
                      style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px" }}
                    >
                      {s.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#1A1410",
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p
                    className="pl-10"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      color: "rgba(26,20,16,0.55)",
                      lineHeight: "1.75",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Visual accent panel */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="sticky top-32">
              {/* Abstract texture block */}
              <div
                className="w-full aspect-square relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #C0392B 0%, #8B1A1A 35%, #2C1A0E 65%, #C8A96E 100%)",
                }}
              >
                {/* Cross-hatch overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, rgba(245,237,216,0.05) 0px, rgba(245,237,216,0.05) 1px, transparent 1px, transparent 40px),
                      repeating-linear-gradient(90deg, rgba(245,237,216,0.05) 0px, rgba(245,237,216,0.05) 1px, transparent 1px, transparent 40px)
                    `,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10 text-center">
                  <p
                    className="text-cream text-xs tracking-[0.4em] uppercase"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    Starting at
                  </p>
                  <p
                    className="text-cream leading-none"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "80px" }}
                  >
                    $250
                  </p>
                  <p
                    className="text-cream leading-relaxed max-w-[180px]"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "18px",
                      fontStyle: "italic",
                      color: "rgba(245,237,216,0.8)",
                    }}
                  >
                    Custom packages available for every budget
                  </p>
                  <button
                    onClick={() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-4 px-8 py-3 border border-cream text-cream text-sm tracking-widest uppercase transition-all duration-300 hover:bg-cream hover:text-charcoal cursor-none"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "14px", letterSpacing: "0.2em" }}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>

              {/* Caption below */}
              <p
                className="mt-4 text-right"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "10px",
                  color: "rgba(26,20,16,0.4)",
                  letterSpacing: "0.15em",
                }}
              >
                All packages include licensing rights
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
