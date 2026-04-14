"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Calendar", href: "#calendar" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`nav-base px-5 md:px-10 lg:px-14 py-5 flex items-center justify-between ${scrolled ? "nav-scrolled-light" : ""}`}
      >
        {/* Wordmark */}
        <a
          href="#"
          className="text-charcoal"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Tattoos by Jess
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleLink(l.href)}
                className="bg-transparent border-none cursor-none transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(26,20,16,0.5)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A63324")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(26,20,16,0.5)")}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-none bg-transparent border-none p-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            style={{ background: "#1A1410" }}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#1A1410" }}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            style={{ background: "#1A1410" }}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#F2EBD9" }}
      >
        <button
          className="absolute top-5 right-5 cursor-none bg-transparent border-none"
          onClick={() => setMenuOpen(false)}
          style={{ color: "#1A1410", fontSize: "28px", lineHeight: 1 }}
        >
          ×
        </button>
        {/* Brand mark at top of overlay */}
        <p
          className="absolute top-5 left-5"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "10px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(26,20,16,0.4)",
          }}
        >
          Tattoos by Jess
        </p>

        <ul className="flex flex-col gap-8 list-none text-center">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleLink(l.href)}
                className="cursor-none bg-transparent border-none transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(48px, 13vw, 72px)",
                  letterSpacing: "0.04em",
                  color: "#1A1410",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A63324")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1410")}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <p
          className="absolute bottom-8"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "rgba(26,20,16,0.3)",
            textTransform: "uppercase",
          }}
        >
          @tattoosbyjesss
        </p>
      </div>
    </>
  );
}
