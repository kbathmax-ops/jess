import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-8 md:px-16 lg:px-24"
      style={{ background: "#F5EDD8" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section marker */}
        <div className="flex items-center justify-between mb-16">
          <ScrollReveal>
            <p
              className="text-rust text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              (01) — About
            </p>
          </ScrollReveal>
          <div className="gold-divider flex-1 ml-8 opacity-40" style={{ height: "1px", background: "#C8A96E" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo block */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Gold offset border */}
              <div
                className="absolute -top-4 -left-4 w-full h-full border border-gold opacity-40"
                style={{ borderColor: "#C8A96E" }}
              />
              {/* Photo placeholder */}
              <div
                className="relative w-full aspect-[3/4] overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #8B1A1A 0%, #2C1A0E 50%, #C8A96E 100%)",
                  filter: "sepia(20%) contrast(1.1)",
                }}
              >
                {/* Silhouette placeholder */}
                <div
                  className="absolute inset-0 flex items-end justify-center pb-0"
                  style={{
                    background: `
                      linear-gradient(to top, #2C1A0E 0%, transparent 60%),
                      radial-gradient(ellipse at 50% 30%, #C0392B 0%, #8B1A1A 40%, #2C1A0E 80%)
                    `,
                  }}
                />
                {/* Abstract geometric overlay */}
                <div
                  className="absolute top-8 right-8 w-24 h-24 border border-gold opacity-30"
                  style={{ borderColor: "#C8A96E" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: "linear-gradient(to top, #1A1410, transparent)" }}
                />
                <div
                  className="absolute bottom-6 left-6 text-cream text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px" }}
                >
                  Jess — Creative
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text block */}
          <div className="flex flex-col gap-8">
            <ScrollReveal direction="right" delay={0.1}>
              <h2
                className="text-charcoal leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(40px, 5vw, 72px)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: "#1A1410",
                }}
              >
                Where Art Meets
                <br />
                <span style={{ color: "#8B1A1A" }}>Intention</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "17px",
                  color: "rgba(26,20,16,0.75)",
                  lineHeight: "1.85",
                }}
              >
                I am a visual storyteller rooted in the beauty of raw moments and
                intentional frames. My work spans photography, social media curation,
                and creative direction — built on the belief that every image should
                feel like it means something.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "17px",
                  color: "rgba(26,20,16,0.75)",
                  lineHeight: "1.85",
                }}
              >
                Based between Miami and New York, I collaborate with brands,
                artists, and individuals who want their visual identity to speak
                before they do.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="flex gap-12 pt-4">
                {[
                  { num: "120+", label: "Projects" },
                  { num: "50+", label: "Clients" },
                  { num: "4", label: "Years" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="leading-none"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "48px",
                        color: "#8B1A1A",
                      }}
                    >
                      {stat.num}
                    </p>
                    <p
                      className="text-xs tracking-widest uppercase mt-1"
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        color: "rgba(26,20,16,0.5)",
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
