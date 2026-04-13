"use client";

import { useTranslations } from "next-intl";

const STEP_NUMS = ["01", "02", "03", "04"];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Array<{ title: string; desc: string }>;

  return (
    <section id="how-it-works" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "#60a5fa" }}>
            {t("label")}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div key={i} className="glass rounded-2xl p-7 lift relative overflow-hidden">
              <div className="absolute -top-3 -right-2 text-8xl font-black pointer-events-none select-none" style={{ color: "rgba(255,255,255,0.03)" }}>
                {STEP_NUMS[i]}
              </div>
              <div
                className="text-sm font-mono font-bold mb-5 inline-block px-2.5 py-1 rounded-lg"
                style={{ background: "rgba(59,130,246,0.12)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.2)" }}
              >
                {STEP_NUMS[i]}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px" style={{ background: "rgba(59,130,246,0.3)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
