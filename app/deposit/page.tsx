"use client";

import { useState } from "react";
import Link from "next/link";

export default function DepositPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again or DM on Instagram.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again or DM on Instagram.");
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "#1A1410",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
      }}
    >
      {/* Back link */}
      <Link
        href="/"
        style={{
          position: "absolute",
          top: "28px",
          left: "28px",
          fontFamily: "var(--font-host-grotesk)",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(242,235,217,0.4)",
          textDecoration: "none",
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#F2EBD9")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,235,217,0.4)")}
      >
        ← Back
      </Link>

      <div style={{ maxWidth: "460px", width: "100%", textAlign: "center" }}>
        {/* Wordmark */}
        <p
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#A63324",
            marginBottom: "32px",
          }}
        >
          Tattoos by Jess
        </p>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-condensed)",
            fontWeight: 800,
            fontSize: "clamp(52px, 10vw, 80px)",
            color: "#F2EBD9",
            letterSpacing: "-0.01em",
            lineHeight: 0.95,
            marginBottom: "24px",
          }}
        >
          Booking<br />
          <span style={{ color: "#A63324" }}>Deposit.</span>
        </h1>

        {/* Amount */}
        <p
          style={{
            fontFamily: "var(--font-condensed)",
            fontWeight: 800,
            fontSize: "clamp(60px, 14vw, 100px)",
            color: "#F2EBD9",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: "8px",
          }}
        >
          $20
        </p>
        <p
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontSize: "13px",
            fontWeight: 500,
            color: "rgba(242,235,217,0.35)",
            letterSpacing: "0.05em",
            marginBottom: "40px",
          }}
        >
          CAD · Non-refundable · Applied to your final price
        </p>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(242,235,217,0.08)", marginBottom: "32px" }} />

        {/* What this covers */}
        <div style={{ textAlign: "left", marginBottom: "40px" }}>
          {[
            "Secures your appointment date and time",
            "Design work begins once deposit is received",
            "Goes toward your final tattoo price",
            "No-shows forfeit the deposit; 24h notice required to reschedule",
          ].map((point) => (
            <div
              key={point}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                marginBottom: "14px",
              }}
            >
              <span style={{ color: "#A63324", fontSize: "16px", lineHeight: "1.4", flexShrink: 0 }}>—</span>
              <p
                style={{
                  fontFamily: "var(--font-host-grotesk)",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgba(242,235,217,0.65)",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={handlePay}
          disabled={loading}
          style={{
            width: "100%",
            padding: "18px 24px",
            background: loading ? "rgba(166,51,36,0.5)" : "#A63324",
            color: "#F2EBD9",
            border: "none",
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            cursor: loading ? "default" : "pointer",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
          onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
        >
          {loading ? "Redirecting..." : "Pay $20 Deposit"}
        </button>

        {error && (
          <p
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontSize: "14px",
              color: "#A63324",
              marginTop: "16px",
            }}
          >
            {error}
          </p>
        )}

        <p
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontSize: "12px",
            color: "rgba(242,235,217,0.2)",
            marginTop: "20px",
            lineHeight: "1.6",
          }}
        >
          Powered by Stripe · Payments are secure and encrypted
        </p>
      </div>
    </main>
  );
}
