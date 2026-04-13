"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function DemoSection() {
  const t = useTranslations("demo");
  const [form, setForm] = useState({ name: "", email: "", company: "", volume: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fields = [
    { key: "name", label: t("field_name"), placeholder: t("field_name_placeholder"), type: "text" },
    { key: "email", label: t("field_email"), placeholder: t("field_email_placeholder"), type: "email" },
    { key: "company", label: t("field_company"), placeholder: t("field_company_placeholder"), type: "text", full: true },
  ];

  const volumeOptions = [
    { value: "<1m", label: t("volume_1") },
    { value: "1m-5m", label: t("volume_2") },
    { value: "5m-20m", label: t("volume_3") },
    { value: "20m+", label: t("volume_4") },
  ];

  return (
    <section
      id="demo"
      className="py-28"
      style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.1) 0%, transparent 70%)" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-medium mb-3" style={{ color: "#60a5fa" }}>{t("label")}</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.45)" }}>{t("subtitle")}</p>
        </div>

        {submitted ? (
          <div className="glass rounded-2xl p-12 text-center" style={{ border: "1px solid rgba(59,130,246,0.3)" }}>
            <div className="text-4xl mb-4">{t("success_emoji")}</div>
            <h3 className="text-2xl font-bold mb-2">{t("success_title")}</h3>
            <p style={{ color: "rgba(255,255,255,0.45)" }}>{t("success_text")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              {fields.map((field) => (
                <div key={field.key} className={field.full ? "md:col-span-2" : ""}>
                  <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(59,130,246,0.5)"; e.target.style.background = "rgba(59,130,246,0.06)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {t("field_volume")}
                </label>
                <select
                  required
                  value={form.volume}
                  onChange={(e) => setForm((f) => ({ ...f, volume: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: form.volume ? "#fff" : "rgba(255,255,255,0.35)" }}
                >
                  <option value="" disabled style={{ background: "#030b18" }}>{t("field_volume_placeholder")}</option>
                  {volumeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} style={{ background: "#030b18" }}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full font-semibold text-base transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)", color: "#fff" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(59,130,246,0.5)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
            >
              {t("cta")}
            </button>

            <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>{t("note")}</p>
          </form>
        )}
      </div>
    </section>
  );
}
