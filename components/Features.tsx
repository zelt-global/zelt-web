"use client";

import { useTranslations } from "next-intl";

const ACCENT = "#3b82f6";

function CardVisual() {
  return (
    <div className="relative h-full flex items-center justify-center p-8">
      <div className="relative w-64">
        {/* Back card */}
        <div
          className="absolute w-full rounded-2xl p-5"
          style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)", transform: "rotate(4deg) translateY(8px)", zIndex: 1 }}
        >
          <div className="h-3 w-20 rounded mb-4" style={{ background: "rgba(59,130,246,0.2)" }} />
          <div className="h-3 w-32 rounded mb-2" style={{ background: "rgba(255,255,255,0.06)" }} />
          <div className="h-2 w-16 rounded" style={{ background: "rgba(255,255,255,0.04)" }} />
        </div>
        {/* Front card */}
        <div
          className="relative rounded-2xl p-5"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)", boxShadow: "0 16px 48px rgba(37,99,235,0.25)", zIndex: 2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="h-2 w-12 rounded" style={{ background: "rgba(255,255,255,0.5)" }} />
            <div className="w-8 h-5 rounded" style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b)" }} />
          </div>
          <div className="text-xs tracking-[0.2em] mb-4 font-mono" style={{ color: "rgba(255,255,255,0.55)" }}>•••• •••• •••• 4821</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>CARDHOLDER</div>
              <div className="text-xs font-semibold">SATOSHI N.</div>
            </div>
            <svg width="30" height="19" viewBox="0 0 38 24" fill="none">
              <circle cx="14" cy="12" r="12" fill="#EB001B" fillOpacity="0.85" />
              <circle cx="24" cy="12" r="12" fill="#F79E1B" fillOpacity="0.85" />
              <path d="M19 4.8C21.1 6.4 22.5 8.9 22.5 12C22.5 15.1 21.1 17.6 19 19.2C16.9 17.6 15.5 15.1 15.5 12C15.5 8.9 16.9 6.4 19 4.8Z" fill="#FF5F00" />
            </svg>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-1.5 rounded-xl z-10" style={{ background: "rgba(4,10,28,0.95)", border: "1px solid rgba(34,197,94,0.2)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
          <span className="text-[10px] font-semibold text-white">Active</span>
        </div>
      </div>
    </div>
  );
}

function ComplianceVisual() {
  const steps = [
    { label: "Identity check", status: "passed" },
    { label: "Document verify", status: "passed" },
    { label: "OFAC screening", status: "passed" },
    { label: "On-chain AML", status: "monitoring" },
  ];
  return (
    <div className="relative h-full flex items-center justify-center p-8">
      <div className="w-72 space-y-2.5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L2 5.5V10C2 14.5 5.5 18.5 10 20C14.5 18.5 18 14.5 18 10V5.5L10 2Z" fill={ACCENT} fillOpacity="0.25" stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1" strokeLinejoin="round" />
              <path d="M7 10.5L9 12.5L13 8.5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold">KYC Pipeline</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Sumsub · automated</div>
          </div>
        </div>
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: step.status === "passed" ? "rgba(34,197,94,0.12)" : "rgba(245,158,11,0.12)",
                border: step.status === "passed" ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(245,158,11,0.3)"
              }}
            >
              {step.status === "passed" ? (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f59e0b" }} />
              )}
            </div>
            <span className="text-xs flex-1">{step.label}</span>
            <span
              className="text-[10px] font-semibold capitalize"
              style={{ color: step.status === "passed" ? "#22c55e" : "#f59e0b" }}
            >{step.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiVisual() {
  const lines = [
    { content: "// Issue a card in seconds", type: "comment" },
    { content: "const card = await zelt.cards.issue({", type: "code" },
    { content: `  currency: "USDC",`, type: "string" },
    { content: "  limit: 5000_00,", type: "code" },
    { content: `  type: "virtual",`, type: "string" },
    { content: "});", type: "code" },
    { content: "", type: "empty" },
    { content: "// Real-time events", type: "comment" },
    { content: `zelt.on("card.tx", (e) => {`, type: "code" },
    { content: "  console.log(e.amount);", type: "code" },
    { content: "});", type: "code" },
  ];
  return (
    <div className="relative h-full flex items-center justify-center p-8">
      <div className="w-full max-w-xs rounded-xl overflow-hidden" style={{ background: "rgba(2,6,18,0.8)", border: "1px solid rgba(59,130,246,0.15)" }}>
        <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {["#ef4444","#f59e0b","#22c55e"].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
          <span className="ml-2 text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>zelt-api.ts</span>
        </div>
        <div className="p-4">
          {lines.map((line, i) => (
            <div key={i} className="text-[11px] leading-5 font-mono">
              {line.type === "empty" ? <>&nbsp;</> :
               line.type === "comment" ? <span style={{ color: "rgba(255,255,255,0.2)" }}>{line.content}</span> :
               line.type === "string" ? <span style={{ color: "#86efac" }}>{line.content}</span> :
               <span style={{ color: "#93c5fd" }}>{line.content}</span>}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
          <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>200 OK · 312ms</span>
        </div>
      </div>
    </div>
  );
}

const VISUALS = [CardVisual, ComplianceVisual, ApiVisual];

export default function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ title: string; desc: string; bullets: string[] }>;

  return (
    <section id="features" className="py-28" >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">{t("label")}</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
        </div>

        <div className="space-y-5">
          {items.map((item, i) => {
            const Visual = VISUALS[i];
            const reversed = i % 2 === 1;
            return (
              <div
                key={i}
                className={`rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[340px]`}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Text side */}
                <div className={`flex flex-col justify-center p-10 ${reversed ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 mb-5 self-start px-3 py-1.5 rounded-full" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                    <span className="text-xs font-semibold" style={{ color: "#93c5fd" }}>{`0${i + 1}`}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">{item.title}</h3>
                  <p className="text-base leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="8" cy="8" r="7.5" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.25)" />
                          <path d="M5 8l2 2 4-4" stroke={ACCENT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual side */}
                <div
                  className={`relative min-h-[280px] lg:min-h-0 ${reversed ? "lg:order-1" : ""}`}
                  style={{
                    borderLeft: reversed ? "none" : "1px solid rgba(255,255,255,0.07)",
                    borderRight: reversed ? "1px solid rgba(255,255,255,0.07)" : "none",
                    background: "rgba(0,0,0,0.12)"
                  }}
                >
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
