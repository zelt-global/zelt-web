"use client";

import { useTranslations } from "next-intl";

const NAV_ITEMS = [
  { label: "Overview", active: true },
  { label: "Cards", active: false },
  { label: "Transactions", active: false },
  { label: "API Keys", active: false },
  { label: "Settings", active: false },
];

const STAT_CARDS = [
  { label: "Active Cards", color: "#3b82f6" },
  { label: "Monthly Volume", color: "#3b82f6" },
  { label: "Approval Rate", color: "#3b82f6" },
  { label: "API Calls (24h)", color: "#3b82f6" },
];

const TX_ROWS = [
  { merchant: "Shopify Store", type: "Purchase", network: "ETH", status: "Approved", statusColor: "#22c55e" },
  { merchant: "AWS Services", type: "Subscription", network: "SOL", status: "Approved", statusColor: "#22c55e" },
  { merchant: "Binance", type: "Withdrawal", network: "TRX", status: "Pending", statusColor: "#f59e0b" },
  { merchant: "Netflix", type: "Subscription", network: "POL", status: "Approved", statusColor: "#22c55e" },
];

export default function ProductShowcase() {
  const t = useTranslations("showcase");

  return (
    <section className="py-28" >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">{t("label")}</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="mx-auto max-w-5xl rounded-2xl overflow-hidden" style={{ background: "rgba(4,10,28,0.98)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}>
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
            <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
            <div className="ml-4 flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-md text-xs" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.25)" }}>
                app.zelt.finance/dashboard
              </div>
            </div>
          </div>

          {/* App layout */}
          <div className="flex" style={{ minHeight: 420 }}>
            {/* Sidebar */}
            <div className="w-48 flex-shrink-0 flex flex-col py-5 px-3" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="px-3 mb-6">
                <div className="h-3.5 w-14 rounded" style={{ background: "rgba(255,255,255,0.12)" }} />
              </div>
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-1 text-xs font-medium"
                  style={{
                    background: item.active ? "rgba(59,130,246,0.1)" : "transparent",
                    color: item.active ? "#93c5fd" : "rgba(255,255,255,0.3)",
                    borderLeft: item.active ? "2px solid #3b82f6" : "2px solid transparent",
                  }}
                >
                  <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0" style={{ background: item.active ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.08)" }} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-semibold mb-1">Overview</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Your card program at a glance</div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 rounded-lg text-xs" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}>
                    Last 30 days
                  </div>
                  <div className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ background: "#2563eb", color: "#fff" }}>
                    + Issue Card
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {STAT_CARDS.map((s) => (
                  <div key={s.label} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="text-[10px] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</div>
                    <div className="h-4 rounded mb-2" style={{ background: "rgba(59,130,246,0.15)", width: "70%" }} />
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
                      <div className="h-2 rounded" style={{ background: "rgba(34,197,94,0.15)", width: 40 }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Transactions table */}
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
                  <span className="text-xs font-semibold">Recent Transactions</span>
                  <div className="h-2 rounded w-12" style={{ background: "rgba(255,255,255,0.06)" }} />
                </div>
                {TX_ROWS.map((tx, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 text-xs"
                    style={{ borderBottom: i < TX_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                  >
                    <div className="w-7 h-7 rounded-lg flex-shrink-0" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.15)" }} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{tx.merchant}</div>
                      <div style={{ color: "rgba(255,255,255,0.3)" }}>{tx.type}</div>
                    </div>
                    <div className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)" }}>
                      {tx.network}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: tx.statusColor }} />
                      <span style={{ color: tx.statusColor }}>{tx.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
