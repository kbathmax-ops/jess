import ScrollReveal from "./ScrollReveal";

export default function Calendar() {
  // Replace this with your actual Google Calendar embed URL
  const calendarSrc =
    "https://calendar.google.com/calendar/embed?src=orcabuildnow%40gmail.com&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&bgcolor=%23E8D9B5&color=%23C0392B";

  return (
    <section
      id="calendar"
      className="py-28 md:py-36 px-8 md:px-16 lg:px-24"
      style={{ background: "#E8D9B5" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16 flex-wrap gap-6">
          <div>
            <ScrollReveal>
              <p
                className="text-rust text-xs tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                (03) — Availability
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(48px, 7vw, 100px)",
                  letterSpacing: "0.02em",
                  color: "#1A1410",
                }}
              >
                Book A Session
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" delay={0.2}>
            <p
              className="max-w-xs leading-relaxed self-end"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                color: "rgba(26,20,16,0.6)",
                lineHeight: "1.8",
              }}
            >
              Check my availability below and reach out to book. Slots fill up fast —
              secure yours early.
            </p>
          </ScrollReveal>
        </div>

        {/* Calendar embed */}
        <ScrollReveal delay={0.15}>
          <div
            className="w-full overflow-hidden"
            style={{
              borderLeft: "3px solid #C0392B",
              paddingLeft: "0",
              boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              src={calendarSrc}
              style={{
                border: 0,
                width: "100%",
                height: "600px",
                display: "block",
              }}
              title="Booking Calendar"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* Note */}
        <ScrollReveal delay={0.3}>
          <p
            className="mt-8 text-center"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "11px",
              color: "rgba(26,20,16,0.45)",
              letterSpacing: "0.15em",
            }}
          >
            All bookings confirmed via email within 24 hours
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
