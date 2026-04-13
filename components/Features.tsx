const features = [
  {
    icon: "💳",
    title: "Virtual & Physical Cards",
    desc: "Issue Visa virtual cards instantly via API. Physical cards shipped globally through Thales / IDEMIA with custom branding.",
    accent: "#3b82f6",
    span: "md:col-span-2",
  },
  {
    icon: "🔐",
    title: "KYC/AML Managed",
    desc: "Full compliance stack included — Sumsub KYC, Chainalysis on-chain monitoring, and OFAC screening. Delegate or self-serve.",
    accent: "#06b6d4",
    span: "",
  },
  {
    icon: "⚡",
    title: "Instant Settlement",
    desc: "USDC burns via Circle at point of sale. USDT via institutional OTC. Settlement lands same day, no float required from you.",
    accent: "#8b5cf6",
    span: "",
  },
  {
    icon: "📱",
    title: "Apple Pay & Google Pay",
    desc: "Tokenization via Thredd — your cardholders tap to pay worldwide from day one. No extra integration work needed.",
    accent: "#10b981",
    span: "",
  },
  {
    icon: "🌎",
    title: "LATAM-First Infrastructure",
    desc: "Puerto Rico Principal Membership gives direct US network access. PIX (BRL), SPEI (MXN), and ACH rails built-in.",
    accent: "#f59e0b",
    span: "",
  },
  {
    icon: "🔗",
    title: "Full API + Webhooks",
    desc: "REST API for card issuance, auth controls, spend limits, and transaction streaming. iFrame widget for PCI scope reduction.",
    accent: "#ef4444",
    span: "",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "#60a5fa" }}>
            FEATURES
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Everything your card program{" "}
            <span className="gradient-text">needs to scale</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`glass rounded-2xl p-8 lift ${f.span}`}
              style={{ position: "relative", overflow: "hidden" }}
            >
              {/* Accent corner glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${f.accent}20 0%, transparent 70%)`,
                  transform: "translate(30%, -30%)",
                }}
              />

              <div
                className="text-2xl mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${f.accent}15`, border: `1px solid ${f.accent}25` }}
              >
                {f.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
