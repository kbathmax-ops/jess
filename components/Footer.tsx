"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-6 px-5 md:px-10 lg:px-14 border-t"
      style={{ background: "#1A1410", borderColor: "rgba(242,235,217,0.07)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Wordmark + location */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 700,
              fontSize: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#F2EBD9",
            }}
          >
            Tattoos by Jess
          </span>
          <span
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 400,
              fontSize: "13px",
              color: "rgba(242,235,217,0.3)",
              marginLeft: "12px",
            }}
          >
            Toronto, Ontario
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 flex-wrap">
          {[
            { label: "About",   id: "about" },
            { label: "Work",    id: "work" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={label}
              onClick={() =>
                document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-none bg-transparent border-none"
              style={{
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 500,
                fontSize: "13px",
                color: "rgba(242,235,217,0.35)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#A63324")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,235,217,0.35)")}
            >
              {label}
            </button>
          ))}
          <Link
            href="/portfolio"
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 500,
              fontSize: "13px",
              color: "rgba(242,235,217,0.35)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#A63324")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,235,217,0.35)")}
          >
            Portfolio
          </Link>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 400,
            fontSize: "12px",
            color: "rgba(242,235,217,0.2)",
          }}
        >
          © {year} Tattoos by Jess
        </p>
      </div>
    </footer>
  );
}
