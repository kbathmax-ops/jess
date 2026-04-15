"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        minHeight: "75vh",
        paddingTop: "70px",
        paddingBottom: "64px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* Background photo */}
      <Image
        src="/hero-bg.jpg"
        alt="Jess tattooing in studio"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center center" }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(26,20,16,0.52)", zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Title block with Victorian ornament */}
        <div className="relative flex flex-col items-center" style={{ padding: "28px 48px 18px" }}>

          {/* Victorian oval ornament — draws in after intro */}
          <svg
            viewBox="0 0 520 260"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            {/* Main oval */}
            <path
              className="ornament-oval"
              d="M 30,130 C 30,72 118,20 260,20 C 402,20 490,72 490,130 C 490,188 402,240 260,240 C 118,240 30,188 30,130 Z"
              fill="none"
              stroke="rgba(242,235,217,0.45)"
              strokeWidth="1.1"
              style={{ strokeDasharray: 1140, strokeDashoffset: 1140 }}
            />
            {/* Cardinal accents — small arrow points at N/S/E/W */}
            <path
              className="ornament-accents"
              d="M 252,20 L 260,4 L 268,20
                 M 252,240 L 260,256 L 268,240
                 M 30,122 L 12,130 L 30,138
                 M 490,122 L 508,130 L 490,138"
              fill="none"
              stroke="rgba(242,235,217,0.45)"
              strokeWidth="1.1"
              style={{ strokeDasharray: 220, strokeDashoffset: 220 }}
            />
            {/* Small horizontal ticks flanking the side accents */}
            <path
              className="ornament-accents"
              d="M 6,126 L 6,134
                 M 504,126 L 504,134"
              fill="none"
              stroke="rgba(242,235,217,0.3)"
              strokeWidth="1"
              style={{ strokeDasharray: 50, strokeDashoffset: 50 }}
            />
          </svg>

          <h1
            className="hero-word"
            style={{
              fontFamily: "var(--font-condensed)",
              fontWeight: 800,
              fontSize: "clamp(72px, 18vw, 210px)",
              color: "#F2EBD9",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              animationDelay: "0.1s",
              opacity: 0.92,
            }}
          >
            TATTOOS
          </h1>

          <h2
            className="hero-word"
            style={{
              fontFamily: "var(--font-condensed)",
              fontWeight: 700,
              fontSize: "clamp(30px, 7vw, 90px)",
              color: "#F2EBD9",
              lineHeight: 1.0,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              animationDelay: "0.25s",
              opacity: 0.88,
            }}
          >
            BY JESS
          </h2>
        </div>

        {/* Thin rule */}
        <div
          className="hero-word"
          style={{
            width: "56px",
            height: "1.5px",
            background: "#A63324",
            margin: "16px auto 0",
            animationDelay: "0.45s",
          }}
        />

        {/* CTAs */}
        <div
          className="hero-word mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm sm:max-w-none"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-none transition-opacity duration-200 hover:opacity-80 w-full sm:w-auto"
            style={{
              fontFamily: "var(--font-condensed)",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.12em",
              padding: "13px 40px",
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
              fontFamily: "var(--font-condensed)",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.12em",
              padding: "13px 40px",
              background: "transparent",
              color: "#F2EBD9",
              border: "1px solid rgba(242,235,217,0.35)",
              textDecoration: "none",
              textTransform: "uppercase",
              display: "inline-block",
            }}
          >
            View Portfolio
          </Link>
        </div>
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
