"use client";

import { useState } from "react";
import UserMenu from "./UserMenu";
import DashboardLocaleSwitcher from "./DashboardLocaleSwitcher";
import { colors, radius } from "@/lib/design-tokens";

interface DashboardHeaderProps {
  user: { name: string; email: string; picture?: string };
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export default function DashboardHeader({
  user,
  isCollapsed,
  onToggleCollapse,
}: DashboardHeaderProps) {
  const [toggleHovered, setToggleHovered] = useState(false);

  return (
    <header
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        flexShrink: 0,
        gap: "10px",
      }}
    >
      <button
        onClick={onToggleCollapse}
        onMouseEnter={() => setToggleHovered(true)}
        onMouseLeave={() => setToggleHovered(false)}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
          height: "32px",
          borderRadius: radius.sm,
          background: toggleHovered ? colors.bgSecondary : "transparent",
          border: "none",
          color: toggleHovered ? colors.textSecondary : colors.textFaint,
          cursor: "pointer",
          transition: "background 0.15s, color 0.15s",
          padding: 0,
          marginRight: "auto",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1.5" y="2.5" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M6.5 2.5v13" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </button>

      <DashboardLocaleSwitcher />
      <UserMenu user={user} />
    </header>
  );
}
