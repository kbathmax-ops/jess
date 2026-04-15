"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "100dvh", background: "#F2EBD9", paddingTop: "70px", paddingBottom: "64px", paddingLeft: "20px", paddingRight: "20px" }}
    >
      {/* TATTOOS */}
      <h1
        className="hero-word"
        style={{
          fontFamily: "var(--font-host-grotesk)",
          fontWeight: 800,
          fontSize: "clamp(72px, 18vw, 210px)",
          color: "#A63324",
          lineHeight: 0.88,
          letterSpacing: "-0.02em",
          animationDelay: "0.12s",
        }}
      >
        TATTOOS
      </h1>

      {/* by Jess */}
      <h2
        className="hero-word mt-2"
        style={{
          fontFamily: "var(--font-host-grotesk)",
          fontWeight: 700,
          fontSize: "clamp(32px, 7.5vw, 94px)",
          color: "#1A1410",
          lineHeight: 1.05,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          animationDelay: "0.3s",
        }}
      >
        by Jess
      </h2>

      {/* Thin rule */}
      <div
        className="hero-word rule-thin mt-6 w-16"
        style={{ animationDelay: "0.52s" }}
      />

      {/* CTAs */}
      <div
        className="hero-word mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
        style={{ animationDelay: "0.68s" }}
      >
        <button
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-none transition-opacity duration-200 hover:opacity-80 w-full sm:w-auto"
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.18em",
            padding: "13px 36px",
            background: "#A63324",
            color: "#F2EBD9",
            border: "none",
            textTransform: "uppercase",
          }}
        >
          Book a Session
        </button>
        <Link
          href="/portfolio"
          className="cursor-none transition-opacity duration-200 hover:opacity-60 w-full sm:w-auto text-center"
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.18em",
            padding: "13px 36px",
            background: "transparent",
            color: "#1A1410",
            border: "1px solid rgba(26,20,16,0.2)",
            textDecoration: "none",
            textTransform: "uppercase",
            display: "inline-block",
          }}
        >
          View Portfolio
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
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
