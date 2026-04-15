import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const tiles = [
  { label: "Fine Line Florals", sub: "Custom", bg: "#A63324", size: "large" },
  { label: "Geometric",         sub: "Custom", bg: "#3C2A18", size: "small" },
  { label: "Script & Lettering",sub: "Custom", bg: "#1A1410", size: "small" },
  { label: "Blackwork",         sub: "Flash",  bg: "#2C1A0E", size: "medium" },
  { label: "Botanicals",        sub: "Flash",  bg: "#5C1515", size: "medium" },
  { label: "Micro Realism",     sub: "Custom", bg: "#7A1515", size: "large" },
];

export default function Work() {
  return (
    <section
      id="work"
      className="grain relative py-16 md:py-[90px] px-5 md:px-10 lg:px-14"
      style={{ background: "#1A1410" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-[51px] flex-wrap gap-4">
          <div>
            <ScrollReveal>
              <p
                className="mb-3"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "rgba(242,235,217,0.3)",
                }}
              >
                (02) — My Work
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "var(--font-host-grotesk)",
                  fontWeight: 800,
                  fontSize: "clamp(52px, 12vw, 140px)",
                  color: "#F2EBD9",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.9,
                }}
              >
                My
                <br />
                <span style={{ color: "#A63324" }}>Work</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.15}>
            <a
              href="https://www.instagram.com/tattoosbyjesss"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none transition-opacity duration-200 hover:opacity-60"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(242,235,217,0.35)",
                textDecoration: "none",
              }}
            >
              @tattoosbyjesss ↗
            </a>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {tiles.map((tile, i) => (
            <ScrollReveal key={tile.label} delay={i * 0.06}>
              <div
                className="work-tile group cursor-none"
                style={{
                  aspectRatio: tile.size === "large" ? "3/4" : tile.size === "medium" ? "4/5" : "1/1",
                }}
              >
                <div
                  className="img-hover w-full h-full relative"
                  style={{ background: tile.bg }}
                >
                  <div className="work-tile-overlay">
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-space-mono)",
                          fontSize: "8px",
                          letterSpacing: "0.3em",
                          textTransform: "uppercase",
                          color: "rgba(242,235,217,0.5)",
                          marginBottom: "4px",
                        }}
                      >
                        {tile.sub}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-host-grotesk)",
                          fontWeight: 700,
                          fontSize: "18px",
                          textTransform: "uppercase",
                          letterSpacing: "0.03em",
                          color: "#F2EBD9",
                        }}
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

        {/* Bottom */}
        <ScrollReveal delay={0.25}>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(242,235,217,0.25)",
              }}
            >
              All work — original designs
            </p>
            <Link
              href="/portfolio"
              className="cursor-none transition-opacity duration-200 hover:opacity-70"
              style={{
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "10px 24px",
                border: "1px solid rgba(242,235,217,0.2)",
                color: "#F2EBD9",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Full Portfolio →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
