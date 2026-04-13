"use client";

import { useTranslations } from "next-intl";

const ONRAMP_ICONS = ["🏦", "✓", "⚡", "💼"];
const OFFRAMP_ICONS = ["💎", "🔐", "⚡", "🏦"];

export default function RampSection() {
  const t = useTranslations("ramp");
  const onrampSteps = t.raw("onramp_steps") as string[];
  const offrampSteps = t.raw("offramp_steps") as string[];
  const currencies = t.raw("currencies") as Array<{ flag: string; currency: string; rails: string }>;

  const flows = [
    {
      dir: t("onramp_label"),
      sub: t("onramp_sub"),
      color: "#06b6d4",
      colorBg: "rgba(6,182,212,0.1)",
      colorBorder: "rgba(6,182,212,0.2)",
      steps: onrampSteps,
      icons: ONRAMP_ICONS,
    },
    {
      dir: t("offramp_label"),
      sub: t("offramp_sub"),
      color: "#3b82f6",
      colorBg: "rgba(59,130,246,0.1)",
      colorBorder: "rgba(59,130,246,0.2)",
      steps: offrampSteps,
      icons: OFFRAMP_ICONS,
    },
  ];

  return (
    <section
      id="ramp"
      className="py-28"
      style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "#22d3ee" }}>
            {t("label")}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {flows.map((flow) => (
            <div key={flow.dir} className="glass rounded-2xl p-8" style={{ border: `1px solid ${flow.colorBorder}` }}>
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                  style={{ background: flow.colorBg, color: flow.color, border: `1px solid ${flow.colorBorder}` }}
                >
                  {flow.dir}
                </div>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{flow.sub}</span>
              </div>

              <div className="space-y-3">
                {flow.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                      style={{ background: flow.colorBg, border: `1px solid ${flow.colorBorder}` }}
                    >
                      {flow.icons[i]}
                    </div>
                    <div className="text-sm font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-6 flex flex-wrap justify-center gap-8">
          <p className="w-full text-center text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
            {t("currencies_label")}
          </p>
          {currencies.map((c) => (
            <div key={c.currency} className="flex items-center gap-3">
              <span className="text-2xl">{c.flag}</span>
              <div>
                <div className="text-sm font-semibold">{c.currency}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{c.rails}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
