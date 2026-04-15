import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-[90px] px-5 md:px-10 lg:px-14"
      style={{ background: "#F2EBD9" }}
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p
            className="mb-8 md:mb-11"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[51px] items-start">
          {/* Photo placeholder */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                className="w-full overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  background: "#2C1A0E",
                }}
              >
                <div
                  className="absolute bottom-5 left-5"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    color: "rgba(242,235,217,0.4)",
                    textTransform: "uppercase",
                  }}
                >
                  Jess — South Florida
                </div>
              </div>
              <p
                className="mt-2"
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
          <div className="flex flex-col gap-[22px] md:pt-3">
            <ScrollReveal direction="right" delay={0.1}>
              <h2
                className="leading-tight"
                style={{
                  fontFamily: "var(--font-host-grotesk)",
                  fontSize: "clamp(34px, 5.5vw, 64px)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  color: "#1A1410",
                  lineHeight: 1.0,
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
                  fontFamily: "var(--font-host-grotesk)",
                  fontSize: "15px",
                  color: "rgba(26,20,16,0.68)",
                  lineHeight: "1.75",
                  fontWeight: 500,
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
                  fontFamily: "var(--font-host-grotesk)",
                  fontSize: "15px",
                  color: "rgba(26,20,16,0.68)",
                  lineHeight: "1.75",
                  fontWeight: 500,
                }}
              >
                Based in South Florida, I work out of a private studio and travel for
                select projects. Bookings open quarterly — secure yours early.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="right" delay={0.38}>
              <div className="flex gap-8 pt-1">
                {[
                  { num: "200+", label: "Tattoos" },
                  { num: "3+", label: "Years" },
                  { num: "Pvt.", label: "Studio" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      style={{
                        fontFamily: "var(--font-host-grotesk)",
                        fontWeight: 800,
                        fontSize: "40px",
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
