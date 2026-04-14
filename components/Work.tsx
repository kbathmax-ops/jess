import ScrollReveal from "./ScrollReveal";

const tiles = [
  {
    label: "Portrait Series",
    sub: "Photography",
    color: "linear-gradient(135deg, #C0392B 0%, #8B1A1A 50%, #1A1410 100%)",
  },
  {
    label: "Brand Identity",
    sub: "Creative Direction",
    color: "linear-gradient(135deg, #2C1A0E 0%, #C8A96E 60%, #8B1A1A 100%)",
  },
  {
    label: "Campaign — SS25",
    sub: "Social Media",
    color: "linear-gradient(135deg, #8B1A1A 0%, #2C1A0E 40%, #C0392B 100%)",
  },
  {
    label: "Editorial Shoot",
    sub: "Photography",
    color: "linear-gradient(135deg, #C8A96E 0%, #8B1A1A 50%, #1A1410 100%)",
  },
  {
    label: "Artist Promo",
    sub: "Content Creation",
    color: "linear-gradient(135deg, #1A1410 0%, #C0392B 40%, #8B1A1A 100%)",
  },
  {
    label: "Event Coverage",
    sub: "Photography",
    color: "linear-gradient(135deg, #2C1A0E 0%, #C8A96E 30%, #1A1410 100%)",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="grain relative py-28 md:py-36 px-8 md:px-16 lg:px-24"
      style={{ background: "#1A1410" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-16 flex-wrap gap-4">
          <div>
            <ScrollReveal>
              <p
                className="text-rust text-xs tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                (02) — Selected Work
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="text-cream leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(56px, 8vw, 110px)",
                  letterSpacing: "0.02em",
                }}
              >
                Social Media
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" delay={0.2}>
            <span
              className="text-rust self-end pb-4"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "48px", lineHeight: 1 }}
            >
              (3)
            </span>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiles.map((tile, i) => (
            <ScrollReveal key={tile.label} delay={i * 0.08}>
              <div
                className="work-tile group cursor-none"
                style={{ aspectRatio: "4/5" }}
              >
                {/* Color gradient placeholder for image */}
                <div
                  className="img-hover w-full h-full relative"
                  style={{ background: tile.color }}
                >
                  {/* Grid lines overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(200,169,110,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(200,169,110,0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="work-tile-overlay">
                    <div>
                      <p
                        className="text-cream text-xs tracking-widest uppercase mb-1"
                        style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px" }}
                      >
                        {tile.sub}
                      </p>
                      <p
                        className="text-cream"
                        style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontStyle: "italic" }}
                      >
                        {tile.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex justify-center">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border border-gold text-cream text-sm tracking-widest uppercase transition-all duration-300 hover:bg-rust hover:border-rust cursor-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "16px",
                letterSpacing: "0.2em",
                borderColor: "#C8A96E",
              }}
            >
              View Full Portfolio
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
