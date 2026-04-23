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
    <section id="api" className="py-28" >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">{t("label")}</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
              {t("title1")}{" "}
              <span className="gradient-text">{t("title2")}</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>{t("subtitle")}</p>

            <div className="space-y-3 mb-10">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{cap}</span>
                </div>
              ))}
            </div>

            <a
              href="/docs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
              style={{ background: "#2563eb", color: "#fff" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1d4ed8";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(37,99,235,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2563eb";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {t("cta")}
            </a>
          </div>

          {/* Code block */}
          <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(2,6,18,0.9)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
              <span className="ml-4 text-xs" style={{ fontFamily: "var(--font-mono, monospace)", color: "rgba(255,255,255,0.2)" }}>
                zelt-example.ts
              </span>
            </div>
            <pre className="p-6 text-xs leading-relaxed overflow-x-auto" style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", color: "rgba(255,255,255,0.7)" }}>
              {codeSnippet.split("\n").map((line, i) => {
                const formatted = line
                  .replace(/(\/\/.*)/g, '<span style="color:rgba(255,255,255,0.22)">$1</span>')
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
