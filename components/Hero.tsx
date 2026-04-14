"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col overflow-hidden"
      style={{ background: "#F2EBD9", minHeight: "100dvh" }}
    >
      {/* Main content — flex column fills height */}
      <div className="flex-1 flex flex-col justify-center px-5 md:px-10 lg:px-14 pt-[88px] pb-0">

        {/* Eyebrow label */}
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

        {/* TATTOOS — fills viewport width, bleeds on large screens */}
        <div style={{ overflow: "hidden", marginLeft: "-2px" }}>
          <h1
            className="hero-word leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(80px, 21.5vw, 280px)",
              color: "#A63324",
              letterSpacing: "-0.01em",
              lineHeight: 0.87,
              animationDelay: "0.12s",
              whiteSpace: "nowrap",
            }}
          >
            TATTOOS
          </h1>
        </div>

        {/* "by Jess" + floating photo — same horizontal row on desktop */}
        <div className="flex items-end justify-between mt-1 md:mt-2">
          <h2
            className="hero-word"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(36px, 8.8vw, 120px)",
              color: "#1A1410",
              lineHeight: 1,
              animationDelay: "0.34s",
              paddingLeft: "clamp(6px, 2.5vw, 40px)",
            }}
          >
            by Jess
          </h2>

          {/* Editorial photo block — desktop only, floats beside the script */}
          <div
            className="hero-word hidden md:block"
            style={{
              width: "clamp(100px, 11vw, 170px)",
              aspectRatio: "3/4",
              background: "linear-gradient(155deg, #2C1A0E 0%, #6B1818 55%, #A63324 100%)",
              filter: "sepia(10%) contrast(1.1)",
              flexShrink: 0,
              marginRight: "1vw",
              animationDelay: "0.5s",
            }}
          />
        </div>

        {/* Thin rule */}
        <div
          className="hero-word mt-7 md:mt-9 rule-thin"
          style={{ animationDelay: "0.58s" }}
        />

        {/* Bottom row: availability note + CTAs */}
        <div
          className="hero-word mt-5 md:mt-6 pb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          style={{ animationDelay: "0.7s" }}
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
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
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
              onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
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
