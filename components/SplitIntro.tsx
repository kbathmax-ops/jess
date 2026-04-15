"use client";

import { useEffect, useState } from "react";

export default function SplitIntro() {
  const [phase, setPhase] = useState<"hold" | "open" | "done">("hold");

  useEffect(() => {
    // Hold title for 1.1s, then split open
    const t1 = setTimeout(() => setPhase("open"), 1100);
    // Remove overlay after split finishes (1s transition + buffer)
    const t2 = setTimeout(() => setPhase("done"), 2300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  const isOpen = phase === "open";

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* ── Top panel ── */}
      <div
        className={`split-panel-top absolute left-0 right-0 top-0 flex items-end justify-center pb-0${isOpen ? " open" : ""}`}
        style={{
          height: "50%",
          background: "#1A1410",
        }}
      >
        {/* TATTOOS — top half of title visible through panel */}
        <h1
          className={`split-title${isOpen ? " fade" : ""}`}
          style={{
            fontFamily: "var(--font-condensed)",
            fontWeight: 800,
            fontSize: "clamp(72px, 18vw, 210px)",
            color: "#A63324",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            /* Clip to show only top half of the letter */
            clipPath: "inset(0 0 50% 0)",
            marginBottom: "-0.08em",
            userSelect: "none",
          }}
        >
          TATTOOS
        </h1>
      </div>

      {/* ── Bottom panel ── */}
      <div
        className={`split-panel-bottom absolute left-0 right-0 bottom-0 flex items-start justify-center pt-0${isOpen ? " open" : ""}`}
        style={{
          height: "50%",
          background: "#F2EBD9",
        }}
      >
        {/* TATTOOS — bottom half visible through panel */}
        <h1
          className={`split-title${isOpen ? " fade" : ""}`}
          style={{
            fontFamily: "var(--font-condensed)",
            fontWeight: 800,
            fontSize: "clamp(72px, 18vw, 210px)",
            color: "#A63324",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            clipPath: "inset(50% 0 0 0)",
            marginTop: "-0.08em",
            userSelect: "none",
          }}
        >
          TATTOOS
        </h1>
      </div>

      {/* ── Horizontal rule at the split seam ── */}
      <div
        className={`split-title absolute left-0 right-0${isOpen ? " fade" : ""}`}
        style={{
          top: "calc(50% - 0.5px)",
          height: "1px",
          background: "rgba(166,51,36,0.3)",
        }}
      />
    </div>
  );
}
