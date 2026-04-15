import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-5 md:px-10 lg:px-14"
      style={{ background: "#F2EBD9" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section index */}
        <ScrollReveal>
          <p
            className="mb-10 md:mb-14"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(26,20,16,0.35)",
            }}
          >
            (01) — About
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Photo block — editorial placement, no ornament border */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Cutout-style photo placeholder — no border frame */}
              <div
                className="w-full overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  background: "linear-gradient(160deg, #2C1A0E 0%, #5C1515 45%, #A63324 80%, #E0C9A0 100%)",
                  filter: "sepia(15%) contrast(1.12)",
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: "linear-gradient(to top, #1A1410, transparent)" }}
                />
                <div
                  className="absolute bottom-5 left-5"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    color: "rgba(242,235,217,0.5)",
                    textTransform: "uppercase",
                  }}
                >
                  Jess — South Florida
                </div>
              </div>

              {/* Floating label — editorial caption style */}
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.25em",
                  color: "rgba(26,20,16,0.3)",
                  textTransform: "uppercase",
                }}
              >
                Available for travel
              </p>
            </div>
          </ScrollReveal>

          {/* Text block */}
          <div className="flex flex-col gap-7 md:pt-4">
            <ScrollReveal direction="right" delay={0.1}>
              <h2
                className="leading-tight"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "clamp(38px, 5.5vw, 68px)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: "#1A1410",
                  lineHeight: 1.05,
                }}
              >
                Art that lives
                <br />
                <span style={{ color: "#A63324" }}>on you.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.18}>
              <div
                className="rule-thin"
                style={{ width: "48px", background: "#A63324", height: "1.5px", opacity: 1 }}
              />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.22}>
              <p
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: "15px",
                  color: "rgba(26,20,16,0.68)",
                  lineHeight: "1.75",
                  fontWeight: 700,
                }}
              >
                I specialize in fine line and custom tattoo work — designs built around
                your vision, your body, your story. Every piece is drawn from scratch,
                made to last, and meant to feel like it was always there.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: "15px",
                  color: "rgba(26,20,16,0.68)",
                  lineHeight: "1.75",
                  fontWeight: 700,
                }}
              >
                Based in South Florida, I work out of a private studio and travel for
                select projects. Bookings open quarterly — secure yours early.
              </p>
            </ScrollReveal>

            {/* Stats — editorial, no color blocks */}
            <ScrollReveal direction="right" delay={0.38}>
              <div className="flex gap-10 pt-2">
                {[
                  { num: "200+", label: "Tattoos" },
                  { num: "3+", label: "Years" },
                  { num: "Pvt.", label: "Studio" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "44px",
                        color: "#A63324",
                        lineHeight: 1,
                      }}
                    >
                      {stat.num}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        fontSize: "9px",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "rgba(26,20,16,0.4)",
                        marginTop: "4px",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
