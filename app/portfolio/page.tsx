"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Cursor from "@/components/Cursor";

const images = [
  "26C9A50D-4F7A-4963-9F0D-B16C3BB59257.JPG",
  "2E2F768A-D89E-4474-A0B3-1E627ADF80AC.JPG",
  "33C6C56F-58B4-4D21-A508-01CCECC6FA4B.JPG",
  "B27D11DA-512B-4902-9B61-71CE87DD5392.JPG",
  "B872EA30-7ECB-41C8-9536-00711CA698FF.JPG",
  "D3084AF5-F1B8-4123-82A4-6171B913DFE2.JPG",
  "FB244FAB-7C3A-440B-B596-F5A20027D165.JPG",
  "IMG_0033.jpg",
  "IMG_0174.jpg",
  "IMG_0278.jpg",
  "IMG_0415.jpg",
  "IMG_0864.jpg",
  "IMG_0953.jpg",
  "IMG_1020.jpg",
  "IMG_1286.jpg",
  "IMG_1307.jpg",
  "IMG_1390.jpg",
  "IMG_1443.jpg",
  "IMG_1448.jpg",
  "IMG_1637.jpg",
  "IMG_1925.JPG",
  "IMG_1946.jpg",
  "IMG_2165.jpg",
  "IMG_2195.jpg",
  "IMG_2215.jpg",
  "IMG_2238.jpg",
  "IMG_2866.jpg",
  "IMG_2899.jpg",
  "IMG_2950.jpg",
  "IMG_2979.jpg",
  "IMG_3221.jpg",
  "IMG_9923.jpg",
  "IMG_9583_new.jpg",
  "64D7C61B-5E06-4498-BD48-B263F3FDDA0B.JPG",
  "48BF8682-D664-4114-8C95-2ED1602F4589.jpg",
  "CD1F8CE3-B4C8-4482-A7DF-75AE948A20ED.JPG",
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    []
  );

  const next = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i + 1) % images.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

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
        <div className="px-5 md:px-10 lg:px-14 pb-16">
          <style>{`
            .portfolio-grid { columns: 2; column-gap: 8px; }
            @media (min-width: 640px)  { .portfolio-grid { columns: 3; } }
            @media (min-width: 1024px) { .portfolio-grid { columns: 4; } }
          `}</style>
          <div className="portfolio-grid">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightbox(i)}
                className="group cursor-none"
                style={{
                  breakInside: "avoid",
                  marginBottom: "8px",
                  position: "relative",
                  overflow: "hidden",
                  display: "block",
                  width: "100%",
                  padding: 0,
                  border: "none",
                  background: "none",
                }}
              >
                <Image
                  src={`/work2/${src}`}
                  alt={`Tattoo by Jess — piece ${i + 1}`}
                  width={600}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    filter: "sepia(10%) contrast(1.05) brightness(0.95)",
                    transition: "filter 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.4s cubic-bezier(0.32,0.72,0,1)",
                  }}
                  className="group-hover:scale-[1.03]"
                  loading={i < 8 ? "eager" : "lazy"}
                  quality={80}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "rgba(26,20,16,0.25)",
                    transition: "opacity 0.3s ease",
                  }}
                />
              </button>
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(10,7,5,0.96)", backdropFilter: "blur(8px)" }}
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-10 flex items-center justify-center"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(242,235,217,0.08)",
              border: "1px solid rgba(242,235,217,0.15)",
              color: "#F2EBD9",
              fontSize: "20px",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
          >
            ×
          </button>

          {/* Counter */}
          <div
            className="absolute top-5 left-1/2 -translate-x-1/2"
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontSize: "12px",
              letterSpacing: "0.1em",
              color: "rgba(242,235,217,0.4)",
            }}
          >
            {lightbox + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 flex items-center justify-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(242,235,217,0.08)",
              border: "1px solid rgba(242,235,217,0.15)",
              color: "#F2EBD9",
              fontSize: "20px",
              cursor: "pointer",
              transition: "background 0.2s ease",
              zIndex: 10,
            }}
          >
            ‹
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(90vw, 680px)",
              maxHeight: "88dvh",
              position: "relative",
            }}
          >
            <Image
              key={lightbox}
              src={`/work2/${images[lightbox]}`}
              alt={`Tattoo by Jess — piece ${lightbox + 1}`}
              width={680}
              height={900}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "min(90vw, 680px)",
                maxHeight: "88dvh",
                objectFit: "contain",
                display: "block",
                borderRadius: "4px",
              }}
              quality={90}
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 flex items-center justify-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(242,235,217,0.08)",
              border: "1px solid rgba(242,235,217,0.15)",
              color: "#F2EBD9",
              fontSize: "20px",
              cursor: "pointer",
              transition: "background 0.2s ease",
              zIndex: 10,
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
