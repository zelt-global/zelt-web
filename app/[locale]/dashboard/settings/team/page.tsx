import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/dashboard/PageHeader";
import { colors, fontSize, radius, cardStyle, buttonStyle } from "@/lib/design-tokens";

const members = [
  { name: "Wesley Campos", email: "wesley@zelt.io", role: "Owner", initials: "WC", joined: "Jan 2026", color: "#3b82f6" },
  { name: "Ana Lima", email: "ana@zelt.io", role: "Admin", initials: "AL", joined: "Jan 2026", color: "#8b5cf6" },
  { name: "Carlos Mena", email: "carlos@zelt.io", role: "Developer", initials: "CM", joined: "Feb 2026", color: "#06b6d4" },
  { name: "Sofia Torres", email: "sofia@zelt.io", role: "Analyst", initials: "ST", joined: "Mar 2026", color: "#f59e0b" },
];

const roleColors: Record<string, { bg: string; color: string }> = {
  Owner:     { bg: "rgba(59,130,246,0.12)",  color: "#60a5fa" },
  Admin:     { bg: "rgba(139,92,246,0.12)",  color: "#a78bfa" },
  Developer: { bg: "rgba(6,182,212,0.12)",   color: "#22d3ee" },
  Analyst:   { bg: "rgba(245,158,11,0.12)",  color: "#fbbf24" },
};

export default async function TeamPage() {
  const t = await getTranslations("dashboard.settings.team");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "660px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
        <PageHeader title={t("title")} subtitle={t("subtitle")} />
        <button style={{ ...buttonStyle.primary, flexShrink: 0 }}>{t("inviteMember")}</button>
      </div>

      {/* Members */}
      <div style={{ background: colors.bgCard, border: `1px solid ${colors.border}`, borderRadius: radius.xl, overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 120px 110px 36px",
            gap: "12px",
            padding: "12px 20px",
            borderBottom: `1px solid ${colors.borderSubtle}`,
          }}
        >
          {[t("member"), t("role"), t("joined"), ""].map((h) => (
            <span
              key={h || "actions"}
              style={{ fontSize: fontSize.sm, fontWeight: 600, color: colors.textFaint, textTransform: "uppercase", letterSpacing: "0.06em" }}
            >
              {h}
            </span>
          ))}
        </div>

        {members.map((m, i) => (
          <div
            key={m.email}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 120px 110px 36px",
              gap: "12px",
              padding: "14px 20px",
              alignItems: "center",
              borderBottom: i < members.length - 1 ? `1px solid ${colors.bgCardHover}` : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: radius.circle,
                  background: `${m.color}22`,
                  border: `1px solid ${m.color}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: fontSize.sm,
                  fontWeight: 700,
                  color: m.color,
                  flexShrink: 0,
                }}
              >
                {m.initials}
              </div>
              <div>
                <p style={{ fontSize: fontSize.md, fontWeight: 500, color: colors.textPrimary, margin: 0 }}>{m.name}</p>
                <p style={{ fontSize: fontSize.sm, color: colors.textSubtle, margin: 0 }}>{m.email}</p>
              </div>
            </div>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: fontSize.sm,
                fontWeight: 500,
                background: roleColors[m.role].bg,
                color: roleColors[m.role].color,
                borderRadius: radius.full,
                padding: "3px 10px",
                width: "fit-content",
              }}
            >
              {m.role}
            </span>

            <span style={{ fontSize: fontSize.sm, color: colors.textSubtle }}>{m.joined}</span>

            <button
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.25)",
                cursor: m.role === "Owner" ? "default" : "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                opacity: m.role === "Owner" ? 0.3 : 1,
              }}
              disabled={m.role === "Owner"}
              aria-label={m.role !== "Owner" ? `Remove ${m.name}` : undefined}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Pending invites */}
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid ${colors.borderSubtle}`,
          borderRadius: radius.xl,
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div>
          <p style={{ fontSize: fontSize.md, fontWeight: 500, color: colors.textSecondary, margin: "0 0 2px" }}>
            {t("pendingInvites", { count: 1 })}
          </p>
          <p style={{ fontSize: fontSize.sm, color: colors.textFaint, margin: 0 }}>
            marcos@zelt.io · Developer · Sent 2 days ago
          </p>
        </div>
        <button style={buttonStyle.ghost}>{t("resend")}</button>
      </div>
    </div>
  );
}
