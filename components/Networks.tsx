"use client";

import { useTranslations } from "next-intl";

function EthIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20 4L8 20.5L20 26.5L32 20.5L20 4Z" fill="#627EEA" fillOpacity="0.9" />
      <path d="M20 4L8 20.5L20 26.5V4Z" fill="white" fillOpacity="0.25" />
      <path d="M20 29L8 22.5L20 36L32 22.5L20 29Z" fill="#627EEA" />
      <path d="M20 29L8 22.5L20 36V29Z" fill="white" fillOpacity="0.2" />
    </svg>
  );
}

function SolIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M9 27H28C28.3 27 28.5 27.1 28.7 27.3L31 29.7C31.4 30.1 31.1 30.7 30.6 30.7H11.5C11.2 30.7 11 30.6 10.8 30.4L8.5 28C8.1 27.6 8.4 27 9 27Z" fill="url(#s1)" />
      <path d="M9 9H28C28.3 9 28.5 9.1 28.7 9.3L31 11.7C31.4 12.1 31.1 12.7 30.6 12.7H11.5C11.2 12.7 11 12.6 10.8 12.4L8.5 10C8.1 9.6 8.4 9 9 9Z" fill="url(#s2)" />
      <path d="M30.6 18H11.5C11.2 18 11 18.1 10.8 18.3L8.5 20.7C8.1 21.1 8.4 21.7 9 21.7H28C28.3 21.7 28.5 21.6 28.7 21.4L31 19C31.4 18.6 31.1 18 30.6 18Z" fill="url(#s3)" />
      <defs>
        <linearGradient id="s1" x1="8" y1="28.85" x2="31" y2="28.85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9945FF" /><stop offset="1" stopColor="#14F195" />
        </linearGradient>
        <linearGradient id="s2" x1="8" y1="10.85" x2="31" y2="10.85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9945FF" /><stop offset="1" stopColor="#14F195" />
        </linearGradient>
        <linearGradient id="s3" x1="8" y1="19.85" x2="31" y2="19.85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9945FF" /><stop offset="1" stopColor="#14F195" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TronIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20 6L32 13.5L24.5 16L20 6Z" fill="#EF0027" fillOpacity="0.85" />
      <path d="M20 6L8 13.5L15.5 16L20 6Z" fill="#EF0027" fillOpacity="0.5" />
      <path d="M15.5 16L20 6L24.5 16L20 28L15.5 16Z" fill="#EF0027" />
      <path d="M24.5 16L32 13.5L27.5 27L24.5 16Z" fill="#EF0027" fillOpacity="0.55" />
      <path d="M15.5 16L8 13.5L12.5 27L15.5 16Z" fill="#EF0027" fillOpacity="0.35" />
    </svg>
  );
}

function PolygonIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20 5L6 13V27L20 35L34 27V13L20 5Z" stroke="#8247E5" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M26 17L20 13.5L14 17V24L20 27.5L26 24V17Z" fill="#8247E5" fillOpacity="0.65" />
    </svg>
  );
}

function UsdcIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="17" fill="#2775CA" />
      <circle cx="20" cy="20" r="4" fill="white" fillOpacity="0.9" />
      <text x="20" y="23.5" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#2775CA">$</text>
    </svg>
  );
}

function UsdtIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="17" fill="#26A17B" />
      <path d="M13 12H27V16H22V28H18V16H13V12Z" fill="white" />
      <path d="M14 18H26" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const chains = [
  { name: "Ethereum", symbol: "ETH", Icon: EthIcon },
  { name: "Solana", symbol: "SOL", Icon: SolIcon },
  { name: "Tron", symbol: "TRX", Icon: TronIcon },
  { name: "Polygon", symbol: "POL", Icon: PolygonIcon },
];

const stablecoins = [
  { name: "USDC", issuer: "Circle", Icon: UsdcIcon },
  { name: "USDT", issuer: "Tether", Icon: UsdtIcon },
];

export default function Networks() {
  const t = useTranslations("networks");

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Supported Networks */}
        <div>
          <p className="section-label mb-4">{t("networks_label")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {chains.map(({ name, symbol, Icon }) => (
              <div
                key={name}
                className="rounded-2xl p-5 flex flex-col items-start gap-3 lift"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Icon size={44} />
                <div>
                  <div className="text-sm font-bold text-white">{name}</div>
                  <div className="text-xs mt-0.5 font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>{symbol}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stablecoins */}
        <div className="mt-10">
          <p className="section-label mb-4">{t("stablecoins_label")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stablecoins.map(({ name, issuer, Icon }) => (
              <div
                key={name}
                className="rounded-2xl p-5 flex flex-col items-start gap-3 lift"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Icon size={44} />
                <div>
                  <div className="text-sm font-bold text-white">{name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
