import ScrollReveal from "./ScrollReveal";

const tiles = [
  {
    label: "Fine Line Florals",
    sub: "Custom",
    color: "linear-gradient(150deg, #2C1A0E 0%, #7A1515 55%, #A63324 100%)",
    size: "large",
  },
  {
    label: "Geometric",
    sub: "Custom",
    color: "linear-gradient(140deg, #1A1410 0%, #3C1A0E 50%, #7A5C2E 100%)",
    size: "small",
  },
  {
    label: "Script & Lettering",
    sub: "Custom",
    color: "linear-gradient(160deg, #3C1A0E 0%, #1A1410 60%, #5C1515 100%)",
    size: "small",
  },
  {
    label: "Blackwork",
    sub: "Flash",
    color: "linear-gradient(145deg, #1A1410 0%, #2C1A0E 40%, #4A3520 100%)",
    size: "medium",
  },
  {
    label: "Botanicals",
    sub: "Flash",
    color: "linear-gradient(155deg, #5C1515 0%, #2C1A0E 50%, #1A1410 100%)",
    size: "medium",
  },
  {
    label: "Micro Realism",
    sub: "Custom",
    color: "linear-gradient(150deg, #2C1A0E 0%, #A63324 40%, #1A1410 100%)",
    size: "large",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="grain relative py-20 md:py-28 px-5 md:px-10 lg:px-14"
      style={{ background: "#1A1410" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header — editorial scale contrast */}
        <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-4">
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
                (02) — Selected Work
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(58px, 12vw, 140px)",
                  color: "#F2EBD9",
                  letterSpacing: "0.01em",
                  lineHeight: 0.9,
                }}
              >
                Selected
                <br />
                <span style={{ color: "#A63324" }}>Ink</span>
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

        {/* Collage-inspired grid — asymmetric sizing */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
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
                  style={{ background: tile.color }}
                >
                  {/* Subtle crosshatch texture */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(0deg, rgba(242,235,217,0.4) 0px, rgba(242,235,217,0.4) 1px, transparent 1px, transparent 32px),
                        repeating-linear-gradient(90deg, rgba(242,235,217,0.4) 0px, rgba(242,235,217,0.4) 1px, transparent 1px, transparent 32px)
                      `,
                    }}
                  />
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
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "20px",
                          fontStyle: "italic",
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

        {/* Bottom note */}
        <ScrollReveal delay={0.25}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
            <a
              href="https://www.instagram.com/tattoosbyjesss"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none transition-opacity duration-200 hover:opacity-70"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "13px",
                letterSpacing: "0.18em",
                padding: "10px 24px",
                border: "1px solid rgba(242,235,217,0.2)",
                color: "#F2EBD9",
                textDecoration: "none",
              }}
            >
              Full Portfolio on Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
