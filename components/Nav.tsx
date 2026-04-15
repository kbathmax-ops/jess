"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="nav-base px-5 py-4 flex items-center justify-center"
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-condensed)",
          fontSize: "18px",
          fontWeight: 800,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          textDecoration: "none",
          color: "#1A1410",
        }}
      >
        Tattoos by Jess
      </Link>
    </nav>
  );
}
