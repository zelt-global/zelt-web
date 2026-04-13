"use client";

import { useTranslations } from "next-intl";

const ICONS = ["💳", "🔐", "⚡", "📱", "🌎", "🔗"];
const ACCENTS = ["#3b82f6", "#06b6d4", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"];
const SPANS = ["md:col-span-2", "", "", "", "", ""];

export default function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;

  return (
    <section id="features" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "#60a5fa" }}>
            {t("label")}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={i} className={`glass rounded-2xl p-8 lift ${SPANS[i]}`} style={{ position: "relative", overflow: "hidden" }}>
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${ACCENTS[i]}20 0%, transparent 70%)`, transform: "translate(30%, -30%)" }}
              />
              <div
                className="text-2xl mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${ACCENTS[i]}15`, border: `1px solid ${ACCENTS[i]}25` }}
              >
                {ICONS[i]}
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
