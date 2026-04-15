"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    num: "01",
    title: "Fine Line Work",
    desc: "Delicate, precise linework from micro pieces to full panels. Heals clean, lasts sharp.",
  },
  {
    num: "02",
    title: "Custom Pieces",
    desc: "Fully original designs built around your vision. Design work begins after deposit — first draft sent a few days before your appointment. We make adjustments until you love it.",
  },
  {
    num: "03",
    title: "Flash Designs",
    desc: "Pre-drawn sets at fixed rates. New flash released monthly. First come, first served.",
  },
  {
    num: "04",
    title: "Cover-Ups",
    desc: "Transform existing tattoos into something you love. Consultation required before booking.",
  },
  {
    num: "05",
    title: "Touch-Ups",
    desc: "Complimentary touch-up session within 3 months of your original appointment.",
  },
  {
    num: "06",
    title: "Flash Day Events",
    desc: "Monthly studio sessions — smaller designs, discounted rates, walk-in friendly.",
  },
];

const policies = [
  {
    title: "Deposit",
    desc: "A minimum $10 non-refundable deposit is required to secure your booking. Sent via e-transfer (auto-deposit enabled). Goes toward your final price.",
  },
  {
    title: "Rescheduling",
    desc: "Minimum 24 hours' notice required to reschedule. No-shows forfeit the deposit and a new deposit is required to rebook.",
  },
  {
    title: "Late Arrivals",
    desc: "$10 fee applied for every 10 minutes late. Please respect your appointment slot.",
  },
];

export default function Deliverables() {
  return (
    <section
      id="deliverables"
      className="relative py-10 md:py-14 px-5 md:px-10 lg:px-14"
      style={{ background: "#F2EBD9" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-7 md:mb-10 text-center">
          <ScrollReveal>
            <h2
              className="leading-none"
              style={{
                fontFamily: "var(--font-condensed)",
                fontWeight: 800,
                fontSize: "clamp(38px, 6vw, 72px)",
                letterSpacing: "-0.01em",
                color: "#1A1410",
                lineHeight: 0.95,
                textAlign: "center",
              }}
            >
              What I Do
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Service list */}
          <div className="lg:col-span-3 flex flex-col">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.06}>
                <div
                  className="deliverable-item py-3 border-b"
                  style={{ borderColor: "rgba(26,20,16,0.08)" }}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      style={{
                        fontFamily: "var(--font-host-grotesk)",
                        fontWeight: 700,
                        fontSize: "12px",
                        color: "#A63324",
                        flexShrink: 0,
                      }}
                    >
                      {s.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-condensed)",
                        fontSize: "clamp(22px, 3.5vw, 34px)",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.01em",
                        color: "#1A1410",
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-host-grotesk)",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "rgba(26,20,16,0.6)",
                      lineHeight: "1.7",
                      paddingLeft: "clamp(24px, 3vw, 40px)",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* Policies */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10">
                <h3
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-condensed)",
                    fontWeight: 800,
                    fontSize: "28px",
                    textTransform: "uppercase",
                    letterSpacing: "0.01em",
                    color: "#1A1410",
                  }}
                >
                  Policies
                </h3>
                <div className="flex flex-col gap-4">
                  {policies.map((p) => (
                    <div key={p.title}>
                      <p
                        style={{
                          fontFamily: "var(--font-host-grotesk)",
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#A63324",
                          marginBottom: "4px",
                        }}
                      >
                        {p.title}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-host-grotesk)",
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "rgba(26,20,16,0.65)",
                          lineHeight: "1.65",
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Pricing panel */}
          <ScrollReveal direction="right" delay={0.18} className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="p-6 md:p-8" style={{ background: "#1A1410" }}>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 600,
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(242,235,217,0.35)",
                  }}
                >
                  Starting at
                </p>
                <p
                  className="leading-none mb-1"
                  style={{
                    fontFamily: "var(--font-condensed)",
                    fontWeight: 800,
                    fontSize: "clamp(80px, 12vw, 120px)",
                    color: "#F2EBD9",
                    letterSpacing: "-0.02em",
                  }}
                >
                  $70
                </p>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 500,
                    fontSize: "13px",
                    color: "rgba(242,235,217,0.35)",
                  }}
                >
                  Minimum charge
                </p>
                <div className="mb-4" style={{ height: "1px", background: "rgba(242,235,217,0.1)" }} />
                <p
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "rgba(242,235,217,0.75)",
                    lineHeight: "1.6",
                  }}
                >
                  Pricing is based on size, detail, and placement.
                  Final price confirmed before your appointment.
                </p>

                <div className="mt-5 flex gap-3">
                  {["Cash", "E-Transfer"].map((method) => (
                    <div
                      key={method}
                      style={{
                        padding: "6px 14px",
                        border: "1px solid rgba(242,235,217,0.15)",
                        fontFamily: "var(--font-host-grotesk)",
                        fontWeight: 600,
                        fontSize: "12px",
                        letterSpacing: "0.06em",
                        color: "rgba(242,235,217,0.5)",
                        textTransform: "uppercase",
                      }}
                    >
                      {method}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-none mt-6 w-full py-3 transition-opacity duration-200 hover:opacity-75"
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    background: "#A63324",
                    color: "#F2EBD9",
                    border: "none",
                  }}
                >
                  Get a Quote
                </button>
              </div>

              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-host-grotesk)",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "rgba(26,20,16,0.35)",
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
