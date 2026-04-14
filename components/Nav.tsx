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
        className={`nav-base px-8 md:px-16 py-6 flex items-center justify-between ${scrolled ? "nav-scrolled" : ""}`}
      >
        {/* Wordmark */}
        <a
          href="#"
          className="text-cream text-2xl tracking-wider"
          style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Jess
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-cream text-xs tracking-[0.25em] uppercase transition-colors duration-200 hover:text-rust bg-transparent border-none cursor-none"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-none bg-transparent border-none p-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-7 bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-px w-7 bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-7 bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(26,20,16,0.98)" }}
      >
        <button
          className="absolute top-6 right-8 text-cream text-3xl bg-transparent border-none cursor-none"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <ul className="flex flex-col gap-10 list-none text-center">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-cream text-5xl bg-transparent border-none cursor-none hover:text-rust transition-colors duration-200"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
