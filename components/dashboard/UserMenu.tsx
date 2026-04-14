"use client";

import { useState } from "react";
import { colors, fontSize, radius } from "@/lib/design-tokens";

interface UserMenuProps {
  user: { name: string; email: string; picture?: string };
}

export default function UserMenu({ user }: UserMenuProps) {
  const [open, setOpen] = useState(false);

  const initials = user.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "34px",
          height: "34px",
          borderRadius: radius.circle,
          background: colors.gradient,
          border: `2px solid ${colors.borderSecondary}`,
          cursor: "pointer",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: colors.textPrimary,
          fontSize: fontSize.sm,
          fontWeight: 600,
          flexShrink: 0,
          padding: 0,
        }}
        aria-label="User menu"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {user.picture ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.picture}
            alt={user.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          initials
        )}
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
              borderRadius: radius.xl,
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              minWidth: "220px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "14px 16px",
                borderBottom: `1px solid ${colors.borderSubtle}`,
              }}
            >
              <div style={{ fontSize: fontSize.base, fontWeight: 600, color: colors.textPrimary }}>
                {user.name}
              </div>
              <div style={{ fontSize: fontSize.xs, color: colors.textMuted, marginTop: "2px" }}>
                {user.email}
              </div>
            </div>

            <div style={{ padding: "6px" }}>
              <a
                href="/auth/logout"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 10px",
                  borderRadius: radius.md,
                  fontSize: fontSize.base,
                  color: colors.textSecondary,
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = colors.bgCardHover;
                  (e.currentTarget as HTMLElement).style.color = colors.textPrimary;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = colors.textSecondary;
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 11l4-3-4-3M14 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Log out
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
