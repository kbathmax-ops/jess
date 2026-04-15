import Link from "next/link";
import Cursor from "@/components/Cursor";

const pieces = [
  { label: "Fine Line Florals",    sub: "Custom · 2025",  bg: "#A63324" },
  { label: "Geometric",            sub: "Custom · 2025",  bg: "#3C2A18" },
  { label: "Script & Lettering",   sub: "Custom · 2024",  bg: "#1A1410" },
  { label: "Blackwork",            sub: "Flash · 2025",   bg: "#2C1A0E" },
  { label: "Botanicals",           sub: "Flash · 2024",   bg: "#5C1515" },
  { label: "Micro Realism",        sub: "Custom · 2025",  bg: "#7A1515" },
  { label: "Fine Line Portrait",   sub: "Custom · 2025",  bg: "#A63324" },
  { label: "Ornamental",           sub: "Custom · 2024",  bg: "#3C2A18" },
  { label: "Abstract Linework",    sub: "Custom · 2025",  bg: "#2C1A0E" },
  { label: "Neo Traditional",      sub: "Custom · 2024",  bg: "#5C1515" },
  { label: "Minimalist Symbol",    sub: "Flash · 2025",   bg: "#1A1410" },
  { label: "Botanical Sleeve",     sub: "Custom · 2025",  bg: "#7A1515" },
];

export default function Portfolio() {
  return (
    <>
      <Cursor />

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between"
        style={{
          background: "rgba(26,20,16,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(242,235,217,0.07)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(242,235,217,0.4)",
            textDecoration: "none",
          }}
        >
          ← Back
        </Link>
        <span
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#F2EBD9",
          }}
        >
          Tattoos by Jess
        </span>
        <Link
          href="/#contact"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(242,235,217,0.4)",
            textDecoration: "none",
          }}
        >
          Book →
        </Link>
      </nav>

      <main
        style={{ background: "#1A1410", minHeight: "100dvh", paddingTop: "70px" }}
      >
        {/* Header */}
        <div className="px-5 md:px-10 lg:px-14 pt-12 pb-10">
          <p
            className="mb-3"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(242,235,217,0.3)",
            }}
          >
            Fine Line · Custom Ink · Toronto
          </p>
          <h1
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 800,
              fontSize: "clamp(52px, 12vw, 140px)",
              color: "#F2EBD9",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            Portfolio
          </h1>
        </div>

        {/* Masonry-style grid */}
        <div className="px-5 md:px-10 lg:px-14 pb-16">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
            {pieces.map((piece, i) => (
              <div
                key={piece.label}
                className="break-inside-avoid work-tile group cursor-none"
                style={{
                  background: piece.bg,
                  aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/5",
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="work-tile-overlay">
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        fontSize: "8px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "rgba(242,235,217,0.5)",
                        marginBottom: "4px",
                      }}
                    >
                      {piece.sub}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-host-grotesk)",
                        fontWeight: 700,
                        fontSize: "16px",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        color: "#F2EBD9",
                      }}
                    >
                      {piece.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA footer */}
        <div
          className="px-5 md:px-10 lg:px-14 py-12 text-center"
          style={{ borderTop: "1px solid rgba(242,235,217,0.07)" }}
        >
          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "9px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(242,235,217,0.3)",
            }}
          >
            Ready for your own piece?
          </p>
          <Link
            href="/#contact"
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "14px 40px",
              background: "#A63324",
              color: "#F2EBD9",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Book a Session
          </Link>
          <div className="mt-8">
            <a
              href="https://www.instagram.com/tattoosbyjesss"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(242,235,217,0.3)",
                textDecoration: "none",
              }}
            >
              More on @tattoosbyjesss ↗
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
