import Link from "next/link";
import Image from "next/image";
import Cursor from "@/components/Cursor";

const images = [
  "IMG_0032.jpg","IMG_0045.jpg","IMG_0174.jpg","IMG_0192.jpg",
  "IMG_0278.jpg","IMG_0280.jpg","IMG_0451.jpg","IMG_0458.jpg",
  "IMG_0507.jpg","IMG_0510.jpg","IMG_0743.jpg","IMG_0859.jpg",
  "IMG_0957.jpg","IMG_1132.jpg","IMG_1226.jpg","IMG_1290.jpg",
  "IMG_1319.jpg","IMG_1323.jpg","IMG_1390.jpg","IMG_1454.jpg",
  "IMG_1474.jpg","IMG_1476.jpg","IMG_1577.jpg","IMG_1624.jpg",
  "IMG_1625.jpg","IMG_1636.jpg","IMG_1649.jpg","IMG_1657.jpg",
  "IMG_1742.jpg","IMG_1745.jpg","IMG_1753.jpg","IMG_1754.jpg",
  "IMG_1847.jpg","IMG_1852.jpg","IMG_1858.jpg","IMG_1863.jpg",
  "IMG_1864.jpg","IMG_8657.jpg","IMG_9117.jpg","IMG_9130.jpg",
  "IMG_9133.jpg","IMG_9421.jpg","IMG_9474.jpg","IMG_9583.jpg",
  "IMG_9583b.jpg","IMG_9585.jpg","IMG_9775-preview.jpg","IMG_9894.jpg",
  "48bf8682-d664-4114-8c95-2ed1602f4589.jpg",
  "64d7c61b-5e06-4498-bd48-b263f3fdda0b.jpg",
  "6c58358c-72eb-4d02-8aa6-1acf48676f76.jpg",
  "822f38bb-71ba-41cf-ab5a-5ee35a5c0a10.jpg",
  "9119bbdb-7f2d-443e-8da3-9212437d9c98.jpg",
  "948ab1d0-5226-4099-9599-e868ce366ea3.jpg",
  "a2962f92-0ccc-493e-baf3-4988bf7e857b.jpg",
  "img_5006.jpg",
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
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "0.06em",
            color: "rgba(242,235,217,0.5)",
            textDecoration: "none",
          }}
        >
          ← Back
        </Link>
        <span
          style={{
            fontFamily: "var(--font-condensed)",
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#F2EBD9",
          }}
        >
          Tattoos by Jess
        </span>
        <Link
          href="/#contact"
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "0.06em",
            color: "rgba(242,235,217,0.5)",
            textDecoration: "none",
          }}
        >
          Book →
        </Link>
      </nav>

      <main style={{ background: "#1A1410", minHeight: "100dvh", paddingTop: "64px" }}>

        {/* Header */}
        <div className="px-5 md:px-10 lg:px-14 pt-10 pb-8">
          <h1
            style={{
              fontFamily: "var(--font-condensed)",
              fontWeight: 800,
              fontSize: "clamp(72px, 16vw, 180px)",
              color: "#F2EBD9",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </h1>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 500,
              fontSize: "15px",
              color: "rgba(242,235,217,0.4)",
            }}
          >
            {images.length} pieces — fine line · custom · flash
          </p>
        </div>

        {/* Masonry grid */}
        <div
          className="px-5 md:px-10 lg:px-14 pb-16"
          style={{
            columns: "2",
            columnGap: "8px",
          }}
          // responsive columns via inline style since Tailwind columns classes may not cover all breakpoints
        >
          <style>{`
            @media (min-width: 640px)  { .portfolio-grid { columns: 3 !important; } }
            @media (min-width: 1024px) { .portfolio-grid { columns: 4 !important; } }
          `}</style>
          <div
            className="portfolio-grid"
            style={{ columns: 2, columnGap: "8px" }}
          >
            {images.map((src, i) => (
              <div
                key={src}
                className="group cursor-none"
                style={{
                  breakInside: "avoid",
                  marginBottom: "8px",
                  position: "relative",
                  overflow: "hidden",
                  display: "block",
                }}
              >
                <Image
                  src={`/portfolio/${src}`}
                  alt={`Tattoo by Jess — piece ${i + 1}`}
                  width={600}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    filter: "sepia(10%) contrast(1.05) brightness(0.95)",
                    transition: "filter 0.4s ease, transform 0.4s ease",
                  }}
                  className="group-hover:brightness-100 group-hover:sepia-0"
                  loading={i < 8 ? "eager" : "lazy"}
                  quality={80}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="px-5 md:px-10 lg:px-14 py-14 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(242,235,217,0.07)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontWeight: 500,
              fontSize: "17px",
              color: "rgba(242,235,217,0.5)",
            }}
          >
            Ready for your own piece?
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/#contact"
              style={{
                fontFamily: "var(--font-condensed)",
                fontWeight: 800,
                fontSize: "16px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "13px 36px",
                background: "#A63324",
                color: "#F2EBD9",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Book a Session
            </Link>
            <a
              href="https://www.instagram.com/tattoosbyjesss"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-condensed)",
                fontWeight: 800,
                fontSize: "16px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "13px 36px",
                border: "1px solid rgba(242,235,217,0.2)",
                color: "#F2EBD9",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              @tattoosbyjesss ↗
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
