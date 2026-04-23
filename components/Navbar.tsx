"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";

const LOCALES = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "pt-BR", label: "PT", flag: "🇧🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export default function Navbar({ isAuthenticated = false }: { isAuthenticated?: boolean }) {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params.locale as string) ?? "en";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
    setLangOpen(false);
    setMenuOpen(false);
  };

  const isHome = pathname === "/";
  const navLinks = [
    { label: t("howItWorks"), href: isHome ? "#how-it-works" : `/${currentLocale}#how-it-works` },
    { label: t("features"), href: isHome ? "#features" : `/${currentLocale}#features` },
    { label: t("api"), href: isHome ? "#api" : `/${currentLocale}#api` },
  ];

  const currentLang = LOCALES.find((l) => l.code === currentLocale) ?? LOCALES[0];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(3,11,24,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${currentLocale}`} className="flex items-center">
          <Image
            src="/logos/logo-white.png"
            alt="Zelt"
            width={88}
            height={26}
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <span>{currentLang.flag}</span>
              <span className="font-medium">{currentLang.label}</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-0.5">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {langOpen && (
              <div
                className="absolute right-0 top-10 rounded-xl py-1 min-w-[120px] z-50"
                style={{
                  background: "rgba(10,20,40,0.97)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                {LOCALES.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => switchLocale(locale.code)}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors duration-150 text-left"
                    style={{
                      color: locale.code === currentLocale ? "#fff" : "rgba(255,255,255,0.55)",
                      background: locale.code === currentLocale ? "rgba(59,130,246,0.12)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (locale.code !== currentLocale)
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      if (locale.code !== currentLocale)
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <span>{locale.flag}</span>
                    <span className="font-medium">{locale.label}</span>
                    {locale.code === currentLocale && (
                      <svg className="ml-auto" width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5l3 3 7-7" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={isAuthenticated ? `/${currentLocale}/dashboard` : `/auth/login?returnTo=/${currentLocale}/dashboard`}
            className="text-sm transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            {isAuthenticated ? t("dashboard") : t("logIn")}
          </a>

          <a
            href={isHome ? "#demo" : `/${currentLocale}#demo`}
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)", color: "#fff" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(59,130,246,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            {t("bookDemo")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="w-5 h-px bg-white mb-1.5" />
          <div className="w-5 h-px bg-white mb-1.5" />
          <div className="w-5 h-px bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: "rgba(3,11,24,0.98)" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              {link.label}
            </a>
          ))}

          {/* Mobile lang switcher */}
          <div className="flex gap-2 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {LOCALES.map((locale) => (
              <button
                key={locale.code}
                onClick={() => switchLocale(locale.code)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm"
                style={{
                  background: locale.code === currentLocale ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${locale.code === currentLocale ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.08)"}`,
                  color: locale.code === currentLocale ? "#93c5fd" : "rgba(255,255,255,0.5)",
                }}
              >
                {locale.flag} {locale.label}
              </button>
            ))}
          </div>

          <a
            href="#demo"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold px-5 py-2.5 rounded-full text-center"
            style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
          >
            {t("bookDemo")}
          </a>
        </div>
      )}
    </header>
  );
}
