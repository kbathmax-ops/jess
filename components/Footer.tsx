"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-5 md:px-10 lg:px-14 border-t"
      style={{ background: "#1A1410", borderColor: "rgba(242,235,217,0.07)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Wordmark */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "22px",
                color: "#F2EBD9",
              }}
            >
              Tattoos by Jess
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "8px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(242,235,217,0.25)",
              }}
            >
              South Florida
            </p>
          </div>

          {/* Nav links */}
          <div className="flex gap-7 justify-start md:justify-center flex-wrap">
            {["About", "Work", "Calendar", "Contact"].map((label) => (
              <button
                key={label}
                onClick={() => {
                  document
                    .querySelector(`#${label.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-none bg-transparent border-none transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "8px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(242,235,217,0.3)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A63324")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,235,217,0.3)")}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Socials + copyright */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-5">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com/tattoosbyjesss",
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "https://tiktok.com/@tattoosbyjesss",
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
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
                  style={{ color: "rgba(242,235,217,0.3)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A63324")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,235,217,0.3)")}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "8px",
                letterSpacing: "0.12em",
                color: "rgba(242,235,217,0.18)",
              }}
            >
              © {year} Tattoos by Jess
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
