import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-[90px] px-5 md:px-10 lg:px-14"
      style={{ background: "#F2EBD9" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[51px] items-start">
          {/* Photo placeholder */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "3/4", background: "#2C1A0E" }}
              >
                <div
                  className="absolute bottom-5 left-5"
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    color: "rgba(242,235,217,0.5)",
                    textTransform: "uppercase",
                  }}
                >
                  Jess — Toronto, Ontario
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text block */}
          <div className="flex flex-col gap-6 md:pt-3">
            <ScrollReveal direction="right" delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-condensed)",
                  fontSize: "clamp(52px, 8vw, 100px)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.01em",
                  color: "#1A1410",
                  lineHeight: 1.0,
                }}
              >
                Tattoos are more than
                <br />
                <span style={{ color: "#A63324" }}>a design.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.18}>
              <div style={{ width: "48px", background: "#A63324", height: "2px" }} />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.22}>
              <p
                style={{
                  fontFamily: "var(--font-host-grotesk)",
                  fontSize: "17px",
                  color: "rgba(26,20,16,0.72)",
                  lineHeight: "1.75",
                  fontWeight: 500,
                }}
              >
                A tattoo is a declaration — of who you are, what you've been
                through, and what you carry with you. Every piece I create is
                rooted in that idea. Whether it&apos;s a symbol tied to your
                culture, a reminder of someone you love, or a mark of a chapter
                you&apos;ve closed, your ink deserves to be treated with that weight.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p
                style={{
                  fontFamily: "var(--font-host-grotesk)",
                  fontSize: "17px",
                  color: "rgba(26,20,16,0.72)",
                  lineHeight: "1.75",
                  fontWeight: 500,
                }}
              >
                I work with you to translate your beliefs into fine line work
                that feels intentional, personal, and made to last — out of a
                private studio in North York, Toronto.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
