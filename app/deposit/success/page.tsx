import Link from "next/link";

export default function DepositSuccess() {
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
      <div style={{ maxWidth: "460px", width: "100%", textAlign: "center" }}>
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
          You&apos;re<br />
          <span style={{ color: "#A63324" }}>Booked.</span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontSize: "17px",
            fontWeight: 500,
            color: "rgba(242,235,217,0.6)",
            lineHeight: "1.65",
            marginBottom: "40px",
          }}
        >
          Your $20 deposit was received. Jess will be in touch soon to confirm your appointment details and start on your design.
        </p>

        <div style={{ height: "1px", background: "rgba(242,235,217,0.08)", marginBottom: "32px" }} />

        <p
          style={{
            fontFamily: "var(--font-host-grotesk)",
            fontSize: "14px",
            fontWeight: 500,
            color: "rgba(242,235,217,0.35)",
            marginBottom: "24px",
          }}
        >
          Questions? Reach out on Instagram
        </p>

        <a
          href="https://ig.me/m/tattoosbyjesss"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-host-grotesk)",
            fontWeight: 600,
            fontSize: "15px",
            color: "#F2EBD9",
            textDecoration: "none",
            marginBottom: "32px",
          }}
        >
          @tattoosbyjesss ↗
        </a>

        <div style={{ display: "block" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-host-grotesk)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(242,235,217,0.3)",
              textDecoration: "none",
            }}
          >
            ← Back to site
          </Link>
        </div>
      </div>
    </main>
  );
}
