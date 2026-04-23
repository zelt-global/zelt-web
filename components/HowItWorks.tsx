"use client";

import { useTranslations } from "next-intl";

const STEP_NUMS = ["01", "02", "03", "04"];

function StepIcon({ index }: { index: number }) {
  const color = "#3b82f6";
  if (index === 0) return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 10h10M4 14h12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="19" cy="14" r="3.5" stroke={color} strokeWidth="1.5" />
      <path d="M17.5 14L18.5 15L20.5 13" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (index === 1) return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="3" stroke={color} strokeWidth="1.5" />
      <path d="M2 9h20" stroke={color} strokeWidth="1.5" />
      <rect x="5" y="13" width="5" height="2" rx="1" fill={color} fillOpacity="0.5" />
    </svg>
  );
  if (index === 2) return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 6.5V12C3 17 7 21.5 12 23C17 21.5 21 17 21 12V6.5L12 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 12l2.5 2.5L16 9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.5" />
      <path d="M8 12l3 3 5-6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Array<{ title: string; desc: string }>;

  return (
    <section id="how-it-works" className="py-28" >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">{t("label")}</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col relative"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
                  <StepIcon index={i} />
                </div>
                <span className="text-xs font-black font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
                  {STEP_NUMS[i]}
                </span>
              </div>
              <h3 className="text-base font-bold mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-10 -right-3 z-10 items-center">
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                    <path d="M0 8H18M15 4l4 4-4 4" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
