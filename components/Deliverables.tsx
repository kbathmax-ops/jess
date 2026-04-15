"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  { num: "01", title: "Fine Line Work", desc: "Delicate, precise linework — from micro pieces to full panels. Heals clean, lasts sharp." },
  { num: "02", title: "Custom Pieces", desc: "Fully original designs built around your vision and reference. Every line drawn from scratch." },
  { num: "03", title: "Flash Designs", desc: "Pre-drawn sets available at fixed rates. New flash released monthly. First come, first served." },
  { num: "04", title: "Cover-Ups", desc: "Transform existing tattoos into something you love. Consultation required before booking." },
  { num: "05", title: "Touch-Up Service", desc: "All tattoos receive a complimentary touch-up session within 3 months of the original appointment." },
  { num: "06", title: "Flash Day Events", desc: "Monthly community sessions at the studio — smaller designs, discounted rates, walk-in friendly." },
];

export default function Deliverables() {
  return (
    <section
      id="deliverables"
      className="relative py-20 md:py-28 px-5 md:px-10 lg:px-14"
      style={{ background: "#F2EBD9" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 md:mb-18 flex-wrap gap-4">
          <div>
            <ScrollReveal>
              <p
                className="mb-3"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "rgba(26,20,16,0.35)",
                }}
              >
                (04) — Services
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(56px, 11vw, 130px)",
                  letterSpacing: "0.01em",
                  color: "#1A1410",
                  lineHeight: 0.9,
                }}
              >
                What I Do
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Service list — takes 3 cols */}
          <div className="lg:col-span-3 flex flex-col">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.06}>
                <div
                  className="deliverable-item py-6 border-b"
                  style={{ borderColor: "rgba(26,20,16,0.08)" }}
                >
                  <div className="flex items-baseline gap-4 mb-1.5">
                    <span
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        color: "#A63324",
                      }}
                    >
                      {s.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "clamp(20px, 2.8vw, 30px)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.03em",
                        color: "#1A1410",
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-host-grotesk)",
                      fontSize: "13px",
                      color: "rgba(26,20,16,0.6)",
                      lineHeight: "1.7",
                      fontWeight: 700,
                      paddingLeft: "clamp(24px, 3vw, 40px)",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Pricing panel — takes 2 cols */}
          <ScrollReveal direction="right" delay={0.18} className="lg:col-span-2">
            <div className="sticky top-28">
              {/* Rate block — editorial, no gradient card */}
              <div
                className="p-8 md:p-10"
                style={{ background: "#1A1410" }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "rgba(242,235,217,0.35)",
                  }}
                >
                  Starting at
                </p>
                <p
                  className="leading-none mb-5"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(72px, 10vw, 100px)",
                    color: "#F2EBD9",
                  }}
                >
                  $150
                </p>
                <div
                  className="mb-5"
                  style={{ height: "1px", background: "rgba(242,235,217,0.1)" }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "rgba(242,235,217,0.75)",
                    lineHeight: "1.55",
                    letterSpacing: "0.01em",
                  }}
                >
                  Every piece is priced by size, placement, and complexity.
                  Custom quotes provided after consultation.
                </p>
                <button
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-none mt-7 w-full py-3 transition-opacity duration-200 hover:opacity-75"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "13px",
                    letterSpacing: "0.18em",
                    background: "#A63324",
                    color: "#F2EBD9",
                    border: "none",
                  }}
                >
                  Get a Quote
                </button>
              </div>

              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(26,20,16,0.3)",
                }}
              >
                Deposit required to confirm all bookings
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
