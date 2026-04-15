"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100dvh", background: "#F2EBD9" }}
    >
      <div className="flex min-h-[100dvh]">

        {/* ── Left: Type panel ── */}
        <div
          className="flex flex-col justify-center pt-[88px] pb-10 px-5 md:px-10 lg:px-14"
          style={{ flex: "1 1 0", minWidth: 0 }}
        >
          {/* Eyebrow */}
          <p
            className="hero-word mb-4 md:mb-5"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "9px",
              letterSpacing: "0.42em",
              color: "rgba(26,20,16,0.38)",
              textTransform: "uppercase",
              animationDelay: "0.05s",
            }}
          >
            Fine Line · Custom Ink · South Florida
          </p>

          {/* TATTOOS — Anton, dominant */}
          <h1
            className="hero-word"
            style={{
              fontFamily: "var(--font-anton)",
              fontWeight: 400,
              fontSize: "clamp(68px, 13.5vw, 172px)",
              color: "#A63324",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              animationDelay: "0.12s",
            }}
          >
            TATTOOS
          </h1>

          {/* by Jess — Oswald Bold, offset indent */}
          <h2
            className="hero-word mt-1 md:mt-2"
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 700,
              fontSize: "clamp(30px, 5.8vw, 76px)",
              color: "#1A1410",
              lineHeight: 1.05,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              animationDelay: "0.3s",
              paddingLeft: "clamp(4px, 1.5vw, 18px)",
            }}
          >
            by Jess
          </h2>

          {/* Thin rule */}
          <div
            className="hero-word rule-thin mt-7 md:mt-9"
            style={{ animationDelay: "0.52s" }}
          />

          {/* Availability + CTAs */}
          <div
            className="hero-word mt-5 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
            style={{ animationDelay: "0.68s" }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "9px",
                letterSpacing: "0.32em",
                color: "rgba(26,20,16,0.38)",
                textTransform: "uppercase",
              }}
            >
              Accepting bookings — Q2 2026
            </p>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-none transition-opacity duration-200 hover:opacity-80"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "14px",
                  letterSpacing: "0.16em",
                  padding: "11px 30px",
                  background: "#A63324",
                  color: "#F2EBD9",
                  border: "none",
                }}
              >
                Book a Session
              </button>
              <button
                onClick={() =>
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-none transition-opacity duration-200 hover:opacity-60"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "14px",
                  letterSpacing: "0.16em",
                  padding: "11px 30px",
                  background: "transparent",
                  color: "#1A1410",
                  border: "1px solid rgba(26,20,16,0.2)",
                }}
              >
                View Work
              </button>
            </div>
          </div>
        </div>

        {/* ── Right: Photo panel — desktop only ── */}
        <div
          className="hidden md:block shrink-0 relative overflow-hidden"
          style={{ width: "40vw" }}
        >
          {/* Gradient placeholder — swap for <Image> once real photo is available */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #3C1A0E 0%, #7A1515 35%, #A63324 65%, #C86040 100%)",
            }}
          />
          {/* Grain texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
              opacity: 0.08,
            }}
          />
          {/* Vertical studio label */}
          <p
            className="absolute bottom-10 right-6"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "8px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(242,235,217,0.3)",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            South Florida Studio
          </p>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="scroll-bounce">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3L8 13M8 13L3.5 8.5M8 13L12.5 8.5"
              stroke="#A63324"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
