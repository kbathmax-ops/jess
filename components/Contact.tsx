"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

const TIME_SLOTS: string[] = [];
for (let h = 10; h <= 17; h++) {
  for (let m = 0; m < 60; m += 15) {
    if (h === 17 && m > 0) break;
    const hour = h > 12 ? h - 12 : h;
    const ampm = h >= 12 ? "PM" : "AM";
    TIME_SLOTS.push(`${hour}:${m.toString().padStart(2, "0")} ${ampm}`);
  }
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function Calendar({ selected, onSelect }: { selected: string; onSelect: (d: string) => void }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prev = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const next = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <div style={{ width: "100%" }}>
      {/* Month nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <button type="button" onClick={prev} style={{ background: "none", border: "none", color: "rgba(242,235,217,0.5)", fontSize: "18px", cursor: "pointer", padding: "4px 8px" }}>‹</button>
        <span style={{ fontFamily: "var(--font-host-grotesk)", fontWeight: 600, fontSize: "14px", color: "#F2EBD9", letterSpacing: "0.08em" }}>
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button type="button" onClick={next} style={{ background: "none", border: "none", color: "rgba(242,235,217,0.5)", fontSize: "18px", cursor: "pointer", padding: "4px 8px" }}>›</button>
      </div>

      {/* Day headers */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", marginBottom: "4px" }}>
        {DAYS.map(d => (
          <div key={d} style={{ textAlign: "center", fontFamily: "var(--font-host-grotesk)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "rgba(242,235,217,0.3)", padding: "4px 0" }}>{d}</div>
        ))}
      </div>

      {/* Date cells */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
        {cells.map((day, i) => {
          if (!day) return <div key={`e-${i}`} />;
          const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isPast = new Date(viewYear, viewMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const isSelected = selected === dateStr;
          return (
            <button
              key={dateStr}
              type="button"
              disabled={isPast}
              onClick={() => onSelect(isSelected ? "" : dateStr)}
              style={{
                padding: "7px 2px",
                textAlign: "center",
                fontFamily: "var(--font-host-grotesk)",
                fontSize: "13px",
                fontWeight: isSelected ? 700 : 500,
                background: isSelected ? "#A63324" : "transparent",
                color: isPast ? "rgba(242,235,217,0.15)" : isSelected ? "#F2EBD9" : "rgba(242,235,217,0.75)",
                border: isSelected ? "none" : "1px solid transparent",
                cursor: isPast ? "default" : "pointer",
                borderRadius: "2px",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={e => { if (!isPast && !isSelected) (e.currentTarget as HTMLButtonElement).style.background = "rgba(166,51,36,0.2)"; }}
              onMouseLeave={e => { if (!isPast && !isSelected) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", contactMethod: "" });
  const [referenceFiles, setReferenceFiles] = useState<File[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("subject", form.subject);
      fd.append("message", form.message);
      fd.append("contactMethod", form.contactMethod);
      fd.append("availability", selectedDate && selectedTime ? `${selectedDate} at ${selectedTime}` : selectedDate || selectedTime || "Not specified");
      referenceFiles.forEach(file => fd.append("references", file));

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "", contactMethod: "" });
        setSelectedDate("");
        setSelectedTime("");
        setReferenceFiles([]);
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

              {/* Preferred contact method */}
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
                  Preferred Contact Method
                </label>
                <input
                  type="text"
                  name="contactMethod"
                  value={form.contactMethod}
                  onChange={handleChange}
                  className="field-input"
                  placeholder="e.g. Instagram — @tattoosbyjesss"
                />
              </div>

              {/* Reference images */}
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
                  Reference Images <span style={{ fontWeight: 400, letterSpacing: "0.05em", textTransform: "none", fontSize: "11px" }}>(optional — max 5MB each)</span>
                </label>
                <label
                  htmlFor="reference-upload"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    padding: "12px 16px",
                    background: "rgba(242,235,217,0.04)",
                    border: "1px solid rgba(242,235,217,0.12)",
                    fontFamily: "var(--font-host-grotesk)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: referenceFiles.length > 0 ? "#F2EBD9" : "rgba(242,235,217,0.35)",
                    transition: "border-color 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(242,235,217,0.25)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(242,235,217,0.12)")}
                >
                  <span style={{ fontSize: "18px", lineHeight: 1 }}>↑</span>
                  {referenceFiles.length === 0
                    ? "Upload reference photos"
                    : `${referenceFiles.length} file${referenceFiles.length > 1 ? "s" : ""} selected`}
                </label>
                <input
                  id="reference-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  style={{ display: "none" }}
                  onChange={e => setReferenceFiles(Array.from(e.target.files || []))}
                />
                {referenceFiles.length > 0 && (
                  <div style={{ marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {referenceFiles.map((f, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: "var(--font-host-grotesk)",
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "rgba(242,235,217,0.5)",
                          background: "rgba(242,235,217,0.06)",
                          padding: "3px 10px",
                          borderRadius: "2px",
                        }}
                      >
                        {f.name}
                      </span>
                    ))}
                    <button
                      type="button"
                      onClick={() => setReferenceFiles([])}
                      style={{
                        fontFamily: "var(--font-host-grotesk)",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#A63324",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "3px 6px",
                      }}
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>

              {/* Availability */}
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-host-grotesk)", fontWeight: 600, fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", marginBottom: "16px" }}>
                  When are you available?
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                  {/* Calendar */}
                  <div style={{ background: "rgba(242,235,217,0.04)", border: "1px solid rgba(242,235,217,0.1)", padding: "16px" }}>
                    <Calendar selected={selectedDate} onSelect={setSelectedDate} />
                    {selectedDate && (
                      <p style={{ fontFamily: "var(--font-host-grotesk)", fontSize: "12px", color: "#A63324", marginTop: "10px", textAlign: "center", fontWeight: 600 }}>
                        {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" })}
                      </p>
                    )}
                  </div>

                  {/* Time slots */}
                  <div style={{ background: "rgba(242,235,217,0.04)", border: "1px solid rgba(242,235,217,0.1)", padding: "16px", overflowY: "auto", maxHeight: "280px" }}>
                    <p style={{ fontFamily: "var(--font-host-grotesk)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(242,235,217,0.3)", marginBottom: "10px", textTransform: "uppercase" }}>Select a time</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                      {TIME_SLOTS.map(slot => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(isSelected ? "" : slot)}
                            style={{
                              padding: "7px 4px",
                              fontFamily: "var(--font-host-grotesk)",
                              fontSize: "12px",
                              fontWeight: isSelected ? 700 : 500,
                              background: isSelected ? "#A63324" : "transparent",
                              color: isSelected ? "#F2EBD9" : "rgba(242,235,217,0.6)",
                              border: "1px solid",
                              borderColor: isSelected ? "#A63324" : "rgba(242,235,217,0.1)",
                              cursor: "pointer",
                              borderRadius: "2px",
                              transition: "all 0.15s",
                              textAlign: "center",
                            }}
                            onMouseEnter={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(166,51,36,0.5)"; }}
                            onMouseLeave={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(242,235,217,0.1)"; }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
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
