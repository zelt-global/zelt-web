"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 70%)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Copy */}
        <div>
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#93c5fd",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#3b82f6" }}
            />
            Visa Principal Issuer · Puerto Rico
          </div>

          <h1
            className="reveal-delay-1 text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Card infrastructure for the{" "}
            <span className="gradient-text">stablecoin economy</span>
          </h1>

          <p
            className="reveal-delay-2 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Launch your own crypto card program in 90 days. Zelt is a Visa
            Principal Issuer offering Card-as-a-Service backed by USDC and USDT
            — KYC managed, API-first, LATAM-ready.
          </p>

          <div className="reveal-delay-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(59,130,246,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              Book a Demo →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.8)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
              }}
            >
              How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="reveal-delay-4 flex gap-10 mt-14">
            {[
              { label: "Acceptance rate", value: "~95%" },
              { label: "Time to launch", value: "90 days" },
              { label: "Countries", value: "150+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold gradient-text-blue"
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Card visual */}
        <div className="relative flex items-center justify-center">
          {/* Glow orb */}
          <div
            className="absolute w-80 h-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Card 1 — Main */}
          <div
            className="card-float relative z-10 w-80 rounded-2xl p-6"
            style={{
              background:
                "linear-gradient(135deg, #1d4ed8 0%, #0e7490 100%)",
              boxShadow: "0 24px 80px rgba(29,78,216,0.4)",
              transform: "rotate(-4deg)",
            }}
          >
            {/* Card chip */}
            <div
              className="w-10 h-7 rounded-md mb-8"
              style={{
                background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
              }}
            />
            {/* Card number */}
            <div
              className="text-base tracking-[0.2em] mb-4 font-mono"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              •••• •••• •••• 4821
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div
                  className="text-xs mb-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  CARDHOLDER
                </div>
                <div className="text-sm font-semibold">SATOSHI N.</div>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className="w-7 h-7 rounded-full opacity-90"
                  style={{ background: "#ef4444" }}
                />
                <div
                  className="w-7 h-7 rounded-full -ml-3 opacity-90"
                  style={{ background: "#f97316" }}
                />
              </div>
            </div>
            <div
              className="absolute top-5 right-5 text-xs font-bold tracking-widest"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              VISA
            </div>
          </div>

          {/* Card 2 — Background */}
          <div
            className="card-float2 absolute w-72 rounded-2xl p-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(37,99,235,0.3) 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 40px rgba(6,182,212,0.15)",
              transform: "rotate(3deg) translate(60px, 30px)",
              zIndex: 5,
            }}
          >
            <div className="w-8 h-6 rounded mb-6" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="font-mono text-sm tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              •••• •••• •••• 7293
            </div>
            <div className="flex justify-between items-end">
              <div className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>VIRTUAL CARD</div>
              <div className="text-xs font-bold tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>VISA</div>
            </div>
          </div>

          {/* Floating badge — USDC */}
          <div
            className="absolute bottom-16 -left-4 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
            style={{
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: "#2775CA", color: "#fff" }}
            >
              $
            </div>
            <div>
              <div className="text-xs font-semibold">USDC Settlement</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                Instant · Circle
              </div>
            </div>
          </div>

          {/* Floating badge — Transaction */}
          <div
            className="absolute top-8 -right-2 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
            style={{
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
              style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa" }}
            >
              ✓
            </div>
            <div>
              <div className="text-xs font-semibold">$2,450.00 approved</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                Amazon · 0.3s
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #030b18)",
        }}
      />
    </section>
  );
}
