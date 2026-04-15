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
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(26,20,16,0.52)", zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Main title */}
        <h1
          className="hero-word"
          style={{
            fontFamily: "var(--font-condensed)",
            fontWeight: 800,
            fontSize: "clamp(80px, 20vw, 240px)",
            color: "#A63324",
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
            fontSize: "clamp(36px, 8.5vw, 108px)",
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

        {/* Thin rule */}
        <div
          className="hero-word"
          style={{
            width: "56px",
            height: "1.5px",
            background: "#A63324",
            margin: "20px auto 0",
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
