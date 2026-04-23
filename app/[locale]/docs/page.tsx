"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Sidebar nav structure ────────────────────────────────────────────────────
const NAV = [
  {
    section: "Getting Started",
    items: [
      { label: "Introduction", id: "introduction", active: true },
      { label: "Authentication", id: "authentication" },
      { label: "Environments", id: "environments" },
      { label: "Errors & Rate Limits", id: "errors" },
    ],
  },
  {
    section: "Card Issuance",
    items: [
      { label: "Issue a Virtual Card", id: "issue-card" },
      { label: "Issue a Physical Card", id: "physical-card" },
      { label: "Manage Cards", id: "manage-cards" },
      { label: "Card Controls", id: "card-controls" },
    ],
  },
  {
    section: "Payments",
    items: [
      { label: "Stablecoin Funding", id: "funding" },
      { label: "Transactions", id: "transactions" },
      { label: "Local Rails (PIX / SPEI)", id: "local-rails" },
      { label: "FX & Settlement", id: "settlement" },
    ],
  },
  {
    section: "Compliance",
    items: [
      { label: "KYC / KYB", id: "kyc" },
      { label: "AML Monitoring", id: "aml" },
      { label: "Cardholder Onboarding", id: "cardholder" },
    ],
  },
  {
    section: "Webhooks",
    items: [
      { label: "Overview", id: "webhooks" },
      { label: "Event Types", id: "events" },
      { label: "Retry Policy", id: "retry" },
    ],
  },
  {
    section: "API Reference",
    items: [
      { label: "Cards", id: "ref-cards" },
      { label: "Transactions", id: "ref-transactions" },
      { label: "Cardholders", id: "ref-cardholders" },
      { label: "Webhooks", id: "ref-webhooks" },
    ],
  },
];

// ─── Code snippet ─────────────────────────────────────────────────────────────
const CODE_ISSUE = `const card = await zelt.cards.issue({
  program_id: "prg_xyz123",
  cardholder: {
    name: "Maria Silva",
    kyc_status: "approved",
  },
  funding: {
    currency: "USDC",
    chain: "ethereum",
    spend_limit: 500000,   // in cents
  },
  type: "virtual",
});

console.log(card.id);         // crd_8f2a...
console.log(card.pan_masked); // ****4821
console.log(card.status);     // "active"`;

const CODE_AUTH = `curl -X GET https://api.zelt.finance/v1/cards \\
  -H "Authorization: Bearer zelt_live_sk_xxxxxxxxxxxx" \\
  -H "Content-Type: application/json"`;

const CODE_WEBHOOK = `// Payload example — card.transaction.approved
{
  "id": "evt_01hx...",
  "type": "card.transaction.approved",
  "created_at": "2026-04-17T14:32:00Z",
  "data": {
    "card_id": "crd_8f2a...",
    "amount": 4500,
    "currency": "USD",
    "merchant": "Amazon",
    "status": "approved"
  }
}`;

// ─── CodeBlock component ──────────────────────────────────────────────────────
function CodeBlock({ code, lang = "typescript" }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlighted = code
    .replace(/(\/\/.*)/g, '<span style="color:#64748b">$1</span>')
    .replace(/(".*?")/g, '<span style="color:#86efac">$1</span>')
    .replace(/\b(const|await|async|return|curl|GET|POST)\b/g, '<span style="color:#93c5fd">$1</span>')
    .replace(/\b(true|false|null)\b/g, '<span style="color:#fca5a5">$1</span>');

  return (
    <div className="rounded-xl overflow-hidden mb-6" style={{ background: "#0d1117", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#161b22" }}>
        <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>{lang}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md transition-all duration-150"
          style={{ color: copied ? "#4ade80" : "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.05)" }}
        >
          {copied ? (
            <><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L4.5 8.5L10 3" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Copied</>
          ) : (
            <><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="4" y="1" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="1" y="3" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/></svg>Copy</>
          )}
        </button>
      </div>
      <pre
        className="p-5 text-xs overflow-x-auto leading-relaxed"
        style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", color: "rgba(255,255,255,0.75)" }}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}

// ─── InfoBox component ────────────────────────────────────────────────────────
function InfoBox({ type = "info", children }: { type?: "info" | "warning" | "tip"; children: React.ReactNode }) {
  const styles = {
    info: { bg: "rgba(37,99,235,0.08)", border: "rgba(59,130,246,0.25)", icon: "ℹ", color: "#60a5fa" },
    warning: { bg: "rgba(234,179,8,0.07)", border: "rgba(234,179,8,0.25)", icon: "⚠", color: "#fbbf24" },
    tip: { bg: "rgba(34,197,94,0.07)", border: "rgba(34,197,94,0.25)", icon: "✦", color: "#4ade80" },
  }[type];

  return (
    <div className="flex gap-3 rounded-xl p-4 mb-6 text-sm leading-relaxed" style={{ background: styles.bg, border: `1px solid ${styles.border}` }}>
      <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: styles.color }}>{styles.icon}</span>
      <div style={{ color: "rgba(255,255,255,0.7)" }}>{children}</div>
    </div>
  );
}

// ─── StepCard component ───────────────────────────────────────────────────────
function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4 rounded-xl p-5 mb-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-black" style={{ background: "rgba(37,99,235,0.15)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.25)" }}>{n}</div>
      <div>
        <div className="font-semibold text-white mb-1">{title}</div>
        <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(NAV.map((n) => [n.section, true]))
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSection = (s: string) => setOpenSections((p) => ({ ...p, [s]: !p[s] }));

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#050d1f", color: "#fff" }}>

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-5 h-14" style={{ background: "rgba(5,13,31,0.95)", borderBottom: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center gap-5">
          {/* Mobile menu toggle */}
          <button className="lg:hidden p-1" onClick={() => setSidebarOpen((v) => !v)} style={{ color: "rgba(255,255,255,0.5)" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/logo-white.png" alt="Zelt" width={72} height={22} className="h-5 w-auto" />
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(37,99,235,0.15)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.2)" }}>Docs</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {["Guides", "API Reference", "Changelog"].map((tab) => (
              <button key={tab} className="px-3 py-1.5 rounded-lg text-sm transition-colors duration-150" style={{ color: tab === "Guides" ? "#fff" : "rgba(255,255,255,0.45)", background: tab === "Guides" ? "rgba(255,255,255,0.07)" : "transparent" }}>
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-xs px-2 py-1 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)" }}>v1.0</span>
          <Link href="/" className="text-sm transition-colors duration-150" style={{ color: "rgba(255,255,255,0.45)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
          >← Back to site</Link>
          <a href="#demo" className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-150" style={{ background: "#2563eb", color: "#fff" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1d4ed8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563eb")}
          >Get API Key</a>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        {/* ── Sidebar ── */}
        <aside
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-64 flex-shrink-0 overflow-y-auto pt-14 lg:pt-0 transition-transform duration-200`}
          style={{ background: "#030a18", borderRight: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="p-4">
            {/* Search */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg mb-5 text-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/><path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
              Search docs…
              <span className="ml-auto text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>⌘K</span>
            </div>

            {/* Nav sections */}
            {NAV.map(({ section, items }) => (
              <div key={section} className="mb-1">
                <button
                  className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors duration-150 mb-0.5"
                  style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}
                  onClick={() => toggleSection(section)}
                >
                  {section}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: openSections[section] ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </button>
                {openSections[section] && (
                  <ul className="space-y-0.5 mb-3">
                    {items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
                          className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150"
                          style={{
                            color: activeSection === item.id ? "#fff" : "rgba(255,255,255,0.45)",
                            background: activeSection === item.id ? "rgba(37,99,235,0.15)" : "transparent",
                            borderLeft: activeSection === item.id ? "2px solid #3b82f6" : "2px solid transparent",
                          }}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Sidebar backdrop (mobile) */}
        {sidebarOpen && <div className="fixed inset-0 z-20 lg:hidden" style={{ background: "rgba(0,0,0,0.6)" }} onClick={() => setSidebarOpen(false)} />}

        {/* ── Main content ── */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 py-12">

            {/* ── Introduction ── */}
            {activeSection === "introduction" && (
              <article>
                <p className="section-label mb-3">Getting Started</p>
                <h1 className="text-4xl font-black tracking-tight mb-4">Introduction</h1>
                <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.75" }}>
                  The Zelt API lets you issue Visa payment cards, settle in USDC or USDT, manage cardholders, and listen to real-time transaction events — all from a single REST API built for Latin America.
                </p>

                <InfoBox type="tip">
                  New to Zelt? Start with a sandbox account. You get full API access, test cards, and simulated transactions — no KYB required to explore.
                </InfoBox>

                <h2 className="text-2xl font-black tracking-tight mt-10 mb-6">Quick Start</h2>
                <StepCard n="1" title="Create your account" desc="Sign up and get your sandbox API key from the dashboard. Takes under 2 minutes." />
                <StepCard n="2" title="Make your first API call" desc="Authenticate with your Bearer token and issue a virtual card in seconds." />
                <StepCard n="3" title="Receive webhooks" desc="Subscribe to real-time events like card.transaction.approved to build your product logic." />
                <StepCard n="4" title="Go live" desc="Complete KYB, Visa certification, and our team gets you live in 30 days." />

                <h2 className="text-2xl font-black tracking-tight mt-10 mb-4">What you can build</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: "💳", title: "Corporate cards", desc: "Issue virtual or physical Visa cards for employees, contractors, or end users." },
                    { icon: "⚡", title: "Crypto-to-card", desc: "Let users spend USDC/USDT balances with a Visa card at any merchant." },
                    { icon: "🌎", title: "LATAM neobank", desc: "Launch a full card program with PIX or SPEI funding in one country or the whole region." },
                    { icon: "🔧", title: "Embedded finance", desc: "White-label cards in your existing product without building card infrastructure." },
                  ].map((c) => (
                    <div key={c.title} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="text-2xl mb-3">{c.icon}</div>
                      <div className="font-semibold text-white mb-1">{c.title}</div>
                      <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{c.desc}</div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-black tracking-tight mt-10 mb-4">Issue your first card</h2>
                <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>Use the SDK or call the REST endpoint directly. The example below issues a virtual card funded by USDC on Ethereum.</p>
                <CodeBlock code={CODE_ISSUE} lang="typescript" />

                <div className="flex gap-3 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <button onClick={() => setActiveSection("authentication")} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-150" style={{ background: "#2563eb", color: "#fff" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1d4ed8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563eb")}
                  >Next: Authentication →</button>
                </div>
              </article>
            )}

            {/* ── Authentication ── */}
            {activeSection === "authentication" && (
              <article>
                <p className="section-label mb-3">Getting Started</p>
                <h1 className="text-4xl font-black tracking-tight mb-4">Authentication</h1>
                <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.75" }}>
                  All API requests must be authenticated using a Bearer token. You can generate API keys from the dashboard.
                </p>

                <InfoBox type="warning">
                  Never expose your secret key in client-side code. Use it only in server-side environments. Rotate keys immediately if compromised.
                </InfoBox>

                <h2 className="text-2xl font-black tracking-tight mt-8 mb-4">API Key format</h2>
                <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>Keys are prefixed to indicate their environment:</p>
                <div className="rounded-xl overflow-hidden mb-6" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  {[["zelt_live_sk_…", "Production secret key", "#4ade80"], ["zelt_test_sk_…", "Sandbox secret key", "#fbbf24"]].map(([key, desc, color]) => (
                    <div key={key} className="flex items-center gap-4 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <code className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.05)", color }}>{key}</code>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{desc}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-black tracking-tight mt-8 mb-4">Making a request</h2>
                <CodeBlock code={CODE_AUTH} lang="bash" />

                <div className="flex gap-3 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <button onClick={() => setActiveSection("introduction")} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-150" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}>← Introduction</button>
                  <button onClick={() => setActiveSection("environments")} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-150" style={{ background: "#2563eb", color: "#fff" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1d4ed8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563eb")}
                  >Next: Environments →</button>
                </div>
              </article>
            )}

            {/* ── Environments ── */}
            {activeSection === "environments" && (
              <article>
                <p className="section-label mb-3">Getting Started</p>
                <h1 className="text-4xl font-black tracking-tight mb-4">Environments</h1>
                <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.75" }}>
                  Zelt provides two separate environments. Use sandbox for development and testing — it mirrors production behavior without processing real transactions.
                </p>
                <div className="rounded-xl overflow-hidden mb-8" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  {[
                    ["Sandbox", "https://api.sandbox.zelt.finance/v1", "Test cards, simulated transactions, no real money"],
                    ["Production", "https://api.zelt.finance/v1", "Live cards, real transactions, Visa network"],
                  ].map(([env, url, desc]) => (
                    <div key={env} className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-white">{env}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: env === "Sandbox" ? "rgba(234,179,8,0.1)" : "rgba(34,197,94,0.1)", color: env === "Sandbox" ? "#fbbf24" : "#4ade80", border: `1px solid ${env === "Sandbox" ? "rgba(234,179,8,0.25)" : "rgba(34,197,94,0.25)"}` }}>{env === "Sandbox" ? "Test" : "Live"}</span>
                      </div>
                      <code className="text-xs font-mono" style={{ color: "#60a5fa" }}>{url}</code>
                      <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{desc}</p>
                    </div>
                  ))}
                </div>
                <InfoBox type="info">Sandbox cards use the BIN range <code style={{ color: "#93c5fd" }}>401700xxxxxx</code>. Transactions are simulated and do not reach the Visa network.</InfoBox>

                <div className="flex gap-3 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <button onClick={() => setActiveSection("authentication")} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-150" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}>← Authentication</button>
                  <button onClick={() => setActiveSection("issue-card")} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-150" style={{ background: "#2563eb", color: "#fff" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1d4ed8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563eb")}
                  >Next: Issue a Card →</button>
                </div>
              </article>
            )}

            {/* ── Issue Card ── */}
            {activeSection === "issue-card" && (
              <article>
                <p className="section-label mb-3">Card Issuance</p>
                <h1 className="text-4xl font-black tracking-tight mb-4">Issue a Virtual Card</h1>
                <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.75" }}>
                  Virtual cards are issued instantly via API. Each card is tied to a cardholder, a program, and a funding source (USDC or USDT).
                </p>
                <CodeBlock code={CODE_ISSUE} lang="typescript" />
                <InfoBox type="info">The <code style={{ color: "#93c5fd" }}>spend_limit</code> field is in the smallest currency unit (cents). $5,000.00 = <code style={{ color: "#93c5fd" }}>500000</code>.</InfoBox>
              </article>
            )}

            {/* ── Webhooks ── */}
            {activeSection === "webhooks" && (
              <article>
                <p className="section-label mb-3">Webhooks</p>
                <h1 className="text-4xl font-black tracking-tight mb-4">Webhooks Overview</h1>
                <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.75" }}>
                  Webhooks let you receive real-time notifications when events happen in your Zelt account — card approvals, declines, disputes, and more.
                </p>
                <CodeBlock code={CODE_WEBHOOK} lang="json" />
                <InfoBox type="tip">Validate webhook signatures using the <code style={{ color: "#93c5fd" }}>Zelt-Signature</code> header to ensure authenticity of every event.</InfoBox>
              </article>
            )}

            {/* ── Fallback for unimplemented sections ── */}
            {!["introduction", "authentication", "environments", "issue-card", "webhooks"].includes(activeSection) && (
              <article>
                <p className="section-label mb-3">Documentation</p>
                <h1 className="text-4xl font-black tracking-tight mb-4 capitalize">{activeSection.replace(/-/g, " ")}</h1>
                <div className="rounded-2xl p-12 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-4xl mb-4">🚧</div>
                  <h2 className="text-xl font-black mb-2">Coming soon</h2>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>This section is being written. Check back soon or contact <a href="mailto:team@zelt.finance" style={{ color: "#60a5fa" }}>team@zelt.finance</a>.</p>
                </div>
              </article>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
