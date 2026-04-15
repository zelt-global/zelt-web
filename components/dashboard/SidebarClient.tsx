"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "@/i18n/navigation";
import Link from "next/link";
import { stripLocale } from "@/lib/strip-locale";
import { colors, fontSize, radius } from "@/lib/design-tokens";

interface NavItem {
  key: string;
  label: string;
  href: string;
}

interface SidebarClientProps {
  navItems: NavItem[];
  isCollapsed: boolean;
}

const ICONS: Record<string, React.ReactNode> = {
  overview: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1.5" y="1.5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.5" y="1.5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1.5" y="10.5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.5" y="10.5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  cards: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1.5" y="4" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.5 7.5H16.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3.5" y="10.5" width="3.5" height="1.5" rx="0.75" fill="currentColor" />
    </svg>
  ),
  transactions: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2.5 6h13M11.5 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 12H2.5M6.5 8.5l-4 3.5 4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  apiKeys: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 11.5L16 17M13 14.5l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  settings: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 1.5V3M9 15v1.5M1.5 9H3M15 9h1.5M3.55 3.55l1.06 1.06M13.39 13.39l1.06 1.06M3.55 14.45l1.06-1.06M13.39 4.61l1.06-1.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const COLLAPSED_WIDTH = 60;
const EXPANDED_WIDTH = 240;

function NavLink({
  item,
  isCollapsed,
  isActive,
  onNavClick,
}: {
  item: NavItem;
  isCollapsed: boolean;
  isActive: boolean;
  onNavClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={item.href}
      onClick={onNavClick}
      title={isCollapsed ? item.label : undefined}
      aria-current={isActive ? "page" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: isCollapsed ? 0 : "10px",
        justifyContent: isCollapsed ? "center" : "flex-start",
        padding: isCollapsed ? "9px" : "8px 10px",
        borderRadius: radius.md,
        fontSize: fontSize.md,
        fontWeight: isActive ? 500 : 400,
        color: isActive ? colors.textPrimary : hovered ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)",
        background: isActive
          ? colors.primaryBg
          : hovered
          ? colors.bgInput
          : "transparent",
        textDecoration: "none",
        transition: "background 0.15s, color 0.15s",
        whiteSpace: "nowrap",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {isActive && !isCollapsed && (
        <span
          style={{
            position: "absolute",
            left: 0,
            top: "20%",
            bottom: "20%",
            width: "3px",
            borderRadius: "0 2px 2px 0",
            background: colors.primary,
          }}
        />
      )}
      <span
        style={{
          color: isActive ? colors.primaryLight : hovered ? colors.textSecondary : colors.textFaint,
          flexShrink: 0,
          display: "flex",
          transition: "color 0.15s",
        }}
      >
        {ICONS[item.key]}
      </span>
      {!isCollapsed && item.label}
    </Link>
  );
}

function NavContent({
  navItems,
  isCollapsed,
  onNavClick,
}: {
  navItems: NavItem[];
  isCollapsed: boolean;
  onNavClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        background: colors.bgSidebar,
        borderRight: `1px solid ${colors.border}`,
        overflow: "hidden",
        transition: "background 0.2s, border-color 0.2s",
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: isCollapsed ? "20px 0 16px" : "18px 14px 16px",
          display: "flex",
          justifyContent: isCollapsed ? "center" : "flex-start",
          alignItems: "center",
          flexShrink: 0,
          borderBottom: isCollapsed ? "none" : `1px solid ${colors.borderSubtle}`,
          marginBottom: isCollapsed ? "8px" : "0",
        }}
      >
        {isCollapsed ? (
          <Image
            src="/logos/z-white.svg"
            alt="Zelt"
            width={32}
            height={32}
            style={{ width: "32px", height: "32px" }}
          />
        ) : (
          <Image
            src="/logos/logo-white.png"
            alt="Zelt"
            width={80}
            height={24}
            style={{ height: "24px", width: "auto" }}
          />
        )}
      </div>

      {/* Nav items */}
      <nav
        aria-label="Dashboard navigation"
        style={{
          flex: 1,
          padding: isCollapsed ? "0 8px" : "8px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {navItems.map((item) => {
          const normalizedPath = stripLocale(pathname);
          const itemPath = item.href.replace(/^\/[^/]+/, "");
          const isActive =
            itemPath === "/dashboard"
              ? normalizedPath === "/dashboard" || normalizedPath === ""
              : normalizedPath.startsWith(itemPath);

          return (
            <NavLink
              key={item.key}
              item={item}
              isCollapsed={isCollapsed}
              isActive={isActive}
              onNavClick={onNavClick}
            />
          );
        })}
      </nav>
    </div>
  );
}

export default function SidebarClient({
  navItems,
  isCollapsed,
}: SidebarClientProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarWidth = isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH;

  return (
    <>
      <aside
        className="hidden md:block"
        style={{
          width: `${sidebarWidth}px`,
          flexShrink: 0,
          height: "100vh",
          transition: "width 0.22s cubic-bezier(0.4,0,0.2,1)",
          overflow: "hidden",
        }}
      >
        <NavContent navItems={navItems} isCollapsed={isCollapsed} />
      </aside>

      <button
        className="md:hidden"
        onClick={() => setMobileOpen(true)}
        style={{
          position: "fixed",
          top: "14px",
          left: "14px",
          zIndex: 50,
          background: colors.border,
          border: `1px solid ${colors.borderSecondary}`,
          borderRadius: radius.md,
          padding: "8px",
          cursor: "pointer",
          color: colors.textSecondary,
        }}
        aria-label="Open menu"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {mobileOpen && (
        <div className="md:hidden">
          <div
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: colors.bgOverlay,
              zIndex: 45,
              backdropFilter: "blur(4px)",
            }}
          />
          <aside
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: `${EXPANDED_WIDTH}px`,
              height: "100vh",
              zIndex: 50,
              overflow: "hidden",
            }}
          >
            <NavContent
              navItems={navItems}
              isCollapsed={false}
              onNavClick={() => setMobileOpen(false)}
            />
          </aside>
        </div>
      )}
    </>
  );
}
