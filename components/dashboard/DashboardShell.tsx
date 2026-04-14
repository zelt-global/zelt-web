"use client";

import { useState, useEffect } from "react";
import { usePathname } from "@/i18n/navigation";
import SidebarClient from "./SidebarClient";
import DashboardHeader from "./DashboardHeader";

interface NavItem {
  key: string;
  label: string;
  href: string;
}

interface DashboardShellProps {
  navItems: NavItem[];
  user: { name: string; email: string; picture?: string };
  children: React.ReactNode;
}

export default function DashboardShell({
  navItems,
  user,
  children,
}: DashboardShellProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  // Detect settings route — works whether usePathname includes locale or not
  const isSettingsRoute =
    pathname.includes("/dashboard/settings") ||
    pathname.includes("/settings/profile") ||
    pathname.includes("/settings/security") ||
    pathname.includes("/settings/billing") ||
    pathname.includes("/settings/team") ||
    pathname.includes("/settings/notifications");

  // Auto-collapse when entering settings
  useEffect(() => {
    if (isSettingsRoute) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [isSettingsRoute]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        background: "#030b18",
        color: "#fff",
        fontFamily: "var(--font-outfit, sans-serif)",
      }}
    >
      <SidebarClient navItems={navItems} isCollapsed={isCollapsed} />

      {/* Right column: toolbar + scrollable content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          overflowY: "auto",
        }}
      >
        <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
          <DashboardHeader
            user={user}
            isCollapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed((c) => !c)}
          />
        </div>
        <main
          style={{
            flex: 1,
            padding: isSettingsRoute ? "0" : "32px",
            maxWidth: isSettingsRoute ? "none" : "1200px",
            marginLeft: isSettingsRoute ? "0" : "auto",
            marginRight: isSettingsRoute ? "0" : "auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
