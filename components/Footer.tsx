"use client";

import Image from "next/image";

const links = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Ramp", href: "#ramp" },
    { label: "API Docs", href: "#api" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#demo" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "AML Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="md:col-span-2">
            <Image
              src="/logos/logo-white.png"
              alt="Zelt"
              width={88}
              height={26}
              className="h-7 w-auto mb-5"
            />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Card infrastructure for the stablecoin economy. Visa Principal
              Issuer, Puerto Rico. LATAM-first.
            </p>

            <div className="flex gap-4 mt-6">
              {["𝕏", "in", "gh"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 Zelt Inc. All rights reserved. Registered in Delaware. Operated from Puerto Rico.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
            MSB registered with FinCEN · IFE applicant (OCIF Puerto Rico) · Visa Principal Member application in progress
          </p>
        </div>
      </div>
    </footer>
  );
}
