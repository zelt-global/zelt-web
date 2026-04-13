"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const sections = [
    {
      title: t("sections.product"),
      links: [
        { label: t("links.howItWorks"), href: "#how-it-works" },
        { label: t("links.features"), href: "#features" },
        { label: t("links.ramp"), href: "#ramp" },
        { label: t("links.apiDocs"), href: "#api" },
        { label: t("links.pricing"), href: "#pricing" },
      ],
    },
    {
      title: t("sections.company"),
      links: [
        { label: t("links.about"), href: "#" },
        { label: t("links.blog"), href: "#" },
        { label: t("links.careers"), href: "#" },
        { label: t("links.press"), href: "#" },
        { label: t("links.contact"), href: "#demo" },
      ],
    },
    {
      title: t("sections.legal"),
      links: [
        { label: t("links.privacy"), href: "#" },
        { label: t("links.terms"), href: "#" },
        { label: t("links.aml"), href: "#" },
        { label: t("links.cookie"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="pt-16 pb-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-14">
          <div className="md:col-span-2">
            <Image src="/logos/logo-white.png" alt="Zelt" width={88} height={26} className="h-7 w-auto mb-5" />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              {t("tagline")}
            </p>
            <div className="flex gap-4 mt-6">
              {["𝕏", "in", "gh"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
                {sec.title}
              </h4>
              <ul className="space-y-2.5">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>{t("copyright")}</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
