"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const TIMEZONES = [
  "America/Sao_Paulo",
  "America/Mexico_City",
  "America/Bogota",
  "America/Argentina/Buenos_Aires",
  "America/Santiago",
  "America/Lima",
  "America/Montevideo",
  "America/Asuncion",
  "America/Guayaquil",
  "America/La_Paz",
  "America/Caracas",
  "America/Costa_Rica",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Lisbon",
  "Europe/Madrid",
  "UTC",
];

export default function DemoSection() {
  const t = useTranslations("demo");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // network error — still show success to user
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="demo" className="py-28">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-4">{t("label")}</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.45)" }}>{t("subtitle")}</p>
        </div>

        {submitted ? (
          <div className="rounded-2xl p-12 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(59,130,246,0.2)" }}>
            <div className="text-4xl mb-4">{t("success_emoji")}</div>
            <h3 className="text-2xl font-black mb-2">{t("success_title")}</h3>
            <p style={{ color: "rgba(255,255,255,0.45)" }}>{t("success_text")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl p-8 md:p-10 space-y-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="grid md:grid-cols-2 gap-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>{t("field_name")}</label>
                <input
                  type="text"
                  placeholder={t("field_name_placeholder")}
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(59,130,246,0.5)"; e.target.style.background = "rgba(59,130,246,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>{t("field_email")}</label>
                <input
                  type="email"
                  placeholder={t("field_email_placeholder")}
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(59,130,246,0.5)"; e.target.style.background = "rgba(59,130,246,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>

              {/* Company */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>{t("field_company")}</label>
                <input
                  type="text"
                  placeholder={t("field_company_placeholder")}
                  required
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(59,130,246,0.5)"; e.target.style.background = "rgba(59,130,246,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>

              {/* Message (optional) */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>{t("field_message")}</label>
                <textarea
                  placeholder={t("field_message_placeholder")}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(59,130,246,0.5)"; e.target.style.background = "rgba(59,130,246,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>

            </div>

            {error && (
              <p className="text-sm text-center" style={{ color: "#f87171" }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full font-semibold text-base transition-all duration-200 disabled:opacity-60"
              style={{ background: "#2563eb", color: "#fff" }}
              onMouseEnter={(e) => { if (!loading) { (e.currentTarget as HTMLElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(37,99,235,0.4)"; } }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
            >
              {loading ? "..." : t("cta")}
            </button>

          </form>
        )}
      </div>
    </section>
  );
}
