import ScrollReveal from "./ScrollReveal";

export default function Calendar() {
  const calendarSrc =
    "https://calendar.google.com/calendar/embed?src=orcabuildnow%40gmail.com&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&bgcolor=%23F2EBD9&color=%23A63324";

  return (
    <section
      id="calendar"
      className="py-20 md:py-28 px-5 md:px-10 lg:px-14"
      style={{ background: "#E6D9BF" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-5">
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
                (03) — Availability
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(48px, 9vw, 110px)",
                  letterSpacing: "0.01em",
                  color: "#1A1410",
                  lineHeight: 0.92,
                }}
              >
                Book a Session
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" delay={0.15}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                color: "rgba(26,20,16,0.55)",
                lineHeight: "1.75",
                fontWeight: 300,
                maxWidth: "260px",
              }}
            >
              Slots fill fast. Check availability below, then reach out via the contact
              form or Instagram DM to secure your date.
            </p>
          </ScrollReveal>
        </div>

        {/* Calendar embed — left accent bar */}
        <ScrollReveal delay={0.12}>
          <div
            className="w-full overflow-hidden"
            style={{ borderLeft: "2px solid #A63324" }}
          >
            <iframe
              src={calendarSrc}
              style={{
                border: 0,
                width: "100%",
                height: "clamp(380px, 60vh, 580px)",
                display: "block",
              }}
              title="Booking Calendar"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p
            className="mt-5 text-center"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "9px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(26,20,16,0.35)",
            }}
          >
            All bookings confirmed via email within 24 hours
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
