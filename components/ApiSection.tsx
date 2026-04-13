"use client";

import { useTranslations } from "next-intl";

const codeSnippet = `// Issue a virtual card in seconds
const card = await zelt.cards.issue({
  program_id: "prg_xyz123",
  cardholder: {
    name: "Satoshi Nakamoto",
    kyc_status: "approved",
  },
  funding: {
    currency: "USDC",
    chain: "ethereum",
    spend_limit: 5000_00,
  },
  type: "virtual",
});

console.log(card.id);        // crd_8f2a...
console.log(card.pan_masked); // ****4821
console.log(card.status);    // "active"

// Listen for real-time events
zelt.webhooks.on("card.transaction.approved", (event) => {
  console.log(event.amount, event.merchant);
});`;

export default function ApiSection() {
  const t = useTranslations("api");
  const capabilities = t.raw("capabilities") as string[];

  return (
    <section
      id="api"
      className="py-28"
      style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium mb-3" style={{ color: "#60a5fa" }}>{t("label")}</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {t("title1")}{" "}
              <span className="gradient-text">{t("title2")}</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>{t("subtitle")}</p>

            <div className="space-y-3 mb-10">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{cap}</span>
                </div>
              ))}
            </div>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)", color: "#fff" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(59,130,246,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {t("cta")}
            </a>
          </div>

          {/* Code block */}
          <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(2,6,14,0.8)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 24px 80px rgba(0,0,0,0.4)" }}>
            <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
              <span className="ml-4 text-xs" style={{ fontFamily: "var(--font-mono, monospace)", color: "rgba(255,255,255,0.25)" }}>
                zelt-example.ts
              </span>
            </div>
            <pre className="p-6 text-xs leading-relaxed overflow-x-auto" style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", color: "rgba(255,255,255,0.75)" }}>
              {codeSnippet.split("\n").map((line, i) => {
                const formatted = line
                  .replace(/(\/\/.*)/g, '<span style="color:rgba(255,255,255,0.25)">$1</span>')
                  .replace(/(".*?")/g, '<span style="color:#86efac">$1</span>')
                  .replace(/(const|await|async|return|console\.log)/g, '<span style="color:#93c5fd">$1</span>');
                return <div key={i} dangerouslySetInnerHTML={{ __html: formatted || "&nbsp;" }} />;
              })}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
