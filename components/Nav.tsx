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
          fontFamily: "var(--font-host-grotesk)",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.22em",
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
