import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const tiles = [
  { label: "Fine Line Florals",  sub: "Custom", bg: "#A63324", img: "/portfolio/IMG_0032.jpg"  },
  { label: "Geometric",          sub: "Custom", bg: "#3C2A18", img: "/portfolio/IMG_1132.jpg"  },
  { label: "Script & Lettering", sub: "Custom", bg: "#1A1410", img: "/portfolio/IMG_1290.jpg"  },
  { label: "Blackwork",          sub: "Flash",  bg: "#2C1A0E", img: "/portfolio/IMG_2238.jpg"  },
  { label: "Botanicals",         sub: "Flash",  bg: "#5C1515", img: "/portfolio/IMG_1020.jpg"  },
  { label: "Micro Realism",      sub: "Custom", bg: "#7A1515", img: "/portfolio/IMG_0174_new.jpg" },
];

export default function Work() {
  return (
    <section
      id="work"
      className="grain relative py-10 md:py-14 px-5 md:px-10 lg:px-14"
      style={{ background: "#1A1410" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 gap-3">
          <ScrollReveal>
            <h2
              className="leading-none"
              style={{
                fontFamily: "var(--font-condensed)",
                fontWeight: 800,
                fontSize: "clamp(40px, 7vw, 80px)",
                color: "#F2EBD9",
                letterSpacing: "-0.01em",
                lineHeight: 0.95,
                textAlign: "center",
              }}
            >
              My <span style={{ color: "#A63324" }}>Work</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <a
              href="https://www.instagram.com/tattoosbyjesss"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none transition-opacity duration-200 hover:opacity-60"
              style={{
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 600,
                fontSize: "13px",
                color: "rgba(242,235,217,0.4)",
                textDecoration: "none",
              }}
            >
              @tattoosbyjesss ↗
            </a>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {tiles.map((tile, i) => (
            <ScrollReveal key={tile.label} delay={i * 0.06}>
              <div
                className="work-tile group cursor-none"
                style={{ aspectRatio: "3/4" }}
              >
                <div
                  className="img-hover w-full h-full relative"
                  style={{ background: tile.bg }}
                >
                  <Image
                    src={tile.img}
                    alt={tile.label}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    quality={80}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom */}
        <ScrollReveal delay={0.25}>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p
              style={{
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 500,
                fontSize: "14px",
                color: "rgba(242,235,217,0.3)",
              }}
            >
              All work — original designs
            </p>
            <Link
              href="/portfolio"
              className="cursor-none transition-opacity duration-200 hover:opacity-70"
              style={{
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px 24px",
                border: "1px solid rgba(242,235,217,0.2)",
                color: "#F2EBD9",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Full Portfolio →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
