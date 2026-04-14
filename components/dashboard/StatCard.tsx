import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  trendPositive: boolean;
  icon: ReactNode;
}

export default function StatCard({
  label,
  value,
  trend,
  trendPositive,
  icon,
}: StatCardProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))",
          border: "1px solid rgba(59,130,246,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#60a5fa",
        }}
      >
        {icon}
      </div>

      {/* Value + label */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {value}
        </span>
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
          {label}
        </span>
      </div>

      {/* Trend badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "12px",
          fontWeight: 500,
          color: trendPositive ? "#34d399" : "rgba(255,255,255,0.4)",
          background: trendPositive ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.05)",
          border: `1px solid ${trendPositive ? "rgba(52,211,153,0.2)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: "20px",
          padding: "3px 10px",
          alignSelf: "flex-start",
        }}
      >
        {trendPositive && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2L9 7H1L5 2Z" fill="currentColor" />
          </svg>
        )}
        {trend}
      </div>
    </div>
  );
}
