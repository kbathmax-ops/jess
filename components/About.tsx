import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-10 md:py-14 px-5 md:px-10 lg:px-14"
      style={{ background: "#F2EBD9" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[51px] items-start">
          {/* Photo placeholder */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto" style={{ maxWidth: "340px" }}>
              <div
                className="w-full overflow-hidden relative"
                style={{ aspectRatio: "3/4", background: "#2C1A0E" }}
              >
                <img
                  src="/jess-portrait.jpg"
                  alt="Jess — Toronto, Ontario"
                  className="w-full h-full object-cover object-top"
                  style={{ display: "block" }}
                />
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
          <div className="flex flex-col gap-5 md:pt-3 items-center text-center">
            <ScrollReveal direction="right" delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-condensed)",
                  fontSize: "clamp(22px, 3.3vw, 46px)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.01em",
                  color: "#1A1410",
                  lineHeight: 0.95,
                  textAlign: "center",
                }}
              >
                Tattoos are more than
                <br />
                <span style={{ color: "#A63324" }}>a design.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.18}>
              <div style={{ width: "48px", background: "#A63324", height: "2px", margin: "0 auto" }} />
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
                I&apos;m Jess, a Toronto-based tattoo artist creating custom pieces
                that feel personal and timeless. I began tattooing in a professional
                shop in China, where I built a strong foundation in precision and
                technique. I work across styles including fine line, linework, and
                illustrative designs, and I&apos;m continually growing and evolving in
                my craft as I develop my journey as an artist.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
