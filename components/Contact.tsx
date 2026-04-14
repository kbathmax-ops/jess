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
      className="grain relative py-28 md:py-36 px-8 md:px-16 lg:px-24"
      style={{ background: "#1A1410" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <ScrollReveal>
            <p
              className="text-rust text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              (05) — Contact
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="text-cream leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(56px, 9vw, 120px)",
                letterSpacing: "0.02em",
              }}
            >
              Let&apos;s Link
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact form */}
          <div>
            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name */}
                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                      color: "rgba(245,237,216,0.4)",
                      textTransform: "uppercase",
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
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                      color: "rgba(245,237,216,0.4)",
                      textTransform: "uppercase",
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
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                      color: "rgba(245,237,216,0.4)",
                      textTransform: "uppercase",
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
                    <option value="Booking" style={{ background: "#1A1410" }}>Booking a Session</option>
                    <option value="Collaboration" style={{ background: "#1A1410" }}>Collaboration</option>
                    <option value="Brand Work" style={{ background: "#1A1410" }}>Brand / Commercial Work</option>
                    <option value="Social Media" style={{ background: "#1A1410" }}>Social Media Management</option>
                    <option value="General" style={{ background: "#1A1410" }}>General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                      color: "rgba(245,237,216,0.4)",
                      textTransform: "uppercase",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 text-cream tracking-widest uppercase transition-all duration-300 cursor-none"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "18px",
                    letterSpacing: "0.2em",
                    background: status === "sent" ? "#2C1A0E" : "#C0392B",
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
                    className="text-rust text-center"
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px" }}
                  >
                    Something went wrong. Please try again or DM me on Instagram.
                  </p>
                )}
              </form>
            </ScrollReveal>
          </div>

          {/* Right: Instagram + info */}
          <div className="flex flex-col gap-10">
            {/* Instagram DM card */}
            <ScrollReveal direction="right" delay={0.15}>
              <a
                href={`https://ig.me/m/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ig-card block p-8 group cursor-none"
                style={{ textDecoration: "none" }}
              >
                <div className="flex items-center gap-5 mb-4">
                  {/* Instagram icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #C8A96E 0%, #C0392B 50%, #8B1A1A 100%)",
                      borderRadius: "14px",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-cream text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px" }}
                    >
                      Quickest response
                    </p>
                    <p
                      className="text-cream"
                      style={{ fontFamily: "var(--font-bebas)", fontSize: "28px" }}
                    >
                      DM on Instagram
                    </p>
                  </div>
                </div>
                <p
                  className="text-cream mb-4"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "14px",
                    color: "rgba(245,237,216,0.6)",
                    lineHeight: "1.7",
                  }}
                >
                  For fastest replies, slide into my DMs on Instagram. I check them daily
                  and respond within hours — not days.
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="text-gold text-sm"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    @{INSTAGRAM_HANDLE}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#C8A96E" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal direction="right" delay={0.25}>
              <div className="flex flex-col gap-6">
                <div className="gold-divider" style={{ height: "1px", background: "rgba(200,169,110,0.25)" }} />

                {[
                  { label: "Email", value: "jess@creative.com" },
                  { label: "Based In", value: "Miami, FL — New York, NY" },
                  { label: "Response Time", value: "Within 24 Hours" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b" style={{ borderColor: "rgba(200,169,110,0.1)" }}>
                    <span
                      className="text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-space-mono)", color: "rgba(245,237,216,0.4)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-cream"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "18px", fontStyle: "italic" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Availability badge */}
            <ScrollReveal direction="right" delay={0.35}>
              <div
                className="flex items-center gap-3 px-6 py-4"
                style={{ background: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.3)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#C0392B", boxShadow: "0 0 8px #C0392B" }}
                />
                <p
                  className="text-cream"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", letterSpacing: "0.15em" }}
                >
                  Currently accepting new clients for Q2 2026
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
