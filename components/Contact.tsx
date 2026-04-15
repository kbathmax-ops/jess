"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

const INSTAGRAM_HANDLE = "tattoosbyjesss";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id"; // ← update this

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="grain relative py-20 md:py-28 px-5 md:px-10 lg:px-14"
      style={{ background: "#1A1410" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-18">
          <ScrollReveal>
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(242,235,217,0.3)",
              }}
            >
              (05) — Contact
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(58px, 13vw, 160px)",
                letterSpacing: "0.01em",
                color: "#F2EBD9",
                lineHeight: 0.9,
              }}
            >
              Let&apos;s Talk
              <br />
              <span style={{ color: "#A63324" }}>Ink.</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Contact form */}
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              {/* Name */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "rgba(242,235,217,0.3)",
                    marginBottom: "10px",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "rgba(242,235,217,0.3)",
                    marginBottom: "10px",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "rgba(242,235,217,0.3)",
                    marginBottom: "10px",
                  }}
                >
                  Inquiry Type
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="field-input"
                  style={{ cursor: "none" }}
                >
                  <option value="" disabled style={{ background: "#1A1410" }}>
                    Select one
                  </option>
                  <option value="Custom Piece" style={{ background: "#1A1410" }}>Custom Piece</option>
                  <option value="Flash Booking" style={{ background: "#1A1410" }}>Flash Design Booking</option>
                  <option value="Cover-Up" style={{ background: "#1A1410" }}>Cover-Up Consultation</option>
                  <option value="Touch-Up" style={{ background: "#1A1410" }}>Touch-Up</option>
                  <option value="Flash Day" style={{ background: "#1A1410" }}>Flash Day Event</option>
                  <option value="General" style={{ background: "#1A1410" }}>General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "rgba(242,235,217,0.3)",
                    marginBottom: "10px",
                  }}
                >
                  Tell me about your piece
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="field-input resize-none"
                  placeholder="Placement, size, style, references..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 tracking-widest uppercase transition-opacity duration-200 cursor-none hover:opacity-80"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "16px",
                  letterSpacing: "0.2em",
                  background: status === "sent" ? "#2C1A0E" : "#A63324",
                  color: "#F2EBD9",
                  border: "none",
                  opacity: status === "sending" ? 0.6 : 1,
                }}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent ✓"}
                {status === "error" && "Try Again"}
              </button>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "10px",
                    color: "#A63324",
                    textAlign: "center",
                    letterSpacing: "0.1em",
                  }}
                >
                  Something went wrong. DM me on Instagram instead.
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Right: Instagram + info */}
          <div className="flex flex-col gap-8">
            {/* Instagram card */}
            <ScrollReveal direction="right" delay={0.14}>
              <a
                href={`https://ig.me/m/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 group cursor-none transition-all duration-300"
                style={{
                  border: "1px solid rgba(242,235,217,0.12)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(166,51,36,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(242,235,217,0.12)")}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#A63324",
                      borderRadius: "10px",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        fontSize: "8px",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "rgba(242,235,217,0.35)",
                        marginBottom: "3px",
                      }}
                    >
                      Fastest response
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "24px",
                        color: "#F2EBD9",
                        letterSpacing: "0.04em",
                      }}
                    >
                      DM on Instagram
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "11px",
                      color: "#A63324",
                    }}
                  >
                    @{INSTAGRAM_HANDLE}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="#A63324" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>

            {/* Info list */}
            <ScrollReveal direction="right" delay={0.22}>
              <div className="flex flex-col">
                {[
                  { label: "Based In", value: "South Florida" },
                  { label: "Travel", value: "Available on request" },
                  { label: "Response", value: "Within 24 hours" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-4"
                    style={{ borderBottom: "1px solid rgba(242,235,217,0.07)" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        fontSize: "9px",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "rgba(242,235,217,0.28)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "17px",
                        fontWeight: 600,
                        color: "#F2EBD9",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Availability */}
            <ScrollReveal direction="right" delay={0.3}>
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ background: "rgba(166,51,36,0.1)", border: "1px solid rgba(166,51,36,0.25)" }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#A63324",
                    boxShadow: "0 0 6px #A63324",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color: "rgba(242,235,217,0.6)",
                  }}
                >
                  Currently accepting new clients — Q2 2026
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
