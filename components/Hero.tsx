"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Subtle glow behind card */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="reveal-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-semibold" style={{ color: "#93c5fd" }}>Card-as-a-Service · LATAM</span>
          </div>

          <h1 className="reveal-delay-1 text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight mb-6">
            <span className="block">{t("headline1")}</span>
            <span className="block">{t("headline2")}</span>
            <span className="block gradient-text">{t("headline3")}</span>
          </h1>

          <p className="reveal-delay-2 text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            {t("subtext")}
          </p>

          <div className="reveal-delay-3 flex flex-col sm:flex-row gap-3">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
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
              {t("cta_demo")}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
              }}
            >
              {t("cta_how")}
            </a>
          </div>

          {/* Stats */}
          <div className="reveal-delay-4 flex gap-14 mt-14 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { value: t("stat_acceptance_value"), label: t("stat_acceptance_label") },
              { value: t("stat_launch_value"), label: t("stat_launch_label") },
              { value: t("stat_countries_value"), label: t("stat_countries_label") },
            ].map((stat) => (
              <div key={stat.label} className="whitespace-nowrap">
                <div className="text-5xl lg:text-6xl font-black text-white">{stat.value}</div>
                <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Card stack visual */}
        <div className="relative flex items-center justify-center min-h-[480px]">

          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 55% 50%, rgba(20,10,5,0.6) 0%, transparent 70%)" }} />

          {/* Card back-left */}
          <div
            className="absolute rounded-[22px] w-96"
            style={{
              height: "222px",
              background: "linear-gradient(145deg, #0d2a5e 0%, #091a3d 100%)",
              border: "1px solid rgba(96,165,250,0.08)",
              transform: "rotate(-12deg) translate(-88px, 32px)",
              zIndex: 6,
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div />
              <div>
                <div className="font-mono text-sm tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.12)" }}>48•• •••• •••• ••••</div>
                <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.1)" }}>CARD HOLDER</div>
              </div>
            </div>
          </div>

          {/* Card middle */}
          <div
            className="absolute rounded-[22px] w-96"
            style={{
              height: "222px",
              background: "linear-gradient(145deg, #1a3d7a 0%, #0f2554 100%)",
              border: "1px solid rgba(96,165,250,0.12)",
              transform: "rotate(-5deg) translate(-24px, 16px)",
              zIndex: 7,
              boxShadow: "0 24px 70px rgba(0,0,0,0.6)",
            }}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div />
              <div>
                <div className="font-mono text-sm tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.18)" }}>52•• •••• •••• ••••</div>
                <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.15)" }}>CARD HOLDER</div>
              </div>
            </div>
          </div>

          {/* Card front (main) */}
          <div
            className="card-float relative rounded-[22px] w-96"
            style={{
              height: "222px",
              background: "linear-gradient(145deg, #2563eb 0%, #1d4ed8 55%, #1e40af 100%)",
              border: "1px solid rgba(96,165,250,0.25)",
              zIndex: 10,
              boxShadow: "0 32px 80px rgba(37,99,235,0.4), 0 0 60px rgba(37,99,235,0.15)",
            }}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="text-base font-black tracking-wide text-white">Your Company</div>
                {/* Chip */}
                <div className="w-10 h-8 rounded-md" style={{ background: "linear-gradient(135deg, #d4a84b 0%, #b8872a 50%, #e0b860 100%)", border: "1px solid rgba(255,220,120,0.3)" }}>
                  <div className="w-full h-full rounded-md" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)" }} />
                </div>
              </div>
              <div>
                <div className="font-mono text-sm tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                  •••• •••• •••• 2251
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.75)" }}>CARD HOLDER</div>
                  </div>
                  {/* Visa */}
                  <svg width="52" height="18" viewBox="0 0 52 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="16" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="900" fontStyle="italic" fill="white" opacity="0.9" letterSpacing="-0.5">VISA</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Badge Tx */}
          <div className="absolute top-6 -right-2 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-xl" style={{ background: "rgba(5,13,31,0.95)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.2)" }}>
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path d="M1.5 5.5L5 9L12.5 1.5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold">{t("badge_tx")}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{t("badge_tx_sub")}</div>
            </div>
          </div>

          {/* Badge USDC */}
          <div className="absolute bottom-14 -left-4 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-xl" style={{ background: "rgba(5,13,31,0.95)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" fill="#2775CA" />
              <circle cx="14" cy="14" r="4" fill="white" fillOpacity="0.9" />
              <text x="14" y="17.5" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#2775CA">$</text>
            </svg>
            <div>
              <div className="text-xs font-semibold">{t("badge_usdc")}</div>
              <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>ERC-20 · SPL · TRC-20</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, #050d1f)" }} />
    </section>
  );
}
