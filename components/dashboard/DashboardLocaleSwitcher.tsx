"use client";

import { useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { colors, fontSize, radius } from "@/lib/design-tokens";

const LOCALES = [
  { code: "en", label: "EN", flag: "\u{1F1FA}\u{1F1F8}" },
  { code: "pt-BR", label: "PT", flag: "\u{1F1E7}\u{1F1F7}" },
  { code: "es", label: "ES", flag: "\u{1F1EA}\u{1F1F8}" },
];

export default function DashboardLocaleSwitcher() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params.locale as string) ?? "en";
  const current = LOCALES.find((l) => l.code === currentLocale) ?? LOCALES[0];

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
    setOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          background: colors.bgInput,
          border: `1px solid ${colors.borderInput}`,
          borderRadius: radius.md,
          color: colors.textSecondary,
          cursor: "pointer",
          fontSize: fontSize.sm,
          fontWeight: 500,
          transition: "all 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = colors.bgSecondaryHover;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = colors.bgInput;
        }}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 40 }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              zIndex: 50,
              background: "rgba(8,18,36,0.98)",
              border: `1px solid ${colors.borderSecondary}`,
              borderRadius: radius.lg,
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              padding: "6px",
              minWidth: "130px",
            }}
          >
            {LOCALES.map((locale) => (
              <button
                key={locale.code}
                onClick={() => switchLocale(locale.code)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 10px",
                  borderRadius: radius.sm,
                  background: locale.code === currentLocale ? colors.primaryBg : "transparent",
                  border: "none",
                  color: locale.code === currentLocale ? colors.textPrimary : colors.textMuted,
                  cursor: "pointer",
                  fontSize: fontSize.base,
                  textAlign: "left" as const,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (locale.code !== currentLocale)
                    (e.currentTarget as HTMLElement).style.background = colors.bgInput;
                }}
                onMouseLeave={(e) => {
                  if (locale.code !== currentLocale)
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span>{locale.flag}</span>
                <span style={{ flex: 1 }}>{locale.label}</span>
                {locale.code === currentLocale && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3 5-6" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
