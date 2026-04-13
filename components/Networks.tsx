export default function Networks() {
  const chains = [
    { name: "Ethereum", symbol: "ETH", color: "#627EEA", bg: "rgba(98,126,234,0.12)" },
    { name: "Solana", symbol: "SOL", color: "#9945FF", bg: "rgba(153,69,255,0.12)" },
    { name: "Polygon", symbol: "POL", color: "#8247E5", bg: "rgba(130,71,229,0.12)" },
    { name: "Tron", symbol: "TRX", color: "#EF0027", bg: "rgba(239,0,39,0.12)" },
    { name: "Base", symbol: "BASE", color: "#0052FF", bg: "rgba(0,82,255,0.12)", soon: true },
    { name: "Arbitrum", symbol: "ARB", color: "#12AAFF", bg: "rgba(18,170,255,0.12)", soon: true },
  ];

  const stablecoins = [
    { name: "USDC", issuer: "Circle", color: "#2775CA", bg: "rgba(39,117,202,0.12)" },
    { name: "USDT", issuer: "Tether", color: "#26A17B", bg: "rgba(38,161,123,0.12)" },
  ];

  return (
    <section className="py-20 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium mb-10" style={{ color: "rgba(255,255,255,0.3)" }}>
          SUPPORTED NETWORKS & STABLECOINS
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full lift"
              style={{
                background: chain.bg,
                border: `1px solid ${chain.color}30`,
              }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ background: chain.color, color: "#fff" }}
              >
                {chain.symbol[0]}
              </div>
              <span className="text-sm font-medium">{chain.name}</span>
              {chain.soon && (
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
                >
                  Soon
                </span>
              )}
            </div>
          ))}

          <div
            className="w-px mx-2 self-stretch"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />

          {stablecoins.map((sc) => (
            <div
              key={sc.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full lift"
              style={{
                background: sc.bg,
                border: `1px solid ${sc.color}30`,
              }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ background: sc.color, color: "#fff" }}
              >
                $
              </div>
              <span className="text-sm font-medium">{sc.name}</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                {sc.issuer}
              </span>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {["Visa Principal Issuer", "Circle Partner", "Fireblocks", "Thredd", "Sumsub", "Chainalysis"].map(
            (p) => (
              <span key={p} className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.2)" }}>
                {p}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
