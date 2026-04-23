"use client";

import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("pricing");
  const plans = t.raw("plans") as Array<{
    name: string;
    tagline: string;
    setup: string;
    monthly: string;
    rev: string;
    features: string[];
  }>;

  return (
    <section id="pricing" className="py-28" >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">{t("label")}</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, idx) => {
            const highlight = idx === 1;
            return (
              <div
                key={plan.name}
                className="rounded-2xl p-8 flex flex-col"
                style={
                  highlight
                    ? { background: "rgba(37,99,235,0.1)", border: "1px solid rgba(59,130,246,0.3)" }
                    : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }
                }
              >
                {highlight && (
                  <div className="text-xs font-semibold px-3 py-1 rounded-full self-start mb-4" style={{ background: "#2563eb", color: "#fff" }}>
                    {t("most_popular")}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-black mb-1">{plan.name}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{plan.tagline}</p>
                </div>

                <div className="pb-6 mb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{plan.setup}</span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>{t("setup_label")}</span>
                  </div>
                  <div className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {plan.monthly !== "Custom" && plan.monthly !== "Customizado" && plan.monthly !== "Personalizado"
                      ? `${plan.monthly} ${t("monthly_fee")}`
                      : t("monthly_fee_custom")}
                  </div>
                  <div className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {plan.rev === "0%" ? t("interchange_note") : plan.rev}
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                        <circle cx="7" cy="7" r="7" fill={highlight ? "#3b82f6" : "rgba(255,255,255,0.08)"} />
                        <path d="M4 7l2 2 4-4" stroke={highlight ? "#fff" : "rgba(255,255,255,0.5)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ color: "rgba(255,255,255,0.65)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className="block text-center py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={
                    highlight
                      ? { background: "#2563eb", color: "#fff" }
                      : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }
                  }
                  onMouseEnter={(e) => {
                    if (highlight) {
                      (e.currentTarget as HTMLElement).style.background = "#1d4ed8";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,99,235,0.4)";
                    } else {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                    if (highlight) {
                      (e.currentTarget as HTMLElement).style.background = "#2563eb";
                    } else {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                    }
                  }}
                >
                  {idx === 2 ? t("cta_contact") : t("cta_start")}
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "rgba(255,255,255,0.25)" }}>
          {t("collateral_note")}
        </p>
      </div>
    </section>
  );
}
