"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      className="grain relative py-10 md:py-14 px-5 md:px-10 lg:px-14"
      style={{ background: "#1A1410" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header — compressed */}
        <div className="mb-8 md:mb-10">
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-condensed)",
                fontWeight: 800,
                fontSize: "clamp(36px, 5.5vw, 64px)",
                letterSpacing: "-0.01em",
                color: "#F2EBD9",
                lineHeight: 0.95,
                textAlign: "center",
              }}
            >
              Let&apos;s Talk <span style={{ color: "#A63324" }}>Ink.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p
              className="mt-3 text-center mx-auto"
              style={{
                fontFamily: "var(--font-host-grotesk)",
                fontWeight: 500,
                fontSize: "17px",
                color: "rgba(242,235,217,0.55)",
                lineHeight: "1.6",
                maxWidth: "480px",
              }}
            >
              DM on Instagram for the fastest response, or fill in the form below.
              Include your design idea, size, placement, and any reference images.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Contact form — takes 2 cols */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-host-grotesk)",
                      fontWeight: 600,
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(242,235,217,0.4)",
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
                      fontFamily: "var(--font-host-grotesk)",
                      fontWeight: 600,
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(242,235,217,0.4)",
                      marginBottom: "10px",
                    }}
                  >
                    Email
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
              </div>

              {/* Subject */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 600,
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(242,235,217,0.4)",
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
                >
                  <option value="" disabled style={{ background: "#1A1410" }}>Select one</option>
                  <option value="Custom Piece"   style={{ background: "#1A1410" }}>Custom Piece</option>
                  <option value="Flash Booking"  style={{ background: "#1A1410" }}>Flash Design Booking</option>
                  <option value="Cover-Up"       style={{ background: "#1A1410" }}>Cover-Up Consultation</option>
                  <option value="Touch-Up"       style={{ background: "#1A1410" }}>Touch-Up</option>
                  <option value="Flash Day"      style={{ background: "#1A1410" }}>Flash Day Event</option>
                  <option value="General"        style={{ background: "#1A1410" }}>General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 600,
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(242,235,217,0.4)",
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
                  placeholder="Design idea, size (cm or inches), placement, reference images..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 uppercase transition-opacity duration-200 cursor-none hover:opacity-80"
                style={{
                  fontFamily: "var(--font-host-grotesk)",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.18em",
                  background: status === "sent" ? "#2C1A0E" : "#A63324",
                  color: "#F2EBD9",
                  border: "none",
                  opacity: status === "sending" ? 0.6 : 1,
                }}
              >
                {status === "idle"    && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent"    && "Message Sent ✓"}
                {status === "error"   && "Try Again"}
              </button>

              {status === "error" && (
                <p style={{ fontFamily: "var(--font-host-grotesk)", fontSize: "14px", color: "#A63324", textAlign: "center" }}>
                  Something went wrong — DM me on Instagram instead.
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Location + Instagram — 1 col */}
          <ScrollReveal direction="right" delay={0.18}>
            <div className="flex flex-col gap-6">
              {/* Location */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#A63324",
                    marginBottom: "10px",
                  }}
                >
                  Studio Location
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 500,
                    fontSize: "17px",
                    color: "#F2EBD9",
                    lineHeight: "1.55",
                  }}
                >
                  2028 Avenue Rd, Unit 6<br />
                  North York, Toronto
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "rgba(242,235,217,0.4)",
                  }}
                >
                  Free parking behind the studio
                </p>
              </div>

              <div style={{ height: "1px", background: "rgba(242,235,217,0.08)" }} />

              {/* Instagram */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#A63324",
                    marginBottom: "10px",
                  }}
                >
                  Fastest Response
                </p>
                <a
                  href="https://ig.me/m/tattoosbyjesss"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 600,
                    fontSize: "17px",
                    color: "#F2EBD9",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A63324")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F2EBD9")}
                >
                  @tattoosbyjesss ↗
                </a>
              </div>

              <div style={{ height: "1px", background: "rgba(242,235,217,0.08)" }} />

              {/* Availability */}
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#A63324",
                    boxShadow: "0 0 6px #A63324",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-host-grotesk)",
                    fontWeight: 500,
                    fontSize: "15px",
                    color: "rgba(242,235,217,0.6)",
                  }}
                >
                  Accepting new clients — Q2 2026
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
