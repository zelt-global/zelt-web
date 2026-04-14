"use client";

import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import { useState } from "react";
import { stripLocale } from "@/lib/strip-locale";
import { colors, fontSize, radius } from "@/lib/design-tokens";

interface SettingsSection {
  key: string;
  label: string;
  href: string;
}

interface SettingsSidebarProps {
  sections: SettingsSection[];
  title: string;
}

const ICONS: Record<string, React.ReactNode> = {
  profile: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 14c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  security: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5L2 4v4c0 3.314 2.686 6 6 6s6-2.686 6-6V4L8 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5.5 8l1.5 1.5L10.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  billing: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.4" />
      <rect x="3.5" y="9" width="3" height="1.5" rx="0.75" fill="currentColor" />
    </svg>
  ),
  team: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1.5 13c0-2.485 2.015-4.5 4.5-4.5S10.5 10.515 10.5 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="11.5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 13c0-1.933-1.12-3.6-2.75-4.35" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  notifications: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5A4.5 4.5 0 003.5 6v2.5L2 10.5h12l-1.5-2V6A4.5 4.5 0 008 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6.5 10.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
};

function SectionLink({ section, isActive }: { section: SettingsSection; isActive: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={section.href}
      aria-current={isActive ? "page" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        padding: "7px 10px",
        borderRadius: radius.sm,
        fontSize: fontSize.base,
        fontWeight: isActive ? 500 : 400,
        color: isActive ? colors.textPrimary : hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)",
        background: isActive ? colors.primaryBg : hovered ? colors.bgCardHover : "transparent",
        textDecoration: "none",
        transition: "background 0.15s, color 0.15s",
        position: "relative",
      }}
    >
      {isActive && (
        <span
          style={{
            position: "absolute",
            left: 0,
            top: "18%",
            bottom: "18%",
            width: "2.5px",
            borderRadius: "0 2px 2px 0",
            background: colors.primary,
          }}
        />
      )}
      <span
        style={{
          color: isActive ? colors.primaryLight : hovered ? colors.textMuted : colors.textGhost,
          flexShrink: 0,
          display: "flex",
          transition: "color 0.15s",
        }}
      >
        {ICONS[section.key]}
      </span>
      {section.label}
    </Link>
  );
}

export default function SettingsSidebar({ sections, title }: SettingsSidebarProps) {
  const pathname = usePathname();

  return (
    <div
      style={{
        width: "210px",
        flexShrink: 0,
        borderRight: `1px solid ${colors.borderSubtle}`,
        display: "flex",
        flexDirection: "column",
        padding: "28px 10px 20px",
        gap: "1px",
      }}
    >
      <p
        style={{
          fontSize: fontSize.xs,
          fontWeight: 600,
          color: colors.textGhost,
          textTransform: "uppercase",
          letterSpacing: "0.09em",
          padding: "0 10px",
          margin: "0 0 8px",
        }}
      >
        {title}
      </p>
      {sections.map((section) => {
        const normalizedPath = stripLocale(pathname);
        const isActive = normalizedPath.startsWith(`/dashboard/settings/${section.key}`);
        return <SectionLink key={section.key} section={section} isActive={isActive} />;
      })}
    </div>
  );
}
