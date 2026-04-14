"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-8 md:px-16 lg:px-24 border-t"
      style={{ background: "#2C1A0E", borderColor: "rgba(200,169,110,0.2)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <p
              className="text-cream text-2xl"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
            >
              Jess
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "rgba(245,237,216,0.35)",
              }}
            >
              Creative Portfolio
            </p>
          </div>

          {/* Nav links */}
          <div className="flex gap-8 justify-center">
            {["About", "Work", "Calendar", "Contact"].map((label) => (
              <button
                key={label}
                onClick={() => {
                  document
                    .querySelector(`#${label.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-none bg-transparent border-none"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "rgba(245,237,216,0.4)",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C0392B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,237,216,0.4)")}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-5">
              {[
                {
                  label: "IG",
                  href: "https://instagram.com/tattoosbyjesss",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "https://tiktok.com/@jess",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 12C9 14.2 10.8 16 13 16C15.2 16 17 14.2 17 12V4C17 4 18.5 5.5 21 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path d="M9 12C9 9.8 10.8 8 13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-none transition-colors duration-200"
                  style={{ color: "rgba(245,237,216,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C0392B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,237,216,0.4)")}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "10px",
                color: "rgba(245,237,216,0.25)",
                letterSpacing: "0.1em",
              }}
            >
              © {year} Jess. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
