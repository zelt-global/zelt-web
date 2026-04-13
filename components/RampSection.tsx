export default function RampSection() {
  const flows = [
    {
      dir: "Onramp",
      sub: "Fiat → Stablecoin",
      color: "#06b6d4",
      colorBg: "rgba(6,182,212,0.1)",
      colorBorder: "rgba(6,182,212,0.2)",
      steps: [
        { label: "PIX / Wire / ACH", icon: "🏦" },
        { label: "Fiat received & validated", icon: "✓" },
        { label: "Circle Mint USDC", icon: "⚡" },
        { label: "Stablecoin in wallet", icon: "💼" },
      ],
    },
    {
      dir: "Offramp",
      sub: "Stablecoin → Fiat",
      color: "#3b82f6",
      colorBg: "rgba(59,130,246,0.1)",
      colorBorder: "rgba(59,130,246,0.2)",
      steps: [
        { label: "USDC / USDT sent", icon: "💎" },
        { label: "On-chain AML screening", icon: "🔐" },
        { label: "Circle Burn → USD", icon: "⚡" },
        { label: "Wire / ACH / PIX / SPEI", icon: "🏦" },
      ],
    },
  ];

  return (
    <section
      id="ramp"
      className="py-28"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "#22d3ee" }}>
            RAMP-AS-A-SERVICE
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            The bridge between{" "}
            <span className="gradient-text">crypto and real money</span>
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Onramp and Offramp in both directions. USD, BRL, and MXN rails
            built-in. The same infrastructure that powers your card program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {flows.map((flow) => (
            <div
              key={flow.dir}
              className="glass rounded-2xl p-8"
              style={{ border: `1px solid ${flow.colorBorder}` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                  style={{
                    background: flow.colorBg,
                    color: flow.color,
                    border: `1px solid ${flow.colorBorder}`,
                  }}
                >
                  {flow.dir}
                </div>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {flow.sub}
                </span>
              </div>

              <div className="space-y-3">
                {flow.steps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                      style={{ background: flow.colorBg, border: `1px solid ${flow.colorBorder}` }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{step.label}</div>
                    </div>
                    {i < flow.steps.length - 1 && (
                      <div className="absolute ml-[18px] mt-9 w-px h-3" style={{ background: `${flow.color}40` }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currencies row */}
        <div
          className="glass rounded-2xl p-6 flex flex-wrap justify-center gap-8"
        >
          <p className="w-full text-center text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
            SUPPORTED CURRENCIES & RAILS
          </p>
          {[
            { flag: "🇺🇸", currency: "USD", rails: "ACH · Wire · SWIFT" },
            { flag: "🇧🇷", currency: "BRL", rails: "PIX (instant)" },
            { flag: "🇲🇽", currency: "MXN", rails: "SPEI" },
          ].map((c) => (
            <div key={c.currency} className="flex items-center gap-3">
              <span className="text-2xl">{c.flag}</span>
              <div>
                <div className="text-sm font-semibold">{c.currency}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {c.rails}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
