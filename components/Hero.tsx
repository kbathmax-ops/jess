"use client";

export default function Hero() {
  return (
    <section
      className="grain relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#1A1410" }}
    >
      {/* Background art collage layer */}
      <div
        className="hero-bg absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse at 50% 40%, rgba(139,26,26,0.45) 0%, transparent 65%),
            radial-gradient(ellipse at 20% 80%, rgba(44,26,14,0.9) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 10%, rgba(44,26,14,0.8) 0%, transparent 50%),
            linear-gradient(180deg, #1A1410 0%, #2C1A0E 50%, #1A1410 100%)
          `,
        }}
      />

      {/* Classical art texture overlays */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(200,169,110,0.03) 2px,
            rgba(200,169,110,0.03) 4px
          )`,
        }}
      />

      {/* Decorative red vertical bar — left */}
      <div
        className="absolute left-0 top-0 h-full w-2"
        style={{ background: "linear-gradient(to bottom, transparent, #8B1A1A 30%, #8B1A1A 70%, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        {/* Pre-headline */}
        <p
          className="hero-word text-gold text-xs tracking-[0.4em] uppercase mb-6"
          style={{
            fontFamily: "var(--font-space-mono)",
            animationDelay: "0.1s",
          }}
        >
          Creative Portfolio
        </p>

        {/* Main headline line 1 */}
        <div className="overflow-hidden mb-1">
          <h1
            className="hero-word text-cream leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(60px, 10vw, 130px)",
              letterSpacing: "0.04em",
              animationDelay: "0.3s",
            }}
          >
            Welcome To The
          </h1>
        </div>

        {/* Script overlay + main name */}
        <div className="relative mb-2">
          <h1
            className="hero-word text-cream leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(56px, 9vw, 120px)",
              fontStyle: "italic",
              fontWeight: 700,
              animationDelay: "0.55s",
            }}
          >
            World of Jess
          </h1>
          {/* Script accent floating above */}
          <span
            className="hero-script absolute -top-6 left-1/2 text-rust pointer-events-none select-none"
            style={{
              fontFamily: "var(--font-pinyon)",
              fontSize: "clamp(32px, 5vw, 72px)",
              transform: "translateX(-30%) rotate(-6deg)",
              opacity: 0,
            }}
          >
            &amp; beyond
          </span>
        </div>

        {/* Sub-headline */}
        <div className="overflow-hidden mt-4">
          <p
            className="hero-word text-cream"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(14px, 2vw, 18px)",
              fontWeight: 300,
              letterSpacing: "0.08em",
              opacity: 0,
              animationDelay: "0.8s",
              color: "rgba(245,237,216,0.65)",
            }}
          >
            Photography · Social Media · Creative Direction
          </p>
        </div>

        {/* CTA */}
        <div
          className="hero-word mt-10 inline-flex gap-6"
          style={{ animationDelay: "1.0s", opacity: 0 }}
        >
          <button
            onClick={() => {
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-3 text-cream text-sm tracking-[0.2em] uppercase border border-cream transition-all duration-300 hover:bg-rust hover:border-rust cursor-none"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em", fontSize: "16px" }}
          >
            View Work
          </button>
          <button
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-3 text-cream text-sm tracking-[0.2em] uppercase bg-crimson border border-crimson transition-all duration-300 hover:bg-rust cursor-none"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em", fontSize: "16px" }}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Palm silhouette bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #1A1410 0%, transparent 100%)",
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span
          className="text-gold text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px" }}
        >
          Scroll
        </span>
        <div className="scroll-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4L10 16M10 16L5 11M10 16L15 11"
              stroke="#C8A96E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
