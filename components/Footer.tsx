"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  const sections = [
    {
      title: t("sections.product"),
      links: [
        { label: t("links.howItWorks"), href: "#how-it-works" },
        { label: t("links.features"), href: "#features" },
        //{ label: t("links.apiDocs"), href: "/docs" },
      ],
    },
    {
      title: t("sections.company"),
      links: [
        { label: t("links.about"), href: "/about" },
        { label: t("links.contact"), href: "mail:hello@zelt.global" },
      ],
    },
    {
      title: t("sections.legal"),
      links: [
        { label: t("links.privacy"), href: "/privacy" },
        { label: t("links.terms"), href: "/terms" },
      ],
    },
  ];

  return (
    <footer style={{ background: "#020810", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      {/* Top band with blue accent */}
      <div className="px-6 py-5" style={{ background: "rgba(37,99,235,0.08)", borderBottom: "1px solid rgba(59,130,246,0.12)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white">{t("cta_title")}</p>
          <a
            href="#demo"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 flex-shrink-0"
            style={{ background: "#2563eb", color: "#fff" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1d4ed8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; }}
          >
            {t("cta_button")}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-5 gap-10 mb-14">
          <div className="md:col-span-2">
            <Image src="/logos/logo-white.png" alt="Zelt" width={88} height={26} className="h-7 w-auto mb-5" />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              {t("tagline")}
            </p>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>
                {sec.title}
              </h4>
              <ul className="space-y-2.5">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                      <Link
                        href={link.href as "/about" | "/privacy" | "/terms" | "/docs"}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>{t("copyright")}</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.12)" }}>{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
