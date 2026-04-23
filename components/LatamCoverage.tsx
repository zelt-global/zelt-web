"use client";

const COUNTRIES = [
  { name: "Brasil", flag: "🇧🇷", rail: "PIX" },
  { name: "México", flag: "🇲🇽", rail: "SPEI" },
  { name: "Colombia", flag: "🇨🇴", rail: "PSE" },
  { name: "Argentina", flag: "🇦🇷", rail: "CVU" },
  { name: "Chile", flag: "🇨🇱", rail: "CLP" },
  { name: "Peru", flag: "🇵🇪", rail: "PEN" },
  { name: "Uruguay", flag: "🇺🇾", rail: "UYU" },
  { name: "Paraguai", flag: "🇵🇾", rail: "PYG" },
  { name: "Ecuador", flag: "🇪🇨", rail: "USD" },
  { name: "Bolivia", flag: "🇧🇴", rail: "BOB" },
  { name: "Venezuela", flag: "🇻🇪", rail: "USD" },
  { name: "Costa Rica", flag: "🇨🇷", rail: "CRC" },
];

function LatamMapSVG() {
  return (
    <svg viewBox="0 0 320 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Mexico */}
      <path d="M40 60 L120 55 L130 75 L125 95 L100 105 L80 110 L55 100 L35 80 Z" fill="rgba(59,130,246,0.18)" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
      {/* Central America strip */}
      <path d="M100 105 L125 95 L135 115 L130 130 L110 135 L95 125 Z" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
      {/* Colombia */}
      <path d="M110 140 L155 135 L165 155 L160 175 L140 180 L115 170 L105 155 Z" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
      {/* Venezuela */}
      <path d="M155 135 L210 132 L215 150 L205 165 L175 168 L165 155 Z" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
      {/* Ecuador */}
      <path d="M105 180 L140 178 L145 200 L135 215 L108 212 L100 195 Z" fill="rgba(59,130,246,0.18)" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
      {/* Peru */}
      <path d="M100 215 L145 212 L155 240 L150 275 L125 285 L100 270 L90 245 Z" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
      {/* Brazil */}
      <path d="M155 155 L240 145 L270 165 L285 195 L290 230 L280 265 L255 285 L225 300 L195 310 L168 300 L152 280 L150 245 L155 215 L165 185 Z" fill="rgba(59,130,246,0.22)" stroke="rgba(59,130,246,0.45)" strokeWidth="1.2" />
      {/* Bolivia */}
      <path d="M130 280 L165 275 L175 305 L165 330 L140 335 L120 315 L125 292 Z" fill="rgba(59,130,246,0.16)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
      {/* Chile */}
      <path d="M118 320 L140 318 L148 350 L145 390 L138 420 L125 445 L112 440 L108 410 L112 375 L115 345 Z" fill="rgba(59,130,246,0.18)" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
      {/* Argentina */}
      <path d="M140 318 L185 308 L200 330 L200 365 L192 400 L175 425 L155 440 L138 432 L130 408 L132 375 L135 348 Z" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.1" />
      {/* Paraguay */}
      <path d="M165 305 L198 300 L205 325 L195 340 L168 342 L158 325 Z" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
      {/* Uruguay */}
      <path d="M195 340 L220 335 L228 355 L218 370 L198 368 L190 355 Z" fill="rgba(59,130,246,0.18)" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
      {/* Glow dots on major cities */}
      <circle cx="185" cy="250" r="4" fill="#3b82f6" fillOpacity="0.6" />
      <circle cx="185" cy="250" r="8" fill="#3b82f6" fillOpacity="0.15" />
      <circle cx="85" cy="80" r="3" fill="#3b82f6" fillOpacity="0.5" />
      <circle cx="85" cy="80" r="6" fill="#3b82f6" fillOpacity="0.1" />
      <circle cx="137" cy="155" r="3" fill="#3b82f6" fillOpacity="0.5" />
      <circle cx="170" cy="350" r="3" fill="#3b82f6" fillOpacity="0.5" />
      <circle cx="210" cy="180" r="3" fill="#3b82f6" fillOpacity="0.4" />
    </svg>
  );
}

export default function LatamCoverage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Map */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
            <div className="w-64 lg:w-80 opacity-90">
              <LatamMapSVG />
            </div>
          </div>

          {/* Right: Text + country chips */}
          <div className="order-1 lg:order-2">
            <p className="section-label mb-4">LATAM COVERAGE</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Do México à Terra do Fogo.{" "}
              <span className="gradient-text">Sem barreiras.</span>
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              A Zelt foi construída para os mercados da América Latina. Suportamos trilhos locais como PIX e SPEI, compliance multi-jurisdicional e emissão de cartões em qualquer país da região.
            </p>

            {/* Country chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {COUNTRIES.map(({ name, flag, rail }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span>{flag}</span>
                  <span className="font-medium text-white">{name}</span>
                  <span className="text-xs font-mono" style={{ color: "#60a5fa" }}>{rail}</span>
                </div>
              ))}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}
              >
                <span className="text-xs font-semibold" style={{ color: "#60a5fa" }}>+139 países</span>
              </div>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "150+", label: "Países aceitos" },
                { value: "PIX + SPEI", label: "Rails locais" },
                { value: "< 5s", label: "Liquidação" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="text-xl font-black text-white mb-1">{value}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
